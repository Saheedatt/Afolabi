import type { Metric } from "../content/types";

export function MetricItem({ metric, size = "md" }: { metric: Metric; size?: "md" | "sm" }) {
  return (
    <div className={`metric metric-${size}`}>
      <span className="metric-value">{metric.value}</span>
      <span className="metric-label">{metric.label}</span>
      {metric.note && <span className="metric-note">{metric.note}</span>}
      {metric.status === "pending" && <span className="mono metric-pending">Pending confirmation</span>}
    </div>
  );
}

export function MetricList({ items }: { items: Metric[] }) {
  return (
    <div className={`metric-list cols-${Math.min(items.length, 4)}`}>
      {items.map((m) => (
        <MetricItem key={m.label} metric={m} />
      ))}
    </div>
  );
}
