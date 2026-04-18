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
  title: "Unfounded | Venture Lab in Chennai & Micro SaaS Ecosystem",
  description: "Unfounded is a premier venture lab in Chennai shipping innovative Micro SaaS and deep-tech products. We run the experiments so you don’t have to gamble.",
  keywords: ["venture lab", "venture lab in chennai", "Venture Lab", "Micro SaaS", "Chennai Tech", "Unfounded", "Startup Studio", "Indie Hackers", "Tamil Nadu Tech"],
  authors: [{ name: "Subanesh" }],
  openGraph: {
    title: "Unfounded | Venture Lab & Micro SaaS Ecosystem",
    description: "Built from the coasts of Tamil Nadu, shipping to the world. We run the experiments first, so you don’t have to gamble.",
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
    title: "Unfounded | Venture Lab & Micro SaaS Ecosystem",
    description: "Built from the coasts of Tamil Nadu, shipping to the world.",
    creator: "@CSubanesh",
    images: ["/unfounded-team.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Unfounded",
  "url": "https://unfounded.in",
  "logo": "https://unfounded.in/favicon.ico",
  "sameAs": [
    "https://x.com/CSubanesh",
    "https://linkedin.com/in/subanesh",
    "https://www.linkedin.com/company/unfoundedventurelab",
    "https://www.instagram.com/unfounded.in/"
  ],
  "description": "A premier venture lab in Chennai and ecosystem built from Tamil Nadu, shipping innovative Micro SaaS and deep-tech ventures.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Chennai",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "India"
  }
};

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
