"use client";

import React from "react";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import UnfoundedLogo from "@/components/ui/UnfoundedLogo";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 py-16 px-6 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <UnfoundedLogo href="/" />
          <p className="text-white/40 text-xs tracking-wide mt-2">
            The Venture Machine. We build and scale companies.
          </p>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/70">
          <Link
            href="/fellowship"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            Fellowship
          </Link>
          <Link
            href="/friends"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Friends of Unfounded
          </Link>
          <a href="#services" className="hover:text-white transition-colors">
            Ventures
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
        </nav>

        {/* Social & copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-4 text-white/60">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors p-2 liquid-glass rounded-full"
            >
              <FaTwitter className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors p-2 liquid-glass rounded-full"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
          </div>
          <span className="text-[11px] text-white/30 tracking-wider">
            © {new Date().getFullYear()} UNFOUNDED. ALL RIGHTS RESERVED.
          </span>
        </div>
      </div>
    </footer>
  );
}
