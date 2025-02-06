import { revalidatePath } from "next/cache";
import { axiosInterceptorInstance } from "../api/axios-interceptor-instance";
import { IUser } from "../types";

export const getUser = async () => {
  try {
    const response = await axiosInterceptorInstance.get("/users/me");

    return response.data.data.data;
  } catch (error) {
    console.error(
      "Error occurred while fetching user:",
      error instanceof Error ? error.message : error
    );
    throw new Error("Failed to fetch user. Please try again later.");
  }
};

export const updateUser = async (values: IUser) => {
  try {
    const response = await axiosInterceptorInstance.put("/users", {
      ...values,
    });

    return response.data.data.data;
  } catch (error) {
    console.error(
      "Error occurred while updating user:",
      error instanceof Error ? error.message : error
    );
    throw new Error("Failed to update user. Please try again later.");
  } finally {
    revalidatePath("/settings");
  }
};
