import type { CSSProperties } from "react";
import { Link } from "react-router";
import { useMeta } from "../lib/useMeta";
import { useReveal } from "../lib/reveal";
import { EARLIER, PROJECTS } from "../content/projects";
import { ROLES } from "../content/roles";
import { PageFoot, PageHead } from "../components/Page";

const TONES = ["--h1", "--h2", "--h3"];

export function Work() {
  useMeta("Work", "Case studies in growth marketing, social media and content strategy.");
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="page-wrap">
      <PageHead kicker={`Index of work / ${PROJECTS.length} case studies`} title="Work">
        <p className="phead-intro">A game launch, a charity fundraiser and a clothing label, each with the numbers and what I did to get them.</p>
        <nav className="chips" aria-label="Browse by role">
          <span className="mono">By role</span>
          {ROLES.map((r) => (
            <Link key={r.slug} to={`/work/role/${r.slug}`} style={{ "--c": `var(${r.colour})` } as CSSProperties}>
              {r.label}
            </Link>
          ))}
        </nav>
      </PageHead>

      <div className="spreads">
        {PROJECTS.map((p, i) => (
          <Link
            key={p.slug}
            to={`/work/${p.slug}`}
            className="spread"
            style={{ "--c": `var(${TONES[i % TONES.length]})` } as CSSProperties}
          >
            <figure className={`spread-shot reveal ${i % 2 ? "from-right" : "from-left"}`}>
              <span className="tape" aria-hidden="true" />
              {p.cover && <img src={p.cover.src} alt={p.cover.alt} loading="lazy" />}
            </figure>
            <div className="spread-notes reveal from-below">
              <span className="spread-no">
                {String(i + 1).padStart(2, "0")} &middot; {p.year}
              </span>
              <h2>
                <em>{p.title}</em>
              </h2>
              <p>{p.summary}</p>
              {p.headlineMetric && (
                <div className="sticky-metric">
                  <b>{p.headlineMetric.value}</b>
                  <span>{p.headlineMetric.label}</span>
                </div>
              )}
              <span className="go mono">Read case study</span>
            </div>
          </Link>
        ))}
      </div>

      <section className="other" aria-labelledby="other-title">
        <h2 id="other-title" className="other-title">
          <span>Other work</span>
        </h2>
        <ul className="entries">
          {EARLIER.map((e) => (
            <li key={e.title} className="entry reveal from-below">
              <div>
                <h3>{e.title}</h3>
                <p className="entry-when mono">{e.timeline}</p>
              </div>
              <p className="entry-line">{e.line}</p>
              <span>
                {e.links.map((l) => (
                  <a key={l.href} className="mono" href={l.href} target="_blank" rel="noreferrer">
                    {l.label} &#8599;<span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                ))}
              </span>
            </li>
          ))}
        </ul>
        <p className="other-more">
          <Link className="mono" to="/timeline">
            See everything on the timeline &rarr;
          </Link>
        </p>
      </section>

      <PageFoot />
    </div>
  );
}
