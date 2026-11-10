import Link from "next/link";
import type { PageHeroContent } from "@/content/site";
import { ImageSlot } from "@/components/ImageSlot";
import { Horizon } from "@/components/illustrations/Hills";
import { Reveal } from "@/components/motion/primitives";

/**
 * Opening band for inner pages: the same silk-blue ground as the home hero,
 * with a breadcrumb, a headline that ends in gold italic, and an optional
 * photo. Ends in a hill line that melts into the ivory section below.
 */
export function PageHero({ content, id }: { content: PageHeroContent; id: string }) {
  const { eyebrow, title, emphasis, intro, image } = content;
  return (
    <section data-tone="dark" aria-labelledby={id} className="relative isolate overflow-hidden bg-silk text-ivory/90">
      <div className="grain -z-10" />
      <div
        aria-hidden="true"
        className="absolute -right-[20%] -top-[30%] -z-10 aspect-square w-[80vw] max-w-[60rem] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--gold)_12%,transparent),transparent)]"
      />

      <div className="container-x grid-12 items-end gap-y-12 pt-32 sm:pt-40">
        <div className={`col-span-12 ${image ? "lg:col-span-7" : "lg:col-span-9"}`}>
          <Reveal y={12}>
            <nav aria-label="Breadcrumb">
              <ol className="label flex items-center gap-3 text-ivory/60">
                <li>
                  <Link href="/" className="link-draw inline-flex min-h-11 items-center hover:text-ivory">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="h-px w-6 bg-gold/60" />
                <li aria-current="page" className="text-gold">
                  {eyebrow}
                </li>
              </ol>
            </nav>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 id={id} className="display mt-6 text-display text-ivory">
              {title}{" "}
              <span className="italic text-gold [font-variation-settings:'opsz'_144,'SOFT'_100]">{emphasis}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-[38rem] text-lead text-ivory/75">{intro}</p>
          </Reveal>
        </div>

        {image && (
          <Reveal delay={0.2} className="col-span-12 hidden lg:col-span-4 lg:col-start-9 lg:block">
            <ImageSlot image={image} tone="dark" priority className="aspect-[4/5] w-full" sizes="(min-width:1024px) 30vw, 0px" />
          </Reveal>
        )}
      </div>

      <Horizon to="ivory" className="-mt-2" />
    </section>
  );
}
