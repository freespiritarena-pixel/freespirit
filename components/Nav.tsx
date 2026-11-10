"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/content/site";
import { Horseshoe } from "@/components/illustrations/Marks";
import { Button } from "@/components/Button";
import { EASE } from "@/components/motion/primitives";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Horseshoe className="size-7 text-gold" />
      <span className="display text-[1.375rem] leading-none tracking-[-0.01em]">{site.name}</span>
    </span>
  );
}

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  // Lock scroll, trap focus and close on Escape while the menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const first = menuRef.current?.querySelector<HTMLElement>("a,button");
    first?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && menuRef.current) {
        const items = Array.from(menuRef.current.querySelectorAll<HTMLElement>("a,button"));
        const all = [toggleRef.current!, ...items];
        const idx = all.indexOf(document.activeElement as HTMLElement);
        const next = e.shiftKey ? (idx <= 0 ? all.length - 1 : idx - 1) : idx === all.length - 1 ? 0 : idx + 1;
        e.preventDefault();
        all[next]?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const pathname = usePathname();
  const current = (href: string) => (href === pathname ? "page" : undefined);
  const solid = scrolled || open;

  return (
    <header
      data-tone="dark"
      className={`fixed inset-x-0 top-0 z-50 text-ivory/90 transition-[background-color,border-color] duration-700 ease-[var(--ease-soft)] ${
        solid ? "border-b border-ivory/12 bg-navy" : "border-b border-transparent bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="label sr-only z-[60] rounded-full bg-gold px-4 py-3 text-navy focus:not-sr-only focus:absolute focus:left-4 focus:top-3"
      >
        Skip to content
      </a>
      <nav aria-label="Primary" className="container-x flex h-[4.5rem] items-center justify-between gap-6">
        <Link href="/" className="-m-2 flex min-h-11 items-center p-2 text-ivory" aria-label={`${site.name}, home`}>
          <Wordmark />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {nav.links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={current(l.href)}
                className="link-draw inline-flex min-h-11 items-center text-[0.9375rem] text-ivory/80 transition-colors duration-500 hover:text-ivory aria-[current=page]:bg-[length:100%_1px] aria-[current=page]:text-gold"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href={nav.cta.href} variant="gold" className="min-h-11 px-6 text-sm">
            {nav.cta.label}
          </Button>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="relative -mr-2 flex size-12 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="relative block h-3 w-7">
            <span
              className={`absolute left-0 top-0 h-px w-full bg-ivory transition-transform duration-500 ease-[var(--ease-soft)] ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-full bg-ivory transition-transform duration-500 ease-[var(--ease-soft)] ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-x-0 bottom-0 top-[4.5rem] overflow-y-auto bg-silk lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="container-x flex min-h-full flex-col justify-between pb-10 pt-8">
              <ul className="flex flex-col">
                {nav.links.map((l, i) => (
                  <motion.li
                    key={l.href}
                    className="border-b border-ivory/12"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.1 + i * 0.06 }}
                  >
                    <Link
                      href={l.href}
                      aria-current={current(l.href)}
                      onClick={() => setOpen(false)}
                      className="display flex min-h-16 items-center justify-between py-3 text-[2.25rem] text-ivory"
                    >
                      {l.label}
                      <span className="numeral text-base text-gold">{String(i + 1).padStart(2, "0")}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col gap-6">
                <Button href={nav.cta.href} variant="gold" arrow className="w-full" onClick={() => setOpen(false)}>
                  {nav.cta.label}
                </Button>
                <p className="text-sm text-ivory/60">
                  {site.phone} · {site.email}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
