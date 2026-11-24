import { Link } from "react-router";
import { useMeta } from "../lib/useMeta";
import { LAB } from "../content/lab";

export function Lab() {
  useMeta("The Lab", "Marketing experiments, personal projects, research and observations.");

  return (
    <>
      <header className="page-head wrap lab-head">
        <p className="mono page-kicker">Notebook / personal, not client work</p>
        <h1 className="page-title">
          The <span className="serif">Lab</span>
        </h1>
        <p className="page-intro">
          Experiments, systems and observations I work on outside client and employer projects. Some are finished, most are
          still running.
        </p>
      </header>

      <div className="wrap">
        <ol className="lab-log">
          <li className="lab-log-head mono" aria-hidden="true">
            <span>No.</span>
            <span>Entry</span>
            <span>Type</span>
            <span>Status</span>
          </li>
          {LAB.map((e) => (
            <li key={e.slug} className="lab-log-row">
              <Link to={`/lab/${e.slug}`}>
                <span className="mono lab-no">{e.number}</span>
                <span className="lab-entry">
                  <span className="lab-entry-title">{e.title}</span>
                  <span className="lab-entry-summary">{e.summary}</span>
                </span>
                <span className="mono lab-kind">{e.kind}</span>
                <span className="mono lab-status">
                  <span className="status-dot" aria-hidden="true" />
                  {e.status}
                </span>
              </Link>
            </li>
          ))}
          <li className="lab-log-row is-empty">
            <span className="mono lab-no">002</span>
            <span className="lab-entry">
              <span className="lab-entry-title">Next entry</span>
              <span className="lab-entry-summary">In progress. Content research and campaign breakdowns are up next.</span>
            </span>
            <span className="mono lab-kind">To come</span>
            <span className="mono lab-status" />
          </li>
        </ol>
      </div>
    </>
  );
}
