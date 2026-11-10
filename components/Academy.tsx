import { academy } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { ImageSlot } from "@/components/ImageSlot";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";

export function Academy() {
  const [lead, ...rest] = academy.facilities;
  const motifs = ["ring", "hills", "horseshoe"] as const;

  return (
    <section id="academy" data-tone="light" aria-labelledby="academy-title" className="relative bg-ivory text-navy">
      {/* gold-tint band */}
      <div className="section-y bg-gold/25">
        <div className="container-x">
          <SectionHeading number="04" id="academy-title" title={academy.title} intro={academy.intro} />

          <div className="grid-12 mt-[clamp(3rem,6vw,5.5rem)] items-end gap-y-10">
            <Reveal className="col-span-12 lg:col-span-7">
              <ImageSlot image={lead.image} motif="poles" className="aspect-[4/3] w-full" sizes="(min-width:1024px) 58vw, 100vw" />
            </Reveal>
            <Reveal delay={0.12} className="col-span-12 lg:col-span-4 lg:col-start-9">
              <h3 className="display text-h3">{lead.title}</h3>
              <p className="mt-4 leading-relaxed text-navy/65">{lead.body}</p>
              <dl className="mt-10 border-t border-navy/12 pt-6">
                <dt className="label text-navy/65">Location</dt>
                <dd className="display mt-3 text-[1.625rem] leading-tight">{academy.location}</dd>
                <dd className="mt-2 text-[0.9375rem] text-navy/65">{academy.locationNote}</dd>
              </dl>
            </Reveal>
          </div>

          <Stagger className="mt-[clamp(3.5rem,7vw,6rem)] grid gap-x-6 gap-y-12 md:grid-cols-3" stagger={0.12}>
            {rest.map((f, i) => (
              <StaggerItem key={f.title} className={`group ${i === 1 ? "md:translate-y-12" : ""}`}>
                <ImageSlot image={f.image} motif={motifs[i]} className="aspect-[4/5] w-full" sizes="(min-width:768px) 33vw, 100vw" />
                <h3 className="display mt-6 text-[1.625rem] leading-tight tracking-[-0.01em]">{f.title}</h3>
                <p className="mt-2 max-w-[24rem] leading-relaxed text-navy/65">{f.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
