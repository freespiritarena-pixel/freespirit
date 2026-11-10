import { seasons } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/primitives";
import { HillsMotif, Horseshoe, PolesMotif, RingMotif } from "@/components/illustrations/Marks";

/**
 * The year darkens from spring to winter using only the palette:
 * ivory → gold tint → gold → navy.
 */
const TONES = [
  { panel: "bg-ivory ring-1 ring-inset ring-navy/12", text: "text-navy", muted: "text-navy/65", art: "text-navy/25", tone: "light" },
  { panel: "bg-gold/45", text: "text-navy", muted: "text-navy/70", art: "text-navy/25", tone: "light" },
  { panel: "bg-gold", text: "text-navy", muted: "text-navy/75", art: "text-navy/30", tone: "light" },
  { panel: "bg-silk", text: "text-ivory", muted: "text-ivory/60", art: "text-gold/40", tone: "dark" },
] as const;

const ART = [HillsMotif, PolesMotif, RingMotif, Horseshoe];

export function Seasons() {
  return (
    <section id="seasons" data-tone="light" aria-labelledby="seasons-title" className="section-y bg-ivory text-navy">
      <div className="container-x">
        <SectionHeading number="06" id="seasons-title" title={seasons.title} intro={seasons.intro} />

        <Stagger as="ul" className="mt-[clamp(3rem,6vw,5.5rem)] grid gap-3 sm:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
          {seasons.items.map((s, i) => {
            const t = TONES[i];
            const Art = ART[i];
            return (
              <StaggerItem
                as="li"
                key={s.name}
                className={`group relative flex min-h-[20rem] flex-col justify-between overflow-hidden rounded-[clamp(0.75rem,1.4vw,1.25rem)] p-6 sm:min-h-[24rem] sm:p-8 ${t.panel}`}
              >
                <div data-tone={t.tone} className="flex items-start justify-between">
                  <span className={`numeral text-sm ${t.muted}`}>{String(i + 1).padStart(2, "0")}</span>
                  <Art className={`w-20 transition-transform duration-[1100ms] ease-[var(--ease-soft)] group-hover:-translate-y-1 ${t.art}`} />
                </div>
                <div>
                  <h3 className={`display text-h3 ${t.text}`}>{s.name}</h3>
                  <p className={`mt-3 leading-relaxed ${t.muted}`}>{s.body}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
