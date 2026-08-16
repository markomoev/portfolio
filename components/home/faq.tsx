"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
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
      className="scroll-mt-28 px-[clamp(16px,3vw,36px)] py-[clamp(64px,9vw,112px)]"
    >
      <div className="mx-auto max-w-[860px]">
        <Reveal className="mb-[clamp(32px,5vw,48px)]">
          <h2 className="font-vinyl m-0 text-[clamp(36px,6vw,72px)] leading-[0.9] tracking-[-0.02em] text-vinyl">
            {t("headline")}
          </h2>
          <p className="mt-4 mb-0 max-w-[48ch] text-[clamp(16px,1.4vw,19px)] leading-relaxed text-vinyl/80">
            {t("subheadline")}
          </p>
        </Reveal>

        <Reveal className="border-t border-vinyl/25">
          {items.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q} className="border-b border-vinyl/25">
                <h3 className="m-0">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-button-${index}`}
                    className="flex w-full cursor-pointer items-center justify-between gap-5 bg-transparent py-[22px] text-left"
                  >
                    <span className="font-vinyl text-[clamp(20px,2vw,26px)] leading-[1.1] tracking-[-0.02em] text-vinyl">
                      {item.q}
                    </span>
                    <span aria-hidden="true" className="flex-none text-[24px] text-decal">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  hidden={!isOpen}
                >
                  <p className="mt-0 mb-6 max-w-[64ch] text-[15px] leading-[1.7] text-vinyl/80">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
