import { useSyncExternalStore } from "react";

/** The two colour modes. "marker" is Paper (the default); "shirt" is Blue. */
export type Palette = "marker" | "shirt";

const KEY = "palette";
const listeners = new Set<() => void>();

function read(): Palette {
  return document.documentElement.dataset.palette === "shirt" ? "shirt" : "marker";
}

export function setPalette(p: Palette) {
  document.documentElement.dataset.palette = p;
  try {
    localStorage.setItem(KEY, p);
  } catch {
    // private windows can refuse storage; the mode still applies for this visit
  }
  listeners.forEach((l) => l());
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

/** The current mode. index.html sets it from storage before the first paint. */
export function usePalette(): Palette {
  return useSyncExternalStore(subscribe, read, () => "marker");
}
