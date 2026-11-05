import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Sparkles, Users, CheckCircle2, Clock, MapPin, Smartphone, ShieldCheck, Zap } from "lucide-react";
import SiteHeader from "@/components/ui/SiteHeader";
import Footer from "@/components/landing/Footer";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Marquee } from "@/components/magicui/marquee";

export const metadata: Metadata = {
  title: "Ziggers | India's On-Demand Gig Workforce App (Unfounded Venture)",
  description:
    "Ziggers is India's leading on-demand gig workforce platform. Verified catering staff, delivery partners, drivers, and daily wage workers matched in <15 minutes with same-day UPI payouts.",
  keywords: [
    "Ziggers",
    "Ziggers India",
    "ziggers.in",
    "on demand gig workforce India",
    "instant staffing app India",
    "daily wage UPI payouts",
    "catering staff hiring Chennai",
    "event staff on demand India",
    "Unfounded venture",
    "Ziggers app Google Play",
  ],
  alternates: {
    canonical: "https://unfounded.in/ventures/ziggers",
  },
  openGraph: {
    title: "Ziggers | India's On-Demand Gig Workforce App",
    description:
      "Instant matching with verified catering staff, delivery partners, and daily wage workers in under 15 minutes with same-day UPI payouts.",
    url: "https://unfounded.in/ventures/ziggers",
    siteName: "Unfounded",
    images: [
      {
        url: "/unfounded-team.jpg",
        width: 1200,
        height: 630,
        alt: "Ziggers On-Demand Gig Workforce",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziggers | Instant Staffing & Gig Platform",
    description:
      "< 15 min matching. Same-day UPI payouts. Active across 8+ major Indian cities.",
    images: ["/unfounded-team.jpg"],
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Chennai",
    "geo.position": "13.0827;80.2707",
    "ICBM": "13.0827, 80.2707",
  },
};

const ziggersJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://unfounded.in/ventures/ziggers#app",
  "name": "Ziggers",
  "operatingSystem": "Android, iOS, Web",
  "applicationCategory": "BusinessApplication",
  "url": "https://www.ziggers.in",
  "downloadUrl": "https://play.google.com/store/apps/details?id=com.ziggers.ziggers",
  "description": "India's #1 on-demand gig workforce & staffing platform matching businesses with verified staff in under 15 minutes with same-day UPI payouts.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1250"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Unfounded Venture Lab",
    "url": "https://unfounded.in"
  }
};

export default function ZiggersVenturePage() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ziggersJsonLd) }}
      />
      <SiteHeader currentPath="/ventures" />

      {/* 1. Hero */}
      <section className="relative pt-20 pb-20 px-6 max-w-6xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass text-xs uppercase tracking-widest text-amber-400 font-semibold mb-6 border border-amber-500/20 shadow-lg">
          <Users className="w-3.5 h-3.5" />
          <span>Unfounded In-House Venture • Live on Google Play</span>
        </div>

        <h1
          className="text-5xl sm:text-7xl md:text-8xl text-white font-normal tracking-tight mb-8 leading-[0.98]"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Staff on demand. <span className="italic text-white/80">Under 15 minutes.</span>
        </h1>

        <p className="text-white/70 text-lg sm:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-10">
          Ziggers solves the chronic unpredictability of localized daily staffing in India. Verified catering staff, drivers, delivery partners, and warehouse workers deployed on demand with automated same-day UPI wage disbursements.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.ziggers.in"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold text-sm uppercase tracking-wider hover:bg-white/90 hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2"
          >
            <span>Visit Ziggers Official Website</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-4 rounded-full liquid-glass text-white font-semibold text-sm uppercase tracking-wider hover:bg-white/10 transition-all border border-white/20 flex items-center justify-center gap-2"
          >
            <span>← Back to Home</span>
          </Link>
        </div>

        {/* Metric Quick Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-center border-t border-b border-white/10 py-8 mt-16">
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-white">&lt; 15 Mins</div>
            <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Average Matching Time</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-white">Same-Day</div>
            <div className="text-xs uppercase tracking-wider text-white/50 mt-1">UPI Wage Payouts</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-white">8+</div>
            <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Metropolitan Cities</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-white">100%</div>
            <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Verified Workers</div>
          </div>
        </div>
      </section>

      {/* 2. Marquee */}
      <div className="border-y border-white/10 py-3 bg-white/[0.02] overflow-hidden mb-20">
        <Marquee repeat={3} className="text-xs uppercase tracking-widest font-semibold text-white/60">
          <span className="mx-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            ZIGGERS • ON-DEMAND GIG WORKFORCE
          </span>
          <span className="mx-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            CATERING & EVENT STAFFING
          </span>
          <span className="mx-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            INSTANT UPI DISBURSEMENT
          </span>
          <span className="mx-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
            CHENNAI • BANGALORE • HYDERABAD • MUMBAI
          </span>
        </Marquee>
      </div>

      {/* 3. Core Features */}
      <section className="px-6 max-w-6xl mx-auto w-full pb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3 block">
            Product Capabilities
          </span>
          <h2
            className="text-3xl sm:text-5xl font-normal text-white mb-6"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            How Ziggers Reimagines India’s Gig Economy
          </h2>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed font-light">
            Replacing informal WhatsApp groups and exploitative middlemen with an automated matching and disbursement protocol.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-3xl border border-white/10 p-8 liquid-glass">
            <Zap className="w-8 h-8 text-amber-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">15-Minute Staff Matching</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Algorithmic geo-dispatch pairs verified local catering workers, delivery partners, and event helpers with businesses within minutes of a request.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-8 liquid-glass">
            <Clock className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Zero Wage Delay (UPI)</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Workers receive their full wages via automated UPI payouts immediately upon completing their shift, eliminating cash withholding and dispute headaches.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-8 liquid-glass">
            <ShieldCheck className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Identity & Skill Verification</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Aadhaar-authenticated verification, background screening, and attendance rating systems ensure businesses only receive dependable, high-integrity talent.
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
          Hire gig workers in minutes.
        </h2>
        <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          Download the Ziggers app on Android or visit the platform to dispatch on-demand staff across 8+ major metropolitan hubs.
        </p>
        <a
          href="https://www.ziggers.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-white text-black font-semibold text-sm uppercase tracking-wider hover:bg-white/90 hover:scale-105 transition-all shadow-xl"
        >
          <span>Get Started on Ziggers.in</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </section>

      <Footer />
    </div>
  );
}
