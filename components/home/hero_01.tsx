"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || "bg";

  return (
    <section
      id="home"
      className="relative w-full px-4 sm:px-10 lg:px-20 pt-28 pb-16 md:pt-36 md:pb-24"
    >
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col gap-6 md:gap-8">
        <p className="font-mono text-14 uppercase tracking-[0.08em] text-muted min-h-[1.25rem]">
          {t("eyebrow")}
        </p>

        <h1 className="font-display font-bold tracking-[-0.02em] text-ink leading-[1.1] text-[clamp(38px,8vw,72px)] min-h-[4.4em] sm:min-h-[2.2em]">
          {t("headline")}
        </h1>

        <p className="font-body text-18 text-ink leading-relaxed max-w-[68ch] min-h-[7.5em] sm:min-h-[4.5em]">
          {t("subheadline")}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 min-h-[3.25rem]">
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-none px-6 py-3 font-body text-16 font-medium bg-accent text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            {t("cta_primary")}
          </a>
          <Link
            href={`/${locale}/proekti`}
            className="inline-flex items-center justify-center rounded-none px-6 py-3 font-body text-16 font-medium text-ink border border-edge bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            {t("cta_secondary")}
          </Link>
        </div>
      </div>
    </section>
  );
}
