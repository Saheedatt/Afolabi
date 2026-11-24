import { Link } from "react-router";
import { SITE } from "../content/site";
import { CvLink } from "./CvLink";

const YEAR = new Date().getFullYear();

export function Footer({ flush = false }: { flush?: boolean }) {
  return (
    <footer className={`footer ${flush ? "is-flush" : ""}`}>
      <div className="wrap footer-inner">
        <div className="footer-cta">
          <p className="mono">Open to remote roles and collaborations</p>
          <Link to="/contact" className="footer-big">
            Start a conversation
          </Link>
        </div>
        <ul className="footer-links mono">
          <li>
            <a href={`mailto:${SITE.email}`}>Email</a>
          </li>
          <li>
            <a href={SITE.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <CvLink />
          </li>
        </ul>
      </div>
      <div className="wrap footer-base mono">
        <span>© {YEAR} {SITE.name}</span>
        <span>Social, content, growth</span>
      </div>
    </footer>
  );
}
