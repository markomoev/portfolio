import type { Metadata } from "next";
import CaseStudyCard from "@/components/case-study-card";
import { getAllCaseStudies } from "@/content/case-studies";

const SITE_URL = "https://markomoev.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === "en" ? "Projects" : "Проекти";
  const description =
    locale === "en"
      ? "Real businesses, real problems, and the decisions behind them."
      : "Реални бизнеси, реални проблеми и решенията зад тях.";

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/proekti`,
      languages: {
        bg: `${SITE_URL}/bg/proekti`,
        en: `${SITE_URL}/en/proekti`,
        "x-default": `${SITE_URL}/bg/proekti`,
      },
    },
    openGraph: { title, description, url: `${SITE_URL}/${locale}/proekti` },
  };
}

export default async function ProjectsIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const studies = getAllCaseStudies();
  const copy =
    locale === "en"
      ? {
          h1: "Projects",
          sub: "Real businesses, real problems, and the decisions behind them.",
        }
      : {
          h1: "Проекти",
          sub: "Реални бизнеси, реални проблеми и решенията зад тях.",
        };

  return (
    <main className="w-full px-4 sm:px-10 lg:px-20 py-28 md:py-32">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-display font-bold tracking-[-0.02em] text-ink text-[clamp(38px,6vw,72px)]">
          {copy.h1}
        </h1>
        <p className="mt-4 font-body text-18 text-ink leading-relaxed max-w-[68ch]">
          {copy.sub}
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {studies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} locale={locale} />
          ))}
        </div>
      </div>
    </main>
  );
}
