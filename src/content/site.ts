export const SITE = {
  name: "Saheedat Afolabi",
  role: "Growth & Social Media Marketer",
  description:
    "Saheedat Afolabi is a growth and social media marketer. Case studies from a game launch, a charity fundraiser and a clothing label.",
  url: "https://saheedat-afolabi.vercel.app", // update once the domain is final
  email: "afolabisaheedat1@gmail.com",
  linkedin: "https://www.linkedin.com/in/saheedat-afolabi",
  /** Put the PDF in /public with this exact name. Until then the link shows as pending. */
  cv: "/saheedat-afolabi-cv.pdf",
  cvReady: true,
  /** The file name visitors get when they download the CV. */
  cvDownloadName: "Saheedat Afolabi CV.pdf",
  /** The 1200x630 picture shown when a page without its own cover is shared (LinkedIn, WhatsApp, X). */
  ogImage: "/share.png",
  /**
   * The Lab is hidden while its first entry is rewritten. Set to true to bring back the menu link,
   * the /lab pages, their sitemap entries and the link on About. The content stays in src/content/lab.
   */
  labEnabled: false,
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  ...(SITE.labEnabled ? [{ to: "/lab", label: "The Lab" }] : []),
  { to: "/contact", label: "Contact" },
];
