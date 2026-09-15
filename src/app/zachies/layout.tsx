import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zachies | Circular Bio-Materials Innovation Lab (Unfounded)",
  description:
    "Engineering the next generation of circular bio-materials. Zachies replaces petroleum plastics with carbon-negative mycelium composites and regenerative botanical fibres.",
  keywords: [
    "Zachies",
    "Bio-materials lab",
    "Mycelium packaging",
    "Carbon-negative materials",
    "Sustainable packaging India",
    "Unfounded venture",
    "Chennai biomaterials",
    "Circular economy",
  ],
  alternates: {
    canonical: "https://unfounded.in/zachies",
  },
  openGraph: {
    title: "Zachies | Circular Bio-Materials Innovation Lab",
    description:
      "Replacing petroleum plastics with carbon-negative mycelium structural composites. 90-day degradation, industrial tensile strength.",
    url: "https://unfounded.in/zachies",
    siteName: "Unfounded",
    images: [
      {
        url: "/unfounded-team.jpg",
        width: 1200,
        height: 630,
        alt: "Zachies Bio-Materials Lab",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zachies | Circular Bio-Materials Lab",
    description:
      "Engineering carbon-negative mycelium composites to replace petroleum plastics.",
    images: ["/unfounded-team.jpg"],
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Chennai",
    "geo.position": "13.0827;80.2707",
    "ICBM": "13.0827, 80.2707",
  },
};

const zachiesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://unfounded.in/zachies#product",
  "name": "Zachies Bio-Materials",
  "description": "Carbon-negative mycelium structural composites and circular bio-materials designed to replace petroleum plastics with 90-day degradation.",
  "brand": {
    "@type": "Organization",
    "name": "Zachies",
    "parentOrganization": {
      "@type": "Organization",
      "name": "Unfounded Venture Lab",
      "url": "https://unfounded.in"
    }
  },
  "category": "Sustainable Bio-Materials",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "price": "0",
    "priceCurrency": "INR"
  }
};

export default function ZachiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(zachiesJsonLd) }}
      />
      {children}
    </>
  );
}
