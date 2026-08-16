import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
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

function paragraphs(value: Localized, locale: string) {
  return loc(value, locale)
    .split("\n\n")
    .map((part) => part.trim())
    .filter((part) => isFilled(part));
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
  const contextParas = paragraphs(study.context, locale);
  const problemParas = paragraphs(study.problem, locale);
  const outcomeParas = paragraphs(study.outcome, locale);
  const industry = filledLoc(study.client.industry, locale);
  const city = isFilled(study.client.city) ? study.client.city : null;
  const hero = study.media[0];
  const heroAlt = hero ? loc(hero.alt, locale) : "";
  const showHero = Boolean(hero && isFilled(heroAlt));
  const heroCaption = hero ? filledLoc(hero.caption, locale) : null;
  const restMedia = study.media.slice(1).filter((item) => isFilled(loc(item.caption, locale)));
  const decisions = study.decisions.filter(
    (d) => filledLoc(d.what, locale) && filledLoc(d.why, locale)
  );
  const facts = (study.facts ?? []).filter((fact) => filledLoc(fact.value, locale));
  const onSite = (study.onSite ?? []).filter((item) => filledLoc(item, locale));
  const testimonialQuote = study.testimonial
    ? filledLoc(study.testimonial.quote, locale)
    : null;
  const isEn = locale === "en";
  const labels = {
    context: isEn ? "The brief" : "За проекта",
    problem: isEn ? "The problem" : "Проблемът",
    did: isEn ? "What I did" : "Какво направих",
    onSite: isEn ? "What is on the site" : "Какво има на сайта",
    outcome: isEn ? "What it does now" : "Какво прави сега",
    built: isEn ? "Built with" : "Направено с",
    live: isEn ? "View live" : "Виж на живо",
    cta: isEn ? "Want a site like this? Let's talk." : "Искаш такъв сайт? Да говорим.",
  };

  const metaParts = [industry, city, study.year > 0 ? String(study.year) : null].filter(
    Boolean
  );

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isEn ? "Home" : "Начало",
        item: `${SITE_URL}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: study.client.name,
        item: `${SITE_URL}/${locale}/proekti/${study.slug}`,
      },
    ],
  };

  return (
    <main className="bg-paper px-[clamp(16px,3vw,36px)] pt-[clamp(120px,15vw,168px)] pb-[clamp(64px,9vw,112px)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <article className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 items-end gap-[clamp(28px,4vw,56px)] min-[900px]:grid-cols-2">
          <header>
            <h1 className="font-vinyl m-0 max-w-[12ch] text-[clamp(40px,7vw,88px)] leading-[0.9] tracking-[-0.02em] text-vinyl">
              {study.client.name}
            </h1>
            {headline ? (
              <p className="mt-5 mb-0 max-w-[28ch] text-[clamp(18px,2vw,28px)] leading-[1.15] font-extrabold tracking-[-0.02em] text-vinyl/80">
                {headline}
              </p>
            ) : null}
            {metaParts.length > 0 ? (
              <p className="mt-4 mb-0 text-[13px] font-extrabold tracking-[0.08em] text-decal uppercase">
                {metaParts.join(" · ")}
              </p>
            ) : null}
            {study.client.url ? (
              <a
                href={study.client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-[15px] font-extrabold text-burst hover:text-vinyl"
              >
                {labels.live}
                <ArrowUpRight size={16} />
              </a>
            ) : null}
          </header>

          {showHero && hero ? (
            <figure className="m-0 overflow-hidden bg-vinyl">
              <Image
                src={hero.src}
                alt={heroAlt}
                width={1024}
                height={819}
                priority
                className="h-auto w-full"
                sizes="(max-width: 900px) 92vw, 620px"
              />
              {heroCaption ? (
                <figcaption className="bg-paper px-0 pt-3 text-[13px] font-semibold tracking-[0.04em] text-vinyl/60">
                  {heroCaption}
                </figcaption>
              ) : null}
            </figure>
          ) : null}
        </div>

        {facts.length > 0 ? (
          <ul className="mt-[clamp(36px,5vw,56px)] mb-0 grid list-none grid-cols-1 gap-0 border-y border-vinyl/25 p-0 min-[700px]:grid-cols-3">
            {facts.map((fact) => (
              <li
                key={loc(fact.label, locale)}
                className="border-b border-vinyl/25 py-5 min-[700px]:border-b-0 min-[700px]:border-r min-[700px]:px-6 min-[700px]:first:pl-0 min-[700px]:last:border-r-0 min-[700px]:last:pr-0"
              >
                <p className="m-0 text-[13px] font-extrabold tracking-[0.08em] text-decal uppercase">
                  {loc(fact.label, locale)}
                </p>
                <p className="mt-2 mb-0 text-[15px] font-bold leading-snug text-vinyl">
                  {loc(fact.value, locale)}
                </p>
              </li>
            ))}
          </ul>
        ) : null}

        {contextParas.length > 0 ? (
          <section className="mt-[clamp(36px,5vw,56px)] max-w-[68ch]">
            <h2 className="font-vinyl m-0 text-[clamp(22px,2.2vw,30px)] leading-[0.94] tracking-[-0.02em] text-vinyl">
              {labels.context}
            </h2>
            <div className="mt-4 flex flex-col gap-3.5">
              {contextParas.map((para) => (
                <p
                  key={para}
                  className="m-0 text-[clamp(16px,1.4vw,19px)] leading-[1.7] text-vinyl/85"
                >
                  {para}
                </p>
              ))}
            </div>
          </section>
        ) : null}

        {problemParas.length > 0 ? (
          <section className="mt-12 max-w-[68ch] border-t border-vinyl/25 pt-6">
            <h2 className="font-vinyl m-0 text-[clamp(22px,2.2vw,30px)] leading-[0.94] tracking-[-0.02em] text-vinyl">
              {labels.problem}
            </h2>
            <div className="mt-4 flex flex-col gap-3.5">
              {problemParas.map((para) => (
                <p
                  key={para}
                  className="m-0 text-[clamp(16px,1.4vw,19px)] leading-[1.7] text-vinyl/85"
                >
                  {para}
                </p>
              ))}
            </div>
          </section>
        ) : null}

        {decisions.length > 0 ? (
          <section className="mt-12 border-t border-vinyl/25 pt-6">
            <h2 className="font-vinyl m-0 text-[clamp(22px,2.2vw,30px)] leading-[0.94] tracking-[-0.02em] text-vinyl">
              {labels.did}
            </h2>
            <ul className="mt-6 mb-0 grid list-none grid-cols-1 gap-x-10 gap-y-8 p-0 min-[800px]:grid-cols-2">
              {decisions.map((decision) => (
                <li key={loc(decision.what, locale)} className="border-t border-vinyl/25 pt-5">
                  <h3 className="font-vinyl m-0 text-[clamp(18px,2vw,24px)] leading-[1.05] tracking-[-0.02em] text-vinyl">
                    {loc(decision.what, locale)}
                  </h3>
                  <p className="mt-2 mb-0 text-[15px] leading-[1.7] text-vinyl/80">
                    {loc(decision.why, locale)}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {onSite.length > 0 ? (
          <section className="mt-12 border-t border-vinyl/25 pt-6">
            <h2 className="font-vinyl m-0 text-[clamp(22px,2.2vw,30px)] leading-[0.94] tracking-[-0.02em] text-vinyl">
              {labels.onSite}
            </h2>
            <ul className="mt-5 mb-0 grid list-none grid-cols-1 gap-3 p-0 min-[800px]:grid-cols-2">
              {onSite.map((item) => (
                <li
                  key={loc(item, locale)}
                  className="flex items-start gap-3 text-[15px] leading-relaxed text-vinyl/80"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rotate-45 bg-sticker"
                  />
                  {loc(item, locale)}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {restMedia.length > 0 ? (
          <section className="mt-12 grid grid-cols-1 gap-8 border-t border-vinyl/25 pt-6">
            {restMedia.map((item) => (
              <figure key={item.src + loc(item.caption, locale)} className="m-0 overflow-hidden">
                <Image
                  src={item.src}
                  alt={
                    isFilled(loc(item.alt, locale))
                      ? loc(item.alt, locale)
                      : loc(item.caption, locale)
                  }
                  width={1024}
                  height={819}
                  className="h-auto w-full"
                  sizes="(max-width: 1280px) 92vw, 1280px"
                />
                <figcaption className="mt-3 text-[13px] font-semibold tracking-[0.04em] text-vinyl/60">
                  {loc(item.caption, locale)}
                </figcaption>
              </figure>
            ))}
          </section>
        ) : null}

        {outcomeParas.length > 0 ? (
          <section className="mt-12 max-w-[68ch] border-t border-vinyl/25 pt-6">
            <h2 className="font-vinyl m-0 text-[clamp(22px,2.2vw,30px)] leading-[0.94] tracking-[-0.02em] text-vinyl">
              {labels.outcome}
            </h2>
            <div className="mt-4 flex flex-col gap-3.5">
              {outcomeParas.map((para) => (
                <p
                  key={para}
                  className="m-0 text-[clamp(16px,1.4vw,19px)] leading-[1.7] text-vinyl/85"
                >
                  {para}
                </p>
              ))}
            </div>
          </section>
        ) : null}

        {study.stack.length > 0 ? (
          <section className="mt-12 border-t border-vinyl/25 pt-6">
            <h2 className="font-vinyl m-0 text-[clamp(22px,2.2vw,30px)] leading-[0.94] tracking-[-0.02em] text-vinyl">
              {labels.built}
            </h2>
            <ul className="mt-4 mb-0 flex list-none flex-wrap gap-x-5 gap-y-2 p-0">
              {study.stack.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[15px] font-bold text-vinyl/80">
                  <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rotate-45 bg-sticker" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {testimonialQuote && study.testimonial ? (
          <section className="mt-12 max-w-[68ch] border-t border-vinyl/25 pt-6">
            <blockquote className="m-0 text-[clamp(16px,1.4vw,19px)] leading-[1.7] text-vinyl/85">
              “{testimonialQuote}”
            </blockquote>
            <p className="mt-5 mb-0 text-[15px] font-extrabold text-vinyl">
              {study.testimonial.author}
            </p>
            {filledLoc(study.testimonial.role, locale) ? (
              <p className="mt-1 mb-0 text-[13px] font-extrabold tracking-[0.08em] text-decal uppercase">
                {loc(study.testimonial.role, locale)}
              </p>
            ) : null}
          </section>
        ) : null}

        <p className="mt-12 mb-0">
          <Link
            href={`/${locale}#contact`}
            className="inline-flex items-center bg-vinyl px-6 py-[15px] text-[13px] font-extrabold tracking-[0.04em] text-white uppercase transition-transform hover:-translate-y-0.5"
          >
            {labels.cta}
          </Link>
        </p>
      </article>
    </main>
  );
}
