import { ResearchCaseStudy } from "@/types/research";

interface CaseStudyResultsProps {
  study: ResearchCaseStudy;
}

export default function CaseStudyResults({ study }: CaseStudyResultsProps) {
  const { results, identity } = study;

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="border-b border-divider pb-3">
        <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-burgundy-800 font-bold">
          05 / MEASURED OUTCOMES
        </span>
        <h4 className="text-2xl sm:text-3xl font-bold tracking-tight text-espresso-900 mt-1">
          RESULTS & EXPERIMENTAL FINDINGS
        </h4>
      </div>

      <div className="max-w-4xl space-y-8">
        {/* Summary Paragraph */}
        {results.summary && (
          <p className="text-base sm:text-[17px] text-espresso-900 font-medium leading-relaxed">
            {results.summary}
          </p>
        )}

        {/* Verified Metric Display Section — Pure Editorial Alignment */}
        <div className="space-y-4 pt-2">
          <span className="text-xs font-mono uppercase tracking-widest text-burgundy-800 font-bold block">
            VERIFIED METRICS & EVIDENCE STATUS
          </span>

          <div className="divide-y divide-divider border-t border-b border-divider py-1 font-mono text-sm sm:text-base">
            {identity.id === "diabetic-retinopathy-ai" || identity.id === "diabetic-retinopathy" ? (
              <>
                <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-xs uppercase tracking-wider text-warmgray-600 font-bold">
                    DATASET SCALE
                  </span>
                  <span className="text-espresso-900 font-bold text-base sm:text-lg">
                    35,126 fundus images
                  </span>
                </div>

                <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-xs uppercase tracking-wider text-warmgray-600 font-bold">
                    QWK METRIC
                  </span>
                  <span className="text-espresso-900 font-bold text-base sm:text-lg">
                    0.78 → 0.84
                  </span>
                </div>

                <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-xs uppercase tracking-wider text-warmgray-600 font-bold">
                    MACRO-F1 METRIC
                  </span>
                  <span className="text-espresso-900 font-bold text-base sm:text-lg">
                    0.71 → 0.76
                  </span>
                </div>
              </>
            ) : (
              results.metrics?.map((metric, idx) => {
                const isTransition = metric.includes(":");
                const [label, val] = isTransition
                  ? metric.split(":")
                  : ["MEASUREMENT", metric];

                const isUnverified = val && val.trim().toLowerCase().includes("to be documented");

                return (
                  <div
                    key={idx}
                    className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <span className="text-xs uppercase tracking-wider text-warmgray-600 font-bold">
                      {label.trim()}
                    </span>
                    <span
                      className={`text-sm sm:text-base ${
                        isUnverified
                          ? "text-warmgray-600 font-normal italic"
                          : "text-espresso-900 font-medium"
                      }`}
                    >
                      {val ? val.trim() : metric}
                    </span>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Experimental Observations & Findings */}
        {results.observations && results.observations.length > 0 && (
          <div className="space-y-3 pt-3">
            <span className="text-xs font-mono uppercase tracking-widest text-warmgray-600 font-bold block">
              EXPERIMENTAL OBSERVATIONS
            </span>
            <ul className="space-y-2.5 text-sm sm:text-base text-warmgray-600">
              {results.observations.map((obs, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-burgundy-800 font-bold text-base leading-none mt-0.5">
                    —
                  </span>
                  <span className="leading-relaxed text-espresso-900 font-normal">{obs}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
