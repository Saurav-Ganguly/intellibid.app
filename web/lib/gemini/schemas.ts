import { z } from "zod";

export const onboardingPreviewSchema = z.object({
  firmName: z.string().default(""),
  summary: z.string().default(""),
  services: z.array(z.string()).default([]),
  locations: z.array(z.string()).default([]),
  categories: z.array(z.string()).default([]),
});

export type OnboardingPreview = z.infer<typeof onboardingPreviewSchema>;
