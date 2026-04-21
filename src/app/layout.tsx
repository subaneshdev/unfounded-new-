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
  title: "Unfounded | AI Visibility Platform for AEO & GEO",
  description: "Unfounded is the premier AI visibility platform specializing in AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization). We ship innovative Micro SaaS and deep-tech products from Chennai to the world.",
  keywords: [
    "AEO", "GEO", "Answer Engine Optimization", "Generative Engine Optimization", 
    "AI Visibility Platform", "venture lab", "venture lab in chennai", 
    "Micro SaaS", "Chennai Tech", "Unfounded", "Startup Studio"
  ],
  authors: [{ name: "Subanesh" }],
  openGraph: {
    title: "Unfounded | AI Visibility Platform for AEO & GEO",
    description: "Built from the coasts of Tamil Nadu, shipping to the world. We run the experiments in AEO and GEO so you don’t have to gamble.",
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
    title: "Unfounded | AI Visibility Platform for AEO & GEO",
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
    "description": "A premier AI visibility platform and venture lab in Chennai, shipping innovative Micro SaaS and deep-tech ventures optimized for AEO and GEO.",
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
    "description": "The AI visibility platform for AEO and GEO."
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
          "text": "Unfounded is an AI visibility platform and venture lab that specializes in AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization), building and shipping Micro SaaS products from Chennai."
        }
      },
      {
        "@type": "Question",
        "name": "What is AEO and GEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) are strategies used to ensure websites and content are correctly indexed and prioritized by AI models like ChatGPT, Claude, and Google SGE."
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
