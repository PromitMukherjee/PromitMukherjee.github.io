export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Promit Mukherjee",
    "jobTitle": "AI / ML Researcher & Systems Builder",
    "description":
      "AI / ML Researcher & Systems Builder exploring machine learning, computer vision, representation learning, algorithms, and systems.",
    "url": "https://PromitMukherjee.github.io",
    "image": "https://PromitMukherjee.github.io/profile/promit_image.png",
    "sameAs": [
      "https://github.com/PromitMukherjee",
      "https://linkedin.com/in/promit-mukherjee"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "RNS Institute of Technology",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "addressCountry": "India"
      }
    },
    "knowsAbout": [
      "Machine Learning",
      "Computer Vision",
      "Representation Learning",
      "Algorithms",
      "Systems",
      "Medical AI",
      "Computational Biology",
      "Memory-Efficient Computing"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
