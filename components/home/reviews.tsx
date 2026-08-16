"use client";

import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/ui/reveal";

type Review = { name: string; role: string; review: string };

export default function Reviews() {
  const { t } = useTranslation("reviews");
  const raw = t("reviews", { returnObjects: true, defaultValue: [] }) as unknown;
  const reviews: Review[] = Array.isArray(raw) ? (raw as Review[]) : [];

  return (
    <section
      id="reviews"
      className="scroll-mt-28 px-[clamp(16px,3vw,36px)] py-[clamp(64px,9vw,112px)]"
    >
      <div className="mx-auto max-w-[1100px]">
        <Reveal className="mb-[clamp(32px,5vw,56px)]">
          <h2 className="font-vinyl m-0 text-[clamp(40px,6vw,72px)] leading-[0.9] tracking-[-0.02em] text-vinyl">
            {t("headline")}
          </h2>
          <p className="mt-4 mb-0 max-w-[48ch] text-[clamp(16px,1.4vw,19px)] leading-relaxed text-vinyl/80">
            {t("subheadline")}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-7 min-[800px]:grid-cols-2">
          {reviews.map((item, index) => (
            <Reveal
              key={item.name}
              delay={index * 90}
              as="article"
              className="border-t border-vinyl/25 pt-6"
            >
              <blockquote className="m-0 text-[clamp(16px,1.4vw,19px)] leading-[1.7] text-vinyl/85">
                “{item.review}”
              </blockquote>
              <p className="mt-5 mb-0 text-[15px] font-extrabold text-vinyl">{item.name}</p>
              <p className="mt-1 mb-0 text-[13px] font-extrabold tracking-[0.08em] text-decal uppercase">
                {item.role}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
