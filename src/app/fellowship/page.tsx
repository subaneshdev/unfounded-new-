import type { Metadata } from "next";
import FellowshipExperience from "@/components/fellowship/FellowshipExperience";

const description = "Build, learn and grow with the offline Unfounded Fellowship in Chennai. Enter through the free online Nights & Weekends hackathon across Tamil Nadu. Registration opening soon.";

export const metadata: Metadata = {
  title: "Unfounded Nights & Weekends | Learn. Build. Sell. Scale.",
  description,
  keywords: ["Unfounded Fellowship", "Unfounded Nights & Weekends", "AI Engineering", "Builder Program", "GTM", "Ziggers", "Ziggers Execute"],
  alternates: { canonical: "https://unfounded.in/fellowship" },
  openGraph: {
    title: "Unfounded Nights & Weekends | Learn. Build. Sell. Scale.",
    description,
    url: "https://unfounded.in/fellowship",
    siteName: "Unfounded",
    images: [{ url: "/unfounded-team.jpg", width: 1200, height: 630, alt: "Unfounded Nights & Weekends builder program" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unfounded Nights & Weekends",
    description,
    images: ["/unfounded-team.jpg"],
  },
};

const programJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalProgram",
  "@id": "https://unfounded.in/fellowship#program",
  name: "Unfounded Nights & Weekends",
  description,
  provider: { "@type": "Organization", name: "Unfounded Venture Lab", url: "https://unfounded.in" },
  occupationalCategory: "AI Engineering, Software Engineering, Product, Growth and Sales",
};

export default function FellowshipPage() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(programJsonLd) }} />
      <FellowshipExperience />
    </main>
  );
}
