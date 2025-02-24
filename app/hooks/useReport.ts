import { useQuery } from "@tanstack/react-query";
import {
  getBudgetAndExpenditureUtilization,
  getFinancialOverview,
} from "../services";
import { FINANCIAL_OVERVIEW_QUERY_KEY } from "../constants";

export const useGetFinancialOverview = () => {
  return useQuery({
    queryKey: [FINANCIAL_OVERVIEW_QUERY_KEY],
    queryFn: getFinancialOverview,
  });
};

export const useBudgetUtilization = () => {
  return useQuery({
    queryKey: [],
    queryFn: getBudgetAndExpenditureUtilization,
  });
};
