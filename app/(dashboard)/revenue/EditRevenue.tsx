import CustomSheet from "@/app/components/custom-sheet";
import React from "react";
import EditRevenueForm from "./EditRevenueForm";
import { useRevenueStore } from "@/app/stores";

const EditRevenue = () => {
  const { selectedRevenue } = useRevenueStore();
  return (
    <CustomSheet id={selectedRevenue?._id || ""}>
      <EditRevenueForm />
    </CustomSheet>
  );
};

export default EditRevenue;
