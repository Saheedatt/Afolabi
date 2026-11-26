import type { Project } from "../types";

export const presidential: Project = {
  slug: "presidential",
  title: "Presidential",
  summary:
    "Social, content and paid acquisition for a new multiplayer strategy game, as its only marketer.",
  intro:
    "Presidential is a free multiplayer strategy game on iOS, Android and web where every player runs a real country for one week, then hands it to the next president. I was its only marketer from launch.",
  categories: ["Growth Marketing", "Social Media"],
  year: "2026",
  client: "Presidential Labs",
  role: "Growth & Social Media Marketer",
  timeline: "Oct 2026 to Nov 2026",
  channels: "TikTok, Instagram, Facebook, X, Reddit, YouTube",
  cover: {
    src: "/media/presidential-banner.webp",
    alt: "Presidential banner reading Run a real country for one real week, with two phone screens of the game",
    ratio: "landscape",
  },
  coverTone: "blue",
  headlineMetric: {
    value: "10,000+",
    label: "sign-ups in the first two months",
    note: "People who signed up to play the game, from launch to November 2026",
    status: "verified",
  },
  hero: {
    kind: "image",
    image: {
      src: "/media/presidential-banner.webp",
      alt: "Presidential banner reading Run a real country for one real week, with two phone screens of the game",
      caption:
        "A multiplayer strategy game where players govern real countries, make decisions and leave a country for the next president.",
      ratio: "landscape",
    },
  },
  featured: true,
  sections: [
    {
      id: "zero",
      title: "Starting from zero",
      blocks: [
        {
          type: "text",
          body: [
            "Presidential was a new game with no established social audience or marketing presence to build on. I was responsible for developing that presence while figuring out how to introduce the game to people who might never have played it before.",
            "The game sits somewhere between strategy, politics and multiplayer gaming. The content had to make the mechanics interesting, show what made the game different and get people curious enough to try it.",
            "I was also new to gaming. So instead of guessing what works for gaming audiences, I studied similar games and their ads, spent time in their communities, and asked the founders about the product, the players they wanted and what we were aiming for.",
          ],
        },
      ],
    },
    {
      id: "positioning",
      title: "Figuring out how to position the game",
      blocks: [
        {
          type: "text",
          body: [
            "One of the first things I wanted to understand was what made Presidential interesting beyond its mechanics.",
            "I researched similar strategy games, looked at how they presented themselves, explored player conversations and paid attention to what players enjoyed or disliked about other games in the category.",
            "We had several things worth communicating: players governed real countries, decisions had consequences, other people were playing in the same world, and an AI cabinet kept things running while you were away.",
            "The angle changed depending on who we were trying to reach. For strategy players, I wanted to highlight the mechanics and the multiplayer aspect. For people interested in politics, the decisions and their consequences could be the hook. For a more casual audience, I could make the content revolve around a relatable question, an interesting scenario or something that happened in the game.",
          ],
        },
        {
          type: "callout",
          title: "The positioning: A real country. Real people. Real consequences.",
          body: "A line from the marketing plan I presented to the founders. It sums up what sets the game apart: you run a real country, in a world where other players' decisions affect yours.",
        },
      ],
    },
    {
      id: "channels",
      title: "Building the content and channel strategy",
      blocks: [
        {
          type: "text",
          body: [
            "I didn't want every platform to become a dumping ground for the same content. Each needed a purpose, even if we were working with limited time and resources.",
            "TikTok was my main channel for discovery. YouTube Shorts took the same videos to a second audience. Reddit was where people talked about the game and its mechanics, and where strategy players already spent time. Instagram and X carried content, announcements and updates.",
            "Some posts introduced the game, some showed how it worked, and some were built to reach people who had never heard of it.",
            "I also set up recurring formats, including a weekly decision post, community conversations and posts on different parts of the gameplay. That kept us posting regularly without every post reading like an ad.",
            "On each platform I wrote for how people find things there: captions and on-screen text built around the words they search for, in the formats that app favours.",
          ],
        },
        {
          type: "metrics",
          items: [
            { value: "45", label: "members in r/playpresidential, with 63 posts and 114 comments in six weeks", status: "verified" },
          ],
        },
      ],
    },
    {
      id: "creative",
      title: "Making the creative",
      blocks: [
        {
          type: "text",
          body: [
            "I also made the creative myself, mostly short-form videos and static ads.",
            "I built the videos in code with Claude Code and Remotion, including original music timed to the cuts. Over time I used more of the real game, such as gameplay, decision cards and game events, and fewer generic or simulated visuals.",
          ],
        },
        {
          type: "videos",
          videos: [
            { src: "/media/presidential-favor.mp4", poster: "/media/presidential-favor-poster.jpg", caption: "Follow the Favor, a feature explainer", vertical: true },
            { src: "/media/presidential-border.mp4", poster: "/media/presidential-border-poster.jpg", caption: "Border standoff, a feature explainer", vertical: true },
            { src: "/media/presidential-tide.mp4", poster: "/media/presidential-tide-poster.jpg", caption: "The Tide, a world event", vertical: true },
            { src: "/media/presidential-newsroom.mp4", poster: "/media/presidential-newsroom-poster.jpg", caption: "Newsroom: this week across worlds", vertical: true },
            { src: "/media/presidential-trailer.mp4", poster: "/media/presidential-trailer-poster.jpg", caption: "The game trailer", vertical: true },
          ],
        },
        {
          type: "text",
          body: [
            "I tried different ways of presenting the game: following one country through a term, introducing the decisions players face, and building videos around situations that could hold attention on their own.",
            "Not every direction made it through. Some concepts needed more context, some visuals didn't match the real game, and some designs were too busy for the message. I rebuilt those videos around real gameplay and simplified the designs.",
            "The aim was a video that makes the game make sense without explaining everything at once.",
          ],
        },
        {
          type: "image",
          image: {
            src: "/media/presidential-deficit.webp",
            alt: "Carousel slide reading The deficit is not the debt, with an illustration of a bathtub",
            caption: "Deficit vs debt, an explainer carousel",
            ratio: "portrait",
          },
        },
      ],
    },
    {
      id: "paid",
      title: "Exploring paid acquisition",
      blocks: [
        {
          type: "text",
          body: [
            "I also ran paid acquisition on Reddit, Meta and X: making the creatives, setting up the campaigns and watching how they performed.",
            "Most of the audience and creative tests ran on Meta, while Reddit and X were tested as possible channels. I compared placements and campaigns to recommend where the budget should go.",
          ],
        },
        {
          type: "metrics",
          items: [
            { value: "30%", label: "lower cost per sign-up on Facebook than Instagram", status: "verified" },
            { value: "2 to 3x", label: "daily sign-ups on days paid campaigns ran", note: "Not every campaign in that period was mine", status: "verified" },
            { value: "~$5", label: "per sign-up reported by Meta", note: "Platform-reported, not confirmed in the database", status: "verified" },
          ],
        },
        {
          type: "text",
          body: [
            "Tracking was the biggest problem.",
            "A player could go from an ad to the website, download the app and only then sign up. Following that path across platforms and devices wasn't possible with the setup we had, so we couldn't tell how many sign-ups came from any one campaign.",
            "I didn't want to make spending decisions on numbers we couldn't trust. So I recommended fixing tracking before spending more, and wrote the measurement plan to do it: tagged links, shared metric definitions and a weekly performance report.",
          ],
        },
      ],
    },
    {
      id: "performance",
      title: "Looking at performance",
      blocks: [
        {
          type: "text",
          body: [
            "I tracked how the channels, content and campaigns performed, looking past views and impressions where I could, to see how people found the game and what they did next.",
            "On TikTok, people started finding the videos through search, so I kept building content around topics and questions people were already looking up. Instagram also began reaching more people outside the existing follower base.",
          ],
        },
        {
          type: "metrics",
          items: [
            { value: "11.5K", label: "TikTok views from zero in two months", status: "verified" },
            { value: "39%", label: "of TikTok views came from search", status: "verified" },
            { value: "198%", label: "growth in Instagram reach in 28 days", status: "verified" },
            { value: "85%", label: "average watch-through on a YouTube playthrough", status: "verified" },
          ],
        },
        {
          type: "text",
          body: [
            "Across the channels I kept note of which videos brought in new viewers and which ones needed more context.",
            "I also followed people past social media, from finding the game to signing up and playing. A sign-up matters less if the person never plays, so I looked at what happened after sign-up as part of acquisition too.",
            "The same tracking gap applied here. I couldn't always connect a post or a campaign to a player, and I factored that into how I judged performance and what I recommended.",
          ],
        },
      ],
    },
    {
      id: "outcome",
      title: "What came out of the work",
      blocks: [
        {
          type: "text",
          body: [
            "In two months the game went from no marketing presence to an active presence on six platforms, a subreddit where players posted their own questions, recurring content formats, tested paid channels and a measurement plan the team could keep using.",
            "Organic content reached people outside the existing audience: TikTok through search, Instagram through non-followers, and Reddit through conversations players started themselves.",
            "Not everything worked. Some creative missed, and not everything could be measured. The lesson I'd take into any early-stage product: fix tracking before increasing spend.",
          ],
        },
      ],
    },
    {
      id: "next",
      title: "What I'd explore next",
      blocks: [
        {
          type: "text",
          body: ["With more time, these were next on my list."],
        },
        {
          type: "list",
          items: [
            { title: "Newsletter outreach", body: "Find gaming, strategy and gaming-adjacent newsletters that might be interested in featuring Presidential." },
            { title: "Better ad tracking", body: "Fix attribution so we could see which channels brought in players and deserved more budget." },
            { title: "Creator partnerships", body: "Work with creators whose audiences already play strategy and simulation games." },
            { title: "UGC-style content", body: "Content in the style players make themselves: playthroughs, reactions and moments from their own games." },
          ],
        },
      ],
    },
    {
      id: "game",
      title: "The game",
      blocks: [
        {
          type: "links",
          links: [
            { label: "Play on the web", href: "https://presidential.app" },
            { label: "TikTok", href: "https://www.tiktok.com/@presidential.app" },
            { label: "Instagram", href: "https://www.instagram.com/presidential.app/" },
            { label: "X", href: "https://x.com/presidential_hq" },
            { label: "Reddit", href: "https://www.reddit.com/r/playpresidential/" },
            { label: "YouTube", href: "https://www.youtube.com/@presidential_hq" },
          ],
        },
      ],
    },
  ],
};
