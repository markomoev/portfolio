"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import i18nConfig from "../../i18nConfig";

const PUBLIC_EMAIL = "marko.moev.business@gmail.com";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reducedMotion = useReducedMotion();
  const router = useRouter();
  const currentPathname = usePathname();
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement | null>(null);

  const home = `/${currentLocale}`;
  const links = [
    { href: `${home}#services`, label: t("nav-services") },
    { href: `${home}#work`, label: t("nav-work") },
    { href: `${home}#about`, label: t("nav-about") },
    { href: `${home}#process`, label: t("nav-process") },
    { href: `${home}#faq`, label: t("nav-faq") },
  ];

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const raf = window.requestAnimationFrame(() => firstMenuItemRef.current?.focus());
    return () => {
      window.cancelAnimationFrame(raf);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) menuButtonRef.current?.focus();
  }, [menuOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const sync = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const switchLocale = () => {
    const newLocale = currentLocale === "en" ? "bg" : "en";
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;
    const segments = currentPathname.split("/");
    const localeInPath = i18nConfig.locales.find((l) => segments[1] === l);
    if (localeInPath) {
      segments[1] = newLocale;
      router.push(segments.join("/") || `/${newLocale}`);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
    }
    router.refresh();
  };

  const otherLocaleLabel = currentLocale === "en" ? "BG" : "EN";

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-[80] border-b border-decal/18 bg-[rgb(207_230_248_/_0.82)] backdrop-blur-[14px]">
        <nav
          aria-label={t("nav-primary")}
          className="pointer-events-auto mx-auto flex w-full max-w-[1440px] items-center gap-6 px-[clamp(16px,3vw,36px)] py-3.5"
        >
          <a href={home} className="font-vinyl text-[clamp(22px,2.2vw,28px)] leading-none tracking-[-0.02em] text-vinyl">
            Marko Moev
          </a>

          <div className="ml-auto hidden items-center gap-1.5 min-[900px]:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-[15px] font-semibold text-vinyl/80 transition-colors hover:bg-decal/10 hover:text-vinyl"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={switchLocale}
              aria-label={currentLocale === "en" ? t("nav-switch-bg") : t("nav-switch-en")}
              className="px-3 py-2 text-[13px] font-extrabold text-vinyl"
            >
              {otherLocaleLabel}
            </button>
            <a
              href={`${home}#contact`}
              className="ml-2 inline-flex items-center bg-sticker px-5 py-2.5 text-[13px] font-extrabold tracking-[0.04em] text-vinyl uppercase transition-transform hover:-translate-y-0.5"
            >
              {t("cta_primary")}
            </a>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={t("nav-menu")}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="ml-auto flex h-11 w-11 items-center justify-center bg-sticker text-vinyl min-[900px]:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reducedMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-[90] bg-vinyl/55 min-[900px]:hidden"
          >
            <motion.div
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              aria-label={t("nav-menu")}
              onClick={(e) => e.stopPropagation()}
              initial={reducedMotion ? false : { y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={reducedMotion ? undefined : { y: -12, opacity: 0 }}
              className="absolute inset-x-3 top-3 flex max-h-[calc(100dvh-1.5rem)] flex-col overflow-y-auto bg-white p-5 shadow-[0_18px_40px_rgb(11_31_58_/_0.28)]"
            >
              <div className="flex items-center justify-between pb-3">
                <span className="font-vinyl text-[22px] text-vinyl">Marko Moev</span>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label={t("nav-close")}
                  className="flex h-11 w-11 items-center justify-center bg-sticker text-vinyl"
                >
                  <X size={18} />
                </button>
              </div>
              {links.map((link, index) => (
                <a
                  key={link.href}
                  ref={index === 0 ? firstMenuItemRef : undefined}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-edge py-3.5 font-vinyl text-[clamp(22px,2.2vw,30px)] text-vinyl"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`${home}#contact`}
                onClick={() => setMenuOpen(false)}
                className="mt-4 flex items-center justify-center bg-sticker py-4 text-[16px] font-extrabold text-vinyl uppercase"
              >
                {t("cta_primary")}
              </a>
              <div className="mt-4 flex items-center justify-between gap-4">
                <a href={`mailto:${PUBLIC_EMAIL}`} className="min-w-0 truncate text-[15px] font-semibold">
                  {PUBLIC_EMAIL}
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    switchLocale();
                  }}
                  className="border border-vinyl px-4 py-2 text-[13px] font-extrabold"
                >
                  {otherLocaleLabel}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
