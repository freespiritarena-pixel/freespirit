import type { Metadata } from "next";
import { gallery } from "@/content/site";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: gallery.meta.title,
  description: gallery.meta.description,
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <PageShell>
      <PageHero content={gallery.hero} id="gallery-title" />
      <section data-tone="light" aria-label="Photos" className="bg-ivory pb-[clamp(2rem,4vw,3rem)] pt-[clamp(2rem,4vw,3.5rem)] text-navy">
        <div className="container-x">
          <GalleryGrid />
        </div>
      </section>
      <CtaBand
        title="See it for yourself."
        body="Photos only go so far. Book a trial lesson and spend an hour at the barn."
        primary={{ label: "Book a Trial Lesson", href: "/contact" }}
        secondary={{ label: "About the academy", href: "/about" }}
      />
    </PageShell>
  );
}
