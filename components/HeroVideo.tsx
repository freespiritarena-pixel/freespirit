"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Full-bleed, muted, looping background video with a pause control
 * (WCAG 2.2.2). Under reduced motion it does not autoplay and shows the poster.
 */
export function HeroVideo({
  src,
  poster,
  label,
  cropScale = 1,
}: {
  src: string;
  poster?: string;
  label: string;
  cropScale?: number;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (reduce) {
      v.pause();
      return;
    }
    v.play().catch(() => {
      /* autoplay blocked: poster stays visible */
    });
  }, [reduce]);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  return (
    <>
      <div className="absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
        <video
          ref={ref}
          className="absolute inset-0 h-full w-full object-cover object-[68%_50%] lg:object-center"
          style={{ transform: `scale(${cropScale})` }}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="auto"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
      </div>
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? `Pause background video: ${label}` : `Play background video: ${label}`}
        className="absolute bottom-[clamp(7rem,13vw,12rem)] right-4 z-20 flex size-11 items-center justify-center rounded-full text-ivory/80 ring-1 ring-inset ring-ivory/30 transition-colors duration-500 hover:bg-ivory/10 hover:text-ivory sm:right-8 lg:right-16"
      >
        {playing ? (
          <svg viewBox="0 0 16 16" className="size-3.5" fill="currentColor" aria-hidden="true">
            <rect x="3.5" y="2.5" width="3" height="11" rx="0.5" />
            <rect x="9.5" y="2.5" width="3" height="11" rx="0.5" />
          </svg>
        ) : (
          <svg viewBox="0 0 16 16" className="size-3.5" fill="currentColor" aria-hidden="true">
            <path d="M4.5 2.8v10.4a.5.5 0 0 0 .77.42l8-5.2a.5.5 0 0 0 0-.84l-8-5.2a.5.5 0 0 0-.77.42Z" />
          </svg>
        )}
      </button>
    </>
  );
}
