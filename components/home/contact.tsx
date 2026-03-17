"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation("default");
  const email = String(
    t("contact_email_value", { defaultValue: "contact@markomoev.com" })
  );

  return (
    <section id="contact" className="bg-white py-16 md:py-24 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] md:rounded-[2.5rem] border border-slate-200 bg-slate-50 p-8 md:p-12 overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-indigo-200/30 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                {t("contact_headline")}
              </h2>
              <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed max-w-xl">
                {t("contact_subheadline")}
              </p>
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
                  {t("contact_email_label")}
                </div>
                <a
                  href={`mailto:${email}`}
                  className="mt-2 inline-flex items-center gap-2 text-lg font-bold text-slate-900 hover:text-indigo-600 transition-colors break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-md"
                >
                  <Mail className="w-5 h-5 text-indigo-600" />
                  {email}
                </a>
              </div>

              <a
                href={`mailto:${email}`}
                className="w-full lg:w-auto group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-base md:text-lg font-bold text-white shadow-sm transition-all hover:bg-indigo-600 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                {t("contact_cta_email")}
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:rotate-45" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

