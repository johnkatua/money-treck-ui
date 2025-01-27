"use client";

import TableWrapper from "@/app/components/table-wrapper";
import { REVENEUS_QUERY_KEY } from "@/app/constants";
import { useRevenues } from "@/app/hooks";
import { getRevenues } from "@/app/services";
import { Revenue, revenueColumns } from "@/lib/table-columns";

const revenueData: Revenue[] = [
  { id: "1", name: "Product A", amount: 12345 },
  { id: "2", name: "Product B", amount: 67890 },
  { id: "3", name: "Product C", amount: 23456 },
  { id: "4", name: "Product D", amount: 78901 },
  { id: "5", name: "Product E", amount: 34567 },
  { id: "6", name: "Product F", amount: 89012 },
  { id: "7", name: "Product G", amount: 45678 },
  { id: "8", name: "Product H", amount: 90123 },
  { id: "9", name: "Product I", amount: 56789 },
  { id: "10", name: "Product J", amount: 12345 },
];

const RevenueList = () => {
  const { data, isPending, isFetching, isFetched, isLoading, isError, error } =
    useRevenues();

  if (isLoading) return <div>Loading...</div>;
  if (isError && data && data?.length < 0)
    return <div>Error: {error.message}</div>;

  return <TableWrapper data={data} columns={revenueColumns} />;
};

export default RevenueList;
