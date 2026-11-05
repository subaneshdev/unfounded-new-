import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Sparkles, Building2, Rocket, Cpu, Layers, ShieldCheck, CheckCircle2, Flame, MapPin } from "lucide-react";
import SiteHeader from "@/components/ui/SiteHeader";
import Footer from "@/components/landing/Footer";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Marquee } from "@/components/magicui/marquee";

export const metadata: Metadata = {
  title: "Venture Studio India | High-Velocity Startup Studio & Venture Builder (Chennai)",
  description:
    "Unfounded is India's premier AI venture studio and venture builder. We build companies from first principles, engineer in-house startups (Ziggers, LoopVerse, Zachies, DrinkQ), and back top student founders.",
  keywords: [
    "venture studio",
    "venture studio India",
    "startup studio",
    "startup studio India",
    "venture builder",
    "venture builder India",
    "venture builder Chennai",
    "company builder India",
    "startup builder India",
    "venture studio Chennai",
    "best venture studios in India",
    "top venture studios in India",
    "venture studio model",
    "venture studio vs accelerator",
    "venture studio vs incubator",
    "venture creation platform",
    "AI venture studio",
    "Unfounded venture studio",
  ],
  alternates: {
    canonical: "https://unfounded.in/venture-studio-india",
  },
  openGraph: {
    title: "Venture Studio India | Unfounded Venture Lab & Company Builder",
    description:
      "We build what doesn’t exist. India's AI-first venture studio engineering scalable startups from first principles.",
    url: "https://unfounded.in/venture-studio-india",
    siteName: "Unfounded",
    images: [
      {
        url: "/unfounded-team.jpg",
        width: 1200,
        height: 630,
        alt: "Unfounded Venture Studio India",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Venture Studio India | Unfounded Startup Studio",
    description:
      "India's premier AI venture studio and venture builder. In-house ventures, deep tech, and the 1% student fellowship.",
    images: ["/unfounded-team.jpg"],
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Chennai",
    "geo.position": "13.0827;80.2707",
    "ICBM": "13.0827, 80.2707",
  },
};

const studioJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://unfounded.in/venture-studio-india#webpage",
    "name": "Venture Studio India | High-Velocity Startup Studio & Venture Builder",
    "description": "Unfounded is India's premier AI venture studio, engineering in-house startups from scratch and backing the top 1% of student builders.",
    "url": "https://unfounded.in/venture-studio-india",
    "isPartOf": {
      "@id": "https://unfounded.in/#website"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://unfounded.in/venture-studio-india#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a venture studio, and how is it different from an accelerator in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlike traditional accelerators or incubators that invest in existing external startups, a venture studio (also known as a startup studio or venture builder) conceives, builds, validates, and launches companies from scratch using its own in-house engineering, design, and growth teams before spinning them out as independent companies."
        }
      },
      {
        "@type": "Question",
        "name": "Which companies have been built by Unfounded Venture Studio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unfounded has conceived and incubated four core ventures: Ziggers (India's on-demand gig workforce app), LoopVerse (AI cryptographic skill verification protocol), Zachies (circular mycelium bio-materials lab), and DrinkQ (clean cognitive nootropic hydration)."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Unfounded Venture Studio based in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unfounded is headquartered in Chennai, Tamil Nadu, India, operating along the coastal tech corridor with an ecosystem bridging top college builders, engineering hubs, and global venture markets."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Unfounded venture creation platform work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unfounded uses a 4-stage studio engine: (1) Problem Discovery from real-world inefficiencies; (2) 7-Day Rapid MVP build-and-ship cycles; (3) Customer & Distribution Velocity testing; and (4) Venture Spinout & Funding with dedicated founding teams."
        }
      }
    ]
  }
];

export default function VentureStudioIndiaPage() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(studioJsonLd) }}
      />
      <SiteHeader currentPath="/venture-studio-india" />

      {/* 1. Hero Section */}
      <section className="relative pt-20 pb-20 px-6 max-w-6xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass text-xs uppercase tracking-widest text-white/80 font-semibold mb-6 border border-white/20 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>India’s AI Venture Studio & Builder Lab</span>
        </div>

        <h1
          className="text-5xl sm:text-7xl md:text-8xl text-white font-normal tracking-tight mb-8 leading-[0.98]"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          We build startups <span className="italic text-white/80">from scratch.</span>
        </h1>

        <p className="text-white/70 text-lg sm:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-10">
          Unfounded is a venture studio and company builder headquartered in Chennai, India. We do not gamble on pitch decks. We discover acute problems, write the initial code, test distribution in the wild, and spin out standalone companies that matter.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold text-sm uppercase tracking-wider hover:bg-white/90 hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2"
          >
            <span>Explore In-House Ventures</span>
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
            <div className="text-3xl sm:text-4xl font-serif text-white">4+</div>
            <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Spun-Out Ventures</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-white">7 Days</div>
            <div className="text-xs uppercase tracking-wider text-white/50 mt-1">MVP Cycle Velocity</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-white">Top 1%</div>
            <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Student Builders</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-white">Chennai</div>
            <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Coastal Hub, India</div>
          </div>
        </div>
      </section>

      {/* 2. Marquee Ticker */}
      <div className="border-y border-white/10 py-3 bg-white/[0.02] overflow-hidden mb-20">
        <Marquee repeat={3} className="text-xs uppercase tracking-widest font-semibold text-white/60">
          <span className="mx-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            VENTURE STUDIO INDIA
          </span>
          <span className="mx-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            STARTUP BUILDER CHENNAI
          </span>
          <span className="mx-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            COMPANY CREATION PLATFORM
          </span>
          <span className="mx-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
            STUDENT FOUNDER FELLOWSHIP
          </span>
        </Marquee>
      </div>

      {/* 3. The Venture Studio Model: Studio vs Accelerator vs Incubator */}
      <section className="px-6 max-w-6xl mx-auto w-full pb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-3 block">
            Category Breakdown
          </span>
          <h2
            className="text-3xl sm:text-5xl font-normal text-white mb-6"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Venture Studio vs. Accelerator vs. Incubator
          </h2>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed font-light">
            Understanding why the startup studio model generates asymmetric returns in India compared to traditional capital-only programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Incubator */}
          <div className="rounded-3xl border border-white/10 liquid-glass p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-2 block">Model A</span>
              <h3 className="text-2xl font-serif text-white mb-4">Traditional Incubator</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                Provides shared office space, early mentorship, and modest seed grants. Founders work alone on their own early hypotheses with limited technical support.
              </p>
            </div>
            <div className="border-t border-white/10 pt-4 text-xs text-white/50 space-y-2">
              <div className="flex justify-between"><span>Idea Origin:</span> <span className="text-white">External</span></div>
              <div className="flex justify-between"><span>Hands-on Code:</span> <span className="text-red-400">Zero</span></div>
              <div className="flex justify-between"><span>Spinout Velocity:</span> <span>12-24 Months</span></div>
            </div>
          </div>

          {/* Accelerator */}
          <div className="rounded-3xl border border-white/10 liquid-glass p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-2 block">Model B</span>
              <h3 className="text-2xl font-serif text-white mb-4">Startup Accelerator</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                Fixed 3-month cohort that invests capital into existing teams. Focuses on pitch polishing and investor Demo Day networking rather than building code.
              </p>
            </div>
            <div className="border-t border-white/10 pt-4 text-xs text-white/50 space-y-2">
              <div className="flex justify-between"><span>Idea Origin:</span> <span className="text-white">External</span></div>
              <div className="flex justify-between"><span>Hands-on Code:</span> <span className="text-red-400">Zero</span></div>
              <div className="flex justify-between"><span>Spinout Velocity:</span> <span>3 Months Batch</span></div>
            </div>
          </div>

          {/* Venture Studio (Unfounded) */}
          <div className="relative rounded-3xl border border-blue-500/40 liquid-glass p-8 flex flex-col justify-between bg-gradient-to-b from-blue-950/30 to-black shadow-2xl">
            <BorderBeam size={180} duration={8} colorFrom="#3b82f6" colorTo="#60a5fa" />
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-[10px] uppercase tracking-widest font-semibold mb-3 border border-blue-500/30">
                The Unfounded Way
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">Unfounded Venture Studio</h3>
              <p className="text-sm text-white/80 leading-relaxed mb-6">
                We originate the core ideas, build the production code, test distribution with real users, recruit high-agency operators, and fund the initial runway.
              </p>
            </div>
            <div className="border-t border-blue-500/20 pt-4 text-xs text-white/70 space-y-2">
              <div className="flex justify-between"><span>Idea Origin:</span> <span className="text-blue-400 font-semibold">First Principles</span></div>
              <div className="flex justify-between"><span>Hands-on Code:</span> <span className="text-emerald-400 font-semibold">100% In-House</span></div>
              <div className="flex justify-between"><span>Spinout Velocity:</span> <span className="text-white font-semibold">7-Day Rapid MVPs</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The 4-Stage Foundry Engine */}
      <section className="px-6 max-w-6xl mx-auto w-full pb-28 border-t border-white/10 pt-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-3 block">
            Execution Framework
          </span>
          <h2
            className="text-3xl sm:text-5xl font-normal text-white mb-6"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            How We Build Companies
          </h2>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed font-light">
            Our systematic framework transforms observed structural market inefficiencies into independent, venture-scale businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="rounded-2xl border border-white/10 p-6 liquid-glass">
            <span className="text-2xl font-serif text-blue-400 block mb-2">01</span>
            <h4 className="text-lg font-semibold text-white mb-2">Problem Discovery</h4>
            <p className="text-xs text-white/60 leading-relaxed">
              We look for ugly, neglected, or friction-heavy workflows in India and global markets where software or materials innovation creates an immediate 10x delta.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 liquid-glass">
            <span className="text-2xl font-serif text-blue-400 block mb-2">02</span>
            <h4 className="text-lg font-semibold text-white mb-2">7-Day Rapid MVP</h4>
            <p className="text-xs text-white/60 leading-relaxed">
              Zero decks, zero committee approvals. We deploy working prototypes, landing pages, and automated pipelines directly to production in under a week.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 liquid-glass">
            <span className="text-2xl font-serif text-blue-400 block mb-2">03</span>
            <h4 className="text-lg font-semibold text-white mb-2">Customer Velocity</h4>
            <p className="text-xs text-white/60 leading-relaxed">
              We put the product in front of real customers. If the market doesn’t pull aggressively within 30 days, we ruthlessly kill or pivot the experiment.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 liquid-glass">
            <span className="text-2xl font-serif text-blue-400 block mb-2">04</span>
            <h4 className="text-lg font-semibold text-white mb-2">Spinout & Scale</h4>
            <p className="text-xs text-white/60 leading-relaxed">
              Validated ventures are paired with obsessed founders from the Unfounded Fellowship, capitalized with initial studio runway, and spun out as independent entities.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Venture Portfolio Summary */}
      <section className="px-6 max-w-6xl mx-auto w-full pb-28 border-t border-white/10 pt-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3 block">
            Portfolio Showcase
          </span>
          <h2
            className="text-3xl sm:text-5xl font-normal text-white mb-6"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Spun-Out In-House Ventures
          </h2>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed font-light">
            Real companies solving real problems across gig work, skill verification, deep bio-materials, and cognitive health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ziggers */}
          <div className="rounded-3xl border border-white/15 liquid-glass p-8 bg-gradient-to-br from-amber-600/15 to-yellow-600/5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">Gig Workforce Platform</span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">Live App</span>
            </div>
            <h3 className="text-2xl font-serif text-white mb-2">Ziggers</h3>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              India&apos;s on-demand gig workforce app. Connecting businesses with verified catering staff, delivery partners, drivers, and daily wage workers across major cities in under 15 minutes with same-day UPI payouts.
            </p>
            <a
              href="https://www.ziggers.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-white hover:text-amber-300 transition-colors"
            >
              <span>Visit Ziggers (ziggers.in)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* LoopVerse */}
          <div className="rounded-3xl border border-white/15 liquid-glass p-8 bg-gradient-to-br from-blue-600/15 to-indigo-600/5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-wider text-blue-400 font-semibold">AI & Cryptographic Identity</span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">Protocol</span>
            </div>
            <h3 className="text-2xl font-serif text-white mb-2">LoopVerse</h3>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              The skill verification protocol. Replaces unverified college credentials and resume fluff with AI-validated, cryptographically proven proof-of-work profiles directly connecting verified builders to venture teams.
            </p>
            <a
              href="https://www.loopverse.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-white hover:text-blue-300 transition-colors"
            >
              <span>Visit LoopVerse (loopverse.in)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Zachies */}
          <div className="rounded-3xl border border-white/15 liquid-glass p-8 bg-gradient-to-br from-emerald-600/15 to-teal-600/5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">Circular Bio-Materials</span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">Active Lab</span>
            </div>
            <h3 className="text-2xl font-serif text-white mb-2">Zachies</h3>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              Engineering carbon-negative mycelium composites and regenerative botanical fibres to replace petroleum-based plastics with a 90-day natural degradation cycle.
            </p>
            <Link
              href="/zachies"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-white hover:text-emerald-300 transition-colors"
            >
              <span>Explore Zachies Lab</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* DrinkQ */}
          <div className="rounded-3xl border border-white/15 liquid-glass p-8 bg-gradient-to-br from-amber-600/15 to-orange-600/5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">Functional Wellness</span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">Incubating</span>
            </div>
            <h3 className="text-2xl font-serif text-white mb-2">DrinkQ</h3>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              Clinical-grade cognitive hydration formulated for deep-work operators combining Lion&apos;s Mane, L-Theanine, and trace cellular electrolytes without caffeine crashes.
            </p>
            <Link
              href="/drinkq"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-white hover:text-amber-300 transition-colors"
            >
              <span>View Formulation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Why Chennai / Tamil Nadu Hub */}
      <section className="px-6 max-w-6xl mx-auto w-full pb-28 border-t border-white/10 pt-20">
        <div className="rounded-3xl border border-white/15 liquid-glass p-8 sm:p-12 relative overflow-hidden bg-gradient-to-br from-zinc-900 to-black">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs uppercase tracking-widest font-semibold mb-6">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Headquartered in Chennai, Tamil Nadu, India</span>
            </div>
            <h2
              className="text-3xl sm:text-5xl font-normal text-white mb-6"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Built on the coasts of Tamil Nadu. Shipping to the world.
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed font-light mb-8">
              Chennai is India’s deep-tech, manufacturing, and SaaS powerhouse. Operating from here gives Unfounded direct access to world-class engineering campuses (IIT Madras, Anna University), industrial hardware labs, and a culture of resilient, capital-efficient builders.
            </p>
            <Link
              href="/startup-ecosystem-chennai"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>Explore the Chennai Startup & Builder Ecosystem Guide →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="px-6 max-w-4xl mx-auto w-full pb-28 text-center">
        <h2
          className="text-4xl sm:text-6xl font-normal text-white mb-6"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Build with Unfounded.
        </h2>
        <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          Whether you are a student builder wanting to ship production features or an operator looking to lead a venture spinout, we want to talk.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/fellowship"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold text-sm uppercase tracking-wider hover:bg-white/90 hover:scale-105 transition-all shadow-xl"
          >
            Apply for Fellowship
          </Link>
          <Link
            href="/friends"
            className="w-full sm:w-auto px-8 py-4 rounded-full liquid-glass text-white font-semibold text-sm uppercase tracking-wider hover:bg-white/10 transition-all border border-white/20"
          >
            Join Friends of Unfounded
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
