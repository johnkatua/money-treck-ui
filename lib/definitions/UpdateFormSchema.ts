import { z } from "zod";

export const UpdateFormSchema = z.object({
  name: z
    .string()
    // .min(3, { message: "Name should be atleast 3 characters" })
    // .max(50, { message: "Name should not be more than 50 characters" })
    .optional(),
  // .nonempty({ message: "Name is required" })
  // .trim(),
  email: z.string().optional(),
  // .email({ message: "Please enter a valid email" })
  // .nonempty({ message: "Email is required" })
  // .trim(),
  phoneNumber: z.string().optional(),
  // .min(11, { message: "Phone number should be atleast 11 characters" })
  // .max(11, { message: "Phone number should not be more than 11 characters" })
  // .nonempty({ message: "Phone number is required" })
  // .regex(/^[0-9]+$/, { message: "Phone number should contain only numbers" })
  // .trim(),
  currency: z.string().optional(),
  // .nonempty({ message: "Currency is required" }).trim(),
  avatar: z.instanceof(File).optional(),
});
