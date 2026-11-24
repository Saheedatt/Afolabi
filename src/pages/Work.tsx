import { useMeta } from "../lib/useMeta";
import { EARLIER, PROJECTS } from "../content/projects";
import { ProjectCard } from "../components/ProjectCard";
import { SectionHeader } from "../components/ui";

export function Work() {
  useMeta("Work", "Case studies in growth marketing, social media and content strategy.");

  return (
    <>
      <header className="page-head wrap">
        <p className="mono page-kicker">Index of work / {PROJECTS.length} case studies</p>
        <h1 className="page-title">Work</h1>
        <p className="page-intro">A game launch, a charity fundraiser and a clothing label, each with the numbers and what I did to get them.</p>
      </header>

      <div className="wrap">
        <div className="work-list">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} variant="feature" />
          ))}
        </div>

        <section className="earlier" aria-labelledby="earlier-title">
          <SectionHeader id="earlier-title" title="Other work" />
          <ul>
            {EARLIER.map((e) => (
              <li key={e.title} className="earlier-row">
                <div>
                  <h3>{e.title}</h3>
                  <p className="mono">{e.timeline}</p>
                </div>
                <p className="earlier-line">{e.line}</p>
                <ul className="b-links">
                  {e.links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} target="_blank" rel="noreferrer">
                        {l.label}
                        <span className="visually-hidden"> (opens in a new tab)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
