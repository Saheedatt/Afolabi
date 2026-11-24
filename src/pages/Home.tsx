import { useMeta } from "../lib/useMeta";
import { ButtonLink } from "../components/ui";

/** The four numbers on the home page. Each comes from a different project; they are never combined. */
const RESULTS = [
  { value: "10,000+", label: "sign-ups for Presidential in its first two months", source: "Presidential" },
  { value: "11.5K", label: "TikTok views from zero, 39% from search", source: "Presidential" },
  { value: "CA$2,513.90", label: "raised for a 600km charity ride", source: "cyclewithTayo" },
  { value: "500+", label: "sales for a fashion label built from launch", source: "FazzyD" },
];

export function Home() {
  useMeta(null);

  return (
    <>
      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-main">
          <p className="mono hero-kicker">
            <span className="kicker-mark" aria-hidden="true" />
            Growth &amp; Social Media Marketer
          </p>
          <h1 id="hero-title" className="hero-title">
            I build audiences <span className="serif hero-em">from zero.</span>
          </h1>
          <div className="hero-sub">
            <p>
              I started out trying to sell clothes on Instagram. Since then, I've found myself asking the same
              questions across different projects: what isn't working, what are we missing, and how do we get people
              to care enough to act?
            </p>
            <p>
              I work across social media, content and growth: I find the angle, test it, and keep what brings in
              sign-ups and sales.
            </p>
          </div>
          <div className="hero-actions">
            <ButtonLink to="/work">See the work</ButtonLink>
            <ButtonLink to="/about" variant="ghost">
              About me
            </ButtonLink>
          </div>
        </div>

        <aside className="hero-card" aria-label="At a glance">
          <dl>
            <div>
              <dt className="mono">Most recently</dt>
              <dd>Sole marketer, Presidential</dd>
            </div>
            <div>
              <dt className="mono">Focus</dt>
              <dd>Short-form content, paid social, community</dd>
            </div>
            <div>
              <dt className="mono">Working</dt>
              <dd>Remote</dd>
            </div>
            <div>
              <dt className="mono">Status</dt>
              <dd>
                <span className="status-dot" aria-hidden="true" />
                Open to work
              </dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="home-results" aria-labelledby="results-title">
        <div className="wrap">
          <h2 id="results-title" className="mono home-results-title">
            Selected results
          </h2>
          <ul className="home-results-list">
            {RESULTS.map((r) => (
              <li key={r.value}>
                <span className="home-results-value">{r.value}</span>
                <span className="home-results-label">{r.label}</span>
                <span className="mono home-results-source">{r.source}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
