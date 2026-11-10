import Image from "next/image";
import type { ImageAsset, Motif } from "@/content/site";
import { MotifArt } from "@/components/illustrations/Marks";

/**
 * A place where a photo belongs. Without `src` it renders a designed
 * placeholder (tone block, faint line-art motif, caption). With `src` it
 * renders the photo, covering the frame.
 */
export function ImageSlot({
  image,
  tone = "light",
  motif = "horse",
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  zoom = false,
  rounded = true,
  hoverScale = true,
}: {
  image: ImageAsset;
  tone?: "light" | "dark";
  motif?: Motif;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Slow ambient zoom (hero). */
  zoom?: boolean;
  rounded?: boolean;
  hoverScale?: boolean;
}) {
  const dark = tone === "dark";
  const frame = `group/slot relative isolate overflow-hidden ${rounded ? "rounded-[clamp(0.75rem,1.4vw,1.25rem)]" : ""} ${
    dark ? "bg-ivory/[0.07]" : "bg-navy/[0.09]"
  } ${className}`;
  const inner = `absolute inset-0 transition-transform duration-[1100ms] ease-[var(--ease-soft)] motion-reduce:transition-none ${
    hoverScale ? "group-hover/slot:scale-[1.03] group-hover:scale-[1.03]" : ""
  }`;

  if (image.src) {
    return (
      <div className={frame}>
        <div className={inner}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            priority={priority}
            className={`object-cover ${zoom ? "slow-zoom" : ""}`}
            style={image.position ? { objectPosition: image.position } : undefined}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={frame} role="img" aria-label={`${image.alt} (photo coming soon)`}>
      <div className={inner}>
        <div
          className={`absolute inset-0 ${
            dark
              ? "bg-[radial-gradient(120%_80%_at_80%_10%,color-mix(in_oklab,var(--gold)_10%,transparent),transparent_60%)]"
              : "bg-[radial-gradient(120%_80%_at_80%_10%,color-mix(in_oklab,var(--gold)_35%,transparent),transparent_70%)]"
          }`}
        />
        <MotifArt
          motif={motif}
          className={`absolute left-1/2 top-1/2 w-[58%] max-w-[22rem] -translate-x-1/2 -translate-y-[56%] ${
            dark ? "text-gold/25" : "text-navy/20"
          }`}
        />
      </div>
      <p
        aria-hidden="true"
        className={`label absolute bottom-0 left-0 right-0 flex items-center gap-3 p-4 sm:p-5 ${
          dark ? "text-ivory/60" : "text-navy/65"
        }`}
      >
        <span className={`h-px w-6 shrink-0 ${dark ? "bg-ivory/40" : "bg-navy/40"}`} />
        {image.caption}
      </p>
    </div>
  );
}
