"use client";

import { useTranslation } from "react-i18next";

type PromiseItem = { title: string; text: string };

export default function Promises() {
  const { t } = useTranslation("promises");
  const raw = t("items", { returnObjects: true, defaultValue: [] }) as unknown;
  const items: PromiseItem[] = Array.isArray(raw) ? (raw as PromiseItem[]) : [];

  return (
    <section id="about" className="relative w-full py-16 md:py-24 scroll-mt-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-10 lg:px-20">
        <h2 className="font-display font-bold tracking-[-0.02em] text-ink text-[clamp(28px,5vw,52px)]">
          {t("headline")}
        </h2>
        <ul className="mt-10">
          {items.map((item) => (
            <li key={item.title} className="border-t border-edge py-6 last:border-b">
              <h3 className="font-body text-18 font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 font-body text-16 text-ink leading-relaxed max-w-[68ch]">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
