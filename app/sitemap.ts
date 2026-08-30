import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://PromitMukherjee.github.io";

  const routes = [
    "",
    "/research/diabetic-retinopathy-ai",
    "/research/quantum-rna-storage",
    "/research/matrixresearch-v1",
    "/research/stable-in-place-merge",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
