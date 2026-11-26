/**
 * Makes saving the site's photos and clips less casual: no right-click or long-press menu on them
 * (so no "Save image as…"), no dragging them out of the page, and no download button in video
 * players. It can't stop screenshots or someone determined; it removes the easy ways.
 */
export function protectMedia() {
  const isMedia = (t: EventTarget | null) => t instanceof HTMLImageElement || t instanceof HTMLVideoElement;
  document.addEventListener("contextmenu", (e) => {
    if (isMedia(e.target)) e.preventDefault();
  });
  document.addEventListener("dragstart", (e) => {
    if (isMedia(e.target)) e.preventDefault();
  });

  // every video, including ones added later, gets the player without download or picture-in-picture
  const lock = (v: HTMLVideoElement) => {
    v.setAttribute("controlslist", "nodownload noplaybackrate");
    v.disablePictureInPicture = true;
  };
  document.querySelectorAll("video").forEach(lock);
  new MutationObserver((records) =>
    records.forEach((r) =>
      r.addedNodes.forEach((n) => {
        if (n instanceof HTMLVideoElement) lock(n);
        else if (n instanceof Element) n.querySelectorAll("video").forEach(lock);
      }),
    ),
  ).observe(document.body, { childList: true, subtree: true });
}
