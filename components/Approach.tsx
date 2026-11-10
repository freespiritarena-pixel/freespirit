"use client";

import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, useState } from "react";
import { approach } from "@/content/site";
import { MotifArt } from "@/components/illustrations/Marks";
import { Reveal, useMediaQuery } from "@/components/motion/primitives";

const N = approach.principles.length;

function Panel({ i, progress }: { i: number; progress: MotionValue<number> }) {
  const p = approach.principles[i];
  const seg = 1 / N;
  const s = i * seg;
  const e = s + seg;
  const fade = 0.07;
  const c = (v: number) => Math.min(1, Math.max(0, v));
  const opacity = useTransform(
    progress,
    i === 0 ? [0, e - fade, e] : i === N - 1 ? [s - fade, s, 1] : [s - fade, s, e - fade, e],
    i === 0 ? [1, 1, 0] : i === N - 1 ? [0, 1, 1] : [0, 1, 1, 0],
  );
  const y = useTransform(
    progress,
    i === 0 ? [0, e] : i === N - 1 ? [s - fade, s + 0.05] : [s - fade, s + 0.05, e - fade, e],
    i === 0 ? [0, -40] : i === N - 1 ? [40, 0] : [40, 0, 0, -40],
  );
  const draw = useTransform(progress, [c(s - fade), c(s + seg * 0.6)], i === 0 ? [1, 1] : [0.15, 1]);

  return (
    <motion.article style={{ opacity }} className="absolute inset-0 flex flex-col justify-center" aria-hidden={undefined}>
      <motion.div style={{ y }}>
        <motion.div className="mb-10 w-[min(18rem,60%)] text-gold" style={{ opacity: draw }}>
          <MotifArt motif={p.motif} className="w-full" />
        </motion.div>
        <h3 className="display text-h2 text-ivory">{p.title}</h3>
        <p className="mt-6 max-w-[34rem] text-lead text-ivory/60">{p.body}</p>
      </motion.div>
    </motion.article>
  );
}

function Pinned() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => setActive(Math.min(N - 1, Math.floor(v * N))));
  const bar = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} style={{ height: `${N * 100 + 40}vh` }} className="relative">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <div className="container-x grid-12 w-full items-center">
          <div className="col-span-5 flex flex-col">
            <div className="flex items-center gap-4" aria-hidden="true">
              <span className="numeral text-lg text-gold">02</span>
              <span className="h-px w-14 bg-ivory/25" />
            </div>
            <h2 id="approach-title" className="display mt-8 text-h2 text-ivory">
              {approach.title}
            </h2>
            <p className="mt-6 max-w-[26rem] text-lead text-ivory/60">{approach.intro}</p>

            <div className="mt-14 flex gap-8">
              <div className="relative w-px bg-ivory/12" aria-hidden="true">
                <motion.div style={{ scaleY: bar }} className="absolute inset-0 origin-top bg-gold" />
              </div>
              <ol className="flex flex-col gap-5" aria-label="Principles">
                {approach.principles.map((p, i) => (
                  <li key={p.name} className="flex items-baseline gap-5" aria-current={active === i ? "step" : undefined}>
                    <span className={`numeral text-sm transition-colors duration-700 ${active === i ? "text-gold" : "text-ivory/60"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`display text-[1.75rem] leading-none transition-[color,transform] duration-700 ease-[var(--ease-soft)] ${
                        active === i ? "translate-x-1 text-ivory" : "text-ivory/60"
                      }`}
                    >
                      {p.name}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="relative col-span-6 col-start-7 h-[min(36rem,70svh)]">
            {approach.principles.map((p, i) => (
              <Panel key={p.name} i={i} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Stacked() {
  return (
    <div className="section-y container-x">
      <div className="grid-12 gap-y-6">
        <div className="col-span-12 lg:col-span-3" aria-hidden="true">
          <div className="flex items-center gap-4 pt-4">
            <span className="numeral text-lg text-gold">02</span>
            <span className="h-px w-14 bg-ivory/25" />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <Reveal>
            <h2 id="approach-title" className="display text-h2 text-ivory">
              {approach.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[38rem] text-lead text-ivory/60">{approach.intro}</p>
          </Reveal>
        </div>
      </div>
      <ol className="grid-12 mt-14 gap-y-0">
        {approach.principles.map((p, i) => (
          <Reveal as="li" key={p.name} className="col-span-12 border-t border-ivory/12 py-10 lg:col-span-9 lg:col-start-4">
            <div className="flex items-start gap-6">
              <span className="numeral pt-2 text-base text-gold">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="display text-h3 text-ivory">{p.name}</h3>
                <p className="mt-3 text-lead text-ivory/90">{p.title}</p>
                <p className="mt-3 max-w-[36rem] leading-relaxed text-ivory/60">{p.body}</p>
              </div>
              <MotifArt motif={p.motif} className="ml-auto hidden w-28 shrink-0 text-gold/70 sm:block" />
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

export function Approach() {
  const reduce = useReducedMotion();
  const desktop = useMediaQuery("(min-width: 1024px)");
  const pinned = desktop && !reduce;

  return (
    <section id="approach" data-tone="dark" aria-labelledby="approach-title" className="relative bg-silk text-ivory/90">
      <div className="grain" />
      {pinned ? <Pinned /> : <Stacked />}
    </section>
  );
}
