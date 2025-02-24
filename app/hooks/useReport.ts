import { useQuery } from "@tanstack/react-query";
import { getFinancialOverview } from "../services";

export const useGetFinancialOverview = () => {
  return useQuery({
    queryKey: [],
    queryFn: getFinancialOverview,
  });
};
