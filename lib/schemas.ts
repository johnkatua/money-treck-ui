import { z } from "zod";

export const signupFormSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string(),
  password: z.string().min(6),
});

export const signinFormSchema = z.object({
  email: z.string(),
  password: z.string().min(6),
});
