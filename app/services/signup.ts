"use server";

import { createSession } from "@/lib/session";
import { axiosInterceptorInstance } from "../api/axios-interceptor-instance";
import { IUser, IUserResponse } from "../types";
import { redirect } from "next/navigation";

export const signup = async (values: IUser): Promise<IUserResponse> => {
  const { name, email, password } = values;
  const { data } = await axiosInterceptorInstance.post("/users/register", {
    name,
    email,
    password,
  });

  if (data) {
    const { token } = data;
    await createSession(token);
    redirect("/");
  }

  return data;
};
