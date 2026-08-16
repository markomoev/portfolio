"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export default function Hero() {
  const { t, i18n } = useTranslation();
  const isBg = i18n.language.startsWith("bg");
  const chips = [t("hero-chip-price"), t("hero-chip-reply"), t("hero-chip-code")];

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-paper pt-[clamp(120px,15vw,168px)] pb-[clamp(48px,6vw,72px)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in srgb, var(--decal) 22%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--decal) 16%, transparent) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(closest-side, black 45%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(closest-side, black 45%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(760px_circle_at_8%_10%,color-mix(in_srgb,var(--decal)_26%,transparent),transparent_58%),radial-gradient(640px_circle_at_94%_76%,color-mix(in_srgb,var(--decal)_14%,transparent),transparent_62%)]"
      />

      <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-[clamp(28px,4vw,56px)] px-[clamp(16px,3vw,36px)] min-[900px]:grid-cols-2">
        <div>
          <p className="m-0 inline-flex items-center gap-2.5 bg-decal py-[7px] pr-3.5 pl-[11px] text-[13px] font-extrabold tracking-[0.04em] text-white">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inset-0 animate-mm-ping rounded-full bg-white/75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            {t("sill")}
          </p>

          <h1
            className={cn(
              "font-vinyl m-0 mt-[clamp(18px,2.5vw,28px)] max-w-[13ch] text-[clamp(48px,8.6vw,108px)] tracking-[-0.02em] text-vinyl",
              isBg ? "leading-[0.92]" : "leading-[0.86]"
            )}
          >
            <span className="animate-mm-weight block" style={{ animationDelay: "0.05s" }}>
              {t("headline-1")}
            </span>
            <span className="animate-mm-weight block" style={{ animationDelay: "0.18s" }}>
              {t("headline-2-pre")}{" "}
              <em className="not-italic text-decal">{t("headline-2-accent")}</em>
            </span>
            <span className="animate-mm-weight block" style={{ animationDelay: "0.31s" }}>
              {t("headline-3")}
            </span>
          </h1>

          <p
            className="animate-mm-rise mt-[clamp(16px,2.2vw,24px)] max-w-[44ch] text-[clamp(17px,1.6vw,20px)] leading-normal font-medium text-vinyl/75"
            style={{ animationDelay: "0.45s" }}
          >
            {t("subheadline")}
          </p>

          <div
            className="animate-mm-rise mt-[clamp(22px,3vw,32px)] flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.58s" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-decal px-[26px] py-[15px] text-[15px] font-extrabold text-white shadow-[0_10px_24px_rgb(31_95_214_/_0.28)] transition-[transform,box-shadow] hover:-translate-y-[3px] hover:shadow-[0_16px_32px_rgb(31_95_214_/_0.34)]"
            >
              {t("cta_primary")}
              <ArrowRight size={16} />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 border-2 border-decal bg-decal/8 px-6 py-[13px] text-[15px] font-extrabold text-decal transition-transform hover:-translate-y-[3px] hover:bg-decal/16"
            >
              {t("cta_secondary")}
            </a>
          </div>

          <ul
            className="animate-mm-rise mt-[clamp(28px,4vw,40px)] mb-0 flex list-none flex-wrap items-center gap-x-5 gap-y-2.5 p-0"
            style={{ animationDelay: "0.7s" }}
          >
            {chips.map((chip, index) => (
              <li key={chip} className="flex items-center gap-5">
                {index > 0 ? (
                  <span
                    aria-hidden="true"
                    className="inline-block h-1.5 w-1.5 rotate-45 bg-sticker"
                  />
                ) : null}
                <span className="text-[15px] font-bold text-vinyl/72">{chip}</span>
              </li>
            ))}
          </ul>
        </div>

        <Reveal delay={80} className="relative flex justify-center">
          <div
            aria-hidden="true"
            className="absolute bottom-[6%] h-[26px] w-[min(420px,80%)] rounded-full bg-vinyl/16 blur-[22px]"
          />
          <Image
            src="/work/plenty-iphone.png"
            alt={t("hero-portrait-alt")}
            width={367}
            height={738}
            priority
            sizes="(max-width: 900px) 92vw, 640px"
            className="animate-mm-float relative h-[clamp(380px,44vw,540px)] w-auto drop-shadow-[0_28px_50px_rgb(11_31_58_/_0.3)]"
          />
        </Reveal>
      </div>
    </section>
  );
}
