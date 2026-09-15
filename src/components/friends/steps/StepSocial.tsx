"use client";

import React from "react";
import type { FriendsFormData } from "@/types/friends";

interface StepProps {
  data: FriendsFormData;
  updateData: (fields: Partial<FriendsFormData>) => void;
}

export default function StepSocial({ data, updateData }: StepProps) {
  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center text-center">
      <h2 className="text-4xl sm:text-5xl md:text-6xl text-white font-serif font-instrument mb-3 tracking-tight">
        Where do you exist online?
      </h2>
      <p className="text-white/60 text-sm md:text-base mb-8">
        LinkedIn or GitHub is required. Add anything else you&apos;d like us to see.
      </p>

      <div className="liquid-glass rounded-3xl p-6 sm:p-8 w-full text-left space-y-6">
        {/* LinkedIn or GitHub */}
        <div>
          <label className="block uppercase tracking-wider text-[11px] font-semibold text-white/70 mb-2">
            LinkedIn or GitHub Profile <span className="text-amber-300/80 font-normal">(Required)</span>
          </label>
          <input
            type="url"
            required
            value={data.linkedin}
            onChange={(e) => updateData({ linkedin: e.target.value })}
            placeholder="https://linkedin.com/in/yourname or github.com/yourhandle"
            className="w-full bg-white/[0.04] border border-white/15 focus:border-white/40 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors text-sm md:text-base"
          />
        </div>

        {/* Other Social Handles */}
        <div>
          <label className="block uppercase tracking-wider text-[11px] font-semibold text-white/70 mb-2">
            Other Social / Web Presence <span className="text-white/40 font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            value={data.otherSocial}
            onChange={(e) => updateData({ otherSocial: e.target.value })}
            placeholder="@yourhandle or x.com/... or bento.me/..."
            className="w-full bg-white/[0.04] border border-white/15 focus:border-white/40 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors text-sm md:text-base"
          />
        </div>

        <div className="rounded-2xl p-4 bg-white/[0.02] border border-white/10 text-xs text-white/50 leading-relaxed">
          💡 We look at your live activity, open-source work, writing, and shipped prototypes to match you with matching venture briefs.
        </div>
      </div>
    </div>
  );
}
