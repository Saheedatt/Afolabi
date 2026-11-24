/**
 * Content model for the whole site.
 * Pages read from these types; nothing on a page is hard-coded copy except labels.
 */

/** "verified" = a real, confirmed number. "pending" = real but waiting for approval or a source. */
export type DataStatus = "verified" | "pending";

export interface Metric {
  value: string;
  label: string;
  /** shown in small text under the label, for context or caveats */
  note?: string;
  status: DataStatus;
}

export interface ImageAsset {
  src: string;
  alt: string;
  caption?: string;
  /** helps galleries lay images out without layout shift */
  ratio?: "portrait" | "landscape" | "square" | "story";
}

export interface VideoAsset {
  src: string;
  poster: string;
  caption: string;
  /** vertical (9:16) videos get a phone-width frame */
  vertical?: boolean;
}

/**
 * A placeholder marks content that is still to come. It renders as a clearly labelled box,
 * never as if it were real content.
 */
export interface PlaceholderSpec {
  label: string;
  /** what should go here */
  hint: string;
  kind?: "text" | "image" | "video" | "screenshot" | "data" | "quote";
}

export type Block =
  | { type: "text"; body: string[] }
  | { type: "lead"; body: string }
  /** a small heading inside a section */
  | { type: "subhead"; body: string }
  | { type: "list"; items: { title?: string; body: string }[]; numbered?: boolean }
  | { type: "metrics"; items: Metric[] }
  | { type: "image"; image: ImageAsset; wide?: boolean }
  | { type: "gallery"; images: ImageAsset[] }
  | { type: "videos"; videos: VideoAsset[] }
  | { type: "quote"; text: string; source: string }
  | { type: "compare"; before: { label: string; value: string }; after: { label: string; value: string }; note?: string }
  | { type: "callout"; title: string; body: string }
  | { type: "links"; links: { label: string; href: string }[] }
  | { type: "placeholder"; spec: PlaceholderSpec };

export interface Section {
  /** used for the in-page anchor and the sticky section nav */
  id: string;
  title: string;
  blocks: Block[];
}

export type Category = "Growth Marketing" | "Social Media" | "Content Strategy" | "Campaigns";

export interface Project {
  slug: string;
  title: string;
  /** one short line for cards */
  summary: string;
  /** the opening paragraph on the case study */
  intro: string;
  categories: Category[];
  year: string;
  client: string;
  role: string;
  timeline: string;
  channels: string;
  cover?: ImageAsset;
  /** background for typographic covers when there is no image yet */
  coverTone?: "blue" | "lime" | "grey" | "ink";
  /** the one number shown on cards */
  headlineMetric?: Metric;
  hero?: { kind: "image"; image: ImageAsset } | { kind: "video"; video: VideoAsset };
  sections: Section[];
  featured?: boolean;
}

export interface EarlierWork {
  title: string;
  category: string;
  timeline: string;
  line: string;
  links: { label: string; href: string }[];
}

export interface LabEntry {
  slug: string;
  number: string;
  title: string;
  summary: string;
  /** personal experiments are kept apart from client and employer work */
  kind: "Personal experiment" | "Research" | "Breakdown" | "Tool";
  status: "In progress" | "Ongoing" | "Complete";
  date: string;
  tags: string[];
  sections: Section[];
}
