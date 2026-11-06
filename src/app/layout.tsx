import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://unfounded.in"),
  title: {
    default: "Unfounded | Venture Lab & AI Studio (Chennai, India)",
    template: "%s | Unfounded",
  },
  description:
    "Unfounded is an AI venture studio & venture lab based in Chennai, India. We engineer high-conviction companies from first principles (Ziggers, LoopVerse, Zachies, DrinkQ) and back the top 1% of student builders through the Unfounded Fellowship.",
  keywords: [
    "Unfounded",
    "Unfounded Venture Lab",
    "Venture Studio Chennai",
    "AI Venture Lab India",
    "Unfounded Fellowship",
    "Ziggers",
    "LoopVerse",
    "Zachies",
    "DrinkQ",
    "Startup Studio Tamil Nadu",
    "Student Builder Fellowship",
    "Micro SaaS Studio",
    "Deep Tech Incubator Chennai",
    "AI-First Products",
    "On-demand gig workforce India",
    "Skill verification protocol",
    "Bio-materials lab Chennai",
  ],
  authors: [{ name: "Subanesh", url: "https://linkedin.com/in/subanesh" }],
  creator: "Subanesh",
  publisher: "Unfounded Venture Lab",
  alternates: {
    canonical: "https://unfounded.in",
  },
  openGraph: {
    title: "Unfounded | Venture Lab & AI Studio (Chennai, India)",
    description:
      "We build what doesn’t exist. High-conviction ventures engineered from first principles in Chennai, shipping to the world.",
    url: "https://unfounded.in",
    siteName: "Unfounded",
    images: [
      {
        url: "/unfounded-team.jpg",
        width: 1200,
        height: 630,
        alt: "Unfounded Venture Lab — Chennai, India",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unfounded | Venture Lab & AI Studio",
    description:
      "We build what doesn’t exist. In-house ventures, deep-work experiments, and the 1% Unfounded Fellowship.",
    creator: "@CSubanesh",
    images: ["/unfounded-team.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Chennai",
    "geo.position": "13.0827;80.2707",
    "ICBM": "13.0827, 80.2707",
    "revisit-after": "3 days",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://unfounded.in/#organization",
    "name": "Unfounded",
    "legalName": "Unfounded Venture Lab",
    "url": "https://unfounded.in",
    "logo": "https://unfounded.in/icon.png",
    "image": "https://unfounded.in/unfounded-team.jpg",
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "name": "Subanesh",
      "url": "https://linkedin.com/in/subanesh",
      "sameAs": [
        "https://x.com/CSubanesh",
        "https://linkedin.com/in/subanesh"
      ]
    },
    "sameAs": [
      "https://x.com/CSubanesh",
      "https://linkedin.com/in/subanesh",
      "https://www.linkedin.com/company/unfoundedventurelab",
      "https://www.instagram.com/unfounded.in/"
    ],
    "description": "Unfounded is a Chennai-based AI venture studio & venture lab engineering in-house ventures and running the Unfounded Fellowship for top student builders.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.0827",
      "longitude": "80.2707"
    },
    "knowsAbout": [
      "Artificial Intelligence",
      "Venture Incubation",
      "Gig Economy Platforms",
      "Skill Verification Protocols",
      "Circular Bio-Materials",
      "Nootropics & Cognitive Performance"
    ],
    "subOrganization": [
      {
        "@type": "Organization",
        "name": "Ziggers",
        "url": "https://www.ziggers.in",
        "description": "India's on-demand gig workforce & instant staffing platform."
      },
      {
        "@type": "Organization",
        "name": "LoopVerse",
        "url": "https://www.loopverse.in/",
        "description": "The cryptographic skill verification protocol."
      },
      {
        "@type": "Organization",
        "name": "Zachies",
        "url": "https://unfounded.in/zachies",
        "description": "Circular bio-materials innovation lab."
      },
      {
        "@type": "Organization",
        "name": "DrinkQ",
        "url": "https://unfounded.in/drinkq",
        "description": "Clean cognitive nootropic hydration formulation."
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://unfounded.in/#localbusiness",
    "name": "Unfounded Venture Lab",
    "url": "https://unfounded.in",
    "description": "AI Venture Studio & Builder Lab located in Chennai, Tamil Nadu, India.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.0827,
      "longitude": 80.2707
    },
    "areaServed": [
      { "@type": "Country", "name": "India" },
      { "@type": "AdministrativeArea", "name": "Tamil Nadu" },
      { "@type": "City", "name": "Chennai" },
      { "@type": "Place", "name": "Global" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    "@id": "https://unfounded.in/fellowship#program",
    "name": "Unfounded Fellowship",
    "description": "A 12-week high-conviction fellowship for the top 1% of college students who build without waiting for permission. Work directly with founders on real ventures with a chance to win the ₹1,00,000 Unfounded Grant.",
    "provider": {
      "@type": "Organization",
      "name": "Unfounded Venture Lab",
      "url": "https://unfounded.in"
    },
    "timeToComplete": "P12W",
    "educationalCredentialAwarded": "Unfounded Fellowship Grant (₹1,00,000 INR) & Venture Spinout Role",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "category": "Free Merit-Based Fellowship"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://unfounded.in/#ventures-list",
    "name": "Unfounded In-House Ventures",
    "description": "Proprietary ventures built, incubated, and scaled by Unfounded Venture Lab.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Ziggers",
        "url": "https://www.ziggers.in",
        "description": "India's on-demand gig workforce app connecting businesses with verified catering staff, delivery partners, and daily wage workers in under 15 minutes with same-day UPI payouts."
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "LoopVerse",
        "url": "https://www.loopverse.in/",
        "description": "The cryptographic skill verification protocol replacing resume fiction with AI-validated student proof-of-work profiles."
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Zachies",
        "url": "https://unfounded.in/zachies",
        "description": "Circular bio-materials laboratory engineering carbon-negative mycelium composites to replace petroleum plastics."
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "DrinkQ",
        "url": "https://unfounded.in/drinkq",
        "description": "Clinical-grade nootropic hydration formula designed for deep work operators without caffeine crashes."
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://unfounded.in/#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Unfounded?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unfounded is an AI venture studio and venture lab based in Chennai, Tamil Nadu, India. We build what doesn’t exist: finding problems worth solving, building from first principles, and launching in-house startups like Ziggers, LoopVerse, Zachies, and DrinkQ, while backing top student builders through the Unfounded Fellowship."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Unfounded located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unfounded is headquartered in Chennai, Tamil Nadu, India, building along the coastal tech corridor and shipping products globally."
        }
      },
      {
        "@type": "Question",
        "name": "What companies and ventures are built by Unfounded?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unfounded has built and incubated four core ventures: (1) Ziggers — India's on-demand gig workforce & instant staffing platform (ziggers.in); (2) LoopVerse — the skill verification protocol eliminating resume fluff with AI-validated cryptographic proofs (loopverse.in); (3) Zachies — a circular bio-materials lab replacing plastics with mycelium composites; and (4) DrinkQ — precision nootropic cognitive hydration."
        }
      },
      {
        "@type": "Question",
        "name": "What is the Unfounded Fellowship?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Unfounded Fellowship is an intensive 12-week builder program for the top 1% of college students who build without waiting for permission. Fellows work alongside founders on real ventures, solve production business problems, ship live features, and compete for the ₹1,00,000 Unfounded Grant."
        }
      },
      {
        "@type": "Question",
        "name": "What is Friends of Unfounded?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Friends of Unfounded is an on-demand collaboration grid for elite developers, designers, growth marketers, and builders who consult and build with Unfounded ventures on flexible, high-impact engagements."
        }
      }
    ]
  }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
