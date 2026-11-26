import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode, type RefObject } from "react";
import { Link } from "react-router";
import { useMeta } from "../lib/useMeta";
import { usePalette } from "../lib/palette";
import { Hand } from "../components/Hand";
import { TopBar } from "../components/TopBar";
import { CvLink } from "../components/CvLink";
import { ROLES, type RoleSlug } from "../content/roles";
import { SITE } from "../content/site";
import { INTRO } from "../content/home";

const TITLE_START = "I build audiences ";
const TITLE_MARK = "from zero.";

/** Where each role label sits around the photo on a laptop, and the hand-drawn arrow pointing at it. */
const PLACES: Record<RoleSlug, { pos: CSSProperties; arrow: { w: number; h: number; left: number | string; top: number; d: string } }> = {
  growth: { pos: { left: "4%", top: "6%" }, arrow: { w: 120, h: 80, left: "calc(100% - 6px)", top: 22, d: "M2 4 C 40 2, 80 20, 112 66 m-10 -2 l10 2 l-1 -10" } },
  social: { pos: { right: "2%", top: "4%" }, arrow: { w: 110, h: 90, left: -70, top: 26, d: "M60 2 C 30 10, 6 40, 10 82 m-8 -8 l8 8 l6 -9" } },
  content: { pos: { left: 0, top: "44%" }, arrow: { w: 120, h: 40, left: "calc(100% + 6px)", top: 6, d: "M2 14 C 40 4, 80 30, 116 18 m-9 -6 l9 6 l-9 5" } },
  paid: { pos: { right: 0, top: "42%" }, arrow: { w: 110, h: 40, left: -100, top: 8, d: "M104 12 C 70 2, 40 34, 4 20 m9 -7 l-9 7 l9 5" } },
  community: { pos: { left: "50%", bottom: "2%", transform: "translateX(-50%)" }, arrow: { w: 60, h: 60, left: 96, top: -58, d: "M30 56 C 26 40, 34 22, 30 4 m-7 8 l7 -8 l6 9" } },
};

const TYPED_KEY = "home-typed";

/** Splits text into one span per character so the writing animation can reveal them in order. */
function Chars({ text }: { text: string }) {
  return (
    <>
      {[...text].map((c, i) => (
        <span key={i} className="ch" aria-hidden="true">
          {c}
        </span>
      ))}
    </>
  );
}

function useLagosTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { timeZone: "Africa/Lagos", hour: "2-digit", minute: "2-digit" });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);
  return time;
}

/** On paper, nudges the intro so every line of text sits on a notebook rule (34px apart, 30px on phones). */
function useOnTheLines(ref: RefObject<HTMLParagraphElement | null>) {
  const palette = usePalette();
  useLayoutEffect(() => {
    const p = ref.current;
    if (!p) return;
    const align = () => {
      p.style.removeProperty("--rule-nudge");
      if (palette !== "marker") return;
      const phone = innerWidth <= 820;
      const gap = phone ? 30 : 34;
      const base = phone ? 10 : 18;
      const probe = document.createElement("span");
      probe.style.cssText = "display:inline-block;width:0;height:0;vertical-align:baseline";
      p.prepend(probe);
      const baseline = probe.getBoundingClientRect().top + scrollY;
      probe.remove();
      const target = Math.ceil((baseline - (gap - 4)) / gap) * gap + (gap - 4); // 3px above a rule
      p.style.setProperty("--rule-nudge", `${base + target - baseline}px`);
    };
    align();
    document.fonts.ready.then(align);
    addEventListener("resize", align);
    return () => removeEventListener("resize", align);
  }, [palette, ref]);
}

/**
 * The writing animation: "Hi, I'm Sah" is drawn in, the headline types, "from zero." is highlighted,
 * then the intro types. Once per visit, skippable, and off for people who prefer reduced motion.
 */
function useWriting(ref: RefObject<HTMLElement | null>) {
  const [writing, setWriting] = useState(() => {
    if (typeof window === "undefined") return false;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    try {
      return sessionStorage.getItem(TYPED_KEY) !== "1";
    } catch {
      return true;
    }
  });

  useEffect(() => {
    const root = ref.current;
    if (!writing || !root) return;
    const timers: number[] = [];
    const at = (ms: number, fn: () => void) => timers.push(window.setTimeout(fn, ms));
    const hi = root.querySelector(".home-hi");
    const mark = root.querySelector("h1 mark");
    const done = () => {
      timers.forEach(clearTimeout);
      try {
        sessionStorage.setItem(TYPED_KEY, "1");
      } catch {
        // fine: it will just play again next visit
      }
      setWriting(false);
    };

    let t = 250;
    at(t, () => hi?.classList.add("drawn"));
    t += 950;
    const type = (chars: Element[], speed: number, after?: () => void) =>
      chars.forEach((c, i) => {
        const prev = chars[i - 1];
        t += speed + (/[.,:?]/.test(prev?.textContent ?? "") ? speed * 6 : 0);
        at(t, () => {
          prev?.classList.remove("caret");
          c.classList.add("on", "caret");
          if (i === chars.length - 1) after?.();
        });
      });
    type([...root.querySelectorAll("h1 .ch")], 45, () => mark?.classList.add("lit"));
    t += 350;
    type([...root.querySelectorAll(".home-intro .ch")], 14);
    at(t + 700, done);

    const onPointer = (e: PointerEvent) => {
      if (!(e.target as Element).closest("a, button")) done();
    };
    addEventListener("keydown", done, { once: true });
    addEventListener("pointerdown", onPointer);
    return () => {
      timers.forEach(clearTimeout);
      removeEventListener("keydown", done);
      removeEventListener("pointerdown", onPointer);
    };
  }, [writing, ref]);

  const skip = () => {
    try {
      sessionStorage.setItem(TYPED_KEY, "1");
    } catch {
      // fine: it will just play again next visit
    }
    setWriting(false);
  };
  return { writing, skip };
}

export function Home() {
  useMeta(null);
  const time = useLagosTime();
  const hello = useRef<HTMLElement>(null);
  const intro = useRef<HTMLParagraphElement>(null);
  useOnTheLines(intro);
  const { writing, skip } = useWriting(hello);

  // the home page is the full ruled notebook page and fits one screen
  useEffect(() => {
    document.body.classList.add("is-home");
    return () => document.body.classList.remove("is-home");
  }, []);

  const text = (plain: string): ReactNode => (writing ? <Chars text={plain} /> : plain);

  return (
    <div className="home">
      <TopBar />

      <div className="home-middle">
        <section ref={hello} className={`home-hello ${writing ? "is-writing" : ""}`} aria-labelledby="home-title">
          <Hand word="hi-sah" label="Hi, I'm Sah" className="home-hi" />
          <h1 id="home-title" aria-label={TITLE_START + TITLE_MARK}>
            {text(TITLE_START)}
            <mark>{text(TITLE_MARK)}</mark>
          </h1>
          <p ref={intro} className="home-intro" aria-label={writing ? INTRO : undefined}>
            {text(INTRO)}
          </p>
        </section>

        <section className="home-stage" aria-label="What I do">
          <figure className="home-photo">
            <img src="/media/home-me.webp" alt="Saheedat laughing, in sunglasses and a blue shirt" width="640" height="800" />
          </figure>
          <ul className="home-roles">
            {ROLES.map((r) => {
              const p = PLACES[r.slug];
              return (
                <li key={r.slug} style={{ ...p.pos, "--c": `var(${r.colour})` } as CSSProperties}>
                  <Link to={`/work/role/${r.slug}`} className="home-role">
                    <span className="home-role-label">{r.label}</span>
                    <svg width={p.arrow.w} height={p.arrow.h} style={{ left: p.arrow.left, top: p.arrow.top }} aria-hidden="true">
                      <path d={p.arrow.d} />
                    </svg>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </div>

      <footer className="home-bottom mono">
        <span>
          <span className="home-dot" aria-hidden="true" />
          <b>Open to work</b> &nbsp;&middot;&nbsp; Lagos <b>{time}</b>
        </span>
        <span>
          <span className="home-bottom-role">{SITE.role} &nbsp;&middot;&nbsp; </span>
          <CvLink label="Download CV" />
        </span>
      </footer>

      {writing && (
        <button type="button" className="home-skip mono" onClick={skip}>
          Skip &rarr;
        </button>
      )}
    </div>
  );
}
