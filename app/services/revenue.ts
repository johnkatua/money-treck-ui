"use server";

import { axiosInterceptorInstance } from "../api/axios-interceptor-instance";
import { Revenue } from "../types";

export const getRevenues = async (): Promise<Revenue[]> => {
  const { data } = await axiosInterceptorInstance.get("/revenues");
  console.log("revenue");

  // console.log({ data });

  // return data;
  // const data = [
  //   {
  //     name: "reokoe",
  //     amount: 44,
  //     period: "Daily",
  //     user_id: "reirie",
  //   },
  // ];
  return data;
};
