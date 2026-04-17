"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Recycle, ArchiveX, ArrowRight, Activity, Wine } from "lucide-react";
import Link from "next/link";
import LineWaves from "@/components/ui/line-waves";

export default function DrinkQPage() {
  return (
    <main className="min-h-screen bg-black text-rose-50 selection:bg-rose-500/30 font-sans overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center bg-black/50 backdrop-blur-xl border-b border-rose-900/40">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:text-rose-300 transition-colors">
          &larr; Back to Unfounded
        </Link>
        <span className="text-sm font-black uppercase tracking-widest text-[#E60000]">
          DrinkQ Infrastructure
        </span>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 md:px-12 overflow-hidden">
        
        {/* LineWaves Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-80" style={{ width: '100vw', height: '100vh', position: 'absolute' }}>
          <div className="absolute inset-0 pointer-events-auto">
            <LineWaves
              speed={0.3}
              innerLineCount={32}
              outerLineCount={36}
              warpIntensity={1}
              rotation={-45}
              edgeFadeWidth={0}
              colorCycleSpeed={1}
              brightness={0.2}
              color1="#10B981"
              color2="#F43F5E"
              color3="#ed0029"
              enableMouseInteraction
              mouseInfluence={2}
            />
          </div>
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
        </div>
        
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 inline-block"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-rose-100 to-[#E60000] drop-shadow-lg uppercase pb-4">
              DrinkQ
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-md">
              Drink Smart. <span className="text-[#E60000]">Return Right.</span>
            </h2>
            <p className="text-lg md:text-2xl text-rose-200/90 leading-relaxed max-w-3xl mx-auto mb-2 font-medium">
              An unfounded company building infrastructure for the alcohol industry.
            </p>
            <p className="text-lg md:text-xl text-rose-300/70 leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
              We’re not here to sell alcohol. We’re here to fix what happens around it.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="px-8 py-4 w-full sm:w-auto rounded-xl bg-[#E60000] text-white font-bold text-lg hover:bg-rose-700 hover:scale-105 transition-all shadow-[0_0_30px_rgba(230,0,0,0.4)]">
              Join the Waitlist
            </button>
            <button className="px-8 py-4 w-full sm:w-auto rounded-xl bg-transparent border-2 border-white/20 text-white font-bold text-lg hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm">
              Partner With Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* Two-Column Section: Who We Are & The Problem */}
      <section className="py-24 px-6 md:px-12 bg-black border-t border-rose-900/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <h3 className="text-sm font-black uppercase tracking-widest text-[#E60000] mb-2">Who We Are</h3>
                <p className="text-2xl md:text-4xl font-bold leading-tight text-white mb-6">
                    We’re part of Unfounded —<br/>
                    <span className="text-rose-400 font-medium">a bunch of people who got tired of seeing broken systems and decided to build instead.</span>
                </p>
                <p className="text-xl text-rose-200/60 font-medium border-l-4 border-[#E60000] pl-4">
                    DrinkQ is one of those builds.
                </p>
            </motion.div>

            <motion.div 
                className="bg-zinc-900/40 rounded-3xl p-10 border border-rose-900/30"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <h3 className="text-sm font-black uppercase tracking-widest text-[#E60000] mb-6">The Problem</h3>
                <h4 className="text-3xl font-bold text-white mb-8">Alcohol retail hasn’t evolved.</h4>
                <ul className="space-y-6 mb-8">
                    <li className="flex items-start gap-4">
                        <ArchiveX className="w-6 h-6 text-rose-500 shrink-0 mt-1" />
                        <span className="text-xl text-rose-100">No real age verification</span>
                    </li>
                    <li className="flex items-start gap-4">
                        <Wine className="w-6 h-6 text-rose-500 shrink-0 mt-1" />
                        <span className="text-xl text-rose-100">Bottles end up as waste</span>
                    </li>
                    <li className="flex items-start gap-4">
                        <Activity className="w-6 h-6 text-rose-500 shrink-0 mt-1" />
                        <span className="text-xl text-rose-100">No accountability after purchase</span>
                    </li>
                </ul>
                <p className="text-xl text-rose-400 font-medium italic">
                    It works… until you look closely.
                </p>
            </motion.div>
        </div>
      </section>

      {/* What We're Building (Cards) */}
      <section className="py-24 px-6 md:px-12 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-sm font-black uppercase tracking-widest text-[#E60000] mb-4">What We're Building</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white">DrinkQ brings structure to chaos.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-rose-900/20 hover:border-[#E60000]/50 transition-colors"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            >
                <ShieldCheck className="w-12 h-12 text-[#E60000] mb-6" />
                <h4 className="text-2xl font-bold text-white mb-4">Verified Access</h4>
                <p className="text-rose-200/70 text-lg">Only eligible users can buy. Complete security at the point of sale.</p>
            </motion.div>
            {/* Card 2 */}
            <motion.div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-rose-900/20 hover:border-[#E60000]/50 transition-colors"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            >
                <Recycle className="w-12 h-12 text-[#E60000] mb-6" />
                <h4 className="text-2xl font-bold text-white mb-4">Smart Bottle Returns</h4>
                <p className="text-rose-200/70 text-lg">Intelligent bins that validate every returned bottle automatically before accepting.</p>
            </motion.div>
            {/* Card 3 */}
            <motion.div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-rose-900/20 hover:border-[#E60000]/50 transition-colors"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            >
                <Activity className="w-12 h-12 text-[#E60000] mb-6" />
                <h4 className="text-2xl font-bold text-white mb-4">Enforced Accountability</h4>
                <p className="text-rose-200/70 text-lg">Tight ecosystem rules: No return, no next purchase. Responsibility is mandatory.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works & SmartBin Multi-column */}
      <section className="py-32 px-6 md:px-12 bg-black border-y border-rose-900/30 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-[#E60000]/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
            
            {/* How It Works */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="text-sm font-black uppercase tracking-widest text-[#E60000] mb-6">How It Works</h3>
                <div className="space-y-8 mb-10">
                    <div className="flex gap-6">
                        <div className="w-12 h-12 rounded-full bg-rose-950 border border-[#E60000] flex items-center justify-center font-black text-rose-500 shrink-0">1</div>
                        <div>
                            <h4 className="text-2xl font-bold text-white mb-2">Verify</h4>
                            <p className="text-lg text-rose-200/80">Confirm identity before purchase.</p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="w-12 h-12 rounded-full bg-rose-950 border border-[#E60000] flex items-center justify-center font-black text-rose-500 shrink-0">2</div>
                        <div>
                            <h4 className="text-2xl font-bold text-white mb-2">Consume</h4>
                            <p className="text-lg text-rose-200/80">Responsibility stays with you.</p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="w-12 h-12 rounded-full bg-[#E60000] shadow-[0_0_20px_rgba(230,0,0,0.5)] flex items-center justify-center font-black text-white shrink-0">3</div>
                        <div>
                            <h4 className="text-2xl font-bold text-white mb-2">Return</h4>
                            <p className="text-lg text-rose-200/80">Drop the bottle in a DrinkQ SmartBin.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-zinc-900 border-l-4 border-[#E60000] p-6 text-xl font-bold text-white inline-block">
                    That’s it. No friction. No confusion.
                </div>
            </motion.div>

            {/* The SmartBin */}
            <motion.div className="bg-zinc-900/60 backdrop-blur-md rounded-[40px] p-10 lg:p-14 border border-rose-900/40 shadow-2xl"
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            >
                <div className="mb-8">
                    <h3 className="text-sm font-black uppercase tracking-widest text-[#E60000] mb-4">The Hardware</h3>
                    <h2 className="text-4xl font-bold text-white mb-2">The SmartBin</h2>
                </div>
                
                <p className="text-xl text-rose-200 flex flex-col gap-2 mb-10 font-medium">
                    <span className="line-through opacity-50">Not a vending machine.</span>
                    <span className="line-through opacity-50">Not a gimmick.</span>
                    <span className="text-white mt-2 text-2xl font-bold bg-[#E60000] px-4 py-2 self-start rounded-lg shadow-lg">Just a smart bin that:</span>
                </p>

                <ul className="space-y-5 text-lg text-rose-100/90 mb-10 font-medium">
                    <li className="flex items-center gap-3"><ArrowRight className="w-5 h-5 text-[#E60000]"/> Verifies bottles using advanced sensors</li>
                    <li className="flex items-center gap-3"><ArrowRight className="w-5 h-5 text-[#E60000]"/> Gently handles glass with internal cushioning</li>
                    <li className="flex items-center gap-3"><ArrowRight className="w-5 h-5 text-[#E60000]"/> Logs every return in real time</li>
                </ul>

                <p className="text-2xl font-black text-rose-400 tracking-tight text-center border-t border-rose-900/30 pt-8 mt-10">
                    Simple outside. Smart inside.
                </p>
            </motion.div>
        </div>
      </section>

      {/* Why This Matters & What's Next */}
      <section className="py-24 px-6 md:px-12 bg-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 justify-between">
            <div className="flex-1">
                <h3 className="text-sm font-black uppercase tracking-widest text-[#E60000] mb-6">Why This Matters</h3>
                <h4 className="text-3xl font-bold text-white mb-8">Because systems shape behavior.</h4>
                <p className="text-xl text-rose-200/80 mb-6 font-medium">When accountability is built in:</p>
                <ul className="space-y-4 text-xl text-rose-100 font-bold mb-10 list-disc pl-6 marker:text-[#E60000]">
                    <li>Underage access drops</li>
                    <li>Streets get cleaner</li>
                    <li>Waste becomes recoverable</li>
                </ul>
                <div className="p-6 bg-rose-950/30 rounded-2xl border border-[#E60000]/30 inline-block">
                    <p className="text-2xl font-black text-[#E60000] mb-2 uppercase tracking-tight text-glow">This isn’t about alcohol.</p>
                    <p className="text-xl text-white font-bold">It’s about responsibility at scale.</p>
                </div>
            </div>

            <div className="flex-1 bg-zinc-950 p-10 rounded-3xl border border-zinc-800">
                <h3 className="text-sm font-black uppercase tracking-widest text-[#E60000] mb-8">What's Next</h3>
                
                <div className="mb-10">
                    <h4 className="text-lg font-bold text-zinc-500 mb-4 uppercase tracking-widest">We start with:</h4>
                    <div className="flex flex-col gap-3 text-xl text-white font-bold">
                        <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#E60000] animate-pulse"/>Bottle returns</span>
                        <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#E60000] animate-pulse"/>Purchase verification</span>
                    </div>
                </div>

                <div className="w-full h-px bg-zinc-800 mb-10" />

                <div>
                    <h4 className="text-lg font-bold text-zinc-500 mb-4 uppercase tracking-widest">We move toward:</h4>
                    <div className="flex flex-col gap-4 text-xl text-zinc-300 font-medium">
                        <span className="flex items-center gap-3"><ArrowRight className="w-5 h-5 text-[#E60000]"/>Circular bottle systems</span>
                        <span className="flex items-center gap-3"><ArrowRight className="w-5 h-5 text-[#E60000]"/>Sustainable manufacturing</span>
                        <span className="flex items-center gap-3"><ArrowRight className="w-5 h-5 text-[#E60000]"/>Industry-wide infrastructure</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-6 border-t border-rose-900/50 relative overflow-hidden bg-gradient-to-b from-black to-[#330000]">
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
            
            <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-rose-400 mb-4 tracking-tighter uppercase pb-2">DrinkQ</h2>
            <p className="text-xl text-[#E60000] font-black uppercase tracking-widest mb-10">An unfounded company.</p>
            
            <p className="text-2xl md:text-4xl text-white font-bold mb-16 leading-tight">
                Built because this system shouldn’t be this broken.
            </p>

            <div className="w-full max-w-lg bg-black/50 backdrop-blur-md p-10 rounded-3xl border border-rose-500/30 shadow-[0_0_50px_rgba(230,0,0,0.15)] flex flex-col items-center gap-8">
                <h3 className="text-2xl font-bold text-white">Want to be part of this?</h3>
                <button className="w-full px-8 py-5 rounded-xl bg-[#E60000] text-white font-black text-xl hover:bg-rose-700 hover:scale-[1.02] transition-all shadow-[0_10px_20px_rgba(230,0,0,0.3)]">
                    Partner With Us
                </button>
                <div className="text-lg font-medium text-rose-200">
                    <span className="text-zinc-500 mr-2">Talk to Us:</span> 
                    <a href="tel:+919344978002" className="text-white hover:text-[#E60000] transition-colors font-bold">+91 9344978002</a>
                </div>
            </div>
            
        </div>
      </section>
    </main>
  );
}
