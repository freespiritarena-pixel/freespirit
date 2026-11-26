/**
 * CONTENT — every piece of copy, every image path and every alt text on the
 * home page lives here. Edit this file to change wording, add photos, or swap
 * placeholder facts for real ones.
 *
 * Images: set `src` to a file in /public (e.g. "/images/hero.jpg"). When `src`
 * is undefined the slot renders a designed placeholder with the caption.
 *
 * Anything in [square brackets] is a placeholder that should be replaced with
 * real information before launch.
 */

export type ImageAsset = {
  /** Path under /public, e.g. "/images/arena.jpg". Leave undefined for a placeholder. */
  src?: string;
  /** Describes the photo for screen readers. */
  alt: string;
  /** Shown on the placeholder so you know which photo belongs here. */
  caption: string;
  /** Optional CSS object-position (focal point), e.g. "40% 50%". */
  position?: string;
};

export type Motif = "horse" | "horseshoe" | "ring" | "poles" | "hills" | "portrait";

export const site = {
  name: "Free Spirit",
  legalName: "Free Spirit Riding Academy",
  tagline: "Horse riding academy",
  url: "https://www.freespirit-riding.ca", // [replace with real domain]
  description:
    "Free Spirit is a horse riding academy in Rocky View County, just outside Calgary, Alberta, offering lessons for riders aged 5 and up, youth programs, hunter/jumper and dressage training, summer camps and boarding, with an indoor arena for year-round riding.",
  phone: "+1 (587) 839-2623",
  phoneHref: "tel:+15878392623",
  /** Opens a WhatsApp chat with the phone number above. */
  whatsappHref: "https://wa.me/15878392623",
  email: "hello@freespirit-riding.ca", // [replace]
  address: {
    street: "283082 Township Road 254",
    city: "Rocky View County",
    region: "Alberta",
    regionCode: "AB",
    /** Add the postal code here if you want it shown; leave empty to hide it. */
    postalCode: "",
    country: "CA",
    countryName: "Canada",
  },
  /** Barn coordinates for search engines. Add exact values to enable; undefined hides them. */
  geo: undefined as { latitude: number; longitude: number } | undefined,
  hours: "Tuesday to Sunday, 8 am to 8 pm",
  social: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "Facebook", href: "https://facebook.com/" },
  ],
  membership: "Equestrian Canada member",
  /** Google Maps link for the barn. [replace with the real place link] */
  directionsHref:
    "https://www.google.com/maps/search/?api=1&query=283082+Township+Road+254%2C+Rocky+View+County%2C+AB%2C+Canada",
  /** Google review link ("Ask for reviews" in Google Business Profile). [replace] */
  reviewHref: "https://www.google.com/maps/search/?api=1&query=Free+Spirit+Riding+Academy",
  /** Online booking page. [replace with booking system URL if external] */
  bookHref: "/#contact",
};

export const nav = {
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Register Today", href: "/#contact" },
};

export const hero = {
  eyebrow: "Calgary’s Equestrian Experience",
  title: "Free Spirits Horse Academy",
  primaryCta: { label: "Register Today", href: "/#contact" },
  /** Opens site.reviewHref in a new tab. */
  reviewCta: { label: "Leave a Review" },
  /** Optional hero photo. When set, it is shown full-bleed with a slow zoom. */
  image: {
    src: undefined,
    alt: "A rider and horse crossing the outdoor ring at sunrise",
    caption: "Photo: arena at sunrise",
  } as ImageAsset,
  /**
   * Optional background video. Takes priority over `image` when `src` is set.
   * Set `src: undefined` to return to the line-art hero.
   * `cropScale` enlarges the video inside the frame to hide letterbox bars
   * baked into the file (1 = no crop).
   */
  video: {
    src: "/videos/herobg.mp4" as string | undefined,
    poster: "/videos/herobg-poster.jpg",
    alt: "Riders jumping in the sand ring, cantering through snow and wading through water, and a herd running across a pasture",
    cropScale: 1,
  },
};

/**
 * Horse boarding options. Rates are shared on enquiry.
 */
export const boarding = {
  title: "Horse boarding",
  intro:
    "A comfortable, caring and professionally managed home for your horse. Choose from our flexible boarding options designed around your horse's individual needs.",
  image: {
    src: "/images/hb.jpeg",
    alt: "Four horses canter together across a green pasture",
    caption: "Photo: pasture turnout",
    position: "50% 60%",
  } as ImageAsset,
  included: [
    { title: "Indoor stall boarding", body: "A comfortable indoor space offering shelter, security and a dedicated place to rest." },
    { title: "Private paddock boarding", body: "A dedicated outdoor space for your horse to move freely in a private setting." },
    { title: "Shared paddock boarding", body: "A spacious outdoor environment with companionship and opportunities for socialization." },
    { title: "Pasture boarding", body: "Open pasture space where your horse can graze, roam and enjoy a natural environment." },
    { title: "Daily care & nutrition", body: "Quality hay, feeding routines and attentive daily care to support your horse's well-being." },
    { title: "Additional care options", body: "Blanketing, medication assistance and other personalized care services based on your horse's needs." },
  ],
  availability: {
    label: "Limited boarding spaces available",
    title: "Your horse's second home.",
    note: "Contact us for boarding rates and availability.",
  },
  cta: { label: "Enquire About Boarding", href: "/#contact" },
};

export type ProgramOption = {
  name: string;
  detail: string;
  amount: string;
  unit: string;
};

export const programs = {
  title: "Programs for every rider",
  intro:
    "Two programs, each with a group or private option. Every class is one hour, taught by a coach who knows your goals.",
  items: [
    {
      title: "Beginner Program",
      summary: "Calm, safe first steps on our steadiest school horses. No experience needed.",
      tags: ["New riders", "1 hour per class"],
      options: [
        { name: "Basic", detail: "4 classes a month, 1 hour each", amount: "$280", unit: "CAD / month" },
        { name: "Private tutor", detail: "One-to-one with a coach, 1 hour", amount: "$80", unit: "CAD / class" },
      ] as ProgramOption[],
      featured: true,
      cta: { label: "Start as a beginner", href: "/#contact" },
    },
    {
      title: "Youth Program",
      summary: "Build skill and confidence once the basics are in place.",
      tags: ["Ages 12+", "1 hour per class", "Riding experience required"],
      options: [
        { name: "Class", detail: "1 hour per class", amount: "$80", unit: "CAD / class" },
        { name: "Private lesson", detail: "One-to-one with a coach, 1 hour", amount: "$100", unit: "CAD / class" },
      ] as ProgramOption[],
      featured: false,
      cta: { label: "Join the youth program", href: "/#contact" },
    },
  ],
};

/** Hourly rentals: horse and arena. Arena price is on request. */
export const rentals = {
  title: "Horse and arena rental",
  intro: "Ride on your own schedule. Both are available by the hour.",
  items: [
    {
      title: "Horse rent",
      body: "Ride one of our well-schooled horses, tacked up and ready for you.",
      price: { amount: "$50", unit: "CAD / hour" },
      image: {
        src: "/images/8.jpeg",
        alt: "A rider in a grey jacket sits on a bay horse in a grassy field at golden hour",
        caption: "Photo: horse rental",
        position: "50% 55%",
      } as ImageAsset,
      cta: { label: "Rent a horse", href: "/#contact" },
    },
    {
      title: "Arena rent",
      body: "Book the arena for schooling, practice or your own coach.",
      price: { amount: "On request", unit: "hourly rate" },
      image: {
        src: "/images/outdoor-ring-canter.jpg",
        alt: "A rider canters a dark bay horse across a sand arena with show jumps behind",
        caption: "Photo: arena rental",
        position: "55% 50%",
      } as ImageAsset,
      cta: { label: "Ask for arena price", href: "/#contact" },
    },
  ],
};

export const approach = {
  title: "Our approach",
  intro: "Three principles shape every lesson, for every rider, on every horse.",
  principles: [
    {
      name: "Trust",
      title: "Horse welfare comes first.",
      body:
        "Our horses are partners, not equipment. Sensible workloads, daily turnout, individual feeding and regular vet and farrier care mean the horse you ride is relaxed, sound and willing. Riders learn to read and respect their horse before they ask anything of it.",
      motif: "horseshoe" as Motif,
      image: {
        src: "/images/herd-grazing-clouds.jpg",
        alt: "Chestnut and white horses graze together under a big cloudy sky",
        caption: "Photo: horses at turnout",
        position: "55% 60%",
      } as ImageAsset,
    },
    {
      name: "Technique",
      title: "Classical foundations.",
      body:
        "Position, balance and clear, quiet aids, taught the classical way. We build correct habits from the first lesson, so every later skill, from a first canter to a course of fences, rests on something solid.",
      motif: "ring" as Motif,
      image: {
        src: "/images/rider-canter-arena.jpg",
        alt: "A rider in a helmet canters a chestnut horse with a balanced, quiet position",
        caption: "Photo: balanced canter",
        position: "50% 35%",
      } as ImageAsset,
    },
    {
      name: "Confidence",
      title: "Confidence through progression.",
      body:
        "Small, deliberate steps, each one mastered before the next. Riders move forward when they are ready, not when the calendar says so, and confidence grows from skill rather than bravado.",
      motif: "poles" as Motif,
      image: {
        src: "/images/jump-vertical-sand-ring.jpg",
        alt: "A rider clears a striped vertical in the sand ring",
        caption: "Photo: over the vertical",
        position: "50% 40%",
      } as ImageAsset,
    },
  ],
};

export const journey = {
  title: "The rider's journey",
  intro:
    "Every rider moves through the same milestones, at their own pace. Here is what the path from first visit to first show looks like.",
  steps: [
    {
      title: "First Lesson",
      body: "Meet your horse, learn to groom and lead, and take your first steady walk.",
    },
    {
      title: "Learning to Trot",
      body: "Find your rhythm with rising trot, steering and confident halts.",
    },
    {
      title: "First Canter",
      body: "A balanced seat and quiet hands carry you into the canter.",
    },
    {
      title: "First Jump",
      body: "Ground poles become small fences, ridden with rhythm and line.",
    },
    {
      title: "First Show",
      body: "A schooling show at home, with your coach beside you at the in-gate.",
    },
  ],
  /** Slider under the steps. Wide 21:9 frame on large screens, so landscape photos work best. */
  images: [
    {
      src: "/images/handler-with-horses.jpg",
      alt: "A bay and a grey horse walk across an autumn paddock",
      caption: "Photo: autumn turnout",
      position: "55% 55%",
    },
    {
      src: "/images/rider-canter-arena.jpg",
      alt: "A rider canters a chestnut horse across a sandy outdoor arena",
      caption: "Photo: canter work",
      position: "55% 35%",
    },
    {
      src: "/images/rider-toward-jumps.jpg",
      alt: "A rider canters away across the sand ring toward a line of show jumps",
      caption: "Photo: rider heading to the jumps",
      position: "40% 28%",
    },
    {
      src: "/images/canter-through-water.jpg",
      alt: "A smiling rider canters a bay horse through shallow water, spray flying",
      caption: "Photo: cantering through the water",
      position: "45% 35%",
    },
    {
      src: "/images/herd-spring-pasture.jpg",
      alt: "Horses and ponies graze on a green hillside under bare trees",
      caption: "Photo: spring pasture",
      position: "50% 55%",
    },
  ] as ImageAsset[],
};

export const academy = {
  title: "The academy",
  intro:
    "A working barn built for Canadian weather. Lessons run in every season, and riders and families have a warm place to watch, learn and gather.",
  location: "Rocky View County, Alberta",
  locationNote: "Just outside Calgary, at 283082 Township Road 254.",
  facilities: [
    {
      title: "Outdoor ring",
      body: "A full-size sand ring with a full course of show jumps, used from spring through fall.",
      image: {
        src: "/images/rider-trot-grass-ring.jpg",
        alt: "A rider in white trots a chestnut horse around a grass ring lined with trees",
        caption: "Photo: schooling in the outdoor ring",
        position: "50% 68%",
      } as ImageAsset,
    },
    {
      title: "Heated indoor arena",
      body: "A [00 × 00 m] indoor arena with all-weather footing, so January lessons happen as planned.",
      image: {
        src: "/videos/hero-poster.jpg",
        alt: "A coach leads a young rider on a bay horse around the indoor arena",
        caption: "Photo: lesson in the indoor arena",
        position: "55% 50%",
      } as ImageAsset,
    },
    {
      title: "Trails",
      body: "Quiet trails through [woodland and fields] for relaxed hacks and camp walks.",
      image: {
        src: "/images/rider-farm-track.jpg",
        alt: "A rider walks a chestnut horse along a farm track at sunset",
        caption: "Photo: hacking out along the track",
        position: "50% 55%",
      } as ImageAsset,
    },
    {
      title: "Heated viewing lounge",
      body: "Watch lessons through the windows with a hot drink, in the warmth.",
      image: {
        src: "/images/grey-horse-wading.jpg",
        alt: "A rider on a dapple grey horse wades through a shallow river",
        caption: "Photo: a quiet ride through the water",
        position: "48% 50%",
      } as ImageAsset,
    },
  ],
};

export const seasons = {
  title: "Riding through the seasons",
  intro: "Canadian weather changes the scenery, never the schedule.",
  /** Each season can carry an optional photo; without one the card shows its colour panel. */
  items: [
    {
      name: "Spring",
      body: "Back outside on fresh footing, with flatwork tune-ups and first shows of the year.",
      image: {
        src: "/images/herd-spring-pasture.jpg",
        alt: "Horses and ponies graze on a green hillside under bare spring trees",
        caption: "Photo: spring pasture",
        position: "50% 60%",
      } as ImageAsset,
    },
    {
      name: "Summer",
      body: "Day camps, long evenings in the outdoor ring and quiet trail rides.",
      image: {
        src: "/images/canter-through-water.jpg",
        alt: "A rider canters a bay horse through shallow water on a summer evening",
        caption: "Photo: summer evening ride",
        position: "45% 50%",
      } as ImageAsset,
    },
    {
      name: "Fall",
      body: "Crisp air, golden trails and season-end schooling shows.",
      image: {
        src: "/images/horses-autumn-field.jpg",
        alt: "A bay and a grey horse stand in a field ringed by autumn trees",
        caption: "Photo: autumn field",
        position: "62% 55%",
      } as ImageAsset,
    },
    {
      name: "Winter",
      body: "Lessons carry on in the heated indoor arena, while families watch from the lounge.",
      image: {
        src: "/images/paddock-misty-morning.jpg",
        alt: "Two horses in a pasture on a cold, misty morning",
        caption: "Photo: misty morning",
        position: "72% 60%",
      } as ImageAsset,
    },
  ] as { name: string; body: string; image?: ImageAsset }[],
};

export const testimonials = {
  title: "From our families and riders",
  items: [
    {
      quote:
        "Our daughter was nervous around horses. Six months later she grooms, tacks up and trots on her own, and she talks about her pony all week.",
      name: "Sarah M.",
      detail: "Parent, Youth Program",
    },
    {
      quote:
        "I came back to riding at forty-five. The coaching is patient and precise, and the horses are clearly happy. It feels like a place that cares.",
      name: "David L.",
      detail: "Adult rider, Dressage Foundations",
    },
    {
      quote:
        "We board here because the horses come first. Turnout, feed, footing, communication: everything is done properly, in every season.",
      name: "Emily R.",
      detail: "Boarder since 2019",
    },
  ],
};

export const inquiry = {
  title: "Book your appointment",
  intro:
    "Tell us a little about the rider and we will reply within one business day to find a time that suits you.",
  priceNote: "Classes are one hour, with all equipment included except boots.",
  experienceLevels: ["Never ridden", "A few lessons", "Walk, trot and canter", "Jumping or showing"],
  programOptions: [
    "Not sure yet",
    "Beginner Program",
    "Youth Program",
    "Horse Boarding",
    "Horse Rental",
    "Arena Rental",
  ],
  success: {
    title: "Thank you. Your request is in.",
    body: "We will be in touch within one business day to confirm your appointment.",
  },
};

export const footer = {
  blurb: "A horse riding academy in Rocky View County, Alberta, teaching classical riding with the horse's welfare first.",
  languageNote: "Français bientôt disponible",
  legal: `© ${new Date().getFullYear()} Free Spirit Riding Academy. All rights reserved.`,
};

/* ------------------------------------------------------------------ */
/* Inner pages                                                         */
/* ------------------------------------------------------------------ */

export type PageHeroContent = {
  eyebrow: string;
  title: string;
  /** Last words of the title, set in gold italic. */
  emphasis: string;
  intro: string;
  /** Optional photo shown beside the title on large screens. */
  image?: ImageAsset;
};

export const about = {
  meta: {
    title: "About us",
    description:
      "The story, values and people behind Free Spirit, a classical horse riding academy in Rocky View County, Alberta.",
  },
  hero: {
    eyebrow: "About us",
    title: "A barn built on",
    emphasis: "patience.",
    intro:
      "Free Spirit began with a few school horses and one simple belief: riders learn best when the horse is happy, the coaching is calm and nobody is rushed.",
    image: {
      src: "/images/young-riders-sunset.jpg",
      alt: "Two young riders sit on their horses side by side in a field at sunset",
      caption: "Photo: young riders at sunset",
      position: "50% 70%",
    },
  } as PageHeroContent,
  story: {
    title: "Our story",
    paragraphs: [
      "[Founder name] opened Free Spirit in [year] on a quiet property outside Calgary. The first season had [four] horses, one outdoor ring and a waiting list of local families.", // [placeholder]
      "Today the academy is home to [25] school horses, a heated indoor arena and a team of certified coaches. The size has changed. The way we teach has not: classical foundations, small steps and the horse's welfare before everything else.", // [placeholder]
      "Riders come to us at five and at fifty-five. Some want to show, some want to trail ride, some simply want to spend time with horses. Every one of them gets the same careful start.",
    ],
    image: {
      src: "/images/rider-pats-horse-meadow.jpg",
      alt: "A rider in a show jacket pats her bay horse's neck in a hillside meadow at sunset",
      caption: "Photo: a quiet moment after the ride",
      position: "50% 60%",
    } as ImageAsset,
    /** Two smaller photos beside the main story photo. */
    supporting: [
      {
        src: "/images/turnout-paddock.jpg",
        alt: "Two horses trot across a paddock under an old tree",
        caption: "Photo: paddock turnout",
        position: "50% 60%",
      },
      {
        src: "/images/rider-farm-track.jpg",
        alt: "A rider walks a chestnut horse along a farm track at sunset",
        caption: "Photo: hacking out",
        position: "55% 55%",
      },
    ] as ImageAsset[],
    signature: "[Founder name], founder",
  },
  cta: {
    title: "Come and meet the horses.",
    body: "Booking an appointment is the best way to see if Free Spirit is right for you.",
    primary: { label: "Book Your Appointment", href: "/contact" },
    secondary: { label: "See the gallery", href: "/gallery" },
  },
};

export type GalleryCategory = "Jumping" | "Lessons" | "Arena" | "Horses";

export const gallery = {
  meta: {
    title: "Gallery",
    description: "Photos of riders, horses and the arenas at Free Spirit horse riding academy.",
  },
  hero: {
    eyebrow: "Gallery",
    title: "Life at the",
    emphasis: "barn.",
    intro: "Lessons, jumping days and quiet moments in the ring.",
    image: {
      src: "/images/horse-running-free.jpg",
      alt: "A chestnut horse gallops loose across a golden field toward the camera",
      caption: "Photo: running free",
      position: "50% 60%",
    },
  } as PageHeroContent,
  categories: ["All", "Jumping", "Lessons", "Arena", "Horses"] as const,
  /**
   * Add photos here. `shape` sets the tile proportion: tall 4:5, wide 3:2.
   * Each `category` must be one of `categories` above.
   */
  items: [
    {
      category: "Jumping" as GalleryCategory,
      shape: "tall" as const,
      image: {
        src: "/images/horse-riding-sport-with-female-rider.jpg",
        alt: "A rider in a black jacket and helmet clears a rail on a chestnut horse with a white blaze",
        caption: "Clearing the rail",
        position: "50% 30%",
      } as ImageAsset,
    },
    {
      category: "Arena" as GalleryCategory,
      shape: "wide" as const,
      image: {
        src: "/images/equestrian-sport-young-girl-rides-horse-championship (1).jpg",
        alt: "A rider canters away across the sand ring toward the clubhouse and a line of jumps",
        caption: "Afternoon canter",
        position: "35% 50%",
      } as ImageAsset,
    },
    {
      category: "Lessons" as GalleryCategory,
      shape: "wide" as const,
      image: {
        src: "/videos/hero-poster.jpg",
        alt: "A coach leads a young rider on a bay horse around the indoor arena",
        caption: "First steps in the indoor arena",
        position: "55% 50%",
      } as ImageAsset,
    },
    {
      category: "Lessons" as GalleryCategory,
      shape: "wide" as const,
      image: {
        src: "/images/equestrian-sport-young-girl-rides-horse-championship.jpg",
        alt: "A rider in a black jacket canters a dark bay horse across the sand ring under a grey sky",
        caption: "Working on the canter",
        position: "60% 50%",
      } as ImageAsset,
    },
    {
      category: "Jumping" as GalleryCategory,
      shape: "wide" as const,
      image: {
        src: "/images/jump-vertical-sand-ring.jpg",
        alt: "A rider clears a striped vertical in the sand ring on a bright day",
        caption: "Over the vertical",
        position: "50% 40%",
      } as ImageAsset,
    },
    {
      category: "Lessons" as GalleryCategory,
      shape: "tall" as const,
      image: {
        src: "/images/young-rider-golden-hour.jpg",
        alt: "A young rider sits on a bay horse in a field at golden hour",
        caption: "Golden hour ride",
        position: "55% 50%",
      } as ImageAsset,
    },
    {
      category: "Horses" as GalleryCategory,
      shape: "wide" as const,
      image: {
        src: "/images/herd-grazing-clouds.jpg",
        alt: "Chestnut and white horses graze under a big cloudy sky",
        caption: "Grazing under big skies",
        position: "50% 60%",
      } as ImageAsset,
    },
    {
      category: "Jumping" as GalleryCategory,
      shape: "tall" as const,
      image: {
        src: "/images/grey-horse-jump.jpg",
        alt: "A grey horse and rider jump a rail against a clear sky",
        caption: "Grey over the rail",
        position: "50% 35%",
      } as ImageAsset,
    },
    {
      category: "Lessons" as GalleryCategory,
      shape: "wide" as const,
      image: {
        src: "/images/rider-canter-arena.jpg",
        alt: "A rider canters a chestnut horse across a sandy outdoor arena",
        caption: "Canter work",
        position: "50% 40%",
      } as ImageAsset,
    },
    {
      category: "Horses" as GalleryCategory,
      shape: "wide" as const,
      image: {
        src: "/images/horses-autumn-field.jpg",
        alt: "A bay and a grey horse stand in an autumn field",
        caption: "Autumn turnout",
        position: "55% 60%",
      } as ImageAsset,
    },
    {
      category: "Arena" as GalleryCategory,
      shape: "tall" as const,
      image: {
        src: "/images/leading-horse-arena.jpg",
        alt: "A rider leads a grey horse across the sand arena at sunset",
        caption: "Walking in",
        position: "50% 55%",
      } as ImageAsset,
    },
    {
      category: "Jumping" as GalleryCategory,
      shape: "wide" as const,
      image: {
        src: "/images/jump-oxer-sunset.jpg",
        alt: "A rider jumps a bay horse over an oxer in warm evening light",
        caption: "Evening jumping",
        position: "35% 45%",
      } as ImageAsset,
    },
    {
      category: "Lessons" as GalleryCategory,
      shape: "wide" as const,
      image: {
        src: "/images/canter-through-water.jpg",
        alt: "A rider canters a bay horse through shallow water, spray flying",
        caption: "Cooling off",
        position: "50% 50%",
      } as ImageAsset,
    },
    {
      category: "Horses" as GalleryCategory,
      shape: "tall" as const,
      image: {
        src: "/images/paddock-evening.jpg",
        alt: "Two horses walk along the fence line of a paddock in the evening",
        caption: "Evening paddock",
        position: "40% 60%",
      } as ImageAsset,
    },
    {
      category: "Lessons" as GalleryCategory,
      shape: "wide" as const,
      image: {
        src: "/images/rider-farm-track.jpg",
        alt: "A rider walks a chestnut horse along a farm track at sunset",
        caption: "Hacking out",
        position: "50% 55%",
      } as ImageAsset,
    },
    {
      category: "Horses" as GalleryCategory,
      shape: "wide" as const,
      image: {
        src: "/images/paddock-misty-morning.jpg",
        alt: "A bay and a pinto horse in a pasture on a misty morning",
        caption: "Misty morning",
        position: "70% 60%",
      } as ImageAsset,
    },
    {
      category: "Horses" as GalleryCategory,
      shape: "wide" as const,
      image: {
        src: "/images/herd-spring-pasture.jpg",
        alt: "Horses and ponies graze on a green hillside under bare trees",
        caption: "Spring pasture",
        position: "50% 60%",
      } as ImageAsset,
    },
    {
      category: "Horses" as GalleryCategory,
      shape: "tall" as const,
      image: {
        src: "/images/handler-with-horses.jpg",
        alt: "A handler walks out to three horses in an autumn paddock",
        caption: "Morning turnout",
        position: "40% 60%",
      } as ImageAsset,
    },
    {
      category: "Lessons" as GalleryCategory,
      shape: "tall" as const,
      image: {
        src: "/images/young-riders-sunset.jpg",
        alt: "Two young riders sit on their horses side by side in a field at sunset",
        caption: "Side by side",
        position: "50% 70%",
      } as ImageAsset,
    },
    {
      category: "Horses" as GalleryCategory,
      shape: "tall" as const,
      image: {
        src: "/images/horse-running-free.jpg",
        alt: "A chestnut horse gallops loose across a golden field toward the camera",
        caption: "Running free",
        position: "50% 60%",
      } as ImageAsset,
    },
    {
      category: "Horses" as GalleryCategory,
      shape: "tall" as const,
      image: {
        src: "/images/herd-running.jpg",
        alt: "A herd of bay horses canters across a green pasture",
        caption: "The herd at turnout",
        position: "50% 55%",
      } as ImageAsset,
    },
  ],
};

export const contactPage = {
  meta: {
    title: "Contact",
    description:
      "Book your appointment, ask about programs or arrange a visit to Free Spirit horse riding academy in Rocky View County, Alberta.",
  },
  hero: {
    eyebrow: "Contact",
    title: "Every big dream starts",
    emphasis: "with one small ride.",
    intro:
      "Call, email or send the form below. We reply within one business day, and visitors are always welcome to come and see the barn.",
    image: {
      src: "/images/leading-horse-arena.jpg",
      alt: "A rider leads a grey horse across the sand arena at sunset",
      caption: "Photo: walking in from the arena",
      position: "50% 55%",
    },
  } as PageHeroContent,
  directions:
    "We are at 283082 Township Road 254 in Rocky View County, just outside Calgary. Use the map link for turn-by-turn directions, and call +1 (587) 839-2623 if you need a hand finding the gate.",
  faqs: [
    {
      q: "What should I wear to a first lesson?",
      a: "Long trousers and boots with a small heel. We lend certified helmets, so you do not need to buy anything before you start.",
    },
    {
      q: "Can parents watch lessons?",
      a: "Yes. The heated viewing lounge looks straight onto the indoor arena, and the outdoor ring has benches along the rail.",
    },
    {
      q: "Do you offer lessons in winter?",
      a: "Every week of the year. Lessons move into the heated indoor arena when the weather turns.",
    },
    {
      q: "What is your cancellation policy?",
      a: "Give us [24 hours] notice and we will rebook your lesson at no charge.", // [placeholder]
    },
  ],
};
