"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/components/motion/primitives";

/** Body outline of a standing horse, facing left. */
const BODY =
  "M165 64 C160 52 154 40 152 30 C162 38 170 48 174 58 " +
  "C206 72 238 104 262 146 C290 166 330 180 372 178 C412 176 446 164 480 170 " +
  "C510 176 526 206 524 240 C522 270 508 296 502 320 C498 340 504 360 506 378 " +
  "C500 392 494 404 492 420 L490 444 C490 454 494 462 498 470 L470 470 " +
  "C472 460 474 452 472 444 L474 404 C476 392 474 384 468 374 " +
  "C460 356 452 336 452 316 C452 304 446 296 438 292 " +
  "C400 302 330 306 286 296 " +
  "C282 316 276 336 272 354 L268 386 C266 394 266 400 266 408 L264 444 " +
  "C264 454 268 462 272 470 L244 470 C246 462 248 452 246 444 L246 408 " +
  "C246 398 248 390 248 384 L246 354 C244 330 238 310 228 294 " +
  "C216 278 212 256 214 236 C212 204 204 174 190 150 " +
  "C180 142 164 154 144 174 C132 186 112 194 102 186 C94 178 96 166 104 158 " +
  "C118 132 138 98 152 76 C156 70 160 66 165 64 Z";

/** Secondary detail strokes: far legs, mane, tail, face. */
const DETAILS: { d: string; w?: number; o?: number }[] = [
  // far foreleg, a half step forward
  { d: "M236 312 C226 340 216 362 210 382 L198 438 C196 450 192 460 190 470 L214 470", o: 0.5 },
  // far hind leg, reaching under
  { d: "M446 318 C440 348 432 372 430 392 L424 444 C423 454 420 462 418 470 L396 470", o: 0.5 },
  // mane
  { d: "M178 68 C204 82 226 106 246 134 M186 74 C198 90 208 108 216 128 M200 82 C216 100 230 120 240 142", o: 0.8 },
  // forelock
  { d: "M160 68 C152 78 148 86 148 94", o: 0.8 },
  // tail
  { d: "M520 196 C552 224 562 286 546 358 M522 212 C546 246 550 304 532 370 M522 232 C538 266 538 318 520 380", o: 0.9 },
  // cheek / jaw
  { d: "M182 132 C170 138 160 150 156 164", o: 0.6 },
  // eye
  { d: "M142 104 C146 100 152 100 155 104", w: 2 },
  // nostril
  { d: "M108 166 C112 162 116 164 116 170", w: 1.5 },
  // shoulder and hip contours
  { d: "M236 168 C256 210 262 252 256 292", o: 0.35 },
  { d: "M482 192 C498 226 494 260 472 292", o: 0.35 },
];

export function Horse({
  className,
  draw = true,
  delay = 0.3,
}: {
  className?: string;
  draw?: boolean;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const animate = draw && !reduce;

  const pathProps = (i: number, total = 2.6) =>
    animate
      ? {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: {
            pathLength: { duration: total, ease: EASE, delay: delay + i * 0.12 },
            opacity: { duration: 0.4, delay: delay + i * 0.12 },
          },
        }
      : {};

  return (
    <svg
      viewBox="60 20 520 470"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <motion.path d={BODY} strokeWidth={1.6} {...pathProps(0, 3.2)} />
      {DETAILS.map((p, i) => (
        <motion.path
          key={i}
          d={p.d}
          strokeWidth={p.w ?? 1.25}
          strokeOpacity={p.o ?? 1}
          {...pathProps(i + 4, 1.8)}
        />
      ))}
    </svg>
  );
}
