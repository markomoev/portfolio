import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/types/case-study";

function loc(value: { bg: string; en: string }, locale: string) {
  return locale === "en" ? value.en : value.bg;
}

export default function CaseStudyCard({
  study,
  locale,
}: {
  study: CaseStudy;
  locale: string;
}) {
  const image = study.media[0];
  const industry = loc(study.client.industry, locale);
  const metaParts = [
    study.client.city,
    industry,
    study.year > 0 ? String(study.year) : "",
  ].filter((part) => part && part !== "[ПОПЪЛНИ]");
  const href = `/${locale}/proekti/${study.slug}`;
  const cta = locale === "en" ? "See the full project" : "Виж целия проект";
  const alt = image
    ? loc(image.alt, locale).includes("[ПОПЪЛНИ]")
      ? study.client.name
      : loc(image.alt, locale)
    : study.client.name;

  return (
    <article className="flex flex-col">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-edge">
        {image ? (
          <Image
            src={image.src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized={image.src.endsWith(".svg")}
          />
        ) : null}
      </div>
      <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.08em] text-muted">
        {metaParts.join(" · ")}
      </p>
      <h3 className="mt-2 font-display text-22 font-semibold tracking-[-0.02em] text-ink">
        {study.client.name}
      </h3>
      <p className="mt-2 font-body text-16 text-ink leading-relaxed">
        {loc(study.headline, locale)}
      </p>
      <Link
        href={href}
        className="group mt-4 inline-flex items-center gap-1 font-body text-16 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <span>{cta}</span>
        <span className="inline-block transition-transform duration-200 group-hover:translate-x-[4px]">
          →
        </span>
      </Link>
    </article>
  );
}
