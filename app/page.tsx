import { MotionProvider } from "@/components/MotionProvider";
import { site, programs } from "@/content/site";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Programs } from "@/components/Programs";
import { Approach } from "@/components/Approach";
import { Journey } from "@/components/Journey";
import { Academy } from "@/components/Academy";
import { Coaches } from "@/components/Coaches";
import { Seasons } from "@/components/Seasons";
import { Testimonials } from "@/components/Testimonials";
import { InquiryForm } from "@/components/InquiryForm";
import { Footer } from "@/components/Footer";
import { Horizon } from "@/components/illustrations/Hills";

function JsonLd() {
  const a = site.address;
  const data = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "@id": `${site.url}/#academy`,
    name: site.legalName,
    alternateName: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: a.street,
      addressLocality: a.city,
      addressRegion: a.regionCode,
      postalCode: a.postalCode,
      addressCountry: a.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.latitude, longitude: site.geo.longitude },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    currenciesAccepted: "CAD",
    sport: "Equestrian",
    memberOf: { "@type": "Organization", name: "Equestrian Canada" },
    sameAs: site.social.map((s) => s.href),
    makesOffer: programs.items.map((p) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: p.title, description: p.summary },
      priceCurrency: "CAD",
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export default function Home() {
  return (
    <MotionProvider>
      <JsonLd />
      <Nav />
      <main id="main">
        <Hero />
        <Stats />
        <Programs />
        <div className="bg-ivory">
          <Horizon to="navy" />
        </div>
        <Approach />
        <div className="bg-navy">
          <Horizon to="ivory" />
        </div>
        <Journey />
        <Academy />
        <div className="bg-ivory">
          <Horizon to="navy" />
        </div>
        <Coaches />
        <div className="bg-navy">
          <Horizon to="ivory" />
        </div>
        <Seasons />
        <Testimonials />
        <div className="bg-ivory">
          <Horizon to="navy" />
        </div>
        <InquiryForm />
      </main>
      <Footer />
    </MotionProvider>
  );
}
