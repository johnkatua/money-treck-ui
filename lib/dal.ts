import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { cache } from "react";
import "server-only";

export const verifySession = cache(async () => {
  const cookie = (await cookies()).get("session")?.value;

  if (!cookie) {
    redirect("/login");
  }

  return {
    isAuth: true,
    cookie,
  };
});
