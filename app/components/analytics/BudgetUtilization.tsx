"use client";

import { useBudgetUtilization } from "@/app/hooks";
import { budgetUtilizationColumns } from "@/lib/table-columns";
import TableWrapper from "../table-wrapper";

const BudgetUtilization = () => {
  const { data, isLoading } = useBudgetUtilization();
  return (
    <>
      <h2 className="text-xl font-semibold tracking-wide mt-8">
        Budget Utilization
      </h2>
      <TableWrapper
        data={data}
        columns={budgetUtilizationColumns}
        isLoading={isLoading}
      />
    </>
  );
};

export default BudgetUtilization;
