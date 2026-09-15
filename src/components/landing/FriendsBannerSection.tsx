"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles, Code, Palette, TrendingUp, Megaphone, Video, Zap } from "lucide-react";

const DISCIPLINES = [
  { label: "Developers", icon: Code, desc: "Next.js, Full Stack, AI & Systems" },
  { label: "Designers", icon: Palette, desc: "Product, UI/UX, 3D & Motion" },
  { label: "Marketers", icon: TrendingUp, desc: "GTM, PMM & Brand Strategy" },
  { label: "Digital Marketers", icon: Megaphone, desc: "Performance Ads, SEO & Growth" },
  { label: "Influencers", icon: Video, desc: "Tech Creators & Video Hosts" },
  { label: "Generalists", icon: Zap, desc: "Can Code, Design & Sell" },
];

export default function FriendsBannerSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-black py-24 md:py-32 px-6 overflow-hidden relative border-t border-white/5"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="liquid-glass rounded-3xl p-8 sm:p-12 md:p-16 border border-white/20 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle decorative glow */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>The Venture Collaboration Grid</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl text-white font-serif font-instrument tracking-tight mb-6">
              friends of <em className="italic font-serif font-instrument text-white/80">unfounded</em>
            </h2>

            <p className="text-white/70 text-base sm:text-lg md:text-xl leading-relaxed mb-8">
              We partner with independent builders across Development, Design, Growth, Digital Marketing, and Content for high-impact venture sprints and micro-SaaS launches.
            </p>

            {/* Discipline tags grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
              {DISCIPLINES.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-white">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-white text-xs sm:text-sm font-medium">
                        {item.label}
                      </h4>
                      <p className="text-white/40 text-[11px] leading-tight mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA action buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/friends"
                className="bg-white text-black hover:bg-white/90 py-4 px-8 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 group shadow-xl shadow-white/10 cursor-pointer"
              >
                <span>Become a Friend</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/friends"
                className="liquid-glass hover:bg-white/10 text-white py-4 px-8 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer"
              >
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
