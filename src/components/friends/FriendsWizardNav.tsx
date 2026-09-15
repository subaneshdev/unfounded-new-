"use client";

import React from "react";
import Image from "next/image";
import UnfoundedLogo from "@/components/ui/UnfoundedLogo";

interface FriendsWizardNavProps {
  currentStep: number;
  totalSteps: number;
  onStepClick: (stepIndex: number) => void;
  onLogoClick: () => void;
  errorsByStep: Record<number, boolean>;
}

const STEP_LABELS = [
  "Basics",
  "Social",
  "Field",
  "Work",
  "About",
  "Status",
  "Availability",
  "Compensation",
];

export default function FriendsWizardNav({
  currentStep,
  totalSteps,
  onStepClick,
  onLogoClick,
  errorsByStep,
}: FriendsWizardNavProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 px-4 sm:px-6 py-4 flex items-center justify-between pointer-events-none">
      {/* Brand logo */}
      <button
        type="button"
        onClick={onLogoClick}
        className="pointer-events-auto flex items-center cursor-pointer group text-left"
      >
        <UnfoundedLogo href="" subtext="Friends" />
      </button>

      {/* Center Step Pills */}
      <div className="pointer-events-auto liquid-glass rounded-full px-2 py-1.5 flex items-center gap-1 sm:gap-1.5 shadow-xl max-w-[85vw] overflow-x-auto scrollbar-hide">
        {Array.from({ length: totalSteps }).map((_, idx) => {
          const isActive = currentStep === idx;
          const isError = errorsByStep[idx];
          const stepNumber = String(idx + 1).padStart(2, "0");

          return (
            <button
              key={idx}
              type="button"
              onClick={() => onStepClick(idx)}
              className={`rounded-full px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-medium transition-all duration-300 flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                isActive
                  ? "bg-white text-black font-semibold shadow-md"
                  : isError
                  ? "bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 border border-rose-500/30"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {isError && !isActive ? (
                <span className="text-rose-400 font-bold">!</span>
              ) : (
                <span>{stepNumber}</span>
              )}
              {isActive && (
                <span className="hidden sm:inline font-sans">{STEP_LABELS[idx]}</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Founder Avatar Bubble */}
      <div className="pointer-events-auto hidden md:flex items-center gap-2">
        <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/30 shadow-md">
          <Image
            src="/team/subanesh.jpg"
            alt="Founder Avatar"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </nav>
  );
}
