import { Link } from "react-router";
import { useMeta } from "../lib/useMeta";
import { ButtonLink, SectionHeader } from "../components/ui";
import { CvLink } from "../components/CvLink";
import { SITE } from "../content/site";

const EXPERTISE = [
  {
    title: "Content & social",
    items: [
      "Social media strategy",
      "Content strategy & planning",
      "Copywriting & storytelling",
      "Creative direction",
      "Community management",
    ],
  },
  {
    title: "Marketing & growth",
    items: [
      "Digital marketing",
      "Audience research",
      "Campaign development",
      "Acquisition & growth experiments",
      "Go-to-market strategy",
    ],
  },
  {
    title: "Research & performance",
    items: ["Marketing research", "Channel & performance analysis", "Reporting & insights", "Testing & optimisation"],
  },
  {
    title: "Creative & production",
    items: ["Short-form video", "Visual content & carousels", "Creative development", "Canva", "CapCut"],
  },
];

const TOOLS: { name: string; use: string; lab?: boolean }[] = [
  { name: "Meta Ads Manager & Business Suite", use: "Campaign management, paid social and page management" },
  {
    name: "Reddit Ads, X Ads & TikTok Ads, Apple Ads, Snapchat Ads",
    use: "Paid channel exploration and campaign testing",
  },
  { name: "Google Analytics & PostHog", use: "Traffic analysis, funnels and user behaviour" },
  { name: "Buffer", use: "Content scheduling and management" },
  { name: "Google Workspace & Microsoft Office", use: "Planning, documentation, communication and reporting" },
  { name: "AI-assisted workflows", use: "Research, analysis, creative production and marketing systems.", lab: true },
];

export function About() {
  useMeta("About", "How Saheedat Afolabi went from photographing her brother's clothes to marketing a game launch.");

  return (
    <>
      <header className="page-head wrap about-head">
        <p className="mono page-kicker">About</p>
        <h1 className="page-title about-title">
          Something isn't working, and I want to know <span className="serif">why.</span>
        </h1>
      </header>

      <section className="about-story wrap" aria-label="My story">
        <figure className="about-portrait">
          <img src="/media/saheedat.webp" alt="Saheedat Afolabi in a white shirt and black waistcoat" />
          <figcaption className="mono">Saheedat Afolabi</figcaption>
        </figure>
        <div className="about-copy">
          <p>I didn't set out to become a marketer.</p>
          <p>
            It started with my brother's clothing brand, FazzyD. We didn't have much to work with, but we knew we needed to be
            online if people were going to find us. I started taking pictures of the clothes, we put them on Instagram, and one
            evening, we made our first sale online.
          </p>
          <p>That was enough to make us wonder what else we could do.</p>
          <p>
            My sister and I started learning everything we could find on YouTube and Google. Searchability, content, how to make
            a page look trustworthy, how to get people to notice a product. We tried things, made mistakes, changed direction and
            tried again.
          </p>
          <p>
            Eventually, I realised I was interested in more than keeping a social media page active. I wanted to understand why
            something worked, why something else didn't, and what we could do differently. That curiosity has followed me into
            the other projects I've worked on since.
          </p>
          <p>
            These days, I work across social media, content and growth. I enjoy the research, the brainstorming, the
            figuring-things-out part of a project. Give me a problem and I'll probably spend a little too much time thinking
            about different ways to approach it.
          </p>
          <p>
            Outside marketing, I'm also a physiotherapist. I love doing the maths of patient
            management, especially biomechanics and kinesiology, and figuring out how one movement or action
            influences another in the body.
          </p>
          <p>
            When I'm not working, I'm usually reading a good book, listening to my favourite DJ sets on YouTube or watching old
            live performances by artistes like King Sunny Adé. I also enjoy solving jigsaw puzzles. My friends call me Prof
            because I have a habit of explaining things, usually trying to make complicated things easy to understand.
          </p>
        </div>
      </section>

      <section className="about-approach wrap" aria-labelledby="approach-title">
        <SectionHeader id="approach-title" title="My approach" />
        <ol className="approach-list">
          <li>
            <span className="mono">01</span>
            <h3>Ask questions first</h3>
            <p>
              Understand the business, its goals, its audience and what has or hasn't worked before. I want to know what we're
              working towards before deciding how to get there.
            </p>
          </li>
          <li>
            <span className="mono">02</span>
            <h3>Research, explore and test</h3>
            <p>
              I don't assume I already have all the answers. I research unfamiliar markets, look for ideas worth exploring, try
              different approaches and learn as I go.
            </p>
          </li>
          <li>
            <span className="mono">03</span>
            <h3>Keep refining</h3>
            <p>
              I pay attention to what's working, what's falling short and why. I use the data, feedback and whatever else I can
              learn to make the next iteration better. I'm rarely satisfied with leaving things at the first attempt.
            </p>
          </li>
        </ol>
      </section>

      <section className="about-skills wrap" aria-labelledby="skills-title">
        <SectionHeader id="skills-title" title="Areas of expertise" />
        <div className="skills-grid">
          {EXPERTISE.map((g) => (
            <div key={g.title} className="skills-group">
              <h3 className="mono">{g.title}</h3>
              <ul>
                {g.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="about-tools wrap" aria-labelledby="tools-title">
        <SectionHeader id="tools-title" title="Tools & workflows" />
        <table className="tools-table">
          <caption className="visually-hidden">Tools I use and what for</caption>
          <thead>
            <tr>
              <th scope="col" className="mono">Tool</th>
              <th scope="col" className="mono">What I use it for</th>
            </tr>
          </thead>
          <tbody>
            {TOOLS.map((t) => (
              <tr key={t.name}>
                <th scope="row">{t.name}</th>
                <td>
                  {t.use}
                  {t.lab && SITE.labEnabled && (
                    <>
                      {" "}
                      More in <Link to="/lab">The Lab</Link>.
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="about-cta wrap" aria-label="CV and contact">
        <div>
          <p className="mono">CV</p>
          <p className="about-cta-line">My full work history.</p>
          <CvLink className="btn btn-ghost" label="Download CV" />
        </div>
        <div>
          <p className="mono">Contact</p>
          <p className="about-cta-line">Have a role or project in mind?</p>
          <ButtonLink to="/contact">Get in touch</ButtonLink>
        </div>
      </section>
    </>
  );
}
