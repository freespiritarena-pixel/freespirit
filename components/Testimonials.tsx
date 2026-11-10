"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { testimonials } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowIcon } from "@/components/illustrations/Marks";
import { EASE } from "@/components/motion/primitives";

const INTERVAL = 8000;

export function Testimonials() {
  const items = testimonials.items;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const reduce = useReducedMotion();

  const autoplay = !paused && !hovered && !reduce;

  useEffect(() => {
    if (!autoplay) return;
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % items.length), INTERVAL);
    return () => window.clearTimeout(t);
  }, [autoplay, index, items.length]);

  const go = (d: number) => setIndex((i) => (i + d + items.length) % items.length);
  const q = items[index];

  return (
    <section
      id="testimonials"
      data-tone="light"
      aria-labelledby="testimonials-title"
      aria-roledescription="carousel"
      className="section-y bg-ivory text-navy"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <div className="container-x">
        <SectionHeading number="07" id="testimonials-title" title={testimonials.title} />

        <div className="grid-12 mt-[clamp(2.5rem,5vw,4.5rem)]">
          <div className="col-span-12 lg:col-span-9 lg:col-start-4">
            <div className="relative grid" aria-live={autoplay ? "off" : "polite"}>
              <AnimatePresence initial={false}>
                <motion.figure
                  key={index}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${items.length}`}
                  className="[grid-area:1/1]"
                  initial={{ opacity: 0, filter: reduce ? "none" : "blur(6px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: reduce ? "none" : "blur(6px)" }}
                  transition={{ duration: 1.1, ease: EASE }}
                >
                  <svg viewBox="0 0 40 32" className="mb-8 w-10 text-navy/25" fill="currentColor" aria-hidden="true">
                    <path d="M0 32V19C0 8 6 1.5 16 0l1.5 3.6C11.8 5.6 9 9.4 9 15h7v17H0Zm23 0V19C23 8 29 1.5 39 0l1 3.6C34.8 5.6 32 9.4 32 15h7v17H23Z" />
                  </svg>
                  <blockquote className="display text-quote text-navy">
                    <p>{q.quote}</p>
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-4">
                    <span aria-hidden="true" className="h-px w-10 bg-navy/40" />
                    <span>
                      <span className="block font-medium text-navy">{q.name}</span>
                      <span className="block text-[0.9375rem] text-navy/65">{q.detail}</span>
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="mt-12 flex items-center justify-between gap-6 border-t border-navy/12 pt-6">
              <div className="flex items-center gap-1">
                {items.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                    aria-current={i === index ? "true" : undefined}
                    className="flex size-11 items-center justify-center"
                  >
                    <span
                      className={`block h-px transition-all duration-700 ease-[var(--ease-soft)] ${
                        i === index ? "w-8 bg-navy" : "w-4 bg-navy/30"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                {!reduce && (
                  <button
                    type="button"
                    onClick={() => setPaused((p) => !p)}
                    className="label flex min-h-11 items-center px-3 text-navy/65 transition-colors hover:text-navy"
                  >
                    {paused ? "Play" : "Pause"}
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous testimonial"
                  className="flex size-11 items-center justify-center rounded-full ring-1 ring-inset ring-navy/20 transition-colors duration-500 hover:bg-navy hover:text-ivory"
                >
                  <ArrowIcon className="size-4 rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next testimonial"
                  className="flex size-11 items-center justify-center rounded-full ring-1 ring-inset ring-navy/20 transition-colors duration-500 hover:bg-navy hover:text-ivory"
                >
                  <ArrowIcon className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
