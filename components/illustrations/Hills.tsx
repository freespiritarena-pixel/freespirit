"use client";

import { motion, type MotionValue } from "framer-motion";

/** Ridge lines for the hero landscape, back to front. viewBox 0 0 1440 360. */
const RIDGES = {
  far: "M0 170 C120 140 220 120 340 132 C470 146 560 104 700 96 C840 88 940 132 1080 128 C1210 124 1320 92 1440 104",
  mid: "M0 230 C140 196 260 182 400 200 C540 218 640 176 780 166 C930 156 1040 204 1180 200 C1300 196 1380 176 1440 170",
  near: "M0 292 C160 262 300 250 460 266 C620 282 760 246 920 240 C1080 234 1200 268 1320 268 C1380 268 1420 262 1440 258",
};

const close = (d: string) => `${d} L1440 360 L0 360 Z`;

/**
 * Layered rolling hills. Each layer drifts at its own rate when scroll
 * motion values are supplied (scroll-linked parallax). The front layer is
 * filled with ivory so the hero melts into the light section below.
 */
export function Hills({
  far,
  mid,
  near,
  className,
}: {
  far?: MotionValue<number>;
  mid?: MotionValue<number>;
  near?: MotionValue<number>;
  className?: string;
}) {
  return (
    <div className={className} aria-hidden="true">
      <motion.svg style={{ y: far }} viewBox="0 0 1440 360" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <path d={close(RIDGES.far)} className="fill-ivory/[0.04]" />
        <path d={RIDGES.far} className="fill-none stroke-gold/35" strokeWidth={1} vectorEffect="non-scaling-stroke" />
      </motion.svg>
      <motion.svg style={{ y: mid }} viewBox="0 0 1440 360" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <path d={close(RIDGES.mid)} className="fill-ivory/[0.06]" />
        <path d={RIDGES.mid} className="fill-none stroke-gold/55" strokeWidth={1} vectorEffect="non-scaling-stroke" />
      </motion.svg>
      <motion.svg style={{ y: near }} viewBox="0 0 1440 360" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <path d={close(RIDGES.near)} className="fill-ivory" />
      </motion.svg>
    </div>
  );
}

/**
 * Soft horizon used between sections. Hills rise in the colour of the next
 * section, giving a long, landscape-shaped transition.
 */
export function Horizon({ to, className = "" }: { to: "navy" | "ivory"; className?: string }) {
  const solid = to === "navy" ? "fill-navy" : "fill-ivory";
  const tint1 = to === "navy" ? "fill-navy/[0.06]" : "fill-ivory/[0.06]";
  const tint2 = to === "navy" ? "fill-navy/[0.14]" : "fill-ivory/[0.12]";
  return (
    <div aria-hidden="true" className={`pointer-events-none relative h-[clamp(5rem,11vw,10rem)] w-full ${className}`}>
      <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <path d="M0 70 C180 30 340 24 520 50 C700 76 860 20 1040 22 C1200 24 1320 56 1440 48 L1440 200 L0 200 Z" className={tint1} />
        <path d="M0 118 C200 84 380 80 560 104 C740 128 900 84 1080 82 C1240 80 1360 108 1440 104 L1440 200 L0 200 Z" className={tint2} />
        <path d="M0 160 C220 132 420 128 620 146 C820 164 980 134 1160 132 C1300 130 1390 146 1440 150 L1440 200 L0 200 Z" className={solid} />
      </svg>
    </div>
  );
}
