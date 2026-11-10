# Design

Visual system for Free Spirit, as built on the home page. Product truth lives in PRODUCT.md.

## World

A riding academy's landscape at dawn: navy night sky, gold first light, ivory paper.
The work is editorial and calm. Line art is drawn in a single weight, and rolling-hill horizons
mark every change from a dark section to a light one. The brief pins palette, type and structure.

## Colour

- Tokens: `navy #030F21`, `gold #F7E3BE`, `ivory #FBFBF8`. These are defined only in `theme.ts`.
- Dark sections: navy ground, ivory text at 90% (muted 60%), gold accents, ivory hairlines at 12%.
- Light sections: ivory ground, navy text (muted 65%), navy accents, navy hairlines at 12%.
- Gold-tint band: gold at 25% over ivory.
- Gold is never text on ivory.
- Seasons strip steps the palette from ivory to gold at 45%, then gold, then navy.

## Type

- Display: Fraunces, weight 380, opsz 144, low SOFT. The italic, with SOFT at 100, is reserved for the hero emphasis word.
- Body: DM Sans.
- Fluid scale: `text-display` (capped by viewport height so the hero fits), `text-h2`, `text-h3`, `text-quote`, `text-lead`.
- Labels: 12px uppercase, tracking 0.18em. Labels are used for metadata only, never as eyebrows above headings.

## Layout

- 12-column grid, container max 90rem, 16, 32 or 64px gutters.
- Section openers: a numbered folio (01 to 08 with a hairline) in the left margin columns, and the heading on columns 4 to 11.
- Hairline list rows instead of cards. Rounded image frames (12 to 20px).

## Components

- `ImageSlot`: a tone block with a faint line motif and a caption. With `src` set, it shows the photo with object-cover.
- `Button`: pill shape with a fill sweep from the left. Variants: gold on dark, navy on light, and ghost.
- `Horizon`: three-layer hill silhouette that rises in the next section's colour.

## Motion

- Easing `[0.22, 1, 0.36, 1]`, durations 0.7 to 1.1s.
- Signature effects:
  - the horse drawn with pathLength
  - the masked headline reveal
  - hill parallax
  - the pinned Approach section, which crossfades between principles
- Section reveals use a fade-and-rise.
- With reduced motion, only fades remain.
