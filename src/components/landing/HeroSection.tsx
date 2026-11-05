"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Globe, ArrowRight } from "lucide-react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { SOCIAL_LINKS } from "@/lib/social";
import SiteHeader from "@/components/ui/SiteHeader";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const isFadingOutRef = useRef<boolean>(false);

  const animateOpacity = (
    video: HTMLVideoElement,
    from: number,
    to: number,
    duration: number = 500,
    onComplete?: () => void
  ) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      video.style.opacity = (from + (to - from) * progress).toString();
      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(step);
      } else {
        if (onComplete) onComplete();
      }
    };
    animationFrameRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      video.play().catch(() => {});
      animateOpacity(video, 0, 1, 500);
    };

    const handleTimeUpdate = () => {
      if (!video.duration) return;
      const remaining = video.duration - video.currentTime;
      if (remaining <= 0.55 && !isFadingOutRef.current) {
        isFadingOutRef.current = true;
        const currentOpacity = parseFloat(video.style.opacity) || 1;
        animateOpacity(video, currentOpacity, 0, 500);
      }
    };

    const handleEnded = () => {
      video.style.opacity = "0";
      setTimeout(() => {
        video.currentTime = 0;
        isFadingOutRef.current = false;
        video.play().then(() => {
          animateOpacity(video, 0, 1, 500);
        }).catch(() => {});
      }, 100);
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    if (video.readyState >= 3) {
      handleCanPlay();
    }

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section className="min-h-screen overflow-hidden relative flex flex-col bg-black justify-between select-none">
      {/* Background video */}
      <video
        ref={videoRef}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
        muted
        autoPlay
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none"
        style={{ opacity: 0 }}
      />

      {/* Navbar */}
      <SiteHeader currentPath="/" />

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[8%] sm:-translate-y-[12%] max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight font-serif font-instrument mb-6 leading-[1.02]">
          We build what <span className="italic">doesn’t exist.</span>
        </h1>

        <p className="text-white/80 text-base sm:text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto mb-10">
          We find problems worth solving, build from first principles, and turn bold ideas into companies that matter.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#services"
            className="liquid-glass rounded-full px-8 py-4 text-white text-sm sm:text-base font-semibold hover:bg-white/15 transition-all flex items-center gap-2.5 group border border-white/30 hover:border-white/60 shadow-xl shadow-white/5 cursor-pointer hover:scale-105"
          >
            <span>Explore our ventures</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Social icons footer */}
      <div className="relative z-10 flex justify-center gap-4 pb-12">
        <a
          href={SOCIAL_LINKS.instagram}
          target="_blank"
          rel="noreferrer"
          aria-label="Unfounded on Instagram"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center cursor-pointer"
        >
          <FaInstagram className="w-5 h-5" />
        </a>
        <a
          href={SOCIAL_LINKS.twitter}
          target="_blank"
          rel="noreferrer"
          aria-label="Unfounded on X (Twitter)"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center cursor-pointer"
        >
          <FaTwitter className="w-5 h-5" />
        </a>
        <a
          href="#"
          aria-label="Website"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center cursor-pointer"
        >
          <Globe className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
