"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { REVENEUS_QUERY_KEY } from "../constants";
import {
  createRevenue,
  deleteRevenue,
  getRevenues,
  updateRevenue,
} from "../services";

export const useRevenues = (page: number, limit: number) => {
  return useQuery({
    queryKey: [REVENEUS_QUERY_KEY, page, limit],
    queryFn: ({ queryKey }) => getRevenues(queryKey[1], queryKey[2]),
  });
};

export const useCreateRevenue = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createRevenue,
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: REVENEUS_QUERY_KEY,
      });
    },
  });
};

export const useUpdateRevenue = () => {
  return useMutation({
    mutationFn: updateRevenue,
  });
};

export const useDeleteRevenue = () => {
  return useMutation({
    mutationFn: deleteRevenue,
  });
};
