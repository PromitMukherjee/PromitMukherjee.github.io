import { redirect } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return [
    { id: "diabetic-retinopathy-ai" },
    { id: "quantum-rna-storage" },
    { id: "matrixresearch-v1" },
    { id: "stable-in-place-merge" },
  ];
}

export default function ResearchCaseStudyRoute({ params }: PageProps) {
  redirect(`/?research=${params.id}`);
}
