export interface ResearchInterest {
  id: string;
  number: string;
  title: string;
  description: string;
  topics: string[];
}

export const researchInterests: ResearchInterest[] = [
  {
    id: "ml-representation",
    number: "01",
    title: "MACHINE LEARNING & REPRESENTATION LEARNING",
    description:
      "Investigating self-supervised vision models and sample-efficient representation learning.",
    topics: [
      "Self-supervised learning",
      "Computer vision",
      "Efficient AI",
      "Representation learning",
    ],
  },
  {
    id: "healthcare-ai",
    number: "02",
    title: "HEALTHCARE AI",
    description:
      "Applying deep computer vision to medical imaging and automated diabetic retinopathy classification.",
    topics: [
      "Medical imaging",
      "Diabetic retinopathy",
      "Clinical AI",
      "Computer vision",
    ],
  },
  {
    id: "computational-biology",
    number: "03",
    title: "COMPUTATIONAL BIOLOGY",
    description:
      "Exploring biological data encoding, RNA/DNA information processing, and error correction.",
    topics: [
      "RNA/DNA data storage",
      "Bioinformatics",
      "Biological information processing",
      "Error correction",
    ],
  },
  {
    id: "quantum-inspired",
    number: "04",
    title: "QUANTUM-INSPIRED COMPUTING",
    description:
      "Developing quantum-inspired algorithms and optimization frameworks for sequence encoding.",
    topics: [
      "Information encoding",
      "Optimization",
      "Quantum-inspired algorithms",
    ],
  },
  {
    id: "ai-data-systems",
    number: "05",
    title: "AI & DATA SYSTEMS",
    description:
      "Building observability architectures and distributed systems for real-time data pipelines.",
    topics: [
      "ML systems",
      "Distributed AI",
      "Data infrastructure",
      "AI observability",
    ],
  },
];
