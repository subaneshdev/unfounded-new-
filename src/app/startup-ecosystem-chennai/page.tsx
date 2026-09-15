import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Sparkles, MapPin, Building, GraduationCap, Cpu, ShieldCheck, Waves } from "lucide-react";
import SiteHeader from "@/components/ui/SiteHeader";
import Footer from "@/components/landing/Footer";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Marquee } from "@/components/magicui/marquee";

export const metadata: Metadata = {
  title: "Startup Ecosystem Chennai & Tamil Nadu | The Unfounded Venture Lab Guide",
  description:
    "Explore the Chennai startup ecosystem: why Tamil Nadu is India’s capital-efficient SaaS, deep-tech, and hardware powerhouse. How Unfounded connects top campus engineers with global venture building.",
  keywords: [
    "startup ecosystem Chennai",
    "Chennai startup ecosystem",
    "startup community Chennai",
    "startup ecosystem Tamil Nadu",
    "startups in Tamil Nadu",
    "founders Chennai",
    "entrepreneurs Chennai",
    "venture builder Chennai",
    "venture studio Chennai",
    "IIT Madras startup ecosystem",
    "OMR Chennai startups",
    "deep tech Chennai",
    "Unfounded Chennai",
  ],
  alternates: {
    canonical: "https://unfounded.in/startup-ecosystem-chennai",
  },
  openGraph: {
    title: "Startup Ecosystem Chennai & Tamil Nadu | Unfounded Venture Lab",
    description:
      "India's SaaS and deep-tech powerhouse. Built on the coasts of Tamil Nadu, shipping to the world.",
    url: "https://unfounded.in/startup-ecosystem-chennai",
    siteName: "Unfounded",
    images: [
      {
        url: "/chennai-collage.jpg",
        width: 1200,
        height: 630,
        alt: "Chennai Startup Ecosystem — Unfounded",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup Ecosystem Chennai | Unfounded Venture Lab",
    description:
      "Capital-efficient, high-engineering venture building from the coasts of Tamil Nadu.",
    images: ["/chennai-collage.jpg"],
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Chennai",
    "geo.position": "13.0827;80.2707",
    "ICBM": "13.0827, 80.2707",
  },
};

const chennaiJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://unfounded.in/startup-ecosystem-chennai#article",
    "headline": "The Chennai Startup & Builder Ecosystem: Why Tamil Nadu Is India's Deep-Tech Capital",
    "description": "An exhaustive guide to building startups, finding engineering talent, and leveraging Chennai's unique advantages in SaaS, bio-materials, and hardware.",
    "publisher": {
      "@type": "Organization",
      "name": "Unfounded Venture Lab",
      "url": "https://unfounded.in"
    },
    "author": {
      "@type": "Person",
      "name": "Subanesh"
    },
    "mainEntityOfPage": "https://unfounded.in/startup-ecosystem-chennai",
    "contentLocation": {
      "@type": "Place",
      "name": "Chennai, Tamil Nadu, India"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://unfounded.in/startup-ecosystem-chennai#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is Chennai considered the SaaS and engineering powerhouse of India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Chennai created India's SaaS revolution with global giants like Zoho and Freshworks. It combines capital efficiency, high engineering retention, premier research institutions like IIT Madras, and an industrial manufacturing corridor along Sriperumbudur and OMR."
        }
      },
      {
        "@type": "Question",
        "name": "What role does Unfounded Venture Lab play in the Chennai startup ecosystem?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unfounded operates as a first-principles venture studio and builder hub in Chennai, incubating in-house companies (Ziggers, LoopVerse, Zachies, DrinkQ) and providing top student builders with the Unfounded Fellowship and ₹1,00,000 grant."
        }
      }
    ]
  }
];

export default function StartupEcosystemChennaiPage() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chennaiJsonLd) }}
      />
      <SiteHeader currentPath="/startup-ecosystem-chennai" />

      {/* 1. Hero */}
      <section className="relative pt-20 pb-20 px-6 max-w-6xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-6 border border-emerald-500/20 shadow-lg">
          <Waves className="w-3.5 h-3.5" />
          <span>Regional Ecosystem Guide & Builder Manifesto</span>
        </div>

        <h1
          className="text-5xl sm:text-7xl md:text-8xl text-white font-normal tracking-tight mb-8 leading-[0.98]"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Built from the coasts <span className="italic text-white/80">of Tamil Nadu.</span>
        </h1>

        <p className="text-white/70 text-lg sm:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-10">
          While the rest of the world chased hype, Chennai quietly built the foundation of India’s most resilient tech businesses. From the SaaS corridor of OMR to the deep-tech labs of IIT Madras, this is why Unfounded builds here.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/venture-studio-india"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold text-sm uppercase tracking-wider hover:bg-white/90 hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2"
          >
            <span>Explore Venture Studio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/fellowship"
            className="w-full sm:w-auto px-8 py-4 rounded-full liquid-glass text-white font-semibold text-sm uppercase tracking-wider hover:bg-white/10 transition-all border border-white/20 flex items-center justify-center gap-2"
          >
            <span>The 1% Student Fellowship</span>
            <ArrowUpRight className="w-4 h-4 text-white/60" />
          </Link>
        </div>

        {/* Metric Quick Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-center border-t border-b border-white/10 py-8 mt-16">
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-white">#1</div>
            <div className="text-xs uppercase tracking-wider text-white/50 mt-1">SaaS Capital of India</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-white">100+</div>
            <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Engineering Colleges</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-white">Capital</div>
            <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Efficient DNA</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-white">Global</div>
            <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Product Distribution</div>
          </div>
        </div>
      </section>

      {/* 2. Marquee Strip */}
      <div className="border-y border-white/10 py-3 bg-white/[0.02] overflow-hidden mb-20">
        <Marquee repeat={3} className="text-xs uppercase tracking-widest font-semibold text-white/60">
          <span className="mx-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            STARTUP ECOSYSTEM CHENNAI
          </span>
          <span className="mx-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            TAMIL NADU VENTURE BUILDER
          </span>
          <span className="mx-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            DEEP TECH & CIRCULAR MATERIALS
          </span>
          <span className="mx-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
            CAMPUS BUILDER PIPELINE
          </span>
        </Marquee>
      </div>

      {/* 3. The 3 Chennai Pillars */}
      <section className="px-6 max-w-6xl mx-auto w-full pb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-3 block">
            Regional Advantage
          </span>
          <h2
            className="text-3xl sm:text-5xl font-normal text-white mb-6"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            The Three Structural Moats of Chennai
          </h2>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed font-light">
            Why building out of Chennai creates structural cost and engineering advantages over higher-burn ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-3xl border border-white/10 p-8 liquid-glass">
            <GraduationCap className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Elite Engineering Density</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Chennai boasts IIT Madras, Anna University, and over 100 accredited technical institutions producing thousands of high-caliber software, AI, and systems engineers every single year.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-8 liquid-glass">
            <Building className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">The Capital-Efficiency Culture</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Unlike bubble-prone ecosystems, Chennai founders prioritize gross margins, customer retention, and durable unit economics from day one. Businesses here are built to survive downturns and compound indefinitely.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-8 liquid-glass">
            <Cpu className="w-8 h-8 text-amber-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Hardware & Bio-Tech Infrastructure</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              From automotive manufacturing to specialized biotech incubation, Chennai provides physical labs, industrial supply chains, and testing facilities essential for deep ventures like Zachies.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="px-6 max-w-4xl mx-auto w-full pb-28 text-center border-t border-white/10 pt-20">
        <h2
          className="text-4xl sm:text-6xl font-normal text-white mb-6"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Building from Chennai? Let’s connect.
        </h2>
        <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          Unfounded is actively looking for high-conviction student builders, operators, and engineers in Chennai and Tamil Nadu.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/fellowship"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold text-sm uppercase tracking-wider hover:bg-white/90 hover:scale-105 transition-all shadow-xl"
          >
            Apply for Chennai Fellowship
          </Link>
          <Link
            href="/friends"
            className="w-full sm:w-auto px-8 py-4 rounded-full liquid-glass text-white font-semibold text-sm uppercase tracking-wider hover:bg-white/10 transition-all border border-white/20"
          >
            Join Local Builder Grid
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
