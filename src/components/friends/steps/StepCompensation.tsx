"use client";

import React from "react";
import type { FriendsFormData } from "@/types/friends";
import { Check } from "lucide-react";

interface StepProps {
  data: FriendsFormData;
  updateData: (fields: Partial<FriendsFormData>) => void;
}

const PRICING_MODELS = [
  {
    title: "Day Rate / Hourly Rate",
    desc: "Fixed cash per working day or hour for reliable project sprints.",
  },
  {
    title: "Fixed Sprint / Project Fee",
    desc: "Predetermined milestone cost for shipping a defined scope.",
  },
  {
    title: "Revenue Share / Profit Share",
    desc: "Lower cash or pure upside percentage on product revenue generated.",
  },
  {
    title: "Sweat Equity / Co-founder Pool",
    desc: "Ownership in spinout ventures from the Unfounded lab.",
  },
  {
    title: "Scope-based Quote",
    desc: "No fixed rate. Quote based on scope, timeline, and brief.",
  },
];

export default function StepCompensation({ data, updateData }: StepProps) {
  const toggleModel = (title: string) => {
    let nextModels: string[];
    if (data.pricingModel.includes(title)) {
      nextModels = data.pricingModel.filter((m) => m !== title);
    } else {
      nextModels = [...data.pricingModel, title];
    }
    updateData({ pricingModel: nextModels });
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center text-center">
      <h2 className="text-4xl sm:text-5xl md:text-6xl text-white font-serif font-instrument mb-3 tracking-tight">
        How do you price your work?
      </h2>
      <p className="text-white/60 text-sm md:text-base mb-8">
        Maybe you&apos;ve got this down to a science, maybe you&apos;re figuring out what works best.
      </p>

      <div className="w-full space-y-3 text-left mb-8">
        {PRICING_MODELS.map((model) => {
          const isSelected = data.pricingModel.includes(model.title);
          return (
            <button
              key={model.title}
              type="button"
              onClick={() => toggleModel(model.title)}
              className={`w-full p-4 sm:p-5 rounded-3xl transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 text-left ${
                isSelected
                  ? "bg-white/15 border border-white/50 shadow-lg shadow-white/5 ring-1 ring-white/30"
                  : "liquid-glass hover:bg-white/[0.04] text-white/80 hover:text-white"
              }`}
            >
              <div>
                <h3 className="text-white text-sm sm:text-base font-medium">
                  {model.title}
                </h3>
                <p className="text-white/40 text-xs mt-0.5">
                  {model.desc}
                </p>
              </div>

              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border transition-colors ${
                  isSelected
                    ? "bg-white text-black border-white"
                    : "border-white/30 bg-transparent"
                }`}
              >
                {isSelected && <Check className="w-3 h-3" />}
              </div>
            </button>
          );
        })}
      </div>

      <div className="liquid-glass rounded-3xl p-6 sm:p-8 w-full text-left space-y-5">
        <div>
          <label className="block uppercase tracking-wider text-[11px] font-semibold text-white/70 mb-2">
            Approximate Day Rate or Target Fee <span className="text-white/40 font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            value={data.dayRate}
            onChange={(e) => updateData({ dayRate: e.target.value })}
            placeholder="e.g. ₹25,000/day or $400/day or ₹1.5L/sprint"
            className="w-full bg-white/[0.04] border border-white/15 focus:border-white/40 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors text-sm"
          />
        </div>

        <div>
          <label className="block uppercase tracking-wider text-[11px] font-semibold text-white/70 mb-2">
            Fee Structure or Notes <span className="text-white/40 font-normal">(Optional)</span>
          </label>
          <textarea
            rows={3}
            value={data.pricingNotes}
            onChange={(e) => updateData({ pricingNotes: e.target.value })}
            placeholder="Any specific preferences? Minimum project sizes, equity thresholds, or retainers..."
            className="w-full bg-white/[0.04] border border-white/15 focus:border-white/40 rounded-2xl p-4 text-white placeholder:text-white/30 outline-none transition-colors text-sm resize-none"
          />
        </div>
      </div>
    </div>
  );
}
