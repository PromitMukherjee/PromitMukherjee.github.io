import React from "react";

interface RnaStorageDiagramProps {
  compact?: boolean;
}

export default function RnaStorageDiagram({ compact = false }: RnaStorageDiagramProps) {
  return (
    <figure
      className={`border-t border-b border-divider ${
        compact ? "py-3 space-y-3 my-1" : "py-6 space-y-5 my-2"
      }`}
      aria-label="Quantum-Inspired RNA Storage Computational Pipeline Diagram"
    >
      <div className="flex items-center justify-between text-[11px] font-mono text-warmgray-600 pb-1.5 border-b border-divider/60">
        <span className="text-burgundy-800 font-bold uppercase tracking-wider">
          FIG. 02 — COMPUTATIONAL ENCODING PIPELINE
        </span>
        <span>TENSOR-NETWORK CODEC</span>
      </div>

      {/* Editorial sequence with thin rules & typography */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs items-start">
        
        {/* Step 1 */}
        <div className="space-y-0.5">
          <div className="text-burgundy-800 font-bold tracking-wider text-[11px]">01 / INPUT</div>
          <div className="font-bold text-espresso-900 text-xs">Digital Payload</div>
          <div className="text-warmgray-600 text-[11px] leading-tight">
            Binary block partitioning
          </div>
        </div>

        {/* Step 2 */}
        <div className="space-y-0.5 sm:border-l sm:border-divider/60 sm:pl-3">
          <div className="text-burgundy-800 font-bold tracking-wider text-[11px]">02 / MAPPING</div>
          <div className="font-bold text-espresso-900 text-xs">RNA Sequence Space</div>
          <div className="text-warmgray-600 text-[11px] leading-tight">
            Quadruplet mapping (A,C,G,U)
          </div>
        </div>

        {/* Step 3 */}
        <div className="space-y-0.5 md:border-l md:border-divider/60 md:pl-3">
          <div className="text-burgundy-800 font-bold tracking-wider text-[11px]">03 / CONSTRAINTS</div>
          <div className="font-bold text-espresso-900 text-xs">Tensor Optimization</div>
          <div className="text-warmgray-600 text-[11px] leading-tight">
            Hairpin & run filtering
          </div>
        </div>

        {/* Step 4 */}
        <div className="space-y-0.5 sm:border-l sm:border-divider/60 sm:pl-3">
          <div className="text-burgundy-800 font-bold tracking-wider text-[11px]">04 / DECODING</div>
          <div className="font-bold text-espresso-900 text-xs">Simulated Recovery</div>
          <div className="text-warmgray-600 text-[11px] leading-tight italic">
            In-silico model (To be documented)
          </div>
        </div>

      </div>

      {/* Accessible Text Fallback */}
      <figcaption className="sr-only">
        Quantum-Inspired RNA Storage computational pipeline: Binary digital payloads are mapped into quadruplet RNA sequence space (A, C, G, U), filtered through tensor-network constraint optimization for secondary structure hairpins and homopolymer run limits, and evaluated under simulated error-aware decoding models. Physical in-vitro synthesis remains to be documented.
      </figcaption>
    </figure>
  );
}
