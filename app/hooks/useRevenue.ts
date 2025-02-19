"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { REVENEUS_QUERY_KEY } from "../constants";
import {
  createRevenue,
  deleteRevenue,
  getRevenues,
  updateRevenue,
} from "../services";

export const useRevenues = () => {
  return useQuery({
    queryKey: REVENEUS_QUERY_KEY,
    queryFn: () => getRevenues(1, 5),
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
