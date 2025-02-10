"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { EXPENSES_QUERY_KEY } from "../constants";
import {
  createExpense,
  deleteExpense,
  getExpenses,
  updateExpense,
} from "../services";

export const useExpense = () => {
  return useQuery({
    queryKey: EXPENSES_QUERY_KEY,
    queryFn: getExpenses,
  });
};

export const useCreateExpense = () => {
  return useMutation({
    mutationFn: createExpense,
  });
};

export const useUpdateExpense = () => {
  return useMutation({
    mutationFn: updateExpense,
  });
};

export const useDeleteExpense = () => {
  return useMutation({
    mutationFn: deleteExpense,
  });
};
