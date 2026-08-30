import { ResearchCaseStudy } from "@/types/research";
import { getAdjacentResearchCaseStudies } from "@/data/researchCaseStudies";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyHero from "./CaseStudyHero";
import CaseStudyOverview from "./CaseStudyOverview";
import CaseStudyQuestion from "./CaseStudyQuestion";
import CaseStudyDataAndMethod from "./CaseStudyDataAndMethod";
import CaseStudyExperimentsAndEval from "./CaseStudyExperimentsAndEval";
import CaseStudyResults from "./CaseStudyResults";
import CaseStudyLimitationsAndNextSteps from "./CaseStudyLimitationsAndNextSteps";
import CaseStudyResources from "./CaseStudyResources";
import CaseStudyNavigation from "./CaseStudyNavigation";

interface CaseStudyPageProps {
  study: ResearchCaseStudy;
  onSelectStudy?: (id: string) => void;
}

export default function CaseStudyPage({ study, onSelectStudy }: CaseStudyPageProps) {
  const { prev, next } = getAdjacentResearchCaseStudies(study.identity.id);

  return (
    <div className="min-h-screen bg-ivory-50 text-espresso-900 font-sans antialiased selection:bg-burgundy-800 selection:text-ivory-50">
      <Navbar />

      <main className="overflow-x-hidden">
        {/* GROUP 0: Hero / Project Header */}
        <CaseStudyHero study={study} />

        {/* GROUP 1: Overview (Problem + Motivation) */}
        <CaseStudyOverview study={study} />

        {/* GROUP 2: Research Question & Hypothesis */}
        <CaseStudyQuestion study={study} />

        {/* GROUP 3: Data / Input & Method / Approach (+ Visual Material) */}
        <CaseStudyDataAndMethod study={study} />

        {/* GROUP 4A: Experiments & Evaluation */}
        <CaseStudyExperimentsAndEval study={study} />

        {/* GROUP 4B: Results (Verified Only) */}
        <CaseStudyResults study={study} />

        {/* GROUP 5: Limitations & Next Steps */}
        <CaseStudyLimitationsAndNextSteps study={study} />

        {/* GROUP 6: Resources */}
        <CaseStudyResources study={study} />

        {/* Navigation Between Case Studies */}
        <CaseStudyNavigation prev={prev} next={next} onSelectStudy={onSelectStudy || (() => {})} />
      </main>

      <Footer />
    </div>
  );
}
