"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface UnfoundedLogoProps {
  className?: string;
  theme?: "light" | "dark";
  showRegistered?: boolean;
  href?: string;
  subtext?: string;
}

export default function UnfoundedLogo({
  className = "",
  theme = "light",
  showRegistered = true,
  href = "/",
  subtext,
}: UnfoundedLogoProps) {
  const content = (
    <div className={`inline-flex items-center gap-2 group select-none ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={theme === "dark" ? "/unfounded-logo-dark.png" : "/unfounded-logo-white.png"}
        alt="unfounded®"
        className="h-7 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
      />
      {subtext && (
        <span
          className={`text-[11px] font-sans uppercase tracking-[0.2em] ml-1.5 ${
            theme === "dark" ? "text-neutral-500" : "text-white/60"
          }`}
        >
          {subtext}
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="cursor-pointer inline-flex items-center">
        {content}
      </Link>
    );
  }

  return content;
}
