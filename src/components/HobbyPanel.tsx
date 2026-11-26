import { useEffect, useRef, useState, type CSSProperties, type RefObject } from "react";
import { BOOKS, DJ_SETS, LIVE, READING_GOAL, type Video } from "../content/interests";

export type PanelKind = "books" | "sets" | "live";

const TILT = [-2, 1.5, -1, 2, -1.5, 1];
const COLOURS = ["--h1", "--h2", "--h3", "--h4", "--h5", "--h6"];

/** A YouTube video that only loads YouTube when tapped (privacy-friendly embed). */
function VideoCard({ video, tilt }: { video: Video; tilt: number }) {
  const [playing, setPlaying] = useState(false);
  return (
    <li className="vid" style={{ "--tilt": `${tilt}deg` } as CSSProperties}>
      {video.favourite && <span className="vid-fav mono">My favourite</span>}
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`}
          title={video.title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="vid-play"
          aria-label={`Play ${video.title}`}
          style={{ backgroundImage: `url(https://i.ytimg.com/vi/${video.id}/hqdefault.jpg)` }}
          onClick={() => setPlaying(true)}
        />
      )}
      <h3>{video.title}</h3>
      <p className="mono">{video.channel}</p>
      {video.more && (
        <a className="vid-more mono" href={video.more.href} target="_blank" rel="noreferrer">
          {video.more.label} &#8599;<span className="visually-hidden"> (opens in a new tab)</span>
        </a>
      )}
    </li>
  );
}

function Videos({ videos }: { videos: Video[] }) {
  return (
    <ul className="vids">
      {videos.map((v, i) => (
        <VideoCard key={v.id} video={v} tilt={TILT[i % TILT.length] / 2} />
      ))}
    </ul>
  );
}

/**
 * The drawer that opens from a hobby phrase on About: from the right on a laptop, from the bottom on
 * a phone. Escape, the close button or a click outside closes it, and focus goes back to the phrase.
 */
export function HobbyPanel({
  kind,
  onClose,
  returnTo,
}: {
  kind: PanelKind | null;
  onClose: () => void;
  /** the phrase that opened the panel; focus goes back to it on close */
  returnTo: RefObject<HTMLElement | null>;
}) {
  const closeBtn = useRef<HTMLButtonElement>(null);
  const sheet = useRef<HTMLDivElement>(null);
  // keep the last content on screen while the drawer slides away
  const [shown, setShown] = useState<PanelKind | null>(kind);
  if (kind && kind !== shown) setShown(kind);
  const open = kind !== null;

  useEffect(() => {
    if (!open) return;
    const opener = returnTo.current;
    document.body.style.overflow = "hidden";
    sheet.current?.scrollTo(0, 0);
    const t = setTimeout(() => closeBtn.current?.focus({ preventScroll: true }), 50);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      // keep Tab inside the open panel
      if (e.key === "Tab" && sheet.current) {
        const items = [...sheet.current.querySelectorAll<HTMLElement>("button, a[href], iframe")];
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        } else if (!sheet.current.contains(document.activeElement)) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      opener?.focus({ preventScroll: true });
    };
  }, [open, onClose, returnTo]);

  return (
    <div className={`panel ${open ? "open" : ""}`} aria-hidden={!open} inert={!open}>
      <button type="button" className="panel-scrim" aria-label="Close" tabIndex={-1} onClick={onClose} />
      <div ref={sheet} className="panel-sheet" role="dialog" aria-modal="true" aria-labelledby="panel-title">
        <button ref={closeBtn} type="button" className="panel-x" aria-label="Close" onClick={onClose}>
          &times;
        </button>
        {shown === "books" && (
          <>
            <h2 id="panel-title" style={{ "--c": "var(--h3)" } as CSSProperties}>
              <span>Books I've read in 2026</span>
            </h2>
            <div className="goal">
              <p className="mono">
                {BOOKS.length} of {READING_GOAL}
              </p>
              <div className="goal-bar" style={{ "--p": `${(BOOKS.length / READING_GOAL) * 100}%` } as CSSProperties}>
                <i />
              </div>
            </div>
            <ol className="books">
              {BOOKS.map((b, i) => (
                <li
                  key={b.title}
                  style={{ "--i": i, "--tilt": `${TILT[i % TILT.length]}deg`, "--c": `var(${COLOURS[i % COLOURS.length]})` } as CSSProperties}
                >
                  <span className="book-n" aria-hidden="true">
                    {i + 1}
                  </span>
                  <img src={b.cover} alt={`Cover of ${b.title}`} loading="lazy" />
                  <p>
                    {b.title}
                    <span>{b.author}</span>
                  </p>
                </li>
              ))}
            </ol>
          </>
        )}
        {shown === "sets" && (
          <>
            <h2 id="panel-title" style={{ "--c": "var(--h2)" } as CSSProperties}>
              <span>My favourite DJ sets</span>
            </h2>
            <Videos videos={DJ_SETS.videos} />
          </>
        )}
        {shown === "live" && (
          <>
            <h2 id="panel-title" style={{ "--c": "var(--h5)" } as CSSProperties}>
              <span>Old live performances</span>
            </h2>
            <Videos videos={LIVE} />
          </>
        )}
      </div>
    </div>
  );
}
