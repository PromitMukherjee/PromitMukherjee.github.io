import { ResearchCaseStudy } from "@/types/research";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CaseStudyNavigationProps {
  prev?: ResearchCaseStudy;
  next?: ResearchCaseStudy;
  onSelectStudy: (id: string) => void;
}

export default function CaseStudyNavigation({
  prev,
  next,
  onSelectStudy,
}: CaseStudyNavigationProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
      {/* Previous Case Study Link */}
      {prev ? (
        <button
          onClick={() => onSelectStudy(prev.identity.id)}
          className="group flex flex-col items-start space-y-1 text-left focus:outline-none focus:ring-2 focus:ring-burgundy-800 p-2 -ml-2 rounded-2xs hover:bg-ivory-50 transition-colors w-full sm:w-auto cursor-pointer"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-warmgray-600 font-bold flex items-center gap-1.5 group-hover:text-burgundy-800 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>← PREVIOUS RESEARCH</span>
          </span>
          <span className="text-sm sm:text-base font-bold text-espresso-900 group-hover:text-burgundy-800 transition-colors">
            {prev.identity.number} — {prev.identity.shortTitle}
          </span>
        </button>
      ) : (
        <div />
      )}

      {/* Next Case Study Link */}
      {next ? (
        <button
          onClick={() => onSelectStudy(next.identity.id)}
          className="group flex flex-col items-end space-y-1 text-right focus:outline-none focus:ring-2 focus:ring-burgundy-800 p-2 -mr-2 rounded-2xs hover:bg-ivory-50 transition-colors w-full sm:w-auto cursor-pointer"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-warmgray-600 font-bold flex items-center gap-1.5 group-hover:text-burgundy-800 transition-colors">
            <span>NEXT RESEARCH →</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
          <span className="text-sm sm:text-base font-bold text-espresso-900 group-hover:text-burgundy-800 transition-colors">
            {next.identity.number} — {next.identity.shortTitle}
          </span>
        </button>
      ) : (
        <div />
      )}
    </div>
  );
}
