import { z } from "zod";

export const RevenueFormSchema = z.object({
  name: z.string().trim(),
  amount: z
    .number()
    .min(10, {
      message: "Be atleast 10 shillings",
    })
    .max(100, {
      message: "Amount should not exceed ksh. 100",
    }),
  period: z.string().trim(),
});
