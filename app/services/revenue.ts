"use server";

import { axiosInterceptorInstance } from "../api/axios-interceptor-instance";
import { IData, Revenue } from "../types";

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
