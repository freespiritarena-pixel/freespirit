"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import Link from "next/link";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { ArrowIcon } from "@/components/illustrations/Marks";

const MotionLink = motion.create(Link);

type Variant = "gold" | "ghost-dark" | "navy" | "ghost-light";

const styles: Record<Variant, { base: string; sweep: string }> = {
  // Primary on dark: gold fill, navy text. Sweep lightens to ivory.
  gold: { base: "bg-gold text-navy", sweep: "bg-ivory" },
  // Secondary on dark: hairline outline.
  "ghost-dark": { base: "text-ivory/90 ring-1 ring-inset ring-ivory/30 hover:text-ivory", sweep: "bg-ivory/10" },
  // Primary on light: navy fill, ivory text. Sweep shifts to gold with navy text.
  navy: { base: "bg-[linear-gradient(135deg,var(--sapphire),var(--navy)_60%,var(--ink))] text-ivory hover:text-navy", sweep: "bg-gold" },
  // Secondary on light.
  "ghost-light": { base: "text-navy ring-1 ring-inset ring-navy/25", sweep: "bg-navy/[0.06]" },
};

export function Button({
  href,
  children,
  variant = "gold",
  arrow = false,
  magnetic = false,
  className = "",
  type = "button",
  onClick,
  disabled,
  external = false,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  magnetic?: boolean;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  /** Open in a new tab (off-site links). */
  external?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 140, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 140, damping: 18, mass: 0.6 });

  const onMove = (e: MouseEvent) => {
    if (!magnetic || reduce || !ref.current) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.22);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.3);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const s = styles[variant];
  const cls = `group/btn relative inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden rounded-full px-7 text-[0.9375rem] font-medium tracking-[0.01em] transition-colors duration-700 ease-[var(--ease-soft)] disabled:cursor-not-allowed disabled:opacity-60 ${s.base} ${className}`;

  const content = (
    <>
      <span
        aria-hidden="true"
        className={`absolute inset-0 -translate-x-[101%] rounded-full transition-transform duration-700 ease-[var(--ease-soft)] group-hover/btn:translate-x-0 group-focus-visible/btn:translate-x-0 motion-reduce:transition-none ${s.sweep}`}
      />
      <span className="relative">{children}</span>
      {external && <span className="sr-only"> (opens in a new tab)</span>}
      {arrow && (
        <ArrowIcon className="relative size-4 transition-transform duration-700 ease-[var(--ease-soft)] group-hover/btn:translate-x-1" />
      )}
    </>
  );

  const motionStyle = magnetic ? { x: sx, y: sy } : undefined;

  if (href) {
    return (
      <MotionLink
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={cls}
        style={motionStyle}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </MotionLink>
    );
  }
  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      className={cls}
      style={motionStyle}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </motion.button>
  );
}
