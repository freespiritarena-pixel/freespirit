import type { Motif } from "@/content/site";

type SvgProps = { className?: string; strokeWidth?: number };

/** Horseshoe mark, opening upward (for luck). */
export function Horseshoe({ className, strokeWidth = 1.6 }: SvgProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M12 6 C6 14 5 24 9 32 C13 40 19 43 24 43 C29 43 35 40 39 32 C43 24 42 14 36 6" />
      <path d="M18 7 C14 14 13 22 16 29 C18 34 21 36 24 36 C27 36 30 34 32 29 C35 22 34 14 30 7" />
      <path d="M12 6 L18 7 M36 6 L30 7" />
      {[
        [10.5, 18],
        [12, 26],
        [15.5, 33],
        [37.5, 18],
        [36, 26],
        [32.5, 33],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={0.9} fill="currentColor" stroke="none" />
      ))}
    </svg>
  );
}

/** Riding ring seen in gentle perspective, with a centre line. */
export function RingMotif({ className, strokeWidth = 1.2 }: SvgProps) {
  return (
    <svg viewBox="0 0 200 120" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" className={className} aria-hidden="true">
      <ellipse cx="100" cy="66" rx="88" ry="38" />
      <ellipse cx="100" cy="66" rx="64" ry="25" strokeDasharray="2 6" />
      <path d="M100 28 L100 22 M100 104 L100 110" />
      <path d="M36 66 C60 52 140 52 164 66" strokeOpacity={0.5} />
    </svg>
  );
}

/** A vertical jump: two standards and rails. */
export function PolesMotif({ className, strokeWidth = 1.2 }: SvgProps) {
  return (
    <svg viewBox="0 0 200 120" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M34 18 L34 104 M166 18 L166 104 M26 104 L42 104 M158 104 L174 104" />
      <path d="M34 44 L166 44 M34 70 L166 70 M34 92 L166 92" />
      <path d="M58 44 L58 44.01 M82 44 L82 44.01 M106 44 L106 44.01 M130 44 L130 44.01" strokeWidth={4} />
      <path d="M8 112 L192 112" strokeOpacity={0.5} />
    </svg>
  );
}

/** Rolling hills line motif. */
export function HillsMotif({ className, strokeWidth = 1.2 }: SvgProps) {
  return (
    <svg viewBox="0 0 200 120" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M0 70 C30 50 60 48 92 62 C120 74 150 56 200 44" />
      <path d="M0 88 C40 72 76 74 110 86 C140 96 170 82 200 76" strokeOpacity={0.7} />
      <path d="M0 104 C50 96 100 100 140 106 C164 110 184 104 200 100" strokeOpacity={0.45} />
      <circle cx="150" cy="28" r="9" />
    </svg>
  );
}

/** Simple bust silhouette used for portrait placeholders. */
export function PortraitMotif({ className, strokeWidth = 1.2 }: SvgProps) {
  return (
    <svg viewBox="0 0 200 240" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M72 96 C72 66 84 50 100 50 C116 50 128 66 128 96 C128 120 116 136 100 136 C84 136 72 120 72 96 Z" />
      <path d="M68 78 C78 60 122 60 132 78" />
      <path d="M58 78 C70 46 130 46 142 78 L68 78" strokeOpacity={0.6} />
      <path d="M40 220 C44 176 66 156 100 156 C134 156 156 176 160 220" />
    </svg>
  );
}

/** Small horse head in profile, for placeholders. */
export function HorseHeadMotif({ className, strokeWidth = 1.2 }: SvgProps) {
  return (
    <svg viewBox="0 0 200 160" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M118 20 C114 30 112 36 112 42 C96 52 78 72 62 96 C54 106 52 116 58 122 C66 128 78 124 88 116 C98 108 110 104 120 106 C126 124 132 140 136 152 M118 20 C126 28 130 36 132 44 C152 60 164 96 166 152" />
      <path d="M86 70 C90 66 96 66 98 70" />
      <path d="M134 46 C146 66 152 90 154 118" strokeOpacity={0.6} />
    </svg>
  );
}

export function MotifArt({ motif, className }: { motif: Motif; className?: string }) {
  switch (motif) {
    case "horseshoe":
      return <Horseshoe className={className} strokeWidth={1} />;
    case "ring":
      return <RingMotif className={className} />;
    case "poles":
      return <PolesMotif className={className} />;
    case "hills":
      return <HillsMotif className={className} />;
    case "portrait":
      return <PortraitMotif className={className} />;
    default:
      return <HorseHeadMotif className={className} />;
  }
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 12 H20 M14 6 L20 12 L14 18" />
    </svg>
  );
}
