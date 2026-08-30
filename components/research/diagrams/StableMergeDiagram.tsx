import React from "react";

interface StableMergeDiagramProps {
  compact?: boolean;
}

export default function StableMergeDiagram({ compact = false }: StableMergeDiagramProps) {
  return (
    <figure
      className={`border-t border-b border-divider ${
        compact ? "py-3 space-y-3 my-1" : "py-6 space-y-6 my-2"
      }`}
      aria-label="Stable In-Place Merge Algorithmic Pipeline Diagram"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between text-[11px] font-mono text-warmgray-600 pb-1.5 border-b border-divider/60">
        <span className="text-burgundy-800 font-bold uppercase tracking-wider">
          FIG. 04 — ALGORITHMIC MERGE PIPELINE
        </span>
        <span>STRICT O(1) MEMORY</span>
      </div>

      {/* Editorial Sequence for 4 Algorithm Stages */}
      <div className="space-y-2 font-mono text-xs">
        <span className="text-burgundy-800 font-bold uppercase tracking-wider block text-[11px]">
          FOUR-STAGE ALGORITHMIC EXECUTION:
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 items-start border-t border-b border-divider/60 py-2.5">
          <div className="space-y-0.5">
            <div className="text-burgundy-800 font-bold text-[11px]">01 / EXTRACTION</div>
            <div className="font-bold text-espresso-900 text-xs">Distinct Buffer</div>
            <div className="text-warmgray-600 text-[11px] leading-tight">
              Extract working buffer
            </div>
          </div>

          <div className="space-y-0.5 sm:border-l sm:border-divider/60 sm:pl-3">
            <div className="text-burgundy-800 font-bold text-[11px]">02 / REARRANGEMENT</div>
            <div className="font-bold text-espresso-900 text-xs">Block Rearrange</div>
            <div className="text-warmgray-600 text-[11px] leading-tight">
              Rearrange fixed blocks
            </div>
          </div>

          <div className="space-y-0.5 md:border-l md:border-divider/60 md:pl-3">
            <div className="text-burgundy-800 font-bold text-[11px]">03 / ROTATION</div>
            <div className="font-bold text-espresso-900 text-xs">Block Rotation</div>
            <div className="text-warmgray-600 text-[11px] leading-tight">
              Block rotations
            </div>
          </div>

          <div className="space-y-0.5 sm:border-l sm:border-divider/60 sm:pl-3">
            <div className="text-burgundy-800 font-bold text-[11px]">04 / LOCAL MERGE</div>
            <div className="font-bold text-espresso-900 text-xs">Hwang–Lin Merge</div>
            <div className="text-warmgray-600 text-[11px] leading-tight">
              Finalize local merge
            </div>
          </div>
        </div>
      </div>

      {/* Restrained Technical Property Block */}
      <div className="space-y-1 font-mono text-[11px]">
        <span className="text-burgundy-800 font-bold uppercase tracking-wider block">
          THEORETICAL BOUNDS:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-espresso-900 font-medium border-t border-divider/60 pt-1.5">
          <div>Space: <span className="font-bold">O(1)</span></div>
          <div>Comparisons: <span className="font-bold">O(m log(n/m+1))</span></div>
          <div>Assignments: <span className="font-bold">O((m+n)√m)</span></div>
          <div>Stability: <span className="font-bold">Guaranteed</span></div>
        </div>
      </div>

      {/* Accessible Text Fallback */}
      <figcaption className="sr-only">
        Stable In-Place Merge algorithmic pipeline diagram: Demonstrating the transformation of two sorted subarrays of length m and n into a single sorted array without allocating external memory. Execution proceeds through four stages: 01 Distinct Buffer Extraction, 02 Block Rearrangement, 03 Block Rotation, and 04 Hwang–Lin Local Merge under O(1) auxiliary space, O(m log(n/m + 1)) comparisons, and O((m+n)sqrt(m)) assignments.
      </figcaption>
    </figure>
  );
}
