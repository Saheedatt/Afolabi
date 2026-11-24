import { Link } from "react-router";
import type { Project } from "../content/types";
import { Cover } from "./Cover";

/**
 * "feature": wide, cover beside the text. "standard": cover above the text.
 */
export function ProjectCard({
  project,
  index,
  variant = "standard",
}: {
  project: Project;
  index?: number;
  variant?: "feature" | "standard";
}) {
  const metric = project.headlineMetric;
  return (
    <article className={`pcard pcard-${variant}`}>
      <Link to={`/work/${project.slug}`} className="pcard-link" aria-label={`${project.title} case study`}>
        <div className="pcard-media">
          <Cover project={project} />
        </div>
        <div className="pcard-body">
          <p className="pcard-meta mono">
            {index !== undefined && <span>{String(index + 1).padStart(2, "0")}</span>}
            <span>{project.year}</span>
          </p>
          <h3 className="pcard-title">{project.title}</h3>
          <p className="pcard-summary">{project.summary}</p>
          {metric && (
            <p className="pcard-metric">
              <span className="pcard-metric-value">{metric.value}</span>
              <span className="pcard-metric-label">{metric.label}</span>
            </p>
          )}
          <div className="pcard-foot">
            <span className="pcard-cta mono">Read case study</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
