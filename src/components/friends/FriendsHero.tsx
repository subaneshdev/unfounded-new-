"use client";

import React from "react";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

interface FriendsHeroProps {
  onStartWizard: () => void;
  onOpenUpdateProfile: () => void;
}

export default function FriendsHero({
  onStartWizard,
  onOpenUpdateProfile,
}: FriendsHeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-between items-center text-center px-4 py-10 overflow-hidden select-none">
      {/* Exact Hero Background Image - Full original framing, no zoom, no crop */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/friends-hero-bg.jpg"
          alt="Friends of Unfounded"
          className="w-full h-full object-contain object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
      </div>

      {/* Top spacer */}
      <div className="w-full flex justify-end max-w-5xl mx-auto pt-2 relative z-10">
        <button
          type="button"
          onClick={onOpenUpdateProfile}
          className="liquid-glass rounded-full px-5 py-2 text-xs text-white/80 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
        >
          Update your profile
        </button>
      </div>

      {/* Center Content */}
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center my-auto z-10 py-12">
        {/* Title */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white font-serif font-instrument tracking-tight mb-6 drop-shadow-[0_4px_35px_rgba(0,0,0,0.9)]">
          friends of <span className="italic block sm:inline">unfounded</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl text-white font-serif font-instrument tracking-normal mb-10 max-w-xl mx-auto leading-snug drop-shadow-md text-white/90">
          Consult &amp; Collaborate with the Unfounded Venture Lab Grid
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-sm mx-auto">
          <button
            type="button"
            onClick={onStartWizard}
            className="w-full py-4 px-8 rounded-full uppercase tracking-wider text-xs sm:text-sm font-semibold bg-white text-black hover:bg-white/90 transition-all cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95"
          >
            Become a Friend
          </button>

          <button
            type="button"
            onClick={onOpenUpdateProfile}
            className="w-full py-4 px-8 rounded-full uppercase tracking-wider text-xs sm:text-sm font-medium liquid-glass text-white hover:bg-white/10 transition-all cursor-pointer hover:scale-105 active:scale-95"
          >
            Update Profile
          </button>
        </div>
      </div>

      {/* Social Footer */}
      <div className="relative z-10 flex items-center justify-center gap-6 pb-2 text-white/70">
        <a
          href="https://www.instagram.com/unfounded.in/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-white transition-colors p-2"
        >
          <FaInstagram className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/company/unfoundedventurelab"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-white transition-colors p-2"
        >
          <FaLinkedinIn className="w-5 h-5" />
        </a>
        <a
          href="https://x.com/CSubanesh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter / X"
          className="hover:text-white transition-colors p-2"
        >
          <FaTwitter className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
