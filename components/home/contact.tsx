"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { budgetValues, businessTypeValues } from "@/lib/contact-schema";

type Status = "idle" | "loading" | "success" | "error";

const PUBLIC_EMAIL = "marko@markomoev.com";

export default function Contact() {
  const { t } = useTranslation("contact");
  const params = useParams();
  const locale = (params?.locale as string) || "bg";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorKey, setErrorKey] = useState<string | null>(null);

  const inputClass =
    "w-full rounded-none border border-edge bg-paper px-4 py-3 font-body text-16 text-ink placeholder:text-muted outline-none focus-visible:ring-2 focus-visible:ring-accent";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorKey(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          businessType,
          budget,
          message,
          consent,
          website,
        }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        setStatus("error");
        setErrorKey(data.error ?? "generic");
        return;
      }
      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setBusinessType("");
      setBudget("");
      setMessage("");
      setConsent(false);
    } catch {
      setStatus("error");
      setErrorKey("generic");
    }
  }

  const phoneValue = t("phone-value");
  const viberValue = t("viber-value");
  const bookUrl = t("book-url");
  const hasPhone = phoneValue && !phoneValue.includes("[ПОПЪЛНИ]");
  const hasViber = viberValue && !viberValue.includes("[ПОПЪЛНИ]");
  const hasBook = bookUrl && !bookUrl.includes("[ПОПЪЛНИ]");

  const errorText = errorKey
    ? t(`error-${errorKey}`, { defaultValue: t("error-generic") })
    : null;

  return (
    <section id="kontakt" className="relative py-16 md:py-24 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="font-mono text-14 uppercase tracking-[0.08em] text-muted">
              {t("badge")}
            </p>
            <h2 className="mt-3 font-display font-bold tracking-[-0.02em] text-ink text-[clamp(28px,5vw,52px)]">
              {t("headline")}
            </h2>
            <p className="mt-4 font-body text-16 text-ink leading-relaxed max-w-[68ch]">
              {t("subheadline")}
            </p>

            <ul className="mt-8 space-y-4">
              <li>
                <p className="font-body text-16 font-semibold text-ink">{t("perk-call-title")}</p>
                <p className="font-body text-16 text-muted">{t("perk-call-desc")}</p>
              </li>
              <li>
                <p className="font-body text-16 font-semibold text-ink">{t("perk-response-title")}</p>
                <p className="font-body text-16 text-muted">{t("perk-response-desc")}</p>
              </li>
              <li>
                <p className="font-body text-16 font-semibold text-ink">{t("perk-commit-title")}</p>
                <p className="font-body text-16 text-muted">{t("perk-commit-desc")}</p>
              </li>
            </ul>

            <div className="mt-10 space-y-3 font-body text-16">
              {hasPhone ? (
                <p>
                  <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-muted block">
                    {t("aside-phone")}
                  </span>
                  <a href={`tel:${phoneValue.replace(/\s/g, "")}`} className="text-accent underline-offset-2 hover:underline">
                    {phoneValue}
                  </a>
                </p>
              ) : null}
              {hasViber ? (
                <p>
                  <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-muted block">
                    {t("aside-viber")}
                  </span>
                  <a href={`viber://chat?number=${viberValue.replace(/\s/g, "")}`} className="text-accent underline-offset-2 hover:underline">
                    {viberValue}
                  </a>
                </p>
              ) : null}
              <p>
                <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-muted block">
                  {t("aside-email")}
                </span>
                <a href={`mailto:${PUBLIC_EMAIL}`} className="text-accent underline-offset-2 hover:underline">
                  {PUBLIC_EMAIL}
                </a>
              </p>
              {hasBook ? (
                <p>
                  <a
                    href={bookUrl}
                    className="inline-flex items-center justify-center mt-2 px-6 py-3 font-body text-16 font-medium border border-edge text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {t("aside-book")}
                  </a>
                </p>
              ) : null}
            </div>
          </div>

          <div className="lg:col-span-3">
            {status === "success" ? (
              <div className="border border-edge p-8">
                <h3 className="font-display text-22 font-semibold tracking-[-0.02em] text-ink">
                  {t("success-title")}
                </h3>
                <p className="mt-3 font-body text-16 text-ink leading-relaxed max-w-[68ch]">
                  {t("success-desc")}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 font-body text-16 text-accent underline-offset-2 hover:underline"
                >
                  {t("success-again")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative flex flex-col gap-5" noValidate>
                <div>
                  <h3 className="font-display text-22 font-semibold tracking-[-0.02em] text-ink">
                    {t("form-title")}
                  </h3>
                  <p className="mt-1 font-body text-16 text-muted">{t("form-subtitle")}</p>
                </div>

                <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="website">{t("label-name")}</label>
                  <input
                    id="website"
                    name="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-name" className="font-body text-14 text-ink">
                      {t("label-name")}
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t("placeholder-name")}
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-email" className="font-body text-14 text-ink">
                      {t("label-email")}
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
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
                  <label htmlFor="contact-phone" className="font-body text-14 text-ink">
                    {t("label-phone")}
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t("placeholder-phone")}
                    className={inputClass}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-business" className="font-body text-14 text-ink">
                      {t("label-business")}
                    </label>
                    <select
                      id="contact-business"
                      name="businessType"
                      required
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className={inputClass}
                    >
                      <option value="">{t("business-placeholder")}</option>
                      {businessTypeValues.map((value) => (
                        <option key={value} value={value}>
                          {t(`business-${value}`)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-budget" className="font-body text-14 text-ink">
                      {t("label-budget")}
                    </label>
                    <select
                      id="contact-budget"
                      name="budget"
                      required
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className={inputClass}
                    >
                      <option value="">{t("budget-placeholder")}</option>
                      {budgetValues.map((value) => (
                        <option key={value} value={value}>
                          {t(`budget-${value}`)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="font-body text-14 text-ink">
                    {t("label-message")}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t("placeholder-message")}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="contact-consent"
                    name="consent"
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 h-4 w-4 accent-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  />
                  <label htmlFor="contact-consent" className="font-body text-14 text-ink">
                    {t("label-consent")}{" "}
                    <Link
                      href={`/${locale}/poveritelnost`}
                      className="text-accent underline-offset-2 hover:underline"
                    >
                      {t("privacy-link")}
                    </Link>
                  </label>
                </div>

                {errorText ? (
                  <p className="font-body text-14 text-ink" role="alert">
                    {errorText}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="self-start inline-flex items-center justify-center px-6 py-3 font-body text-16 font-medium bg-accent text-white disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  {status === "loading" ? t("sending") : t("submit")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
