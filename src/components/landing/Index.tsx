"use client";

import React from "react";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import FeaturedVideoSection from "@/components/landing/FeaturedVideoSection";
import PhilosophySection from "@/components/landing/PhilosophySection";
import ServicesSection from "@/components/landing/ServicesSection";
import FriendsBannerSection from "@/components/landing/FriendsBannerSection";
import Footer from "@/components/landing/Footer";

export default function Index() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black">
      <HeroSection />
      <AboutSection />
      <FeaturedVideoSection />
      <PhilosophySection />
      <ServicesSection />
      <FriendsBannerSection />
      <Footer />
    </div>
  );
}
