import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router";

const YEAR = new Date().getFullYear();

/** Kicker, big title with a highlighter swipe in `colour`, and an optional intro. */
export function PageHead({
  kicker,
  title,
  colour = "--h1",
  children,
}: {
  kicker: ReactNode;
  title: string;
  colour?: string;
  children?: ReactNode;
}) {
  return (
    <header className="phead" style={{ "--c": `var(${colour})` } as CSSProperties}>
      <p className="phead-kicker mono">{kicker}</p>
      <h1 className="phead-title">
        <span>{title}</span>
      </h1>
      {children}
    </header>
  );
}

/** The closing line of every rebuilt page, in the live footer's words. */
export function PageFoot({ aside }: { aside?: ReactNode }) {
  return (
    <footer className="pfoot">
      <div>
        <p className="mono pfoot-kicker">Open to remote roles and collaborations</p>
        <Link to="/contact" className="pfoot-big">
          Start a conversation
        </Link>
      </div>
      {aside ?? <p className="mono pfoot-kicker">&copy; {YEAR} Saheedat Afolabi</p>}
    </footer>
  );
}
