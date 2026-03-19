"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { GlassCard } from "@/components/ui/glass-card";

type FaqItem = { q: string; a: string };

export default function FAQ() {
  const { t } = useTranslation("faq");
  const rawItems = t("items", { returnObjects: true, defaultValue: [] }) as unknown;
  const items: FaqItem[] = Array.isArray(rawItems) ? (rawItems as FaqItem[]) : [];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-16 md:py-24 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900"
        >
          {t("headline")}
        </motion.h2>

        <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          {items.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <GlassCard key={item.q} className="p-6 md:p-7">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full flex items-start justify-between gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-2xl"
                >
                  <div className="min-w-0">
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-2 text-lg font-bold tracking-tight text-slate-900">
                      {item.q}
                    </div>
                  </div>
                  <div className="mt-2 h-7 w-7 shrink-0 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center">
                    <span className="text-slate-500 font-black text-sm leading-none select-none">
                      {isOpen ? "–" : "+"}
                    </span>
                  </div>
                </button>

                <AnimatePresence initial={false} mode="popLayout">
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
