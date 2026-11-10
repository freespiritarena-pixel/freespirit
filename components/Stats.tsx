"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { stats } from "@/content/site";
import { Stagger, StaggerItem } from "@/components/motion/primitives";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();

  // Once hydrated, start from zero (unless already visible or motion is reduced).
  useEffect(() => {
    if (ref.current && !reduce && !inView) ref.current.textContent = `0${suffix}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;
    if (reduce) {
      el.textContent = `${to}${suffix}`;
      return;
    }
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        el.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduce, to, suffix]);

  // Server-rendered with the final value so it is correct without JS.
  return (
    <span ref={ref} aria-hidden="true">
      {`${to}${suffix}`}
    </span>
  );
}

export function Stats() {
  return (
    <section id="intro" data-tone="light" aria-label="Free Spirit at a glance" className="bg-ivory pb-[clamp(3rem,6vw,5rem)] text-navy">
      <div className="container-x">
        <Stagger as="ul" className="grid grid-cols-2 border-y border-navy/12 lg:grid-cols-4">
          {stats.map((s, i) => {
            const numeric = typeof s.value === "number";
            const spoken = `${s.value}${s.suffix ?? ""} ${s.label}`;
            return (
              <StaggerItem
                as="li"
                key={s.label}
                className={`flex flex-col gap-3 py-8 pr-4 sm:py-10 ${i % 2 === 1 ? "border-l border-navy/12 pl-5 sm:pl-8" : ""} ${
                  i >= 2 ? "border-t border-navy/12 lg:border-t-0" : ""
                } ${i === 2 ? "lg:border-l lg:pl-8" : ""}`}
              >
                <span className="sr-only">{spoken}</span>
                <span className="numeral text-[clamp(2.5rem,1.8rem+2.6vw,4.25rem)] leading-none tracking-[-0.02em] text-navy" aria-hidden="true">
                  {numeric ? <Counter to={s.value as number} suffix={s.suffix} /> : <span className="whitespace-nowrap text-[0.72em] italic">{s.value}</span>}
                </span>
                <span aria-hidden="true" className="max-w-[14rem] text-[0.9375rem] leading-snug text-navy/65">
                  {s.label}
                </span>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
