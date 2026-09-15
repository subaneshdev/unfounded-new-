"use client";

import React, { useState } from "react";
import FellowshipHero from "@/components/fellowship/FellowshipHero";
import FellowshipManifesto from "@/components/fellowship/FellowshipManifesto";
import FellowshipApplicationModal from "@/components/fellowship/FellowshipApplicationModal";

export default function FellowshipExperience() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* 1. Fullscreen Cinematic Hero with Video Background */}
      <FellowshipHero onOpenApply={() => setIsApplyModalOpen(true)} />

      {/* 2. Comprehensive Fellowship Program & Manifesto */}
      <FellowshipManifesto onOpenApply={() => setIsApplyModalOpen(true)} />

      {/* 3. Interactive Application Modal */}
      <FellowshipApplicationModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />
    </div>
  );
}
