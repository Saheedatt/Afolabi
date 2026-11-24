import { Link } from "react-router";
import type { LabEntry } from "../content/types";

export function LabCard({ entry }: { entry: LabEntry }) {
  return (
    <article className="labcard">
      <Link to={`/lab/${entry.slug}`} className="labcard-link">
        <div className="labcard-top mono">
          <span>Lab {entry.number}</span>
          <span>{entry.kind}</span>
          <span className="labcard-status">{entry.status}</span>
        </div>
        <h3 className="labcard-title">{entry.title}</h3>
        <p className="labcard-summary">{entry.summary}</p>
        <p className="labcard-tags mono">{entry.tags.join("  /  ")}</p>
      </Link>
    </article>
  );
}
