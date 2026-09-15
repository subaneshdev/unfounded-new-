"use client";

import React from "react";
import type { FriendsFormData } from "@/types/friends";
import { Video } from "lucide-react";

interface StepProps {
  data: FriendsFormData;
  updateData: (fields: Partial<FriendsFormData>) => void;
}

export default function StepAbout({ data, updateData }: StepProps) {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
      <h2 className="text-4xl sm:text-5xl md:text-6xl text-white font-serif font-instrument mb-3 tracking-tight">
        Help us get to know you.
      </h2>
      <p className="text-white/60 text-sm md:text-base mb-8">
        What should we know about you that won&apos;t show up in your work links?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left">
        {/* Video Card */}
        <div className="liquid-glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <label className="block uppercase tracking-wider text-[11px] font-semibold text-white/70 mb-2">
              Share a 1–2 Minute Video <span className="text-white/40 font-normal">(Optional)</span>
            </label>
            <p className="text-xs text-white/40 mb-5">
              Record a quick Loom or smartphone video introducing yourself, what you love building, and your ideal sprint.
            </p>

            <div className="rounded-2xl border-2 border-dashed border-white/15 hover:border-white/30 transition-colors p-6 flex flex-col items-center justify-center text-center bg-white/[0.01]">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3">
                <Video className="w-6 h-6 text-white" />
              </div>
              <p className="text-xs text-white/80 font-medium mb-3">
                Paste Loom, YouTube, or Google Drive link:
              </p>
              <input
                type="url"
                value={data.videoUrl}
                onChange={(e) => updateData({ videoUrl: e.target.value })}
                placeholder="https://www.loom.com/share/..."
                className="w-full bg-white/[0.04] border border-white/15 focus:border-white/40 rounded-xl px-3 py-2 text-white placeholder:text-white/30 outline-none text-xs"
              />
            </div>
          </div>

          <div className="mt-6 text-[11px] text-white/30">
            A quick video fast-tracks your profile directly to active venture teams.
          </div>
        </div>

        {/* Written Manifesto Card */}
        <div className="liquid-glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block uppercase tracking-wider text-[11px] font-semibold text-white/70">
                Write <span className="text-white/40 font-normal">(200 chars recommended)</span>
              </label>
              <span className="text-[11px] text-white/40">
                {data.aboutText.length} chars
              </span>
            </div>
            <p className="text-xs text-white/40 mb-4">
              Tell us about yourself. How you work, what you care about, what you avoid, and how you ship.
            </p>

            <textarea
              rows={7}
              value={data.aboutText}
              onChange={(e) => updateData({ aboutText: e.target.value })}
              placeholder="I build best when I have full ownership of the interface... I love shipping quickly and testing with real users... I don't like excessive planning meetings..."
              className="w-full bg-white/[0.04] border border-white/15 focus:border-white/40 rounded-2xl p-4 text-white placeholder:text-white/30 outline-none text-xs sm:text-sm leading-relaxed resize-none"
            />
          </div>

          <div className="mt-4 text-[11px] text-white/30">
            Be direct and genuine. Unfounded is an anti-bureaucracy venture lab.
          </div>
        </div>
      </div>
    </div>
  );
}
