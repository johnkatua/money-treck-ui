"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createBudget,
  deleteBudget,
  getBudgets,
  updateBudget,
} from "../services";
import { BUDGETS_QUERY_KEY } from "../constants";

export const useBudget = () => {
  return useQuery({
    queryKey: BUDGETS_QUERY_KEY,
    queryFn: getBudgets,
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
