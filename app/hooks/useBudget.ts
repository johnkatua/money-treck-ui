"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { BUDGETS_QUERY_KEY } from "../constants";
import {
  createBudget,
  deleteBudget,
  getBudgets,
  updateBudget,
} from "../services";

export const useBudget = (page: number, limit: number) => {
  return useQuery({
    queryKey: [BUDGETS_QUERY_KEY, page, limit],
    queryFn: () => getBudgets(page, limit),
    placeholderData: keepPreviousData,
  });
};

export const useCreateBudget = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createBudget,
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: BUDGETS_QUERY_KEY,
      });
    },
  });
};

export const useUpdateBudget = () => {
  return useMutation({
    mutationFn: updateBudget,
  });
};

export const useDeleteBudget = () => {
  return useMutation({
    mutationFn: deleteBudget,
  });
};
