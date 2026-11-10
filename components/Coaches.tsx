import { coaches } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { ImageSlot } from "@/components/ImageSlot";
import { Stagger, StaggerItem } from "@/components/motion/primitives";

export function Coaches({ number = "05" }: { number?: string } = {}) {
  return (
    <section id="coaches" data-tone="dark" aria-labelledby="coaches-title" className="section-y bg-silk text-ivory/90">
      <div className="container-x">
        <SectionHeading number={number} id="coaches-title" title={coaches.title} intro={coaches.intro} tone="dark" />

        <Stagger as="ul" className="mt-[clamp(3rem,6vw,5.5rem)] grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 lg:grid-cols-4" stagger={0.1}>
          {coaches.people.map((c, i) => (
            <StaggerItem as="li" key={i} className="group">
              <ImageSlot image={c.image} motif="portrait" tone="dark" className="aspect-[4/5] w-full" sizes="(min-width:1024px) 25vw, 50vw" />
              <div className="mt-5 border-t border-ivory/15 pt-4">
                <h3 className="display text-ivory text-[1.375rem] leading-tight sm:text-[1.625rem]">{c.name}</h3>
                <p className="mt-1 text-[0.9375rem] text-gold">{c.role}</p>
                <dl className="mt-4 space-y-2 text-sm leading-snug text-ivory/65">
                  <div>
                    <dt className="sr-only">Certification</dt>
                    <dd>{c.certification}</dd>
                  </div>
                  <div>
                    <dt className="sr-only">Discipline</dt>
                    <dd className="flex items-center gap-2">
                      <span aria-hidden="true" className="h-px w-4 bg-gold/50" />
                      {c.discipline}
                    </dd>
                  </div>
                </dl>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
