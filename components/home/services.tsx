"use client";

import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type ServiceItem = {
  title: string;
  for: string;
  includes: string[];
  outcome: string;
};

const rotations = ["-1.4deg", "1.1deg", "-0.6deg"];
const accents = ["bg-[var(--decal)]", "bg-[var(--sticker)]", "bg-[var(--burst)]"];

export default function Services() {
  const { t } = useTranslation("services");
  const raw = t("items", { returnObjects: true, defaultValue: [] }) as unknown;
  const items: ServiceItem[] = Array.isArray(raw) ? (raw as ServiceItem[]) : [];

  return (
    <section
      id="services"
      className="relative scroll-mt-28 overflow-hidden bg-[var(--glass)] px-[clamp(16px,3vw,36px)] py-[clamp(64px,9vw,112px)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(720px_circle_at_88%_0%,color-mix(in_srgb,var(--decal)_14%,transparent),transparent_55%)]"
      />
      <div className="relative mx-auto max-w-[1280px]">
        <Reveal className="mb-[clamp(36px,5vw,56px)]">
          <h2 className="font-vinyl m-0 max-w-[12ch] text-[clamp(40px,7vw,88px)] text-[var(--vinyl)]">
            {t("headline")}
          </h2>
          <p className="mt-4 max-w-[52ch] text-[clamp(16px,1.4vw,19px)] leading-relaxed text-[var(--vinyl)]/80">
            {t("subheadline")}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 min-[800px]:grid-cols-3">
          {items.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 80}
              className="relative flex flex-col gap-4 overflow-hidden bg-white p-7 shadow-[4px_10px_0_rgb(11_31_58_/_0.12)]"
              style={{ transform: `rotate(${rotations[index]})` }}
            >
              <span
                aria-hidden="true"
                className={cn("absolute inset-x-0 top-0 h-2.5", accents[index])}
              />
              <h3 className="font-vinyl m-0 text-[clamp(26px,2.4vw,34px)] leading-[0.9] text-[var(--vinyl)]">
                {item.title}
              </h3>
              <p className="m-0 text-[15px] leading-relaxed text-[var(--vinyl)]/75">
                {item.for}
              </p>
              <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
                {item.includes.map((line) => (
                  <li key={line} className="font-hand text-[15px] text-[var(--vinyl)]">
                    → {line}
                  </li>
                ))}
              </ul>
              <p className="mb-0 mt-auto pt-2 text-[15px] font-bold leading-snug text-[var(--vinyl)]">
                {item.outcome}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
