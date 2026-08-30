import { ResearchCaseStudy } from "@/types/research";

interface CaseStudyLimitationsAndNextStepsProps {
  study: ResearchCaseStudy;
}

export default function CaseStudyLimitationsAndNextSteps({
  study,
}: CaseStudyLimitationsAndNextStepsProps) {
  const { limitations, nextSteps } = study;

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="border-b border-divider pb-3">
        <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-burgundy-800 font-bold">
          06 / CONSTRAINTS & FUTURE VECTORS
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-espresso-900 mt-1">
          LIMITATIONS & NEXT STEPS
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        {/* LIMITATIONS SECTION */}
        <div className="space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-burgundy-800 font-bold block">
            RESEARCH LIMITATIONS
          </span>

          <p className="text-sm text-warmgray-600 font-normal leading-relaxed">
            In the interest of scientific rigor and technical transparency, the following boundaries are explicitly noted:
          </p>

          <ul className="space-y-3 pt-1">
            {limitations.map((item, idx) => (
              <li
                key={idx}
                className="text-sm sm:text-base text-espresso-900 font-normal leading-relaxed flex items-start gap-3"
              >
                <span className="text-burgundy-800 font-bold font-mono shrink-0">
                  0{idx + 1} —
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* NEXT STEPS SECTION */}
        <div className="space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-burgundy-800 font-bold block">
            FUTURE VECTORS
          </span>

          <p className="text-sm text-warmgray-600 font-normal leading-relaxed">
            This ongoing research vector is currently moving toward the following verified directions:
          </p>

          <ul className="space-y-3 pt-1">
            {nextSteps.map((step, idx) => (
              <li
                key={idx}
                className="text-sm sm:text-base text-espresso-900 font-medium leading-relaxed flex items-start gap-3"
              >
                <span className="text-burgundy-800 font-bold font-mono shrink-0">
                  0{idx + 1} —
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
