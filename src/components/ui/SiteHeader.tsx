"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import UnfoundedLogo from "@/components/ui/UnfoundedLogo";

interface SiteHeaderProps {
  currentPath?: string;
  className?: string;
  showNightsAndWeekends?: boolean;
}

export default function SiteHeader({ currentPath = "/", className = "", showNightsAndWeekends = true }: SiteHeaderProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className={`relative z-30 px-4 sm:px-8 py-5 w-full ${className}`}>
      <nav className="liquid-glass rounded-full max-w-6xl mx-auto px-5 sm:px-7 py-3 flex items-center justify-between border border-white/15 shadow-2xl backdrop-blur-xl">
        {/* Brand Logo */}
        <div className="flex items-center">
          <UnfoundedLogo href="/" />

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-7 ml-8">
            <Link
              href="/fellowship"
              className={`text-sm font-medium transition-colors flex items-center gap-1.5 ${
                currentPath === "/fellowship"
                  ? "text-white font-semibold"
                  : "text-white/70 hover:text-white"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
              <span>Fellowship</span>
            </Link>
            <Link
              href="/friends"
              className={`text-sm font-medium transition-colors flex items-center gap-1.5 ${
                currentPath === "/friends"
                  ? "text-white font-semibold"
                  : "text-white/70 hover:text-white"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Friends</span>
            </Link>
            <Link
              href="/#about"
              className="text-white/70 hover:text-white text-sm font-medium transition-colors"
            >
              About
            </Link>
          </div>
        </div>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {showNightsAndWeekends && <Link
            href="/nights-and-weekends"
            className="liquid-glass rounded-full px-4 py-2 text-xs font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all border border-white/20 hidden md:inline-flex items-center gap-1.5"
          >
            <span>Nights &amp; Weekends</span>
          </Link>}
          <Link
            href="/friends"
            className="bg-white text-black hover:bg-white/90 rounded-full px-4 sm:px-5 py-2 text-xs font-bold transition-all hover:scale-105 shadow-md flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Join Network</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="p-2 text-white/80 hover:text-white rounded-full xl:hidden liquid-glass border border-white/15"
            aria-label="Toggle Navigation"
            aria-expanded={isMobileOpen}
            aria-controls="site-mobile-navigation"
          >
            {isMobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div id="site-mobile-navigation" className="xl:hidden mt-3 max-w-6xl mx-auto liquid-glass rounded-3xl p-5 border border-white/15 shadow-2xl backdrop-blur-2xl flex flex-col gap-4 animate-fade-rise">
          {showNightsAndWeekends && <Link
            href="/nights-and-weekends"
            onClick={() => setIsMobileOpen(false)}
            className="text-sm font-medium text-white/90 hover:text-white py-1 flex items-center justify-between"
          >
            <span>Nights &amp; Weekends · S0</span>
            <ArrowRight className="w-4 h-4 text-white/50" />
          </Link>}
          <Link
            href="/fellowship"
            onClick={() => setIsMobileOpen(false)}
            className="text-sm font-medium text-white/90 hover:text-white py-1 flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              Fellowship
            </span>
            <ArrowRight className="w-4 h-4 text-white/50" />
          </Link>
          <Link
            href="/friends"
            onClick={() => setIsMobileOpen(false)}
            className="text-sm font-medium text-white/90 hover:text-white py-1 flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Friends of Unfounded
            </span>
            <ArrowRight className="w-4 h-4 text-white/50" />
          </Link>
          <Link
            href="/#about"
            onClick={() => setIsMobileOpen(false)}
            className="text-sm font-medium text-white/90 hover:text-white py-1 flex items-center justify-between"
          >
            <span>About</span>
            <ArrowRight className="w-4 h-4 text-white/50" />
          </Link>
        </div>
      )}
    </header>
  );
}
