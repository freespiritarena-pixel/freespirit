import { programs } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Stagger, StaggerItem } from "@/components/motion/primitives";

export function Programs() {
  return (
    <section id="programs" data-tone="light" aria-labelledby="programs-title" className="section-y bg-ivory text-navy">
      <div className="container-x">
        <SectionHeading number="03" id="programs-title" title={programs.title} intro={programs.intro} />

        <Stagger as="ol" className="mt-[clamp(3rem,6vw,5.5rem)] grid gap-6 lg:grid-cols-2" stagger={0.12}>
          {programs.items.map((p, i) => {
            const dark = p.featured;
            const muted = dark ? "text-ivory/65" : "text-navy/65";
            const rule = dark ? "border-ivory/15" : "border-navy/12";
            return (
              <StaggerItem
                as="li"
                key={p.title}
                className={`relative flex flex-col rounded-[clamp(0.75rem,1.4vw,1.25rem)] p-7 sm:p-10 ${
                  dark ? "bg-silk text-ivory/90" : "bg-navy/[0.04] ring-1 ring-inset ring-navy/12"
                }`}
              >
                {dark && <div className="grain rounded-[inherit]" />}

                <span className={`numeral relative text-sm ${dark ? "text-gold" : "text-navy/65"}`}>
                  Program {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={`display relative mt-4 text-h2 ${dark ? "text-ivory" : "text-navy"}`}>{p.title}</h3>
                <p className={`relative mt-4 max-w-[30rem] leading-relaxed ${muted}`}>{p.summary}</p>

                <ul className="relative mt-6 flex flex-wrap gap-2" aria-label={`${p.title} details`}>
                  {p.tags.map((t) => (
                    <li key={t} className={`rounded-full px-3.5 py-1.5 text-sm ${dark ? "bg-gold text-navy" : "bg-gold/60 text-navy"}`}>
                      {t}
                    </li>
                  ))}
                </ul>

                <h4 className={`label relative mt-10 ${muted}`}>Choose an option</h4>
                <ul className={`relative mt-4 border-t ${rule}`}>
                  {p.options.map((o) => (
                    <li key={o.name} className={`flex items-end justify-between gap-6 border-b py-6 ${rule}`}>
                      <div>
                        <p className={`display text-[1.5rem] leading-tight ${dark ? "text-ivory" : "text-navy"}`}>{o.name}</p>
                        <p className={`mt-1.5 text-[0.9375rem] ${muted}`}>{o.detail}</p>
                      </div>
                      <p className="shrink-0 text-right">
                        <span
                          className={`numeral block text-[clamp(2.25rem,1.9rem+1.2vw,3rem)] leading-none tracking-[-0.02em] ${
                            dark ? "text-ivory" : "text-navy"
                          }`}
                        >
                          {o.amount}
                        </span>
                        <span className={`mt-1.5 block text-sm ${muted}`}>{o.unit}</span>
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="relative mt-auto pt-10">
                  <Button href={p.cta.href} variant={dark ? "gold" : "navy"} arrow>
                    {p.cta.label}
                  </Button>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
