import type { CSSProperties } from "react";

/** Words in Saheedat's handwriting, cut from a photo of her notebook. Sizes are the PNGs' own. */
const HANDS = {
  name: [929, 270],
  work: [235, 100],
  physio: [293, 116],
  about: [251, 116],
  contact: [425, 92],
  "hi-sah": [585, 146],
} as const;

export type HandWord = keyof typeof HANDS;

/**
 * Shows a handwritten word in the current ink colour. Pass `label` when the word carries meaning on
 * its own; leave it out when the surrounding link already has an accessible name.
 */
export function Hand({ word, label, className = "" }: { word: HandWord; label?: string; className?: string }) {
  const [w, h] = HANDS[word];
  const style = { "--src": `url(/hand/hand-${word}.png)`, aspectRatio: `${w} / ${h}` } as CSSProperties;
  return label ? (
    <span className={`hw hw-${word} ${className}`} style={style} role="img" aria-label={label} />
  ) : (
    <span className={`hw hw-${word} ${className}`} style={style} aria-hidden="true" />
  );
}
