import { useState, type CSSProperties } from "react";
import { Link } from "react-router";
import { useMeta } from "../lib/useMeta";
import { useReveal } from "../lib/reveal";
import { CASES, HERPHYSIO, PHYSIO_INTRO, UNITS } from "../content/physio";
import { PageFoot, PageHead } from "../components/Page";

/** A hand-drawn body outline; the pins on it match the numbered cards. */
function Body({ active, onPick }: { active: number; onPick: (i: number, scroll: boolean) => void }) {
  return (
    <svg viewBox="0 0 240 520" role="img" aria-label={`Outline of a body with ${CASES.length} numbered pins, one for each case`}>
      <defs>
        {/* a little wobble so the outline looks drawn by hand */}
        <filter id="hand-wobble">
          <feTurbulence type="fractalNoise" baseFrequency=".035" numOctaves={2} seed={3} />
          <feDisplacementMap in="SourceGraphic" scale={3} />
        </filter>
      </defs>
      <g className="body-line" filter="url(#hand-wobble)">
        <ellipse cx="120" cy="48" rx="30" ry="36" />
        <path d="M108 82 L106 100 M132 82 L134 100" />
        <path d="M106 100 C 80 104, 62 110, 56 128 C 50 170, 46 210, 40 250 C 36 276, 34 292, 32 304" />
        <path d="M134 100 C 160 104, 178 110, 184 128 C 190 170, 194 210, 200 250 C 204 276, 206 292, 208 304" />
        <path d="M74 140 C 76 190, 78 230, 82 262 C 84 280, 82 290, 80 300" />
        <path d="M166 140 C 164 190, 162 230, 158 262 C 156 280, 158 290, 160 300" />
        <path d="M80 300 C 78 360, 84 410, 86 450 C 87 476, 84 494, 80 508 L 104 508 C 106 470, 110 420, 116 330 L 120 318" />
        <path d="M160 300 C 162 360, 156 410, 154 450 C 153 476, 156 494, 160 508 L 136 508 C 134 470, 130 420, 124 330 L 120 318" />
        <path d="M86 112 C 100 120, 140 120, 154 112" opacity=".5" />
      </g>
      {CASES.map((c, i) => (
        <g
          key={c.name}
          className={`pin ${active === i ? "on" : ""}`}
          style={{ "--c": `var(${c.colour})` } as CSSProperties}
          transform={`translate(${c.pin[0]} ${c.pin[1]})`}
          onMouseEnter={() => onPick(i, false)}
          onClick={() => onPick(i, true)}
          aria-hidden="true"
        >
          <circle className="pulse" r="13" />
          <circle className="ring" r="13" />
          <text>{i + 1}</text>
        </g>
      ))}
    </svg>
  );
}

export function Physio() {
  useMeta(
    "Physiotherapy",
    "Saheedat Afolabi is also a physiotherapist: conditions she has helped manage and the units she has worked across.",
  );
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState(0);
  const pick = (i: number, scroll: boolean) => {
    setActive(i);
    if (scroll) document.getElementById(`case-${i + 1}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div ref={ref} className="page-wrap physio">
      <PageHead kicker="Physio" title="Physiotherapy" colour="--h6">
        <p className="phead-intro">{PHYSIO_INTRO}</p>
      </PageHead>

      <section className="sec" style={{ "--c": "var(--h6)" } as CSSProperties} aria-labelledby="cases-title">
        <h2 id="cases-title" className="sec-title">
          <span>Cases I've worked on</span>
        </h2>
        <p className="sec-sub mono">Tap a pin or a card.</p>
        <div className="case-map">
          <div className="case-figure">
            <Body active={active} onPick={pick} />
          </div>
          <ol className="case-cards">
            {CASES.map((c, i) => (
              <li
                key={c.name}
                id={`case-${i + 1}`}
                className="case-card reveal"
                data-on={active === i ? "" : undefined}
                style={{ "--c": `var(${c.colour})` } as CSSProperties}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                <span className="case-n" aria-hidden="true">
                  {i + 1}
                </span>
                <h3>{c.name}</h3>
                <p className="case-where mono">{c.where}</p>
                <p className="case-plain">
                  <b>In plain words</b>
                  {c.plain}
                </p>
              </li>
            ))}
          </ol>
        </div>
        <Link to="/contact" className="ask reveal">
          <span className="tape" aria-hidden="true" />
          Want to hear about any of these cases? Ask me &rarr;
        </Link>
      </section>

      <section className="sec" style={{ "--c": "var(--h3)" } as CSSProperties} aria-labelledby="units-title">
        <h2 id="units-title" className="sec-title">
          <span>Units I've worked across</span>
        </h2>
        <ul className="units">
          {UNITS.map((u) => (
            <li key={u} className="unit reveal">
              <span className="tape" aria-hidden="true" />
              <b>{u}</b>
            </li>
          ))}
        </ul>
      </section>

      <section className="sec" style={{ "--c": "var(--h5)" } as CSSProperties} aria-labelledby="hp-title">
        <h2 id="hp-title" className="sec-title">
          <span>HerPhysio Movement</span>
        </h2>
        <div className="herphysio reveal">
          <p>{HERPHYSIO.line}</p>
          <div className="herphysio-stat">
            <b>{HERPHYSIO.stat.value}</b>
            <span>{HERPHYSIO.stat.label}</span>
          </div>
        </div>
      </section>

      <PageFoot
        aside={
          <Link className="mono" to="/work">
            See the marketing work &rarr;
          </Link>
        }
      />
    </div>
  );
}
