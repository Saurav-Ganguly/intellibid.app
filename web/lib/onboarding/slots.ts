export const DOCUMENT_SLOTS = [
  "statutory_tax",
  "audited_financials",
  "work_experience",
  "certifications_oem",
  "team_infra",
  "company_profile",
  "other",
] as const;

export type DocumentSlot = (typeof DOCUMENT_SLOTS)[number];
