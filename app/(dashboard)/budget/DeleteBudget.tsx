import CustomButton from "@/app/components/buttons/CustomButton";
import CustomDialog from "@/app/components/custom-dialog";
import { useDeleteBudget } from "@/app/hooks";
import { useDialogStore } from "@/app/stores";
import { useBudgetStore } from "@/app/stores/use-budget";
import React from "react";
import toast from "react-hot-toast";

const DeleteBudget = () => {
  const { selectedBudget } = useBudgetStore();
  const { isPending, mutate } = useDeleteBudget();
  const { closeDialog } = useDialogStore();

  const handleDelete = async () => {
    const id = selectedBudget?._id;
    if (!id) {
      toast.error("Please select a budget");
      closeDialog();
      return;
    }

    mutate(id, {
      onSuccess: () => {
        toast.success("Budget deleted successfully");
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
    <CustomDialog
      description={`
          This action cannot be undone. This will permanently delete the
            Budget and remove the data from our servers.
        `}
    >
      <CustomButton
        text={isPending ? "Please Wait" : "Delete Budget"}
        type="submit"
        onClick={handleDelete}
        disabled={isPending}
        className="w-full mt-2 bg-red-500 hover:bg-red-600 text-white p-3 rounded-md transition-all duration-300"
      />
    </CustomDialog>
  );
};

export default DeleteBudget;
