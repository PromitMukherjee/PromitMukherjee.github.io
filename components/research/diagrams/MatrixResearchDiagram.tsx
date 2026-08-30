import React from "react";

interface MatrixResearchDiagramProps {
  compact?: boolean;
}

export default function MatrixResearchDiagram({ compact = false }: MatrixResearchDiagramProps) {
  return (
    <figure
      className={`border-t border-b border-divider ${
        compact ? "py-3 space-y-3 my-1" : "py-6 space-y-6 my-2"
      }`}
      aria-label="MatrixResearch V1 Experimental Trajectory and Autoencoder Architecture Diagram"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between text-[11px] font-mono text-warmgray-600 pb-1.5 border-b border-divider/60">
        <span className="text-burgundy-800 font-bold uppercase tracking-wider">
          FIG. 03 — EXPERIMENTAL PROGRESSION & ARCHITECTURE
        </span>
        <span>16×16 MATRIX COMPRESSION</span>
      </div>

      {/* Documented Autoencoder Architecture */}
      <div className="space-y-1 font-mono text-[11px]">
        <span className="text-burgundy-800 font-bold uppercase tracking-wider block">
          DOCUMENTED AUTOENCODER BACKBONE:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-espresso-900 border-b border-divider/60 pb-2">
          <div>
            <span className="text-warmgray-600 font-bold">ENC: </span>
            <span>256 → 1024 → 512 → 256 → 128</span>
          </div>
          <div>
            <span className="text-warmgray-600 font-bold">DEC: </span>
            <span>128 → 256 → 512 → 1024 → 256</span>
          </div>
        </div>
      </div>

      {/* Restrained Editorial Progression Rows */}
      <div className="space-y-2 font-mono text-[11px]">
        <span className="text-burgundy-800 font-bold uppercase tracking-wider block">
          DATASET DIVERSITY VS LATENT STABILITY:
        </span>

        <div className="divide-y divide-divider/60 border-t border-b border-divider/60">
          
          {/* 01 / Experiment A */}
          <div className="py-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <div className="flex items-center gap-2">
              <span className="text-burgundy-800 font-bold">01 —</span>
              <span className="font-bold text-espresso-900">EXP A</span>
              <span className="text-warmgray-600">(1k matrices)</span>
            </div>
            <div className="flex items-center gap-3 text-espresso-900 font-medium">
              <span>Loss ≈ 0.895</span>
              <span>Std ≈ 0.182</span>
              <span className="text-burgundy-800 font-bold uppercase text-[10px]">
                STABLE
              </span>
            </div>
          </div>

          {/* 02 / Experiment B */}
          <div className="py-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <div className="flex items-center gap-2">
              <span className="text-burgundy-800 font-bold">02 —</span>
              <span className="font-bold text-espresso-900">EXP B</span>
              <span className="text-warmgray-600">(5k matrices)</span>
            </div>
            <div className="flex items-center gap-3 text-espresso-900 font-medium">
              <span>Loss ≈ 1.0</span>
              <span>Std ≈ 0.0069</span>
              <span className="text-warmgray-600 font-semibold uppercase text-[10px]">
                COLLAPSE
              </span>
            </div>
          </div>

          {/* 03 / Experiment C */}
          <div className="py-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <div className="flex items-center gap-2">
              <span className="text-burgundy-800 font-bold">03 —</span>
              <span className="font-bold text-espresso-900">EXP C</span>
              <span className="text-warmgray-600">(10k matrices)</span>
            </div>
            <div className="flex items-center gap-3 text-espresso-900 font-medium">
              <span>Loss ≈ 1.0</span>
              <span>Std ≈ 0.0278</span>
              <span className="text-warmgray-600 font-semibold uppercase text-[10px]">
                INSTABILITY
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Accessible Text Fallback */}
      <figcaption className="sr-only">
        MatrixResearch V1 experimental progression diagram showing an MLP Autoencoder backbone (Encoder: 256 to 1024 to 512 to 256 to 128 latent; Decoder: 128 to 256 to 512 to 1024 to 256 output) evaluated across dataset sizes: Experiment A with 1,000 samples achieved stable representation (loss approx 0.895, latent std 0.182); Experiment B with 5,000 samples suffered latent collapse (loss approx 1.0, latent std 0.0069); Experiment C with 10,000 samples maintained near-collapse instability (loss approx 1.0, latent std 0.0278).
      </figcaption>
    </figure>
  );
}
