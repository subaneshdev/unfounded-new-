"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TeamShowcase from "@/components/ui/team-showcase";

export default function TeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="team"
      ref={ref}
      className="bg-black py-28 md:py-36 px-6 overflow-hidden relative border-t border-white/5"
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,255,255,0.02)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center md:text-left"
        >
          <span className="text-white/40 text-xs tracking-widest uppercase mb-4 block font-medium">
            The Team
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-white font-normal tracking-tight mb-4">
            We’re not hiring. We’re finding{" "}
            <span className="font-serif font-instrument italic text-white/60">
              builders.
            </span>
          </h2>
          <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-2xl">
            If you take ownership, ship daily — you belong here.
          </p>

          <Link
            href="/friends"
            className="mt-6 inline-flex items-center gap-2.5 liquid-glass rounded-full px-7 py-3 text-white text-xs sm:text-sm font-medium hover:bg-white/10 transition-all border border-white/20 hover:border-white/40 shadow-lg shadow-white/5 group cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Join Friends of Unfounded</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <TeamShowcase />
        </motion.div>
      </div>
    </section>
  );
}
