import type { PlaceholderSpec } from "../content/types";

const KIND_LABEL: Record<NonNullable<PlaceholderSpec["kind"]>, string> = {
  text: "Copy to add",
  image: "Images to add",
  video: "Video to add",
  screenshot: "Screenshot to add",
  data: "Data to confirm",
  quote: "Quote to add",
};

/**
 * Marks content that has not been supplied yet. It is styled to look deliberate in the layout,
 * but it can never be mistaken for real content.
 */
export function Placeholder({ spec, compact = false }: { spec: PlaceholderSpec; compact?: boolean }) {
  const kind = spec.kind ?? "text";
  return (
    <aside className={`placeholder placeholder-${kind} ${compact ? "is-compact" : ""}`} aria-label={`Placeholder: ${spec.label}`}>
      <p className="mono placeholder-kind">
        <span className="placeholder-dot" aria-hidden="true" />
        {KIND_LABEL[kind]}
      </p>
      <p className="placeholder-label">{spec.label}</p>
      <p className="placeholder-hint">{spec.hint}</p>
    </aside>
  );
}
