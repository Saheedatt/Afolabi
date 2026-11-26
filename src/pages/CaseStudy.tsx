import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { useMeta } from "../lib/useMeta";
import { useReveal } from "../lib/reveal";
import { PROJECTS, projectBySlug } from "../content/projects";
import type { ImageAsset, Section } from "../content/types";
import { SectionView } from "../components/Blocks";
import { PageFoot } from "../components/Page";
import { NotFound } from "./NotFound";

/** Sticky "On this page" list on laptops; highlights the section being read. */
function Contents({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(sections[0]?.id);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const seen = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (seen[0]) setActive(seen[0].target.id);
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [sections]);

  return (
    <nav className="cs-toc" aria-label="On this page">
      <p className="mono">On this page</p>
      <ol>
        {sections.map((s, i) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className={active === s.id ? "on" : ""} aria-current={active === s.id ? "true" : undefined}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              {s.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function CaseStudy() {
  const { slug } = useParams();
  const project = projectBySlug(slug);
  useMeta(project ? project.title : "Not found", project?.summary, project?.cover?.src);
  const ref = useReveal<HTMLElement>([slug]);
  if (!project) return <NotFound />;

  const i = PROJECTS.indexOf(project);
  const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  // the hero is the project's own hero image, or its cover when it has none
  const heroImage: ImageAsset | undefined = project.hero?.kind === "image" ? project.hero.image : project.cover;
  const metric = project.headlineMetric;

  return (
    <article ref={ref} key={project.slug} className="page-wrap cs2">
      <p className="crumb mono">
        <Link to="/work">Work</Link> &nbsp;/&nbsp; {project.title}
      </p>
      <h1 className="cs2-title">
        <span>{project.title}</span>
      </h1>
      <p className="phead-intro">{project.intro}</p>

      <dl className="cs2-meta">
        <div>
          <dt>Client</dt>
          <dd>{project.client}</dd>
        </div>
        <div>
          <dt>Role</dt>
          <dd>{project.role}</dd>
        </div>
        <div>
          <dt>Timeline</dt>
          <dd>{project.timeline}</dd>
        </div>
        <div>
          <dt>Channels</dt>
          <dd>{project.channels}</dd>
        </div>
      </dl>

      <div className={`cs2-hero is-${heroImage?.ratio ?? "landscape"}`}>
        {project.hero?.kind === "video" ? (
          <figure className="cs2-frame">
            <span className="tape" aria-hidden="true" />
            <span className="tape" aria-hidden="true" />
            <video src={project.hero.video.src} poster={project.hero.video.poster} controls preload="none" playsInline />
            <figcaption>{project.hero.video.caption}</figcaption>
          </figure>
        ) : (
          heroImage && (
            <figure className="cs2-frame">
              <span className="tape" aria-hidden="true" />
              <span className="tape" aria-hidden="true" />
              <img src={heroImage.src} alt={heroImage.alt} />
              {heroImage.caption && <figcaption>{heroImage.caption}</figcaption>}
            </figure>
          )
        )}
        {metric && (
          <div className="cs2-sticky">
            <b>{metric.value}</b>
            <span>{metric.label}</span>
            {metric.note && <small>{metric.note}</small>}
          </div>
        )}
      </div>

      <div className="cs2-body">
        <Contents sections={project.sections} />
        <div className="cs2-content">
          {project.sections.map((s, idx) => (
            <SectionView key={s.id} section={s} index={idx} />
          ))}
        </div>
      </div>

      <nav className="cs2-pager" aria-label="More case studies">
        <Link to={`/work/${prev.slug}`}>
          <span className="mono">&larr; Previous</span>
          <span className="big">{prev.title}</span>
        </Link>
        <Link to="/work" className="all mono">
          All work
        </Link>
        <Link to={`/work/${next.slug}`} className="next">
          <span className="mono">Next &rarr;</span>
          <span className="big">{next.title}</span>
        </Link>
      </nav>

      <PageFoot />
    </article>
  );
}
