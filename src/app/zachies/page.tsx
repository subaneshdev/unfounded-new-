"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Leaf, RefreshCw, ChevronDown } from "lucide-react";
import Link from "next/link";
import LiquidEther from "@/components/ui/liquid-ether";


export default function ZachiesPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="min-h-screen bg-black text-zinc-50 selection:bg-zinc-500/30 font-sans overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-zinc-900/50">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:text-zinc-300 transition-colors">
          &larr; Back to Unfounded
        </Link>
        <span className="text-sm font-medium uppercase tracking-widest text-[#10B981]">
          Material Innovation Lab
        </span>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center pt-24 px-6 md:px-12 overflow-hidden">
        
        {/* User's requested LiquidEther component background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40">
            <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
                <LiquidEther
                    mouseForce={20}
                    cursorSize={100}
                    isViscous
                    viscous={30}
                    colors={["#10B981","#10B981","#10B981"]}
                    autoDemo
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    isBounce={false}
                    resolution={0.5}
                  />
            </div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 text-white pb-2 drop-shadow-lg">
              Engineering the Next Generation of Bio-Materials.
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-2xl text-zinc-300 leading-relaxed max-w-3xl mx-auto mb-8 font-medium drop-shadow-md"
          >
            At Unfounded Venture Lab, we identify high-volume, overlooked agricultural streams to develop a proprietary closed-loop biorefinery process.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-100 font-semibold shadow-xl"
          >
            <RefreshCw className="w-5 h-5 animate-spin-slow text-[#10B981]" />
            100% material utilization with zero waste.
          </motion.div>
        </div>

        <motion.div 
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-zinc-500 z-10"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
            <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* The Ecosystem Section */}
      <section className="py-32 px-6 md:px-12 relative z-20 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mb-20 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">The Zachies Ecosystem</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Cascading a single botanical source into three distinct, high-margin commercial applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1: Halo */}
            <ProductCard 
              delay={0}
              icon={<Shield className="w-10 h-10 text-[#10B981]" />}
              title="Zachies Halo"
              subtitle="The B2B Flagship"
              description="Advanced Produce Protection. An invisible, bio-derived protective matrix designed to fundamentally alter agricultural unit economics."
              features={[
                { name: "Dynamic Gas Exchange", desc: "Blocks ambient oxygen while allowing internal ethylene gas to safely escape, preventing anaerobic rot." },
                { name: "Friction-Resistant", desc: "Cures into a flexible polymer net capable of surviving thermal shock, condensation, and transit friction." },
                { name: "Clean Label", desc: "100% plant-based, entirely edible, and compliant with standard toxicological safety parameters." }
              ]}
            />

            {/* Product 2: Skin */}
            <ProductCard 
              delay={0.2}
              icon={<Leaf className="w-10 h-10 text-[#10B981]" />}
              title="Zachies Skin"
              subtitle="The Material Innovation"
              description="Next-Generation Bio-Textiles. Transitioning agricultural byproducts into high-performance industrial materials."
              features={[
                { name: "Structural Integrity", desc: "Utilizes highly durable, upcycled plant fibers cross-linked with natural binding agents." },
                { name: "Sustainable Scalability", desc: "Built entirely on secondary agricultural waste streams, decoupling production from animal agriculture and plastics." }
              ]}
            />

            {/* Product 3: Nectar */}
            <ProductCard 
              delay={0.4}
              icon={<RefreshCw className="w-10 h-10 text-[#10B981]" />}
              title="Zachies Nectar"
              subtitle="The Regenerative Loop"
              description="Bio-Active Agronomy. The final stage of our zero-waste cascade. Converts dense, residual nutrients into a potent, bio-available liquid soil amendment."
              features={[
                { name: "The Public Narrative", desc: "Focuses entirely on soil bio-availability and closing the commercial production loop." },
                { name: "Regenerative Input", desc: "A botanical extract designed to re-inoculate commercial soils, bringing farm waste back to farm yield." }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-6 border-t border-zinc-900 relative overflow-hidden bg-black">
        <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-white">Redefining the Material Economy.</h2>
            <Link href="/" className="inline-block px-8 py-4 rounded-xl bg-zinc-100 text-black font-bold text-lg hover:bg-white hover:scale-105 transition-all shadow-xl shadow-white/5">
                Return to Ventures
            </Link>
        </div>
      </section>
    </main>
  );
}

function ProductCard({ icon, title, subtitle, description, features, delay }: { icon: React.ReactNode, title: string, subtitle: string, description: string, features: {name: string, desc: string}[], delay: number }) {
    return (
        <motion.div 
            className="group relative bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-900 transition-colors"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />
            
            <div className="mb-6 inline-block p-4 bg-zinc-950 rounded-2xl shadow-xl ring-1 ring-zinc-800">
                {icon}
            </div>
            
            <div className="uppercase tracking-widest text-zinc-500 text-xs font-bold mb-2">{subtitle}</div>
            <h3 className="text-3xl font-bold mb-4 text-white">{title}</h3>
            <p className="text-zinc-300 mb-8 leading-relaxed font-medium">
                {description}
            </p>

            <div className="space-y-6">
                {features.map((feature, idx) => (
                    <div key={idx} className="relative pl-4 border-l-2 border-zinc-800 group-hover:border-[#10B981] transition-colors">
                        <h4 className="font-bold text-zinc-100 mb-1">{feature.name}</h4>
                        <p className="text-sm text-zinc-400 leading-relaxed">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
