import { Fragment, useState, type CSSProperties } from "react";
import { useMeta } from "../lib/useMeta";
import { CATEGORIES, TIMELINE, type Category } from "../content/timeline";
import { CvLink } from "../components/CvLink";
import { PageFoot } from "../components/Page";
import { Link } from "react-router";

type Filter = Category | "all";

/** The full work history: filter by kind of work, open an entry for the CV's bullets. */
export function Timeline() {
  useMeta("Timeline", "Saheedat Afolabi's full work history: marketing, community, physiotherapy and education.");
  const [filter, setFilter] = useState<Filter>("all");
  // the most recent role starts open
  const [open, setOpen] = useState<Set<string>>(() => new Set([TIMELINE[0].title + TIMELINE[0].org]));

  const shown = TIMELINE.filter((e) => filter === "all" || e.cats.includes(filter));
  const toggle = (key: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  return (
    <div className="page-wrap timeline">
      <header className="phead" style={{ "--c": "var(--h4)" } as CSSProperties}>
        <p className="phead-kicker mono">My full work history</p>
        <h1 className="phead-title">
          <span>Timeline</span>
        </h1>
        <div className="tl-facts mono">
          <span>
            Based in <b>Lagos, Nigeria</b>
          </span>
          <span>
            Working <b>remote</b>
          </span>
          <span>
            In marketing <b>since 2022</b>
          </span>
          <CvLink className="tl-cv" label="Download CV" />
        </div>
      </header>

      <div className="tl-filters" role="group" aria-label="Filter the timeline">
        <button type="button" aria-pressed={filter === "all"} className="is-all" onClick={() => setFilter("all")}>
          All
        </button>
        {(Object.keys(CATEGORIES) as Category[]).map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={filter === c}
            style={{ "--c": `var(${CATEGORIES[c].colour})` } as CSSProperties}
            onClick={() => setFilter(c)}
          >
            {CATEGORIES[c].label}
          </button>
        ))}
      </div>

      <ol className="tl-rail">
        {shown.map((e, i) => {
          const key = e.title + e.org;
          const isOpen = open.has(key);
          const newYear = i === 0 || shown[i - 1].year !== e.year;
          const hasMore = e.points.length > 0;
          return (
            <Fragment key={key}>
              {newYear && (
                <li className="tl-year" aria-hidden="true">
                  {e.year}
                </li>
              )}
              <li className={`tl-entry ${isOpen ? "open" : ""}`} style={{ "--c": `var(${CATEGORIES[e.cats[0]].colour})` } as CSSProperties}>
                <button
                  type="button"
                  className="tl-head"
                  aria-expanded={hasMore ? isOpen : undefined}
                  disabled={!hasMore}
                  onClick={() => toggle(key)}
                >
                  <span className="tl-main">
                    <span className="tl-title">{e.title}</span>
                    <span className="tl-org">{e.org}</span>
                  </span>
                  <span className="tl-when mono">{e.when}</span>
                  <span className="tl-tags">
                    {e.cats.map((c) => (
                      <span key={c} className="tl-tag" style={{ "--c": `var(${CATEGORIES[c].colour})` } as CSSProperties}>
                        {CATEGORIES[c].label}
                      </span>
                    ))}
                  </span>
                  {hasMore && <span className="tl-more mono">{isOpen ? "Hide" : e.points.length > 1 ? "Details" : "Detail"}</span>}
                </button>
                {hasMore && (
                  <div className="tl-detail" hidden={!isOpen}>
                    <ul>
                      {e.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            </Fragment>
          );
        })}
      </ol>

      <PageFoot
        aside={
          <Link className="mono" to="/work">
            See the case studies &rarr;
          </Link>
        }
      />
    </div>
  );
}
