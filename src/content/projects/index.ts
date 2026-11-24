import type { Category, EarlierWork, Project } from "../types";
import { presidential } from "./presidential";
import { cyclewithtayo } from "./cyclewithtayo";
import { fazzyD } from "./fazzy-d";

/** Order here is the order on the Work page. To add a project, create a file and add it to this list. */
export const PROJECTS: Project[] = [presidential, cyclewithtayo, fazzyD];

export const CATEGORIES: Category[] = ["Growth Marketing", "Social Media", "Content Strategy", "Campaigns"];

export function projectBySlug(slug: string | undefined) {
  return PROJECTS.find((p) => p.slug === slug);
}

/** Smaller freelance work, listed without a case study. */
export const EARLIER: EarlierWork[] = [
  {
    title: "2702 Cakes",
    category: "Social Media",
    timeline: "Oct 2024 to Oct 2025",
    line: "Launched a custom cake brand's TikTok, where several videos passed 30K organic views, and ran seasonal TikTok ads that brought in orders.",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/2702cakes_" },
    ],
  },
  {
    title: "SNSbyKanyin",
    category: "Social Media",
    timeline: "Jan 2025 to Sep 2025",
    line: "Transformation videos and partner promotions for a Lagos wig styling brand that brought in bookings. One video passed 26K views.",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/snsbykanyin" },
    ],
  },
];
