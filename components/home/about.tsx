"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/ui/reveal";

export default function About() {
  const { t } = useTranslation("about");
  const raw = t("bio", { returnObjects: true, defaultValue: [] }) as unknown;
  const bio: string[] = Array.isArray(raw) ? (raw as string[]) : [];

  return (
    <section
      id="about"
      className="relative scroll-mt-28 overflow-hidden bg-[var(--glass)] px-[clamp(16px,3vw,36px)] py-[clamp(64px,9vw,112px)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(640px_circle_at_8%_80%,color-mix(in_srgb,var(--decal)_12%,transparent),transparent_58%)]"
      />
      <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-[clamp(28px,4vw,56px)] min-[900px]:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)]">
        <Reveal>
          <div className="relative aspect-[3/4] overflow-hidden min-[900px]:aspect-[4/5]">
            <Image
              src="/photos/wide.JPG"
              alt={t("image-alt")}
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              className="object-cover object-[center_12%]"
            />
          </div>
        </Reveal>

        <Reveal delay={80} className="min-[900px]:pt-4">
          <h2 className="font-vinyl m-0 text-[clamp(36px,6vw,72px)] text-[var(--vinyl)]">
            {t("headline")}
          </h2>
          <div className="mt-6 flex max-w-[46ch] flex-col gap-4">
            {bio.map((paragraph) => (
              <p
                key={paragraph}
                className="m-0 text-[clamp(16px,1.4vw,19px)] leading-relaxed text-[var(--vinyl)]/80"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
