"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

const fieldClass =
  "font-body text-16 text-accent bg-transparent border-0 border-b border-accent p-0 w-[5.5ch] text-center outline-none focus-visible:ring-2 focus-visible:ring-accent motion-reduce:transition-none";

export default function HoursDemo() {
  const { t } = useTranslation("hours");
  const [weekdays, setWeekdays] = useState("09:00 – 18:00");
  const [saturday, setSaturday] = useState("10:00 – 14:00");

  return (
    <div className="mt-8 max-w-xl border border-edge p-5 md:p-6">
      <p className="font-mono text-14 uppercase tracking-[0.08em] text-muted">
        {t("label")}
      </p>
      <div className="mt-4 space-y-3">
        <p className="flex flex-wrap items-baseline justify-between gap-3 font-body text-16 text-ink">
          <span>{t("weekdays")}</span>
          <input
            type="text"
            value={weekdays}
            onChange={(e) => setWeekdays(e.target.value)}
            aria-label={t("ariaWeekdays")}
            className={fieldClass}
          />
        </p>
        <p className="flex flex-wrap items-baseline justify-between gap-3 font-body text-16 text-ink">
          <span>{t("saturday")}</span>
          <input
            type="text"
            value={saturday}
            onChange={(e) => setSaturday(e.target.value)}
            aria-label={t("ariaSaturday")}
            className={fieldClass}
          />
        </p>
      </div>
      <p className="mt-4 font-body text-14 text-muted leading-relaxed">
        {t("hint")}
      </p>
    </div>
  );
}
