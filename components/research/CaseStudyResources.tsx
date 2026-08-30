import { ResearchCaseStudy } from "@/types/research";
import { ArrowUpRight } from "lucide-react";

interface CaseStudyResourcesProps {
  study: ResearchCaseStudy;
}

export default function CaseStudyResources({ study }: CaseStudyResourcesProps) {
  const { resources } = study;

  const resourceItems = [
    {
      label: "DATASET ACCESS",
      value: resources.dataset,
      isLink: false,
    },
    {
      label: "SOURCE CODE / REPOSITORY",
      value: resources.github,
      isLink: Boolean(resources.github && resources.github.startsWith("http")),
    },
    {
      label: "RESEARCH PAPER",
      value: resources.paper,
      isLink: Boolean(resources.paper && resources.paper.startsWith("http")),
    },
    {
      label: "PREPRINT MANUSCRIPT",
      value: resources.preprint,
      isLink: Boolean(resources.preprint && resources.preprint.startsWith("http")),
    },
    {
      label: "DOCUMENTATION",
      value: resources.documentation,
      isLink: Boolean(resources.documentation && resources.documentation.startsWith("http")),
    },
  ];

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="border-b border-divider pb-3">
        <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-burgundy-800 font-bold">
          07 / REPOSITORY & ARTIFACTS
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-espresso-900 mt-1">
          RESEARCH RESOURCES & ARTIFACTS
        </h3>
      </div>

      {/* Editorial List Layout */}
      <div className="divide-y divide-divider border-t border-b border-divider font-mono text-sm sm:text-base">
        {resourceItems.map((item, idx) => {
          const hasVal = Boolean(item.value);
          const isUnverified = !hasVal || item.value === "To be documented";

          return (
            <div
              key={idx}
              className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="space-y-1 max-w-xl">
                <div className="text-xs uppercase tracking-wider text-burgundy-800 font-bold">
                  {item.label}
                </div>
                <div
                  className={`text-sm sm:text-base ${
                    isUnverified
                      ? "text-warmgray-600 font-normal italic"
                      : "text-espresso-900 font-medium"
                  }`}
                >
                  {hasVal ? item.value : "To be documented"}
                </div>
              </div>

              {/* Genuine Interactive Control */}
              {item.isLink && item.value && (
                <div className="shrink-0 pt-1 sm:pt-0">
                  <a
                    href={item.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-divider hover:border-burgundy-800 text-xs font-mono uppercase tracking-wider font-bold text-espresso-900 hover:text-burgundy-800 bg-purewhite rounded-2xs transition-colors focus:outline-none focus:ring-2 focus:ring-burgundy-800"
                  >
                    <span>ACCESS RESOURCE</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-burgundy-800" />
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
