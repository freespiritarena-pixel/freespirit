"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import type { ImageAsset } from "@/content/site";
import { ArrowIcon } from "@/components/illustrations/Marks";
import { EASE } from "@/components/motion/primitives";

const INTERVAL_MS = 2000;

/**
 * Auto-scrolling photo slider. Slides to the next photo every 2 s and loops.
 * Hovering pauses it for a moment; the play/pause button stops it for good.
 * With reduced motion the photos swap with a short fade instead of sliding.
 * Arrow keys work while focus is inside it.
 */
export function ImageSlider({
  images,
  label,
  className = "",
  sizes = "100vw",
}: {
  images: ImageAsset[];
  /** Accessible name for the slider, e.g. "Riders at the barn". */
  label: string;
  className?: string;
  sizes?: string;
}) {
  const slides = images.filter((img) => img.src);
  const count = slides.length;
  const reduce = useReducedMotion();
  const [[index, dir], setState] = useState<[number, number]>([0, 1]);
  const [hovered, setHovered] = useState(false);
  const [stopped, setStopped] = useState(false);
  const playing = !hovered && !stopped && count > 1;

  const go = useCallback(
    (d: number) => setState(([i]) => [(i + d + count) % count, d]),
    [count],
  );
  const show = (i: number) => setState(([cur]) => [i, i >= cur ? 1 : -1]);

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => go(1), INTERVAL_MS);
    return () => clearTimeout(t);
  }, [index, playing, go]);

  if (count === 0) return null;
  const current = slides[index];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      className={`group/slider relative isolate overflow-hidden rounded-[clamp(0.75rem,1.4vw,1.25rem)] bg-navy/[0.09] ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
    >
      <AnimatePresence initial={false} custom={dir}>
        <motion.div
          key={current.src}
          custom={dir}
          className="absolute inset-0"
          variants={{
            enter: (d: number) => (reduce ? { opacity: 0 } : { x: `${d * 100}%` }),
            center: { x: "0%", opacity: 1 },
            exit: (d: number) => (reduce ? { opacity: 0 } : { x: `${d * -100}%` }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: reduce ? 0.3 : 0.9, ease: EASE }}
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${count}`}
        >
          <Image
            src={current.src!}
            alt={current.alt}
            fill
            sizes={sizes}
            className="object-cover"
            style={current.position ? { objectPosition: current.position } : undefined}
          />
        </motion.div>
      </AnimatePresence>

      {/* bottom scrim so the controls read over any photo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-ink/60 to-transparent" />

      {count > 1 && (
        <div data-tone="dark" className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between gap-4 p-4 sm:p-6">
          <div className="flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                onClick={() => show(i)}
                aria-label={`Show photo ${i + 1} of ${count}`}
                aria-current={i === index ? "true" : undefined}
                className="flex h-11 items-center px-1"
              >
                <span
                  className={`block h-[3px] rounded-full transition-all duration-500 ease-[var(--ease-soft)] ${
                    i === index ? "w-10 bg-gold" : "w-5 bg-ivory/50 hover:bg-ivory/80"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setStopped((v) => !v)}
              aria-label={stopped ? "Play slideshow" : "Pause slideshow"}
              className="flex size-11 items-center justify-center rounded-full text-ivory ring-1 ring-inset ring-ivory/40 backdrop-blur-sm transition-colors duration-500 hover:bg-ivory/15"
            >
              {stopped ? (
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
                  <path d="M8 5.5v13l10.5-6.5z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
                  <rect x="7" y="5.5" width="3.2" height="13" rx="1" />
                  <rect x="13.8" y="5.5" width="3.2" height="13" rx="1" />
                </svg>
              )}
            </button>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous photo"
              className="flex size-11 items-center justify-center rounded-full text-ivory ring-1 ring-inset ring-ivory/40 backdrop-blur-sm transition-colors duration-500 hover:bg-ivory/15"
            >
              <ArrowIcon className="size-4 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next photo"
              className="flex size-11 items-center justify-center rounded-full text-ivory ring-1 ring-inset ring-ivory/40 backdrop-blur-sm transition-colors duration-500 hover:bg-ivory/15"
            >
              <ArrowIcon className="size-4" />
            </button>
          </div>
        </div>
      )}

      {/* announce only manual changes; autoplay stays silent */}
      <p aria-live={playing ? "off" : "polite"} className="sr-only">
        {current.alt}
      </p>
    </div>
  );
}
