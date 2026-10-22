"use client";

import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { curriculum, fellowOpportunities } from "@/lib/nights-and-weekends";

export default function FellowshipManifesto() {
  return (
    <div className="bg-white text-black">
      <section id="fellowship-program" className="max-w-6xl mx-auto px-6 py-24 md:py-32 scroll-mt-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6">The program</p>
            <h2 className="font-instrument text-5xl sm:text-7xl leading-[1.03]">Learn the fundamentals.<br /><span className="italic text-neutral-500">Make them matter.</span></h2>
          </div>
          <div className="space-y-5 text-neutral-600 leading-relaxed lg:pt-10">
            <p>Unfounded Nights &amp; Weekends is a free online hackathon across Tamil Nadu where ambitious students, developers, engineers and aspiring founders learn advanced skills, work on real startup problems, and compete for a place in the <strong className="text-black">Unfounded Fellowship Track</strong>.</p>
            <p>Participants learn through structured technical resources, hands-on projects, practical GTM challenges and real implementation across Unfounded’s ventures, including <strong className="text-black">Ziggers and Ziggers Execute</strong>.</p>
            <Link href="/nights-and-weekends#six-weeks" className="inline-flex gap-2 items-center text-sm text-black border-b border-black pb-1">See the six-week S0 journey <ArrowUpRight className="size-4" /></Link>
          </div>
        </div>
        <div className="rounded-3xl bg-neutral-100 px-7 py-6 flex flex-col sm:flex-row justify-between gap-4">
          <p className="font-instrument text-3xl">Engineering meets distribution.</p>
          <p className="text-sm text-neutral-600 max-w-sm leading-relaxed">Eight areas of practice. Working products, real conversations and evidence of impact.</p>
        </div>
      </section>

      <section id="curriculum" className="bg-black text-white px-6 py-24 md:py-32 scroll-mt-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-6 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-5">The curriculum / 01—08</p>
              <h2 className="font-instrument text-5xl sm:text-7xl">Build depth. <span className="italic text-white/60">Then build reach.</span></h2>
            </div>
            <p className="text-sm text-white/55 shrink-0">Open an area to explore.</p>
          </div>
          <div className="border-t border-white/20">
            {curriculum.map((module, index) => (
              <details key={module.title} open={index === 0} className="group border-b border-white/20">
                <summary className="list-none cursor-pointer py-7 sm:py-9 flex items-center gap-4 sm:gap-8 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white [&::-webkit-details-marker]:hidden">
                  <span className="text-xs tabular-nums text-white/40 shrink-0">0{index + 1}</span>
                  <h3 className="font-instrument text-2xl sm:text-4xl flex-1">{module.title}</h3>
                  <Plus aria-hidden="true" className="size-5 shrink-0 text-white/60 transition-transform group-open:rotate-45 motion-reduce:transition-none" />
                </summary>
                <div className="pb-9 sm:pl-12 grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-16">
                  <div>
                    <p className="text-white/70 leading-relaxed mb-6">{module.description}</p>
                    <ul className="space-y-3 text-sm text-white/65 leading-relaxed">
                      {module.topics.map((topic) => (
                        <li key={topic} className="flex gap-3"><span className="mt-2 size-1 shrink-0 rounded-full bg-white/40" aria-hidden="true" /><span>{topic}</span></li>
                      ))}
                    </ul>
                  </div>
                  <div className="liquid-glass rounded-2xl p-7 self-start">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-blue-200 mb-4">{module.outcomeLabel}</p>
                    <p className="font-instrument text-2xl sm:text-3xl leading-snug">{module.outcome}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="fellowship-track" className="max-w-6xl mx-auto px-6 py-24 md:py-32 grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6">What comes next</p>
          <h2 className="font-instrument text-5xl sm:text-7xl leading-[1.03]">The Unfounded <span className="italic text-neutral-500">Fellowship.</span></h2>
          <p className="mt-7 text-neutral-600 leading-relaxed">The strongest participants earn the opportunity to enter the offline Unfounded Fellowship Track in Chennai based on demonstrated ability, consistency and impact. There is no participation fee.</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Demonstrated ability", "Consistency", "Impact"].map((label) => <span key={label} className="px-4 py-2 rounded-full border border-neutral-200 text-xs text-neutral-600">{label}</span>)}
          </div>
        </div>
        <div className="rounded-3xl bg-neutral-100 p-7 sm:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-7">Fellows may get opportunities to</p>
          <ul className="divide-y divide-neutral-200">
            {fellowOpportunities.map((opportunity) => <li key={opportunity} className="py-5 first:pt-0 last:pb-0 flex gap-4 text-neutral-700 leading-relaxed"><ArrowUpRight className="size-4 shrink-0 mt-1 text-neutral-400" /><span>{opportunity}</span></li>)}
          </ul>
        </div>
      </section>
      <section className="border-t border-neutral-200 px-6 py-24 md:py-32 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-7">Learn. Build. Sell. Scale.</p>
        <h2 className="font-instrument text-5xl sm:text-7xl leading-[1.04] max-w-3xl mx-auto">Show your work.<br /><span className="italic text-neutral-500">Earn your place.</span></h2>
        <p className="max-w-2xl mx-auto mt-7 text-neutral-600 leading-relaxed">The principle is simple: learn the fundamentals, apply them to real problems, demonstrate your work, and earn the opportunity to build with Unfounded.</p>
        <p className="mt-9 inline-block rounded-full bg-neutral-100 text-neutral-600 px-8 py-4 text-sm font-semibold">Registration opening soon</p>
      </section>
    </div>
  );
}
