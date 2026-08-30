import { ResearchCaseStudy } from "@/types/research";

interface CaseStudyOverviewProps {
  study: ResearchCaseStudy;
}

export default function CaseStudyOverview({ study }: CaseStudyOverviewProps) {
  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="border-b border-divider pb-3">
        <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-burgundy-800 font-bold">
          01 / CONTEXT & MOTIVATION
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-espresso-900 mt-1">
          RESEARCH PROBLEM & MOTIVATION
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        {/* Problem Statement */}
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-burgundy-800 font-bold block">
            THE PROBLEM INVESTIGATED
          </span>
          <h4 className="text-lg sm:text-xl font-bold text-espresso-900">
            RESEARCH CHALLENGE
          </h4>
          <p className="text-base sm:text-[17px] text-warmgray-600 leading-relaxed font-normal">
            {study.problem}
          </p>
        </div>

        {/* Motivation Statement */}
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-burgundy-800 font-bold block">
            WHY IT MATTERS
          </span>
          <h4 className="text-lg sm:text-xl font-bold text-espresso-900">
            PRACTICAL & THEORETICAL IMPACT
          </h4>
          <p className="text-base sm:text-[17px] text-warmgray-600 leading-relaxed font-normal">
            {study.motivation}
          </p>
        </div>
      </div>
    </div>
  );
}
