import Link from "next/link";
import { ResearchCaseStudy } from "@/types/research";
import { ArrowLeft } from "lucide-react";

interface CaseStudyHeroProps {
  study: ResearchCaseStudy;
}

export default function CaseStudyHero({ study }: CaseStudyHeroProps) {
  const { identity, positioning } = study;

  return (
    <section className="pt-28 pb-16 bg-purewhite border-b border-divider">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-widest text-warmgray-600 hover:text-burgundy-800 transition-colors focus:outline-none focus:ring-2 focus:ring-burgundy-800"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>ALL RESEARCH</span>
          </Link>
        </div>

        {/* Header Grid */}
        <div className="space-y-6 max-w-4xl">
          {/* Identity Bar: Number & quiet status */}
          <div className="flex items-center gap-4 text-sm font-mono uppercase tracking-widest">
            <span className="text-2xl font-serif text-burgundy-800 font-medium">
              RESEARCH / {identity.number}
            </span>
            <span className="text-warmgray-400">·</span>
            <span className="text-warmgray-600 font-semibold">
              {identity.status} ({identity.year})
            </span>
          </div>

          {/* Large Project Display Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-espresso-900 leading-[1.08]">
            {identity.title}
          </h1>

          {/* Domain & Subdomains */}
          <div className="text-sm sm:text-base font-mono text-burgundy-800 font-semibold tracking-wider">
            {positioning.domain}
            {positioning.subdomains.length > 0 && (
              <span className="text-espresso-900 font-normal">
                {"  ·  "}
                {positioning.subdomains.join("  ·  ")}
              </span>
            )}
          </div>

          {/* Short Research Summary (18-20px reading size) */}
          <p className="text-lg sm:text-xl text-warmgray-600 leading-relaxed font-normal pt-2">
            {positioning.summary}
          </p>
        </div>
      </div>
    </section>
  );
}
