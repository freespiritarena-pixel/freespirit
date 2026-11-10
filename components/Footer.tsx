import { footer, nav, site } from "@/content/site";
import Link from "next/link";
import { Wordmark } from "@/components/Nav";

export function Footer() {
  const a = site.address;
  return (
    <footer data-tone="dark" className="relative bg-silk text-ivory/90">
      <div className="container-x">
        <div className="grid-12 gap-y-12 border-t border-ivory/12 py-[clamp(3.5rem,7vw,6rem)]">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <Wordmark className="text-ivory" />
            <p className="mt-6 max-w-[22rem] leading-relaxed text-ivory/60">{footer.blurb}</p>
            <p className="label mt-8 inline-flex items-center gap-2.5 text-ivory/60">
              <span aria-hidden="true" className="size-1 rounded-full bg-gold" />
              {site.membership}
            </p>
          </div>

          <div className="col-span-6 md:col-span-3 lg:col-span-2 lg:col-start-6">
            <h2 className="label text-ivory/60">Visit</h2>
            <address className="mt-5 not-italic leading-relaxed text-ivory/90">
              {a.street}
              <br />
              {a.city}, {a.region}
              <br />
              {a.postalCode}
            </address>
          </div>

          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <h2 className="label text-ivory/60">Contact</h2>
            <ul className="mt-3 space-y-1">
              <li>
                <a href={site.phoneHref} className="link-draw inline-flex min-h-11 items-center">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="link-draw inline-block py-3 leading-snug">
                  {site.email.split("@")[0]}@<wbr />
                  {site.email.split("@")[1]}
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Footer" className="col-span-6 md:col-span-3 lg:col-span-2">
            <h2 className="label text-ivory/60">Explore</h2>
            <ul className="mt-3 space-y-1">
              {nav.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link-draw inline-flex min-h-11 items-center">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <h2 className="label text-ivory/60">Follow</h2>
            <ul className="mt-3 space-y-1">
              {site.social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="link-draw inline-flex min-h-11 items-center">
                    {s.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-ivory/12 py-8 text-sm text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.legal}</p>
          {/* Language toggle placeholder: wire to i18n routing when French content is ready. */}
          <div role="group" aria-label="Language" className="flex items-center gap-1">
            <button type="button" aria-pressed="true" className="label flex min-h-11 min-w-11 items-center justify-center rounded-full px-3 text-gold">
              EN
            </button>
            <span aria-hidden="true" className="h-4 w-px bg-ivory/20" />
            <button
              type="button"
              aria-pressed="false"
              aria-disabled="true"
              title={footer.languageNote}
              className="label flex min-h-11 min-w-11 cursor-not-allowed items-center justify-center rounded-full px-3 text-ivory/60"
            >
              FR
              <span className="sr-only"> ({footer.languageNote})</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
