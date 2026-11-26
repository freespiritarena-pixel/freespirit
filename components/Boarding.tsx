import { boarding } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { ImageSlot } from "@/components/ImageSlot";
import { Button } from "@/components/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";

export function Boarding({ number = "01" }: { number?: string }) {
  return (
    <section id="boarding" data-tone="light" aria-labelledby="boarding-title" className="section-y bg-ivory text-navy">
      <div className="container-x">
        <SectionHeading number={number} id="boarding-title" title={boarding.title} intro={boarding.intro} />

        <div className="grid-12 mt-[clamp(3rem,6vw,5.5rem)] items-start gap-y-12">
          <Reveal className="col-span-12 lg:sticky lg:top-28 lg:col-span-5">
            <ImageSlot
              image={boarding.image}
              motif="hills"
              className="aspect-[4/3] w-full lg:aspect-[4/5]"
              sizes="(min-width:1024px) 40vw, 100vw"
            />
          </Reveal>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <Stagger as="ul" className="grid border-t border-navy/12 sm:grid-cols-2 sm:gap-x-8" stagger={0.06}>
              {boarding.included.map((f) => (
                <StaggerItem as="li" key={f.title} className="border-b border-navy/12 py-6">
                  <h3 className="display text-[1.375rem] leading-tight tracking-[-0.01em]">{f.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-navy/65">{f.body}</p>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.1} className="mt-10 flex flex-col gap-5 rounded-[clamp(0.75rem,1.4vw,1.25rem)] bg-gold/25 p-6 sm:p-8">
              <div>
                <p className="label text-navy/65">{boarding.availability.label}</p>
                <p className="display mt-3 text-[clamp(1.75rem,1.5rem+1vw,2.375rem)] leading-tight tracking-[-0.01em]">
                  {boarding.availability.title}
                </p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-navy/65">{boarding.availability.note}</p>
              </div>
              <Button href={boarding.cta.href} variant="navy" arrow className="w-full justify-center">
                {boarding.cta.label}
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
