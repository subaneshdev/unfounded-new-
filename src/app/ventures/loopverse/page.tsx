import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Sparkles, ShieldCheck, CheckCircle2, Terminal, Code2, Lock, Cpu, Rocket } from "lucide-react";
import SiteHeader from "@/components/ui/SiteHeader";
import Footer from "@/components/landing/Footer";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Marquee } from "@/components/magicui/marquee";

export const metadata: Metadata = {
  title: "LoopVerse | The Skill Verification Protocol (Unfounded Venture)",
  description:
    "LoopVerse eliminates resume fluff with AI-validated, cryptographically proven skill profiles. Directly bridging genuine student builders with venture-backed hiring teams.",
  keywords: [
    "LoopVerse",
    "LoopVerse protocol",
    "loopverse.in",
    "skill verification protocol",
    "cryptographic skill profile",
    "AI proof of work verification",
    "student builder credentials",
    "campus recruitment protocol",
    "Unfounded venture",
    "zero fiction credentials",
  ],
  alternates: {
    canonical: "https://unfounded.in/ventures/loopverse",
  },
  openGraph: {
    title: "LoopVerse | The Skill Verification Protocol",
    description:
      "One ecosystem. Zero fiction credentials. AI-validated proof-of-work profiles connecting student engineers directly with founders.",
    url: "https://unfounded.in/ventures/loopverse",
    siteName: "Unfounded",
    images: [
      {
        url: "/unfounded-team.jpg",
        width: 1200,
        height: 630,
        alt: "LoopVerse Skill Verification Protocol",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LoopVerse | Zero Fiction Credentials",
    description:
      "Replacing unverified resumes with AI-evaluated cryptographic skill profiles.",
    images: ["/unfounded-team.jpg"],
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Chennai",
    "geo.position": "13.0827;80.2707",
    "ICBM": "13.0827, 80.2707",
  },
};

const loopverseJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://unfounded.in/ventures/loopverse#protocol",
  "name": "LoopVerse",
  "operatingSystem": "Web, Multi-chain",
  "applicationCategory": "IdentityApplication",
  "url": "https://www.loopverse.in/",
  "description": "The Skill Verification Protocol replacing unverified credentials with AI-validated, cryptographically proven builder profiles.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Unfounded Venture Lab",
    "url": "https://unfounded.in"
  }
};

export default function LoopVerseVenturePage() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(loopverseJsonLd) }}
      />
      <SiteHeader currentPath="/ventures" />

      {/* 1. Hero */}
      <section className="relative pt-20 pb-20 px-6 max-w-6xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass text-xs uppercase tracking-widest text-blue-400 font-semibold mb-6 border border-blue-500/20 shadow-lg">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Unfounded In-House Venture • Alpha Protocol</span>
        </div>

        <h1
          className="text-5xl sm:text-7xl md:text-8xl text-white font-normal tracking-tight mb-8 leading-[0.98]"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          One ecosystem. <span className="italic text-white/80">Zero fiction.</span>
        </h1>

        <p className="text-white/70 text-lg sm:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-10">
          The traditional tech resume is broken—filled with exaggerated bullet points, fake online certificates, and ChatGPT-generated fluff. LoopVerse replaces resumes with cryptographic, AI-evaluated proof-of-work records.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.loopverse.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold text-sm uppercase tracking-wider hover:bg-white/90 hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2"
          >
            <span>Launch LoopVerse Protocol</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <Link
            href="/ventures"
            className="w-full sm:w-auto px-8 py-4 rounded-full liquid-glass text-white font-semibold text-sm uppercase tracking-wider hover:bg-white/10 transition-all border border-white/20 flex items-center justify-center gap-2"
          >
            <span>← Back to All Ventures</span>
          </Link>
        </div>

        {/* Metric Quick Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-center border-t border-b border-white/10 py-8 mt-16">
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-white">0%</div>
            <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Credential Noise & Fiction</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-white">Cryptographic</div>
            <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Skill Verification Standard</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-white">AI Engine</div>
            <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Proof-of-Work Evaluation</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-white">Direct</div>
            <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Venture Hiring Pipeline</div>
          </div>
        </div>
      </section>

      {/* 2. Marquee */}
      <div className="border-y border-white/10 py-3 bg-white/[0.02] overflow-hidden mb-20">
        <Marquee repeat={3} className="text-xs uppercase tracking-widest font-semibold text-white/60">
          <span className="mx-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            LOOPVERSE • SKILL VERIFICATION PROTOCOL
          </span>
          <span className="mx-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            ZERO RESUME FICTION
          </span>
          <span className="mx-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            AI CODE EVALUATION
          </span>
          <span className="mx-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
            CRYPTOGRAPHIC PROOF OF WORK
          </span>
        </Marquee>
      </div>

      {/* 3. Core Pillars */}
      <section className="px-6 max-w-6xl mx-auto w-full pb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-3 block">
            Protocol Architecture
          </span>
          <h2
            className="text-3xl sm:text-5xl font-normal text-white mb-6"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            How LoopVerse Replaces Resume Noise
          </h2>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed font-light">
            Bringing mathematical certainty and machine validation to campus hiring and venture talent acquisition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-3xl border border-white/10 p-8 liquid-glass">
            <Terminal className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">AI Code Analysis</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Analyzes actual commit logs, code structure, test coverage, and product architecture to evaluate real engineering depth rather than subjective self-ratings.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-8 liquid-glass">
            <Lock className="w-8 h-8 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Cryptographic Attestation</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Completed sprint outcomes, hackathon deliverables, and peer validations are sealed with immutable cryptographic signatures, making credential tampering impossible.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-8 liquid-glass">
            <Rocket className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Direct Founder Matching</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Eliminates recruiters and keyword scrapers. Top founders filter candidates directly by proven technical capabilities, shipping velocity, and validated badges.
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
          Verify your proof of work.
        </h2>
        <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          Join the LoopVerse protocol and bridge your verified student deliverables directly to high-velocity venture teams.
        </p>
        <a
          href="https://www.loopverse.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-white text-black font-semibold text-sm uppercase tracking-wider hover:bg-white/90 hover:scale-105 transition-all shadow-xl"
        >
          <span>Explore LoopVerse Protocol</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </section>

      <Footer />
    </div>
  );
}
