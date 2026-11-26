import { useCallback, useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { useMeta } from "../lib/useMeta";
import { TopBar } from "../components/TopBar";
import { BITS, BITS_DIR, type Bit } from "../content/bits";

const phone = () => matchMedia("(max-width: 820px)").matches;
const still = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * A pile of photos and clips. On a laptop they're thrown onto one screen from the nearest edge and can
 * be dragged around; a click opens a closer look. On a phone it's a scrolling two-column scrapbook.
 */
export function Bits() {
  useMeta("Bits & pieces", "Photos, screenshots and clips from Saheedat Afolabi's life outside work.");
  const pile = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState<Bit | null>(null);

  // the board fills one screen on laptops
  useEffect(() => {
    document.body.classList.add("is-board");
    return () => document.body.classList.remove("is-board");
  }, []);

  /** Puts every piece back in its spot, starting off-screen on the side it's nearest to, then throws them in. */
  const throwIn = useCallback(() => {
    const root = pile.current;
    if (!root || phone()) return;
    const items = [...root.querySelectorAll<HTMLElement>(".bit-item")];
    items.forEach((el, n) => {
      const b = BITS[n];
      el.style.left = `${b.x}%`;
      el.style.top = `${b.y}%`;
      if (still()) return;
      const dx = b.x + b.w / 2 < 50 ? -1 : 1;
      const dy = b.y < 45 ? -1 : 1;
      const fromSide = Math.abs(b.x + b.w / 2 - 50) > Math.abs(b.y - 45);
      el.style.transition = "none";
      el.style.transform = fromSide
        ? `translate(${dx * 110}vw, ${(Math.random() - 0.5) * 30}vh) rotate(${dx * 40}deg)`
        : `translate(${(Math.random() - 0.5) * 30}vw, ${dy * 110}vh) rotate(${dy * 30}deg)`;
    });
    void root.offsetWidth; // commit the off-screen starting places before animating
    window.setTimeout(() =>
      items.forEach((el, n) => {
        el.style.transition = "";
        el.style.transitionDelay = `${n * 38}ms`;
        el.style.transform = "";
      }),
    30);
  }, []);

  useEffect(throwIn, [throwIn]);

  // phones: pieces slide in from the sides as you scroll
  useEffect(() => {
    const root = pile.current;
    if (!root) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    root.querySelectorAll(".bit-item").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  // dragging on laptops; a press without moving opens the closer look
  const z = useRef(10);
  const drag = useRef<{ x: number; y: number; left: number; top: number; moved: boolean } | null>(null);
  const onPointerDown = (e: PointerEvent<HTMLElement>) => {
    if (phone() || e.button !== 0) return;
    const el = e.currentTarget;
    el.setPointerCapture(e.pointerId);
    drag.current = { x: e.clientX, y: e.clientY, left: el.offsetLeft, top: el.offsetTop, moved: false };
    el.style.transitionDelay = "0ms";
    el.classList.add("dragging");
    el.style.zIndex = String(++z.current);
  };
  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    const d = drag.current;
    if (!d) return;
    if (Math.abs(e.clientX - d.x) + Math.abs(e.clientY - d.y) > 4) d.moved = true;
    e.currentTarget.style.left = `${d.left + e.clientX - d.x}px`;
    e.currentTarget.style.top = `${d.top + e.clientY - d.y}px`;
  };
  const onPointerUp = (e: PointerEvent<HTMLElement>, bit: Bit) => {
    const d = drag.current;
    drag.current = null;
    e.currentTarget.classList.remove("dragging");
    if (d && !d.moved) setOpen(bit);
  };

  return (
    <div className="bits">
      <div className="bits-top">
        <TopBar />
      </div>
      <div className="bits-board">
        <div className="bits-title">
          <h1>
            <span>Bits &amp; pieces</span>
          </h1>
          <p className="mono">
            <span className="hint-laptop">Drag things around. Click to look closer.</span>
            <span className="hint-phone">Tap anything to look closer.</span>
          </p>
          <button type="button" className="bits-shuffle mono" onClick={throwIn}>
            Throw them again
          </button>
        </div>
        <div ref={pile} className="bits-pile">
          {BITS.map((b, i) => (
            <figure
              key={b.src}
              className={`bit-item is-${b.kind}`}
              role="button"
              tabIndex={0}
              aria-label={`${b.caption}${b.kind === "video" ? " (video)" : ""}. Open a closer look.`}
              style={
                {
                  left: `${b.x}%`,
                  top: `${b.y}%`,
                  width: `${b.w}vw`,
                  "--tilt": `${b.tilt}deg`,
                  "--from-x": i % 2 ? "40px" : "-40px",
                } as CSSProperties
              }
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={(e) => onPointerUp(e, b)}
              onClick={() => phone() && setOpen(b)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setOpen(b);
                }
              }}
            >
              <div className="bit-card">
                <span className="tape" aria-hidden="true" />
                <img src={BITS_DIR + (b.poster ?? b.src)} alt="" draggable={false} />
                <figcaption>{b.caption}</figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>

      <dialog ref={dialog} className="bits-look" aria-label="A closer look" onClose={() => setOpen(null)} onClick={(e) => e.target === dialog.current && setOpen(null)}>
        <button type="button" className="bits-close" aria-label="Close" onClick={() => setOpen(null)}>
          &times;
        </button>
        {open && (
          <div className="bits-look-card">
            {open.kind === "video" ? (
              <video src={BITS_DIR + open.src} poster={open.poster && BITS_DIR + open.poster} controls autoPlay playsInline />
            ) : (
              <img src={BITS_DIR + open.src} alt={open.caption} />
            )}
            <p>{open.caption}</p>
          </div>
        )}
      </dialog>
    </div>
  );
}
