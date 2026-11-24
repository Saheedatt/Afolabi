import type { LabEntry } from "../types";

export const marketingWorkflow: LabEntry = {
  slug: "marketing-workflow",
  number: "001",
  title: "Building an AI-assisted marketing workflow",
  summary: "How I set up a coding agent as a marketing assistant: brand context, research, analytics and creative production, with me making the calls.",
  kind: "Personal experiment",
  status: "Ongoing",
  date: "2026",
  tags: ["AI workflows", "Systems", "Research"],
  sections: [
    {
      id: "why",
      title: "Why I built it",
      blocks: [
        {
          type: "text",
          body: [
            "As the only marketer on a launch, I needed help with research, reporting and production without losing control of the decisions. So I set up Claude Code, a coding agent, as an assistant that works from written context about the product and the brand.",
          ],
        },
      ],
    },
    {
      id: "setup",
      title: "The setup",
      blocks: [
        {
          type: "list",
          items: [
            { title: "Brand and strategy files", body: "Persistent written rules on positioning, voice, audience and what is off limits, so every session starts from the same context." },
            { title: "Research agents", body: "Separate agents for competitor research, market research and reading ad performance." },
            { title: "Analytics review", body: "Reading platform reports and product data to prepare monthly reviews and budget recommendations." },
            { title: "Creative production", body: "Videos built from the product's real data in code, which I direct and review." },
            { title: "One session per product", body: "Each product gets its own workspace, so context from one never leaks into another." },
          ],
        },
      ],
    },
    {
      id: "rules",
      title: "Rules I keep",
      blocks: [
        {
          type: "callout",
          title: "The agent advises. I decide.",
          body: "It never publishes, launches campaigns, changes live ad settings or spends money. Anything sensitive goes to the founders first.",
        },
      ],
    },
    {
      id: "works",
      title: "What works and what doesn't",
      blocks: [
        {
          type: "placeholder",
          spec: { label: "Observations", hint: "What saved you the most time, where the output needed the most correcting, and what you stopped using it for.", kind: "text" },
        },
      ],
    },
    {
      id: "results",
      title: "Results",
      blocks: [
        {
          type: "placeholder",
          spec: { label: "Results", hint: "Not measured yet. Add time saved or output produced only if you track it.", kind: "data" },
        },
      ],
    },
  ],
};
