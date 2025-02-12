import CustomSheet from "@/app/components/custom-sheet";
import { useExpenditureStore } from "@/app/stores/use-expenditure";
import React from "react";
import EditExpenditureForm from "./EditExpenditureForm";

const EditExpenditure = () => {
  const { selectedExpenditure } = useExpenditureStore();
  return (
    <CustomSheet id={selectedExpenditure?._id || ""}>
      <EditExpenditureForm />
    </CustomSheet>
  );
};

export default EditExpenditure;
