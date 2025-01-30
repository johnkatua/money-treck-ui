"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { REVENEUS_QUERY_KEY } from "../constants";
import { createRevenue, getRevenues } from "../services";

export const useRevenues = () => {
  return useQuery({
    queryKey: REVENEUS_QUERY_KEY,
    queryFn: getRevenues,
  });
};

export const useCreateRevenue = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createRevenue,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: REVENEUS_QUERY_KEY,
      }),
  });
};
