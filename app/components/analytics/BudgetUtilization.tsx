"use client";

import { useBudgetUtilization } from "@/app/hooks";
import React from "react";
import TableWrapper from "../table-wrapper";
import { budgetUtilizationColumns } from "@/lib/table-columns";

const BudgetUtilization = () => {
  const { data, isLoading } = useBudgetUtilization();
  console.log({ data });
  return (
    <TableWrapper
      data={data}
      columns={budgetUtilizationColumns}
      isLoading={isLoading}
    />
  );
};

export default BudgetUtilization;
