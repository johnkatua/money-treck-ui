"use client";

import CustomDialog from "@/app/components/custom-dialog";
import CustomSheet from "@/app/components/custom-sheet";
import TableWrapper from "@/app/components/table-wrapper";
import { useRevenues } from "@/app/hooks";
import { useRevenueStore, useSheet } from "@/app/stores";
import { revenueColumns } from "@/lib/table-columns";
import { useEffect } from "react";

const RevenueList = () => {
  const openSheetId = useSheet((state) => state.openSheetId);
  const selectedRevenueId = useRevenueStore((state) => state.selectedRevenueId);
  const switchSheetState = useSheet((state) => state.switchSheetState);
  // conso;
  console.log({ selectedRevenueId });

  useEffect(() => {
    if (selectedRevenueId) {
      switchSheetState(selectedRevenueId);
    }
  }, [selectedRevenueId]);
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
      {selectedRevenueId && (
        <CustomSheet id={selectedRevenueId}>
          <div>Hello</div>
        </CustomSheet>
      )}
      <CustomDialog />
    </>
  );
};

export default RevenueList;
