import { REVENEUS_QUERY_KEY } from "@/app/constants";
import { getRevenues } from "@/app/services";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";
import RevenueList from "./RevenueList";

const RevenueListWrapper = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: REVENEUS_QUERY_KEY,
    queryFn: getRevenues,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <RevenueList />
    </HydrationBoundary>
  );
};

export default RevenueListWrapper;
