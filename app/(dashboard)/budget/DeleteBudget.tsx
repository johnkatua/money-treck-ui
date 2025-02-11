import CustomButton from "@/app/components/buttons/CustomButton";
import CustomDialog from "@/app/components/custom-dialog";
import { useDeleteBudget } from "@/app/hooks";
import React from "react";

const DeleteBudget = () => {
  const { isPending, mutate } = useDeleteBudget();
  return (
    <CustomDialog>
      <CustomButton
        text={isPending ? "Please Wait" : "Delete Budget"}
        type="submit"
        onClick={() => {}}
        disabled={isPending}
        className="w-full mt-2 bg-red-500 hover:bg-red-600 text-white p-3 rounded-md transition-all duration-300"
      />
    </CustomDialog>
  );
};

export default DeleteBudget;
