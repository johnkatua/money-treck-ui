import { axiosInterceptorInstance } from "../api/axios-interceptor-instance";
import { IFinancialOverview } from "../types/Report";

export const getFinancialOverview = async (): Promise<IFinancialOverview> => {
  try {
    const response = await axiosInterceptorInstance.get(
      "/reports/financial-overview"
    );
    const data = response.data.data.data || {};

    return data;
  } catch (error) {
    console.error(
      "Error occurred while fetching financial overview:",
      error instanceof Error ? error?.message : error
    );
    throw new Error("Failed to fetch financial data. Please try again later");
  }
};
