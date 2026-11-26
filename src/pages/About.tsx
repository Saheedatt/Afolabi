import { useCallback, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Link } from "react-router";
import { useMeta } from "../lib/useMeta";
import { useReveal } from "../lib/reveal";
import { CvLink } from "../components/CvLink";
import { HobbyPanel, type PanelKind } from "../components/HobbyPanel";

const EXPERTISE = [
  {
    title: "Content & social",
    colour: "--h1",
    items: ["Social media strategy", "Content strategy & planning", "Copywriting & storytelling", "Creative direction", "Community management"],
  },
  {
    title: "Marketing & growth",
    colour: "--h2",
    items: ["Digital marketing", "Audience research", "Campaign development", "Acquisition & growth experiments", "Go-to-market strategy"],
  },
  {
    title: "Research & performance",
    colour: "--h3",
    items: ["Marketing research", "Channel & performance analysis", "Reporting & insights", "Testing & optimisation"],
  },
  {
    title: "Creative & production",
    colour: "--h4",
    items: ["Short-form video", "Visual content & carousels", "Creative development", "Canva", "CapCut"],
  },
];

const APPROACH = [
  {
    title: "Ask questions first",
    body: "Understand the business, its goals, its audience and what has or hasn't worked before. I want to know what we're working towards before deciding how to get there.",
  },
  {
    title: "Research, explore and test",
    body: "I don't assume I already have all the answers. I research unfamiliar markets, look for ideas worth exploring, try different approaches and learn as I go.",
  },
  {
    title: "Keep refining",
    body: "I pay attention to what's working, what's falling short and why. I use the data, feedback and whatever else I can learn to make the next iteration better. I'm rarely satisfied with leaving things at the first attempt.",
  },
];

const TOOLS = [
  { name: "Meta Ads Manager & Business Suite", use: "Campaign management, paid social and page management" },
  { name: "Reddit Ads, X Ads & TikTok Ads, Apple Ads, Snapchat Ads", use: "Paid channel exploration and campaign testing" },
  { name: "Google Analytics & PostHog", use: "Traffic analysis, funnels and user behaviour" },
  { name: "Buffer", use: "Content scheduling and management" },
  { name: "Google Workspace & Microsoft Office", use: "Planning, documentation, communication and reporting" },
  { name: "AI-assisted workflows", use: "Research, analysis, creative production and marketing systems." },
];

export function About() {
  useMeta("About", "How Saheedat Afolabi went from photographing her brother's clothes to marketing a game launch.");
  const ref = useReveal<HTMLDivElement>();
  const [panel, setPanel] = useState<PanelKind | null>(null);
  const close = useCallback(() => setPanel(null), []);
  const opener = useRef<HTMLElement | null>(null);

  /** A highlighted hobby phrase that opens its panel. */
  const hobby = (kind: PanelKind, colour: string, children: ReactNode) => (
    <button
      type="button"
      className="bit"
      aria-haspopup="dialog"
      style={{ "--c": `var(${colour})` } as CSSProperties}
      onClick={(e) => {
        opener.current = e.currentTarget;
        setPanel(kind);
      }}
    >
      {children}
    </button>
  );

  return (
    <div ref={ref} className="page-wrap about">
      <p className="phead-kicker mono">About</p>
      <h1 className="about-title">
        Something isn't working, and I want to know <mark>why.</mark>
      </h1>

      <section className="about-story" aria-label="My story">
        <figure className="about-portrait reveal">
          <span className="tape" aria-hidden="true" />
          <img src="/media/saheedat.webp" alt="Saheedat Afolabi in a white shirt and black waistcoat" />
          <figcaption className="mono">Saheedat Afolabi</figcaption>
        </figure>
        <div className="about-copy">
          <p className="reveal">I didn't set out to become a marketer.</p>
          <p className="reveal">
            It started with my brother's clothing brand, FazzyD. We didn't have much to work with, but we knew we needed to be
            online if people were going to find us. I started taking pictures of the clothes, we put them on Instagram, and one
            evening, we made our first sale online.
          </p>
          <p className="reveal">That was enough to make us wonder what else we could do.</p>
          <p className="reveal">
            My sister and I started learning everything we could find on YouTube and Google. Searchability, content, how to make
            a page look trustworthy, how to get people to notice a product. We tried things, made mistakes, changed direction and
            tried again.
          </p>
          <p className="reveal">
            Eventually, I realised I was interested in more than keeping a social media page active. I wanted to understand why
            something worked, why something else didn't, and what we could do differently. That curiosity has followed me into
            the other projects I've worked on since.
          </p>
          <p className="reveal">
            These days, I work across social media, content and growth. I enjoy the research, the brainstorming, the
            figuring-things-out part of a project. Give me a problem and I'll probably spend a little too much time thinking
            about different ways to approach it.
          </p>
          <p className="reveal">
            Outside marketing, I'm also a{" "}
            <Link to="/physio" className="bit" style={{ "--c": "var(--h6)" } as CSSProperties}>
              physiotherapist
            </Link>
            . I love doing the maths of patient management, especially biomechanics and kinesiology, and figuring out how one
            movement or action influences another in the body.
          </p>
          <p className="reveal">
            When I'm not working, I'm usually {hobby("books", "--h3", "reading a book")}, listening to my favourite{" "}
            {hobby("sets", "--h2", "DJ sets on YouTube")} or{" "}
            {hobby("live", "--h5", "watching old live performances by artistes like King Sunny Adé")}. I also enjoy solving
            jigsaw puzzles. My friends call me Prof because I have a habit of explaining things, usually trying to make
            complicated things easy to understand.
          </p>
          <Link to="/bits" className="more-note reveal">
            <span className="tape" aria-hidden="true" />
            There's more of me in Bits &amp; pieces &rarr;
          </Link>
        </div>
      </section>

      <section className="sec" style={{ "--c": "var(--h1)" } as CSSProperties} aria-labelledby="approach-title">
        <h2 id="approach-title" className="sec-title">
          <span>My approach</span>
        </h2>
        <ol className="approach">
          {APPROACH.map((a, i) => (
            <li key={a.title} className="reveal">
              <span className="tape" aria-hidden="true" />
              <span className="mono">{String(i + 1).padStart(2, "0")}</span>
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="sec" style={{ "--c": "var(--h3)" } as CSSProperties} aria-labelledby="skills-title">
        <h2 id="skills-title" className="sec-title">
          <span>Areas of expertise</span>
        </h2>
        <div className="skills">
          {EXPERTISE.map((g) => (
            <div key={g.title} className="reveal" style={{ "--c": `var(${g.colour})` } as CSSProperties}>
              <h3>
                <span>{g.title}</span>
              </h3>
              <ul>
                {g.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="sec" style={{ "--c": "var(--h4)" } as CSSProperties} aria-labelledby="tools-title">
        <h2 id="tools-title" className="sec-title">
          <span>Tools &amp; workflows</span>
        </h2>
        <table className="tools reveal">
          <caption className="visually-hidden">Tools I use and what for</caption>
          <thead>
            <tr>
              <th scope="col" className="mono">
                Tool
              </th>
              <th scope="col" className="mono">
                What I use it for
              </th>
            </tr>
          </thead>
          <tbody>
            {TOOLS.map((t) => (
              <tr key={t.name}>
                <th scope="row">{t.name}</th>
                <td>{t.use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="about-cta" aria-label="CV and contact">
        <div className="reveal">
          <span className="tape" aria-hidden="true" />
          <p className="mono">CV</p>
          <p className="about-cta-line">My full work history.</p>
          <Link className="solid" to="/timeline">
            See the timeline
          </Link>{" "}
          <CvLink label="Download CV" />
        </div>
        <div className="reveal">
          <span className="tape" aria-hidden="true" />
          <p className="mono">Contact</p>
          <p className="about-cta-line">Have a role or project in mind?</p>
          <Link className="solid" to="/contact">
            Get in touch
          </Link>
        </div>
      </section>

      <HobbyPanel kind={panel} onClose={close} returnTo={opener} />
    </div>
  );
}
