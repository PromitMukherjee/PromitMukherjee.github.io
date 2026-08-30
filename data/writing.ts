export interface WritingItem {
  id: string;
  type: string;
  date: string;
  title: string;
  abstract: string;
  tags?: string[];
  link?: string;
  status: string;
}

export const writingItems: WritingItem[] = [
  {
    id: "representation-stability-notes",
    type: "RESEARCH NOTE",
    date: "2026",
    title: "Latent Representation Stability & Bottleneck Collapse",
    abstract:
      "Observations on how dataset scaling and bottleneck constraints influence latent representation collapse in neural autoencoders.",
    status: "ESSAY IN PREPARATION",
  },
  {
    id: "ssl-medical-vision-notes",
    type: "RESEARCH NOTE",
    date: "2026",
    title: "Self-Supervised Visual Representation Learning in Diagnostic Vision",
    abstract:
      "Technical notes exploring Joint-Embedding Predictive Architectures (JEPA) for representation learning on fundus imagery.",
    status: "ESSAY IN PREPARATION",
  },
  {
    id: "inplace-algorithm-notes",
    type: "TECHNICAL NOTE",
    date: "2026",
    title: "In-Place Algorithm Design & O(1) Memory Constraints",
    abstract:
      "Notes on buffer extraction, block rotations, and Hwang–Lin merging for stable in-place algorithms under strict space bounds.",
    status: "ESSAY IN PREPARATION",
  },
];
