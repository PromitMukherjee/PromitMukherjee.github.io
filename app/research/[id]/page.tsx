import { Metadata } from "next";
import { redirect } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

const researchMetadata: Record<
  string,
  { title: string; description: string; ogTitle: string; ogDescription: string }
> = {
  "diabetic-retinopathy-ai": {
    title: "Diabetic Retinopathy AI — Research Case Study | Promit Mukherjee",
    description:
      "Self-supervised visual representation learning using JEPA architecture and ResNet101 encoder for 5-level diabetic retinopathy grading on fundus imagery.",
    ogTitle: "Diabetic Retinopathy AI — Promit Mukherjee Research",
    ogDescription:
      "Exploring JEPA-based self-supervised representation learning with ResNet101 encoder for five-level diabetic retinopathy classification.",
  },
  "quantum-rna-storage": {
    title: "Quantum-Inspired RNA Storage — Research Case Study | Promit Mukherjee",
    description:
      "Quantum-inspired computational framework for biological sequence data encoding, secondary structure constraint optimization, and error resilience.",
    ogTitle: "Quantum-Inspired RNA Storage — Promit Mukherjee Research",
    ogDescription:
      "Developing quantum-inspired algorithms for encoding digital data into synthetic RNA sequences under biological constraints.",
  },
  "matrixresearch-v1": {
    title: "MatrixResearch v1 — Research Case Study | Promit Mukherjee",
    description:
      "Neural matrix representation analysis evaluating latent space stability and bottleneck collapse across dataset diversity and capacity constraints.",
    ogTitle: "MatrixResearch v1 — Promit Mukherjee Research",
    ogDescription:
      "Investigating latent representation collapse in MLP autoencoder bottlenecks across varying matrix dataset scales.",
  },
  "stable-in-place-merge": {
    title: "Stable In-Place Merge — Research Case Study | Promit Mukherjee",
    description:
      "Memory-efficient stable merging algorithm achieving strict O(1) auxiliary memory bounds via distinct buffer extraction and block rearrangement.",
    ogTitle: "Stable In-Place Merge — Promit Mukherjee Research",
    ogDescription:
      "Designing a stable subarray merging algorithm achieving O(1) auxiliary memory bounds and Hwang-Lin local merge optimization.",
  },
};

export function generateStaticParams() {
  return [
    { id: "diabetic-retinopathy-ai" },
    { id: "quantum-rna-storage" },
    { id: "matrixresearch-v1" },
    { id: "stable-in-place-merge" },
  ];
}

export function generateMetadata({ params }: PageProps): Metadata {
  const meta = researchMetadata[params.id] || {
    title: "Research Case Study — Promit Mukherjee",
    description: "AI / ML research case study by Promit Mukherjee.",
    ogTitle: "Research Case Study — Promit Mukherjee",
    ogDescription: "AI / ML research case study by Promit Mukherjee.",
  };

  const canonicalUrl = `https://PromitMukherjee.github.io/research/${params.id}`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      url: canonicalUrl,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.ogTitle,
      description: meta.ogDescription,
    },
  };
}

export default function ResearchCaseStudyRoute({ params }: PageProps) {
  redirect(`/?research=${params.id}`);
}
