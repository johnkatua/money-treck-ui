import { axiosInterceptorInstance } from "../api/axios-interceptor-instance";
import { IExpenditure, IExpenditureResponse } from "../types";

export const getExpenses = async () => {
  try {
    const response = await axiosInterceptorInstance.get("/expenses");
    const extractedData: IExpenditureResponse[] =
      response?.data?.data?.data || [];

    const updatedData: IExpenditure[] = extractedData.map((expense, idx) => ({
      id: idx + 1,
      ...expense,
    }));

    return updatedData;
  } catch (error) {
    console.error(
      "Error occurred while fetching expenses:",
      error instanceof Error ? error.message : error
    );
    throw new Error("Failed to fetch expenses. Please try again later.");
  }
};
