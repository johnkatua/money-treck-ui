"use client";

import CustomButton from "@/app/components/buttons/CustomButton";
import CustomDialog from "@/app/components/custom-dialog";
import TableWrapper from "@/app/components/table-wrapper";
import { useRevenues } from "@/app/hooks";
import { revenueColumns } from "@/lib/table-columns";
import DeleteRevenue from "./DeleteRevenue";
import CustomSheet from "@/app/components/custom-sheet";
import { useRevenueStore } from "@/app/stores";

const RevenueList = () => {
  const { selectedRevenue } = useRevenueStore();
  const { data, isPending, isFetching, isLoading, isError, error } =
    useRevenues();

  if (isError && data && data?.length < 0)
    return <div>Error: {error.message}</div>;

  return (
    <>
      <TableWrapper
        data={data}
        columns={revenueColumns}
        isLoading={isFetching || isPending || isLoading}
      />
      <CustomSheet id={selectedRevenue?._id || ""}>
        <div>Update Revenue - {selectedRevenue?._id}</div>
      </CustomSheet>
      <DeleteRevenue />
    </>
  );
};

export default RevenueList;
