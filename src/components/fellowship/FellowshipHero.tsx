"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import UnfoundedLogo from "@/components/ui/UnfoundedLogo";

interface FellowshipHeroProps {
  onOpenApply: () => void;
}

export default function FellowshipHero({ onOpenApply }: FellowshipHeroProps) {
  const scrollToProgram = () => {
    const el = document.getElementById("fellowship-program");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-black text-white overflow-hidden select-none">
      {/* 1. Fullscreen Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
      />

      {/* 2. Minimalist Header: Logo Only */}
      <header className="relative z-10 w-full px-6 sm:px-10 py-8 max-w-7xl mx-auto flex items-center justify-between">
        <UnfoundedLogo href="/" subtext="Fellowship" />
      </header>

      {/* 3. Hero Centered Content: ONLY Heading + Two Buttons */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto w-full my-auto -translate-y-12 sm:-translate-y-20 md:-translate-y-24">
        {/* Main Heading */}
        <h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] sm:leading-[1.05] tracking-tight max-w-3xl font-normal text-white animate-fade-rise"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Top 1% of college students{" "}
          <span className="italic block sm:inline text-white/85">
            who don&apos;t wait for permission to build.
          </span>
        </h1>

        {/* The Two Buttons */}
        <div className="animate-fade-rise-delay mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center">
          <button
            type="button"
            onClick={onOpenApply}
            className="w-full sm:w-auto bg-white text-black hover:bg-white/90 rounded-full px-12 py-5 text-base font-bold tracking-wider hover:scale-[1.03] transition-all cursor-pointer shadow-2xl flex items-center justify-center gap-3"
          >
            <span>APPLY FOR FELLOWSHIP</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={scrollToProgram}
            className="w-full sm:w-auto liquid-glass rounded-full px-10 py-5 text-base text-white hover:scale-[1.03] transition-transform cursor-pointer font-medium tracking-wide shadow-2xl border border-white/25"
          >
            Explore Program ↓
          </button>
        </div>
      </div>

      {/* Subtle bottom spacer for balanced vertical centering */}
      <div className="relative z-10 pb-8" />
    </section>
  );
}
