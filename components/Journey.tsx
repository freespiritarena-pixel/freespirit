"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { journey } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/motion/primitives";
import { ImageSlot } from "@/components/ImageSlot";

export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const draw = useTransform(scrollYProgress, [0, 1], [reduce ? 1 : 0, 1]);

  return (
    <section id="journey" data-tone="light" aria-labelledby="journey-title" className="section-y bg-ivory text-navy">
      <div className="container-x">
        <SectionHeading number="03" id="journey-title" title={journey.title} intro={journey.intro} />

        <div ref={ref} className="relative mt-[clamp(3.5rem,7vw,6rem)]">
          {/* connecting lines: vertical on small screens, horizontal on large */}
          <div aria-hidden="true" className="absolute bottom-6 left-[0.6875rem] top-3 w-px bg-navy/12 lg:hidden">
            <motion.div style={{ scaleY: draw }} className="absolute inset-0 origin-top bg-navy" />
          </div>
          <div aria-hidden="true" className="absolute left-3 right-[calc((100%-8rem)/5-0.6875rem)] top-[0.6875rem] hidden h-px bg-navy/12 lg:block">
            <motion.div style={{ scaleX: draw }} className="absolute inset-0 origin-left bg-navy" />
          </div>

          <ol className="relative grid gap-12 lg:grid-cols-5 lg:gap-8">
          {journey.steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.08} className="relative pl-12 lg:pl-0 lg:pt-14">
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 flex size-6 items-center justify-center rounded-full bg-ivory ring-1 ring-navy/40"
              >
                <span className="size-2 rounded-full bg-navy" />
              </span>
              <span className="numeral text-sm text-navy/65">Step {String(i + 1).padStart(2, "0")}</span>
              <h3 className="display mt-2 text-[1.625rem] leading-tight tracking-[-0.01em] text-navy">{s.title}</h3>
              <p className="mt-3 max-w-[22rem] leading-relaxed text-navy/65">{s.body}</p>
            </Reveal>
          ))}
          </ol>
        </div>

        <Reveal className="mt-[clamp(4rem,8vw,7rem)]">
          <ImageSlot
            image={journey.image}
            motif="poles"
            className="aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-[21/9]"
            sizes="(min-width:1440px) 1312px, 100vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
