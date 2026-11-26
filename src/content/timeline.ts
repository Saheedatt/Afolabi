/**
 * The full work history for /timeline, newest first. Bullets are the CV's wording
 * (one CV typo fixed: "85% held" -> "held 85%"); she/her/them uses the site's own line.
 */
export type Category = "marketing" | "community" | "physio" | "education";

export const CATEGORIES: Record<Category, { label: string; colour: string }> = {
  marketing: { label: "Marketing", colour: "--h2" },
  community: { label: "Community", colour: "--h5" },
  physio: { label: "Physio", colour: "--h6" },
  education: { label: "Education", colour: "--h3" },
};

export interface Entry {
  year: string;
  title: string;
  org: string;
  when: string;
  cats: Category[];
  points: string[];
}

export const TIMELINE: Entry[] = [
  { year: "2026", title: "Growth & Social Media Marketer", org: "Presidential Labs · Remote, full-time", when: "Oct 2026 to Nov 2026", cats: ["marketing", "community"], points: [
    "Led marketing from launch as the sole marketer for Presidential, a free multiplayer strategy game across iOS, Android and web, which grew to more than 10,000 sign-ups within its first two months.",
    "Ran paid campaigns on Meta, Reddit and X and daily sign-ups were 2–3x higher on days the campaigns were active.",
    "Grew TikTok content to 11.5K views in two months, with 39% of views originating from search through keyword-led captions and on-screen text. Top video generated 7.2K views.",
    "Made 20+ videos and creative assets using a code-based workflow, including gameplay ads, feature explainers and original music. A YouTube gameplay video held 85% average watch-through.",
    "Built r/playpresidential from zero to 45 members, 63 posts and 114 comments in six weeks, with players posting their own questions about the game.",
    "Grew Instagram reach by 198% in 28 days, with 91% of views coming from non-followers.",
    "Found that most ad spend couldn't be traced to sign-ups, then wrote a measurement plan, set up Google Analytics and tested the Meta and Reddit pixels.",
    "Presented monthly performance reviews and a marketing plan to the founders, including where to spend the budget and what to fix in tracking." ] },
  { year: "2026", title: "Social Media Manager", org: "cyclewithTayo · Toronto, remote contract", when: "Jun 2026 to Aug 2026", cats: ["marketing"], points: [
    "Developed and executed the social media strategy supporting the Friends for Life Bike Rally fundraising campaign, combining advocacy, educational storytelling, and fundraising content.",
    "Increased Instagram impressions from under 5,000 to over 35,000 within seven weeks of taking over account management.",
    "Raised CAD 2,513.90 against a CAD 2,500 fundraising target through community-focused content and campaign promotion.",
    "Grew the Instagram account by 84 followers while developing a multi-format content strategy across reels, carousels and stories, building a consistent voice around cycling, HIV advocacy and community impact." ] },
  { year: "2026", title: "Bachelor of Physiotherapy", org: "University of Lagos", when: "2026", cats: ["physio", "education"], points: [] },
  { year: "2025", title: "Lead Community Manager", org: "HerPhysio Movement · Lagos", when: "May 2025 to Nov 2025", cats: ["community", "physio"], points: [
    "Led an 8-person volunteer team supporting a community of about 180 members and a webinar network of more than 300 physiotherapists; hosted and moderated biweekly webinars." ] },
  { year: "2025", title: "SheFi Scholar", org: "Season 13", when: "Feb 2025 to May 2025", cats: ["education"], points: [] },
  { year: "2024", title: "Frontend Engineering Certificate", org: "AltSchool Africa", when: "2024", cats: ["education"], points: [] },
  { year: "2024", title: "Co-ran she/her/them", org: "A community for women at LUTH", when: "2024 to 2026", cats: ["community"], points: [
    "A community for women at LUTH that I ran with my friends for more than a year: a safe space to ask about romance, sex, identity, work and anything else, where we also shared the work opportunities we came across." ] },
  { year: "2022", title: "Social Media Manager", org: "Freelance · Lagos, Nigeria", when: "Feb 2022 to Dec 2025", cats: ["marketing"], points: [
    "FazzyD (Fashion): Built the brand's Instagram, X and Pinterest presence from launch, supporting growth to more than 500 sales. Developed content around the founder's transition into a lifestyle personal brand.",
    "2702 Cakes (Food): Launched the brand's TikTok account, producing organic videos that surpassed 30K views. Ran TikTok campaigns for Valentine's Day and Girlfriends' Day that generated direct orders.",
    "SNSbyKanyin (Beauty): Produced transformation-led content and coordinated cross-promotions with partner beauty brands to drive bookings among Lagos clients. One video reached over 26K views." ] },
];
