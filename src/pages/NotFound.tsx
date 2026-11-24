import { useMeta } from "../lib/useMeta";
import { ButtonLink } from "../components/ui";

export function NotFound() {
  useMeta("Page not found");
  return (
    <section className="page-head wrap notfound">
      <p className="mono page-kicker">404</p>
      <h1 className="page-title">
        Nothing <span className="serif">here.</span>
      </h1>
      <p className="page-intro">That link doesn't lead anywhere. The work is a better place to start.</p>
      <div className="hero-actions">
        <ButtonLink to="/work">See the work</ButtonLink>
        <ButtonLink to="/" variant="ghost">
          Home
        </ButtonLink>
      </div>
    </section>
  );
}
