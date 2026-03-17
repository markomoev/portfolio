"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { GlassCard } from "@/components/ui/glass-card";
import { GlowButton } from "@/components/ui/glow-button";

export default function Contact() {
  const { t } = useTranslation("default");
  const email = "contact@markomoev.com";

  return (
    <section id="contact" className="relative py-16 md:py-24 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard variant="elevated" className="p-8 md:p-12 overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-indigo-100/40 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
                {t("contact_headline", { defaultValue: "Let's build your website" })}
              </h2>
              <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed max-w-xl">
                {t("contact_subheadline", { defaultValue: "Send a short message with what you need and I'll reply with next steps and a quote." })}
              </p>
              <div className="mt-6 text-sm text-slate-500">
                <span className="font-semibold text-slate-700">
                  {t("contact_response", { defaultValue: "Typical response: within 24 hours" })}
                </span>
                <div className="mt-2">
                  {t("contact_note", { defaultValue: "If you already have a link, brief, or references — include them." })}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col gap-4 lg:items-end"
            >
              <div className="w-full lg:w-auto rounded-2xl bg-white border border-slate-200 p-6">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  {t("contact_email_label", { defaultValue: "Email" })}
                </div>
                <a
                  href={`mailto:${email}`}
                  className="mt-2 inline-flex items-center gap-2 text-lg font-bold text-slate-900 hover:text-indigo-600 transition-colors break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-md"
                >
                  <Mail className="w-5 h-5 text-indigo-600" />
                  {email}
                </a>
              </div>

              <a href={`mailto:${email}`} className="w-full lg:w-auto">
                <GlowButton className="w-full">
                  {t("contact_cta_email", { defaultValue: "Email me" })}
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:rotate-45" />
                </GlowButton>
              </a>
            </motion.div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
