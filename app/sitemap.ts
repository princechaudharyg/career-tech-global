import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://careertechglobal.com";

  const staticPages = [
    "",
    "/programs",
    "/about",
    "/career-services",
    "/opportunities",
    "/contact",
  ];

  return staticPages.map((path) => ({
    url: baseUrl + path,
    lastModified: new Date(),
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}