"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Minus, Plus } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

type FaqItem = { q: string; a: string };

export default function FAQ() {
  const { t } = useTranslation("faq");
  const raw = t("items", { returnObjects: true, defaultValue: [] }) as unknown;
  const items: FaqItem[] = Array.isArray(raw) ? (raw as FaqItem[]) : [];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative scroll-mt-28 overflow-hidden bg-[var(--glass)] px-[clamp(16px,3vw,36px)] py-[clamp(64px,9vw,112px)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(560px_circle_at_50%_0%,color-mix(in_srgb,var(--decal)_10%,transparent),transparent_52%)]"
      />
      <div className="relative mx-auto max-w-[860px]">
        <Reveal className="mb-10">
          <h2 className="font-vinyl m-0 text-[clamp(36px,6vw,72px)] text-[var(--vinyl)]">
            {t("headline")}
          </h2>
          <p className="mt-3 max-w-[48ch] text-[16px] leading-relaxed text-[var(--vinyl)]/75">
            {t("subheadline")}
          </p>
        </Reveal>

        <div className="flex flex-col">
          {items.map((item, index) => {
            const isOpen = open === index;
            return (
              <Reveal
                key={item.q}
                delay={index * 50}
                className={
                  isOpen
                    ? "border-b border-[var(--vinyl)]/25 bg-[color-mix(in_srgb,var(--decal)_9%,transparent)]"
                    : "border-b border-[var(--vinyl)]/25"
                }
              >
                <h3 className="m-0">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-button-${index}`}
                    className="flex w-full items-start justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-vinyl text-[clamp(18px,2vw,24px)] leading-[1.05] text-[var(--vinyl)]">
                      {item.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className="mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[var(--decal)] text-white"
                    >
                      {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  hidden={!isOpen}
                  className={isOpen ? "block" : "hidden"}
                >
                  <p className="mt-0 mb-5 max-w-[62ch] text-[15px] leading-relaxed text-[var(--vinyl)]/80">
                    {item.a}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
