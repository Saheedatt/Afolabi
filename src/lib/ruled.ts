import { useEffect } from "react";
import { useLocation } from "react-router";
import { usePalette } from "./palette";

/**
 * On Paper, text written straight onto the page sits on the notebook rules, like handwriting in a
 * notebook. These paragraphs get a line height equal to the rule spacing (see theme.css), and this
 * nudges each one down so its first line lands just above a rule; the following lines then follow.
 * Text inside cards, sticky notes and photos is left alone: there are no rules behind it.
 */
export const RULED_TEXT = [
  ".about-copy p",
  ".phead-intro",
  ".nb-p",
  ".nb-lead",
  ".spread-notes > p",
  ".entry-line",
  ".role-row p",
  ".sec-sub",
].join(", ");

/** Distance from the top of the page, ignoring transforms (the slide-in animations). */
function pageTop(el: HTMLElement) {
  let y = 0;
  for (let n: HTMLElement | null = el; n; n = n.offsetParent as HTMLElement | null) y += n.offsetTop;
  return y;
}

function snap() {
  const items = [...document.querySelectorAll<HTMLElement>(RULED_TEXT)];
  items.forEach((el) => el.style.removeProperty("--rule-nudge"));
  if (document.documentElement.dataset.palette !== "marker") return;
  const gap = innerWidth <= 820 ? 30 : 34; // the rule spacing in theme.css
  // top to bottom: each nudge moves everything below it, so measure as we go
  items.forEach((el) => {
    const probe = document.createElement("span");
    probe.style.cssText = "display:inline-block;width:0;height:0;vertical-align:baseline";
    el.prepend(probe);
    const baseline = pageTop(probe);
    probe.remove();
    const target = Math.ceil((baseline - (gap - 4)) / gap) * gap + (gap - 4); // 3px above the rule at gap*k + gap - 1
    el.style.setProperty("--rule-nudge", `${target - baseline}px`);
  });
}

/** Keeps the page's text on the rules as fonts, images, the mode and the window size change. */
export function useRuledText() {
  const { pathname } = useLocation();
  const palette = usePalette();
  useEffect(() => {
    let frame = 0;
    const run = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(snap);
    };
    run();
    document.fonts.ready.then(run);
    addEventListener("resize", run);
    addEventListener("load", run);
    // pictures loading above a paragraph push it off its rule; snap again when the page height changes
    let lastHeight = 0;
    const ro = new ResizeObserver(() => {
      const h = document.body.scrollHeight;
      if (Math.abs(h - lastHeight) > 2) {
        lastHeight = h;
        run();
      }
    });
    ro.observe(document.body);
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("resize", run);
      removeEventListener("load", run);
      ro.disconnect();
    };
  }, [pathname, palette]);
}
