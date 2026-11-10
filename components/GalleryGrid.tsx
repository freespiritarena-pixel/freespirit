"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { gallery } from "@/content/site";
import { ImageSlot } from "@/components/ImageSlot";
import { ArrowIcon } from "@/components/illustrations/Marks";
import { EASE } from "@/components/motion/primitives";

type Filter = (typeof gallery.categories)[number];

export function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const [open, setOpen] = useState<number | null>(null);
  const items = gallery.items.filter((g) => filter === "All" || g.category === filter);
  const tileRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpen((i) => {
      if (i !== null) requestAnimationFrame(() => tileRefs.current[i]?.focus());
      return null;
    });
  }, []);
  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length],
  );

  // Lock scroll, move focus in, trap Tab, and wire Escape and arrow keys.
  useEffect(() => {
    if (open === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "Tab" && dialogRef.current) {
        const els = Array.from(dialogRef.current.querySelectorAll<HTMLElement>("button"));
        const idx = els.indexOf(document.activeElement as HTMLElement);
        const next = e.shiftKey ? (idx <= 0 ? els.length - 1 : idx - 1) : idx === els.length - 1 ? 0 : idx + 1;
        e.preventDefault();
        els[next]?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  const current = open === null ? null : items[open];

  return (
    <>
      <div role="group" aria-label="Filter photos" className="flex flex-wrap gap-2">
        {gallery.categories.map((c) => {
          const active = c === filter;
          const count = c === "All" ? gallery.items.length : gallery.items.filter((g) => g.category === c).length;
          return (
            <button
              key={c}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(c)}
              className={`inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-[0.9375rem] transition-colors duration-500 ease-[var(--ease-soft)] ${
                active
                  ? "bg-[linear-gradient(135deg,var(--sapphire),var(--navy)_60%,var(--ink))] text-ivory"
                  : "text-navy ring-1 ring-inset ring-navy/20 hover:ring-navy/50"
              }`}
            >
              {c}
              <span className={`numeral text-xs ${active ? "text-gold" : "text-navy/50"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <motion.ul layout className={`mt-10 columns-1 gap-4 sm:columns-2 sm:gap-6 ${gallery.items.length > 6 ? "lg:columns-3" : ""}`}>
        <AnimatePresence mode="popLayout">
          {items.map((g, i) => (
            <motion.li
              layout
              key={g.image.src ?? g.image.caption}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="mb-4 break-inside-avoid sm:mb-6"
            >
              <button
                ref={(el) => {
                  tileRefs.current[i] = el;
                }}
                type="button"
                onClick={() => setOpen(i)}
                className="group block w-full cursor-zoom-in text-left"
                aria-label={`Open photo: ${g.image.caption}`}
              >
                <ImageSlot
                  image={g.image}
                  className={`w-full ${g.shape === "tall" ? "aspect-[4/5]" : "aspect-[3/2]"}`}
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                />
                <span className="mt-3 flex items-center justify-between gap-4">
                  <span className="text-[0.9375rem] text-navy">{g.image.caption}</span>
                  <span className="label text-navy/50">{g.category}</span>
                </span>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <AnimatePresence>
        {current && open !== null && (
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={current.image.caption}
            data-tone="dark"
            className="fixed inset-0 z-[70] flex flex-col bg-silk text-ivory/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <div className="container-x flex h-[4.5rem] shrink-0 items-center justify-between">
              <p className="numeral text-sm text-ivory/60">
                <span className="text-gold">{String(open + 1).padStart(2, "0")}</span> / {String(items.length).padStart(2, "0")}
              </p>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                className="flex size-11 items-center justify-center rounded-full ring-1 ring-inset ring-ivory/30 transition-colors duration-500 hover:bg-ivory/10"
                aria-label="Close photo"
              >
                <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path d="M3 3l10 10M13 3L3 13" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="relative min-h-0 flex-1" onClick={close}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.image.src}
                  className="absolute inset-x-4 inset-y-2 sm:inset-x-20"
                  initial={{ opacity: 0, scale: 0.985 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  {current.image.src && (
                    <Image src={current.image.src} alt={current.image.alt} fill sizes="100vw" className="object-contain" />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="container-x flex shrink-0 items-center justify-between gap-6 py-5">
              <button
                type="button"
                onClick={() => step(-1)}
                className="flex size-11 items-center justify-center rounded-full ring-1 ring-inset ring-ivory/30 transition-colors duration-500 hover:bg-ivory/10"
                aria-label="Previous photo"
              >
                <ArrowIcon className="size-4 rotate-180" />
              </button>
              <div className="min-w-0 text-center">
                <p className="display truncate text-[1.375rem] text-ivory">{current.image.caption}</p>
                <p className="label mt-1 text-gold">{current.category}</p>
              </div>
              <button
                type="button"
                onClick={() => step(1)}
                className="flex size-11 items-center justify-center rounded-full ring-1 ring-inset ring-ivory/30 transition-colors duration-500 hover:bg-ivory/10"
                aria-label="Next photo"
              >
                <ArrowIcon className="size-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
