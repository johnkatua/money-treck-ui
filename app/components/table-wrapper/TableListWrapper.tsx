import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { FC, ReactNode } from "react";

interface ITableListWrapper {
  queryKey: string[];
  queryFn: () => void;
  children: ReactNode;
}

const TableListWrapper: FC<ITableListWrapper> = async ({
  queryKey,
  queryFn,
  children,
}) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey,
    queryFn,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};

export default TableListWrapper;
