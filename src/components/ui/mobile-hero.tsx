"use client";

import React from "react";
import AiHeroBackground from "./ai-hero-background";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const MobileHero = () => {
  return (
    <div className="relative h-screen w-full bg-zinc-950 overflow-hidden flex flex-col items-center justify-center">
      {/* Background Shader */}
      <div className="absolute inset-0">
        <AiHeroBackground />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <h1 className="text-6xl font-black tracking-tighter text-white mb-2 leading-none uppercase">
                Unfounded
            </h1>
            <p className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-8">
                Venture Lab • Ship Daily
            </p>
        </motion.div>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col items-center gap-4 mt-20"
        >
            <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em]">
                Scroll to Explore
            </span>
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <ArrowDown className="w-5 h-5 text-blue-500" />
            </motion.div>
        </motion.div>
      </div>

      {/* Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_black_90%)]" />
    </div>
  );
};

export default MobileHero;
