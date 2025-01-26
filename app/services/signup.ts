import { axiosInterceptorInstance } from "../api/axios-interceptor-instance";
import { IUser, IUserResponse } from "../types";

export const signup = async (values: IUser): Promise<IUserResponse> => {
  const { data } = await axiosInterceptorInstance.post(
    "/users/register",
    values
  );

  return data;
};
