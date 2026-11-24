import { Link, useParams } from "react-router";
import { useMeta } from "../lib/useMeta";
import { labBySlug } from "../content/lab";
import { Breadcrumbs } from "../components/ui";
import { SectionView } from "../components/Blocks";
import { NotFound } from "./NotFound";

export function LabEntry() {
  const { slug } = useParams();
  const entry = labBySlug(slug);
  useMeta(entry ? entry.title : "Not found", entry?.summary);
  if (!entry) return <NotFound />;

  return (
    <article className="lab-article">
      <header className="wrap lab-article-head">
        <Breadcrumbs items={[{ label: "The Lab", to: "/lab" }, { label: `Entry ${entry.number}` }]} />
        <p className="mono lab-article-kicker">
          Lab {entry.number} / {entry.kind} / {entry.status} / {entry.date}
        </p>
        <h1 className="lab-article-title">{entry.title}</h1>
        <p className="lab-article-summary serif">{entry.summary}</p>
        <p className="lab-disclaimer mono">A personal experiment. Not client or employer work, and no results are claimed until they are measured.</p>
      </header>

      <div className="wrap lab-article-body">
        {entry.sections.map((s, i) => (
          <SectionView key={s.id} section={s} index={i} />
        ))}
        <Link to="/lab" className="mono arrow-link lab-back">
          Back to the Lab
        </Link>
      </div>
    </article>
  );
}
