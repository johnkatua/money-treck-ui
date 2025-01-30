"use server";

import { axiosInterceptorInstance } from "../api/axios-interceptor-instance";
import { IData, IRevenueRequest, Revenue } from "../types";

export const getRevenues = async (): Promise<Revenue[]> => {
  try {
    const response = await axiosInterceptorInstance.get("/revenues");
    const extractedData: IData[] = response.data?.data?.data || [];

    const updatedData: Revenue[] = extractedData.map((revenue, index) => ({
      id: index + 1,
      ...revenue,
    }));

    return updatedData;
  } catch (error: unknown) {
    console.error(
      "Error occurred while fetching revenues:",
      error instanceof Error ? error.message : error
    );
    throw new Error("Failed to fetch revenues. Please try again later.");
  }
};

export const createRevenue = async (values: IRevenueRequest) => {
  try {
    const { name, amount, period } = values;
    const response = await axiosInterceptorInstance.post("revenues", {
      name,
      amount,
      period,
    });
  } catch (error) {
    console.error(
      "Error occurred while creating revenue:",
      error instanceof Error ? error.message : error
    );
    throw new Error("Failed to create revenue. Please try again later.");
  }
};
