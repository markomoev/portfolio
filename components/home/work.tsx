"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

type WorkItem = {
  slug: string;
  eyebrow: string;
  headline: string;
  text: string;
  stack: string[];
  url: string;
  caseStudy?: boolean;
};

const covers: Record<string, { src: string; alt: { bg: string; en: string } }> = {
  plenty: {
    src: "/work/plenty-site.png",
    alt: {
      bg: "Началният екран на сайта на Plenty",
      en: "Plenty homepage",
    },
  },
  stoykovmed: {
    src: "/work/stoykovmed-site.png",
    alt: {
      bg: "Началният екран на сайта на Stoykovmed с продукта Deflamax",
      en: "Stoykovmed homepage with the Deflamax product",
    },
  },
};

export default function Work() {
  const { t } = useTranslation("projects");
  const params = useParams();
  const locale = (params?.locale as string) || "bg";

  const rawItems = t("items", { returnObjects: true, defaultValue: [] }) as unknown;
  const items: WorkItem[] = Array.isArray(rawItems) ? (rawItems as WorkItem[]) : [];

  return (
    <section
      id="work"
      className="scroll-mt-28 px-[clamp(16px,3vw,36px)] py-[clamp(64px,9vw,112px)]"
    >
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="mb-[clamp(32px,5vw,52px)] flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-vinyl m-0 text-[clamp(40px,7vw,88px)] leading-[0.9] tracking-[-0.02em] text-vinyl">
            {t("headline")}
          </h2>
          <span className="pb-2 text-[13px] font-extrabold tracking-[0.08em] text-decal uppercase">
            {t("badge")}
          </span>
        </Reveal>

        <div className="grid grid-cols-1 gap-7 min-[900px]:grid-cols-2">
          {items.map((item, index) => {
            const cover = covers[item.slug];
            const coverAlt = cover
              ? locale === "en"
                ? cover.alt.en
                : cover.alt.bg
              : "";

            return (
            <Reveal
              key={item.slug}
              delay={index * 90}
              as="article"
              className="flex flex-col border border-vinyl/10 bg-white"
            >
              {cover ? (
                <div className="overflow-hidden border-b border-vinyl/8 bg-vinyl">
                  <Image
                    src={cover.src}
                    alt={coverAlt}
                    width={1024}
                    height={819}
                    className="h-auto w-full"
                    sizes="(max-width: 900px) 92vw, 620px"
                  />
                </div>
              ) : null}
              <div className="flex flex-1 flex-col gap-3 p-7">
                <p className="m-0 text-[13px] font-extrabold tracking-[0.08em] text-decal uppercase">
                  {item.eyebrow}
                </p>
                <h3 className="font-vinyl m-0 text-[clamp(24px,2.2vw,32px)] leading-[0.94] tracking-[-0.02em] text-vinyl">
                  {item.headline}
                </h3>
                <p className="m-0 text-[15px] leading-relaxed text-vinyl/75">{item.text}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.stack.map((tag) => (
                    <span
                      key={tag}
                      className="bg-vinyl/7 px-2.5 py-1 text-[13px] font-bold text-vinyl/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-5 pt-4">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[15px] font-extrabold text-burst hover:text-vinyl"
                  >
                    {t("live")}
                    <ArrowUpRight size={16} />
                  </a>
                  {item.caseStudy === false ? null : (
                    <Link
                      href={`/${locale}/projects/${item.slug}`}
                      className="text-[15px] font-extrabold text-vinyl hover:text-decal"
                    >
                      {t("caseStudy")} →
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
