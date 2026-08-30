"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { selectedResearchProjects } from "@/data/projects";
import { getResearchCaseStudyById } from "@/data/researchCaseStudies";
import { ResearchCaseStudy } from "@/types/research";
import CaseStudyModal from "./research/CaseStudyModal";

export default function FeaturedResearch() {
  const [activeStudy, setActiveStudy] = useState<ResearchCaseStudy | null>(null);

  const openStudyModal = (id: string) => {
    const study = getResearchCaseStudyById(id);
    if (study) {
      setActiveStudy(study);
      const newUrl = `${window.location.pathname}?research=${study.identity.id}${window.location.hash}`;
      window.history.pushState({ researchId: study.identity.id }, "", newUrl);
    }
  };

  const closeStudyModal = () => {
    setActiveStudy(null);
    const newUrl = `${window.location.pathname}${window.location.hash}`;
    window.history.pushState(null, "", newUrl);
  };

  // Sync with URL parameters on mount and browser popstate
  useEffect(() => {
    const checkUrlForResearch = () => {
      if (typeof window === "undefined") return;
      const params = new URLSearchParams(window.location.search);
      const researchParam = params.get("research");
      if (researchParam) {
        const study = getResearchCaseStudyById(researchParam);
        if (study) {
          setActiveStudy(study);
        }
      }
    };

    checkUrlForResearch();

    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const researchParam = params.get("research");
      if (researchParam) {
        const study = getResearchCaseStudyById(researchParam);
        setActiveStudy(study || null);
      } else {
        setActiveStudy(null);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <section id="projects" className="py-20 sm:py-24 bg-ivory-50 border-t border-divider scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Compact Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-divider mb-10">
          <div>
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-burgundy-800 font-bold block">
              RESEARCH CASE STUDIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-espresso-900 mt-1">
              SELECTED RESEARCH
            </h2>
          </div>
          {/* Refined Intellectual Framing Statement */}
          <p className="text-sm sm:text-base text-espresso-900 font-serif italic max-w-lg mt-4 md:mt-0 font-normal leading-relaxed border-l-2 border-burgundy-800/40 pl-3.5 py-0.5">
            "Investigating fundamental principles of representation, information encoding, and memory-efficient computation across machine learning, computational biology, and algorithmic systems."
          </p>
        </div>

        {/* Refined 2×2 Editorial Research Index Grid with Small Gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {selectedResearchProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 sm:p-7 bg-purewhite border border-divider rounded-2xs flex flex-col justify-between space-y-4"
            >
              {/* Compact Information Hierarchy */}
              <div className="space-y-3.5">
                
                {/* 01 / NUMBER & STATUS / YEAR */}
                <div className="flex items-center justify-between pb-2 border-b border-divider/60">
                  <span className="text-xs font-mono uppercase tracking-widest text-burgundy-800 font-bold">
                    {project.number} · {project.status}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-warmgray-600 font-medium">
                    2026
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-espresso-900 leading-snug">
                  {project.title}
                </h3>

                {/* Domain / Category Tags (Inline Text) */}
                <div className="text-xs font-mono uppercase tracking-wider text-burgundy-800 font-bold">
                  {project.categories.join("  ·  ")}
                </div>

                {/* Short Research Summary (2–3 Lines) */}
                <p className="text-xs sm:text-sm text-warmgray-600 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Compact Research Question */}
                <div className="pt-1 space-y-1">
                  <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-warmgray-600 font-bold block">
                    RESEARCH QUESTION
                  </span>
                  <h4 className="text-xs sm:text-sm font-serif italic text-espresso-900 border-l-2 border-burgundy-800/40 pl-3 py-0.5 font-normal leading-snug">
                    "{project.researchQuestion}"
                  </h4>
                </div>

                {/* Approach (Inline Strategy) */}
                <div className="pt-1 space-y-1">
                  <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-warmgray-600 font-bold block">
                    APPROACH
                  </span>
                  <div className="text-xs font-mono text-espresso-900 font-semibold">
                    {project.approach.join("  ·  ")}
                  </div>
                </div>

              </div>

              {/* Action Link — Visually Distinct Interactive Control */}
              <div className="pt-3 border-t border-divider/60">
                <button
                  onClick={() => openStudyModal(project.id)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono uppercase tracking-wider font-bold text-burgundy-800 hover:text-burgundy-900 transition-colors focus:outline-none focus:ring-2 focus:ring-burgundy-800 rounded-2xs cursor-pointer"
                >
                  <span>EXPLORE CASE STUDY →</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* Editorial Research Overlay Dossier Modal */}
      <CaseStudyModal
        study={activeStudy}
        onClose={closeStudyModal}
        onSelectStudy={openStudyModal}
      />
    </section>
  );
}
