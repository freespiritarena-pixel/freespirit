"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { hero, site } from "@/content/site";
import { Button } from "@/components/Button";
import { ImageSlot } from "@/components/ImageSlot";
import { HeroVideo } from "@/components/HeroVideo";
import { Hills } from "@/components/illustrations/Hills";
import { EASE } from "@/components/motion/primitives";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const hasVideo = Boolean(hero.video.src);
  const hasPhoto = !hasVideo && Boolean(hero.image.src);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const still = (v: number) => (reduce ? 0 : v);
  const farY = useTransform(scrollYProgress, [0, 1], [0, still(90)]);
  const midY = useTransform(scrollYProgress, [0, 1], [0, still(45)]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, still(-60)]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.6], [1, reduce ? 1 : 0]);

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.1, ease: EASE, delay },
  });

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
      {/* even navy wash so the title reads over any frame */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy/55" />
      {/* soft vignette: darker edges, open centre */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,color-mix(in_oklab,var(--ink)_70%,transparent)_100%)]"
      />
      {/* top fade for the nav */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-ink/70 to-transparent" />
      <div className="grain -z-10" />

      <motion.div
        style={{ y: copyY, opacity: copyOpacity }}
        className="container-x relative flex flex-1 flex-col items-center justify-center pb-10 pt-32 text-center"
      >
        <motion.p {...fade(0.1)} className="label tracking-[0.42em] text-ivory/75">
          {hero.eyebrow}
        </motion.p>

        <h1 id="hero-title" className="mt-6 overflow-hidden pb-[0.12em]">
          <motion.span
            className="display block text-[clamp(3.75rem,2rem+8vw,9rem)] leading-[0.95] tracking-[-0.02em] text-ivory"
            initial={reduce ? { opacity: 0 } : { y: "105%" }}
            animate={reduce ? { opacity: 1 } : { y: "0%" }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.25 }}
          >
            {hero.title}
          </motion.span>
        </h1>

        <motion.div {...fade(0.7)} className="mt-12 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:gap-5">
          <Button
            href={hero.primaryCta.href}
            variant="gold"
            magnetic
            className="label !rounded-none px-9 !text-xs tracking-[0.24em] [&>span:first-child]:!rounded-none"
          >
            {hero.primaryCta.label}
          </Button>
          <Button
            href={site.reviewHref}
            variant="ghost-dark"
            external
            className="label !rounded-none px-9 !text-xs tracking-[0.24em] [&>span:first-child]:!rounded-none"
          >
            {hero.reviewCta.label}
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#intro"
        aria-label="Scroll to content"
        {...fade(1.2)}
        className="relative z-10 mx-auto mb-4 flex size-11 items-center justify-center text-ivory/70 transition-colors duration-500 hover:text-gold"
      >
        <motion.svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          className="size-5"
          aria-hidden="true"
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity }}
        >
          <path d="M12 4v16M6 14l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </motion.a>

      <div className="relative z-0 h-[clamp(6rem,12vw,11rem)] w-full">
        <Hills far={farY} mid={midY} className="absolute inset-0" />
      </div>
    </section>
  );
}
