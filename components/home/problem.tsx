"use client";

import { useTranslation } from "react-i18next";

export default function Problem() {
  const { t } = useTranslation("problem");
  const items = t("items", { returnObjects: true }) as string[];
  const list = Array.isArray(items) ? items : [];

  return (
    <section className="w-full px-4 sm:px-10 lg:px-20 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-14 uppercase tracking-[0.08em] text-muted">
          {t("eyebrow")}
        </p>
        <h2 className="mt-3 font-display font-bold tracking-[-0.02em] text-ink text-[clamp(28px,5vw,52px)]">
          {t("headline")}
        </h2>

        <ul className="mt-10">
          {list.map((item) => (
            <li
              key={item}
              className="font-body text-18 text-ink leading-relaxed py-5 border-t border-edge last:border-b"
            >
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-10 font-body text-18 text-ink leading-relaxed max-w-[68ch] bg-accent-soft p-6">
          {t("close")}
        </p>
      </div>
    </section>
  );
}
