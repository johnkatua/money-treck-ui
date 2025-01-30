import { z } from "zod";

export const RevenueFormSchema = z.object({
  name: z.string(),
});
