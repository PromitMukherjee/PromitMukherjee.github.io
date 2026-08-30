/**
 * Research Case Study Data Architecture
 * Reusable data structure for research portfolio projects.
 */

export type ResearchStatus =
  | "Research exploration"
  | "Experimental"
  | "In development"
  | string;

export interface ResearchIdentity {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  status: ResearchStatus;
  year: number | string;
}

export interface ResearchPositioning {
  domain: string;
  subdomains: string[];
  summary: string;
}

export interface ResearchDataInput {
  dataset?: string;
  source?: string;
  dataType?: string;
  dataCharacteristics?: string[];
  dataSize?: string;
  preprocessing?: string[];
}

export interface ResearchMethod {
  architecture?: string;
  models?: string[];
  algorithms?: string[];
  representationMethod?: string;
  pipeline?: string;
  processingApproach?: string;
}

export interface ResearchExperiments {
  baselines?: string[];
  experimentalSetup?: string;
  trainingSetup?: string;
  comparison?: string;
  ablationStudies?: string;
  experimentsPerformed?: string[];
}

export interface ResearchEvaluation {
  metrics?: string[];
  evaluationProtocol?: string;
  comparisonCriteria?: string[];
}

export interface ResearchResults {
  summary?: string;
  metrics?: string[];
  observations?: string[];
  findings?: string[];
}

export interface ResearchResources {
  github?: string;
  paper?: string;
  preprint?: string;
  dataset?: string;
  documentation?: string;
  experiments?: string;
  other?: Array<{ label: string; url: string }>;
}

export interface EngineeringBuild {
  architecture?: string[];
  implementation?: string;
  infrastructure?: string[];
  tools?: string[];
  deployment?: string;
}

export interface ResearchCaseStudy {
  // Identity
  identity: ResearchIdentity;

  // Positioning
  positioning: ResearchPositioning;

  // Problem & Motivation
  problem: string;
  motivation: string;

  // Research Core
  researchQuestion: string;
  hypothesis: string;

  // Data / Input
  data: ResearchDataInput;

  // Method
  method: ResearchMethod;

  // Experiments
  experiments: ResearchExperiments;

  // Evaluation
  evaluation: ResearchEvaluation;

  // Results
  results: ResearchResults;

  // Limitations
  limitations: string[];

  // Current Status
  status: ResearchStatus;

  // Next Steps
  nextSteps: string[];

  // Resources
  resources: ResearchResources;

  // Distinct Engineering / Build Details (Optional)
  build?: EngineeringBuild;

  // Visual Assets / Compatibility Metadata
  image?: string;
  isDiagram?: boolean;
}
