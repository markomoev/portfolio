"use client";

import { useTranslation } from "react-i18next";

type ServiceItem = {
  number: string;
  title: string;
  for: string;
  includes: string[];
  outcome: string;
};

export default function Services() {
  const { t } = useTranslation("services");
  const rawItems = t("items", { returnObjects: true, defaultValue: [] }) as unknown;
  const items: ServiceItem[] = Array.isArray(rawItems) ? (rawItems as ServiceItem[]) : [];

  return (
    <section id="services" className="relative py-16 md:py-24 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {items.map((item) => (
            <article key={item.number} className="flex flex-col border-t border-edge pt-6">
              <p className="font-mono text-14 uppercase tracking-[0.08em] text-muted">
                {item.number}
              </p>
              <h3 className="mt-3 font-display text-22 font-semibold tracking-[-0.02em] text-ink">
                {item.title}
              </h3>
              <p className="mt-3 font-body text-16 text-ink leading-relaxed">{item.for}</p>
              <p className="mt-6 font-mono text-[12px] uppercase tracking-[0.08em] text-muted">
                {t("includesLabel")}
              </p>
              <ul className="mt-3 space-y-2">
                {item.includes.map((line) => (
                  <li key={line} className="font-body text-16 text-ink leading-relaxed">
                    {line}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-mono text-[12px] uppercase tracking-[0.08em] text-muted">
                {t("outcomeLabel")}
              </p>
              <p className="mt-3 font-body text-16 text-ink leading-relaxed">{item.outcome}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
