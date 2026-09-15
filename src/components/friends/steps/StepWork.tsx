"use client";

import React from "react";
import type { FriendsFormData, ProjectWork } from "@/types/friends";
import { Plus, Trash2 } from "lucide-react";

interface StepProps {
  data: FriendsFormData;
  updateData: (fields: Partial<FriendsFormData>) => void;
}

export default function StepWork({ data, updateData }: StepProps) {
  const addProject = () => {
    if (data.projects.length >= 3) return;
    const newProject: ProjectWork = {
      id: Date.now().toString(),
      url: "",
      role: "",
    };
    updateData({ projects: [...data.projects, newProject] });
  };

  const updateProject = (id: string, fields: Partial<ProjectWork>) => {
    const updated = data.projects.map((p) => (p.id === id ? { ...p, ...fields } : p));
    updateData({ projects: updated });
  };

  const removeProject = (id: string) => {
    if (data.projects.length <= 1) return;
    updateData({ projects: data.projects.filter((p) => p.id !== id) });
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
      <h2 className="text-4xl sm:text-5xl md:text-6xl text-white font-serif font-instrument mb-3 tracking-tight">
        Show us your work.
      </h2>
      <p className="text-white/60 text-sm md:text-base mb-8">
        Portfolio link and up to 3 pieces of work you&apos;re most proud of.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left">
        {/* Left Card: Portfolio Links */}
        <div className="liquid-glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <label className="block uppercase tracking-wider text-[11px] font-semibold text-white/70 mb-1">
              Your Portfolio, Website or Resume <span className="text-amber-300/80 font-normal">(Mandatory)</span>
            </label>
            <p className="text-xs text-white/40 mb-4">
              If you have PDFs, upload to Google Drive / Figma / Notion and attach the link.
            </p>

            <div className="space-y-3">
              <div>
                <input
                  type="url"
                  required
                  value={data.primaryPortfolio}
                  onChange={(e) => updateData({ primaryPortfolio: e.target.value })}
                  placeholder="Primary link - portfolio, resume, GitHub, Behance..."
                  className="w-full bg-white/[0.04] border border-white/15 focus:border-white/40 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors text-sm"
                />
              </div>
              <div>
                <input
                  type="url"
                  value={data.secondaryPortfolio}
                  onChange={(e) => updateData({ secondaryPortfolio: e.target.value })}
                  placeholder="Optional - another site or live product"
                  className="w-full bg-white/[0.04] border border-white/10 focus:border-white/30 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors text-sm"
                />
              </div>
              <div>
                <input
                  type="url"
                  value={data.tertiaryPortfolio}
                  onChange={(e) => updateData({ tertiaryPortfolio: e.target.value })}
                  placeholder="Optional - one more if you have it"
                  className="w-full bg-white/[0.04] border border-white/10 focus:border-white/30 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors text-sm"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 text-xs text-white/40">
            We love live product URLs, GitHub repos, Figma prototypes, and viral campaigns with real metrics.
          </div>
        </div>

        {/* Right Card: Work You're Proud Of */}
        <div className="liquid-glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <label className="block uppercase tracking-wider text-[11px] font-semibold text-white/70">
                  Work You&apos;re Proud Of <span className="text-amber-300/80 font-normal">(Mandatory)</span>
                </label>
                <p className="text-xs text-white/40 mt-0.5">
                  Specific project showcase
                </p>
              </div>

              {data.projects.length < 3 && (
                <button
                  type="button"
                  onClick={addProject}
                  className="liquid-glass px-3 py-1.5 rounded-full text-xs text-white hover:bg-white/10 flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add work</span>
                </button>
              )}
            </div>

            <div className="space-y-4 max-h-[360px] overflow-y-auto pr-1">
              {data.projects.map((proj, idx) => (
                <div
                  key={proj.id}
                  className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2 relative group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium text-white/50">
                      Piece {idx + 1} of 3
                    </span>
                    {data.projects.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeProject(proj.id)}
                        className="text-white/40 hover:text-rose-400 p-1 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  <input
                    type="url"
                    value={proj.url}
                    onChange={(e) => updateProject(proj.id, { url: e.target.value })}
                    placeholder="Link to your work (app, repo, post, video)"
                    className="w-full bg-white/[0.04] border border-white/10 focus:border-white/30 rounded-xl px-3 py-2 text-white placeholder:text-white/30 outline-none text-xs sm:text-sm"
                  />

                  <textarea
                    rows={2}
                    maxLength={500}
                    value={proj.role}
                    onChange={(e) => updateProject(proj.id, { role: e.target.value })}
                    placeholder="Your role and contribution in 500 characters..."
                    className="w-full bg-white/[0.04] border border-white/10 focus:border-white/30 rounded-xl px-3 py-2 text-white placeholder:text-white/30 outline-none text-xs resize-none"
                  />
                  <div className="text-right text-[10px] text-white/30">
                    {proj.role.length}/500
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
