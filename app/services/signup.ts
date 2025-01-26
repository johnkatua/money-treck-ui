import { axiosInterceptorInstance } from "../api/axios-interceptor-instance";
import { IUser } from "../types";

export const signup = async (): Promise<IUser> => {
  const { data } = await axiosInterceptorInstance.post("/users/register");

  return data;
};
