import { SITE } from "../content/site";

/**
 * Downloads the CV PDF. Until the PDF is in /public and SITE.cvReady is true,
 * it says so instead of linking nowhere.
 */
export function CvLink({ className, label = "CV" }: { className?: string; label?: string }) {
  if (!SITE.cvReady) {
    return (
      <span className={`cv-pending ${className ?? ""}`} title="The CV PDF has not been added yet">
        {label} (coming soon)
      </span>
    );
  }
  return (
    <a href={SITE.cv} download={SITE.cvDownloadName} className={className}>
      {label}
    </a>
  );
}
