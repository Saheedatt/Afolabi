import type { CSSProperties } from "react";
import type { Block, Section } from "../content/types";
import { Placeholder } from "./Placeholder";
import { Gallery } from "./Media";

/** The highlighter colours, used in turn for section titles and sticky notes. */
const HIGHLIGHTS = ["--h1", "--h2", "--h3", "--h4", "--h5", "--h6"];

/** Case-study content drawn as notebook pieces: sticky notes, taped photos, a checklist. */
export function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "text":
      return (
        <>
          {block.body.map((p, i) => (
            <p key={i} className="nb-p reveal">
              {p}
            </p>
          ))}
        </>
      );
    case "lead":
      return <p className="nb-lead reveal">{block.body}</p>;
    case "subhead":
      return <h3 className="nb-subhead reveal">{block.body}</h3>;
    case "list": {
      const Tag = block.numbered ? "ol" : "ul";
      return (
        <Tag className={`nb-list ${block.numbered ? "is-numbered" : "is-check"}`}>
          {block.items.map((item, i) => (
            <li key={i} className="reveal">
              {block.numbered && (
                <span className="nb-list-n" aria-hidden="true">
                  {i + 1}
                </span>
              )}
              <div>
                {item.title && <b>{item.title}</b>}
                <span>{item.body}</span>
              </div>
            </li>
          ))}
        </Tag>
      );
    }
    case "metrics":
      return (
        <div className="nb-stats">
          {block.items.map((m) => (
            <div key={m.label} className="nb-stat reveal">
              <b>{m.value}</b>
              <span>{m.label}</span>
              {m.note && <small>{m.note}</small>}
              {m.status === "pending" && <small className="mono">Pending confirmation</small>}
            </div>
          ))}
        </div>
      );
    case "image":
      return (
        <figure className={`nb-pic reveal from-right ${block.wide ? "is-wide" : ""}`}>
          <span className="tape" aria-hidden="true" />
          <img src={block.image.src} alt={block.image.alt} loading="lazy" decoding="async" />
          {block.image.caption && <figcaption>{block.image.caption}</figcaption>}
        </figure>
      );
    case "gallery":
      return (
        <div className="nb-gallery reveal">
          <Gallery images={block.images} />
        </div>
      );
    case "videos":
      return (
        <div className="nb-reel" role="list" aria-label="Videos">
          {block.videos.map((v) => (
            <figure key={v.src} className={`nb-phone ${v.vertical ? "" : "is-wide"}`} role="listitem">
              <span className="tape" aria-hidden="true" />
              <video src={v.src} poster={v.poster} controls preload="none" playsInline aria-label={v.caption} />
              <figcaption>{v.caption}</figcaption>
            </figure>
          ))}
        </div>
      );
    case "quote":
      return (
        <blockquote className="nb-quote reveal">
          <p>{block.text}</p>
          <footer className="mono">{block.source}</footer>
        </blockquote>
      );
    case "compare":
      return (
        <div className="nb-compare reveal">
          <div>
            <span className="mono">{block.before.label}</span>
            <b>{block.before.value}</b>
          </div>
          <span className="nb-compare-arrow" aria-hidden="true">
            &rarr;
          </span>
          <div className="is-after">
            <span className="mono">{block.after.label}</span>
            <b>{block.after.value}</b>
          </div>
          {block.note && <p className="nb-compare-note mono">{block.note}</p>}
        </div>
      );
    case "callout":
      return (
        <div className="nb-note reveal">
          <span className="tape" aria-hidden="true" />
          <b>{block.title}</b>
          <p>{block.body}</p>
        </div>
      );
    case "links":
      return (
        <ul className="nb-chips reveal">
          {block.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} target="_blank" rel="noreferrer">
                {l.label} &#8599;<span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      );
    case "placeholder":
      return <Placeholder spec={block.spec} />;
  }
}

export function SectionView({ section, index }: { section: Section; index: number }) {
  return (
    <section
      className="nb-section"
      aria-labelledby={`h-${section.id}`}
      id={section.id}
      style={{ "--sc": `var(${HIGHLIGHTS[index % HIGHLIGHTS.length]})` } as CSSProperties}
    >
      <div className="nb-section-head">
        <span className="mono">{String(index + 1).padStart(2, "0")}</span>
        <h2 id={`h-${section.id}`}>
          <em>{section.title}</em>
        </h2>
      </div>
      {section.blocks.map((b, i) => (
        <BlockView key={i} block={b} />
      ))}
    </section>
  );
}
