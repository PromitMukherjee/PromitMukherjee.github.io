export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  location: string;
  discipline: string;
  focus: string;
  bio: string;
  education: {
    degree: string;
    institution: string;
    location: string;
    period: string;
    cgpa: string;
  };
  honors: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
    resume?: string;
  };
}

export const profileData: ProfileData = {
  name: "PROMIT MUKHERJEE",
  role: "AI / ML RESEARCHER & SYSTEMS BUILDER",
  tagline:
    "Exploring machine learning, computer vision, representation learning, and efficient algorithms through research and first-principles engineering.",
  discipline: "Computer Science",
  location: "Bengaluru, Karnataka, India",
  focus: "Research & Experimental Systems",
  bio: "I am an MCA student at RNS Institute of Technology, Bengaluru, working at the intersection of machine learning, computer vision, representation learning, algorithms, and systems.",
  education: {
    degree: "MCA",
    institution: "RNS Institute of Technology",
    location: "Bengaluru",
    period: "2025–2027",
    cgpa: "8.60",
  },
  honors: "VisionX Internal College Hackathon Runner-up (2025–26)",
  socials: {
    github: "https://github.com/PromitMukherjee",
    linkedin: "https://linkedin.com/in/promit-mukherjee",
    email: "mailto:promitmukherjeeofficial@gmail.com",
    resume: "/profile/PROMIT_MUKHERJEE_Resume_Final.pdf",
  },
};
