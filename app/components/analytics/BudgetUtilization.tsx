"use client";

import { useBudgetUtilization } from "@/app/hooks";
import React from "react";

const BudgetUtilization = () => {
  const { data } = useBudgetUtilization();
  console.log({ data });
  return <div>BudgetUtilization</div>;
};

export default BudgetUtilization;
