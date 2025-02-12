import { z } from "zod";

export const ExpenditureFormSchema = z.object({
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
    .max(100, {
      message: "Amount should not exceed ksh. 100",
    })
    .or(z.string().transform((val) => Number(val))), // Handle string inputs and convert to number
  budget_id: z.string().min(1, {
    message: "Budget is Required",
  }),
});
