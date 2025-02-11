"use client";

import CustomButton from "@/app/components/buttons/CustomButton";
import CustomDialog from "@/app/components/custom-dialog";
import { useDeleteRevenue } from "@/app/hooks";
import { useDialogStore, useRevenueStore } from "@/app/stores";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const DeleteRevenue = () => {
  const router = useRouter();
  const { selectedRevenue } = useRevenueStore();
  const { isPending, mutate } = useDeleteRevenue();
  const { closeDialog } = useDialogStore();

  const handleDelete = async () => {
    const id = selectedRevenue?._id;
    if (!id) {
      toast.error("Please select a revenue");
      closeDialog();
      return;
    }

    mutate(id, {
      onSuccess: () => {
        toast.success("Revenue deleted successfully");
        router.push("/revenue");
      },
      onError: (error: unknown) => {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("An unexpected error occurred");
        }
      },
      onSettled: () => closeDialog(),
    });
  };
  return (
    <CustomDialog>
      <CustomButton
        text={isPending ? "Please Wait" : "Delete Revenue"}
        type="submit"
        onClick={handleDelete}
        disabled={isPending}
        className="w-full mt-2 bg-red-500 hover:bg-red-600 text-white p-3 rounded-md transition-all duration-300"
      />
    </CustomDialog>
  );
};

export default DeleteRevenue;
