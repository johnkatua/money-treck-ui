import { createSession, deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";

export const logout = async () => {
  deleteSession();
  redirect("/login");
};

export const login = async (values) => {
  console.log(values);
  await createSession();
  redirect("/");
};
