"use client";

import TableWrapper from "@/app/components/table-wrapper";
import { useRevenues } from "@/app/hooks";
import { revenueColumns } from "@/lib/table-columns";
import DeleteRevenue from "./DeleteRevenue";
import EditRevenue from "./EditRevenue";

const RevenueList = () => {
  const { data, isPending, isFetching, isLoading, isError, error } =
    useRevenues();

  if (isError && data && data?.length < 0)
    return <div>Error: {error.message}</div>;

  return (
    <>
      <TableWrapper
        data={data ?? []}
        columns={revenueColumns}
        isLoading={isFetching || isPending || isLoading}
      />
      <EditRevenue />
      <DeleteRevenue />
    </>
  );
};

export default RevenueList;
