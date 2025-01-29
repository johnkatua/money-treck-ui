"use server";

import { SignInFormSchema } from "@/lib/definitions/SignInFormSchema";
import { createSession, deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { z } from "zod";

export const logout = async () => {
  await deleteSession();
  redirect("/login");
};

export const login = async (values: z.infer<typeof SignInFormSchema>) => {
  await createSession("itoeo");
  redirect("/");
};
