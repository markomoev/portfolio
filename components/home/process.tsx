"use client";

import React from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { GlassCard } from "@/components/ui/glass-card";

type Step = { title: string; text: string };

export default function Process() {
  const { t } = useTranslation("process");
  const rawSteps = t("steps", { returnObjects: true, defaultValue: [] }) as unknown;
  const steps: Step[] = Array.isArray(rawSteps) ? (rawSteps as Step[]) : [];

  return (
    <section id="process" className="relative py-16 md:py-24 scroll-mt-28">
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

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6">
          {steps.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.07 * idx, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <GlassCard className="p-7 md:p-8 h-full">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Step {idx + 1}
                  </div>
                  <div
                    aria-hidden="true"
                    className="h-7 w-7 rounded-full bg-indigo-100 flex items-center justify-center"
                  >
                    <span className="text-indigo-600 font-black text-xs">{idx + 1}</span>
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-900">{s.title}</h3>
                <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
                  {s.text}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
