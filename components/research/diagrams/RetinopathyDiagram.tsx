import React from "react";

interface RetinopathyDiagramProps {
  compact?: boolean;
}

export default function RetinopathyDiagram({ compact = false }: RetinopathyDiagramProps) {
  return (
    <figure
      className={`border-t border-b border-divider ${
        compact ? "py-3 space-y-3 my-1" : "py-6 space-y-5 my-2"
      }`}
      aria-label="Diabetic Retinopathy AI Self-Supervised Learning Pipeline Diagram"
    >
      <div className="flex items-center justify-between text-[11px] font-mono text-warmgray-600 pb-1.5 border-b border-divider/60">
        <span className="text-burgundy-800 font-bold uppercase tracking-wider">
          FIG. 01 — ML PIPELINE STRUCTURE
        </span>
        <span>SELF-SUPERVISED JEPA</span>
      </div>

      {/* Editorial sequence with thin rules & typography */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs items-start">
        
        {/* Step 1 */}
        <div className="space-y-0.5">
          <div className="text-burgundy-800 font-bold tracking-wider text-[11px]">01 / INPUT</div>
          <div className="font-bold text-espresso-900 text-xs">Fundus Imagery</div>
          <div className="text-warmgray-600 text-[11px] leading-tight">
            35,126 photographs
          </div>
        </div>

        {/* Step 2 */}
        <div className="space-y-0.5 sm:border-l sm:border-divider/60 sm:pl-3">
          <div className="text-burgundy-800 font-bold tracking-wider text-[11px]">02 / REPRESENTATION</div>
          <div className="font-bold text-espresso-900 text-xs">Spatial Prediction</div>
          <div className="text-warmgray-600 text-[11px] leading-tight">
            JEPA pre-training
          </div>
        </div>

        {/* Step 3 */}
        <div className="space-y-0.5 md:border-l md:border-divider/60 md:pl-3">
          <div className="text-burgundy-800 font-bold tracking-wider text-[11px]">03 / BACKBONE</div>
          <div className="font-bold text-espresso-900 text-xs">ResNet101 Encoder</div>
          <div className="text-warmgray-600 text-[11px] leading-tight">
            Linear probing
          </div>
        </div>

        {/* Step 4 */}
        <div className="space-y-0.5 sm:border-l sm:border-divider/60 sm:pl-3">
          <div className="text-burgundy-800 font-bold tracking-wider text-[11px]">04 / OUTPUT</div>
          <div className="font-bold text-espresso-900 text-xs">5-Class DR Grading</div>
          <div className="text-espresso-900 font-semibold text-[11px] leading-tight">
            Grades 0–4 (QWK: 0.84)
          </div>
        </div>

      </div>

      {/* Accessible Text Fallback */}
      <figcaption className="sr-only">
        Diabetic Retinopathy AI workflow: High-resolution fundus images (35,126 samples) enter self-supervised spatial prediction under JEPA, feeding into a ResNet101 encoder for linear probing and fine-tuning to output 5-level DR grades (0-4), improving QWK from 0.78 to 0.84.
      </figcaption>
    </figure>
  );
}
