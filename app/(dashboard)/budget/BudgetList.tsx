"use client";

import TableWrapper from "@/app/components/table-wrapper";
import { useBudget } from "@/app/hooks/useBudget";
import { budgetColumns } from "@/lib/table-columns";

const BudgetList = () => {
  const { data, isPending, isFetching, isLoading, isError, error } =
    useBudget();

  if (isError && data && data?.length < 0)
    return <div>Error: {error.message}</div>;

  return (
    <TableWrapper
      data={data}
      columns={budgetColumns}
      isLoading={isFetching || isPending || isLoading}
    />
  );
};

export default BudgetList;
