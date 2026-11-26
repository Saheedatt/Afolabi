import { Link } from "react-router";
import { useMeta } from "../lib/useMeta";

export function NotFound() {
  useMeta("Page not found");
  return (
    <div className="page-wrap notfound2">
      <p className="phead-kicker mono">404</p>
      <h1 className="contact2-title">
        Nothing <mark>here.</mark>
      </h1>
      <p className="phead-intro">That link doesn't lead anywhere. The work is a better place to start.</p>
      <nav className="chips notfound2-links" aria-label="Where to go instead">
        <Link to="/work">See the work</Link>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}
