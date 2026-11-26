import type { Project } from "../types";

export const fazzyD: Project = {
  slug: "fazzy-d",
  title: "FazzyD",
  summary: "My brother's Lagos clothing label, from its first Instagram sale to more than 500.",
  intro:
    "FazzyD is my brother's clothing label. We started in 2022 with almost no money, knowing he had to be online to be found. This is where I learned the difference between attention and sales.",
  categories: ["Content Strategy", "Campaigns", "Social Media"],
  year: "2022 to 2025",
  client: "FazzyD (family brand)",
  role: "Photographer, then social media and marketing lead",
  timeline: "2022 to Dec 2025",
  channels: "Instagram, X, Pinterest",
  cover: {
    src: "/media/fazzyd-cover.webp",
    alt: "The FazzyD logo, white lettering between two brushstroke curves on black",
    ratio: "landscape",
  },
  coverTone: "ink",
  headlineMetric: {
    value: "500+",
    label: "sales while I ran the marketing",
    note: "Reported by the founder from his order records",
    status: "verified",
  },
  featured: true,
  sections: [
    {
      id: "context",
      title: "Brand context",
      blocks: [
        {
          type: "text",
          body: [
            "I started as the photographer, shooting each new piece. Then one evening someone bought from us on Instagram. We were sure it was a scam until the delivery went through. After that, my sister and I learned what we could from YouTube and Google: how people search on Instagram, how to name a page so it shows up, and what makes a stranger trust a small brand.",
          ],
        },
        {
          type: "callout",
          title: "A note on the accounts",
          body: "The original account was lost, so the brand started again from scratch in 2025. The current account shows my work from early to late 2025.",
        },
      ],
    },
    {
      id: "problem",
      title: "The marketing problem",
      blocks: [
        {
          type: "lead",
          body: "Our first video to take off got about 100 likes and no sales.",
        },
        {
          type: "text",
          body: [
            "People said it was cool and lovely, and nobody bought anything. That was the problem to solve: reach that did not turn into orders. We rebranded and changed direction several times before the brand found its footing.",
          ],
        },
      ],
    },
    {
      id: "audience",
      title: "Audience",
      blocks: [
        {
          type: "text",
          body: [
            "Fashion-conscious young adults in Nigeria, mostly students and young working professionals. They want clothes that look good, feel comfortable and don't cost too much, and they like being able to personalise some designs to suit their own style.",
          ],
        },
      ],
    },
    {
      id: "strategy",
      title: "Content and distribution",
      blocks: [
        {
          type: "text",
          body: [
            "We tried ads in 2024, but without a steady budget they never ran consistently. So most of the effort went into community instead: early updates on new pieces, replies, and conversations across Instagram, X and Pinterest.",
          ],
        },
      ],
    },
    {
      id: "results",
      title: "Results",
      blocks: [
        {
          type: "metrics",
          items: [
            {
              value: "500+",
              label: "sales while I ran the marketing",
              note: "Founder-reported. The brand has since passed 2,000 sales.",
              status: "verified",
            },
          ],
        },
      ],
    },
    {
      id: "reflection",
      title: "Reflection",
      blocks: [
        {
          type: "text",
          body: [
            "FazzyD was where I learnt that attention and results aren't the same thing.",
            "A post can do well on the surface and still leave the business no closer to a sale. After the 100-like video that sold nothing, I stopped judging posts by likes and started asking what makes a stranger trust a small brand enough to buy.",
            "It was also where I got comfortable with experimenting. We didn't always know what would work, so we researched, tried things, watched what happened and adjusted. I've worked that way on every project since.",
          ],
        },
      ],
    },
    {
      id: "links",
      title: "See it live",
      blocks: [
        {
          type: "links",
          links: [
            { label: "Instagram", href: "https://www.instagram.com/fazzy_d__" },
            { label: "X", href: "https://x.com/Fazzy_D_" },
            { label: "Pinterest", href: "https://pin.it/FBPVCgKZz" },
          ],
        },
      ],
    },
  ],
};
