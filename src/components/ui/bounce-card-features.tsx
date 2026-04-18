"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

export const BouncyCardsFeatures = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 text-white">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-3xl font-bold md:text-5xl">
          Our In house
          <span className="text-zinc-400"> Ventures</span>
        </h2>
        <span className="text-zinc-500 font-medium md:text-lg tracking-wide uppercase text-sm mt-4 md:mt-0">
          Click the cards to explore ↗
        </span>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard href="https://www.ziggers.in/" className="col-span-12 md:col-span-4 bg-zinc-900 ring-1 ring-white/10">
          <CardTitle>Ziggers</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-24 md:top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-[#5C3A21] to-[#8b4513] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-orange-50">
              Empowering the gig economy
            </span>
          </div>
        </BounceCard>
        <BounceCard href="https://www.loopverse.in/" className="col-span-12 md:col-span-8 bg-zinc-900 ring-1 ring-white/10">
          <CardTitle>LoopVerse</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-24 md:top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-[#0052FF] to-blue-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-blue-50">
              Connecting campus experiences
            </span>
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard href="/zachies" className="col-span-12 md:col-span-8 bg-zinc-900 ring-1 ring-white/10">
          <CardTitle>Zachies</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-24 md:top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-[#10B981] to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-emerald-50">
              Material Innovation Company
            </span>
          </div>
        </BounceCard>
        <BounceCard href="/drinkq" className="col-span-12 md:col-span-4 bg-zinc-900 ring-1 ring-white/10">
          <CardTitle>DrinkQ</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-24 md:top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-[#dc2626] to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-red-50">
              Drink Smart. Return Right.
            </span>
          </div>
        </BounceCard>
      </div>
    </section>
  );
};

interface BounceCardProps {
    className?: string;
    children: ReactNode;
    href?: string;
}

const BounceCard = ({ className = "", children, href }: BounceCardProps) => {
  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 0.95, rotate: "-1deg" }}
        className={`group block relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl p-8 ${className}`}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

interface CardTitleProps {
    children: ReactNode;
}

const CardTitle = ({ children }: CardTitleProps) => {
  return (
    <h3 className="mx-auto text-center text-2xl md:text-3xl font-semibold">{children}</h3>
  );
};
