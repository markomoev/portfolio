"use client";

import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/ui/reveal";

type Stat = { value: string; label: string };

export default function Stats() {
  const { t } = useTranslation("projects");
  const raw = t("stats", { returnObjects: true, defaultValue: [] }) as unknown;
  const stats: Stat[] = Array.isArray(raw) ? (raw as Stat[]) : [];
  if (!stats.length) return null;

  return (
    <section aria-label={t("stats-label")} className="bg-vinyl px-[clamp(16px,3vw,36px)] py-[clamp(48px,7vw,80px)] text-white">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-[clamp(24px,4vw,48px)] min-[520px]:grid-cols-2 min-[900px]:grid-cols-4">
        {stats.map((stat, index) => {
          const highlight = index === 0 || index === stats.length - 1;
          return (
            <Reveal key={stat.value} delay={index * 70}>
              <p
                className={`font-vinyl m-0 text-[clamp(52px,6vw,80px)] leading-[0.85] tracking-[-0.03em] ${highlight ? "text-sticker" : "text-white"}`}
              >
                {stat.value}
              </p>
              <p className="mt-3 mb-0 max-w-[22ch] text-[15px] leading-normal text-white/72">
                {stat.label}
              </p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
