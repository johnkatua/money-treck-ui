"use client";

import TableWrapper from "@/app/components/table-wrapper";
import { useBudget } from "@/app/hooks/useBudget";
import { budgetColumns } from "@/lib/table-columns";
import DeleteBudget from "./DeleteBudget";
import EditBudget from "./EditBudget";
import { usePaginationStore } from "@/app/stores/use-pagination";

const BudgetList = () => {
  const { pageIndex, pageSize } = usePaginationStore();
  const { data, isPending, isFetching, isLoading, isError, error } = useBudget(
    pageIndex,
    pageSize,
  );

  if (isError && data?.updatedData && data?.updatedData.length < 0)
    return <div>Error: {error.message}</div>;

  return (
    <>
      <TableWrapper
        data={data?.updatedData ?? []}
        columns={budgetColumns}
        isLoading={isFetching || isPending || isLoading}
        rowCount={data?.total}
      />
      <EditBudget />
      <DeleteBudget />
    </>
  );
};

export default BudgetList;
