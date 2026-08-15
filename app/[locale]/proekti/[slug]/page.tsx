import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllCaseStudies, getCaseStudy } from "@/content/case-studies";
import type { Localized } from "@/types/case-study";

const SITE_URL = "https://markomoev.com";

function loc(value: Localized, locale: string) {
  return locale === "en" ? value.en : value.bg;
}

function isFilled(value: string) {
  return Boolean(value.trim()) && !value.includes("[ПОПЪЛНИ]");
}

function filledLoc(value: Localized, locale: string) {
  const text = loc(value, locale);
  return isFilled(text) ? text : null;
}

export function generateStaticParams() {
  return getAllCaseStudies().map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  const title = `${study.client.name} · ${loc(study.headline, locale)}`;
  const description = filledLoc(study.context, locale) ?? loc(study.headline, locale);
  const ogImage = study.media[0]?.src;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/proekti/${slug}`,
      languages: {
        bg: `${SITE_URL}/bg/proekti/${slug}`,
        en: `${SITE_URL}/en/proekti/${slug}`,
        "x-default": `${SITE_URL}/bg/proekti/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}/proekti/${slug}`,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const headline = filledLoc(study.headline, locale);
  const context = filledLoc(study.context, locale);
  const problem = filledLoc(study.problem, locale);
  const outcome = filledLoc(study.outcome, locale);
  const duration = filledLoc(study.duration, locale);
  const industry = filledLoc(study.client.industry, locale);
  const city = isFilled(study.client.city) ? study.client.city : null;
  const hero = study.media[0];
  const heroAlt = hero ? loc(hero.alt, locale) : "";
  const showHero = hero && !heroAlt.includes("[ПОПЪЛНИ]");
  const restMedia = study.media.slice(1).filter((item) => isFilled(loc(item.caption, locale)));
  const decisions = study.decisions.filter(
    (d) => filledLoc(d.what, locale) && filledLoc(d.why, locale)
  );
  const testimonialQuote = study.testimonial
    ? filledLoc(study.testimonial.quote, locale)
    : null;
  const whyLabel = locale === "en" ? "Why:" : "Защо:";
  const labels = {
    context: locale === "en" ? "Context" : "Контекст",
    problem: locale === "en" ? "The problem" : "Проблемът",
    did: locale === "en" ? "What I did" : "Какво направих",
    outcome: locale === "en" ? "Outcome" : "Резултат",
    stack: locale === "en" ? "Stack" : "Стек",
    cta: locale === "en" ? "Have a similar problem? Let's talk." : "Имаш подобен проблем? Да го обсъдим.",
    projects: locale === "en" ? "Projects" : "Проекти",
  };

  const metaParts = [
    city,
    industry,
    study.year > 0 ? String(study.year) : null,
    duration,
  ].filter(Boolean);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "en" ? "Home" : "Начало",
        item: `${SITE_URL}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: labels.projects,
        item: `${SITE_URL}/${locale}/proekti`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: study.client.name,
        item: `${SITE_URL}/${locale}/proekti/${study.slug}`,
      },
    ],
  };

  return (
    <main className="w-full px-4 sm:px-10 lg:px-20 py-28 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <article className="max-w-5xl mx-auto">
        {headline ? (
          <h1 className="font-display font-bold tracking-[-0.02em] text-ink text-[clamp(28px,5vw,52px)]">
            {study.client.name}
            <span className="block mt-3 text-[clamp(22px,3vw,38px)] font-semibold">
              {headline}
            </span>
          </h1>
        ) : (
          <h1 className="font-display font-bold tracking-[-0.02em] text-ink text-[clamp(28px,5vw,52px)]">
            {study.client.name}
          </h1>
        )}

        {metaParts.length > 0 ? (
          <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.08em] text-muted">
            {metaParts.join(" · ")}
          </p>
        ) : null}

        {showHero && hero ? (
          <div className="relative mt-10 aspect-[4/3] w-full overflow-hidden bg-edge">
            <Image
              src={hero.src}
              alt={isFilled(heroAlt) ? heroAlt : study.client.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              unoptimized={hero.src.endsWith(".svg")}
              priority
            />
          </div>
        ) : null}

        {context ? (
          <section className="mt-14">
            <h2 className="font-display text-28 font-semibold tracking-[-0.02em] text-ink">
              {labels.context}
            </h2>
            <p className="mt-4 font-body text-18 text-ink leading-relaxed max-w-[68ch]">
              {context}
            </p>
          </section>
        ) : null}

        {problem ? (
          <section className="mt-14">
            <h2 className="font-display text-28 font-semibold tracking-[-0.02em] text-ink">
              {labels.problem}
            </h2>
            <p className="mt-4 font-body text-18 text-ink leading-relaxed max-w-[68ch]">
              {problem}
            </p>
          </section>
        ) : null}

        {decisions.length > 0 ? (
          <section className="mt-14">
            <h2 className="font-display text-28 font-semibold tracking-[-0.02em] text-ink">
              {labels.did}
            </h2>
            <ul className="mt-6 space-y-8">
              {decisions.map((decision) => (
                <li key={loc(decision.what, locale)} className="border-t border-edge pt-6">
                  <h3 className="font-body text-18 font-semibold text-ink">
                    {loc(decision.what, locale)}
                  </h3>
                  <p className="mt-2 font-body text-16 text-ink leading-relaxed max-w-[68ch]">
                    <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-muted">
                      {whyLabel}{" "}
                    </span>
                    {loc(decision.why, locale)}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {restMedia.length > 0 ? (
          <section className="mt-14 grid grid-cols-1 gap-8">
            {restMedia.map((item) => (
              <figure key={item.src + loc(item.caption, locale)}>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-edge">
                  <Image
                    src={item.src}
                    alt={
                      isFilled(loc(item.alt, locale))
                        ? loc(item.alt, locale)
                        : loc(item.caption, locale)
                    }
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    unoptimized={item.src.endsWith(".svg")}
                  />
                </div>
                <figcaption className="mt-3 font-body text-14 text-muted">
                  {loc(item.caption, locale)}
                </figcaption>
              </figure>
            ))}
          </section>
        ) : null}

        {outcome ? (
          <section className="mt-14">
            <h2 className="font-display text-28 font-semibold tracking-[-0.02em] text-ink">
              {labels.outcome}
            </h2>
            <p className="mt-4 font-body text-18 text-ink leading-relaxed max-w-[68ch]">
              {outcome}
            </p>
          </section>
        ) : null}

        {study.stack.length > 0 ? (
          <section className="mt-14">
            <h2 className="font-mono text-[12px] uppercase tracking-[0.08em] text-muted">
              {labels.stack}
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {study.stack.map((item) => (
                <li
                  key={item}
                  className="font-mono text-[12px] uppercase tracking-[0.08em] text-muted border border-edge px-2 py-1"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {testimonialQuote && study.testimonial ? (
          <section className="mt-14 border-t border-edge pt-10">
            <blockquote className="font-body text-18 text-ink leading-relaxed max-w-[68ch]">
              “{testimonialQuote}”
            </blockquote>
            <p className="mt-4 font-body text-16 text-ink">
              {study.testimonial.author}
            </p>
            {filledLoc(study.testimonial.role, locale) ? (
              <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-muted">
                {loc(study.testimonial.role, locale)}
              </p>
            ) : null}
          </section>
        ) : null}

        <div className="mt-16 pt-10 border-t border-edge">
          <Link
            href={`/${locale}/kontakt`}
            className="inline-flex items-center justify-center px-6 py-3 font-body text-16 font-medium bg-accent text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            {labels.cta}
          </Link>
        </div>
      </article>
    </main>
  );
}
