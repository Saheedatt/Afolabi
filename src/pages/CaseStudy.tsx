import { Link, useParams } from "react-router";
import { useMeta } from "../lib/useMeta";
import { PROJECTS, projectBySlug } from "../content/projects";
import { Breadcrumbs } from "../components/ui";
import { SectionView } from "../components/Blocks";
import { SectionNav } from "../components/SectionNav";
import { Figure, Video } from "../components/Media";
import { Cover } from "../components/Cover";
import { NotFound } from "./NotFound";

export function CaseStudy() {
  const { slug } = useParams();
  const project = projectBySlug(slug);
  useMeta(project ? project.title : "Not found", project?.summary, project?.cover?.src);
  if (!project) return <NotFound />;

  const i = PROJECTS.indexOf(project);
  const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(i + 1) % PROJECTS.length];

  return (
    <article className="cs">
      <header className="cs-head wrap">
        <Breadcrumbs items={[{ label: "Work", to: "/work" }, { label: project.title }]} />
        <div className="cs-title-row">
          <h1 className="cs-title">{project.title}</h1>
        </div>
        <p className="cs-intro">{project.intro}</p>
        <dl className="cs-meta">
          <div>
            <dt className="mono">Client</dt>
            <dd>{project.client}</dd>
          </div>
          <div>
            <dt className="mono">Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt className="mono">Timeline</dt>
            <dd>{project.timeline}</dd>
          </div>
          <div>
            <dt className="mono">Channels</dt>
            <dd>{project.channels}</dd>
          </div>
        </dl>
      </header>

      <div className={`cs-hero wrap cs-hero-${project.hero?.kind === "image" ? project.hero.image.ratio ?? "landscape" : "type"}`}>
        {project.hero?.kind === "image" && <Figure image={project.hero.image} />}
        {project.hero?.kind === "video" && <Video video={project.hero.video} />}
        {!project.hero && <Cover project={project} />}
        {project.headlineMetric && (
          <div className="cs-hero-metric">
            <span className="mono">{project.headlineMetric.status === "verified" ? "Verified result" : "Pending"}</span>
            <span className="cs-hero-value">{project.headlineMetric.value}</span>
            <span>{project.headlineMetric.label}</span>
            {project.headlineMetric.note && <span className="metric-note">{project.headlineMetric.note}</span>}
          </div>
        )}
      </div>

      <div className="cs-layout wrap">
        <SectionNav sections={project.sections} />
        <div className="cs-content">
          {project.sections.map((s, idx) => (
            <SectionView key={s.id} section={s} index={idx} />
          ))}
        </div>
      </div>

      <nav className="cs-pager wrap" aria-label="More case studies">
        <Link to={`/work/${prev.slug}`} className="cs-pager-link">
          <span className="mono">Previous</span>
          <span>{prev.title}</span>
        </Link>
        <Link to="/work" className="cs-pager-index mono">
          All work
        </Link>
        <Link to={`/work/${next.slug}`} className="cs-pager-link is-next">
          <span className="mono">Next</span>
          <span>{next.title}</span>
        </Link>
      </nav>
    </article>
  );
}
