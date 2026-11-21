import { rentals } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { ImageSlot } from "@/components/ImageSlot";
import { Button } from "@/components/Button";
import { Stagger, StaggerItem } from "@/components/motion/primitives";

export function Rentals() {
  return (
    <section id="rentals" data-tone="light" aria-labelledby="rentals-title" className="section-y bg-ivory text-navy">
      <div className="container-x">
        <SectionHeading number="04" id="rentals-title" title={rentals.title} intro={rentals.intro} />

        <Stagger as="ul" className="mt-[clamp(3rem,6vw,5.5rem)] grid gap-6 md:grid-cols-2" stagger={0.12}>
          {rentals.items.map((r) => (
            <StaggerItem
              as="li"
              key={r.title}
              className="group relative isolate overflow-hidden rounded-[clamp(0.75rem,1.4vw,1.25rem)]"
            >
              <ImageSlot
                image={r.image}
                motif="ring"
                rounded={false}
                className="aspect-[4/5] w-full sm:aspect-[5/6] lg:aspect-[4/5]"
                sizes="(min-width:768px) 50vw, 100vw"
              />

              {/* scrim so text reads over any photo */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(6,14,34,0.92)_0%,rgba(6,14,34,0.6)_38%,rgba(6,14,34,0)_68%)]"
              />

              <div className="absolute inset-x-0 bottom-0 flex flex-col p-6 text-ivory sm:p-9">
                <span className="label text-gold">Available hourly</span>
                <h3 className="display mt-3 text-h2 text-ivory">{r.title}</h3>
                <p className="mt-3 max-w-[26rem] leading-relaxed text-ivory/75">{r.body}</p>

                <div className="mt-6 flex flex-wrap items-end justify-between gap-x-6 gap-y-5 border-t border-ivory/20 pt-6">
                  <p className="flex items-baseline gap-2">
                    <span className="numeral text-[clamp(2rem,1.6rem+1.4vw,3rem)] leading-none tracking-[-0.02em] text-ivory">
                      {r.price.amount}
                    </span>
                    <span className="text-[0.9375rem] text-ivory/70">{r.price.unit}</span>
                  </p>
                  <Button href={r.cta.href} variant="gold" arrow>
                    {r.cta.label}
                  </Button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
