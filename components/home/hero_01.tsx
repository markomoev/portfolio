"use client";

import { useRef } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

function PhoneScroll({ alt }: { alt: string }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start 0.75", "end start"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 54,
    damping: 26,
    mass: 0.55,
  });
  const rotate = useTransform(progress, [0, 1], [-8, 16]);
  const y = useTransform(progress, [0, 1], [0, 28]);

  return (
    <div
      ref={stageRef}
      className="relative flex h-full w-full items-center justify-center"
    >
      <motion.div
        style={reduced ? { rotate: -6 } : { rotate, y }}
        className="relative will-change-transform"
      >
        <Image
          src="/work/plenty-iphone.png"
          alt={alt}
          width={367}
          height={738}
          priority
          sizes="(max-width: 900px) 92vw, 640px"
          className="h-[clamp(360px,42vw,520px)] w-auto drop-shadow-[0_28px_50px_rgb(15_23_42_/_0.28)]"
        />
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const { t, i18n } = useTranslation();
  const isBg = i18n.language.startsWith("bg");

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[var(--paper)] pt-[clamp(96px,13vw,150px)] pb-[clamp(40px,6vw,72px)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in srgb, var(--decal) 22%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--decal) 16%, transparent) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(closest-side, black 50%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(closest-side, black 50%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(720px_circle_at_10%_12%,color-mix(in_srgb,var(--decal)_26%,transparent),transparent_58%),radial-gradient(640px_circle_at_92%_78%,color-mix(in_srgb,var(--decal)_16%,transparent),transparent_62%)]"
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-[clamp(16px,3vw,32px)]">
        <div className="grid grid-cols-1 items-center gap-[clamp(28px,4vw,56px)] min-[900px]:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <Reveal>
            <p className="m-0 inline-flex items-center gap-2.5 rounded-full bg-[var(--decal)] py-[7px] pl-2.5 pr-3.5 text-[13px] font-extrabold uppercase tracking-[0.08em] text-white">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              {t("sill")}
            </p>

            <h1
              className={cn(
                "font-vinyl m-0 mt-[clamp(18px,2.5vw,28px)] max-w-[16ch] text-[clamp(44px,8.4vw,104px)] text-[var(--vinyl)]",
                isBg ? "leading-[0.96] tracking-[-0.01em]" : "leading-[0.86] tracking-[-0.04em]"
              )}
            >
              <span className="block">{t("headline-1")}</span>
              <span className="block">
                {t("headline-2-pre")}{" "}
                <em className="not-italic text-[var(--decal)]">{t("headline-2-accent")}</em>
              </span>
              <span className="block">{t("headline-3")}</span>
            </h1>

            <p className="mt-[clamp(16px,2.2vw,24px)] max-w-[42ch] text-[clamp(16px,1.6vw,20px)] font-semibold leading-snug text-[var(--vinyl)]/72">
              {t("subheadline")}
            </p>

            <div className="mt-[clamp(22px,3vw,32px)] flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--decal)] px-5 py-3.5 text-[15px] font-extrabold text-white transition-transform hover:-translate-y-0.5"
              >
                {t("cta_primary")}
                <ArrowRight size={16} />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--decal)] bg-[color-mix(in_srgb,var(--decal)_12%,white)] px-5 py-3.5 text-[15px] font-extrabold text-[var(--decal)] transition-transform hover:-translate-y-0.5"
              >
                {t("cta_secondary")}
              </a>
            </div>
          </Reveal>

          <Reveal delay={80} className="flex justify-center min-[900px]:justify-end">
            <PhoneScroll alt={t("hero-portrait-alt")} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
