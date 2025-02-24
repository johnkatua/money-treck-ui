import { z } from "zod";

export const RevenueFormSchema = z.object({
  _id: z.string().optional(),
  name: z
    .string()
    .min(1, {
      message: "Name is required",
    })
    .trim(),
  amount: z
    .number()
    .min(10, {
      message: "Amount must be atleast Ksh. 10",
    })
    .or(z.string().transform((val) => Number(val))), // Handle string inputs and convert to number
  period: z.enum(["daily", "weekly", "monthly", "yearly"], {
    message: "Period must be either 'daily', 'weekly', 'monthly', or 'yearly'",
  }),
});
