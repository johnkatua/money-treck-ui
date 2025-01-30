"use client";

import { useQuery } from "@tanstack/react-query";
import { EXPENSES_QUERY_KEY } from "../constants";
import { getExpenses } from "../services/expenditure";

export const useExpense = () => {
  return useQuery({
    queryKey: EXPENSES_QUERY_KEY,
    queryFn: getExpenses,
  });
};
