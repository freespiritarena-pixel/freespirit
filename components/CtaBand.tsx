import { Button } from "@/components/Button";
import { Horseshoe } from "@/components/illustrations/Marks";
import { Reveal } from "@/components/motion/primitives";

/** Closing invitation on inner pages: gold-tint band on ivory. */
export function CtaBand({
  title,
  body,
  primary,
  secondary,
}: {
  title: string;
  body: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section data-tone="light" aria-labelledby="cta-title" className="section-y bg-ivory text-navy">
      <div className="container-x">
        <Reveal className="relative isolate overflow-hidden rounded-[clamp(1rem,2vw,1.75rem)] bg-gold/35 px-6 py-[clamp(3rem,7vw,5.5rem)] sm:px-12 lg:px-20">
          <Horseshoe className="absolute -right-10 -top-10 -z-10 size-64 text-navy/[0.07]" strokeWidth={1} />
          <div className="grid-12 items-end gap-y-8">
            <div className="col-span-12 lg:col-span-7">
              <h2 id="cta-title" className="display text-h2">
                {title}
              </h2>
              <p className="mt-5 max-w-[32rem] text-lead text-navy/70">{body}</p>
            </div>
            <div className="col-span-12 flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
              <Button href={primary.href} variant="navy" arrow>
                {primary.label}
              </Button>
              {secondary && (
                <Button href={secondary.href} variant="ghost-light">
                  {secondary.label}
                </Button>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
