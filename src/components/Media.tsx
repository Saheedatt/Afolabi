import { useEffect, useRef, useState } from "react";
import type { ImageAsset, VideoAsset } from "../content/types";

/** Videos never autoplay. The poster shows until the viewer presses play. */
export function Video({ video }: { video: VideoAsset }) {
  return (
    <figure className={`video ${video.vertical ? "is-vertical" : ""}`}>
      <video src={video.src} poster={video.poster} controls preload="none" playsInline aria-label={video.caption} />
      <figcaption className="mono">{video.caption}</figcaption>
    </figure>
  );
}

export function Figure({ image, onOpen }: { image: ImageAsset; onOpen?: () => void }) {
  const img = <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />;
  return (
    <figure className={`figure figure-${image.ratio ?? "landscape"}`}>
      {onOpen ? (
        <button type="button" className="figure-open" onClick={onOpen} aria-label={`Open image: ${image.alt}`}>
          {img}
        </button>
      ) : (
        img
      )}
      {image.caption && <figcaption className="mono">{image.caption}</figcaption>}
    </figure>
  );
}

/** A grid of images. Clicking one opens it full size in a dialog; arrow keys move between them. */
export function Gallery({ images }: { images: ImageAsset[] }) {
  const [current, setCurrent] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (current !== null && !d.open) d.showModal();
    if (current === null && d.open) d.close();
  }, [current]);

  function step(dir: 1 | -1) {
    setCurrent((c) => (c === null ? c : (c + dir + images.length) % images.length));
  }

  const shown = current !== null ? images[current] : null;

  return (
    <>
      <div className={`gallery gallery-${images.length > 4 ? "many" : "few"}`}>
        {images.map((img, i) => (
          <Figure key={img.src} image={img} onOpen={() => setCurrent(i)} />
        ))}
      </div>

      <dialog
        ref={dialog}
        className="lightbox"
        aria-label="Image viewer"
        onClose={() => setCurrent(null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        onClick={(e) => e.target === dialog.current && setCurrent(null)}
      >
        {shown && (
          <div className="lightbox-inner">
            <img src={shown.src} alt={shown.alt} />
            <div className="lightbox-bar mono">
              <span>
                {(current ?? 0) + 1} / {images.length}
                {shown.caption ? `  ${shown.caption}` : ""}
              </span>
              <span className="lightbox-controls">
                <button type="button" onClick={() => step(-1)} aria-label="Previous image">
                  Prev
                </button>
                <button type="button" onClick={() => step(1)} aria-label="Next image">
                  Next
                </button>
                <button type="button" onClick={() => setCurrent(null)} aria-label="Close image viewer">
                  Close
                </button>
              </span>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
