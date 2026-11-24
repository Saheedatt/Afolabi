import type { ReactNode } from "react";
import { Link } from "react-router";

/** Small building blocks used across pages. */

export function ButtonLink({
  to,
  children,
  variant = "solid",
}: {
  to: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
}) {
  return (
    <Link to={to} className={`btn btn-${variant}`}>
      {children}
    </Link>
  );
}

export function Tag({ children, tone = "plain" }: { children: ReactNode; tone?: "plain" | "lime" }) {
  return <span className={`tag mono tag-${tone}`}>{children}</span>;
}

export function SectionHeader({
  index,
  title,
  aside,
  id,
}: {
  index?: string;
  title: ReactNode;
  aside?: ReactNode;
  id?: string;
}) {
  return (
    <div className="section-header">
      {index && <span className="mono section-index">{index}</span>}
      <h2 id={id}>{title}</h2>
      {aside && <div className="section-aside">{aside}</div>}
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs mono">
      <ol>
        {items.map((item, i) => (
          <li key={item.label}>
            {item.to ? <Link to={item.to}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
            {i < items.length - 1 && <span aria-hidden="true"> / </span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
