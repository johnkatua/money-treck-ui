import { useQuery } from "@tanstack/react-query";
import {
  getBudgetAndExpenditureUtilization,
  getFinancialOverview,
} from "../services";
import {
  BUDGET_UTILIZATION_QUERY_KEY,
  FINANCIAL_OVERVIEW_QUERY_KEY,
} from "../constants";

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
