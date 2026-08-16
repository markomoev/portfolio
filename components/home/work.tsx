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

export default function Work() {
  const { t } = useTranslation("projects");
  const params = useParams();
  const locale = (params?.locale as string) || "bg";

  const rawItems = t("items", { returnObjects: true, defaultValue: [] }) as unknown;
  const items: WorkItem[] = Array.isArray(rawItems) ? (rawItems as WorkItem[]) : [];

  return (
    <section
      id="work"
      className="scroll-mt-28 bg-[var(--decal)] px-[clamp(16px,3vw,36px)] py-[clamp(64px,9vw,112px)]"
    >
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="mb-[clamp(32px,5vw,52px)] flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-vinyl m-0 text-[clamp(40px,7vw,88px)] text-white">
            {t("headline")}
          </h2>
          <span className="font-hand rotate-[-4deg] text-[15px] font-semibold text-[var(--sticker)]">
            {t("badge")}
          </span>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 min-[900px]:grid-cols-2">
          {items.map((item, index) => (
            <Reveal
              key={item.slug}
              delay={index * 90}
              as="article"
              className="relative bg-white p-3 shadow-[6px_14px_0_rgb(11_31_58_/_0.2)]"
              style={{ transform: index === 1 ? "rotate(1.2deg)" : "rotate(-1deg)" }}
            >
              <div className="relative mb-4 aspect-[4/3] overflow-hidden bg-[var(--glass)]">
                {item.slug === "plenty" ? (
                  <Image
                    src="/work/plenty-phone.png"
                    alt=""
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-white p-10">
                    <Image
                      src="/logos/stoykovmed.png"
                      alt=""
                      width={437}
                      height={123}
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>
                )}
              </div>
              <div className="px-3 pb-4">
                <p className="m-0 text-[13px] font-extrabold uppercase tracking-[0.08em] text-[var(--decal)]">
                  {item.eyebrow}
                </p>
                <h3 className="font-vinyl mt-2 text-[clamp(22px,2.2vw,30px)] leading-[0.92] text-[var(--vinyl)]">
                  {item.headline}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--vinyl)]/75">
                  {item.text}
                </p>
                <div className="mt-4 flex flex-wrap gap-4">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[15px] font-extrabold text-[var(--burst)]"
                  >
                    {t("live")}
                    <ArrowUpRight size={16} />
                  </a>
                  {item.caseStudy === false ? null : (
                    <Link
                      href={`/${locale}/proekti/${item.slug}`}
                      className="text-[15px] font-extrabold text-[var(--vinyl)]"
                    >
                      {t("caseStudy")} →
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-10">
          <Link
            href={`/${locale}/proekti`}
            className="font-vinyl text-[22px] text-white underline decoration-[var(--sticker)] decoration-2 underline-offset-4"
          >
            {t("all")} →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
