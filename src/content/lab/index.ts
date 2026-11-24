import type { LabEntry } from "../types";
import { marketingWorkflow } from "./marketing-workflow";

/** Newest first. To add an entry, create a file and add it here. */
export const LAB: LabEntry[] = [marketingWorkflow];

export function labBySlug(slug: string | undefined) {
  return LAB.find((e) => e.slug === slug);
}
