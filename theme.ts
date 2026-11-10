/**
 * THEME — the single source of truth for colours and fonts.
 *
 * Change a hex value here and the whole site updates: the values are written
 * to CSS custom properties (--navy, --gold, --ivory) in app/layout.tsx, and
 * Tailwind exposes them as `navy`, `gold` and `ivory` utilities
 * (e.g. `bg-navy`, `text-ivory/90`, `border-navy/12`) via app/globals.css.
 *
 * Components never use hex values directly.
 */
import { Fraunces, DM_Sans } from "next/font/google";

export const palette = {
  /** Deep blue — dark section ground, text on light sections. Taken from the logo. */
  navy: "#04173A",
  /** Darkest ink blue from the logo — shadow end of the silk gradient. */
  ink: "#00091B",
  /** Sapphire sheen from the logo — highlight end of the silk gradient. */
  sapphire: "#0E3878",
  /** Soft golden cream — accent on navy; only a fill/tint on ivory. */
  gold: "#F7E3BE",
  /** Off-white — light section ground, text on dark sections. */
  ivory: "#FBFBF8",
} as const;

export type PaletteKey = keyof typeof palette;

/** CSS written into <head> so every token is available before first paint. */
export const paletteCss = `:root{${Object.entries(palette)
  .map(([k, v]) => `--${k}:${v};`)
  .join("")}}`;

/** Display serif for headlines, numerals and quotes. */
export const displayFont = Fraunces({
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

/** Clean sans for body copy, labels and UI. */
export const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});
