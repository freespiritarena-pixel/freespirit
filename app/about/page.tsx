import type { Metadata } from "next";
import { about, approach } from "@/content/site";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ImageSlot } from "@/components/ImageSlot";
import { Stats } from "@/components/Stats";
import { Coaches } from "@/components/Coaches";
import { CtaBand } from "@/components/CtaBand";
import { Horizon } from "@/components/illustrations/Hills";
import { MotifArt } from "@/components/illustrations/Marks";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";

export const metadata: Metadata = {
  title: about.meta.title,
  description: about.meta.description,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const { story, milestones } = about;
  return (
    <PageShell>
      <PageHero content={about.hero} id="about-title" />

      {/* Story */}
      <section data-tone="light" aria-labelledby="story-title" className="section-y bg-ivory text-navy">
        <div className="container-x">
          <SectionHeading number="01" id="story-title" title={story.title} />
          <div className="grid-12 mt-[clamp(3rem,6vw,5rem)] items-start gap-y-10">
            <Reveal className="col-span-12 lg:col-span-6">
              <ImageSlot image={story.image} motif="ring" className="aspect-[4/3] w-full" sizes="(min-width:1024px) 50vw, 100vw" />
            </Reveal>
            <Reveal delay={0.12} className="col-span-12 lg:col-span-5 lg:col-start-8">
              {story.paragraphs.map((p, i) => (
                <p key={i} className={`${i === 0 ? "text-lead text-navy" : "mt-5 leading-relaxed text-navy/70"}`}>
                  {p}
                </p>
              ))}
              <p className="display mt-10 border-t border-navy/12 pt-6 text-[1.375rem] italic text-navy">{story.signature}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <Stats />

      <div className="bg-ivory">
        <Horizon to="navy" />
      </div>

      {/* Values */}
      <section data-tone="dark" aria-labelledby="values-title" className="section-y relative bg-silk text-ivory/90">
        <div className="grain" />
        <div className="container-x relative">
          <SectionHeading number="02" id="values-title" title={approach.title} intro={approach.intro} tone="dark" />
          <Stagger as="ol" className="mt-[clamp(3rem,6vw,5rem)] grid gap-6 md:grid-cols-3" stagger={0.12}>
            {approach.principles.map((p, i) => (
              <StaggerItem
                as="li"
                key={p.name}
                className="flex flex-col rounded-[clamp(0.75rem,1.4vw,1.25rem)] bg-ivory/[0.05] p-7 ring-1 ring-inset ring-ivory/10 sm:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="numeral text-base text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <MotifArt motif={p.motif} className="w-20 text-gold/60" />
                </div>
                <h3 className="display mt-10 text-h3 text-ivory">{p.name}</h3>
                <p className="mt-2 text-ivory/90">{p.title}</p>
                <p className="mt-4 leading-relaxed text-ivory/60">{p.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <div className="bg-navy">
        <Horizon to="ivory" />
      </div>

      {/* Milestones */}
      <section data-tone="light" aria-labelledby="milestones-title" className="section-y bg-ivory text-navy">
        <div className="container-x">
          <SectionHeading number="03" id="milestones-title" title={milestones.title} />
          <ol className="grid-12 mt-[clamp(3rem,6vw,5rem)]">
            {milestones.items.map((m, i) => (
              <Reveal
                as="li"
                key={i}
                delay={i * 0.05}
                className="col-span-12 grid grid-cols-[6rem_1fr] items-baseline gap-6 border-t border-navy/12 py-7 last:border-b sm:grid-cols-[10rem_1fr] lg:col-span-9 lg:col-start-4"
              >
                <span className="numeral text-[clamp(1.75rem,1.3rem+1.4vw,2.5rem)] leading-none text-navy">{m.year}</span>
                <span className="text-lead text-navy/75">{m.text}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <div className="bg-ivory">
        <Horizon to="navy" />
      </div>
      <Coaches number="04" />
      <div className="bg-navy">
        <Horizon to="ivory" />
      </div>

      <CtaBand {...about.cta} />
    </PageShell>
  );
}
