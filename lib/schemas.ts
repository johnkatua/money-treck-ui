import { z } from "zod";

export const signupFormSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string(),
  password: z.string(),
});
