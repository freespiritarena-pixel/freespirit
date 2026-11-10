"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";
import { programs } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { ImageSlot } from "@/components/ImageSlot";
import { ArrowIcon } from "@/components/illustrations/Marks";
import { EASE, Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";

export function Programs() {
  const [active, setActive] = useState<number | null>(0);
  const reduce = useReducedMotion();
  const uid = useId();

  const hoverOpen = (i: number) => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches) setActive(i);
  };

  return (
    <section id="programs" data-tone="light" aria-labelledby="programs-title" className="section-y bg-ivory pt-[clamp(3rem,6vw,5rem)] text-navy">
      <div className="container-x">
        <SectionHeading number="01" id="programs-title" title={programs.title} intro={programs.intro} />

        <div className="grid-12 mt-[clamp(3rem,6vw,5.5rem)] gap-y-10">
          <div className="col-span-12 sm:col-span-8 lg:col-span-3">
            <Reveal className="lg:sticky lg:top-28">
              <ImageSlot
                image={programs.image}
                motif="poles"
                className="aspect-[4/5] w-full lg:aspect-[2/3]"
                sizes="(min-width:1024px) 22vw, (min-width:640px) 66vw, 100vw"
              />
            </Reveal>
          </div>
          <Stagger as="ol" className="col-span-12 self-start border-t border-navy/12 lg:col-span-9 lg:col-start-4" stagger={0.07}>
            {programs.items.map((p, i) => {
              const open = active === i;
              const panelId = `${uid}-panel-${i}`;
              const btnId = `${uid}-btn-${i}`;
              return (
                <StaggerItem as="li" key={p.title} className="border-b border-navy/12">
                  <div onMouseEnter={() => hoverOpen(i)}>
                    <h3>
                      <button
                        id={btnId}
                        type="button"
                        aria-expanded={open}
                        aria-controls={panelId}
                        onClick={() => setActive(open ? null : i)}
                        className="group grid w-full grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 py-6 text-left sm:grid-cols-[3.5rem_1fr_auto] sm:py-8 md:grid-cols-[3.5rem_minmax(0,1.1fr)_minmax(0,1fr)_auto]"
                      >
                        <span className="numeral text-base text-navy/65">{String(i + 1).padStart(2, "0")}</span>
                        <span className="display text-h3 text-navy transition-transform duration-700 ease-[var(--ease-soft)] group-hover:translate-x-1.5">
                          {p.title}
                        </span>
                        <span className="col-start-2 row-start-2 mt-2 text-[0.9375rem] leading-relaxed text-navy/65 md:col-start-3 md:row-start-1 md:mt-0">
                          {p.summary}
                        </span>
                        <span
                          aria-hidden="true"
                          className={`col-start-3 row-start-1 flex size-11 items-center justify-center self-center rounded-full ring-1 ring-inset transition-all duration-700 ease-[var(--ease-soft)] md:col-start-4 ${
                            open ? "rotate-90 bg-navy text-ivory ring-navy" : "text-navy ring-navy/20 group-hover:ring-navy/50"
                          }`}
                        >
                          <ArrowIcon className="size-4" />
                        </span>
                      </button>
                    </h3>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={btnId}
                          key="panel"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: reduce ? 0 : 0.8, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-[2.5rem_1fr] gap-x-4 pb-8 sm:grid-cols-[3.5rem_1fr] md:grid-cols-[3.5rem_minmax(0,1.1fr)_minmax(0,1fr)_auto]">
                            <div className="col-start-2 md:col-[2/4]">
                              <p className="max-w-[40rem] leading-relaxed text-navy/80">{p.details}</p>
                              <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                                <ul className="flex flex-wrap gap-2" aria-label="Details">
                                  {p.meta.map((m) => (
                                    <li key={m} className="rounded-full bg-gold/60 px-3.5 py-1.5 text-sm text-navy">
                                      {m}
                                    </li>
                                  ))}
                                </ul>
                                <a href={p.href} className="group/lm inline-flex min-h-11 items-center gap-2 text-[0.9375rem] font-medium text-navy">
                                  <span className="link-draw">Learn more</span>
                                  <span className="sr-only"> about {p.title}</span>
                                  <ArrowIcon className="size-4 transition-transform duration-700 ease-[var(--ease-soft)] group-hover/lm:translate-x-1" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
