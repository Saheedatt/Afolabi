import { Link } from "react-router";

/** Small building blocks used across pages. */

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
