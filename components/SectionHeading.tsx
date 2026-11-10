import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/primitives";

/**
 * Editorial section opener: a thin numbered folio sits in the left margin
 * (desktop) or at the right of the heading row (mobile), with the heading and
 * intro on the main measure.
 */
export function SectionHeading({
  number,
  title,
  intro,
  id,
  tone = "light",
  children,
}: {
  number: string;
  title: ReactNode;
  intro?: ReactNode;
  id: string;
  tone?: "light" | "dark";
  children?: ReactNode;
}) {
  const dark = tone === "dark";
  return (
    <div className="grid-12 gap-y-6">
      <div aria-hidden="true" className="col-span-12 hidden pt-4 lg:col-span-3 lg:block">
        <Reveal y={12} className="flex items-center gap-4">
          <span className={`numeral text-lg ${dark ? "text-gold" : "text-navy"}`}>{number}</span>
          <span className={`h-px w-14 ${dark ? "bg-ivory/25" : "bg-navy/25"}`} />
        </Reveal>
      </div>
      <div className="col-span-12 lg:col-span-8">
        <Reveal className="flex items-start justify-between gap-6">
          <h2 id={id} className={`display text-h2 ${dark ? "text-ivory" : "text-navy"}`}>
            {title}
          </h2>
          <span aria-hidden="true" className={`numeral mt-2 text-base lg:hidden ${dark ? "text-gold" : "text-navy/65"}`}>
            {number}
          </span>
        </Reveal>
        {intro && (
          <Reveal delay={0.1}>
            <p className={`mt-6 max-w-[38rem] text-lead ${dark ? "text-ivory/60" : "text-navy/65"}`}>{intro}</p>
          </Reveal>
        )}
        {children}
      </div>
    </div>
  );
}
