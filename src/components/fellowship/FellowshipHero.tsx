"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import SiteHeader from "@/components/ui/SiteHeader";

interface FellowshipHeroProps {
  overview?: boolean;
}

export default function FellowshipHero({ overview = false }: FellowshipHeroProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsVideoLoaded(true);
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("playing", handleCanPlay);

    if (video.readyState >= 3) {
      setIsVideoLoaded(true);
    }

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("playing", handleCanPlay);
    };
  }, []);

  return (
    <section className="relative min-h-[90svh] flex flex-col bg-[#071322] text-white overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        onCanPlay={() => setIsVideoLoaded(true)}
        onPlaying={() => setIsVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover pointer-events-none motion-reduce:hidden transition-opacity duration-700 ease-out ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
        src={overview
          ? "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
          : "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4"}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/80" />
      <SiteHeader currentPath={overview ? "/nights-and-weekends" : "/fellowship"} showNightsAndWeekends={overview} />
      <div className="relative flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-10 sm:py-20 max-w-5xl mx-auto w-full">
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-white/80 mb-8 flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
          {overview ? "Unfounded S0 · Track 1 · Six weeks" : "The Unfounded Fellowship Track"}
        </p>
        <h1 className="font-instrument text-4xl sm:text-7xl md:text-8xl lg:text-[112px] leading-[0.98] break-words tracking-tight font-normal">
          <span className="block">Unfounded</span>
          <span className="italic block text-white/90">{overview ? "Nights & Weekends." : "Fellowship."}</span>
        </h1>
        <p className="mt-8 text-lg sm:text-2xl text-white/85 font-light">
          {overview ? "Learn. Build. Ship. Earn your place." : "Learn. Build. Sell. Scale."}
        </p>
        <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-white/70">
          {overview
            ? "An idea you can’t leave alone. A few hours after everything else. Six weeks to make something real."
            : "Advanced skills. Real startup problems. A chance to earn your place in the Unfounded Fellowship Track."}
        </p>
        <p className="mt-5 text-xs sm:text-sm uppercase tracking-widest text-blue-200">
          {overview ? "Online · Across Tamil Nadu · No participation fee" : "Offline · Chennai · No participation fee"}
        </p>
        <div className="mt-9 flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-3 w-full sm:w-auto">
          <span className="w-full sm:w-auto rounded-full bg-white/15 text-white/80 px-8 py-4 text-sm font-semibold text-center">Registration opening soon</span>
          {overview ? (
            <Link href="/fellowship" className="w-full sm:w-auto rounded-full bg-white text-black px-8 py-4 text-sm font-semibold flex justify-center items-center gap-3 hover:bg-white/90 transition-colors">
              Explore the builder program <ArrowUpRight className="size-4" />
            </Link>
          ) : (
            <a href="#fellowship-track" className="w-full sm:w-auto rounded-full bg-white text-black px-8 py-4 text-sm font-semibold flex justify-center items-center gap-3 hover:bg-white/90 transition-colors">
              Explore the fellowship <ArrowUpRight className="size-4" />
            </a>
          )}
          <a href={overview ? "#six-weeks" : "#fellowship-program"} className="w-full sm:w-auto liquid-glass rounded-full px-8 py-4 text-sm font-medium flex justify-center items-center gap-3 hover:bg-white/10 transition-colors">
            {overview ? "How it works" : "Explore the curriculum"} <ArrowDown className="size-4" />
          </a>
        </div>
      </div>
      <div className="relative max-w-6xl mx-auto w-full px-6 pb-8 flex flex-wrap justify-between gap-3 text-[10px] uppercase tracking-[0.2em] text-white/60">
        <span>{overview ? "Learn during the week. Build on weekends." : "Demonstrated ability. Consistency. Impact."}</span>
        <span>Ship real code. Show your work.</span>
      </div>
    </section>
  );
}
