import Image from "next/image";
import { ResearchCaseStudy } from "@/types/research";
import RetinopathyDiagram from "./diagrams/RetinopathyDiagram";
import RnaStorageDiagram from "./diagrams/RnaStorageDiagram";
import MatrixResearchDiagram from "./diagrams/MatrixResearchDiagram";
import StableMergeDiagram from "./diagrams/StableMergeDiagram";

interface CaseStudyDataAndMethodProps {
  study: ResearchCaseStudy;
}

export default function CaseStudyDataAndMethod({ study }: CaseStudyDataAndMethodProps) {
  const { data, method, image, build, identity } = study;

  const renderDiagram = () => {
    switch (identity.id) {
      case "diabetic-retinopathy-ai":
      case "diabetic-retinopathy":
        return <RetinopathyDiagram />;
      case "quantum-rna-storage":
        return <RnaStorageDiagram />;
      case "matrixresearch-v1":
      case "matrix-research-v1":
        return <MatrixResearchDiagram />;
      case "stable-in-place-merge":
      case "stable-inplace-merge":
        return <StableMergeDiagram />;
      default:
        return image ? (
          <div className="relative aspect-[16/9] max-w-2xl overflow-hidden border border-divider rounded-2xs bg-purewhite">
            <Image
              src={image}
              alt={identity.title}
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover filter contrast-[1.02]"
            />
          </div>
        ) : null;
    }
  };

  return (
    <div className="space-y-10">
      {/* Section Header */}
      <div className="border-b border-divider pb-3">
        <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-burgundy-800 font-bold">
          03 / DATA & METHODOLOGY
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-espresso-900 mt-1">
          DATA ARCHITECTURE & METHOD
        </h3>
      </div>

      {/* Structured 2-Column Editorial Layout: Data (Left) & Method (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        {/* DATA / INPUT SECTION */}
        <div className="space-y-5">
          <h4 className="text-lg sm:text-xl font-bold tracking-tight text-espresso-900 border-b border-divider pb-2">
            DATA / INPUT
          </h4>

          <dl className="space-y-4 divide-y divide-divider/60 text-sm sm:text-base">
            {data.source && (
              <div className="pt-3 first:pt-0">
                <dt className="text-xs font-mono uppercase tracking-wider text-burgundy-800 font-bold">
                  SOURCE / DATASET
                </dt>
                <dd className="text-espresso-900 font-medium mt-1">
                  {data.source}
                </dd>
              </div>
            )}

            {data.dataType && (
              <div className="pt-3">
                <dt className="text-xs font-mono uppercase tracking-wider text-burgundy-800 font-bold">
                  DATA TYPE
                </dt>
                <dd className="text-espresso-900 font-medium mt-1">
                  {data.dataType}
                </dd>
              </div>
            )}

            <div className="pt-3">
              <dt className="text-xs font-mono uppercase tracking-wider text-burgundy-800 font-bold">
                SCALE / SIZE
              </dt>
              <dd className="text-espresso-900 font-medium mt-1">
                {data.dataSize ? data.dataSize : "To be documented"}
              </dd>
            </div>

            {data.dataCharacteristics && data.dataCharacteristics.length > 0 && (
              <div className="pt-3">
                <dt className="text-xs font-mono uppercase tracking-wider text-burgundy-800 font-bold">
                  CHARACTERISTICS & CONSTRAINTS
                </dt>
                <dd className="text-espresso-900 font-mono text-sm leading-relaxed mt-1">
                  {data.dataCharacteristics.join("  ·  ")}
                </dd>
              </div>
            )}

            {data.preprocessing && data.preprocessing.length > 0 && (
              <div className="pt-3">
                <dt className="text-xs font-mono uppercase tracking-wider text-burgundy-800 font-bold">
                  PREPROCESSING PIPELINE
                </dt>
                <dd className="text-warmgray-600 text-sm sm:text-base leading-relaxed mt-1">
                  {data.preprocessing.join("  ·  ")}
                </dd>
              </div>
            )}
          </dl>
        </div>

        {/* METHOD / APPROACH SECTION */}
        <div className="space-y-5">
          <h4 className="text-lg sm:text-xl font-bold tracking-tight text-espresso-900 border-b border-divider pb-2">
            METHOD & ALGORITHMS
          </h4>

          <dl className="space-y-4 divide-y divide-divider/60 text-sm sm:text-base">
            {method.architecture && (
              <div className="pt-3 first:pt-0">
                <dt className="text-xs font-mono uppercase tracking-wider text-burgundy-800 font-bold">
                  CORE ARCHITECTURE
                </dt>
                <dd className="text-espresso-900 font-medium mt-1">
                  {method.architecture}
                </dd>
              </div>
            )}

            {method.models && method.models.length > 0 && (
              <div className="pt-3">
                <dt className="text-xs font-mono uppercase tracking-wider text-burgundy-800 font-bold">
                  MODELS & BACKBONES
                </dt>
                <dd className="text-espresso-900 font-mono text-sm font-semibold mt-1">
                  {method.models.join("  ·  ")}
                </dd>
              </div>
            )}

            {method.algorithms && method.algorithms.length > 0 && (
              <div className="pt-3">
                <dt className="text-xs font-mono uppercase tracking-wider text-burgundy-800 font-bold">
                  ALGORITHMS
                </dt>
                <dd className="text-espresso-900 font-mono text-sm mt-1">
                  {method.algorithms.join("  ·  ")}
                </dd>
              </div>
            )}

            {method.pipeline && (
              <div className="pt-3">
                <dt className="text-xs font-mono uppercase tracking-wider text-burgundy-800 font-bold">
                  PIPELINE EXECUTION
                </dt>
                <dd className="text-warmgray-600 text-sm sm:text-base leading-relaxed mt-1">
                  {method.pipeline}
                </dd>
              </div>
            )}
          </dl>
        </div>
      </div>

      {/* DISTINCT SUPPORTING ENGINEERING DETAILS — Pure Editorial Layout */}
      {build && (
        <div className="pt-6 border-t border-divider space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-burgundy-800 font-bold block">
            ENGINEERING & INFRASTRUCTURE IMPLEMENTATION
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-mono divide-y sm:divide-y-0 sm:divide-x divide-divider border-t border-b border-divider py-4">
            {build.infrastructure && (
              <div className="space-y-1 pt-3 sm:pt-0 sm:pr-6">
                <dt className="text-xs text-warmgray-600 font-bold uppercase">INFRASTRUCTURE STACK</dt>
                <dd className="text-espresso-900 font-semibold">{build.infrastructure.join("  ·  ")}</dd>
              </div>
            )}
            {build.tools && (
              <div className="space-y-1 pt-3 sm:pt-0 sm:pl-6">
                <dt className="text-xs text-warmgray-600 font-bold uppercase">TOOLING</dt>
                <dd className="text-espresso-900 font-semibold">{build.tools.join("  ·  ")}</dd>
              </div>
            )}
          </div>
        </div>
      )}

      {/* RESEARCH VISUALIZATION & PIPELINE FLOW */}
      <div className="pt-6 border-t border-divider space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-burgundy-800 font-bold block">
          RESEARCH VISUALIZATION & PIPELINE FLOW
        </span>
        {renderDiagram()}
      </div>
    </div>
  );
}
