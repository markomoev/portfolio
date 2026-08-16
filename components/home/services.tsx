"use client";

import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import type { ServiceKind } from "./service-phone";

const ServicePhone = dynamic(() => import("./service-phone"), {
  ssr: false,
  loading: () => <div className="absolute inset-0" aria-hidden="true" />,
});

type ServiceItem = {
  number: string;
  title: string;
  for: string;
  includes: string[];
  outcome: string;
};

const kinds: ServiceKind[] = ["site", "landing", "shop"];
const accents = ["bg-decal", "bg-sticker", "bg-burst"];

export default function Services() {
  const { t } = useTranslation("services");
  const raw = t("items", { returnObjects: true, defaultValue: [] }) as unknown;
  const items: ServiceItem[] = Array.isArray(raw) ? (raw as ServiceItem[]) : [];

  return (
    <section
      id="services"
      className="relative scroll-mt-28 overflow-hidden px-[clamp(16px,3vw,36px)] py-[clamp(64px,9vw,112px)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(720px_circle_at_88%_0%,color-mix(in_srgb,var(--decal)_14%,transparent),transparent_55%)]"
      />
      <div className="relative mx-auto max-w-[1280px]">
        <Reveal className="mb-[clamp(36px,5vw,56px)] max-w-[60ch]">
          <h2 className="font-vinyl m-0 max-w-[12ch] text-[clamp(40px,7vw,88px)] leading-[0.9] tracking-[-0.02em] text-vinyl">
            {t("headline")}
          </h2>
          <p className="mt-4 max-w-[52ch] text-[clamp(16px,1.4vw,19px)] leading-relaxed text-vinyl/80">
            {t("subheadline")}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 min-[800px]:grid-cols-3">
          {items.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 80}
              as="article"
              data-tilt-host="service"
              className="group flex flex-col border border-vinyl/10 bg-white transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-1.5 hover:shadow-[0_22px_44px_rgb(11_31_58_/_0.14)]"
            >
              <div className="relative h-[340px] border-b border-vinyl/8 bg-linear-to-b from-[#e8f3fe] to-white">
                <span
                  aria-hidden="true"
                  className={cn("absolute inset-x-0 top-0 z-10 h-2.5", accents[index])}
                />
                <span className="absolute top-[22px] left-[22px] z-10 text-[13px] font-extrabold tracking-[0.08em] text-vinyl/45">
                  {item.number}
                </span>
                <ServicePhone kind={kinds[index] ?? "site"} />
              </div>
              <div className="flex flex-1 flex-col gap-3.5 p-7">
                <h3 className="font-vinyl m-0 text-[clamp(26px,2.4vw,34px)] leading-[0.94] tracking-[-0.02em] text-vinyl">
                  {item.title}
                </h3>
                <p className="m-0 text-[15px] leading-relaxed text-vinyl/75">{item.for}</p>
                <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0">
                  {item.includes.map((line) => (
                    <li
                      key={line}
                      className="bg-decal/10 px-2.5 py-1 text-[13px] font-bold text-decal"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
                <p className="mb-0 mt-auto border-t border-vinyl/12 pt-3.5 text-[15px] font-bold leading-snug text-vinyl">
                  {item.outcome}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
