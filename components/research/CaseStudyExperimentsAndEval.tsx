import { ResearchCaseStudy } from "@/types/research";

interface CaseStudyExperimentsAndEvalProps {
  study: ResearchCaseStudy;
}

export default function CaseStudyExperimentsAndEval({ study }: CaseStudyExperimentsAndEvalProps) {
  const { experiments, evaluation } = study;

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="border-b border-divider pb-3">
        <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-burgundy-800 font-bold">
          04 / EXPERIMENTAL FRAMEWORK & EVALUATION
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-espresso-900 mt-1">
          EXPERIMENTS & EVALUATION PROTOCOL
        </h3>
      </div>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        {/* EXPERIMENTS */}
        <div className="space-y-5">
          <h4 className="text-lg sm:text-xl font-bold tracking-tight text-espresso-900 border-b border-divider pb-2">
            EXPERIMENTAL SETUP & BASELINES
          </h4>

          <dl className="space-y-4 divide-y divide-divider/60 text-sm sm:text-base">
            {experiments.baselines && experiments.baselines.length > 0 && (
              <div className="pt-3 first:pt-0">
                <dt className="text-xs font-mono uppercase tracking-wider text-burgundy-800 font-bold">
                  BASELINES FOR COMPARISON
                </dt>
                <dd className="text-espresso-900 font-medium mt-1 leading-relaxed">
                  {experiments.baselines.join("  ·  ")}
                </dd>
              </div>
            )}

            <div className="pt-3">
              <dt className="text-xs font-mono uppercase tracking-wider text-burgundy-800 font-bold">
                EXPERIMENTAL SETUP
              </dt>
              <dd className="text-warmgray-600 mt-1 leading-relaxed">
                {experiments.experimentalSetup ? experiments.experimentalSetup : "To be documented"}
              </dd>
            </div>

            {experiments.trainingSetup && (
              <div className="pt-3">
                <dt className="text-xs font-mono uppercase tracking-wider text-burgundy-800 font-bold">
                  FRAMEWORK / ENVIRONMENT
                </dt>
                <dd className="text-espresso-900 font-mono text-sm mt-1">
                  {experiments.trainingSetup}
                </dd>
              </div>
            )}

            {experiments.experimentsPerformed && experiments.experimentsPerformed.length > 0 && (
              <div className="pt-3">
                <dt className="text-xs font-mono uppercase tracking-wider text-burgundy-800 font-bold">
                  EXPERIMENTS PERFORMED
                </dt>
                <dd className="text-warmgray-600 mt-1 leading-relaxed">
                  <ul className="list-disc list-inside space-y-1">
                    {experiments.experimentsPerformed.map((exp, i) => (
                      <li key={i}>{exp}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            )}
          </dl>
        </div>

        {/* EVALUATION PROTOCOL */}
        <div className="space-y-5">
          <h4 className="text-lg sm:text-xl font-bold tracking-tight text-espresso-900 border-b border-divider pb-2">
            EVALUATION PROTOCOL & METRICS
          </h4>

          <dl className="space-y-4 divide-y divide-divider/60 text-sm sm:text-base">
            {evaluation.metrics && evaluation.metrics.length > 0 && (
              <div className="pt-3 first:pt-0">
                <dt className="text-xs font-mono uppercase tracking-wider text-burgundy-800 font-bold">
                  PRIMARY EVALUATION METRICS
                </dt>
                <dd className="text-espresso-900 font-mono text-sm font-semibold mt-1">
                  {evaluation.metrics.join("  ·  ")}
                </dd>
              </div>
            )}

            {evaluation.evaluationProtocol && (
              <div className="pt-3">
                <dt className="text-xs font-mono uppercase tracking-wider text-burgundy-800 font-bold">
                  EVALUATION PROTOCOL
                </dt>
                <dd className="text-warmgray-600 mt-1 leading-relaxed">
                  {evaluation.evaluationProtocol}
                </dd>
              </div>
            )}

            {evaluation.comparisonCriteria && evaluation.comparisonCriteria.length > 0 && (
              <div className="pt-3">
                <dt className="text-xs font-mono uppercase tracking-wider text-burgundy-800 font-bold">
                  COMPARISON CRITERIA
                </dt>
                <dd className="text-espresso-900 mt-1 leading-relaxed">
                  {evaluation.comparisonCriteria.join("  ·  ")}
                </dd>
              </div>
            )}
          </dl>
        </div>
      </div>
    </div>
  );
}
