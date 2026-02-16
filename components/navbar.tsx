"use client";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "@/lib/utils";
import { useAudio } from "@/hooks/use-audio";
import { useTranslation } from "react-i18next";
import { useRouter, usePathname } from "next/navigation";
import i18nConfig from "../i18nConfig";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const playSound = useAudio("/sounds/click-navbar.mp3");

  const router = useRouter()
  const currentPathname = usePathname();
  const {t, i18n} = useTranslation();
  const currentLocale = i18n.language;

  // scrolling the active page
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const links = [
    { id: "home", label: t('navbar-1') },
    { id: "about", label: t('navbar-2') },
    { id: "connect", label: t('navbar-3') },
  ]; 
  
  // button for translation
  const handleTranslation = (newLocale: string) => {
    // cookies
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 2 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;
  
    // redirecting to the right path for the language
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname)
    }
    else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh()
  }


  return (
    <motion.div 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-200%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-8 left-0 right-0 flex justify-center z-50 pointer-events-auto"
    >
      <nav
        className="flex items-center gap-2 p-1.5 rounded-full border border-slate-200 bg-white/80 backdrop-blur-md shadow-sm"
      >
        <div className="group flex items-center px-4 py-2 font-bold text-indigo-600 border-r border-slate-200 mr-2 cursor-pointer transition-all duration-700 ease-in-out">
          <div className="flex items-center">
            <span>M</span>
            <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-700 ease-in-out group-hover:max-w-16 group-hover:opacity-100">
              arko
            </span>
          </div>

          <span className="w-1 transition-all duration-700 group-hover:w-2"></span>

          <div className="flex items-center">
            <span className="inline-block transition-transform duration-700 -scale-y-100 group-hover:scale-y-100">M</span>
            <span className="group-hover:max-w-16 max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-700 ease-in-out  group-hover:opacity-100">
              oev
            </span>
          </div>
        </div>
        
        <div className="flex gap-1">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setActive(link.id);
                playSound();
              }}
              className={cn(
                "relative px-4 py-2 text-sm font-medium capitalize transition-colors duration-200 rounded-full",
                active === link.id ? "text-white" : "text-slate-600 hover:text-slate-900"
              )}
            >   
              {active === link.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-slate-900 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </button>
          ))}

          <div className="w-px h-6 bg-slate-200 mx-2 self-center" />

          <div className="flex bg-slate-100 rounded-full p-1 border border-slate-200">
            <button
              onClick={() => handleTranslation("en")}
              className={cn(
                "relative px-3 py-1.5 text-xs font-bold rounded-full transition-colors duration-200 min-w-10",
                currentLocale === "en" ? "text-white" : "text-slate-500 hover:text-slate-900"
              )}
            >
              {currentLocale === "en" && (
                <motion.div
                  layoutId="active-lang"
                  className="absolute inset-0 bg-slate-900 rounded-full shadow-sm"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">EN</span>
            </button>
            <button
              onClick={() => handleTranslation("bg")}
              className={cn(
                "relative px-3 py-1.5 text-xs font-bold rounded-full transition-colors duration-200 min-w-10",
                currentLocale === "bg" ? "text-white" : "text-slate-500 hover:text-slate-900"
              )}
            >
              {currentLocale === "bg" && (
                <motion.div
                  layoutId="active-lang"
                  className="absolute inset-0 bg-slate-900 rounded-full shadow-sm"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">BG</span>
            </button>
          </div>
        </div>
      </nav>
    </motion.div>
  );
}
