import type { Project } from "../content/types";

/**
 * A project's cover. Uses the cover image when there is one; otherwise a typographic cover
 * that looks intentional and is labelled as waiting for an image.
 */
export function Cover({ project, sizes }: { project: Project; sizes?: string }) {
  if (project.cover) {
    return (
      <div className={`cover cover-${project.coverTone ?? "grey"} cover-${project.cover.ratio ?? "landscape"}`}>
        <img src={project.cover.src} alt={project.cover.alt} loading="lazy" decoding="async" sizes={sizes} />
      </div>
    );
  }
  return (
    <div className={`cover cover-type cover-${project.coverTone ?? "grey"}`} role="img" aria-label={`${project.title}, cover image coming soon`}>
      <span className="cover-type-title serif">{project.title}</span>
      <span className="cover-type-meta mono">{project.year}</span>
      <span className="cover-type-flag mono">Cover image to add</span>
    </div>
  );
}
