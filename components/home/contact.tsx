"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { budgetValues, businessTypeValues } from "@/lib/contact-schema";
import { Reveal } from "@/components/ui/reveal";

type Status = "idle" | "loading" | "success" | "error";

const PUBLIC_EMAIL = "marko.moev.business@gmail.com";

const fieldClass =
  "w-full rounded-none border-2 border-[var(--edge)] bg-white px-3.5 py-3 text-[15px] text-[var(--vinyl)] outline-none placeholder:text-[var(--vinyl)]/40 focus:border-[var(--decal)]";

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

  const errorText = errorKey
    ? t(`error-${errorKey}`, { defaultValue: t("error-generic") })
    : null;

  const perks = [
    { title: t("perk-call-title"), text: t("perk-call-desc") },
    { title: t("perk-response-title"), text: t("perk-response-desc") },
    { title: t("perk-commit-title"), text: t("perk-commit-desc") },
  ];

  return (
    <section
      id="contact"
      className="relative scroll-mt-28 overflow-hidden bg-[var(--paper)] px-[clamp(16px,3vw,36px)] py-[clamp(64px,9vw,112px)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(720px_circle_at_90%_20%,color-mix(in_srgb,var(--decal)_18%,transparent),transparent_58%)]"
      />
      <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-8 min-[900px]:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <h2 className="font-vinyl m-0 max-w-[16ch] text-[clamp(36px,6vw,72px)] text-[var(--vinyl)]">
            {t("headline-lead")}{" "}
            <span className="text-[var(--decal)]">{t("headline-accent")}</span>
          </h2>
          <p className="mt-4 max-w-[44ch] text-[clamp(16px,1.4vw,19px)] font-semibold text-[var(--vinyl)]">
            {t("subheadline")}
          </p>
          <ul className="mt-8 mb-0 flex list-none flex-col gap-4 p-0">
            {perks.map((perk) => (
              <li key={perk.title}>
                <div className="font-vinyl text-[clamp(22px,2.2vw,30px)] text-[var(--vinyl)]">{perk.title}</div>
                <div className="text-[15px] text-[var(--vinyl)]/80">{perk.text}</div>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${PUBLIC_EMAIL}`}
            className="mt-8 inline-block font-hand text-[15px] text-[var(--vinyl)] underline decoration-[var(--decal)] decoration-2 underline-offset-4"
          >
            {PUBLIC_EMAIL}
          </a>
        </Reveal>

        <Reveal delay={120} className="relative border-t-[6px] border-[var(--sticker)] bg-white p-[clamp(22px,3vw,32px)] text-[var(--vinyl)] shadow-[8px_16px_0_rgb(11_31_58_/_0.12)]">
          {status === "success" ? (
            <div className="flex flex-col gap-3 py-6">
              <h3 className="font-vinyl m-0 text-[clamp(22px,2.2vw,30px)]">{t("success-title")}</h3>
              <p className="m-0 text-[15px] leading-relaxed text-[var(--vinyl)]/75">{t("success-desc")}</p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-2 self-start bg-[var(--decal)] px-5 py-3 text-[15px] font-extrabold text-white"
              >
                {t("success-again")}
              </button>
            </div>
          ) : (
            <>
              <h3 className="font-vinyl m-0 text-[clamp(22px,2.2vw,30px)]">{t("form-title")}</h3>
              <p className="mt-1 mb-5 text-[15px] text-[var(--vinyl)]/80">{t("form-subtitle")}</p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5" noValidate>
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
                <div className="grid grid-cols-1 gap-3.5 min-[520px]:grid-cols-2">
                  <label className="flex flex-col gap-1" htmlFor="contact-name">
                    <span className="text-[13px] font-bold">{t("label-name")}</span>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t("placeholder-name")}
                      className={fieldClass}
                    />
                  </label>
                  <label className="flex flex-col gap-1" htmlFor="contact-email">
                    <span className="text-[13px] font-bold">{t("label-email")}</span>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t("placeholder-email")}
                      className={fieldClass}
                    />
                  </label>
                </div>
                <div className="grid grid-cols-1 gap-3.5 min-[520px]:grid-cols-2">
                  <label className="flex flex-col gap-1" htmlFor="contact-phone">
                    <span className="text-[13px] font-bold">{t("label-phone")}</span>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t("placeholder-phone")}
                      className={fieldClass}
                    />
                  </label>
                  <label className="flex flex-col gap-1" htmlFor="contact-business">
                    <span className="text-[13px] font-bold">{t("label-business")}</span>
                    <select
                      id="contact-business"
                      name="businessType"
                      required
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className={`${fieldClass} appearance-none`}
                    >
                      <option value="">{t("business-placeholder")}</option>
                      {businessTypeValues.map((value) => (
                        <option key={value} value={value}>
                          {t(`business-${value}`)}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <label className="flex flex-col gap-1" htmlFor="contact-budget">
                  <span className="text-[13px] font-bold">{t("label-budget")}</span>
                  <select
                    id="contact-budget"
                    name="budget"
                    required
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className={`${fieldClass} appearance-none`}
                  >
                    <option value="">{t("budget-placeholder")}</option>
                    {budgetValues.map((value) => (
                      <option key={value} value={value}>
                        {t(`budget-${value}`)}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-1" htmlFor="contact-message">
                  <span className="text-[13px] font-bold">{t("label-message")}</span>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t("placeholder-message")}
                    className={`${fieldClass} resize-y`}
                  />
                </label>
                <label className="flex cursor-pointer items-start gap-2.5" htmlFor="contact-consent">
                  <input
                    id="contact-consent"
                    name="consent"
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 h-[18px] w-[18px] flex-none accent-[var(--decal)]"
                  />
                  <span className="text-[13.5px] leading-snug text-[var(--vinyl)]/80">
                    {t("label-consent")}{" "}
                    <Link
                      href={`/${locale}/poveritelnost`}
                      className="underline decoration-[var(--decal)] underline-offset-2"
                    >
                      {t("privacy-link")}
                    </Link>
                    .
                  </span>
                </label>
                {errorText ? (
                  <p className="m-0 bg-[var(--burst)]/10 px-3 py-2 text-[15px] text-[var(--burst)]" role="alert">
                    {errorText}
                  </p>
                ) : null}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-1 bg-[var(--decal)] px-6 py-4 text-base font-extrabold uppercase tracking-[0.04em] text-white disabled:opacity-60"
                >
                  {status === "loading" ? t("sending") : t("submit")}
                </button>
              </form>
            </>
          )}
        </Reveal>
      </div>
    </section>
  );
}
