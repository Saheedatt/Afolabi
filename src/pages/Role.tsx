import type { CSSProperties } from "react";
import { Link, useParams } from "react-router";
import { useMeta } from "../lib/useMeta";
import { useReveal } from "../lib/reveal";
import { projectBySlug } from "../content/projects";
import { ROLES, roleBySlug } from "../content/roles";
import { PageFoot } from "../components/Page";
import { NotFound } from "./NotFound";

/** The short route from a home-page label: the work grouped by one role. */
export function Role() {
  const { role: slug } = useParams();
  const role = roleBySlug(slug);
  useMeta(role ? role.label : "Not found", role ? `${role.label}: case studies and other work by Saheedat Afolabi.` : undefined);
  const ref = useReveal<HTMLDivElement>([slug]);
  if (!role) return <NotFound />;

  const cases = role.cases.flatMap((c) => {
    const p = projectBySlug(c.slug);
    return p ? [{ ...c, project: p }] : [];
  });

  return (
    <div ref={ref} key={role.slug} className="page-wrap" style={{ "--c": `var(${role.colour})` } as CSSProperties}>
      <p className="crumb mono">
        <Link to="/work">&larr; Work</Link> &nbsp;/&nbsp; Role
      </p>
      <h1 className="role-title">
        <span>{role.label}</span>
      </h1>
      <nav className="chips" aria-label="Other roles">
        {ROLES.filter((r) => r.slug !== role.slug).map((r) => (
          <Link key={r.slug} to={`/work/role/${r.slug}`} style={{ "--c": `var(${r.colour})` } as CSSProperties}>
            {r.label}
          </Link>
        ))}
      </nav>

      {cases.length > 0 && (
        <section aria-labelledby="role-cases">
          <p className="group-title mono">
            <span id="role-cases">Case studies</span>
            <span>{cases.length === 1 ? "1 case study" : `${cases.length} case studies`}</span>
          </p>
          <div className="role-cases">
            {cases.map((c, i) => (
              <Link
                key={c.slug + (c.section?.id ?? "")}
                to={`/work/${c.slug}${c.section ? `#${c.section.id}` : ""}`}
                className={`role-case reveal ${i === 0 ? "lead" : ""}`}
                style={{ "--from": i % 2 ? "40px" : "-40px" } as CSSProperties}
              >
                {c.project.cover && <img src={c.project.cover.src} alt="" loading="lazy" />}
                <div className="role-case-box">
                  <h2>{c.project.title}</h2>
                  <p>{c.project.summary}</p>
                  {c.project.headlineMetric && (
                    <p className="role-case-metric">
                      <b>{c.project.headlineMetric.value}</b>
                      <span>{c.project.headlineMetric.label}</span>
                    </p>
                  )}
                  <span className="go mono">{c.section ? `Read the ${c.section.name} part` : "Read case study"}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {role.short.length > 0 && (
        <section aria-labelledby="role-short">
          <p className="group-title mono">
            <span id="role-short">{cases.length ? "Also in this role" : "Work in this role"}</span>
          </p>
          <ul className="role-short">
            {role.short.map((s, i) => (
              <li key={s.title} className="role-row reveal" style={{ "--from": i % 2 ? "40px" : "-40px" } as CSSProperties}>
                <h3>{s.title}</h3>
                <p>{s.line}</p>
                {s.link ? (
                  s.link.internal ? (
                    <Link className="mono" to={s.link.href}>
                      {s.link.label} &rarr;
                    </Link>
                  ) : (
                    <a className="mono" href={s.link.href} target="_blank" rel="noreferrer">
                      {s.link.label} &#8599;<span className="visually-hidden"> (opens in a new tab)</span>
                    </a>
                  )
                ) : (
                  <span />
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      <PageFoot />
    </div>
  );
}
