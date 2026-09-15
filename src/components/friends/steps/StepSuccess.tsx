"use client";

import React from "react";
import Link from "next/link";
import type { FriendsFormData } from "@/types/friends";
import { CheckCircle2, ArrowRight, Share2 } from "lucide-react";

interface StepSuccessProps {
  data: FriendsFormData;
  applicantId?: string;
  onReset: () => void;
}

export default function StepSuccess({
  data,
  applicantId = "FOU-BUILDER",
  onReset,
}: StepSuccessProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Friends of Unfounded",
          text: "Join the Friends of Unfounded talent and venture grid.",
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center text-center py-6">
      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white border border-white/20 shadow-lg shadow-white/10">
        <CheckCircle2 className="w-8 h-8 text-white" />
      </div>

      <h2 className="text-4xl sm:text-5xl md:text-6xl text-white font-serif font-instrument mb-3 tracking-tight">
        You&apos;re on the grid.
      </h2>
      <p className="text-white/70 text-sm sm:text-base mb-8 max-w-md">
        Welcome to <strong className="text-white font-semibold">Friends of Unfounded</strong>. We review every application personally.
      </p>

      {/* Summary Card */}
      <div className="liquid-glass rounded-3xl p-6 sm:p-8 w-full text-left space-y-4 mb-8">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <span className="text-xs text-white/40">Reference Code</span>
          <span className="font-mono text-xs text-white/90 bg-white/10 px-2 py-0.5 rounded-md">
            {applicantId}
          </span>
        </div>

        <div>
          <span className="text-xs text-white/40 block">Name</span>
          <span className="text-sm font-medium text-white">{data.fullName}</span>
        </div>

        <div>
          <span className="text-xs text-white/40 block">Disciplines & Roles</span>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {data.selectedRoles.length > 0 ? (
              data.selectedRoles.slice(0, 4).map((role) => (
                <span
                  key={role}
                  className="px-2.5 py-1 rounded-full text-[11px] bg-white/10 text-white/90"
                >
                  {role}
                </span>
              ))
            ) : (
              <span className="text-xs text-white/60">
                {data.selectedCategories.join(", ") || "Generalist"}
              </span>
            )}
            {data.selectedRoles.length > 4 && (
              <span className="text-[11px] text-white/40 self-center">
                +{data.selectedRoles.length - 4} more
              </span>
            )}
          </div>
        </div>

        <div>
          <span className="text-xs text-white/40 block">Availability</span>
          <span className="text-sm text-white/80">
            {data.weeklyAvailability || "Flexible"}
          </span>
        </div>

        <div className="pt-3 border-t border-white/10">
          <p className="text-xs text-white/50 leading-relaxed">
            When an in-house venture or high-impact consulting sprint matches your stack and rates, the founders will ping you directly on WhatsApp or Email.
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
        <Link
          href="/"
          className="liquid-glass hover:bg-white/10 w-full sm:flex-1 py-3.5 px-6 rounded-full text-white text-sm font-medium transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
        >
          <span>Return Home</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <button
          type="button"
          onClick={handleShare}
          className="bg-white text-black hover:bg-white/90 w-full sm:flex-1 py-3.5 px-6 rounded-full text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-white/10"
        >
          <Share2 className="w-4 h-4" />
          <span>Share with a Builder</span>
        </button>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="mt-6 text-xs text-white/40 hover:text-white transition-colors cursor-pointer underline"
      >
        Submit another application
      </button>
    </div>
  );
}
