import type { MetadataRoute } from "next";
import i18nConfig from "@/i18nConfig";
import { getAllCaseStudies } from "@/content/case-studies";

const SITE_URL = "https://markomoev.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = i18nConfig.locales;
  const studies = getAllCaseStudies();
  const now = new Date();

  const paths = [
    "",
    "/kontakt",
    "/privacy-policy",
    ...studies.map((study) => `/projects/${study.slug}`),
  ];

  const localized: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: now,
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : 0.7,
    }))
  );

  return [
    ...localized,
    {
      url: `${SITE_URL}/lab`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.1,
    },
  ];
}
