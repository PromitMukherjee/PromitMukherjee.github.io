import { ResearchCaseStudy } from "@/types/research";

export const researchCaseStudies: ResearchCaseStudy[] = [
  {
    identity: {
      id: "diabetic-retinopathy-ai",
      number: "01",
      title: "DIABETIC RETINOPATHY AI",
      shortTitle: "Diabetic Retinopathy AI",
      status: "Empirical ML exploration",
      year: "2026",
    },
    positioning: {
      domain: "Medical AI & Computer Vision",
      subdomains: [
        "Medical AI",
        "Computer Vision",
        "Self-Supervised Learning",
        "Representation Learning",
      ],
      summary:
        "Exploring self-supervised visual representation learning and deep computer vision for five-level diabetic retinopathy classification.",
    },
    problem:
      "Five-level diabetic retinopathy grading from fundus imagery is challenging because clinically relevant retinal features can be subtle and labeled medical data is expensive.",
    motivation:
      "Diabetic retinopathy is a leading cause of preventable blindness worldwide. Automated screening systems using standard supervised learning are constrained by label scarcity, high expert annotation costs, and imaging artifact sensitivity across clinical equipment.",
    researchQuestion:
      "How can self-supervised visual representation learning improve five-level diabetic retinopathy classification?",
    hypothesis:
      "Joint-Embedding Predictive Architectures (JEPA) combined with ResNet-101 backbones can construct representations invariant to lighting and artifact noise, thereby improving classification performance under low-label regimes.",
    data: {
      source: "EyePACS fundus image dataset",
      dataType: "High-resolution retinal fundus images",
      dataCharacteristics: [
        "5 DR severity grades (0-4)",
        "Clinical imaging artifacts",
        "Multi-camera brand variance",
      ],
      dataSize: "35,126 fundus images",
      preprocessing: [
        "Spatial prediction patching",
        "Lighting and artifact normalization",
      ],
    },
    method: {
      architecture:
        "Joint-Embedding Predictive Architecture (JEPA) with ResNet101 encoder backbone",
      models: ["ResNet101", "JEPA"],
      algorithms: [
        "Self-supervised spatial prediction",
        "Linear probing",
        "Supervised fine-tuning",
      ],
      representationMethod:
        "Self-supervised visual representation learning (JEPA)",
      pipeline:
        "Fundus images → visual representation learning (JEPA) → ResNet101 encoder → downstream linear probing & fine-tuning → five-level DR grading.",
    },
    experiments: {
      baselines: [
        "Standard supervised ResNet101 backbones trained from scratch / standard pre-training",
      ],
      experimentalSetup:
        "Pre-training on 35,126 fundus images; evaluation under 10% labeled data constraints across 5 DR severity grades.",
      trainingSetup: "PyTorch self-supervised training with OpenCV data processing",
      experimentsPerformed: [
        "Self-supervised spatial prediction pre-training",
        "Linear probing under 10% label availability",
        "5-class DR severity classification fine-tuning",
      ],
    },
    evaluation: {
      metrics: ["Quadratic Weighted Kappa (QWK)", "Macro-F1"],
      evaluationProtocol:
        "5-level DR severity classification performance evaluation under limited (10%) labeled data constraints.",
    },
    results: {
      summary:
        "Self-supervised JEPA pre-training yielded improved classification metrics (QWK: 0.78 → 0.84, Macro-F1: 0.71 → 0.76) over baseline initializations.",
      metrics: [
        "QWK: 0.78 → 0.84",
        "Macro-F1: 0.71 → 0.76",
      ],
      observations: [
        "Enhanced localized detection of microaneurysms and hard exudates without requiring dense pixel-level masks.",
        "Reduced sensitivity to clinical imaging artifacts across diverse camera brands.",
      ],
      findings: [
        "Self-supervised visual representation learning improves classification metric performance under limited label availability.",
      ],
    },
    limitations: [
      "Evaluation is currently restricted to the EyePACS dataset distribution.",
      "To be documented: External domain validation across secondary datasets (e.g. Messidor-2).",
      "To be documented: Clinical workflow integration and real-time clinical inference latency benchmarks.",
      "Note: No clinical deployment or in-hospital validation is claimed.",
    ],
    status: "Empirical ML exploration",
    nextSteps: [
      "Evaluate cross-center domain transfer across multi-center clinical datasets (e.g. Messidor-2, APTOS).",
      "Investigate multi-modal integration incorporating patient clinical metadata.",
    ],
    resources: {
      dataset: "EyePACS fundus image dataset",
      github: undefined,
      paper: undefined,
      preprint: undefined,
    },
    image: "/research/retinopathy.png",
  },
  {
    identity: {
      id: "quantum-rna-storage",
      number: "02",
      title: "QUANTUM-INSPIRED RNA STORAGE",
      shortTitle: "Quantum RNA Storage",
      status: "Algorithmic exploration",
      year: "2026",
    },
    positioning: {
      domain: "Computational Biology & Information Theory",
      subdomains: [
        "Computational Biology",
        "Information Theory",
        "Quantum-Inspired Computing",
        "Biological Data Storage",
      ],
      summary:
        "Exploring how quantum-inspired computational ideas can be used to reason about information encoding and error resilience in synthetic RNA-based storage.",
    },
    problem:
      "Synthetic RNA & DNA offer high-density archival storage capabilities, but nucleotide synthesis and sequencing introduce insertion, deletion, and substitution errors during biological storage cycles.",
    motivation:
      "Macro-molecular biological storage provides high theoretical density, but biological constraints (homopolymer length limits, secondary structure hairpin formation) require error-correcting codecs designed specifically for non-standard error channels.",
    researchQuestion:
      "How can quantum-inspired computational ideas improve information encoding and error resilience in synthetic RNA data storage systems?",
    hypothesis:
      "Formulating sequence mapping as a quantum-inspired optimization problem using tensor networks can identify error-resilient codewords while respecting physical biological constraints.",
    data: {
      source: "Synthetic binary payload blocks mapped to quadruplet nucleotide sequences",
      dataType: "Binary digital payload mapped to biological nucleotide sequence space (A, C, G, U/T)",
      dataCharacteristics: [
        "Secondary structure hairpin constraints",
        "Homopolymer run length limits",
        "Insertion/deletion/substitution error channels",
      ],
      dataSize: undefined,
      preprocessing: [
        "Binary payload block partitioning",
        "Secondary structure constraint filter initialization",
      ],
    },
    method: {
      architecture: "Tensor-network based codeword generator",
      models: ["Tensor-network constraint representation model"],
      algorithms: [
        "Simulated annealing",
        "Tensor-network optimization",
        "Constrained sequence mapping",
      ],
      representationMethod:
        "Tensor-network state representations for sequence space search",
      pipeline:
        "Digital payload → RNA representation → biological constraints filter → error-aware / quantum-inspired tensor encoding → biological decoding simulation.",
    },
    experiments: {
      baselines: [
        "Unconstrained biological error-correcting coders without secondary structure optimization",
      ],
      experimentalSetup: undefined,
      trainingSetup: "Python computational physics / tensor-network simulation framework",
      experimentsPerformed: [
        "Tensor-network sequence mapping formulation",
        "Secondary structure constraint satisfaction modeling",
      ],
    },
    evaluation: {
      metrics: [
        "Information density (bits/nucleotide)",
        "Reconstruction fidelity under insertion/deletion noise",
        "Physical in-vitro validation",
      ],
      evaluationProtocol:
        "Biological constraint satisfaction profiling and sequence mapping computational validation.",
    },
    results: {
      summary:
        "Computational encoding framework and constrained tensor mapping model established; quantitative performance metrics and physical wet-lab validation remain open work.",
      metrics: [
        "Information density (bits/nucleotide): To be documented",
        "Reconstruction fidelity under insertion/deletion noise: To be documented",
        "Physical in-vitro validation: To be documented",
      ],
      observations: [
        "Formulated sequence mapping as a tensor-network optimization problem to account for secondary structure constraints and homopolymer length limits.",
      ],
      findings: [
        "Tensor-network state representations provide a structured framework for biological sequence constraint satisfaction.",
      ],
    },
    limitations: [
      "Physical in-vitro synthesis and sequencing validation are to be documented.",
      "Results are currently based on computational encoding formulations; wet-lab synthesis has not been performed.",
    ],
    status: "Algorithmic exploration",
    nextSteps: [
      "Evaluate sequence encoding models against physical in-vitro synthesis error distributions.",
      "Extend optimization algorithms to eliminate multi-strand secondary structure interactions.",
    ],
    resources: {
      github: undefined,
      paper: undefined,
      preprint: undefined,
    },
    image: "/research/rna_quantum.png",
  },
  {
    identity: {
      id: "matrixresearch-v1",
      number: "03",
      title: "MATRIXRESEARCH V1",
      shortTitle: "MatrixResearch V1",
      status: "Experimental failure analysis",
      year: "2026",
    },
    positioning: {
      domain: "Representation Learning & Computational Mathematics",
      subdomains: [
        "Representation Learning",
        "Computational Mathematics",
        "Latent Structures",
        "Autoencoder Scaling",
      ],
      summary:
        "Investigating whether low-rank matrix families can be compressed into stable latent representations and analyzing latent collapse under increased dataset scale.",
    },
    problem:
      "High-dimensional matrix families require substantial storage and compute overhead. Compressing low-rank matrix families into low-dimensional latent space requires discovering representations that generalize across expanding matrix distributions without mode collapse.",
    motivation:
      "Determining whether deep autoencoder backbones can learn compact representations of low-rank matrix structures and identifying the boundary conditions where latent representation stability breaks down as dataset volume scales. Note: Learning hidden computational structure / latent matrix multiplication remains a long-term research vector.",
    researchQuestion:
      "Can low-rank matrix families be compressed into stable latent representations using neural autoencoders?",
    hypothesis:
      "MLP autoencoders trained on low-rank matrix decompositions (A = U × V) can maintain stable reconstruction MSE up to a critical dataset diversity threshold, beyond which latent capacity bounds induce representation collapse.",
    data: {
      source: "Synthetically generated 16×16 rank-4 matrix families (A = U × V)",
      dataType: "16×16 low-rank floating point matrices",
      dataCharacteristics: [
        "16×16 matrix dimensions",
        "Rank-4 inner factor matrices U (16×4) and V (4×16)",
        "Uniform factor generation",
      ],
      dataSize: "1,000 to 10,000 matrices across scaling experiments",
      preprocessing: [
        "Matrix flattening to 256-dimensional input vectors",
        "MSE loss normalization",
      ],
    },
    method: {
      architecture:
        "Deep MLP Autoencoder (Encoder: 256 → 1024 → 512 → 256 → 128 latent | Decoder: 128 → 256 → 512 → 1024 → 256)",
      models: ["MLP Autoencoder Backbone"],
      algorithms: ["MSE Reconstruction Loss", "Adam Optimizer", "ReLU Activations"],
      representationMethod:
        "Bottleneck latent space projection (128-dimensional latent vector)",
      pipeline:
        "Generated 16×16 rank-4 matrices via factor multiplication (A = U × V), flattened inputs into 256-dim vectors, and trained the MLP autoencoder with MSE loss and Adam optimizer across 1,000, 5,000, and 10,000 sample regimes.",
    },
    experiments: {
      baselines: [
        "Uncompressed raw matrix representations",
        "PCA linear dimensionality reduction",
      ],
      experimentalSetup:
        "Dataset scale expansion across three experimental regimes: Experiment A (1,000 matrices), Experiment B (5,000 matrices), and Experiment C (10,000 matrices).",
      trainingSetup: "PyTorch MLP autoencoder training with MSE loss and Adam optimizer",
      experimentsPerformed: [
        "Experiment A: 1,000 matrices, 128-dim latent space — stable representation learned (loss ≈ 0.895, latent std ≈ 0.182)",
        "Experiment B: 5,000 matrices, 128-dim latent space — latent collapse observed (loss ≈ 1.0, latent std ≈ 0.0069)",
        "Experiment C: 10,000 matrices, 128-dim latent space — near-collapse / instability observed (loss ≈ 1.0, latent std ≈ 0.0278)",
      ],
    },
    evaluation: {
      metrics: ["Reconstruction MSE Loss", "Latent Standard Deviation (std)"],
      evaluationProtocol:
        "Tracking reconstruction MSE convergence trajectories and latent standard deviation profiles across dataset scaling regimes.",
    },
    results: {
      summary:
        "Initial representation learning succeeded on 1,000 rank-4 matrices (Experiment A), but scaling dataset volume to 5,000 and 10,000 matrices induced latent collapse and instability (Experiments B & C).",
      metrics: [
        "Experiment A (1,000 matrices): Loss ≈ 0.895 | Latent std ≈ 0.182",
        "Experiment B (5,000 matrices): Loss ≈ 1.0 | Latent std ≈ 0.0069 (Collapse)",
        "Experiment C (10,000 matrices): Loss ≈ 1.0 | Latent std ≈ 0.0278 (Near-Collapse)",
      ],
      observations: [
        "Initial representation learning succeeds under limited dataset volume.",
        "Increasing dataset diversity from 1,000 to 5,000 matrices induces latent space collapse without architectural expansion.",
        "Near-collapse trajectory persists at 10,000 matrices, highlighting fundamental capacity boundaries.",
      ],
      findings: [
        "A representation could be learned for a small fixed collection of low-rank matrices, but increasing dataset diversity exposed poor generalization and latent collapse/instability in the current autoencoder approach. This failure mode is part of the core research result.",
      ],
    },
    limitations: [
      "Evaluation is currently restricted to synthetic 16×16 rank-4 matrix families.",
      "Current MLP bottleneck architecture lacks dynamic capacity scaling relative to dataset diversity.",
      "To be documented: Regularized loss formulations (e.g. VAE or contrastive constraints) to prevent collapse.",
    ],
    status: "Experimental failure analysis",
    nextSteps: [
      "Investigate latent dimension scaling laws relative to matrix dataset volume.",
      "Evaluate alternative architectures: VAE, Transformer autoencoders, neural operators, and matrix factorization networks.",
      "Long-term vector: Investigate latent multiplication and hidden computational operator learning once stable representation capacity is established.",
    ],
    resources: {
      github: "https://github.com/PromitMukherjee/MatrixResearch_v1",
      dataset: "Synthetically generated 16×16 rank-4 matrices",
      paper: undefined,
      preprint: undefined,
    },
    isDiagram: true,
  },
  {
    identity: {
      id: "stable-in-place-merge",
      number: "04",
      title: "STABLE IN-PLACE MERGE",
      shortTitle: "Stable In-Place Merge",
      status: "Algorithmic & systems research",
      year: "2026",
    },
    positioning: {
      domain: "Algorithms, Memory-Efficient Computing & Systems",
      subdomains: [
        "Algorithms",
        "Memory-Efficient Computing",
        "In-Place Sorting",
        "Systems",
      ],
      summary:
        "Designing a memory-efficient stable merging algorithm achieving O(1) auxiliary memory bounds via distinct-buffer extraction and block rearrangement.",
    },
    problem:
      "Standard stable merging algorithms require O(N) auxiliary memory to preserve element order, while existing memory-efficient alternatives introduce excessive comparison overheads or fail strict stability guarantees.",
    motivation:
      "In-place memory constraints are critical in embedded systems, real-time engines, and systems programming where external dynamic allocation is expensive or prohibited.",
    researchQuestion:
      "How can stable merging of sorted subarrays be performed with strict O(1) auxiliary memory while preserving strong algorithmic guarantees?",
    hypothesis:
      "Combining distinct-buffer extraction, block rearrangement, block rotation, and Hwang–Lin local merging enables stable merging using O(1) auxiliary memory while preserving upper bounds on comparisons and assignments.",
    data: {
      source: "Randomized payload sequences across diverse element types and key distributions",
      dataType: "Sorted subarray pairs with duplicate key sequences to test stability",
      dataCharacteristics: [
        "Strict element stability verification",
        "O(1) auxiliary memory constraint",
        "Arbitrary subarray length ratios (m, n)",
      ],
      dataSize: "100,000+ randomized test payloads",
      preprocessing: [
        "Randomized sequence generation",
        "Key-value pair stability tagging",
      ],
    },
    method: {
      architecture: "In-place block-based merge framework",
      models: ["Block-rearrangement & rotation state machine"],
      algorithms: [
        "Distinct-buffer extraction",
        "Block rearrangement",
        "Block rotation",
        "Hwang–Lin local merging",
      ],
      representationMethod: "Internal buffer extraction and block pointer manipulation",
      pipeline:
        "01 — Distinct Buffer Extraction → 02 — Block Rearrangement → 03 — Block Rotation → 04 — Hwang–Lin Local Merge.",
    },
    experiments: {
      baselines: [
        "Standard O(N) auxiliary memory merge",
        "Unstable in-place merge algorithms",
      ],
      experimentalSetup:
        "Algorithmic correctness and stability verification across 100,000+ randomized payloads subjected to property testing, fuzzing, and sanitizer diagnostics.",
      trainingSetup: "C++20 systems framework compiled with GCC/Clang under ASAN, UBSAN, and cross-platform CI.",
      experimentsPerformed: [
        "100,000+ randomized payload property testing runs (sortedness, stability, element preservation, equivalence)",
        "Fuzzing under edge-case duplicate key distributions",
        "AddressSanitizer (ASAN) and UndefinedBehaviorSanitizer (UBSAN) memory diagnostics",
        "Cross-platform CI matrix testing (Windows, Ubuntu, macOS)",
      ],
    },
    evaluation: {
      metrics: [
        "Auxiliary Space: O(1)",
        "Comparisons Bound: O(m log(n/m + 1))",
        "Assignments Bound: O((m+n)√m)",
        "Algorithmic Stability: Yes (Verified)",
      ],
      evaluationProtocol:
        "Property-based testing, automated fuzzing, and sanitizer diagnostics verifying zero dynamic memory allocation and strict element stability.",
    },
    results: {
      summary:
        "Algorithm preserves element stability within O(1) auxiliary memory bounds, validated across 100,000+ randomized test payloads, property fuzzing, and ASAN/UBSAN sanitizer suites.",
      metrics: [
        "Auxiliary Space: O(1)",
        "Comparisons Bound: O(m log(n/m + 1))",
        "Assignments Bound: O((m+n)√m)",
        "Stability Guaranteed: Yes",
      ],
      observations: [
        "Distinct-buffer extraction successfully eliminates external memory allocation requirements.",
        "Block rotations and Hwang–Lin local merging maintain stability across unequal subarray ratios.",
        "Zero memory leaks or undefined behavior detected across ASAN/UBSAN sanitizer suites.",
      ],
      findings: [
        "Validation suites confirm theoretical bounds and stability guarantees across 100,000+ randomized payloads.",
      ],
    },
    limitations: [
      "O(1) auxiliary memory involves higher constant-factor assignment costs; when external memory is available, standard O(N) implementations may exhibit lower runtime overhead.",
      "To be documented: Measured execution timing benchmarks and cache miss profiling against standard library implementations.",
    ],
    status: "Algorithmic & systems research",
    nextSteps: [
      "Profile cache-line utilization and memory sub-system performance against standard library implementations.",
      "Investigate vectorization of block rotation and internal buffer operations.",
    ],
    resources: {
      github: "https://github.com/PromitMukherjee/stable-inplac-e-merge",
      documentation: "Algorithm specification and theoretical bounds analysis",
      paper: undefined,
      preprint: undefined,
    },
    isDiagram: true,
  },
];

export function getResearchCaseStudyById(id: string): ResearchCaseStudy | undefined {
  const normalized = id.toLowerCase().trim();
  return researchCaseStudies.find((study) => {
    const studyId = study.identity.id.toLowerCase();
    if (studyId === normalized) return true;
    if (normalized === "diabetic-retinopathy" && studyId === "diabetic-retinopathy-ai") return true;
    if (normalized === "matrix-research-v1" && studyId === "matrixresearch-v1") return true;
    if (normalized === "stable-inplace-merge" && studyId === "stable-in-place-merge") return true;
    return false;
  });
}

export function getAdjacentResearchCaseStudies(currentId: string) {
  const study = getResearchCaseStudyById(currentId);
  if (!study) return { prev: undefined, next: undefined };

  const index = researchCaseStudies.findIndex(
    (s) => s.identity.id === study.identity.id
  );
  const total = researchCaseStudies.length;

  const prev = researchCaseStudies[(index - 1 + total) % total];
  const next = researchCaseStudies[(index + 1) % total];

  return { prev, next };
}
