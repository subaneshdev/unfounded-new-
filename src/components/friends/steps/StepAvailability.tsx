"use client";

import React from "react";
import type { FriendsFormData } from "@/types/friends";
import { Check, Clock } from "lucide-react";

interface StepProps {
  data: FriendsFormData;
  updateData: (fields: Partial<FriendsFormData>) => void;
}

const AVAILABILITY_OPTIONS = [
  {
    title: "Less than 10 hours/week",
    desc: "Advisory, code review, targeted design feedback, or micro-consulting.",
  },
  {
    title: "10–20 hours/week",
    desc: "Part-time contributor for focused sprints and feature builds.",
  },
  {
    title: "20–30 hours/week",
    desc: "Substantial commitment, leading major venture modules or growth initiatives.",
  },
  {
    title: "Full-time (40+ hours/week)",
    desc: "Dedicated core team member or venture lead.",
  },
  {
    title: "Fully flexible / Sprint bursts",
    desc: "Available for intense 1–2 week sprints on demand.",
  },
];

export default function StepAvailability({ data, updateData }: StepProps) {
  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center text-center">
      <h2 className="text-4xl sm:text-5xl md:text-6xl text-white font-serif font-instrument mb-3 tracking-tight">
        How much time can you realistically give?
      </h2>
      <p className="text-white/60 text-sm md:text-base mb-8">
        We value honesty over over-promising. Set expectations clearly.
      </p>

      <div className="w-full space-y-3 text-left">
        {AVAILABILITY_OPTIONS.map((option) => {
          const isSelected = data.weeklyAvailability === option.title;
          return (
            <button
              key={option.title}
              type="button"
              onClick={() => updateData({ weeklyAvailability: option.title })}
              className={`w-full p-5 rounded-3xl transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 text-left ${
                isSelected
                  ? "bg-white/15 border border-white/50 shadow-lg shadow-white/5 ring-1 ring-white/30"
                  : "liquid-glass hover:bg-white/[0.04] text-white/80 hover:text-white"
              }`}
            >
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-white/40 mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-white text-sm sm:text-base font-medium">
                    {option.title}
                  </h3>
                  <p className="text-white/40 text-xs mt-1">
                    {option.desc}
                  </p>
                </div>
              </div>

              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border transition-colors ${
                  isSelected
                    ? "bg-white text-black border-white"
                    : "border-white/30 bg-transparent"
                }`}
              >
                {isSelected && <Check className="w-3.5 h-3.5" />}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
