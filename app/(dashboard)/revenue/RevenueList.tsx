"use client";

import CustomSheet from "@/app/components/custom-sheet";
import TableWrapper from "@/app/components/table-wrapper";
import { useRevenues } from "@/app/hooks";
import { useSheet } from "@/app/stores";
import { revenueColumns } from "@/lib/table-columns";

const RevenueList = () => {
  const openSheetId = useSheet((state) => state.openSheetId);
  // conso;
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
      {openSheetId && (
        <CustomSheet id={openSheetId}>
          <div>Hello</div>
        </CustomSheet>
      )}
    </>
  );
};

export default RevenueList;
