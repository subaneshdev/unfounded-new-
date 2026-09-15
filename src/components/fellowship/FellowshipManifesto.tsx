"use client";

import React, { useState } from "react";
import {
  Code,
  TrendingUp,
  Zap,
  ArrowRight,
  Sparkles,
  Layers,
  Award,
  CheckCircle2,
  Users,
  Target,
  Compass,
  DollarSign,
  Rocket,
  ShieldCheck,
  Flame,
  Globe,
  Bot,
  Laptop,
} from "lucide-react";
import { Marquee } from "@/components/magicui/marquee";
import { BorderBeam } from "@/components/magicui/border-beam";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { WordRotate } from "@/components/magicui/word-rotate";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

interface FellowshipManifestoProps {
  onOpenApply: () => void;
}

export default function FellowshipManifesto({
  onOpenApply,
}: FellowshipManifestoProps) {
  const [activeWeekTab, setActiveWeekTab] = useState(0);

  const WEEKS = [
    {
      period: "Week 01",
      title: "ENTER THE MACHINE",
      summary:
        "Understand Unfounded. Learn how we build. Learn how we experiment. Learn how we think. Then start building.",
      points: [
        "Onboard directly into the Unfounded venture engine",
        "Master the 7-day rapid validation framework",
        "Deploy your first experimental feature or AI automation",
      ],
    },
    {
      period: "Weeks 02–03",
      title: "GET YOUR HANDS DIRTY",
      summary:
        "Work inside one of our ventures: Ziggers, LoopVerse, Zachies, or the Unfounded Engine. Your first job: Create measurable impact.",
      points: [
        "Directly contribute to production codebases and live campaigns",
        "Own a sprint with real metrics (users, revenue, engagement)",
        "Ship changes that face real paying customers",
      ],
    },
    {
      period: "Weeks 04–06",
      title: "THE RAID",
      summary:
        "You'll receive a real problem, a deadline, a limited budget, and very little instruction. Figure it out. Build. Launch. Measure.",
      points: [
        "Unbounded problem space with true ownership",
        "Autonomous execution without hand-holding",
        "Fast feedback loops from real market signals",
      ],
    },
    {
      period: "Weeks 07–09",
      title: "ROTATE & CROSS-POLLINATE",
      summary:
        "Move into another part of the machine. See how product connects to distribution. See how distribution connects to customers. See how customers connect to revenue. Learn how the whole thing works.",
      points: [
        "Cross over between product engineering and growth distribution",
        "Experience the full lifecycle of venture creation",
        "Synthesize customer feedback into new technical solutions",
      ],
    },
    {
      period: "Weeks 10–11",
      title: "THE FOUNDER'S OFFICE",
      summary:
        "Work closer to the founders. Sit in on real decisions: customer calls, product decisions, growth experiments, hiring, strategy, and venture reviews. This is where you stop watching and start operating.",
      points: [
        "Sit inside high-stakes board and roadmap discussions",
        "Analyze real unit economics and venture viability",
        "Co-author growth strategies with venture leads",
      ],
    },
    {
      period: "Week 12",
      title: "THE FINAL",
      summary:
        "Show us what you built. Show us what happened. Show us what you learned. Then answer one question: 'If we gave you ₹1 lakh and 90 days, what would you build?'",
      points: [
        "Present your portfolio of shipped work and impact",
        "Live Demo Day before top founders, angels, and operators",
        "Opportunity to secure the ₹1,00,000 Unfounded Grant",
      ],
    },
  ];

  return (
    <div
      id="fellowship-program"
      className="bg-white text-black selection:bg-black selection:text-white transition-colors"
    >
      {/* 1. Kinetic Marquee Ribbon (Magic UI) */}
      <div className="border-y border-neutral-200 py-3 bg-neutral-50 overflow-hidden">
        <Marquee repeat={3} className="text-xs uppercase tracking-widest font-semibold text-neutral-800">
          <span className="mx-4 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
            NO SIMULATIONS
          </span>
          <span className="mx-4 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
            NO BUSYWORK
          </span>
          <span className="mx-4 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
            NO CERTIFICATE-CHASING
          </span>
          <span className="mx-4 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
            YOU BUILD. YOU SHIP. YOU LEARN.
          </span>
          <span className="mx-4 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
            IF YOU&apos;RE GOOD ENOUGH, YOU STAY
          </span>
          <span className="mx-4 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
            12 WEEKS • 20 FELLOWS
          </span>
        </Marquee>
      </div>

      {/* 2. Key Numbers & Metrics (Magic UI NumberTicker) */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-b border-neutral-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
            <div className="text-4xl sm:text-6xl font-serif text-black font-normal flex items-baseline justify-center">
              <NumberTicker value={1} />
              <span>%</span>
            </div>
            <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mt-2">
              Collegiate Builders
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
            <div className="text-4xl sm:text-6xl font-serif text-black font-normal flex items-baseline justify-center">
              <NumberTicker value={12} />
              <span className="text-2xl sm:text-3xl ml-1 font-sans">W</span>
            </div>
            <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mt-2">
              Weeks of Sprints
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
            <div className="text-4xl sm:text-6xl font-serif text-black font-normal flex items-baseline justify-center">
              <NumberTicker value={20} />
            </div>
            <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mt-2">
              Fellows Cohort Limit
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
            <div className="text-4xl sm:text-6xl font-serif text-black font-normal flex items-baseline justify-center">
              <span>₹</span>
              <NumberTicker value={100} />
              <span className="text-2xl sm:text-3xl font-sans">K</span>
            </div>
            <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mt-2">
              The Unfounded Grant
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Manifesto Statement */}
      <section className="relative py-28 sm:py-36 px-6 max-w-5xl mx-auto text-center border-b border-neutral-200 overflow-hidden">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.12}
          duration={3}
          className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] inset-x-0 inset-y-[-20%] h-[140%]"
        />

        <div className="relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-black text-white text-xs font-semibold uppercase tracking-widest mb-6">
            The Manifesto
          </span>

          <h2
            className="text-4xl sm:text-6xl md:text-7xl text-black font-normal leading-[1.05] tracking-tight mb-8"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Forget the typical internship.
          </h2>

          <div className="text-neutral-700 text-lg sm:text-2xl font-sans leading-relaxed max-w-3xl mx-auto mb-8 font-light">
            For 12 weeks, you&apos;ll work alongside founders, build real products, solve real business problems, and master{" "}
            <WordRotate
              className="font-serif italic font-normal text-black underline underline-offset-4 decoration-neutral-300"
              words={["distribution.", "7-day MVPs.", "real capital.", "customer acquisition.", "venture building."]}
            />
          </div>

          <div className="p-6 rounded-2xl bg-neutral-50/90 backdrop-blur-sm border border-neutral-200 max-w-xl mx-auto text-base sm:text-lg font-serif italic text-black shadow-sm">
            &ldquo;You build. You ship. You learn. And if you&apos;re good enough, you stay.&rdquo;
          </div>

          <div className="mt-10 flex justify-center">
            <ShimmerButton
              onClick={onOpenApply}
              background="#000000"
              shimmerColor="#ffffff"
              className="px-10 py-4 font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-xl"
            >
              <span className="flex items-center gap-2">
                <span>APPLY FOR FELLOWSHIP</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </ShimmerButton>
          </div>
        </div>
      </section>

      {/* 4. What is Unfounded? + Magic UI Orbiting Circles */}
      <section id="ecosystem" className="py-24 px-6 border-b border-neutral-200 bg-neutral-50/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
              The Venture Machine
            </span>
            <h3
              className="text-4xl sm:text-6xl text-black font-normal leading-tight"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Unfounded is building companies. Not one. Multiple.
            </h3>
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
              Ziggers. LoopVerse. Zachies. And whatever comes next.
            </p>
            <p className="text-neutral-600 text-base leading-relaxed">
              The Fellowship is where we find the people who can help build them.
              We look for students who can do more than score marks or collect
              internships. People who can take a messy problem and turn it into
              something real. People who can get 100 people to care about it.
            </p>
            <div className="pt-2">
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-black px-5 py-2.5 rounded-full border border-black/20 bg-white shadow-sm">
                We&apos;re looking for builders.
              </span>
            </div>
          </div>

          {/* Orbiting Circles Visual (Magic UI) */}
          <div className="lg:col-span-6 relative flex h-[440px] w-full items-center justify-center overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
            {/* Center Hub */}
            <div className="z-10 flex size-20 items-center justify-center rounded-full border-2 border-black bg-black text-white shadow-xl">
              <span className="text-xs font-serif font-bold tracking-tight">
                UNFOUNDED
              </span>
            </div>

            {/* Orbit 1 - Inner Ring: Core Ventures */}
            <OrbitingCircles radius={95} duration={25} reverse>
              <div className="flex size-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-xs font-semibold text-black shadow-md">
                <Globe className="w-4 h-4 text-blue-600" />
              </div>
            </OrbitingCircles>

            <OrbitingCircles radius={95} duration={25} delay={12}>
              <div className="flex size-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-xs font-semibold text-black shadow-md">
                <Bot className="w-4 h-4 text-emerald-600" />
              </div>
            </OrbitingCircles>

            {/* Orbit 2 - Outer Ring: Skills & Ecosystem */}
            <OrbitingCircles radius={165} duration={35}>
              <div className="flex size-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-xs font-semibold text-black shadow-md">
                <Code className="w-4 h-4 text-neutral-800" />
              </div>
            </OrbitingCircles>

            <OrbitingCircles radius={165} duration={35} delay={11}>
              <div className="flex size-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-xs font-semibold text-black shadow-md">
                <TrendingUp className="w-4 h-4 text-amber-600" />
              </div>
            </OrbitingCircles>

            <OrbitingCircles radius={165} duration={35} delay={23}>
              <div className="flex size-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-xs font-semibold text-black shadow-md">
                <Laptop className="w-4 h-4 text-purple-600" />
              </div>
            </OrbitingCircles>
          </div>
        </div>
      </section>

      {/* 5. This Is Not An Internship */}
      <section className="py-24 px-6 max-w-6xl mx-auto border-b border-neutral-200">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
            The Contrast
          </span>
          <h3
            className="text-4xl sm:text-6xl text-black font-normal mt-2 mb-4"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            This is not an internship.
          </h3>
          <p className="text-neutral-600 text-sm sm:text-base">
            Traditional internships teach you how a company works. We show you how companies are built.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              normal: "A normal internship gives you a role.",
              unfounded: "We give you a problem.",
              icon: Target,
            },
            {
              normal: "A normal internship gives you tasks.",
              unfounded: "We give you an outcome.",
              icon: Zap,
            },
            {
              normal: "A normal internship teaches you how a company works.",
              unfounded: "We show you how companies are built.",
              icon: Rocket,
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-neutral-200 bg-neutral-50/60 hover:bg-neutral-50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center mb-6 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-xs uppercase tracking-wider text-neutral-400 mb-1 font-semibold">
                    Traditional Internship
                  </div>
                  <p className="text-neutral-400 line-through text-sm mb-6">
                    {item.normal}
                  </p>
                  <div className="text-xs uppercase tracking-wider text-black font-bold mb-1">
                    Unfounded Fellowship
                  </div>
                  <p className="text-black font-medium text-xl leading-snug">
                    {item.unfounded}
                  </p>
                </div>
                <div className="text-xs text-neutral-500 pt-6 border-t border-neutral-200 mt-6">
                  You&apos;ll work directly with Unfounded founders and venture teams.
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Who Are We Looking For? (With Magic UI BorderBeam on Hybrid) */}
      <section className="py-24 px-6 max-w-6xl mx-auto border-b border-neutral-200">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
            The Three Archetypes
          </span>
          <h3
            className="text-4xl sm:text-6xl text-black font-normal mt-2 mb-4"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Who are we looking for?
          </h3>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            You don&apos;t need a perfect resume. You don&apos;t need a 9.9 CGPA.
            You don&apos;t need ten certificates. You need proof that you can make things happen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Product Builders */}
          <div className="p-8 rounded-2xl border border-neutral-200 bg-white shadow-sm flex flex-col justify-between hover:border-black/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-6">
                <Code className="w-6 h-6" />
              </div>
              <h4
                className="text-3xl text-black font-normal mb-3"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Product Builders
              </h4>
              <p className="text-neutral-600 text-sm mb-6 leading-relaxed">
                You love turning ideas into products. You code. You prototype.
                You design. You experiment with AI. You make things.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-neutral-600 border-t border-neutral-200 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                <span>Full Stack &amp; AI-first interfaces</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                <span>Rapid 7-day prototyping</span>
              </li>
            </ul>
          </div>

          {/* Distribution Builders */}
          <div className="p-8 rounded-2xl border border-neutral-200 bg-white shadow-sm flex flex-col justify-between hover:border-black/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h4
                className="text-3xl text-black font-normal mb-3"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Distribution Builders
              </h4>
              <p className="text-neutral-600 text-sm mb-6 leading-relaxed">
                You know how to get attention. You create content. You sell.
                You build communities. You understand social media. You can
                turn zero into the first 100 users.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-neutral-600 border-t border-neutral-200 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                <span>Performance &amp; organic growth loops</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                <span>Zero to 100 customer conversion</span>
              </li>
            </ul>
          </div>

          {/* Hybrid Builders (Featured with BorderBeam) */}
          <div className="relative p-8 rounded-2xl border-2 border-black bg-neutral-900 text-white shadow-2xl flex flex-col justify-between overflow-hidden">
            <BorderBeam size={250} duration={12} delay={0} colorFrom="#ffffff" colorTo="#60a5fa" />
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-semibold uppercase tracking-widest mb-6">
                Highest Leverage • Rare
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center mb-6">
                <Flame className="w-6 h-6 text-amber-400" />
              </div>
              <h4
                className="text-3xl text-white font-normal mb-3"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Hybrid Builders
              </h4>
              <p className="text-neutral-300 text-sm mb-6 leading-relaxed">
                You can do both. You can build something... and then get people
                to use it. These are rare. We&apos;re actively hunting for them.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-neutral-400 border-t border-neutral-800 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                <span>Full product-to-distribution cycle</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                <span>Fast track to Founder / Venture Lead</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. What You'll Actually Do: 10 Sprints */}
      <section className="py-24 px-6 max-w-6xl mx-auto border-b border-neutral-200">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
            Actionable Outcomes
          </span>
          <h3
            className="text-4xl sm:text-6xl text-black font-normal mt-2 mb-4"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            What you&apos;ll actually do
          </h3>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            You won&apos;t spend 12 weeks making PowerPoints. You&apos;ll work on
            real problems across the Unfounded ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {[
            { task: "Build an MVP in 7 days", tag: "Speed" },
            { task: "Get 50 real customers", tag: "Sales" },
            { task: "Run a ₹5,000 growth experiment", tag: "Capital" },
            { task: "Build an AI automation", tag: "Tech" },
            { task: "Design a product from scratch", tag: "Design" },
            { task: "Call 100 businesses", tag: "Distribution" },
            { task: "Build an active community", tag: "Audience" },
            { task: "Launch a live campaign", tag: "Marketing" },
            { task: "Fix something that's broken", tag: "Systems" },
            { task: "Find a market nobody noticed", tag: "Discovery" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-neutral-200 bg-neutral-50 hover:bg-white hover:border-black hover:shadow-md transition-all flex flex-col justify-between"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
                {item.tag}
              </span>
              <p className="text-black font-semibold text-sm leading-snug">
                {item.task}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-sm text-neutral-500 font-medium">
          The problems are real. The deadlines are real. The results are real.
        </div>
      </section>

      {/* 8. The 12-Week Journey (Interactive Tabs) */}
      <section id="journey" className="py-24 px-6 border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
              The Roadmap
            </span>
            <h3
              className="text-4xl sm:text-6xl text-black font-normal mt-2 mb-4"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              The 12-Week Journey
            </h3>
            <p className="text-neutral-600 text-sm sm:text-base">
              From entering the venture engine to pitching for the ₹1,00,000 Unfounded Grant.
            </p>
          </div>

          {/* Week Selector Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
            {WEEKS.map((w, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveWeekTab(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  activeWeekTab === idx
                    ? "bg-black text-white shadow-md"
                    : "bg-white text-neutral-600 hover:text-black border border-neutral-200"
                }`}
              >
                {w.period}
              </button>
            ))}
          </div>

          {/* Active Tab Card */}
          <div className="p-8 sm:p-12 rounded-3xl border border-neutral-200 bg-white max-w-4xl mx-auto shadow-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 block">
              {WEEKS[activeWeekTab].period}
            </span>
            <h4
              className="text-3xl sm:text-5xl text-black font-normal mb-4"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {WEEKS[activeWeekTab].title}
            </h4>
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-8">
              {WEEKS[activeWeekTab].summary}
            </p>
            <div className="space-y-3 pt-6 border-t border-neutral-200">
              {WEEKS[activeWeekTab].points.map((pt, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-neutral-600">
                  <CheckCircle2 className="w-4 h-4 text-black mt-0.5 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. The Build Challenge & Selection */}
      <section id="selection" className="py-24 px-6 max-w-6xl mx-auto border-b border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Unfounded Build Day */}
          <div className="p-8 sm:p-12 rounded-3xl border border-neutral-200 bg-neutral-50">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 block mb-2">
              The Admission Gate
            </span>
            <h3
              className="text-3xl sm:text-5xl text-black font-normal mb-6"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              The Build Challenge: Unfounded Build Day
            </h3>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
              Before entering the Fellowship, you have to earn your place.
              We don&apos;t want to know what you <em className="italic text-black font-semibold">say</em> you can do.
              We want to see what you can make happen.
            </p>
            <div className="space-y-2.5 text-xs sm:text-sm text-neutral-700 mb-8 font-medium">
              <div className="p-3 rounded-xl bg-white border border-neutral-200">
                ⚡ A real problem with limited time
              </div>
              <div className="p-3 rounded-xl bg-white border border-neutral-200">
                ⚡ A room full of ambitious students
              </div>
              <div className="p-3 rounded-xl bg-white border border-neutral-200">
                ⚡ Code it, design it, sell it, market it, use AI
              </div>
            </div>
            <p className="text-black font-serif italic text-lg">
              &ldquo;At the end: Show us. The strongest builders move forward.&rdquo;
            </p>
          </div>

          {/* Selection Criteria */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 block mb-2">
              Selection Compass
            </span>
            <h3
              className="text-3xl sm:text-5xl text-black font-normal mb-6"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              How We Select
            </h3>
            <p className="text-neutral-600 text-sm mb-6 leading-relaxed">
              We don&apos;t select based on college brand. We don&apos;t select based
              on certificates. We don&apos;t select based on who has the longest resume.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Building", desc: "Can you make something real?" },
                { label: "Distribution", desc: "Can you make people care?" },
                { label: "Speed", desc: "Ideas to action velocity." },
                { label: "Ownership", desc: "When nobody gives instructions." },
                { label: "Learning", desc: "How quickly you adapt & compound." },
                { label: "Taste & Craft", desc: "Recognize what good looks like." },
              ].map((c) => (
                <div
                  key={c.label}
                  className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200"
                >
                  <h5 className="text-black font-semibold text-sm mb-0.5">{c.label}</h5>
                  <p className="text-neutral-500 text-xs">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. The Unfounded Grant (with BorderBeam) */}
      <section id="grant" className="py-24 px-6 max-w-5xl mx-auto border-b border-neutral-200">
        <div className="relative p-8 sm:p-14 rounded-3xl border-2 border-black bg-white text-center shadow-xl overflow-hidden mb-16">
          <BorderBeam size={300} duration={14} delay={2} colorFrom="#000000" colorTo="#2563eb" />
          <AnimatedGridPattern
            numSquares={20}
            maxOpacity={0.08}
            duration={4}
            className="[mask-image:radial-gradient(350px_circle_at_center,white,transparent)] inset-0"
          />
          <div className="relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">
              The Capital Incentive
            </span>
            <h4
              className="text-4xl sm:text-6xl md:text-7xl text-black font-normal mb-4"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              The Unfounded Grant
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-6 my-6 text-black">
            <span className="text-3xl sm:text-5xl font-serif">₹1,00,000</span>
            <span className="text-neutral-300 text-2xl">•</span>
            <span className="text-3xl sm:text-5xl font-serif">90 DAYS</span>
            <span className="text-neutral-300 text-2xl">•</span>
            <span className="text-3xl sm:text-5xl font-serif">ONE PROBLEM</span>
          </div>
          <p className="text-neutral-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            You don&apos;t get the money because you have a good pitch. You earn it
            by showing us that you can build. The goal is to see whether your idea
            deserves to become a company.
          </p>
          </div>
        </div>

        {/* Career Progression Ladder */}
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">
            Where This Can Take You
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold uppercase tracking-wider py-4">
            <span className="px-5 py-2.5 rounded-full bg-neutral-100 text-black border border-neutral-200">
              Fellow
            </span>
            <span className="text-neutral-400">→</span>
            <span className="px-5 py-2.5 rounded-full bg-neutral-100 text-black border border-neutral-200">
              Core Builder
            </span>
            <span className="text-neutral-400">→</span>
            <span className="px-5 py-2.5 rounded-full bg-neutral-100 text-black border border-neutral-200">
              Venture Builder
            </span>
            <span className="text-neutral-400">→</span>
            <span className="px-5 py-2.5 rounded-full bg-neutral-100 text-black border border-neutral-200">
              Venture Lead
            </span>
            <span className="text-neutral-400">→</span>
            <span className="px-5 py-2.5 rounded-full bg-black text-white font-bold">
              Founder
            </span>
          </div>
          <p className="text-neutral-400 text-xs italic mt-2">
            &ldquo;We don&apos;t know where you&apos;ll end up. That&apos;s the point.&rdquo;
          </p>
        </div>
      </section>

      {/* 11. The Ground Rule & Final CTA */}
      <section className="relative py-28 px-6 max-w-5xl mx-auto text-center overflow-hidden">
        <AnimatedGridPattern
          numSquares={25}
          maxOpacity={0.12}
          duration={4}
          className="[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] inset-x-0 inset-y-[-15%] h-[130%]"
        />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 text-xs uppercase tracking-widest text-black font-semibold mb-6 border border-neutral-200">
            <ShieldCheck className="w-3.5 h-3.5 text-black" />
            <span>The Ground Rule</span>
          </div>

          <h3
            className="text-4xl sm:text-6xl md:text-7xl text-black font-normal mb-8 leading-[0.95]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            We don&apos;t care where you study.{" "}
            <span className="italic block sm:inline text-neutral-500">
              We care what you can do.
            </span>
          </h3>

          <div className="p-8 sm:p-12 rounded-3xl bg-neutral-50/90 backdrop-blur-sm border border-neutral-200 text-left max-w-2xl mx-auto mb-12 space-y-4 shadow-sm">
            <div className="text-neutral-700 text-sm">
              We don&apos;t care how impressive your resume looks.{" "}
              <strong className="text-black">We care what you&apos;ve built.</strong>
            </div>
            <div className="text-neutral-700 text-sm">
              We don&apos;t care whether your idea is perfect.{" "}
              <strong className="text-black">We care whether you&apos;re willing to test it.</strong>
            </div>
            <div className="text-neutral-700 text-sm">
              We don&apos;t expect you to know everything.{" "}
              <strong className="text-black">We expect you to figure things out.</strong>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xs uppercase tracking-widest text-neutral-500 font-bold">
              12 WEEKS • 20 PEOPLE • REAL COMPANIES • REAL CONSEQUENCES
            </p>

            <div className="flex justify-center">
              <ShimmerButton
                onClick={onOpenApply}
                background="#000000"
                shimmerColor="#ffffff"
                className="px-12 py-5 font-bold text-sm sm:text-base tracking-wider shadow-2xl"
              >
                <span className="flex items-center gap-3">
                  <span>APPLY TO UNFOUNDED FELLOWSHIP</span>
                  <ArrowRight className="w-5 h-5" />
                </span>
              </ShimmerButton>
            </div>

            <div className="text-xs text-neutral-400 tracking-wider uppercase pt-4 font-semibold">
              BUILD • EXPERIMENT • DISTRIBUTE • COMPOUND
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
