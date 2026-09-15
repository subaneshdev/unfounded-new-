"use client";

import React, { useState } from "react";
import { X, Mail, CheckCircle2, Search, ArrowRight } from "lucide-react";

interface UpdateProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartNewApplication?: () => void;
}

interface FoundProfile {
  applicant_id: string;
  full_name: string;
  email: string;
  selected_categories?: string[];
  selected_roles?: string[];
  working_status?: string;
}

export default function UpdateProfileModal({
  isOpen,
  onClose,
  onStartNewApplication,
}: UpdateProfileModalProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [lookupResult, setLookupResult] = useState<{
    found: boolean;
    profile?: FoundProfile;
  } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    try {
      const res = await fetch(`/api/friends?email=${encodeURIComponent(email.trim())}`);
      const data = await res.json();
      if (data.success && data.found && data.applications?.length > 0) {
        setLookupResult({
          found: true,
          profile: data.applications[0],
        });
      } else {
        setLookupResult({ found: false });
      }
    } catch {
      setLookupResult({ found: false });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setLookupResult(null);
    setEmail("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div
        className="liquid-glass rounded-3xl p-6 sm:p-8 w-full max-w-md border border-white/20 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => {
            handleReset();
            onClose();
          }}
          className="absolute top-5 right-5 text-white/50 hover:text-white p-1 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {lookupResult === null ? (
          <div>
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 text-white">
              <Mail className="w-5 h-5" />
            </div>

            <h3 className="text-2xl text-white font-serif font-instrument mb-2">
              Update your profile
            </h3>
            <p className="text-white/60 text-xs sm:text-sm mb-6 leading-relaxed">
              Enter the email address you used when applying. We will verify your profile in the Supabase network.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-white/70 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="yourname@gmail.com"
                  className="w-full bg-white/[0.04] border border-white/15 focus:border-white/40 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 outline-none text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-white text-black hover:bg-white/90 font-semibold text-sm py-3.5 px-6 rounded-full transition-all cursor-pointer shadow-lg shadow-white/10 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isLoading ? (
                  <span>Checking Supabase...</span>
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    <span>Look Up Profile</span>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : lookupResult.found && lookupResult.profile ? (
          <div className="text-center py-2">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl text-white font-serif font-instrument mb-1">
              Profile Found!
            </h3>
            <p className="text-white/50 text-xs mb-4 font-mono">
              Ref: {lookupResult.profile.applicant_id}
            </p>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-left text-xs text-white/80 space-y-2 mb-6">
              <div>
                <span className="text-white/40 block text-[10px] uppercase">Name</span>
                <span className="font-medium text-white">{lookupResult.profile.full_name}</span>
              </div>
              <div>
                <span className="text-white/40 block text-[10px] uppercase">Registered Roles</span>
                <span className="text-white/90">
                  {(lookupResult.profile.selected_roles || lookupResult.profile.selected_categories || []).join(", ") || "Generalist"}
                </span>
              </div>
            </div>

            <p className="text-white/60 text-xs mb-6">
              A magic link has been queued for <strong className="text-white">{email}</strong> to edit rates &amp; availability.
            </p>

            <button
              type="button"
              onClick={() => {
                handleReset();
                onClose();
              }}
              className="liquid-glass hover:bg-white/10 text-white text-sm py-2.5 px-6 rounded-full transition-colors cursor-pointer w-full"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="text-center py-2">
            <h3 className="text-xl text-white font-serif font-instrument mb-2">
              No Application Found
            </h3>
            <p className="text-white/60 text-xs sm:text-sm mb-6 leading-relaxed">
              We couldn&apos;t find an existing profile for <strong className="text-white">{email}</strong> in Supabase. Would you like to join the Friends grid?
            </p>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  handleReset();
                  onClose();
                  if (onStartNewApplication) onStartNewApplication();
                }}
                className="bg-white text-black hover:bg-white/90 font-semibold text-xs sm:text-sm py-3 px-6 rounded-full transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Join Friends of Unfounded</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-white/50 hover:text-white py-2 transition-colors cursor-pointer"
              >
                Try another email
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
