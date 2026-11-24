import { useEffect } from "react";
import { SITE } from "../content/site";

function setMeta(attr: "name" | "property", key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = value;
}

/**
 * Keeps the title and description in step with the current view during client-side navigation.
 * The same values are written into static HTML at build time (see vite.config.ts), so direct
 * visits and link previews get them too.
 */
export function useMeta(title: string | null, description: string = SITE.description, image: string = SITE.ogImage) {
  useEffect(() => {
    const full = title ? `${title} | ${SITE.name}` : `${SITE.name}, ${SITE.role}`;
    document.title = full;
    setMeta("name", "description", description);
    setMeta("property", "og:title", full);
    setMeta("property", "og:description", description);
    setMeta("property", "og:image", image);
  }, [title, description, image]);
}
