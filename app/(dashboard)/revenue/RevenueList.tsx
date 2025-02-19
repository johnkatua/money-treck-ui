"use client";

import TableWrapper from "@/app/components/table-wrapper";
import { useRevenues } from "@/app/hooks";
import { revenueColumns } from "@/lib/table-columns";
import DeleteRevenue from "./DeleteRevenue";
import EditRevenue from "./EditRevenue";

const RevenueList = () => {
  const { data, isPending, isFetching, isLoading, isError, error } =
    useRevenues(1, 5);

  if (isError && data?.updatedData && data?.updatedData.length < 0)
    return <div>Error: {error.message}</div>;

  return (
    <>
      <TableWrapper
        data={data?.updatedData ?? []}
        columns={revenueColumns}
        isLoading={isFetching || isPending || isLoading}
        rowCount={data?.total}
      />
      <EditRevenue />
      <DeleteRevenue />
    </>
  );
};

export default RevenueList;
