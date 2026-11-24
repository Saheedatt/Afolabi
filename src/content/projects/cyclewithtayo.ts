import type { Project } from "../types";

export const cyclewithtayo: Project = {
  slug: "cyclewithtayo",
  title: "cyclewithTayo",
  summary: "Instagram for a cyclist raising money on a 600km charity ride, from about CA$500 raised to past the goal.",
  intro:
    "Tayo rode 600km from Toronto to Montreal in the 2026 Friends for Life Bike Rally to raise money for the Toronto People With AIDS Foundation. While he trained, I managed his social media and built a campaign that gave people reasons to follow the ride and donate.",
  categories: ["Social Media", "Content Strategy", "Campaigns"],
  year: "2026",
  client: "Tayo (@cyclewithtayo)",
  role: "Social Media Manager (contract): strategy, copy, carousel design, video editing and posting",
  timeline: "Jun 2026 to Aug 2026",
  channels: "Instagram and TikTok",
  cover: {
    src: "/media/tayo-helmet-medal.webp",
    alt: "A cycling helmet held up with a 2026 Friends for Life finisher's medal hanging from it",
    ratio: "portrait",
  },
  coverTone: "lime",
  headlineMetric: { value: "CA$2,513.90", label: "raised, past the CA$2,500 goal", status: "verified" },
  hero: {
    kind: "image",
    image: {
      src: "/media/tayo-montreal.webp",
      alt: "A road sign reading Ile de Montreal under a blue sky",
      caption: "Arriving in Montreal",
      ratio: "portrait",
    },
  },
  featured: true,
  sections: [
    {
      id: "challenge",
      title: "The challenge",
      blocks: [
        {
          type: "text",
          body: [
            "Tayo was preparing for his second Friends for Life Bike Rally, a six-day, 600km ride from Toronto to Montreal raising money for the Toronto People With AIDS Foundation. When I took over his Instagram in June, the fundraiser stood at roughly CA$500, and most of his 183 followers already knew about his previous ride and took part in the fundraising the year before.",
            "We had a fundraising target to reach, a ride to document and a story that needed a new angle. Retelling what people already knew about Tayo wasn't going to be enough. People who had given last year needed a new reason to follow this ride and give again.",
          ],
        },
        {
          type: "compare",
          before: { label: "When I took over", value: "~CA$500" },
          after: { label: "At the finish", value: "CA$2,513.90" },
        },
      ],
    },
    {
      id: "insight",
      title: "Finding a stronger story",
      blocks: [
        {
          type: "text",
          body: [
            "The turning point came from a conversation with Tayo about his experience at the previous rally. He had noticed that there were very few Black riders, despite HIV disproportionately affecting Black communities in Canada.",
            "That gave the campaign a new direction. Instead of centring everything on Tayo's own ride, we could use his experience to talk about representation, encourage more Black people to see themselves in cycling, and tie that to the cause he was raising money for.",
            "We framed it as an invitation to ride, so it wouldn't read as a complaint about the rally.",
          ],
        },
      ],
    },
    {
      id: "strategy",
      title: "Strategy",
      blocks: [
        {
          type: "list",
          numbered: true,
          items: [
            {
              title: "Make the story worth following",
              body: "I structured the content around four things: introducing the cause, building a connection to Tayo, documenting the preparation for the ride and creating moments that encouraged people to contribute.",
            },
            {
              title: "Give each post a purpose",
              body: "Educational posts explained why HIV support still mattered. Personal stories and training content made Tayo easy to root for. Fundraising posts showed the progress made and what was left to reach the goal. Rather than making every post an appeal, I wanted the audience to have reasons to care before being asked to donate.",
            },
            {
              title: "Build towards the ride",
              body: "The content moved from introducing the cause and the new campaign angle to documenting the training, highlighting fundraising milestones and preparing people to follow the rally itself.",
            },
            {
              title: "Keep people involved",
              body: "During rally week, the content shifted to documenting the ride as it happened. Stories, daily updates and the articles Tayo wrote during the ride gave supporters a way to follow along, even if they weren't physically there.",
            },
          ],
        },
      ],
    },
    {
      id: "execution",
      title: "Execution",
      blocks: [
        {
          type: "text",
          body: [
            "I planned, made and posted the content, using Tayo's footage, photos, written updates and his own stories.",
            "That meant carousels explaining the cause, personal stories, training videos, fundraising updates and rally-week coverage.",
            "Fundraising posts were built around donor milestones, including Honour Roll tiers and achievement-style updates, so supporters could see progress. As the deadline got closer, the stories named the exact amount left instead of asking for donations in general.",
          ],
        },
        { type: "subhead", body: "HIV education carousel" },
        {
          type: "gallery",
          images: [
            {
              src: "/media/tayo-hiv-question.webp",
              alt: "Carousel slide asking: If HIV treatment has improved, why are people still cycling 600km to raise money? with an illustration of four cyclists",
              caption: "The opening slide",
              ratio: "portrait",
            },
            {
              src: "/media/tayo-hiv-support.webp",
              alt: "Carousel slide titled What support actually looks like, describing the services of the Toronto People With AIDS Foundation",
              caption: "What the money pays for",
              ratio: "portrait",
            },
          ],
        },
        { type: "subhead", body: "Stories" },
        {
          type: "gallery",
          images: [
            {
              src: "/media/tayo-story-camping.webp",
              alt: "Instagram story of a team camping weekend, with text about preparing for the 600km rally with teammates",
              caption: "A training weekend with the team, 25 June",
              ratio: "story",
            },
          ],
        },
        {
          type: "text",
          body: ["More of the fundraising stories and the rally-week coverage are saved in the Highlights on @cyclewithtayo."],
        },
        { type: "subhead", body: "On the ride" },
        {
          type: "gallery",
          images: [
            { src: "/media/tayo-bike-deck.webp", alt: "A road bike leaning against a wooden deck", caption: "Training, July", ratio: "portrait" },
            { src: "/media/tayo-rest.webp", alt: "Legs in cycling shoes resting on grass", caption: "A rest stop on a training ride", ratio: "portrait" },
            { src: "/media/tayo-360.webp", alt: "A 360 degree photo of riders on the rally route", caption: "On the rally route", ratio: "portrait" },
            { src: "/media/tayo-group.webp", alt: "Riders in red ribbon jerseys on a brick path", caption: "Riding with the team", ratio: "portrait" },
            { src: "/media/tayo-tunnel.webp", alt: "A rider coming through a graffiti-covered underpass", caption: "The last stretch", ratio: "portrait" },
            { src: "/media/tayo-finish.webp", alt: "Tayo at the finish holding up his finisher's medal", caption: "At the finish", ratio: "portrait" },
          ],
        },
        { type: "subhead", body: "See the posts" },
        {
          type: "links",
          links: [
            { label: "Campaign announcement Reel", href: "https://www.instagram.com/reel/DZz9wkhB43I/" },
            { label: "HIV education carousel", href: "https://www.instagram.com/p/DaGpfGWAtTi/" },
            { label: "Rally-week post", href: "https://www.instagram.com/p/DbnVXeCjLa3/" },
            { label: "Rally-week Reel", href: "https://www.instagram.com/reel/DbysKpfheMB/" },
          ],
        },
      ],
    },
    {
      id: "results",
      title: "Results",
      blocks: [
        {
          type: "text",
          body: [
            "By the end of the campaign, Tayo raised CA$2,513.90, exceeding the CA$2,500 fundraising goal.",
            "His Instagram gained 84 followers on top of the 183 he started with. Within seven weeks the account passed 35,000 impressions, up from fewer than 5,000 before.",
            "The representation angle also reached beyond the fundraiser: people messaged Tayo saying they wanted to ride with him.",
          ],
        },
        {
          type: "metrics",
          items: [
            { value: "CA$2,513.90", label: "Raised against a CA$2,500 goal.", status: "verified" },
            { value: "35K+", label: "Instagram impressions within seven weeks, up from fewer than 5,000.", status: "verified" },
            { value: "+84", label: "Followers gained, from an initial 183.", status: "verified" },
          ],
        },
        {
          type: "image",
          image: {
            src: "/media/tayo-story-goal.webp",
            alt: "Instagram story reading We did it, showing CA$2,513.90 raised to a goal of CA$2,500, captioned We crossed the CA$2,500 mark",
            caption: "Crossing the goal, 25 July",
            ratio: "story",
          },
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
            "This campaign reminded me that sometimes the strongest direction isn't the one you start with. Tayo's feedback and his experience at the previous rally gave us a story that was more meaningful than simply documenting another ride.",
            "It also showed me how much the work depends on knowing the person behind the campaign. My job was to say what Tayo cared about as clearly as I could, with the material we had, and give every post a job. Swapping his story for a marketing narrative of my own would have lost the thing that worked.",
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
          links: [{ label: "Instagram: @cyclewithtayo", href: "https://www.instagram.com/cyclewithtayo/" }],
        },
      ],
    },
  ],
};
