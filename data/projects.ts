import { ResearchCaseStudy } from "@/types/research";
import { researchCaseStudies } from "./researchCaseStudies";

export type { ResearchCaseStudy };
export { researchCaseStudies };

export interface ResearchProject {
  id: string;
  number: string;
  title: string;
  status: string;
  categories: string[];
  technologies: string[];
  description: string;
  researchQuestion: string;
  approach: string[];
  image?: string;
  isDiagram?: boolean;
  abstract: string;
  keyFindings: string[];
  methodology: string;
  systemArchitecture?: string[];
}

export interface SelectedBuild {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
}

export interface LearningFoundation {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
}

export const selectedResearchProjects: ResearchProject[] = [
  {
    id: "diabetic-retinopathy-ai",
    number: "01",
    title: "DIABETIC RETINOPATHY AI",
    status: "EMPIRICAL ML EXPLORATION · 2026",
    categories: ["Medical AI", "Computer Vision", "Self-Supervised Learning"],
    technologies: ["ResNet101", "JEPA", "PyTorch", "OpenCV"],
    description:
      "Exploring self-supervised visual representation learning and deep computer vision for five-level diabetic retinopathy classification.",
    researchQuestion:
      "How can self-supervised visual representation learning improve five-level diabetic retinopathy classification?",
    approach: ["Fundus Imagery", "JEPA Representation Learning", "5-Class Classification"],
    image: "/research/retinopathy.png",
    abstract:
      "Five-level diabetic retinopathy grading from fundus imagery is challenging because micro-retinal features can be subtle and labeled medical data is expensive. This study investigates Joint-Embedding Predictive Architectures (JEPA) combined with ResNet-101 backbones to learn representations invariant to lighting and artifact noise.",
    keyFindings: [
      "Dataset: 35,126 fundus images",
      "QWK: 0.78 → 0.84",
      "Macro-F1: 0.71 → 0.76",
      "Enhanced microaneurysm feature localization without dense pixel masks.",
    ],
    methodology:
      "Pre-trained a ResNet101 encoder using self-supervised spatial prediction on 35,126 fundus images, followed by supervised linear probing and fine-tuning on 5 DR severity grades.",
  },
  {
    id: "quantum-rna-storage",
    number: "02",
    title: "QUANTUM-INSPIRED RNA STORAGE",
    status: "ALGORITHMIC EXPLORATION · 2026",
    categories: [
      "Computational Biology",
      "Information Theory",
      "Quantum-Inspired Computing",
    ],
    technologies: [
      "RNA Codecs",
      "Tensor Networks",
      "Error Correction",
      "Python",
    ],
    description:
      "Exploring how quantum-inspired computational ideas can be used to reason about information encoding and error resilience in synthetic RNA-based storage.",
    researchQuestion:
      "How can quantum-inspired computational ideas improve information encoding and error resilience in synthetic RNA data storage systems?",
    approach: ["Biological Payload Mapping", "Tensor-Network Constraints", "Simulated Decoding"],
    image: "/research/rna_quantum.png",
    abstract:
      "Synthetic RNA & DNA offer high-density archival storage, but nucleotide synthesis and sequencing introduce insertion, deletion, and substitution errors. We formulate sequence mapping as a quantum-inspired tensor-network optimization problem to evaluate error-resilient codeword spaces under secondary structure constraints.",
    keyFindings: [
      "Information density (bits/nucleotide): To be documented",
      "Reconstruction fidelity under noise: To be documented",
      "Physical in-vitro validation: To be documented",
      "Tensor-network mapping handles secondary structure constraint satisfaction.",
    ],
    methodology:
      "Designed a tensor-network based codeword generator mapping binary payload blocks to quadruplet nucleotide sequences subject to secondary structure constraints and homopolymer length limits.",
  },
  {
    id: "matrixresearch-v1",
    number: "03",
    title: "MATRIXRESEARCH V1",
    status: "EXPERIMENTAL FAILURE ANALYSIS · 2026",
    categories: [
      "Representation Learning",
      "Computational Mathematics",
      "Latent Structures",
    ],
    technologies: ["PyTorch", "MLP Autoencoder", "MSE Loss", "Adam"],
    description:
      "Investigating whether low-rank matrix families can be compressed into stable latent representations and analyzing latent collapse under increased dataset scale.",
    researchQuestion:
      "Can low-rank matrix families be compressed into stable latent representations using neural autoencoders?",
    approach: ["16×16 Low-Rank Generation", "MLP Bottleneck Autoencoder", "Latent Trajectory Analysis"],
    isDiagram: true,
    abstract:
      "Compressing low-rank matrix families into low-dimensional latent space requires discovering representations that generalize across expanding matrix distributions without mode collapse. This experiment evaluates MLP autoencoders across 1,000, 5,000, and 10,000 matrix sample scaling regimes.",
    keyFindings: [
      "Experiment A (1k samples): Loss ≈ 0.895 | Latent std ≈ 0.182 (Stable)",
      "Experiment B (5k samples): Loss ≈ 1.0 | Latent std ≈ 0.0069 (Collapse)",
      "Experiment C (10k samples): Loss ≈ 1.0 | Latent std ≈ 0.0278 (Near-Collapse)",
      "Insight: Increased dataset diversity exposed representation collapse in current MLP bottleneck.",
    ],
    methodology:
      "Generated 16×16 rank-4 matrices (A = U × V), flattened inputs into 256-dim vectors, and trained an MLP autoencoder (Encoder: 256→1024→512→256→128 | Decoder: 128→256→512→1024→256) with MSE loss and Adam optimizer across scaling regimes.",
  },
  {
    id: "stable-in-place-merge",
    number: "04",
    title: "STABLE IN-PLACE MERGE",
    status: "ALGORITHMIC & SYSTEMS RESEARCH · 2026",
    categories: [
      "Algorithms",
      "Memory-Efficient Computing",
      "Systems",
    ],
    technologies: ["C++20", "ASAN", "UBSAN", "Property Testing", "Fuzzing"],
    description:
      "Designing a memory-efficient stable merging algorithm achieving O(1) auxiliary memory bounds via distinct-buffer extraction and block rearrangement.",
    researchQuestion:
      "How can stable merging of sorted subarrays be performed with strict O(1) auxiliary memory while preserving strong algorithmic guarantees?",
    approach: ["Distinct-Buffer Extraction", "Block Rearrangement & Rotation", "Hwang–Lin Local Merge"],
    isDiagram: true,
    abstract:
      "Standard stable merging algorithms require O(N) auxiliary memory to preserve element order. This research presents an in-place algorithm combining distinct-buffer extraction, block rotations, and Hwang–Lin local merging under O(1) auxiliary space bounds.",
    keyFindings: [
      "Auxiliary Space: O(1)",
      "Comparisons Bound: O(m log(n/m + 1))",
      "Assignments Bound: O((m+n)√m)",
      "Validation: 100,000+ randomized payloads verified under ASAN/UBSAN across Windows, Ubuntu, macOS",
    ],
    methodology:
      "Extracted distinct key buffers within input arrays to serve as internal working memory, rearranged fixed-size blocks, performed block rotations, and applied Hwang–Lin local merging to execute stable in-place merges.",
  },
];

export const selectedBuilds: SelectedBuild[] = [
  {
    id: "smart-attendance-system",
    number: "01",
    category: "APPLIED IMPLEMENTATION",
    title: "SMART ATTENDANCE SYSTEM USING ML",
    description:
      "A machine-learning and computer-vision application for automated attendance processing using facial-recognition-related processing.",
    tags: ["Python", "OpenCV", "Machine Learning", "Computer Vision"],
    githubUrl: "https://github.com/PromitMukherjee/Smart-Attendance-System-using-ML",
  },
];

export const learningFoundations: LearningFoundation[] = [
  {
    id: "machine-learning-algorithms",
    number: "01",
    category: "FIRST-PRINCIPLES ARCHIVE",
    title: "MACHINE LEARNING ALGORITHMS",
    description:
      "A collection of machine-learning algorithm implementations and experiments developed from first principles to establish foundational understanding.",
    tags: ["Python", "Machine Learning", "Algorithms", "First-Principles"],
    githubUrl: "https://github.com/PromitMukherjee/Machine_learning_Algorithm",
  },
];

export interface ExplorationDirection {
  number: string;
  title: string;
  description: string;
}

export const currentlyExploringDirections: ExplorationDirection[] = [
  {
    number: "01",
    title: "SELF-SUPERVISED REPRESENTATION LEARNING",
    description:
      "Exploring representation learning approaches for visual and structured data, including self-supervised learning techniques.",
  },
  {
    number: "02",
    title: "MEDICAL COMPUTER VISION",
    description:
      "Exploring machine-learning approaches for medical image representation, feature localization, and classification.",
  },
  {
    number: "03",
    title: "NEURAL REPRESENTATION STABILITY",
    description:
      "Investigating how dataset diversity, bottleneck capacity, and training objectives affect latent representation dynamics.",
  },
  {
    number: "04",
    title: "MEMORY-EFFICIENT ALGORITHMS",
    description:
      "Exploring algorithms that achieve strict memory constraints while preserving correctness, stability, and theoretical guarantees.",
  },
  {
    number: "05",
    title: "COMPUTATIONAL BIOLOGY & INFORMATION STORAGE",
    description:
      "Exploring computational approaches to biological sequence encoding, secondary structure constraints, and error-resilient storage.",
  },
];

export const techStackCategories = [
  {
    title: "AI / MACHINE LEARNING",
    items: ["Python", "PyTorch", "Scikit-learn", "OpenCV"],
  },
  {
    title: "SYSTEMS / ALGORITHMS",
    items: ["C++", "C++20", "Algorithms", "Memory-Efficient Systems"],
  },
  {
    title: "DATA / TOOLS",
    items: ["SQL", "Git", "Linux", "ASAN", "UBSAN"],
  },
];
