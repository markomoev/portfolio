"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/ui/reveal";

export default function About() {
  const { t } = useTranslation("about");
  const raw = t("bio", { returnObjects: true, defaultValue: [] }) as unknown;
  const bio: string[] = Array.isArray(raw) ? (raw as string[]) : [];
  const [lead, ...rest] = bio;

  return (
    <section
      id="about"
      className="scroll-mt-28 px-[clamp(16px,3vw,36px)] py-[clamp(64px,9vw,112px)]"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-12 lg:gap-x-20 lg:gap-y-0">
        <Reveal className="lg:col-span-8 lg:mb-16">
          <h2 className="font-vinyl m-0 text-[clamp(40px,7vw,88px)] leading-[0.9] tracking-[-0.02em] text-vinyl">
            {t("headline")}
          </h2>
        </Reveal>

        <Reveal
          delay={60}
          className="self-start pr-2 pb-2 lg:sticky lg:top-28 lg:col-span-5 lg:col-start-1 lg:row-start-2 lg:pr-3 lg:pb-3"
        >
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 translate-x-2 translate-y-2 bg-accent lg:translate-x-3 lg:translate-y-3"
            />
            <div className="relative aspect-[4/5] max-h-[400px] w-full overflow-hidden lg:max-h-[600px]">
              <Image
                src="/photos/wide.JPG"
                alt={t("image-alt")}
                fill
                sizes="(max-width: 1023px) 92vw, 40vw"
                className="object-cover object-top saturate-95"
              />
            </div>
          </div>
        </Reveal>

        <Reveal
          delay={100}
          className="lg:col-span-6 lg:col-start-7 lg:row-start-2 lg:max-w-[62ch]"
        >
          {lead ? (
            <p className="m-0 mb-3 text-2xl leading-snug text-vinyl lg:mb-4 lg:text-[28px]">
              {lead}
            </p>
          ) : null}
          <div className="space-y-6">
            {rest.map((paragraph) => (
              <p
                key={paragraph}
                className="m-0 text-[17px] leading-[1.7] text-vinyl/85 lg:text-[18px]"
              >
                {paragraph}
              </p>
            ))}
            <p className="m-0 text-[17px] leading-[1.7] text-vinyl/85 lg:text-[18px]">
              {t("bio-close-before")}
              <em className="font-bold not-italic text-accent">{t("bio-close-accent")}</em>
              {t("bio-close-after")}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
