import { createSession } from "@/lib/session";
import { axiosInterceptorInstance } from "../api/axios-interceptor-instance";
import { redirect } from "next/navigation";

export const signin = async (values) => {
  const { email, password } = values;
  const { data } = await axiosInterceptorInstance.post("/users/login", {
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
