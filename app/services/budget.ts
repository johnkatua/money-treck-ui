"use server";

import { axiosInterceptorInstance } from "../api/axios-interceptor-instance";
import { IBudget, IBudgetResponse } from "../types";

export const getBudgets = async () => {
  try {
    const response = await axiosInterceptorInstance.get("/budgets");
    const extractedData: IBudgetResponse[] = response?.data?.data?.data || [];

    const updatedData: IBudget[] = extractedData.map((budget, idx) => ({
      id: idx + 1,
      ...budget,
    }));

    return updatedData;
  } catch (error) {
    console.error(
      "Error occurred while fetching budgets:",
      error instanceof Error ? error.message : error
    );
    throw new Error("Failed to fetch budgets. Please try again later.");
  }
};

export const createBudget = async (values: IBudgetResponse) => {
  console.log(values);
  try {
    const { name, amount, period } = values;
    await axiosInterceptorInstance.post("/revenues", {
      name,
      amount,
      period,
    });
  } catch (error) {
    console.log("Err::", error);
    console.error(
      "Error occurred while creating budget:",
      error instanceof Error ? error.message : error
    );
    throw new Error("Failed to create budget. Please try again later.");
  }
};
