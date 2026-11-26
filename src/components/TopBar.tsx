import { Link, NavLink } from "react-router";
import { Hand } from "./Hand";
import { setPalette, usePalette } from "../lib/palette";

// Physio isn't in the menu: the site leads with marketing. The Physio page is reached from About
// ("I'm also a physiotherapist") and from HerPhysio on the Community role page.
const LINKS = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function ModeToggle() {
  const palette = usePalette();
  return (
    <div className="mode mono" role="group" aria-label="Colour mode">
      <button type="button" aria-pressed={palette === "marker"} onClick={() => setPalette("marker")}>
        <i style={{ background: "#fbfbf7" }} />
        <span className="mode-label">Paper</span>
      </button>
      <button type="button" aria-pressed={palette === "shirt"} onClick={() => setPalette("shirt")}>
        <i style={{ background: "#3448b8" }} />
        <span className="mode-label">Blue</span>
      </button>
    </div>
  );
}

/** Handwritten name, the menu and the Paper/Blue switch. Used on every page. */
export function TopBar() {
  return (
    <header className="topbar">
      <Link to="/" className="topbar-logo" aria-label="Saheedat Afolabi, home">
        <Hand word="name" />
      </Link>
      <div className="topbar-right">
        <nav className="topbar-nav" aria-label="Main">
          <ul>
            {LINKS.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to}>{l.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
}
