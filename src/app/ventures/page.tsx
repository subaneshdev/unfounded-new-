import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Sparkles, Users, ShieldCheck, Leaf, Flame, Shield, CheckCircle2 } from "lucide-react";
import SiteHeader from "@/components/ui/SiteHeader";
import Footer from "@/components/landing/Footer";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Marquee } from "@/components/magicui/marquee";

export const metadata: Metadata = {
  title: "Our Ventures | Unfounded Venture Lab (Ziggers, LoopVerse, Zachies, DrinkQ)",
  description:
    "Explore the in-house startups engineered by Unfounded: Ziggers (on-demand gig workforce), LoopVerse (skill verification protocol), Zachies (bio-materials lab), and DrinkQ (nootropics).",
  keywords: [
    "Unfounded Ventures",
    "Ziggers",
    "Ziggers gig workforce",
    "LoopVerse",
    "LoopVerse skill verification",
    "Zachies",
    "Zachies biomaterials",
    "DrinkQ",
    "Chennai venture studio",
    "Tamil Nadu startups",
    "Venture lab in-house startups",
  ],
  alternates: {
    canonical: "https://unfounded.in/ventures",
  },
  openGraph: {
    title: "Our Ventures | Unfounded Venture Lab",
    description:
      "Explore the in-house ventures engineered by Unfounded: Ziggers, LoopVerse, Zachies, and DrinkQ. Building companies that matter.",
    url: "https://unfounded.in/ventures",
    siteName: "Unfounded",
    images: [
      {
        url: "/unfounded-team.jpg",
        width: 1200,
        height: 630,
        alt: "Unfounded In-House Ventures",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Ventures | Unfounded Venture Lab",
    description:
      "Explore in-house ventures engineered by Unfounded: Ziggers, LoopVerse, Zachies, and DrinkQ.",
    images: ["/unfounded-team.jpg"],
  },
};

const venturesJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://unfounded.in/ventures#webpage",
  "name": "Our Ventures | Unfounded Venture Lab",
  "description": "Explore the in-house ventures engineered by Unfounded: Ziggers, LoopVerse, Zachies, and DrinkQ.",
  "url": "https://unfounded.in/ventures",
  "isPartOf": {
    "@id": "https://unfounded.in/#website"
  },
  "mainEntity": {
    "@type": "ItemList",
    "name": "Unfounded Ventures",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "SoftwareApplication",
          "name": "Ziggers",
          "url": "https://www.ziggers.in",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Android, iOS, Web",
          "description": "India's on-demand gig workforce & instant staffing platform with < 15 min matching and same-day UPI payouts."
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "SoftwareApplication",
          "name": "LoopVerse",
          "url": "https://www.loopverse.in/",
          "applicationCategory": "IdentityApplication",
          "operatingSystem": "Web",
          "description": "The cryptographic skill verification protocol replacing resume fiction with AI-validated proof-of-work credentials."
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Product",
          "name": "Zachies",
          "url": "https://unfounded.in/zachies",
          "category": "Circular Bio-Materials",
          "description": "Carbon-negative mycelium structural composites replacing petroleum plastics."
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Product",
          "name": "DrinkQ",
          "url": "https://unfounded.in/drinkq",
          "category": "Functional Beverage & Nootropics",
          "description": "Clinical-grade cognitive hydration formula with Lion's Mane and L-Theanine."
        }
      }
    ]
  }
};

const VENTURES = [
  {
    id: "ziggers",
    name: "Ziggers",
    tagline: "India's On-Demand Gig Workforce & Instant Staffing Platform",
    badge: "Live App • Google Play",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    category: "Gig Economy & Workforce Platform",
    description:
      "Ziggers is India's leading on-demand gig workforce app. Connecting businesses with verified catering staff, delivery partners, drivers, and daily wage workers across major cities in under 15 minutes with same-day UPI payouts.",
    metrics: [
      { label: "Worker Matching", value: "< 15 Mins" },
      { label: "Payout Velocity", value: "Same-Day UPI" },
      { label: "Active Regions", value: "8+ Cities" },
    ],
    features: [
      "Verified on-demand staffing for catering, events, logistics, and retail operations",
      "Automated daily wage disbursements directly to workers via instant UPI",
      "Dual-sided mobile platform for fast business hiring and flexible student/local shifts",
    ],
    icon: Users,
    accentColor: "from-amber-600/20 to-yellow-600/10",
    borderColor: "border-amber-500/30",
    externalHref: "https://www.ziggers.in",
    externalLabel: "Visit Ziggers (ziggers.in)",
    hasBorderBeam: true,
  },
  {
    id: "loopverse",
    name: "LoopVerse",
    tagline: "The Skill Verification Protocol — Zero Fiction Credentials",
    badge: "Alpha Protocol",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    category: "AI & Cryptographic Identity",
    description:
      "LoopVerse replaces unverified college credentials and resume fluff with AI-validated, cryptographically proven skill profiles. One unified ecosystem bridging genuine student builders directly with high-velocity founders and hiring teams.",
    metrics: [
      { label: "Verification Standard", value: "Cryptographic" },
      { label: "Credential Noise", value: "0% Fiction" },
      { label: "Validation Engine", value: "AI Proof-of-Work" },
    ],
    features: [
      "AI-evaluated code, product, and sprint analysis to verify actual engineering competence",
      "Cryptographic proof-of-skill records preventing resume inflation and fake certificates",
      "Direct friction-free talent matching between verified builders and venture-backed teams",
    ],
    icon: ShieldCheck,
    accentColor: "from-blue-600/20 to-indigo-600/10",
    borderColor: "border-blue-500/30",
    externalHref: "https://www.loopverse.in/",
    externalLabel: "Visit LoopVerse (loopverse.in)",
    hasBorderBeam: true,
  },
  {
    id: "zachies",
    name: "Zachies",
    tagline: "Engineering the Next Generation of Circular Bio-Materials",
    badge: "Active Lab",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    category: "Bio-Materials Lab",
    description:
      "Zachies replaces petroleum-based polymers and plastics with carbon-negative mycelium composites and regenerative botanical fibres designed for high-performance industrial applications.",
    metrics: [
      { label: "Degradation", value: "90 Days" },
      { label: "Tensile Strength", value: "Industrial" },
      { label: "Carbon Footprint", value: "Negative" },
    ],
    features: [
      "Zero-petroleum mycelium foam packaging and structural composites",
      "Closed-loop agricultural waste upcycling architecture",
      "Interactive fluid & material physics simulations",
    ],
    icon: Leaf,
    accentColor: "from-emerald-600/20 to-teal-600/10",
    borderColor: "border-emerald-500/30",
    internalHref: "/zachies",
    externalLabel: "Explore Zachies Lab",
    hasBorderBeam: true,
  },
  {
    id: "drinkq",
    name: "DrinkQ",
    tagline: "Precision Nootropics & Clean Cognitive Hydration",
    badge: "Incubating",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    category: "Functional Wellness",
    description:
      "Engineered specifically for deep-work operators, DrinkQ combines natural adaptogens and clean cellular electrolytes to eliminate brain fog and sustain flow states without crashes.",
    metrics: [
      { label: "Sugar", value: "0g" },
      { label: "Flow Duration", value: "4-6 Hours" },
      { label: "Caffeine Crash", value: "Zero" },
    ],
    features: [
      "Clinical-grade L-Theanine + Lion's Mane cognitive formulation",
      "Ionic trace mineral electrolyte complex for rapid cellular hydration",
      "Clean label, sustainably sourced botanical extracts",
    ],
    icon: Flame,
    accentColor: "from-amber-600/20 to-orange-600/10",
    borderColor: "border-amber-500/30",
    internalHref: "/drinkq",
    externalLabel: "View Formulation",
    hasBorderBeam: false,
  },
];

export default function VenturesPage() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(venturesJsonLd) }}
      />
      {/* 1. Header with Nice Navigation */}
      <SiteHeader currentPath="/ventures" />

      {/* 2. Hero Section */}
      <section className="relative pt-16 pb-20 px-6 max-w-6xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass text-xs uppercase tracking-widest text-white/80 font-semibold mb-6 border border-white/20 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>The Unfounded Studio</span>
        </div>

        <h1
          className="text-5xl sm:text-7xl md:text-8xl text-white font-normal tracking-tight mb-8 leading-[0.98]"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Ventures built to <span className="italic text-white/80">compound.</span>
        </h1>

        <p className="text-white/70 text-lg sm:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-12">
          We don&apos;t build features. We build standalone venture-scale companies from first principles.
          From autonomous AI media to regenerative bio-materials.
        </p>

        {/* Metric Quick Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-center border-t border-b border-white/10 py-8">
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-white">4+</div>
            <div className="text-xs uppercase tracking-wider text-white/50 mt-1">In-House Ventures</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-white">7 Days</div>
            <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Idea to MVP</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-white">100%</div>
            <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Builder-Led</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-white">Global</div>
            <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Market Reach</div>
          </div>
        </div>
      </section>

      {/* 3. Ticker Ribbon */}
      <div className="border-y border-white/10 py-3 bg-white/[0.02] overflow-hidden mb-16">
        <Marquee repeat={3} className="text-xs uppercase tracking-widest font-semibold text-white/60">
          <span className="mx-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            ZIGGERS • ON-DEMAND GIG WORKFORCE
          </span>
          <span className="mx-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            LOOPVERSE • SKILL VERIFICATION PROTOCOL
          </span>
          <span className="mx-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            ZACHIES • BIO-MATERIALS LAB
          </span>
          <span className="mx-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            DRINKQ • NOOTROPIC HYDRATION
          </span>
        </Marquee>
      </div>

      {/* 4. The Ventures Grid */}
      <section className="px-6 max-w-6xl mx-auto w-full pb-28">
        <div className="space-y-12">
          {VENTURES.map((v, idx) => {
            const Icon = v.icon;
            const linkHref = v.internalHref || v.externalHref;
            const isInternal = Boolean(v.internalHref);

            return (
              <div
                key={v.id}
                className={`relative rounded-3xl border border-white/15 liquid-glass p-8 sm:p-12 overflow-hidden group hover:border-white/35 transition-all duration-300 shadow-2xl bg-gradient-to-br ${v.accentColor}`}
              >
                {v.hasBorderBeam && (
                  <BorderBeam size={320} duration={12} delay={idx * 3} colorFrom="#ffffff" colorTo="#38bdf8" />
                )}

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left info column */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider border ${v.badgeColor}`}>
                        {v.badge}
                      </span>
                      <span className="text-xs uppercase tracking-widest text-white/50 font-medium">
                        {v.category}
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl liquid-glass border border-white/20 flex items-center justify-center text-white">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3
                          className="text-4xl sm:text-5xl text-white font-normal"
                          style={{ fontFamily: "'Instrument Serif', serif" }}
                        >
                          {v.name}
                        </h3>
                      </div>
                      <p className="text-white/80 font-medium text-lg sm:text-xl leading-snug">
                        {v.tagline}
                      </p>
                    </div>

                    <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                      {v.description}
                    </p>

                    {/* Features bullet list */}
                    <div className="space-y-2.5 pt-2">
                      {v.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                          <CheckCircle2 className="w-4 h-4 text-white/60 mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      {v.internalHref ? (
                        <Link
                          href={v.internalHref}
                          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-white/90 hover:scale-105 transition-all shadow-xl cursor-pointer"
                        >
                          <span>{v.externalLabel}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      ) : (
                        <a
                          href={v.externalHref || "#"}
                          target={v.externalHref === "#" || !v.externalHref ? "_self" : "_blank"}
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full liquid-glass border border-white/25 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-white/10 hover:scale-105 transition-all shadow-xl cursor-pointer"
                        >
                          <span>{v.externalLabel}</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right metrics card */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full bg-black/40 rounded-2xl p-6 sm:p-8 border border-white/10">
                    <span className="text-[11px] uppercase tracking-widest text-white/40 font-semibold mb-6 block">
                      Venture Health &amp; Benchmarks
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
                      {v.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                          <div className="text-3xl sm:text-4xl font-serif text-white">{m.value}</div>
                          <div className="text-xs text-white/50 tracking-wider uppercase mt-1">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                      <span>Incubated at Unfounded Lab</span>
                      <span className="text-emerald-400 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        Active Codebase
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Venture Lab Engine Principles */}
      <section className="py-24 px-6 border-t border-white/10 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
              The Foundry Blueprint
            </span>
            <h3
              className="text-4xl sm:text-6xl text-white font-normal mt-3 mb-4"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              How we build companies
            </h3>
            <p className="text-white/60 text-sm sm:text-base">
              No simulations. No endless slide decks. A standardized 4-stage machine from zero to market leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Problem Discovery",
                desc: "We identify deep friction, overlooked workflow pain, and structural market gaps.",
              },
              {
                step: "02",
                title: "7-Day Rapid MVP",
                desc: "We deploy working code with AI intelligence and live databases in one week.",
              },
              {
                step: "03",
                title: "Customer Velocity",
                desc: "We get in the trenches to win the first 100 paying customers and validate unit economics.",
              },
              {
                step: "04",
                title: "Spinout & Scale",
                desc: "We assign dedicated venture leads, seed capital, and scale distribution.",
              },
            ].map((p) => (
              <div
                key={p.step}
                className="p-6 sm:p-8 rounded-2xl liquid-glass border border-white/10 flex flex-col justify-between hover:border-white/30 transition-all"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-white/40 block mb-4">
                    {p.step}
                  </span>
                  <h4 className="text-white font-semibold text-lg mb-2">{p.title}</h4>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Bottom Dual CTA: Fellowship & Friends */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h3
          className="text-4xl sm:text-6xl text-white font-normal mb-6"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Want to build inside these ventures?
        </h3>
        <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto mb-10">
          Whether you&apos;re a college builder ready for the 12-week challenge, or a seasoned specialist looking to consult and collaborate.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/fellowship"
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-white text-black font-bold text-sm tracking-wider hover:bg-white/90 hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-2"
          >
            <span>APPLY FOR FELLOWSHIP</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/friends"
            className="w-full sm:w-auto px-8 py-4 rounded-full liquid-glass border border-white/25 text-white font-medium text-sm hover:bg-white/10 hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Become a Friend of Unfounded</span>
          </Link>
        </div>
      </section>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
