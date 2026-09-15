import type { Metadata } from "next";
import FellowshipExperience from "@/components/fellowship/FellowshipExperience";

export const metadata: Metadata = {
  title: "Unfounded Fellowship | The 1% College Builder Program (Chennai & Remote)",
  description:
    "For the top 1% of college students who don't wait for permission to build. 12 weeks of shipping real products, solving production business problems, and competing for the ₹1,00,000 Unfounded Grant.",
  keywords: [
    "Unfounded Fellowship",
    "College Builder Program",
    "Student Startup Fellowship",
    "Top 1% College Students",
    "Chennai Student Incubator",
    "Engineering Fellowship India",
    "Unfounded Grant ₹1,00,000",
    "Startup Fellowship Tamil Nadu",
    "Builder Internship Alternative",
  ],
  alternates: {
    canonical: "https://unfounded.in/fellowship",
  },
  openGraph: {
    title: "Unfounded Fellowship | The 1% College Builder Program",
    description:
      "Forget the typical internship. You build. You ship. You learn. And if you're good enough, you stay. 12 weeks alongside founders.",
    url: "https://unfounded.in/fellowship",
    siteName: "Unfounded",
    images: [
      {
        url: "/unfounded-team.jpg",
        width: 1200,
        height: 630,
        alt: "Unfounded Fellowship — The 1% Builder Program",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unfounded Fellowship | The 1% College Builder Program",
    description:
      "For the 1% of college students who don't wait for permission to build. 12 weeks with founders + ₹1,00,000 Grant.",
    images: ["/unfounded-team.jpg"],
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Chennai",
    "geo.position": "13.0827;80.2707",
    "ICBM": "13.0827, 80.2707",
  },
};

const fellowshipJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    "@id": "https://unfounded.in/fellowship#program",
    "name": "Unfounded Fellowship",
    "alternateName": "The 1% Builder Fellowship",
    "description": "An elite 12-week builder fellowship for college students who build without waiting for permission. Fellows work directly with founders on real ventures like Ziggers, LoopVerse, and Zachies.",
    "provider": {
      "@type": "Organization",
      "name": "Unfounded Venture Lab",
      "url": "https://unfounded.in"
    },
    "educationalCredentialAwarded": "Unfounded Fellowship Grant of ₹1,00,000 INR & Full-Time Venture Role",
    "timeToComplete": "P12W",
    "programPrerequisites": "Demonstrated proof of work (GitHub repos, shipped apps, design portfolios, or organic distribution traction).",
    "occupationalCategory": "Software Engineering, Product Design, Growth & Venture Building",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "category": "Free Merit-Based Fellowship"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://unfounded.in/fellowship#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is eligible for the Unfounded Fellowship?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The fellowship is open to any college student across India who builds without waiting for permission. We look for builders with high agency, obsession with shipping, and proof of work over academic certificates."
        }
      },
      {
        "@type": "Question",
        "name": "How long is the fellowship and is it full-time or part-time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The fellowship runs for 12 intensive weeks with flexible hybrid scheduling so college students can balance academic schedules while shipping production features and business solutions."
        }
      },
      {
        "@type": "Question",
        "name": "Is there compensation or a grant for fellows?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Top fellows compete for the ₹1,00,000 Unfounded Grant upon shipping impactful products and have direct spinout paths into founding equity or leadership roles within Unfounded ventures."
        }
      },
      {
        "@type": "Question",
        "name": "What kind of projects do fellows work on?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fellows work directly on production-grade ventures inside the Unfounded ecosystem: Ziggers (gig workforce platform), LoopVerse (skill verification protocol), Zachies (bio-materials lab), or exploratory AI/hardware products."
        }
      }
    ]
  }
];

export default function FellowshipPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fellowshipJsonLd) }}
      />
      <FellowshipExperience />
    </main>
  );
}
