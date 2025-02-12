"use client";

import TableWrapper from "@/app/components/table-wrapper";
import { useExpense } from "@/app/hooks/useExpense";
import { expenseColumns } from "@/lib/table-columns";
import EditExpenditure from "./EditExpenditure";
import DeleteExpenditure from "./DeleteExpenditure";

const ExpenditureList = () => {
  const { data, isPending, isFetching, isLoading, isError, error } =
    useExpense();

  if (isError && data && data?.length < 0)
    return <div>Error: {error.message}</div>;

  return (
    <>
      <TableWrapper
        data={data}
        columns={expenseColumns}
        isLoading={isFetching || isPending || isLoading}
      />
      <EditExpenditure />
      <DeleteExpenditure />
    </>
  );
};

export default ExpenditureList;
