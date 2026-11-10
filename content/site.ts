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
    "Free Spirit is a horse riding academy in [City, Province] offering lessons for riders aged 5 and up, youth programs, hunter/jumper and dressage training, summer camps and boarding, with an indoor arena for year-round riding.",
  phone: "[(000) 000-0000]",
  phoneHref: "tel:+10000000000",
  email: "hello@freespirit-riding.ca", // [replace]
  address: {
    street: "[0000 Concession Road]",
    city: "[City]",
    region: "[Province]",
    regionCode: "ON", // [two-letter province code]
    postalCode: "[A1A 1A1]",
    country: "CA",
  },
  geo: { latitude: 43.6532, longitude: -79.3832 }, // [replace with barn coordinates]
  hours: "Tuesday to Sunday, 8 am to 8 pm",
  social: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "Facebook", href: "https://facebook.com/" },
    { label: "YouTube", href: "https://youtube.com/" },
  ],
  membership: "Equestrian Canada member",
};

export const nav = {
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Coaches", href: "/#coaches" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Book a Trial Lesson", href: "/contact" },
};

export const hero = {
  headlineLines: ["Where riders", "find their"],
  emphasis: "stride.",
  supporting:
    "Classical riding instruction for children and adults in [City, Province], taught with patience, on horses who are cared for as partners. Begin at any age from five, ride in every season.",
  primaryCta: { label: "Book a Trial Lesson", href: "#contact" },
  secondaryCta: { label: "Explore Programs", href: "#programs" },
  trust: ["Equestrian Canada member", "Certified coaches", "All levels, ages 5+"],
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
    src: "/videos/hero.mp4" as string | undefined,
    poster: "/videos/hero-poster.jpg",
    alt: "A coach leads a young rider on a bay horse around the indoor arena",
    cropScale: 1,
  },
};

/** Stats strip. `value` animates when numeric; `suffix` follows it. */
export const stats: { value: number | string; suffix?: string; label: string }[] = [
  { value: 15, suffix: "+", label: "years teaching riders" }, // [placeholder]
  { value: 300, suffix: "+", label: "riders trained" }, // [placeholder]
  { value: 25, label: "school horses" }, // [placeholder]
  { value: "Year-round", label: "heated indoor arena" },
];

export const programs = {
  title: "Programs for every rider",
  intro:
    "Start where you are. Each program builds on the last, so a first lesson can become a lifelong partnership with horses.",
  image: {
    src: "/images/jumper-over-rail.jpg",
    alt: "A rider in a black show jacket guides a chestnut horse over a rail fence",
    caption: "Photo: hunter/jumper training",
    position: "50% 35%",
  } as ImageAsset,
  items: [
    {
      title: "Beginner Lessons",
      summary: "Calm, safe first steps on our steadiest school horses.",
      details:
        "Private and semi-private lessons covering grooming, tacking up, balance and the walk and trot. Ideal for children 5+ and adults starting fresh.",
      meta: ["Ages 5+", "30 or 45 min", "From $[00] CAD"],
      href: "#contact",
    },
    {
      title: "Youth Program",
      summary: "Weekly group riding and horsemanship for ages 8 to 17.",
      details:
        "Small groups by level, with stable management, horse care and rider theory alongside mounted lessons. Progress is tracked through clear milestones.",
      meta: ["Ages 8 to 17", "Weekly sessions", "From $[00] CAD / month"],
      href: "#contact",
    },
    {
      title: "Hunter/Jumper Training",
      summary: "Rhythm, track and confidence over fences, from poles to courses.",
      details:
        "Gridwork, related distances and course riding for intermediate riders, with a pathway into schooling and rated shows.",
      meta: ["Intermediate +", "Lessons and clinics", "From $[00] CAD"],
      href: "#contact",
    },
    {
      title: "Dressage Foundations",
      summary: "Classical flatwork that makes every rider and horse better.",
      details:
        "Position, contact, straightness and the training scale, taught in clear progressions from walk-trot tests upward.",
      meta: ["All levels", "Private lessons", "From $[00] CAD"],
      href: "#contact",
    },
    {
      title: "Summer Camps",
      summary: "Week-long day camps with daily riding and barn life.",
      details:
        "Daily lessons, horse care, crafts and trail walks in small groups grouped by age and ability. Spots fill each spring.",
      meta: ["Ages 6 to 14", "July and August", "From $[000] CAD / week"],
      href: "#contact",
    },
    {
      title: "Boarding and Training",
      summary: "Attentive full board with optional training rides.",
      details:
        "Daily turnout, quality hay, individual feeding plans and arena access in every season. Training packages available for horse and rider.",
      meta: ["Full board", "Training add-ons", "From $[0000] CAD / month"],
      href: "#contact",
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
    },
    {
      name: "Technique",
      title: "Classical foundations.",
      body:
        "Position, balance and clear, quiet aids, taught the classical way. We build correct habits from the first lesson, so every later skill, from a first canter to a course of fences, rests on something solid.",
      motif: "ring" as Motif,
    },
    {
      name: "Confidence",
      title: "Confidence through progression.",
      body:
        "Small, deliberate steps, each one mastered before the next. Riders move forward when they are ready, not when the calendar says so, and confidence grows from skill rather than bravado.",
      motif: "poles" as Motif,
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
  image: {
    src: "/images/rider-toward-jumps.jpg",
    alt: "A rider canters away across the sand ring toward a line of show jumps",
    caption: "Photo: rider heading to the jumps",
    position: "40% 28%",
  } as ImageAsset,
};

export const academy = {
  title: "The academy",
  intro:
    "A working barn built for Canadian weather. Lessons run in every season, and riders and families have a warm place to watch, learn and gather.",
  location: "[City, Province]",
  locationNote: "About [00] minutes from [nearest city centre].",
  facilities: [
    {
      title: "Outdoor ring",
      body: "A full-size sand ring with a full course of show jumps, used from spring through fall.",
      image: {
        src: "/images/outdoor-ring-canter.jpg",
        alt: "A rider canters a bay horse across the outdoor sand ring, with show jumps and the clubhouse behind",
        caption: "Photo: outdoor ring and jumps",
        position: "45% 50%",
      } as ImageAsset,
    },
    {
      title: "Heated indoor arena",
      body: "A [00 × 00 m] indoor arena with all-weather footing, so January lessons happen as planned.",
      image: {
        src: undefined,
        alt: "The indoor arena with soft morning light falling across the footing",
        caption: "Photo: indoor arena, winter morning",
      } as ImageAsset,
    },
    {
      title: "Trails",
      body: "Quiet trails through [woodland and fields] for relaxed hacks and camp walks.",
      image: {
        src: undefined,
        alt: "Riders walking along a tree-lined trail",
        caption: "Photo: trail through the trees",
      } as ImageAsset,
    },
    {
      title: "Heated viewing lounge",
      body: "Watch lessons through the windows with a hot drink, in the warmth.",
      image: {
        src: undefined,
        alt: "Families watching a lesson from the heated lounge",
        caption: "Photo: viewing lounge",
      } as ImageAsset,
    },
  ],
};

export const coaches = {
  title: "Our coaches",
  intro:
    "Certified, patient and devoted to the horses. Every coach teaches to the same classical standard.",
  people: [
    {
      name: "[Coach name]",
      role: "Head Coach",
      certification: "[Equestrian Canada Competition Coach]",
      discipline: "Hunter/Jumper",
      image: { src: undefined, alt: "Portrait of [Coach name]", caption: "Photo: head coach portrait" } as ImageAsset,
    },
    {
      name: "[Coach name]",
      role: "Dressage Coach",
      certification: "[Equestrian Canada Instructor]",
      discipline: "Dressage",
      image: { src: undefined, alt: "Portrait of [Coach name]", caption: "Photo: coach portrait" } as ImageAsset,
    },
    {
      name: "[Coach name]",
      role: "Youth Program Lead",
      certification: "[Equestrian Canada Instructor]",
      discipline: "Beginner and youth",
      image: { src: undefined, alt: "Portrait of [Coach name]", caption: "Photo: coach portrait" } as ImageAsset,
    },
    {
      name: "[Coach name]",
      role: "Barn Manager",
      certification: "[Equine first aid certified]",
      discipline: "Horse care and boarding",
      image: { src: undefined, alt: "Portrait of [Coach name]", caption: "Photo: barn manager portrait" } as ImageAsset,
    },
  ],
};

export const seasons = {
  title: "Riding through the seasons",
  intro: "Canadian weather changes the scenery, never the schedule.",
  items: [
    { name: "Spring", body: "Back outside on fresh footing, with flatwork tune-ups and first shows of the year." },
    { name: "Summer", body: "Day camps, long evenings in the outdoor ring and quiet trail rides." },
    { name: "Fall", body: "Crisp air, golden trails and season-end schooling shows." },
    { name: "Winter", body: "Lessons carry on in the heated indoor arena, while families watch from the lounge." },
  ],
};

export const testimonials = {
  title: "From our families and riders",
  items: [
    {
      quote:
        "Our daughter was nervous around horses. Six months later she grooms, tacks up and trots on her own, and she talks about her pony all week.",
      name: "[Parent name]",
      detail: "Parent, Youth Program",
    },
    {
      quote:
        "I came back to riding at forty-five. The coaching is patient and precise, and the horses are clearly happy. It feels like a place that cares.",
      name: "[Rider name]",
      detail: "Adult rider, Dressage Foundations",
    },
    {
      quote:
        "We board here because the horses come first. Turnout, feed, footing, communication: everything is done properly, in every season.",
      name: "[Boarder name]",
      detail: "Boarder since [year]",
    },
  ],
};

export const inquiry = {
  title: "Book a trial lesson",
  intro:
    "Tell us a little about the rider and we will reply within one business day to find a time that suits you.",
  priceNote: "Trial lessons are 45 minutes, $[00] CAD, all equipment included except boots.",
  experienceLevels: ["Never ridden", "A few lessons", "Walk, trot and canter", "Jumping or showing"],
  programOptions: [
    "Not sure yet",
    "Beginner Lessons",
    "Youth Program",
    "Hunter/Jumper Training",
    "Dressage Foundations",
    "Summer Camps",
    "Boarding and Training",
  ],
  success: {
    title: "Thank you. Your request is in.",
    body: "We will be in touch within one business day to confirm your trial lesson.",
  },
};

export const footer = {
  blurb: "A horse riding academy in [City, Province], teaching classical riding with the horse's welfare first.",
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
      "The story, values and people behind Free Spirit, a classical horse riding academy in [City, Province].",
  },
  hero: {
    eyebrow: "About us",
    title: "A barn built on",
    emphasis: "patience.",
    intro:
      "Free Spirit began with a few school horses and one simple belief: riders learn best when the horse is happy, the coaching is calm and nobody is rushed.",
    image: {
      src: "/images/horse-riding-sport-with-female-rider.jpg",
      alt: "A rider in a black jacket and helmet clears a rail on a chestnut horse with a white blaze",
      caption: "Photo: clearing a rail",
      position: "50% 30%",
    },
  } as PageHeroContent,
  story: {
    title: "Our story",
    paragraphs: [
      "[Founder name] opened Free Spirit in [year] on a quiet property outside [City]. The first season had [four] horses, one outdoor ring and a waiting list of local families.", // [placeholder]
      "Today the academy is home to [25] school horses, a heated indoor arena and a team of certified coaches. The size has changed. The way we teach has not: classical foundations, small steps and the horse's welfare before everything else.", // [placeholder]
      "Riders come to us at five and at fifty-five. Some want to show, some want to trail ride, some simply want to spend time with horses. Every one of them gets the same careful start.",
    ],
    image: {
      src: "/images/outdoor-ring-canter.jpg",
      alt: "A rider canters a bay horse across the outdoor sand ring, with show jumps and the clubhouse behind",
      caption: "Photo: outdoor ring and jumps",
      position: "45% 50%",
    } as ImageAsset,
    signature: "[Founder name], founder",
  },
  milestones: {
    title: "Milestones",
    items: [
      { year: "[2010]", text: "Free Spirit opens with four school horses and one outdoor ring." },
      { year: "[2014]", text: "The youth program launches with its first weekly riding groups." },
      { year: "[2017]", text: "The heated indoor arena opens, and lessons run all winter." },
      { year: "[2021]", text: "First riders compete at rated hunter/jumper shows." },
      { year: "[2026]", text: "Over 300 riders trained, and the herd grows to 25 horses." },
    ], // [placeholder dates]
  },
  cta: {
    title: "Come and meet the horses.",
    body: "A trial lesson is the best way to see if Free Spirit is right for you.",
    primary: { label: "Book a Trial Lesson", href: "/contact" },
    secondary: { label: "See the gallery", href: "/gallery" },
  },
};

export type GalleryCategory = "Jumping" | "Lessons" | "Arena";

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
  } as PageHeroContent,
  categories: ["All", "Jumping", "Lessons", "Arena"] as const,
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
  ],
};

export const contactPage = {
  meta: {
    title: "Contact",
    description:
      "Book a trial lesson, ask about programs or arrange a visit to Free Spirit horse riding academy in [City, Province].",
  },
  hero: {
    eyebrow: "Contact",
    title: "Let's find your",
    emphasis: "first ride.",
    intro:
      "Call, email or send the form below. We reply within one business day, and visitors are always welcome to come and see the barn.",
  } as PageHeroContent,
  directions:
    "From [nearest city centre], take [Highway 00] north to [Concession Road]. The barn is the second gate on the left, with the white fence.", // [placeholder]
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
