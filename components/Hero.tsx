"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { hero } from "@/content/site";
import { Button } from "@/components/Button";
import { ImageSlot } from "@/components/ImageSlot";
import { HeroVideo } from "@/components/HeroVideo";
import { Horse } from "@/components/illustrations/Horse";
import { Hills } from "@/components/illustrations/Hills";
import { PolesMotif } from "@/components/illustrations/Marks";
import { EASE } from "@/components/motion/primitives";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const hasVideo = Boolean(hero.video.src);
  const hasPhoto = !hasVideo && Boolean(hero.image.src);
  const hasMedia = hasVideo || hasPhoto;

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const still = (v: number) => (reduce ? 0 : v);
  const farY = useTransform(scrollYProgress, [0, 1], [0, still(90)]);
  const midY = useTransform(scrollYProgress, [0, 1], [0, still(45)]);
  const artY = useTransform(scrollYProgress, [0, 1], [0, still(-70)]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, still(-40)]);

  const lines = [...hero.headlineLines, hero.emphasis];

  return (
    <section
      id="top"
      ref={ref}
      data-tone="dark"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-silk text-ivory/90"
    >
      {hasVideo && (
        <HeroVideo src={hero.video.src!} poster={hero.video.poster} label={hero.video.alt} cropScale={hero.video.cropScale} />
      )}
      {hasPhoto && (
        <ImageSlot image={hero.image} tone="dark" priority zoom rounded={false} hoverScale={false} sizes="100vw" className="!absolute inset-0 -z-20" />
      )}
      {hasMedia && (
        <>
          {/* navy wash: strong behind the headline, opening up toward the rider */}
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(98deg,color-mix(in_oklab,var(--navy)_92%,transparent)_0%,color-mix(in_oklab,var(--navy)_78%,transparent)_38%,color-mix(in_oklab,var(--navy)_30%,transparent)_70%,color-mix(in_oklab,var(--navy)_15%,transparent)_100%)]" />
          {/* small screens: text spans the full width, so deepen the wash */}
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy/35 lg:hidden" />
          {/* top fade for the nav, bottom fade into the hills */}
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--navy)_70%,transparent)_0%,transparent_22%,transparent_60%,color-mix(in_oklab,var(--navy)_75%,transparent)_100%)]" />
        </>
      )}
      {/* soft gold dawn glow, top right */}
      <div
        aria-hidden="true"
        className="absolute -right-[20%] -top-[30%] -z-10 aspect-square w-[80vw] max-w-[60rem] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--gold)_14%,transparent),transparent)]"
      />
      <div className="grain -z-10" />

      <div className="container-x grid-12 relative flex-1 items-end gap-y-12 pb-6 pt-32 sm:pt-36 lg:pt-[clamp(7rem,15svh,10rem)]">
        <motion.div style={{ y: copyY }} className="col-span-12 lg:col-span-7 xl:col-span-7">
          <h1 id="hero-title" className="display text-display text-ivory">
            {lines.map((line, i) => {
              const isEmphasis = i === lines.length - 1;
              return (
                <span key={line} className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
                  <motion.span
                    className={`block ${isEmphasis ? "italic text-gold [font-variation-settings:'opsz'_144,'SOFT'_100]" : ""}`}
                    initial={reduce ? { opacity: 0 } : { y: "108%" }}
                    animate={reduce ? { opacity: 1 } : { y: "0%" }}
                    transition={{ duration: 1.1, ease: EASE, delay: 0.15 + i * 0.12 }}
                  >
                    {line}
                  </motion.span>
                </span>
              );
            })}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.65 }}
          >
            <p className="mt-7 max-w-[36rem] text-lead text-ivory/75">{hero.supporting}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button href={hero.primaryCta.href} variant="gold" magnetic arrow>
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="ghost-dark">
                {hero.secondaryCta.label}
              </Button>
            </div>
            <ul
              aria-label="Credentials"
              className="label mt-10 flex max-w-[40rem] flex-wrap gap-x-6 gap-y-3 border-t border-ivory/12 pt-6 text-ivory/60"
            >
              {hero.trust.map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="size-1 rounded-full bg-gold" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {!hasMedia && (
          <motion.div
            style={{ y: artY }}
            className="relative col-span-12 -mb-[min(12vw,9rem)] sm:col-span-10 sm:col-start-2 lg:col-span-5 lg:col-start-8 lg:-mb-[min(9vw,9rem)]"
          >
            <div className="relative mx-auto w-full max-w-[26rem] lg:max-w-[34rem]">
              <PolesMotif className="absolute -right-[4%] bottom-[6%] w-[38%] text-ivory/20" />
              <svg viewBox="0 0 400 60" className="absolute -left-[6%] bottom-[-3%] w-[112%] text-ivory/15" fill="none" stroke="currentColor" aria-hidden="true">
                <ellipse cx="200" cy="30" rx="196" ry="24" strokeWidth={1} />
                <ellipse cx="200" cy="30" rx="150" ry="16" strokeWidth={1} strokeDasharray="2 7" />
              </svg>
              <Horse className="relative w-full text-gold" />
            </div>
          </motion.div>
        )}
      </div>

      <div className="relative z-0 h-[clamp(6rem,12vw,11rem)] w-full">
        <Hills far={farY} mid={midY} className="absolute inset-0" />
      </div>
    </section>
  );
}
