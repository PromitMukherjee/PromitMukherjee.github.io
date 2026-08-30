"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ResearchCaseStudy } from "@/types/research";
import { getAdjacentResearchCaseStudies } from "@/data/researchCaseStudies";
import CaseStudyOverview from "./CaseStudyOverview";
import CaseStudyQuestion from "./CaseStudyQuestion";
import CaseStudyDataAndMethod from "./CaseStudyDataAndMethod";
import CaseStudyExperimentsAndEval from "./CaseStudyExperimentsAndEval";
import CaseStudyResults from "./CaseStudyResults";
import CaseStudyLimitationsAndNextSteps from "./CaseStudyLimitationsAndNextSteps";
import CaseStudyResources from "./CaseStudyResources";
import CaseStudyNavigation from "./CaseStudyNavigation";

interface CaseStudyModalProps {
  study: ResearchCaseStudy | null;
  onClose: () => void;
  onSelectStudy: (id: string) => void;
}

export default function CaseStudyModal({
  study,
  onClose,
  onSelectStudy,
}: CaseStudyModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Lock body scroll and handle focus management
  useEffect(() => {
    if (study) {
      previousFocusRef.current = document.activeElement as HTMLElement;

      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      // Focus close button on open
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          e.preventDefault();
          onClose();
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
        if (previousFocusRef.current && typeof previousFocusRef.current.focus === "function") {
          previousFocusRef.current.focus();
        }
      };
    }
  }, [study, onClose]);

  if (!study) return null;

  const { identity, positioning } = study;
  const { prev, next } = getAdjacentResearchCaseStudies(identity.id);

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-modal-title"
      >
        {/* Subtle Dark Translucent Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 bg-espresso-900/65 backdrop-blur-[2px]"
          aria-hidden="true"
        />

        {/* Centered Editorial Research Sheet Overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-[94vw] max-w-[1160px] h-[86vh] max-h-[920px] bg-ivory-50 border border-divider rounded-2xs shadow-2xl z-10 overflow-hidden flex flex-col focus:outline-none"
        >
          {/* Header Bar — Top Sticky Context & Action Bar */}
          <div className="sticky top-0 z-20 bg-ivory-50/95 backdrop-blur-md border-b border-divider px-6 sm:px-10 py-6 flex flex-col md:flex-row md:items-start justify-between gap-6 shrink-0">
            <div className="space-y-2 max-w-3xl">
              {/* Identity & Status (Quiet line, no pills) */}
              <div className="flex items-center gap-3 text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-burgundy-800 font-bold">
                <span>{identity.number}</span>
                <span>·</span>
                <span>{identity.status.toUpperCase()}</span>
                <span>·</span>
                <span>{identity.year}</span>
              </div>

              {/* Research Project Title */}
              <h2
                id="case-study-modal-title"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-espresso-900 leading-tight"
              >
                {identity.title}
              </h2>

              {/* Subdomain Categories — Plain text dividers, no UI control look */}
              <div className="text-xs sm:text-sm font-mono text-warmgray-600 font-medium tracking-wide">
                {positioning.domain}
                {positioning.subdomains.length > 0 && (
                  <span>
                    {"  ·  "}
                    {positioning.subdomains.join("  ·  ")}
                  </span>
                )}
              </div>

              {/* Short Summary */}
              <p className="text-sm sm:text-base text-warmgray-600 leading-relaxed font-normal pt-1">
                {positioning.summary}
              </p>
            </div>

            {/* Close Button Control */}
            <div className="shrink-0 flex items-start justify-end">
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="inline-flex items-center gap-2 px-4 py-2 border border-divider hover:border-burgundy-800 text-xs sm:text-sm font-mono uppercase tracking-widest font-bold text-espresso-900 hover:text-burgundy-800 bg-purewhite rounded-2xs transition-colors focus:outline-none focus:ring-2 focus:ring-burgundy-800"
                aria-label="Close research dossier"
              >
                <X className="w-4 h-4 text-burgundy-800" />
                <span>CLOSE</span>
              </button>
            </div>
          </div>

          {/* Internal Scroll Area — 6 Editorial Content Groups */}
          <div className="overflow-y-auto overflow-x-hidden flex-1 divide-y divide-divider/80">
            {/* GROUP 1: Overview (Problem & Motivation) */}
            <div className="p-6 sm:p-10 lg:p-12">
              <CaseStudyOverview study={study} />
            </div>

            {/* GROUP 2: Core Research Question & Hypothesis */}
            <div className="p-6 sm:p-10 lg:p-12">
              <CaseStudyQuestion study={study} />
            </div>

            {/* GROUP 3: Data Architecture & Methodology (+ Visuals) */}
            <div className="p-6 sm:p-10 lg:p-12">
              <CaseStudyDataAndMethod study={study} />
            </div>

            {/* GROUP 4: Experiments, Evaluation & Verified Results */}
            <div className="p-6 sm:p-10 lg:p-12 space-y-12">
              <CaseStudyExperimentsAndEval study={study} />
              <div className="pt-8 border-t border-divider/60">
                <CaseStudyResults study={study} />
              </div>
            </div>

            {/* GROUP 5: Boundaries, Limitations & Next Steps */}
            <div className="p-6 sm:p-10 lg:p-12">
              <CaseStudyLimitationsAndNextSteps study={study} />
            </div>

            {/* GROUP 6: Resources & Artifacts */}
            <div className="p-6 sm:p-10 lg:p-12">
              <CaseStudyResources study={study} />
            </div>

            {/* Dossier Navigation Footer inside Overlay */}
            <div className="p-6 sm:p-10 bg-purewhite border-t border-divider">
              <CaseStudyNavigation
                prev={prev}
                next={next}
                onSelectStudy={onSelectStudy}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
