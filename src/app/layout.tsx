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
  title: "Unfounded | Venture Lab",
  description: "Unfounded is a premier venture lab. We ship innovative Micro SaaS and deep-tech products to the world.",
  keywords: [
    "venture lab", "Micro SaaS", "Unfounded", "Startup Studio"
  ],
  authors: [{ name: "Subanesh" }],
  openGraph: {
    title: "Unfounded | Venture Lab",
    description: "Built from the coasts of Tamil Nadu, shipping to the world. We run the experiments so you don’t have to gamble.",
    url: "https://unfounded.in",
    siteName: "Unfounded",
    images: [
      {
        url: "/unfounded-team.jpg",
        width: 1200,
        height: 630,
        alt: "Unfounded Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unfounded | Venture Lab",
    description: "Leading the transition to AI-first search. Built from the coasts of Tamil Nadu, shipping to the world.",
    creator: "@CSubanesh",
    images: ["/unfounded-team.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://unfounded.in/#organization",
    "name": "Unfounded",
    "url": "https://unfounded.in",
    "logo": "https://unfounded.in/favicon.ico",
    "sameAs": [
      "https://x.com/CSubanesh",
      "https://linkedin.com/in/subanesh",
      "https://www.linkedin.com/company/unfoundedventurelab",
      "https://www.instagram.com/unfounded.in/"
    ],
    "description": "A premier venture lab, shipping innovative Micro SaaS and deep-tech ventures.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "India"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://unfounded.in/#website",
    "url": "https://unfounded.in",
    "name": "Unfounded",
    "publisher": { "@id": "https://unfounded.in/#organization" },
    "description": "A premier venture lab."
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Unfounded?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unfounded is a venture lab that builds and ships Micro SaaS products."
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
