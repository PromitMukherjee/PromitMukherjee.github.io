import { ResearchCaseStudy } from "@/types/research";

interface CaseStudyQuestionProps {
  study: ResearchCaseStudy;
}

export default function CaseStudyQuestion({ study }: CaseStudyQuestionProps) {
  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="border-b border-divider pb-3">
        <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-burgundy-800 font-bold">
          02 / INTELLECTUAL CORE
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-espresso-900 mt-1">
          RESEARCH QUESTION & HYPOTHESIS
        </h3>
      </div>

      <div className="max-w-4xl space-y-8">
        {/* Research Question: Visually Prominent, Typography & Whitespace, NOT in a card or quote box */}
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-burgundy-800 font-bold block">
            RESEARCH QUESTION
          </span>
          <h4 className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-espresso-900 leading-snug font-normal">
            "{study.researchQuestion}"
          </h4>
        </div>

        {/* Hypothesis Statement */}
        <div className="space-y-2 pt-4 border-t border-divider/60">
          <span className="text-xs font-mono uppercase tracking-widest text-warmgray-600 font-bold block">
            RESEARCH HYPOTHESIS
          </span>
          <p className="text-base sm:text-lg text-espresso-900 leading-relaxed font-normal">
            {study.hypothesis}
          </p>
        </div>
      </div>
    </div>
  );
}
