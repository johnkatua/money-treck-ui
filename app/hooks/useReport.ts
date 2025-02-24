"use-client";

import { useQuery } from "@tanstack/react-query";
import {
  BUDGET_UTILIZATION_QUERY_KEY,
  FINANCIAL_OVERVIEW_QUERY_KEY,
} from "../constants";
import {
  getBudgetAndExpenditureUtilization,
  getFinancialOverview,
} from "../services";

export const useGetFinancialOverview = () => {
  return useQuery({
    queryKey: [FINANCIAL_OVERVIEW_QUERY_KEY],
    queryFn: getFinancialOverview,
  });
};

export const useBudgetUtilization = () => {
  return useQuery({
    queryKey: [BUDGET_UTILIZATION_QUERY_KEY],
    queryFn: getBudgetAndExpenditureUtilization,
  });
};
