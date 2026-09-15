import type { Metadata } from "next";
import FriendsExperience from "@/components/friends/FriendsExperience";

export const metadata: Metadata = {
  title: "Friends of Unfounded | Venture Lab Collaboration Grid (Chennai & Global)",
  description:
    "Consult & Collaborate with the Unfounded Venture Lab Grid. Join our on-demand network of elite developers, designers, marketers, digital marketers, influencers, and generalist builders.",
  keywords: [
    "Friends of Unfounded",
    "Builder network",
    "On-demand developers",
    "Startup consultants Chennai",
    "Venture lab talent grid",
    "Elite freelancers India",
  ],
  alternates: {
    canonical: "https://unfounded.in/friends",
  },
  openGraph: {
    title: "Friends of Unfounded | Venture Lab Collaboration Grid",
    description:
      "Consult & Collaborate with the Unfounded Venture Lab Grid. Join our on-demand network of elite developers, designers, marketers, digital marketers, influencers, and generalist builders.",
    url: "https://unfounded.in/friends",
    siteName: "Unfounded",
    images: [
      {
        url: "/unfounded-team.jpg",
        width: 1200,
        height: 630,
        alt: "Friends of Unfounded",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Friends of Unfounded | Venture Lab Collaboration Grid",
    description:
      "Consult & Collaborate with the Unfounded Venture Lab Grid. Join our network of builders.",
    images: ["/unfounded-team.jpg"],
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Chennai",
    "geo.position": "13.0827;80.2707",
    "ICBM": "13.0827, 80.2707",
  },
};

export default function FriendsPage() {
  return (
    <main className="min-h-screen bg-black">
      <FriendsExperience />
    </main>
  );
}
