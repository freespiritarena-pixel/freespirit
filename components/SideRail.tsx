import Link from "next/link";
import { site } from "@/content/site";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <path d="M14 8h2.5V4.5H14A3.5 3.5 0 0 0 10.5 8v2.5H8V14h2.5v6.5H14V14h2.5l.5-3.5h-3V8.5A.5.5 0 0 1 14 8Z" />
    </svg>
  );
}

const vertical = "label [writing-mode:vertical-rl] rotate-180 tracking-[0.28em] text-ivory/70 transition-colors duration-500 hover:text-gold";

const socials = [
  { label: "Instagram", Icon: InstagramIcon },
  { label: "Facebook", Icon: FacebookIcon },
]
  .map(({ label, Icon }) => ({ label, Icon, href: site.social.find((s) => s.label === label)?.href }))
  .filter((s): s is { label: string; Icon: typeof InstagramIcon; href: string } => Boolean(s.href));

/** Fixed left rail on large screens: directions, socials, booking. */
export function SideRail() {
  return (
    <aside
      aria-label="Quick links"
      data-tone="dark"
      className="fixed inset-y-0 left-0 z-50 hidden w-[var(--rail-w)] flex-col items-center justify-between border-r border-ivory/10 bg-ink py-8 lg:flex"
    >
      <a href={site.directionsHref} target="_blank" rel="noopener noreferrer" className={`${vertical} py-2`}>
        Get Directions
        <span className="sr-only"> (opens in a new tab)</span>
      </a>

      <ul className="flex flex-col items-center gap-2">
        {socials.map(({ label, Icon, href }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} (opens in a new tab)`}
              className="flex size-11 items-center justify-center text-ivory/70 transition-colors duration-500 hover:text-gold"
            >
              <Icon className="size-5" />
            </a>
          </li>
        ))}
      </ul>

      <Link href={site.bookHref} className={`${vertical} py-2`}>
        Book Online
      </Link>
    </aside>
  );
}
