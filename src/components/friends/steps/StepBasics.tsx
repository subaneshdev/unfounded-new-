"use client";

import React from "react";
import type { FriendsFormData } from "@/types/friends";

interface StepProps {
  data: FriendsFormData;
  updateData: (fields: Partial<FriendsFormData>) => void;
}

const COUNTRY_CODES = [
  { code: "+91", label: "India (+91)", flag: "🇮🇳" },
  { code: "+1", label: "US / Canada (+1)", flag: "🇺🇸" },
  { code: "+44", label: "UK (+44)", flag: "🇬🇧" },
  { code: "+65", label: "Singapore (+65)", flag: "🇸🇬" },
  { code: "+971", label: "UAE (+971)", flag: "🇦🇪" },
  { code: "+49", label: "Germany (+49)", flag: "🇩🇪" },
  { code: "+61", label: "Australia (+61)", flag: "🇦🇺" },
];

export default function StepBasics({ data, updateData }: StepProps) {
  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center text-center">
      <h2 className="text-4xl sm:text-5xl md:text-6xl text-white font-serif font-instrument mb-3 tracking-tight">
        Basics first
      </h2>
      <p className="text-white/60 text-sm md:text-base mb-8">
        Name, email. The usual.
      </p>

      <div className="liquid-glass rounded-3xl p-6 sm:p-8 w-full text-left space-y-6">
        {/* Full Name */}
        <div>
          <label className="block uppercase tracking-wider text-[11px] font-semibold text-white/70 mb-2">
            Full Name <span className="text-white/40">(cannot be edited later)</span>
          </label>
          <input
            type="text"
            required
            value={data.fullName}
            onChange={(e) => updateData({ fullName: e.target.value })}
            placeholder="John Doe"
            className="w-full bg-white/[0.04] border border-white/15 focus:border-white/40 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors text-sm md:text-base"
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block uppercase tracking-wider text-[11px] font-semibold text-white/70 mb-2">
            Email Address <span className="text-white/40">(cannot be edited later)</span>
          </label>
          <input
            type="email"
            required
            value={data.email}
            onChange={(e) => updateData({ email: e.target.value })}
            placeholder="johndoe@gmail.com"
            className="w-full bg-white/[0.04] border border-white/15 focus:border-white/40 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors text-sm md:text-base"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block uppercase tracking-wider text-[11px] font-semibold text-white/70 mb-2">
            Phone Number
          </label>
          <div className="flex gap-2">
            <select
              value={data.countryCode}
              onChange={(e) => updateData({ countryCode: e.target.value })}
              className="bg-white/[0.04] border border-white/15 focus:border-white/40 rounded-2xl px-3 py-3 text-white outline-none transition-colors text-sm cursor-pointer"
            >
              {COUNTRY_CODES.map((item) => (
                <option key={item.code} value={item.code} className="bg-zinc-900 text-white">
                  {item.flag} {item.code}
                </option>
              ))}
            </select>
            <input
              type="tel"
              value={data.phoneNumber}
              onChange={(e) => updateData({ phoneNumber: e.target.value })}
              placeholder="98765 43210"
              className="flex-1 bg-white/[0.04] border border-white/15 focus:border-white/40 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors text-sm md:text-base"
            />
          </div>
        </div>

        <p className="text-[12px] text-white/40 leading-relaxed pt-2">
          These details will be a part of your profile. If there&apos;s a fit, we will reach out to you with the relevant venture sprints or briefs. You may withdraw consent anytime.
        </p>

        {/* Consents */}
        <div className="space-y-3 pt-1 border-t border-white/10">
          <label className="flex items-center gap-3 text-xs text-white/80 cursor-pointer">
            <input
              type="checkbox"
              checked={data.whatsappConsent}
              onChange={(e) => updateData({ whatsappConsent: e.target.checked })}
              className="rounded border-white/20 bg-white/10 text-white accent-white cursor-pointer w-4 h-4"
            />
            <span>I agree to receive sprint opportunities via WhatsApp</span>
          </label>
          <label className="flex items-center gap-3 text-xs text-white/80 cursor-pointer">
            <input
              type="checkbox"
              checked={data.emailConsent}
              onChange={(e) => updateData({ emailConsent: e.target.checked })}
              className="rounded border-white/20 bg-white/10 text-white accent-white cursor-pointer w-4 h-4"
            />
            <span>I agree to receive updates and communication via email</span>
          </label>
        </div>
      </div>
    </div>
  );
}
