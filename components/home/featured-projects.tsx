import CaseStudyCard from "@/components/case-study-card";
import { getFeaturedCaseStudies } from "@/content/case-studies";
import Link from "next/link";

export default function FeaturedProjects({ locale }: { locale: string }) {
  const studies = getFeaturedCaseStudies();
  const copy =
    locale === "en"
      ? {
          eyebrow: "REAL PROJECTS",
          headline: "Businesses already running on this.",
          sub: "Two of the latest projects, and the thinking behind them.",
          all: "All projects",
        }
      : {
          eyebrow: "РЕАЛНИ ПРОЕКТИ",
          headline: "Бизнеси, които вече работят с това.",
          sub: "Два от последните проекти, с решенията зад тях.",
          all: "Всички проекти",
        };

  return (
    <section className="w-full px-4 sm:px-10 lg:px-20 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-14 uppercase tracking-[0.08em] text-muted">
          {copy.eyebrow}
        </p>
        <h2 className="mt-3 font-display font-bold tracking-[-0.02em] text-ink text-[clamp(28px,5vw,52px)]">
          {copy.headline}
        </h2>
        <p className="mt-3 font-body text-18 text-ink leading-relaxed">
          {copy.sub}
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {studies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} locale={locale} />
          ))}
        </div>
        <Link
          href={`/${locale}/proekti`}
          className="group mt-10 inline-flex items-center gap-1 font-body text-16 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <span>{copy.all}</span>
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-[4px]">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
