import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FellowshipHero from "@/components/fellowship/FellowshipHero";
import Footer from "@/components/landing/Footer";
import { weeks } from "@/lib/nights-and-weekends";

export const metadata: Metadata = {
  title: "Unfounded S0 | Nights & Weekends",
  description: "A free online hackathon across Tamil Nadu. Build, launch and find your first audience with Unfounded Nights & Weekends S0. Registration opening soon.",
  alternates: { canonical: "https://unfounded.in/nights-and-weekends" },
  openGraph: {
    title: "Unfounded S0 — Nights & Weekends",
    description: "Free online hackathon across Tamil Nadu. Registration opening soon.",
    url: "https://unfounded.in/nights-and-weekends",
    images: ["/unfounded-team.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unfounded S0 — Nights & Weekends",
    description: "Free online hackathon across Tamil Nadu. Registration opening soon.",
    images: ["/unfounded-team.jpg"],
  },
};

export default function NightsAndWeekendsPage() {
  return (
    <main className="bg-white text-black selection:bg-blue-100">
      <FellowshipHero overview />
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32 grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-20">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6">Introducing Nights &amp; Weekends</p>
          <h2 className="font-instrument text-4xl sm:text-6xl leading-[1.08]">
            Don’t just learn how technology works. <span className="italic text-neutral-500">Build something that works.</span>
          </h2>
          <p className="mt-6 text-lg">And learn to distribute it.</p>
        </div>
        <div className="space-y-5 text-neutral-600 leading-relaxed lg:pt-10">
          <p>We’re starting Unfounded Nights &amp; Weekends, a free online hackathon across Tamil Nadu, for people who want to go deeper into engineering, experiment with ambitious ideas and build real products.</p>
          <p>You’ll get access to structured technical learning across AI engineering, machine learning, system design, mathematical foundations and production software engineering.</p>
          <p className="text-black font-medium">But learning is only the beginning.</p>
          <p>Apply what you learn by building real features for <strong className="text-black">Ziggers and Ziggers Execute</strong>, working on problems around gig work, geospatial intelligence, location-based advertising and applied AI.</p>
        </div>
      </section>

      <section id="six-weeks" className="bg-black text-white px-6 py-24 md:py-32 scroll-mt-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-5">S0 / Track 1</p>
              <h2 className="font-instrument text-5xl sm:text-7xl">Six weeks. <span className="italic text-white/60">Make it real.</span></h2>
            </div>
            <p className="text-white/60 text-sm max-w-xs leading-relaxed">From the idea in your notes to something people can use, hear, play or buy.</p>
          </div>
          <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {weeks.map((week, index) => (
              <li key={week.title} className="liquid-glass rounded-3xl p-7 sm:p-8 flex flex-col">
                <div className="flex justify-between items-center mb-10">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-white/60">Week {index + 1}</span>
                  <span className="font-instrument text-4xl text-white/25" aria-hidden="true">0{index + 1}</span>
                </div>
                <h3 className="font-instrument text-3xl mb-4">{week.title}</h3>
                <p className="text-sm leading-relaxed text-white/65 flex-1">{week.description}</p>
                <p className="text-xs text-white/85 border-t border-white/10 mt-8 pt-5">{week.outcome}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 md:gap-20">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6">Curiosity. Consistency. Proof.</p>
          <h2 className="font-instrument text-5xl sm:text-6xl leading-[1.05]">You don’t need to know everything <span className="italic text-neutral-500">before you start.</span></h2>
        </div>
        <div className="space-y-5 text-neutral-600 leading-relaxed">
          <p>We’re looking for people who are curious, consistent and willing to figure things out by building. You need to be willing to learn, experiment and ship.</p>
          <p>At the end, participants will present what they’ve built. The strongest builders will earn the opportunity to join the <strong className="text-black">offline Unfounded Fellowship Track in Chennai</strong>.</p>
          <Link href="/fellowship#fellowship-program" className="inline-flex items-center gap-3 text-black font-medium border-b border-black pb-2">Explore the curriculum and fellowship pathway <ArrowUpRight className="size-4 shrink-0" /></Link>
        </div>
      </section>
      <section className="px-6 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto rounded-3xl bg-neutral-100 px-6 py-16 sm:p-20 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-7">Your work is your introduction</p>
          <h2 className="font-instrument text-4xl sm:text-6xl leading-[1.1] max-w-3xl mx-auto">Your next opportunity shouldn’t come from what you say you can do. <span className="italic text-neutral-500">It should come from what you build.</span></h2>
          <p className="mt-7 text-sm font-medium text-neutral-600">Online across Tamil Nadu. No participation fee. Registration opening soon.</p>
          <Link href="/fellowship" className="mt-9 inline-flex items-center gap-3 rounded-full bg-black text-white px-8 py-4 text-sm font-semibold hover:bg-neutral-800 transition-colors">Find your place <ArrowUpRight className="size-4" /></Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
