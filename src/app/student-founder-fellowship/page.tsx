import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Sparkles, CheckCircle2, ShieldAlert, Award, Zap, Users, Code2, Rocket } from "lucide-react";
import SiteHeader from "@/components/ui/SiteHeader";
import Footer from "@/components/landing/Footer";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Marquee } from "@/components/magicui/marquee";

export const metadata: Metadata = {
  title: "Student Founder Fellowship India | Unfounded 1% College Builder Program",
  description:
    "India's premier 12-week fellowship for the top 1% of college students who build without waiting for permission. Work directly with founders on real ventures, ship code, and win the ₹1,00,000 Unfounded Grant.",
  keywords: [
    "student founder fellowship",
    "student founder fellowship India",
    "startup fellowship India",
    "founder fellowship India",
    "student entrepreneur fellowship India",
    "entrepreneurship fellowship India",
    "startup fellowship for students",
    "founder program for students",
    "college startup program",
    "student startup program India",
    "young founder program India",
    "student builder fellowship",
    "startup internship alternative",
    "Unfounded fellowship",
  ],
  alternates: {
    canonical: "https://unfounded.in/student-founder-fellowship",
  },
  openGraph: {
    title: "Student Founder Fellowship India | Unfounded",
    description:
      "For the 1% of college students who don't wait for permission to build. 12 weeks with founders + ₹1,00,000 Unfounded Grant.",
    url: "https://unfounded.in/student-founder-fellowship",
    siteName: "Unfounded",
    images: [
      {
        url: "/unfounded-team.jpg",
        width: 1200,
        height: 630,
        alt: "Unfounded Student Founder Fellowship India",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Founder Fellowship India | Unfounded",
    description:
      "Forget the typical internship. 12 weeks of shipping real products with founders + ₹1,00,000 Grant.",
    images: ["/unfounded-team.jpg"],
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Chennai",
    "geo.position": "13.0827;80.2707",
    "ICBM": "13.0827, 80.2707",
  },
};

const fellowshipPillarJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    "@id": "https://unfounded.in/student-founder-fellowship#program",
    "name": "Student Founder Fellowship India",
    "alternateName": "Unfounded Fellowship for Top 1% College Builders",
    "description": "An intensive 12-week venture builder fellowship for college student founders in India. Fellows work directly with founders on live in-house ventures like Ziggers, LoopVerse, and Zachies.",
    "provider": {
      "@type": "Organization",
      "name": "Unfounded Venture Lab",
      "url": "https://unfounded.in"
    },
    "timeToComplete": "P12W",
    "educationalCredentialAwarded": "Unfounded Grant of ₹1,00,000 INR & Direct Venture Spinout Role",
    "programPrerequisites": "Proof of work: GitHub repositories, live projects, design portfolios, or verified distribution traction.",
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
    "@id": "https://unfounded.in/student-founder-fellowship#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes the Unfounded Student Founder Fellowship different from a standard startup internship in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlike standard corporate internships with busywork or hypothetical case studies, the Unfounded Fellowship gives students direct co-builder access alongside founders on production software, real distribution, and live ventures. Fellows compete for a ₹1,00,000 grant and have direct pathways to become founding team members of spun-out startups."
        }
      },
      {
        "@type": "Question",
        "name": "Do I have to drop out of college to join?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The fellowship is designed for high-agency college students across India who build alongside their coursework with flexible asynchronous communication and sprint commitments."
        }
      },
      {
        "@type": "Question",
        "name": "What are the eligibility criteria for the Student Founder Fellowship?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We look for the top 1% of student builders: individuals who have built apps, shipped code on GitHub, designed interfaces, or grown organic audiences without waiting for college syllabus permission. Degrees and GPAs do not matter; only proof of work matters."
        }
      }
    ]
  }
];

export default function StudentFounderFellowshipPage() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fellowshipPillarJsonLd) }}
      />
      <SiteHeader currentPath="/student-founder-fellowship" />

      {/* 1. Hero Section */}
      <section className="relative pt-20 pb-20 px-6 max-w-6xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass text-xs uppercase tracking-widest text-blue-400 font-semibold mb-6 border border-blue-500/20 shadow-lg">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Top 1% College Builder Program in India</span>
        </div>

        <h1
          className="text-5xl sm:text-7xl md:text-8xl text-white font-normal tracking-tight mb-8 leading-[0.98]"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Don’t wait for permission <span className="italic text-white/80">to build.</span>
        </h1>

        <p className="text-white/70 text-lg sm:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-10">
          Forget the typical college internship. For 12 weeks, work alongside founders, solve acute business problems, ship live features on ventures like Ziggers and LoopVerse, and compete for the ₹1,00,000 Unfounded Grant.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/fellowship"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold text-sm uppercase tracking-wider hover:bg-white/90 hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2"
          >
            <span>Apply For Fellowship</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-4 rounded-full liquid-glass text-white font-semibold text-sm uppercase tracking-wider hover:bg-white/10 transition-all border border-white/20 flex items-center justify-center gap-2"
          >
            <span>Explore Ventures You’ll Build On</span>
            <ArrowUpRight className="w-4 h-4 text-white/60" />
          </Link>
        </div>

        {/* Metric Quick Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-center border-t border-b border-white/10 py-8 mt-16">
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-white">12 Weeks</div>
            <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Duration</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-white">₹1,00,000</div>
            <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Unfounded Grant</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-white">Top 1%</div>
            <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Acceptance Rate</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-white">Zero</div>
            <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Busywork or Slides</div>
          </div>
        </div>
      </section>

      {/* 2. Marquee Strip */}
      <div className="border-y border-white/10 py-3 bg-white/[0.02] overflow-hidden mb-20">
        <Marquee repeat={3} className="text-xs uppercase tracking-widest font-semibold text-white/60">
          <span className="mx-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            STUDENT FOUNDER FELLOWSHIP INDIA
          </span>
          <span className="mx-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            COLLEGE STARTUP INCUBATOR
          </span>
          <span className="mx-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            PROOF OF WORK OVER CERTIFICATES
          </span>
          <span className="mx-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
            ₹1,00,000 BUILDER GRANT
          </span>
        </Marquee>
      </div>

      {/* 3. Fellowship vs Internship Comparison (High-intent search query) */}
      <section className="px-6 max-w-6xl mx-auto w-full pb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-3 block">
            The Alternative
          </span>
          <h2
            className="text-3xl sm:text-5xl font-normal text-white mb-6"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Startup Fellowship vs. Typical College Internship
          </h2>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed font-light">
            Why India&apos;s sharpest campus builders are abandoning certificate-chasing for proof of work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Typical Internship */}
          <div className="rounded-3xl border border-white/10 liquid-glass p-8 sm:p-10">
            <span className="text-xs uppercase tracking-widest text-red-400 font-semibold mb-2 block">The Status Quo</span>
            <h3 className="text-2xl font-serif text-white mb-6">Typical Corporate Internship</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-0.5">✕</span>
                <span>Filing dummy spreadsheets or editing legacy PowerPoint slides.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-0.5">✕</span>
                <span>Layers of management between you and the actual decision makers.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-0.5">✕</span>
                <span>Certificate of completion that no top founder cares about.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-0.5">✕</span>
                <span>Zero equity, zero real product ownership, zero distribution learning.</span>
              </li>
            </ul>
          </div>

          {/* Unfounded Fellowship */}
          <div className="relative rounded-3xl border border-blue-500/40 liquid-glass p-8 sm:p-10 bg-gradient-to-b from-blue-950/30 to-black shadow-2xl">
            <BorderBeam size={180} duration={8} colorFrom="#3b82f6" colorTo="#60a5fa" />
            <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-2 block">The Unfounded Standard</span>
            <h3 className="text-2xl font-serif text-white mb-6">The Unfounded Fellowship</h3>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Work directly beside founders on live production code and customer distribution.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Ship features to real users inside Ziggers, LoopVerse, and Zachies.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Compete for the ₹1,00,000 Unfounded Grant upon measurable delivery.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Direct pathway to spin out into founding equity or venture leadership.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. 12-Week Roadmap */}
      <section className="px-6 max-w-6xl mx-auto w-full pb-28 border-t border-white/10 pt-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3 block">
            Program Architecture
          </span>
          <h2
            className="text-3xl sm:text-5xl font-normal text-white mb-6"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            The 12-Week Builder Sprint
          </h2>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed font-light">
            A three-phase immersive cadence from problem discovery to live shipping and grant evaluation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-3xl border border-white/10 p-8 liquid-glass">
            <span className="text-3xl font-serif text-blue-400 block mb-2">Weeks 01-04</span>
            <h4 className="text-xl font-semibold text-white mb-3">Phase 1: First Principles & Prototyping</h4>
            <p className="text-sm text-white/60 leading-relaxed">
              Unpack acute real-world inefficiencies. Deconstruct existing systems, define the 10x value delta, and write the initial working prototype in days, not months.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 p-8 liquid-glass">
            <span className="text-3xl font-serif text-emerald-400 block mb-2">Weeks 05-08</span>
            <h4 className="text-xl font-semibold text-white mb-3">Phase 2: Live Distribution & Feedback</h4>
            <p className="text-sm text-white/60 leading-relaxed">
              Deploy to actual customers. Test organic acquisition, talk to live users, instrument retention metrics, and eliminate friction without vanity metrics.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 p-8 liquid-glass">
            <span className="text-3xl font-serif text-amber-400 block mb-2">Weeks 09-12</span>
            <h4 className="text-xl font-semibold text-white mb-3">Phase 3: Scale, Grant & Venture Spinout</h4>
            <p className="text-sm text-white/60 leading-relaxed">
              Synthesize results. Fellows present measurable traction to the Unfounded partners. Grant recipients receive ₹1,00,000 and the opportunity to lead spun-out ventures.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Application Bottom Section */}
      <section className="px-6 max-w-4xl mx-auto w-full pb-28 text-center border-t border-white/10 pt-20">
        <h2
          className="text-4xl sm:text-6xl font-normal text-white mb-6"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          You build. You ship. <span className="italic text-white/80">You stay.</span>
        </h2>
        <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          Applications are evaluated on proof of work alone. Show us what you’ve built, what you’ve broken, and what you’re obsessed with shipping next.
        </p>
        <Link
          href="/fellowship"
          className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-white text-black font-semibold text-sm uppercase tracking-wider hover:bg-white/90 hover:scale-105 transition-all shadow-xl cursor-pointer"
        >
          <span>Apply For Fellowship Now</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <Footer />
    </div>
  );
}
