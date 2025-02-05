import { axiosInterceptorInstance } from "../api/axios-interceptor-instance";

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
