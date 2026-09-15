"use client";

import React from "react";
import type { FriendsFormData } from "@/types/friends";
import { Check } from "lucide-react";

interface StepProps {
  data: FriendsFormData;
  updateData: (fields: Partial<FriendsFormData>) => void;
}

const STATUS_OPTIONS = [
  {
    id: "full_time_freelance",
    title: "Full-time freelancer",
    desc: "Dedicated to independent client and studio projects.",
  },
  {
    id: "part_time_freelance",
    title: "Part-time freelancer (have another job)",
    desc: "Have a day job, looking for high-impact side projects & nights/weekends sprints.",
  },
  {
    id: "employed_open",
    title: "Employed full-time, open to freelance / advisory",
    desc: "Would take on exciting venture sprints if scope and compensation fit.",
  },
  {
    id: "actively_looking",
    title: "Between jobs / actively looking",
    desc: "Ready to jump into immediate contracts or full-time core builder roles.",
  },
  {
    id: "eir_cofounder",
    title: "Looking to co-found / EIR at a Micro SaaS",
    desc: "Want to lead a product experiment from 0 to 1 with Unfounded venture backing.",
  },
];

export default function StepStatus({ data, updateData }: StepProps) {
  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center text-center">
      <h2 className="text-4xl sm:text-5xl md:text-6xl text-white font-serif font-instrument mb-3 tracking-tight">
        How are you working right now?
      </h2>
      <p className="text-white/60 text-sm md:text-base mb-8">
        Choose the option that best describes your current setup.
      </p>

      <div className="w-full space-y-3 text-left">
        {STATUS_OPTIONS.map((option) => {
          const isSelected = data.workingStatus === option.title;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => updateData({ workingStatus: option.title })}
              className={`w-full p-5 rounded-3xl transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 text-left ${
                isSelected
                  ? "bg-white/15 border border-white/50 shadow-lg shadow-white/5 ring-1 ring-white/30"
                  : "liquid-glass hover:bg-white/[0.04] text-white/80 hover:text-white"
              }`}
            >
              <div>
                <h3 className="text-white text-sm sm:text-base font-medium">
                  {option.title}
                </h3>
                <p className="text-white/40 text-xs mt-1">
                  {option.desc}
                </p>
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
