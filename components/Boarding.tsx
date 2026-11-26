import { boarding, type BoardingIcon } from "@/content/site";
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
                <StaggerItem as="li" key={f.title} className="flex gap-3.5 border-b border-navy/12 py-6">
                  <span
                    aria-hidden="true"
                    className="bg-silk mt-1 flex size-7 shrink-0 items-center justify-center rounded-md text-ivory"
                  >
                    <BoardingGlyph name={f.icon} />
                  </span>
                  <div>
                    <h3 className="display text-[1.5rem] font-semibold leading-tight tracking-[-0.01em] text-navy">{f.title}</h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-navy/65">{f.body}</p>
                  </div>
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

/** Small line icons for each boarding option, drawn on a 24px grid. */
function BoardingGlyph({ name }: { name: BoardingIcon }) {
  const paths: Record<BoardingIcon, React.ReactNode> = {
    // Barn with stall door
    stall: (
      <>
        <path d="M3 10.5 12 4l9 6.5V20H3z" />
        <path d="M8 20v-6h8v6M8 14l8 6M16 14l-8 6" />
      </>
    ),
    // Single fenced paddock
    paddock: (
      <>
        <path d="M5 6v14M12 6v14M19 6v14" />
        <path d="M3 10h18M3 15h18" />
      </>
    ),
    // Two horses side by side (companionship)
    herd: (
      <>
        <circle cx="8.5" cy="8" r="3" />
        <circle cx="15.5" cy="8" r="3" />
        <path d="M3 20c0-3.3 2.5-6 5.5-6s5.5 2.7 5.5 6M10 20c0-3.3 2.5-6 5.5-6S21 16.7 21 20" />
      </>
    ),
    // Sun over rolling grass
    pasture: (
      <>
        <circle cx="16.5" cy="7" r="2.5" />
        <path d="M2.5 19c3-4 6-4 9 0s6 4 10 0" />
        <path d="M6 15.5v-3M9 15v-4M13 16v-3" />
      </>
    ),
    // Wheat / hay
    feed: (
      <>
        <path d="M12 21V8" />
        <path d="M12 8c0-2.5 1.5-4 3.5-4.5C15.5 6 14 8 12 8zM12 8c0-2.5-1.5-4-3.5-4.5C8.5 6 10 8 12 8z" />
        <path d="M12 13c0-2.5 1.5-4 3.5-4.5C15.5 11 14 13 12 13zM12 13c0-2.5-1.5-4-3.5-4.5C8.5 11 10 13 12 13z" />
        <path d="M12 18c0-2.5 1.5-4 3.5-4.5C15.5 16 14 18 12 18zM12 18c0-2.5-1.5-4-3.5-4.5C8.5 16 10 18 12 18z" />
      </>
    ),
    // Heart with plus (personal care)
    care: (
      <>
        <path d="M12 20s-7.5-4.6-7.5-10A4.2 4.2 0 0 1 12 7.4 4.2 4.2 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z" />
        <path d="M12 10.5v5M9.5 13h5" />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="size-[0.9375rem]" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
