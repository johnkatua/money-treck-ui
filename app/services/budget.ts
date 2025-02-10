"use server";

import { revalidatePath } from "next/cache";
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
  try {
    const { name, amount, period } = values;
    await axiosInterceptorInstance.post("/budgets", {
      name,
      amount,
      period,
    });
  } catch (error) {
    console.error(
      "Error occurred while creating budget:",
      error instanceof Error ? error.message : error
    );
    throw new Error("Failed to create budget. Please try again later.");
  } finally {
    revalidatePath("/budget");
  }
};

export const updateBudget = async (values: IBudgetResponse) => {
  try {
    await axiosInterceptorInstance.put("/budgets", {
      ...values,
    });
  } catch (error) {
    console.error(
      "Error occurred while update budget:",
      error instanceof Error ? error.message : error
    );
    throw new Error("Failed to update budget. Please try again later.");
  } finally {
    revalidatePath("/budget");
  }
};
