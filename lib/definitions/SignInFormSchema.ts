import { z } from "zod";

export const SignInFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }).trim(),
  password: z
    .string()
    .min(8, {
      message: "Be atleast 8 characters long.",
    })
    .regex(/[a-zA-Z]/, { message: "Contain atleast one character" })
    .regex(/[0-9]/, { message: "Contain atleast one number" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain atleast one special character",
    })
    .trim(),
});
