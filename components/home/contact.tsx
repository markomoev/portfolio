"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { Send, CheckCircle2, Phone, Clock, Sparkles, ArrowRight } from "lucide-react";
import { GlowButton } from "@/components/ui/glow-button";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const { t } = useTranslation("contact");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [mobileStep, setMobileStep] = useState(0);
  const [direction, setDirection] = useState(1);

  async function submitForm() {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setMobileStep(0);
    } catch {
      setStatus("error");
    }
  }

  async function handleDesktopSubmit(e: React.FormEvent) {
    e.preventDefault();
    await submitForm();
  }

  const inputClass = cn(
    "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400",
    "outline-none transition-all duration-200",
    "focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
  );

  const mobileInputClass = cn(
    "w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white placeholder:text-slate-600",
    "outline-none transition-all duration-200",
    "focus:border-indigo-500/50 focus:bg-white/10 focus:ring-2 focus:ring-indigo-500/20"
  );

  const canProceed = [
    name.trim().length > 0,
    email.trim().length > 0 && email.includes("@"),
    message.trim().length > 0,
  ];

  function goNext() {
    setDirection(1);
    setMobileStep((s) => s + 1);
  }

  function goBack() {
    setDirection(-1);
    setMobileStep((s) => s - 1);
  }

  const stepVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  };

  const mobileSteps = [
    {
      num: "01",
      label: t("label-name"),
      field: (
        <input
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && canProceed[0] && goNext()}
          placeholder={t("placeholder-name")}
          className={mobileInputClass}
        />
      ),
    },
    {
      num: "02",
      label: t("label-email"),
      field: (
        <input
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && canProceed[1] && goNext()}
          placeholder={t("placeholder-email")}
          className={mobileInputClass}
        />
      ),
    },
    {
      num: "03",
      label: t("label-message"),
      field: (
        <textarea
          rows={5}
          autoComplete="off"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t("placeholder-message")}
          className={cn(mobileInputClass, "resize-none")}
        />
      ),
    },
  ];

  return (
    <section id="contact" className="relative py-16 md:py-24 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── MOBILE STEPPER ── */}
        <div className="md:hidden rounded-3xl bg-slate-950 overflow-hidden border border-slate-800/50 shadow-2xl">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success-mobile"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center text-center px-8 py-20"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.1, stiffness: 200 }}
                  className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-5"
                >
                  <CheckCircle2 className="w-8 h-8 text-green-400" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{t("success-title")}</h3>
                <p className="text-slate-400 text-sm max-w-xs">{t("success-desc")}</p>
                <button
                  onClick={() => { setStatus("idle"); setMobileStep(0); }}
                  className="mt-6 text-sm text-indigo-400 hover:underline"
                >
                  {t("success-again")}
                </button>
              </motion.div>
            ) : (
              <motion.div key="stepper" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

                {/* Header */}
                <div className="px-6 pt-7">
                  <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/20 border border-indigo-400/30 px-3 py-1.5 mb-4">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                    <span className="text-xs font-semibold text-indigo-300 uppercase tracking-widest">{t("badge")}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-5">{t("headline")}</h2>

                  {/* Animated progress pills */}
                  <div className="flex gap-2 mb-7">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="h-1.5 rounded-full bg-slate-800 overflow-hidden flex-1"
                      >
                        <motion.div
                          className="h-full rounded-full bg-indigo-500"
                          animate={{ width: mobileStep > i ? "100%" : mobileStep === i ? "50%" : "0%" }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Sliding step content */}
                <div className="px-6 overflow-hidden">
                  <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                      key={mobileStep}
                      custom={direction}
                      variants={stepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                      className="relative"
                    >
                      {/* Ghost step number in background */}
                      <div className="absolute -top-2 right-0 text-[5rem] font-black text-white/[0.04] leading-none select-none pointer-events-none">
                        {mobileSteps[mobileStep].num}
                      </div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-indigo-400 mb-2">
                        {mobileSteps[mobileStep].num} / 03
                      </p>
                      <p className="text-xl font-bold text-white mb-4">
                        {mobileSteps[mobileStep].label}
                      </p>
                      {mobileSteps[mobileStep].field}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation row */}
                <div className="px-6 pb-7 pt-5 flex items-center justify-between">
                  {mobileStep > 0 ? (
                    <button
                      type="button"
                      onClick={goBack}
                      className="text-sm text-slate-500 hover:text-white transition-colors py-2"
                    >
                      ← Back
                    </button>
                  ) : <div />}

                  {mobileStep < 2 ? (
                    <motion.button
                      type="button"
                      onClick={goNext}
                      disabled={!canProceed[mobileStep]}
                      whileTap={{ scale: 0.95 }}
                      className={cn(
                        "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-200",
                        canProceed[mobileStep]
                          ? "bg-indigo-600 text-white"
                          : "bg-slate-800 text-slate-600 cursor-not-allowed"
                      )}
                    >
                      Continue <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  ) : (
                    <motion.button
                      type="button"
                      onClick={submitForm}
                      disabled={!canProceed[2] || status === "loading"}
                      whileTap={{ scale: 0.95 }}
                      className={cn(
                        "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-200",
                        canProceed[2] && status !== "loading"
                          ? "bg-indigo-600 text-white"
                          : "bg-slate-800 text-slate-600 cursor-not-allowed"
                      )}
                    >
                      {status === "loading" ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          {t("sending")}
                        </span>
                      ) : (
                        <>{t("submit")} <Send className="w-4 h-4" /></>
                      )}
                    </motion.button>
                  )}
                </div>

                {status === "error" && (
                  <p className="px-6 pb-5 text-sm text-red-400">{t("error-msg")}</p>
                )}

              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── DESKTOP LAYOUT (unchanged) ── */}
        <div className="hidden md:block rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">

            {/* Left panel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="lg:col-span-2 bg-slate-900 p-8 md:p-10 flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/20 border border-indigo-400/30 px-3 py-1.5 mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="text-xs font-semibold text-indigo-300 uppercase tracking-widest">
                    {t("badge")}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
                  {t("headline")}
                </h2>
                <p className="mt-4 text-base text-slate-400 leading-relaxed">
                  {t("subheadline")}
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{t("perk-call-title")}</p>
                      <p className="text-sm text-slate-400">{t("perk-call-desc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{t("perk-response-title")}</p>
                      <p className="text-sm text-slate-400">{t("perk-response-desc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{t("perk-commit-title")}</p>
                      <p className="text-sm text-slate-400">{t("perk-commit-desc")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-10 text-xs text-slate-500">
                {t("email-fallback")}{" "}
                <a
                  href="mailto:marko.moev.business@gmail.com"
                  className="text-slate-400 underline underline-offset-2 hover:text-white transition-colors"
                >
                  marko.moev.business@gmail.com
                </a>
              </p>
            </motion.div>

            {/* Right panel: form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="lg:col-span-3 p-8 md:p-10"
            >
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center h-full text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{t("success-title")}</h3>
                    <p className="text-slate-500 text-sm max-w-sm">{t("success-desc")}</p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-6 text-sm text-indigo-600 hover:underline"
                    >
                      {t("success-again")}
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleDesktopSubmit}
                    className="flex flex-col gap-5"
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{t("form-title")}</h3>
                      <p className="mt-1 text-sm text-slate-500">{t("form-subtitle")}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="contact-name" className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                          {t("label-name")}
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          autoComplete="name"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={t("placeholder-name")}
                          className={inputClass}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="contact-email" className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                          {t("label-email")}
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          autoComplete="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={t("placeholder-email")}
                          className={inputClass}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-message" className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                        {t("label-message")}
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={5}
                        autoComplete="off"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={t("placeholder-message")}
                        className={cn(inputClass, "resize-none")}
                      />
                    </div>
                    {status === "error" && (
                      <p className="text-sm text-red-500">{t("error-msg")}</p>
                    )}
                    <GlowButton
                      type="submit"
                      disabled={status === "loading"}
                      className="self-start"
                    >
                      {status === "loading" ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          {t("sending")}
                        </span>
                      ) : (
                        <>{t("submit")} <Send className="w-4 h-4" /></>
                      )}
                    </GlowButton>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
