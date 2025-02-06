import { z } from "zod";

export const UpdateFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name should be atleast 3 characters" })
    .max(50, { message: "Name should not be more than 50 characters" })
    .nonempty({ message: "Name is required" })
    .trim(),
  email: z
    .string()
    .email({ message: "Please enter a valid email" })
    .nonempty({ message: "Email is required" })
    .trim(),
  phoneNumber: z
    .string()
    .min(11, { message: "Phone number should be atleast 11 characters" })
    .max(11, { message: "Phone number should not be more than 11 characters" })
    .nonempty({ message: "Phone number is required" })
    .regex(/^[0-9]+$/, { message: "Phone number should contain only numbers" })
    .trim(),
  currency: z.string().nonempty({ message: "Currency is required" }).trim(),
  avatar: z.string().optional(),
});
