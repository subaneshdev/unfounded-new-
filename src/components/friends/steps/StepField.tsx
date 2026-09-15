"use client";

import React, { useState } from "react";
import type { FriendsFormData, DisciplineCategory } from "@/types/friends";
import { ROLE_TAXONOMY } from "@/types/friends";
import { Check } from "lucide-react";

interface StepProps {
  data: FriendsFormData;
  updateData: (fields: Partial<FriendsFormData>) => void;
}

const CATEGORIES: DisciplineCategory[] = [
  "Developer",
  "Designer",
  "Marketer",
  "Digital Marketer",
  "Influencer",
  "Generalist",
];

export default function StepField({ data, updateData }: StepProps) {
  const [activeCategory, setActiveCategory] = useState<DisciplineCategory>(
    data.selectedCategories[0] || "Developer"
  );

  const toggleCategory = (cat: DisciplineCategory) => {
    let nextCats: DisciplineCategory[];
    if (data.selectedCategories.includes(cat)) {
      nextCats = data.selectedCategories.filter((c) => c !== cat);
    } else {
      nextCats = [...data.selectedCategories, cat];
    }
    updateData({ selectedCategories: nextCats });
    setActiveCategory(cat);
  };

  const toggleRole = (role: string) => {
    let nextRoles: string[];
    if (data.selectedRoles.includes(role)) {
      nextRoles = data.selectedRoles.filter((r) => r !== role);
    } else {
      nextRoles = [...data.selectedRoles, role];
    }
    updateData({ selectedRoles: nextRoles });
  };

  const selectAllInActive = () => {
    const rolesForActive = ROLE_TAXONOMY[activeCategory];
    const allSelected = rolesForActive.every((r) => data.selectedRoles.includes(r));
    if (allSelected) {
      updateData({
        selectedRoles: data.selectedRoles.filter((r) => !rolesForActive.includes(r)),
      });
    } else {
      const merged = Array.from(new Set([...data.selectedRoles, ...rolesForActive]));
      updateData({ selectedRoles: merged });
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center">
      <h2 className="text-4xl sm:text-5xl md:text-6xl text-white font-serif font-instrument mb-3 tracking-tight">
        Select the field that best represents your profile.
      </h2>
      <p className="text-white/60 text-sm md:text-base mb-8">
        Pick one or multiple disciplines. Select the specific roles you excel at.
      </p>

      {/* Main Category Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {CATEGORIES.map((cat) => {
          const isSelected = data.selectedCategories.includes(cat);
          const isViewing = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => toggleCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                isSelected
                  ? "bg-white text-black font-semibold shadow-lg shadow-white/10 scale-105"
                  : isViewing
                  ? "liquid-glass text-white border-white/40 ring-1 ring-white/30"
                  : "liquid-glass text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {isSelected && <Check className="w-3.5 h-3.5" />}
              <span>{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Roles container for Active Category */}
      <div className="liquid-glass rounded-3xl p-6 sm:p-8 w-full text-left">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="text-white font-medium text-base sm:text-lg">
              {activeCategory} Roles
            </h3>
            <p className="text-white/40 text-xs mt-0.5">
              Click the specific roles that match your superpowers:
            </p>
          </div>
          <button
            type="button"
            onClick={selectAllInActive}
            className="text-xs text-white/60 hover:text-white transition-colors underline cursor-pointer"
          >
            {ROLE_TAXONOMY[activeCategory].every((r) => data.selectedRoles.includes(r))
              ? "Deselect category"
              : "Select all in category"}
          </button>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {ROLE_TAXONOMY[activeCategory].map((role) => {
            const isRoleActive = data.selectedRoles.includes(role);
            return (
              <button
                key={role}
                type="button"
                onClick={() => toggleRole(role)}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm transition-all duration-200 cursor-pointer flex items-center gap-2 text-left ${
                  isRoleActive
                    ? "bg-white/20 text-white border border-white/40 shadow-inner font-medium"
                    : "bg-white/[0.03] text-white/70 border border-white/10 hover:border-white/20 hover:text-white"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] border transition-colors ${
                    isRoleActive
                      ? "bg-white text-black border-white"
                      : "border-white/30 bg-transparent"
                  }`}
                >
                  {isRoleActive && <Check className="w-2.5 h-2.5" />}
                </div>
                <span>{role}</span>
              </button>
            );
          })}
        </div>

        {/* Selected count badge */}
        <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
          <span>
            {data.selectedRoles.length} specific role{data.selectedRoles.length === 1 ? "" : "s"} selected
          </span>
          <span className="text-white/30">
            You can select roles across multiple categories
          </span>
        </div>
      </div>
    </div>
  );
}
