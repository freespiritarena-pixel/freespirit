import type { Metadata } from "next";
import { contactPage, site } from "@/content/site";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { InquiryForm } from "@/components/InquiryForm";
import { Horizon } from "@/components/illustrations/Hills";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";

export const metadata: Metadata = {
  title: contactPage.meta.title,
  description: contactPage.meta.description,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const a = site.address;
  const mapHref = `https://www.openstreetmap.org/?mlat=${site.geo.latitude}&mlon=${site.geo.longitude}#map=14/${site.geo.latitude}/${site.geo.longitude}`;
  const cards = [
    { label: "Call", value: site.phone, href: site.phoneHref },
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "Visit", value: `${a.street}, ${a.city}, ${a.region} ${a.postalCode}`, href: mapHref, external: true },
    { label: "Hours", value: site.hours },
  ];

  return (
    <PageShell>
      <PageHero content={contactPage.hero} id="contact-page-title" />

      {/* Ways to reach us */}
      <section data-tone="light" aria-labelledby="reach-title" className="bg-ivory pb-[clamp(4rem,8vw,7rem)] pt-[clamp(2rem,4vw,3.5rem)] text-navy">
        <div className="container-x">
          <h2 id="reach-title" className="sr-only">
            Ways to reach us
          </h2>
          <Stagger as="ul" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {cards.map((c) => (
              <StaggerItem as="li" key={c.label}>
                {c.href ? (
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex h-full flex-col justify-between gap-10 rounded-[clamp(0.75rem,1.4vw,1.25rem)] bg-navy/[0.04] p-6 ring-1 ring-inset ring-navy/10 transition-[background-color,box-shadow] duration-700 ease-[var(--ease-soft)] hover:bg-gold/40 hover:ring-gold sm:p-7"
                  >
                    <span className="label text-navy/60">{c.label}</span>
                    <span className="display break-words text-[1.375rem] leading-snug">
                      <span className="link-draw">{c.value}</span>
                      {c.external && <span className="sr-only"> (opens map in a new tab)</span>}
                    </span>
                  </a>
                ) : (
                  <div className="flex h-full flex-col justify-between gap-10 rounded-[clamp(0.75rem,1.4vw,1.25rem)] bg-navy/[0.04] p-6 ring-1 ring-inset ring-navy/10 sm:p-7">
                    <span className="label text-navy/60">{c.label}</span>
                    <span className="display text-[1.375rem] leading-snug">{c.value}</span>
                  </div>
                )}
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-8 max-w-[44rem] border-l border-gold pl-5 leading-relaxed text-navy/70">
            <p>
              <span className="label mr-3 text-navy">Directions</span>
              {contactPage.directions}
            </p>
          </Reveal>
        </div>
      </section>

      <div className="bg-ivory">
        <Horizon to="navy" />
      </div>
      <InquiryForm number="01" />
      <div className="bg-navy">
        <Horizon to="ivory" />
      </div>

      {/* FAQ */}
      <section data-tone="light" aria-labelledby="faq-title" className="section-y bg-ivory text-navy">
        <div className="container-x">
          <SectionHeading number="02" id="faq-title" title="Before your first visit" />
          <div className="grid-12 mt-[clamp(2.5rem,5vw,4rem)]">
            <div className="col-span-12 lg:col-span-8 lg:col-start-4">
              {contactPage.faqs.map((f) => (
                <details key={f.q} className="group border-t border-navy/12 last:border-b">
                  <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                    <span className="display text-[1.375rem] leading-snug sm:text-[1.625rem]">{f.q}</span>
                    <span
                      aria-hidden="true"
                      className="relative flex size-10 shrink-0 items-center justify-center rounded-full ring-1 ring-inset ring-navy/20 transition-[transform,background-color] duration-500 ease-[var(--ease-soft)] group-open:rotate-45 group-open:bg-navy group-open:text-ivory"
                    >
                      <svg viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth={1.5}>
                        <path d="M8 2v12M2 8h12" strokeLinecap="round" />
                      </svg>
                    </span>
                  </summary>
                  <p className="max-w-[40rem] pb-7 leading-relaxed text-navy/70">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
