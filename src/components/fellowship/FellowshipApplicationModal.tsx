"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight, Loader2, Sparkles } from "lucide-react";

interface FellowshipApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FellowshipApplicationModal({
  isOpen,
  onClose,
}: FellowshipApplicationModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [yearOfStudy, setYearOfStudy] = useState("3rd Year");
  const [builderType, setBuilderType] = useState("Hybrid Builder");
  const [builtLinks, setBuiltLinks] = useState("");
  const [lakhPitch, setLakhPitch] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!fullName.trim() || !email.trim()) {
      setErrorMessage("Please enter your name and email address.");
      return;
    }

    if (!builtLinks.trim()) {
      setErrorMessage("Please provide at least one link to what you have built or shipped.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/fellowship", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          college,
          yearOfStudy,
          builderType,
          builtLinks,
          lakhPitch,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to submit application.");
      }

      setIsSuccess(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setCollege("");
    setBuiltLinks("");
    setLakhPitch("");
    setIsSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl bg-[#00172e] border border-white/20 rounded-3xl p-6 sm:p-10 shadow-2xl z-10 text-white my-8 overflow-hidden liquid-glass"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSuccess ? (
            <div>
              {/* Header */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-white/80 mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Season 1 • 20 Fellows</span>
                </div>
                <h2
                  className="text-3xl sm:text-4xl font-normal tracking-tight text-white mb-2"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  Apply to Unfounded Fellowship
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  For the 1% of college students who don&apos;t wait for permission to build.
                  Forget the typical internship. You build. You ship. You learn.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/60 mb-2 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Alan Turing"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-white/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/60 mb-2 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alan@college.edu"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-white/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Phone & College */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/60 mb-2 font-medium">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-white/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/60 mb-2 font-medium">
                      College / Institution
                    </label>
                    <input
                      type="text"
                      value={college}
                      onChange={(e) => setCollege(e.target.value)}
                      placeholder="IIT Madras / Anna Univ / BITS..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-white/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Builder Type Selector */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/60 mb-2 font-medium">
                    What Kind of Builder Are You?
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { type: "Product Builder", desc: "Code, AI, Prototype" },
                      { type: "Distribution Builder", desc: "Attention, Growth, Sales" },
                      { type: "Hybrid Builder", desc: "Build & Distribute" },
                    ].map((item) => (
                      <button
                        key={item.type}
                        type="button"
                        onClick={() => setBuilderType(item.type)}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          builderType === item.type
                            ? "border-white bg-white/15 text-white"
                            : "border-white/10 bg-white/5 text-white/70 hover:border-white/30"
                        }`}
                      >
                        <div className="text-xs font-semibold">{item.type}</div>
                        <div className="text-[10px] text-white/50 mt-0.5">{item.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Proof of Building (Links) */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/60 mb-2 font-medium">
                    Proof of Building (GitHub, Live Project, Portfolio, Twitter) *
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={builtLinks}
                    onChange={(e) => setBuiltLinks(e.target.value)}
                    placeholder="https://github.com/..., https://myproject.com, or describe what you have built and who used it..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-white/50 transition-colors"
                  />
                </div>

                {/* The 1 Lakh Question */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-amber-300/80 mb-2 font-medium flex items-center gap-1.5">
                    <span>The Final Test</span>
                    <span className="text-white/40 normal-case">(Optional but heavily weighted)</span>
                  </label>
                  <p className="text-xs text-white/60 mb-2 italic">
                    &ldquo;If we gave you ₹1 lakh and 90 days, what would you build?&rdquo;
                  </p>
                  <textarea
                    rows={3}
                    value={lakhPitch}
                    onChange={(e) => setLakhPitch(e.target.value)}
                    placeholder="Describe the problem, what you would build, and how you would get the first 100 users..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-white/50 transition-colors"
                  />
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs">
                    {errorMessage}
                  </div>
                )}

                {/* Submit Action */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-full bg-white text-black hover:bg-white/90 font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-xl shadow-white/10 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Application to Fellowship</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-white/40 mt-3">
                    We don&apos;t care where you study. We care what you can build.
                  </p>
                </div>
              </form>
            </div>
          ) : (
            /* Success View */
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3
                className="text-4xl text-white font-normal mb-3"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Application Received.
              </h3>

              <p className="text-white/70 text-sm max-w-md mx-auto leading-relaxed mb-8">
                Your application has been logged into the Unfounded Fellowship database.
                Our team reviews submissions on a rolling basis. If your proof of building
                stands out, you&apos;ll be invited to the **Unfounded Build Day**.
              </p>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-sm mx-auto mb-8 text-xs text-white/60">
                <span className="text-white font-medium block mb-1">Remember the Rule:</span>
                &ldquo;You build. You ship. You learn. And if you&apos;re good enough, you stay.&rdquo;
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="liquid-glass rounded-full px-8 py-3 text-sm text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
