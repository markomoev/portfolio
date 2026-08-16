"use client";

import { useTranslation } from "react-i18next";
import { Quote, Star } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type Step = { title: string; text: string };
type Review = { name: string; role: string; review: string; stars: number };
type PromiseItem = { title: string; text: string };

export default function Process() {
  const { t } = useTranslation("process");
  const { t: tReviews } = useTranslation("reviews");
  const { t: tPromises } = useTranslation("promises");

  const asArray = <T,>(value: unknown): T[] => (Array.isArray(value) ? (value as T[]) : []);
  const steps = asArray<Step>(t("steps", { returnObjects: true, defaultValue: [] }));
  const reviews = asArray<Review>(tReviews("reviews", { returnObjects: true, defaultValue: [] }));
  const promises = asArray<PromiseItem>(tPromises("items", { returnObjects: true, defaultValue: [] }));

  return (
    <section
      id="process"
      className="scroll-mt-28 bg-[var(--vinyl)] px-[clamp(16px,3vw,36px)] py-[clamp(64px,9vw,112px)]"
    >
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="mb-[clamp(36px,5vw,56px)]">
          <h2 className="font-vinyl m-0 text-[clamp(36px,6.4vw,80px)] text-white">
            {t("headline-1")} {t("headline-2")}
          </h2>
          <p className="mt-4 max-w-[46ch] text-[16px] leading-relaxed text-white/75">
            {t("subheadline")}
          </p>
        </Reveal>

        <ol className="relative m-0 flex list-none flex-col border-l-2 border-white/25 p-0 pl-6 min-[800px]:flex-row min-[800px]:items-start min-[800px]:gap-5 min-[800px]:border-l-0 min-[800px]:pl-0">
          {steps.map((step, index) => (
            <Reveal
              key={step.title}
              delay={index * 70}
              as="li"
              className={cn(
                "relative pb-8 min-[800px]:flex-1 min-[800px]:pb-0",
                index % 2 === 1 && "min-[800px]:mt-12"
              )}
            >
              <span
                aria-hidden="true"
                className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--sticker)] min-[800px]:hidden"
              />
              <div className="font-hand text-[15px] text-[var(--sticker)]">
                {t("step-label")} {index + 1}
              </div>
              <h3 className="font-vinyl mt-2 text-[28px] text-white">{step.title}</h3>
              <p className="mt-2 mb-0 text-[15px] leading-relaxed text-white/70">{step.text}</p>
            </Reveal>
          ))}
        </ol>

        {reviews.length ? (
          <div className="mt-[clamp(36px,5vw,56px)] grid grid-cols-1 gap-6 min-[900px]:grid-cols-2">
            {reviews.map((review, index) => (
              <Reveal key={review.name} delay={index * 80}>
                <figure className="m-0 h-full border-l-[6px] border-[var(--sticker)] bg-white p-7 text-[var(--vinyl)]">
                  <Quote size={28} strokeWidth={2} className="text-[var(--sticker)]" />
                  <div className="mt-3 flex gap-0.5" aria-label={`${review.stars}/5`}>
                    {Array.from({ length: review.stars }).map((_, starIndex) => (
                      <Star key={starIndex} size={16} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <blockquote className="mt-4 mb-4 text-[clamp(16px,1.5vw,20px)] leading-relaxed">
                    {review.review}
                  </blockquote>
                  <figcaption className="font-extrabold">
                    {review.name}
                    <span className="mt-0.5 block text-[13px] font-medium opacity-70">
                      {review.role}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        ) : null}

        <Reveal delay={100} className="mt-6">
          <div className="border-l-[6px] border-[var(--burst)] bg-white p-7 text-[var(--vinyl)]">
            <h3 className="font-vinyl m-0 text-[28px]">{tPromises("headline")}</h3>
            <ul className="mt-4 mb-0 flex list-none flex-col gap-3 p-0">
              {promises.map((promise) => (
                <li key={promise.title} className="text-[15px] leading-snug text-[var(--vinyl)]/80">
                  <strong className="font-extrabold text-[var(--vinyl)]">{promise.title}</strong> {promise.text}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
