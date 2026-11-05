import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Sparkles, Terminal, Flame, Clock, Trophy, Users, Code, Zap } from "lucide-react";
import SiteHeader from "@/components/ui/SiteHeader";
import Footer from "@/components/landing/Footer";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Marquee } from "@/components/magicui/marquee";

export const metadata: Metadata = {
  title: "Unfounded Build Day | India's 24-Hour Student Builder Hackathon (Chennai)",
  description:
    "Unfounded Build Day is a high-velocity 24-hour sprint for India's sharpest student developers and founders. Zero slides, 100% live code, deployed to real users.",
  keywords: [
    "Unfounded Build Day",
    "startup hackathon India",
    "college hackathon Chennai",
    "student startup hackathon",
    "24 hour startup challenge",
    "product building competition",
    "builder challenge India",
    "India's Build Day for Student Builders",
    "Chennai hackathons",
    "student developer sprint",
  ],
  alternates: {
    canonical: "https://unfounded.in/build-day",
  },
  openGraph: {
    title: "Unfounded Build Day | 24-Hour Student Builder Sprint",
    description:
      "Zero slides. 100% working code. India's sharpest college builders compete in a 24-hour product sprint.",
    url: "https://unfounded.in/build-day",
    siteName: "Unfounded",
    images: [
      {
        url: "/unfounded-team.jpg",
        width: 1200,
        height: 630,
        alt: "Unfounded Build Day",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unfounded Build Day | 24-Hour Builder Challenge",
    description:
      "24 hours. Live code. Real distribution. Unfounded Build Day for student builders in India.",
    images: ["/unfounded-team.jpg"],
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Chennai",
    "geo.position": "13.0827;80.2707",
    "ICBM": "13.0827, 80.2707",
  },
};

const buildDayJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": "https://unfounded.in/build-day#event",
    "name": "Unfounded Build Day",
    "alternateName": "India's 24-Hour Builder Sprint for Student Founders",
    "description": "A high-octane 24-hour product building sprint where college developers, designers, and founders build, deploy, and distribute real working software.",
    "organizer": {
      "@type": "Organization",
      "name": "Unfounded Venture Lab",
      "url": "https://unfounded.in"
    },
    "location": {
      "@type": "Place",
      "name": "Unfounded Venture Lab Chennai / Hybrid Online",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-01-01"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://unfounded.in/build-day#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Unfounded Build Day?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unfounded Build Day is a 24-hour sprint created by Unfounded Venture Lab where student developers and founders build and ship working software or hardware prototypes with zero slide decks allowed."
        }
      },
      {
        "@type": "Question",
        "name": "Who can participate in Unfounded Build Day?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Any college student or young builder across India with proven coding, design, or growth skills. You can participate solo or in teams of up to 3 builders."
        }
      },
      {
        "@type": "Question",
        "name": "What are the prizes and outcomes of Build Day?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Top teams gain direct fast-track admission to the Unfounded Fellowship, access to the ₹1,00,000 Unfounded Grant pool, and cloud infrastructure credits."
        }
      }
    ]
  }
];

export default function BuildDayPage() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildDayJsonLd) }}
      />
      <SiteHeader currentPath="/build-day" />

      {/* 1. Hero */}
      <section className="relative pt-20 pb-20 px-6 max-w-6xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass text-xs uppercase tracking-widest text-amber-400 font-semibold mb-6 border border-amber-500/20 shadow-lg">
          <Flame className="w-3.5 h-3.5" />
          <span>India’s 24-Hour Student Builder Sprint</span>
        </div>

        <h1
          className="text-5xl sm:text-7xl md:text-8xl text-white font-normal tracking-tight mb-8 leading-[0.98]"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Zero decks. <span className="italic text-white/80">100% working code.</span>
        </h1>

        <p className="text-white/70 text-lg sm:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-10">
          Unfounded Build Day brings together India&apos;s sharpest college engineers, designers, and operators for a 24-hour sprint. Ship a live feature or standalone tool to real users. If it doesn’t deploy, it doesn’t count.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/fellowship"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold text-sm uppercase tracking-wider hover:bg-white/90 hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2"
          >
            <span>Register For Next Build Day</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-4 rounded-full liquid-glass text-white font-semibold text-sm uppercase tracking-wider hover:bg-white/10 transition-all border border-white/20 flex items-center justify-center gap-2"
          >
            <span>See What We Build</span>
            <ArrowUpRight className="w-4 h-4 text-white/60" />
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-center border-t border-b border-white/10 py-8 mt-16">
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-white">24h</div>
            <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Sprint Window</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-white">Live URL</div>
            <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Submission Rule</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-white">Fellowship</div>
            <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Fast-Track Pass</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-white">Chennai + Hybrid</div>
            <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Location</div>
          </div>
        </div>
      </section>

      {/* 2. Marquee */}
      <div className="border-y border-white/10 py-3 bg-white/[0.02] overflow-hidden mb-20">
        <Marquee repeat={3} className="text-xs uppercase tracking-widest font-semibold text-white/60">
          <span className="mx-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            UNFOUNDED BUILD DAY
          </span>
          <span className="mx-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            24-HOUR STARTUP HACKATHON
          </span>
          <span className="mx-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            ZERO PITCH DECKS
          </span>
          <span className="mx-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
            LIVE PRODUCTION DEPLOYMENT
          </span>
        </Marquee>
      </div>

      {/* 3. The 3 Golden Rules */}
      <section className="px-6 max-w-6xl mx-auto w-full pb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3 block">
            The Code of Conduct
          </span>
          <h2
            className="text-3xl sm:text-5xl font-normal text-white mb-6"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            The Three Build Day Rules
          </h2>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed font-light">
            We built this event because conventional college hackathons have degraded into PowerPoint competitions. Here are our rules:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-3xl border border-white/10 p-8 liquid-glass">
            <span className="text-2xl font-serif text-amber-400 block mb-3">Rule 01</span>
            <h3 className="text-xl font-semibold text-white mb-3">Decks are Banned</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Anyone opening Keynote, Canva, or PowerPoint during demo time is immediately disqualified. You demo your live terminal, your deployed URL, and your analytics.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 p-8 liquid-glass">
            <span className="text-2xl font-serif text-blue-400 block mb-3">Rule 02</span>
            <h3 className="text-xl font-semibold text-white mb-3">Must Be in Production</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              `localhost` is not a deployment. Your code must be accessible on a public URL, with real database persistence and end-to-end user workflows.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 p-8 liquid-glass">
            <span className="text-2xl font-serif text-emerald-400 block mb-3">Rule 03</span>
            <h3 className="text-xl font-semibold text-white mb-3">Real Distribution</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              A great app without users is a hobby. The final 4 hours of Build Day are dedicated to distribution: get your first 10 live users before the clock hits zero.
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
          Ready to ship?
        </h2>
        <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          Build Day slots are limited to 50 builders per season. Fast-track your application into the Unfounded Fellowship.
        </p>
        <Link
          href="/fellowship"
          className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-white text-black font-semibold text-sm uppercase tracking-wider hover:bg-white/90 hover:scale-105 transition-all shadow-xl"
        >
          <span>Join Build Day & Fellowship</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <Footer />
    </div>
  );
}
