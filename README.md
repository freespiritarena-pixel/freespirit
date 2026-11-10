# Free Spirit — Home Page

Home page for Free Spirit, a horse riding academy in Canada.
Built with Next.js 16 (App Router, TypeScript), Tailwind CSS v4 and Framer Motion.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Where things live

| What | File |
| --- | --- |
| Colours and fonts (the theme) | `theme.ts` |
| Tailwind token mapping, type scale, base styles | `app/globals.css` |
| All copy, image paths and alt text | `content/site.ts` |
| Page assembly, LocalBusiness JSON-LD | `app/page.tsx` |
| Metadata and OpenGraph | `app/layout.tsx` |
| Inquiry API (stub) | `app/api/inquiry/route.ts` |
| Shared form validation | `lib/inquiry.ts` |
| Sections | `components/*.tsx` |
| Line-art illustrations | `components/illustrations/*` |
| Motion helpers (easing, reveals) | `components/motion/primitives.tsx` |

## Change the colours

Edit the three hex values in `theme.ts`:

```ts
export const palette = {
  navy: "#030F21",
  gold: "#F7E3BE",
  ivory: "#FBFBF8",
};
```

They are written to `:root` as `--navy`, `--gold` and `--ivory`, and Tailwind exposes them as
`navy`, `gold` and `ivory` utilities with opacity modifiers (`text-ivory/60`, `bg-gold/25`,
`border-navy/12`). Components never use hex values, so this is the only place to change.

Colour rules used throughout:

- Dark sections: navy ground, ivory text at 90% (muted 60%), gold accents, ivory hairlines at 12%.
- Light sections: ivory ground, navy text (muted 65%), navy accents, navy hairlines at 12%.
- Gold is never used as text on ivory. On light sections it is only a fill or tint.

## Change the fonts

`theme.ts` loads Fraunces (display) and DM Sans (body) through `next/font/google`.
Swap either import, keep the `variable` names (`--font-fraunces`, `--font-dm-sans`) or update
them in `app/globals.css` under `@theme`.

## Change the copy

Everything visible on the page is in `content/site.ts`. Text in `[square brackets]` is a
placeholder for real information (city, phone, prices, coach names, testimonial names).
Replace all of these before launch. The testimonial quotes are sample wording: replace them with
real quotes, used with permission.

Also update `site.url`, `site.address`, `site.geo` and `site.hours`. These feed the
`SportsActivityLocation` JSON-LD and the page metadata.

## Add photos

1. Put the image in `public/images/`, for example `public/images/hero.jpg`.
2. In `content/site.ts`, set `src` on the matching entry and check the `alt` text:

```ts
image: {
  src: "/images/hero.jpg",
  alt: "A rider and horse crossing the outdoor ring at sunrise",
  caption: "Photo: arena at sunrise",
},
```

Every `<ImageSlot />` renders a designed placeholder until `src` is set.
The hero photo is optional. When you set it, the hero shows the photo full-bleed with a slow zoom and
a navy wash so the headline stays readable. The line-art horse is hidden while a photo is set.
Use large, landscape images (at least 2400px wide for the hero).

## Hero video

The hero plays `public/videos/hero.mp4`, which is muted, looped and has a pause button. It is set in
`content/site.ts` under `hero.video`:

- `src`: set to `undefined` to go back to the line-art horse (or the photo, if `hero.image.src` is set).
- `poster`: the still shown before the video loads, and the only thing shown with reduced motion.
- `cropScale`: enlarges the video to hide letterbox bars baked into the file. Use `1` for a clean 16:9 file.

The current file is 4.7MB. For production, re-export it at about 1–2MB without the audio track and add a WebM version.

## Inquiry form

The form validates on the client and posts JSON to `/api/inquiry`. The server validates again
with the same rules (`lib/inquiry.ts`). The route only logs the request. To receive inquiries, replace the
`TODO` in `app/api/inquiry/route.ts` with your email service or CRM.

## Motion

All motion uses the easing `[0.22, 1, 0.36, 1]` with 0.7 to 1.1 second durations. When the visitor has
`prefers-reduced-motion` turned on, these effects are off and only simple fades remain:

- parallax
- the horse drawing
- the masked headline
- the pinned Approach section, which becomes a stacked list
- testimonial autoplay

The pinned section also stacks below 1024px.

## Not built yet

- Other pages. Every "Learn more" link and CTA points to the contact form on the home page.
- French content. The EN/FR toggle in the footer is a placeholder.
- An OpenGraph image. Add `app/opengraph-image.jpg` (1200×630) when you have a hero photo.
