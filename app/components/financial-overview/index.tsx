import { useGetFinancialOverview } from "@/app/hooks";
import React from "react";

const FinancialOverview = () => {
  const { data } = useGetFinancialOverview();
  console.log({ data });
  return <div>FinancialOverview</div>;
};

export default FinancialOverview;
