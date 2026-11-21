import type { Metadata } from "next";
import { about, approach } from "@/content/site";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ImageSlot } from "@/components/ImageSlot";
import { CtaBand } from "@/components/CtaBand";
import { Boarding } from "@/components/Boarding";
import { Horizon } from "@/components/illustrations/Hills";
import { MotifArt } from "@/components/illustrations/Marks";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";

export const metadata: Metadata = {
  title: about.meta.title,
  description: about.meta.description,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const { story } = about;
  return (
    <PageShell>
      <PageHero content={about.hero} id="about-title" />

      <section data-tone="light" aria-labelledby="story-title" className="section-y bg-ivory text-navy">
        <div className="container-x">
          <SectionHeading number="01" id="story-title" title={story.title} />
          <div className="grid-12 mt-[clamp(3rem,6vw,5rem)] items-start gap-y-10">
            <Reveal className="col-span-12 grid grid-cols-5 gap-3 sm:gap-4 lg:col-span-6">
              <ImageSlot
                image={story.image}
                motif="ring"
                className="col-span-3 row-span-2 h-full min-h-[18rem] w-full"
                sizes="(min-width:1024px) 30vw, 60vw"
              />
              {story.supporting.map((img) => (
                <ImageSlot
                  key={img.src ?? img.caption}
                  image={img}
                  motif="horse"
                  className="col-span-2 aspect-[4/5] w-full"
                  sizes="(min-width:1024px) 20vw, 40vw"
                />
              ))}
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
                className="flex flex-col overflow-hidden rounded-[clamp(0.75rem,1.4vw,1.25rem)] bg-ivory/[0.05] ring-1 ring-inset ring-ivory/10"
              >
                {p.image && (
                  <ImageSlot
                    image={p.image}
                    tone="dark"
                    motif={p.motif}
                    rounded={false}
                    className="aspect-[3/2] w-full"
                    sizes="(min-width:768px) 33vw, 100vw"
                  />
                )}
                <div className="flex flex-1 flex-col p-7 sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="numeral text-base text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <MotifArt motif={p.motif} className="w-20 text-gold/60" />
                </div>
                <h3 className="display mt-6 text-h3 text-ivory">{p.name}</h3>
                <p className="mt-2 text-ivory/90">{p.title}</p>
                <p className="mt-4 leading-relaxed text-ivory/60">{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <div className="bg-navy">
        <Horizon to="ivory" />
      </div>

      <Boarding number="03" />

      <CtaBand {...about.cta} />
    </PageShell>
  );
}
