"use client";

import { useQuery } from "@tanstack/react-query";
import { getBudgets } from "../services/budget";
import { BUDGETS_QUERY_KEY } from "../constants";

export const useBudget = () => {
  return useQuery({
    queryKey: BUDGETS_QUERY_KEY,
    queryFn: getBudgets,
  });
};
