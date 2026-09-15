import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DrinkQ | Precision Nootropics & Cognitive Hydration (Unfounded)",
  description:
    "Engineered for deep-work operators. DrinkQ combines clinical-grade Lion's Mane, L-Theanine, and trace electrolytes for 4-6 hours of sustained flow state without crashes.",
  keywords: [
    "DrinkQ",
    "Nootropic drink",
    "Cognitive hydration",
    "Lion's Mane electrolyte",
    "Flow state drink",
    "Deep work hydration",
    "Unfounded venture",
  ],
  alternates: {
    canonical: "https://unfounded.in/drinkq",
  },
  openGraph: {
    title: "DrinkQ | Precision Nootropics & Cognitive Hydration",
    description:
      "Zero sugar. 4-6 hours sustained flow. Clinical-grade L-Theanine + Lion's Mane cognitive electrolyte complex.",
    url: "https://unfounded.in/drinkq",
    siteName: "Unfounded",
    images: [
      {
        url: "/unfounded-team.jpg",
        width: 1200,
        height: 630,
        alt: "DrinkQ Nootropic Formulation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DrinkQ | Precision Nootropics & Cognitive Hydration",
    description:
      "Engineered for deep-work operators: Lion's Mane + L-Theanine + trace electrolytes.",
    images: ["/unfounded-team.jpg"],
  },
};

const drinkqJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://unfounded.in/drinkq#product",
  "name": "DrinkQ",
  "description": "Clinical-grade nootropic hydration formulation combining Lion's Mane, L-Theanine, and cellular electrolytes for deep work flow states.",
  "brand": {
    "@type": "Organization",
    "name": "DrinkQ",
    "parentOrganization": {
      "@type": "Organization",
      "name": "Unfounded Venture Lab",
      "url": "https://unfounded.in"
    }
  },
  "category": "Functional Beverage & Nootropics",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/PreOrder",
    "price": "0",
    "priceCurrency": "INR"
  }
};

export default function DrinkQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(drinkqJsonLd) }}
      />
      {children}
    </>
  );
}
