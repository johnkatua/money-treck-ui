// "use client";

import { usePaginationStore } from "@/app/stores/use-pagination";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { FC, ReactNode } from "react";

interface ITableListWrapper {
  queryKey: [string, number, number];
  queryFn: () => void;
  children: ReactNode;
}

const TableListWrapper: FC<ITableListWrapper> = async ({
  queryKey,
  queryFn,
  children,
}) => {
  const queryClient = new QueryClient();
  // const { pageIndex, pageSize } = usePaginationStore();
  // console.log("page", pageIndex, pageSize);
  await queryClient.prefetchQuery({
    queryKey: queryKey,
    queryFn: queryFn,
    // queryKey: [queryKey, pageIndex, pageSize],
    // queryFn: () => queryFn(pageIndex, pageSize),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};

export default TableListWrapper;
