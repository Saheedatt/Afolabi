/**
 * The five marketing roles on the home page. Each label opens /work/role/<slug>, the work grouped by
 * that role. Physiotherapy is not a role here: it has its own page and menu item.
 */

/** A case study card on a role page. `section` sends people to the part that covers this role. */
export interface RoleCase {
  slug: string;
  section?: { id: string; name: string };
}

/** Work without a case study. It never pretends to be one: it links out, or to its own page. */
export interface ShortEntry {
  title: string;
  line: string;
  link?: { label: string; href: string; internal?: boolean };
}

const SHORT = {
  cakes: {
    title: "2702 Cakes",
    line: "Launched a custom cake brand's TikTok, where several videos passed 30K organic views, and ran seasonal TikTok ads that brought in orders.",
    link: { label: "Instagram", href: "https://www.instagram.com/2702cakes_" },
  },
  sns: {
    title: "SNSbyKanyin",
    line: "Transformation videos and partner promotions for a Lagos wig styling brand that brought in bookings. One video passed 26K views.",
    link: { label: "Instagram", href: "https://www.instagram.com/snsbykanyin" },
  },
  herphysio: {
    title: "HerPhysio Movement",
    line: "Led an 8-person volunteer team supporting a community of about 180 members and a webinar network of more than 300 physiotherapists; hosted and moderated biweekly webinars.",
    link: { label: "Physio page", href: "/physio", internal: true },
  },
  shehers: {
    title: "she/her/them",
    line: "A community for women at LUTH that I ran with my friends for more than a year: a safe space to ask about romance, sex, identity, work and anything else, where we also shared the work opportunities we came across.",
  },
} satisfies Record<string, ShortEntry>;

export type RoleSlug = "growth" | "social" | "content" | "paid" | "community";

export interface Role {
  slug: RoleSlug;
  label: string;
  /** the highlighter colour for this role */
  colour: string;
  cases: RoleCase[];
  short: ShortEntry[];
}

export const ROLES: Role[] = [
  { slug: "growth", label: "Growth Marketing", colour: "--h1", cases: [{ slug: "presidential" }], short: [] },
  {
    slug: "social",
    label: "Social Media",
    colour: "--h2",
    cases: [{ slug: "cyclewithtayo" }, { slug: "presidential" }, { slug: "fazzy-d" }],
    short: [SHORT.cakes, SHORT.sns],
  },
  {
    slug: "content",
    label: "Content Strategy",
    colour: "--h3",
    cases: [{ slug: "fazzy-d" }, { slug: "cyclewithtayo" }, { slug: "presidential" }],
    short: [SHORT.sns],
  },
  {
    slug: "paid",
    label: "Paid Ads",
    colour: "--h4",
    cases: [{ slug: "presidential", section: { id: "paid", name: "paid ads" } }],
    short: [SHORT.cakes],
  },
  {
    slug: "community",
    label: "Community Management",
    colour: "--h5",
    cases: [
      { slug: "presidential", section: { id: "channels", name: "subreddit" } },
      { slug: "fazzy-d", section: { id: "strategy", name: "community" } },
    ],
    short: [SHORT.shehers, SHORT.herphysio],
  },
];

export function roleBySlug(slug: string | undefined) {
  return ROLES.find((r) => r.slug === slug);
}
