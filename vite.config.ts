import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { SITE } from "./src/content/site";
import { PROJECTS } from "./src/content/projects";
import { LAB } from "./src/content/lab";

interface RouteMeta {
  path: string;
  title: string;
  description: string;
  image?: string;
}

function routes(): RouteMeta[] {
  return [
    { path: "/", title: `${SITE.name}, ${SITE.role}`, description: SITE.description },
    { path: "/work", title: `Work | ${SITE.name}`, description: "Case studies in growth marketing, social media and content strategy." },
    ...PROJECTS.map((p) => ({ path: `/work/${p.slug}`, title: `${p.title} | ${SITE.name}`, description: p.summary, image: p.cover?.src })),
    { path: "/about", title: `About | ${SITE.name}`, description: "How Saheedat Afolabi went from photographing her brother's clothes to marketing a game launch." },
    ...(SITE.labEnabled
      ? [
          { path: "/lab", title: `The Lab | ${SITE.name}`, description: "Marketing experiments, personal projects, research and observations." },
          ...LAB.map((e) => ({ path: `/lab/${e.slug}`, title: `${e.title} | ${SITE.name}`, description: e.summary })),
        ]
      : []),
    { path: "/contact", title: `Contact | ${SITE.name}`, description: "Get in touch about roles, freelance work or collaborations." },
  ];
}

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

/**
 * After the build, writes dist/<route>/index.html for every route with that route's title,
 * description and social preview tags. Each URL then works when opened directly or refreshed,
 * and shows the right preview when shared, while navigation inside the site stays client-side.
 * Also writes sitemap.xml.
 */
function prerenderMeta(): Plugin {
  return {
    name: "prerender-meta",
    apply: "build",
    closeBundle() {
      const dist = join(process.cwd(), "dist");
      const template = readFileSync(join(dist, "index.html"), "utf8");
      for (const r of routes()) {
        const url = SITE.url + (r.path === "/" ? "" : r.path);
        const image = SITE.url + (r.image ?? SITE.ogImage);
        const head = [
          `<title>${esc(r.title)}</title>`,
          `<meta name="description" content="${esc(r.description)}" />`,
          `<link rel="canonical" href="${url}" />`,
          `<meta property="og:type" content="website" />`,
          `<meta property="og:site_name" content="${esc(SITE.name)}" />`,
          `<meta property="og:title" content="${esc(r.title)}" />`,
          `<meta property="og:description" content="${esc(r.description)}" />`,
          `<meta property="og:url" content="${url}" />`,
          `<meta property="og:image" content="${image}" />`,
          // the default share image has a known size; giving it lets LinkedIn show it without guessing
          ...(r.image
            ? []
            : [
                `<meta property="og:image:width" content="1200" />`,
                `<meta property="og:image:height" content="630" />`,
                `<meta property="og:image:alt" content="${esc(`${SITE.name}, ${SITE.role}`)}" />`,
              ]),
          `<meta name="twitter:card" content="summary_large_image" />`,
          `<meta name="twitter:image" content="${image}" />`,
        ].join("\n    ");
        const html = template.replace(/<title>[\s\S]*?<\/title>\s*<!--meta-->/, head);
        const dir = r.path === "/" ? dist : join(dist, r.path);
        mkdirSync(dir, { recursive: true });
        writeFileSync(join(dir, "index.html"), html);
      }
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes()
        .map((r) => `  <url><loc>${SITE.url}${r.path === "/" ? "" : r.path}</loc></url>`)
        .join("\n")}\n</urlset>\n`;
      writeFileSync(join(dist, "sitemap.xml"), sitemap);
    },
  };
}

export default defineConfig({
  plugins: [react(), prerenderMeta()],
});
