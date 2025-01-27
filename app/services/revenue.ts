"use server";

import { axiosInterceptorInstance } from "../api/axios-interceptor-instance";
import { Revenue } from "../types";

export const getRevenues = async (): Promise<Revenue[]> => {
  const { data } = await axiosInterceptorInstance.get("/revenues");

  return data.data;
};
