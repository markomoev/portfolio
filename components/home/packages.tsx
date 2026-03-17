"use client";

import React from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { GlassCard } from "@/components/ui/glass-card";
import { GlowButton } from "@/components/ui/glow-button";

type Tier = {
  name: string;
  price: string;
  for: string;
  points: string[];
  popular?: boolean;
};

export default function Packages() {
  const { t } = useTranslation("packages");
  const rawTiers = t("tiers", { returnObjects: true, defaultValue: [] }) as unknown;
  const tiers: Tier[] = Array.isArray(rawTiers) ? (rawTiers as Tier[]) : [];

  return (
    <section id="packages" className="relative py-16 md:py-24 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            {t("headline")}
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
            {t("subheadline")}
          </p>
        </motion.div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-stretch">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 * idx, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.25 }}
              className={tier.popular ? "md:-mt-2" : ""}
            >
              <GlassCard
                variant={tier.popular ? "elevated" : "default"}
                className="p-7 md:p-8 h-full flex flex-col"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      {tier.for}
                    </div>
                    <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-900">
                      {tier.name}
                    </h3>
                  </div>
                  {tier.popular && (
                    <span className="rounded-full px-3 py-1 text-xs font-bold border border-indigo-200 bg-indigo-50 text-indigo-700">
                      Popular
                    </span>
                  )}
                </div>

                <div className="mt-5 text-4xl font-black tracking-tight">
                  <span className="text-indigo-600">{tier.price}</span>
                </div>

                <ul className="mt-6 space-y-3 text-sm md:text-base text-slate-600">
                  {tier.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0"
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-2">
                  <a href="#contact">
                    <GlowButton
                      className="w-full"
                      variant={tier.popular ? "primary" : "secondary"}
                    >
                      {t("cta")}
                    </GlowButton>
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

