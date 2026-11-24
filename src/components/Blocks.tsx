import type { Block, Section } from "../content/types";
import { MetricList } from "./Metrics";
import { Placeholder } from "./Placeholder";
import { Figure, Gallery, Video } from "./Media";

export function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "text":
      return (
        <div className="b-text">
          {block.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      );
    case "lead":
      return <p className="b-lead serif">{block.body}</p>;
    case "subhead":
      return <h3 className="b-subhead">{block.body}</h3>;
    case "list": {
      const Tag = block.numbered ? "ol" : "ul";
      return (
        <Tag className={`b-list ${block.numbered ? "is-numbered" : ""}`}>
          {block.items.map((item, i) => (
            <li key={i}>
              {block.numbered && <span className="mono b-list-num">{String(i + 1).padStart(2, "0")}</span>}
              <div>
                {item.title && <h4>{item.title}</h4>}
                <p>{item.body}</p>
              </div>
            </li>
          ))}
        </Tag>
      );
    }
    case "metrics":
      return <MetricList items={block.items} />;
    case "image":
      return (
        <div className={`b-image ${block.wide ? "is-wide" : ""}`}>
          <Figure image={block.image} />
        </div>
      );
    case "gallery":
      return <Gallery images={block.images} />;
    case "videos":
      return (
        <div className="b-videos">
          {block.videos.map((v) => (
            <Video key={v.src} video={v} />
          ))}
        </div>
      );
    case "quote":
      return (
        <blockquote className="b-quote">
          <p className="serif">{block.text}</p>
          <footer className="mono">{block.source}</footer>
        </blockquote>
      );
    case "compare":
      return (
        <div className="b-compare">
          <div>
            <span className="mono">{block.before.label}</span>
            <span className="b-compare-value">{block.before.value}</span>
          </div>
          <span className="b-compare-arrow" aria-hidden="true" />
          <div className="is-after">
            <span className="mono">{block.after.label}</span>
            <span className="b-compare-value">{block.after.value}</span>
          </div>
          {block.note && <p className="b-compare-note mono">{block.note}</p>}
        </div>
      );
    case "callout":
      return (
        <div className="b-callout">
          <p className="b-callout-title">{block.title}</p>
          <p>{block.body}</p>
        </div>
      );
    case "links":
      return (
        <ul className="b-links">
          {block.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} target="_blank" rel="noreferrer">
                {l.label}
                <span className="visually-hidden"> (opens in a new tab)</span>
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
    <section className="cs-section" aria-labelledby={`h-${section.id}`} id={section.id}>
      <header className="cs-section-head">
        <span className="mono">{String(index + 1).padStart(2, "0")}</span>
        <h2 id={`h-${section.id}`}>{section.title}</h2>
      </header>
      <div className="cs-section-body">
        {section.blocks.map((b, i) => (
          <BlockView key={i} block={b} />
        ))}
      </div>
    </section>
  );
}
