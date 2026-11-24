import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { NAV, SITE } from "../content/site";

export function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="nav">
      <div className="nav-inner wrap">
        <Link to="/" className="wordmark" onClick={close}>
          {SITE.name}
        </Link>

        <nav aria-label="Main" className="nav-desktop">
          <ul>
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === "/"}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="nav-toggle mono"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div id="mobile-menu" className={`nav-mobile ${open ? "is-open" : ""}`} hidden={!open}>
        <nav aria-label="Main">
          <ol>
            {NAV.map((item, i) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === "/"} onClick={close}>
                  <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ol>
        </nav>
        <div className="nav-mobile-foot mono">
          <a href={`mailto:${SITE.email}`}>Email</a>
          <a href={SITE.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
