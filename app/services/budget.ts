import { axiosInterceptorInstance } from "../api/axios-interceptor-instance";
import { IBudget, IBudgetResponse } from "../types/Budget";

export const getBudgets = async () => {
  try {
    const response = await axiosInterceptorInstance.get("/budgets");
    const extractedData: IBudgetResponse[] = response?.data?.data?.data || [];

    const updatedData: IBudget[] = extractedData.map((budget, idx) => ({
      id: idx + 1,
      ...budget,
    }));

    console.debug("Budgets successfully fetched and transformed:", updatedData);

    return updatedData;
  } catch (error) {
    console.error(
      "Error occurred while fetching budgets:",
      error instanceof Error ? error.message : error
    );
    throw new Error("Failed to fetch budgets. Please try again later.");
  }
};
