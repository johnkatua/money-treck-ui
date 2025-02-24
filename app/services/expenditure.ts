"use server";

import { revalidatePath } from "next/cache";
import { logout } from "../actions/auth";
import { axiosInterceptorInstance } from "../api/axios-interceptor-instance";
import {
  IExpenditure,
  IExpenditureMetadata,
  IExpenditureRequest,
  IExpenditureResponse,
} from "../types";

export const getExpenses = async (): Promise<
  IExpenditureMetadata | undefined
> => {
  try {
    const response = await axiosInterceptorInstance.get("/expenses");
    const extractedData: IExpenditureResponse[] = response?.data?.data || [];

    const metaData = response?.data;

    const updatedData: IExpenditure[] = extractedData.map((expense, idx) => {
      return {
        id: idx + 1,
        ...expense,
      };
    });

    return {
      updatedData,
      total: metaData?.total || 0,
      page: metaData?.page || 0,
      limit: metaData?.page || 0,
    };
  } catch (error) {
    const err = error instanceof Error ? error.message : error;
    if (err === "Request failed with status code 401") {
      console.log("here", err);
      await logout();
    }
    console.error(
      "Error occurred while fetching expenses:",
      error instanceof Error ? error.message : error,
    );
    throw new Error("Failed to fetch expenses. Please try again later.");
  }
};

export const createExpense = async (values: IExpenditureRequest) => {
  try {
    const { name, amount, budget_id } = values;
    await axiosInterceptorInstance.post("/expenses", {
      name,
      amount,
      budget_id,
    });
  } catch (error) {
    console.error(
      "Error occurred while creating budget:",
      error instanceof Error ? error.message : error,
    );
    throw new Error("Failed to create budget. Please try again later.");
  } finally {
    revalidatePath("/expenditure");
  }
};

export const updateExpense = async (values: IExpenditureRequest) => {
  try {
    await axiosInterceptorInstance.put("/expenses", { ...values });
  } catch (error) {
    console.error(
      "Error occurred while updating expenditure:",
      error instanceof Error ? error.message : error,
    );
    throw new Error("Failed to update expenditure. Please try again later.");
  } finally {
    revalidatePath("/expenditure");
  }
};

export const deleteExpense = async (id: string) => {
  try {
    await axiosInterceptorInstance.delete(`/expenses/${id}`);
  } catch (error) {
    console.error(
      "Error occurred while deleting expenditure:",
      error instanceof Error ? error.message : error,
    );
    throw new Error("Failed to delete expenditure. Please try again later.");
  } finally {
    revalidatePath("/expenditure");
  }
};
