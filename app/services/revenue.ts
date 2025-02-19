"use server";

import { revalidatePath } from "next/cache";
import { axiosInterceptorInstance } from "../api/axios-interceptor-instance";
import { IData, IRevenue, IRevenueRequest, Revenue } from "../types";

export const getRevenues = async (): Promise<IRevenue> => {
  try {
    const response = await axiosInterceptorInstance.get("/revenues");
    const extractedData: IData[] = response.data?.data || [];
    const metaData = response?.data;

    const updatedData: Revenue[] = extractedData.map((revenue, index) => ({
      id: index + 1,
      ...revenue,
    }));

    return {
      updatedData,
      total: metaData?.total || 0,
      page: metaData?.page || 0,
      limit: metaData?.page || 0,
    };
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
    await axiosInterceptorInstance.post("/revenues", { name, amount, period });
  } catch (error) {
    console.error(
      "Error occurred while creating revenue:",
      error instanceof Error ? error.message : error
    );
    throw new Error("Failed to create revenue. Please try again later.");
  } finally {
    revalidatePath("/revenue");
  }
};

export const updateRevenue = async (values: IRevenueRequest) => {
  try {
    await axiosInterceptorInstance.put("/revenues", { ...values });
  } catch (error) {
    console.error(
      "Error occurred while updating revenue:",
      error instanceof Error ? error.message : error
    );
    throw new Error("Failed to update revenue. Please try again later.");
  } finally {
    revalidatePath("/revenue");
  }
};

export const deleteRevenue = async (id: string) => {
  try {
    await axiosInterceptorInstance.delete(`/revenues/${id}`);
  } catch (error) {
    console.error(
      "Error occurred while deleting revenue:",
      error instanceof Error ? error.message : error
    );
    throw new Error("Failed to delete revenue. Please try again later.");
  } finally {
    revalidatePath("/revenue");
  }
};
