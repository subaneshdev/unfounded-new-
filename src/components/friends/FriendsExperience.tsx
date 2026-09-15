"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { FriendsFormData } from "@/types/friends";
import { INITIAL_FORM_DATA } from "@/types/friends";

import FriendsHero from "@/components/friends/FriendsHero";
import FriendsWizardNav from "@/components/friends/FriendsWizardNav";
import UpdateProfileModal from "@/components/friends/UpdateProfileModal";

import StepBasics from "@/components/friends/steps/StepBasics";
import StepSocial from "@/components/friends/steps/StepSocial";
import StepField from "@/components/friends/steps/StepField";
import StepWork from "@/components/friends/steps/StepWork";
import StepAbout from "@/components/friends/steps/StepAbout";
import StepStatus from "@/components/friends/steps/StepStatus";
import StepAvailability from "@/components/friends/steps/StepAvailability";
import StepCompensation from "@/components/friends/steps/StepCompensation";
import StepSuccess from "@/components/friends/steps/StepSuccess";

const TOTAL_STEPS = 8;

export default function FriendsExperience() {
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FriendsFormData>(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [applicantId, setApplicantId] = useState("FOU-UNFOUNDED");
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const updateFormData = (fields: Partial<FriendsFormData>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
    setErrorMessage(null);
  };

  // Validation helper
  const getStepError = (stepIdx: number): boolean => {
    switch (stepIdx) {
      case 0:
        return !formData.fullName.trim() || !formData.email.trim();
      case 1:
        return !formData.linkedin.trim();
      case 2:
        return (
          formData.selectedCategories.length === 0 &&
          formData.selectedRoles.length === 0
        );
      case 3:
        return !formData.primaryPortfolio.trim();
      case 4:
        return false;
      case 5:
        return !formData.workingStatus;
      case 6:
        return !formData.weeklyAvailability;
      case 7:
        return formData.pricingModel.length === 0;
      default:
        return false;
    }
  };

  const errorsByStep: Record<number, boolean> = {
    0: getStepError(0),
    1: getStepError(1),
    2: getStepError(2),
    3: getStepError(3),
    4: getStepError(4),
    5: getStepError(5),
    6: getStepError(6),
    7: getStepError(7),
  };

  const handleNext = async () => {
    setErrorMessage(null);

    // Validate current step before advancing
    if (getStepError(currentStep)) {
      if (currentStep === 0) {
        setErrorMessage("Please enter your full name and email address.");
      } else if (currentStep === 1) {
        setErrorMessage("Please provide your LinkedIn or GitHub profile link.");
      } else if (currentStep === 2) {
        setErrorMessage("Please select at least one discipline or role.");
      } else if (currentStep === 3) {
        setErrorMessage("Please provide a primary portfolio, website, or resume link.");
      } else if (currentStep === 5) {
        setErrorMessage("Please choose your current working status.");
      } else if (currentStep === 6) {
        setErrorMessage("Please select your weekly availability.");
      } else if (currentStep === 7) {
        setErrorMessage("Please select at least one preferred pricing model.");
      }
      return;
    }

    if (currentStep < TOTAL_STEPS - 1) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Final submission
      setIsSubmitting(true);
      try {
        const res = await fetch("/api/friends", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const result = await res.json();
        if (result.success) {
          setApplicantId(result.applicantId || `FOU-${Date.now().toString(36).toUpperCase()}`);
          setIsSuccess(true);
        } else {
          setErrorMessage(result.error || "Submission failed. Please check your fields.");
        }
      } catch {
        // Fallback offline success
        setApplicantId(`FOU-${Date.now().toString(36).toUpperCase()}`);
        setIsSuccess(true);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleBack = () => {
    setErrorMessage(null);
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setIsWizardOpen(false);
    }
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_DATA);
    setIsSuccess(false);
    setCurrentStep(0);
    setIsWizardOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col justify-between selection:bg-white selection:text-black">
      {/* Background Image Scrim for the entire experience */}
      <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
        <Image
          src="/friends-hero-bg.jpg"
          alt="Unfounded Friends Backdrop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%] opacity-20 brightness-75"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Hero View */}
      {!isWizardOpen ? (
        <FriendsHero
          onStartWizard={() => {
            setIsWizardOpen(true);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onOpenUpdateProfile={() => setIsUpdateModalOpen(true)}
        />
      ) : (
        /* Wizard View */
        <div className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 px-4 sm:px-6">
          {/* Top Progress Navbar */}
          <FriendsWizardNav
            currentStep={currentStep}
            totalSteps={TOTAL_STEPS}
            onStepClick={(idx) => {
              setCurrentStep(idx);
              setErrorMessage(null);
            }}
            onLogoClick={() => setIsWizardOpen(false)}
            errorsByStep={errorsByStep}
          />

          {/* Wizard Content Body */}
          <div className="flex-1 flex flex-col items-center justify-center my-auto w-full z-10 py-6">
            {isSuccess ? (
              <StepSuccess
                data={formData}
                applicantId={applicantId}
                onReset={handleReset}
              />
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="w-full"
                >
                  {currentStep === 0 && (
                    <StepBasics data={formData} updateData={updateFormData} />
                  )}
                  {currentStep === 1 && (
                    <StepSocial data={formData} updateData={updateFormData} />
                  )}
                  {currentStep === 2 && (
                    <StepField data={formData} updateData={updateFormData} />
                  )}
                  {currentStep === 3 && (
                    <StepWork data={formData} updateData={updateFormData} />
                  )}
                  {currentStep === 4 && (
                    <StepAbout data={formData} updateData={updateFormData} />
                  )}
                  {currentStep === 5 && (
                    <StepStatus data={formData} updateData={updateFormData} />
                  )}
                  {currentStep === 6 && (
                    <StepAvailability
                      data={formData}
                      updateData={updateFormData}
                    />
                  )}
                  {currentStep === 7 && (
                    <StepCompensation
                      data={formData}
                      updateData={updateFormData}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            )}

            {/* Error Banner */}
            {errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 px-4 py-2 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-medium"
              >
                {errorMessage}
              </motion.div>
            )}
          </div>

          {/* Bottom Back / Next Floating Actions */}
          {!isSuccess && (
            <div className="sticky bottom-4 z-20 w-full max-w-xl mx-auto flex items-center gap-4 pt-4">
              <button
                type="button"
                onClick={handleBack}
                className="liquid-glass hover:bg-white/10 w-1/2 py-3.5 px-6 rounded-full text-white text-xs sm:text-sm font-medium transition-all cursor-pointer text-center"
              >
                {currentStep === 0 ? "Back to Home" : "Back"}
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={isSubmitting}
                className="w-1/2 py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold bg-white text-black hover:bg-white/90 transition-all cursor-pointer text-center shadow-lg shadow-white/15 disabled:opacity-50"
              >
                {isSubmitting
                  ? "Submitting..."
                  : currentStep === TOTAL_STEPS - 1
                  ? "Complete Profile"
                  : "Next"}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Profile Update Modal */}
      <UpdateProfileModal
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        onStartNewApplication={() => setIsWizardOpen(true)}
      />
    </div>
  );
}
