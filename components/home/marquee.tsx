"use client";

import { useTranslation } from "react-i18next";

export default function Marquee() {
  const { t } = useTranslation();
  const raw = t("marquee", { returnObjects: true, defaultValue: [] }) as unknown;
  const items: string[] = Array.isArray(raw) ? (raw as string[]) : [];
  if (!items.length) return null;

  const strip = (hidden: boolean) => (
    <div aria-hidden={hidden || undefined} className="flex items-center gap-8 pr-8">
      {items.map((item) => (
        <span key={item} className="flex items-center gap-8">
          <span className="font-vinyl whitespace-nowrap text-[clamp(20px,2.4vw,28px)] tracking-[-0.02em] text-vinyl/80">
            {item}
          </span>
          <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rotate-45 bg-sticker" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden border-y border-decal/25 bg-[#e2f0fd] py-3.5">
      <div className="animate-marquee flex w-max">
        {strip(false)}
        {strip(true)}
      </div>
    </div>
  );
}
