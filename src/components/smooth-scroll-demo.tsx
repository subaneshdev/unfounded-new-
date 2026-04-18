"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { BouncyCardsFeatures } from "@/components/ui/bounce-card-features";
import TeamShowcase from "@/components/ui/team-showcase";
import StaggeredMenu from "@/components/ui/StaggeredMenu";
import { GlowCard } from "@/components/ui/spotlight-card";
import { FooterTapedDesign } from "@/components/ui/footer-taped-design";
import { Terminal, Flame } from "lucide-react";

const DemoOne = () => {
    const revealRef = useRef(null);
    const isInView = useInView(revealRef, { once: true, margin: "-100px" });

    return (
        <div className="relative min-h-screen">
            {/* Global Navigation Overlay */}
            <StaggeredMenu
                isFixed={true}
                position="right"
                items={[
                    { label: 'Ziggers', ariaLabel: 'Ziggers', link: 'https://www.ziggers.in/' },
                    { label: 'LoopVerse', ariaLabel: 'LoopVerse', link: '#' },
                    { label: 'Zachies', ariaLabel: 'Zachies', link: '/zachies' },
                    { label: 'DrinkQ', ariaLabel: 'DrinkQ', link: '/drinkq' }
                ]}
                socialItems={[
                    { label: 'X', link: 'https://x.com/CSubanesh' },
                    { label: 'LinkedIn', link: 'https://www.linkedin.com/company/unfoundedventurelab' },
                    { label: 'Instagram', link: 'https://www.instagram.com/unfounded.in/' }
                ]}
                displaySocials={true}
                displayItemNumbering={true}
                menuButtonColor="#ffffff"
                openMenuButtonColor="#000000"
                changeMenuColorOnOpen={true}
                colors={['#10B981', '#059669']}
                accentColor="#10B981"
            />

            <SmoothScrollHero
                scrollHeight={1500}
                desktopImage="/unfounded-team.jpg"
                mobileImage="/unfounded-team.jpg"
                initialClipPercentage={25}
                finalClipPercentage={75}
            />
            {/* White Section with Blue Text Reveal */}
            <div className="min-h-[70vh] md:h-screen flex items-center justify-center bg-white text-blue-600 p-6 md:p-8 text-center" ref={revealRef}>
                <h1 className="max-w-4xl font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
                    <VerticalCutReveal
                        splitBy="words"
                        staggerDuration={0.05}
                        staggerFrom="first"
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 21,
                        }}
                        autoStart={isInView}
                    >
                        Hi, we’re a bunch of people who got bored of “planning”… so we started building.
                    </VerticalCutReveal>
                </h1>
            </div>
            {/* Bouncy Cards Section: In house Ventures */}
            <div className="w-full bg-zinc-950 relative z-10 pt-16 md:pt-24 pb-12 md:pb-16">
                <BouncyCardsFeatures />
            </div>

            {/* Micro SaaS Section */}
            <div className="w-full bg-black relative z-10 py-16 md:py-32 px-4 md:px-8 border-t border-zinc-900 overflow-hidden">
                 
                 {/* Radial gradient background to blend nicely */}
                 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 via-black to-black pointer-events-none" />

                 <div className="max-w-7xl mx-auto relative z-10">
                    <div className="mb-16 text-center">
                        <h2 className="text-sm font-black uppercase tracking-widest text-zinc-500 mb-4">Our Ecosystem</h2>
                        <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-white inline-block">
                            Micro SaaS Builds
                        </h3>
                        <p className="mt-6 text-xl text-zinc-400 max-w-2xl mx-auto font-medium">
                            Small tools, big impact, zero bloat.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 custom-cursor">
                        {/* devfried.co.in GlowCard */}
                        <a href="https://devfriend.co.in/" target="_blank" rel="noopener noreferrer" className="flex-1">
                            <GlowCard glowColor="orange" customSize className="h-full min-h-[400px]">
                                <div className="flex flex-col h-full justify-between">
                                    <div>
                                        <div className="w-14 h-14 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mb-6">
                                            <Flame className="w-7 h-7 text-orange-500" />
                                        </div>
                                        <h4 className="text-3xl font-black text-white mb-2">devfried.co.in</h4>
                                        <p className="text-xl font-bold text-orange-400 mb-6 tracking-tight">Crispy Code. Zero Grease.</p>
                                        
                                        <div className="space-y-4 mb-8 border-l-2 border-orange-900 pl-4">
                                            <p className="text-zinc-300 font-medium">
                                                The "Deep Fryer" for your technical debt and half-baked ideas.
                                            </p>
                                            <p className="text-zinc-400 italic text-sm">
                                                "Stop simmering on your ideas. At devfried, we turn 'I have a concept' into 'I have a checkout page' before your coffee gets cold."
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-auto flex justify-between items-center w-full">
                                        <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Vibe-Checked Logic</span>
                                        <button className="px-6 py-2 rounded-lg bg-orange-500/20 text-orange-400 font-bold hover:bg-orange-500 hover:text-black transition-colors border border-orange-500/50">
                                            Get Cookin'
                                        </button>
                                    </div>
                                </div>
                            </GlowCard>
                        </a>

                        {/* loopmemory.in GlowCard */}
                        <a href="https://www.loopmemory.in/" target="_blank" rel="noopener noreferrer" className="flex-1">
                            <GlowCard glowColor="blue" customSize className="h-full min-h-[400px]">
                                <div className="flex flex-col h-full justify-between">
                                    <div>
                                        <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-6">
                                            <Terminal className="w-7 h-7 text-blue-500" />
                                        </div>
                                        <h4 className="text-3xl font-black text-white mb-2">loopmemory.in</h4>
                                        <p className="text-xl font-bold text-blue-400 mb-6 tracking-tight">Because your brain has too many tabs open.</p>
                                        
                                        <div className="space-y-4 mb-8 border-l-2 border-blue-900 pl-4">
                                            <p className="text-zinc-300 font-medium">
                                                The "External Hard Drive" for your brain’s infinite tabs. LoopMemory is the Model Context Protocol (MCP) for your life.
                                            </p>
                                            <p className="text-zinc-400 italic text-sm">
                                                "You aren't forgetful; you're just un-indexed. Feed your LLM the actual truth, not just its best guess."
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-auto flex justify-between items-center w-full">
                                        <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Terminal Integration</span>
                                        <button className="px-6 py-2 rounded-lg bg-blue-500/20 text-blue-400 font-bold hover:bg-blue-500 hover:text-black transition-colors border border-blue-500/50">
                                            Close the Loop
                                        </button>
                                    </div>
                                </div>
                            </GlowCard>
                        </a>
                    </div>
                 </div>
            </div>

            {/* Chennai Sign-off Section (Classic Elegant) */}
            <div className="w-full bg-white relative z-10 py-16 md:py-32 px-4 md:px-8 border-t border-zinc-200 overflow-hidden">
                <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
                    <div className="flex-1 text-left">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm uppercase tracking-widest mb-6 border border-yellow-300">
                            Made In Namma Chennai 🌍
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-blue-600 mb-8 leading-tight tracking-tight">
                            Built from the coasts of Tamil Nadu, shipping to the world.
                        </h2>
                        <div className="border-l-[3px] border-yellow-400 pl-6 space-y-5 text-lg text-zinc-600 font-medium">
                            <p>
                                ☕ <strong className="text-zinc-900">Fueled by:</strong> Industrial volumes of strong degree filter kaapi because sleep is just a side-quest.
                            </p>
                            <p>
                                ☀️ <strong className="text-zinc-900">Climate strategy:</strong> Using the devastating 40°C humidity as an excuse to lock ourselves indoors and stay at our desks coding all day.
                            </p>
                            <p>
                                🐞 <strong className="text-zinc-900">Debugging philosophy:</strong> Just dropping a quick <span className="italic text-yellow-600 font-bold">"Sari, paathukalam"</span> anytime a bug hits production and fixing it while eating a masala dosa.
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex-1 w-full flex justify-center md:justify-end">
                        <img 
                            src="/chennai-collage.jpg" 
                            alt="Chennai Collage Illustration" 
                            className="relative rounded-2xl w-full max-w-sm md:max-w-md shadow-2xl border border-zinc-100 transition-transform hover:scale-[1.02] duration-500 bg-white"
                        />
                    </div>
                </div>
            </div>

            {/* Team Showcase Section */}
            <div className="w-full bg-zinc-950 relative z-10 pt-8 pb-16 md:pb-32 border-t border-zinc-900/50">
                <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 text-center md:text-left flex flex-col items-center md:items-start">
                    <h2 className="text-2xl md:text-5xl font-black text-white mb-4 tracking-tight">
                        We’re not hiring. We’re finding builders.
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-400 font-medium whitespace-pre-wrap md:whitespace-normal">
                        If you take ownership, ship daily — you belong here.
                    </p>
                </div>
                <div className="w-full relative z-10 px-0 md:px-0">
                    <TeamShowcase />
                </div>
            </div>

            {/* Why Invest In Us Section */}
            <div className="w-full bg-zinc-950 relative z-10 py-16 md:py-32 px-4 md:px-8 border-t border-zinc-900 overflow-hidden">
                <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
                    <h2 className="text-xs md:text-sm font-black uppercase tracking-widest text-blue-500 mb-6">
                        Why Invest in Us ?
                    </h2>
                    <h3 className="text-3xl md:text-6xl font-black text-white mb-10 md:mb-16 tracking-tight max-w-4xl leading-tight">
                        We run the experiments first, so you don’t have to gamble.
                    </h3>
                    
                    <div className="relative group w-full max-w-5xl rounded-[2rem] overflow-hidden shadow-2xl border border-zinc-800">
                        {/* Dramatic glow effect behind the image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10 pointer-events-none"></div>
                        <img 
                            src="/invest.jpg" 
                            alt="Wolf of Wall Street - Inspiration for Unfounded's risk-taking and experimental venture philosophy" 
                            className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Overlay text / CTA */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20 flex flex-col items-center">
                            <a href="mailto:hello@unfounded.in" className="px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-xl hover:bg-white hover:text-blue-600 hover:scale-105 transition-all shadow-xl border border-transparent hover:border-blue-600">
                                Partner With Unfounded
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Taped Footer Section */}
            <div className="w-full bg-black relative z-10 pt-16">
                <FooterTapedDesign />
            </div>
        </div>
    );
};

export { DemoOne };
