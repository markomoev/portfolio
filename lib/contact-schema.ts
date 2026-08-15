import { z } from "zod";

export const budgetValues = [
  "under-1000",
  "1000-2500",
  "2500-5000",
  "over-5000",
  "unknown",
] as const;

export const businessTypeValues = [
  "clinic",
  "shop",
  "salon",
  "restaurant",
  "services",
  "other",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(1, "name"),
  email: z.string().trim().email("email"),
  phone: z.string().trim().optional(),
  businessType: z.enum(businessTypeValues, { message: "businessType" }),
  budget: z.enum(budgetValues, { message: "budget" }),
  message: z.string().trim().min(1, "message"),
  consent: z.literal(true, { message: "consent" }),
  website: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
