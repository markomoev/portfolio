"use client";

import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/ui/reveal";

type Step = { title: string; text: string };

export default function Process() {
  const { t } = useTranslation("process");
  const raw = t("steps", { returnObjects: true, defaultValue: [] }) as unknown;
  const steps: Step[] = Array.isArray(raw) ? (raw as Step[]) : [];

  return (
    <section
      id="process"
      className="scroll-mt-28 bg-vinyl px-[clamp(16px,3vw,36px)] py-[clamp(64px,9vw,112px)] text-white"
    >
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="mb-[clamp(36px,5vw,56px)] max-w-[60ch]">
          <h2 className="font-vinyl m-0 text-[clamp(40px,7vw,88px)] leading-[0.9] tracking-[-0.02em] text-white">
            {t("headline-1")} {t("headline-2")}
          </h2>
          <p className="mt-4 mb-0 text-[clamp(16px,1.4vw,19px)] leading-relaxed text-white/72">
            {t("subheadline")}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 min-[700px]:grid-cols-2 min-[1100px]:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal
              key={step.title}
              delay={index * 70}
              className="border border-white/20 p-6 transition-colors hover:bg-white/6"
            >
              <p className="m-0 text-[13px] font-extrabold tracking-[0.08em] text-sticker uppercase">
                {t("step-label")} {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-vinyl mt-3.5 mb-0 text-[clamp(22px,2.2vw,30px)] leading-[0.94] tracking-[-0.02em] text-white">
                {step.title}
              </h3>
              <p className="mt-2.5 mb-0 text-[15px] leading-relaxed text-white/72">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
