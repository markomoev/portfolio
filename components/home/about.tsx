"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/ui/reveal";

type AboutItem = { title: string; text: string };

export default function About() {
  const { t } = useTranslation("about");
  const raw = t("items", { returnObjects: true, defaultValue: [] }) as unknown;
  const items: AboutItem[] = Array.isArray(raw) ? (raw as AboutItem[]) : [];

  return (
    <section
      id="about"
      className="relative scroll-mt-28 overflow-hidden bg-[var(--glass)] px-[clamp(16px,3vw,36px)] py-[clamp(64px,9vw,112px)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(640px_circle_at_8%_80%,color-mix(in_srgb,var(--decal)_12%,transparent),transparent_58%)]"
      />
      <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-[clamp(28px,4vw,56px)] min-[900px]:grid-cols-2">
        <Reveal>
          <h2 className="font-vinyl m-0 whitespace-pre-line text-[clamp(36px,6vw,72px)] text-[var(--vinyl)]">
            {t("headline-1")}
            {"\n"}
            <span className="text-[var(--burst)]">{t("headline-2")}</span>
          </h2>
          <p className="mt-4 max-w-[48ch] text-[clamp(16px,1.4vw,19px)] leading-relaxed text-[var(--vinyl)]/80">
            {t("subheadline")}
          </p>
          <div className="relative mt-8">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/photos/wide.JPG"
                alt={t("image-alt")}
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 mb-0 text-[13px] font-semibold tracking-[0.08em] text-[var(--vinyl)]/60">
              {t("badge-title")}
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="flex flex-col gap-0">
          {items.map((item) => (
            <div
              key={item.title}
              className="border-b border-[var(--vinyl)]/25 py-5 first:border-t"
            >
              <h3 className="font-vinyl m-0 text-[clamp(22px,2.2vw,30px)] text-[var(--vinyl)]">
                {item.title}
              </h3>
              <p className="mt-2 mb-0 max-w-[52ch] text-[15px] leading-relaxed text-[var(--vinyl)]/75">
                {item.text}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
