"use client";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "@/lib/utils";
import { useAudio } from "@/hooks/use-audio";
import { useTranslation } from "react-i18next";
import { useRouter, usePathname } from "next/navigation";
import i18nConfig from "../../i18nConfig";

import { Menu, X } from "lucide-react";
import { AnimatePresence } from "motion/react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
      setMenuOpen(false); // Close menu on scroll down
    } else {
      setHidden(false);
    }
  });

  const links = [
    { id: "home", label: t('navbar-1') },
    { id: "about", label: t('navbar-2') },
    { id: "contact", label: t('navbar-3') },
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

  // Language Switcher Component
  const LanguageSwitcher = () => (
    <div className="flex bg-white rounded-full p-1 border border-slate-200 hover:border-slate-300 transition-colors">
      <motion.button
        onClick={() => {
          const nextLocale = currentLocale === 'en' ? 'bg' : 'en';
          handleTranslation(nextLocale);
          playSound();
        }}
        onMouseEnter={() => playSound()}
        className="relative px-3 py-1.5 text-xs font-bold rounded-full transition-colors duration-200 min-w-10 text-slate-900 group overflow-hidden z-10 hover:text-indigo-600"
      >
        <span className="relative z-10">{currentLocale === 'en' ? 'BG' : 'EN'}</span>
      </motion.button>
    </div>
  );


  return (
    <>
    <motion.div 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-200%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-4 md:top-6 left-0 right-0 flex justify-between items-center z-50 pointer-events-auto px-4 md:px-6 max-w-360 mx-auto"
    >
      
      {/* Left: Logo + Desktop Navigation */}
      <nav className="flex items-center gap-2 p-1.5 pl-4 pr-1.5 rounded-full border border-slate-200 bg-white/80 backdrop-blur-md shadow-sm">
        
        {/* Logo */}
        <div 
          onMouseEnter={() => playSound()}
          className="group flex items-center font-bold text-indigo-600 cursor-pointer transition-all duration-700 ease-in-out mr-2"
        >
          <div className="flex items-center">
            <span>M</span>
            <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-700 ease-in-out group-hover:max-w-16 group-hover:opacity-100">
              arko
            </span>
          </div>
          <span className="w-0.5 h-4 bg-slate-300 mx-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          <div className="flex items-center">
            <span className="inline-block transition-transform duration-700 -scale-y-100 group-hover:scale-y-100">M</span>
            <span className="group-hover:max-w-16 max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-700 ease-in-out  group-hover:opacity-100">
              oev
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-1 items-center">
          <div className="w-px h-6 bg-slate-200 mx-2" />
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setActive(link.id);
                playSound();
                  const element = document.getElementById(link.id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
              }}
              onMouseEnter={() => playSound()}
              className={cn(
                "relative px-4 py-2 text-sm font-medium capitalize rounded-full transition-colors",
                active === link.id ? "text-slate-900 bg-slate-100" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50" 
              )}
            >   
               {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-full hover:bg-slate-100 transition-colors"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

      </nav>

      {/* Right: Language Bubble (Separated) */}
      <div className="hidden md:block p-1.5 rounded-full border border-slate-200 bg-white/80 backdrop-blur-md shadow-sm">
        <LanguageSwitcher />
      </div>

    </motion.div>

    {/* Mobile Menu Overlay */}
    <AnimatePresence mode="wait">
      {menuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          style={{ backgroundColor: "white" }}
          className="fixed inset-0 z-9999 md:hidden flex flex-col p-6 overflow-y-auto h-dvh w-screen safe-area-inset-bottom"
        >
            <div className="flex justify-between items-start w-full mb-8">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => {
                        const nextLocale = currentLocale === 'en' ? 'bg' : 'en';
                        handleTranslation(nextLocale);
                        playSound();
                    }}
                    className="p-2 bg-indigo-50 rounded-full hover:bg-indigo-100 transition-colors"
                  >
                     <span className="font-bold text-indigo-600 text-lg">{currentLocale === 'en' ? 'EN' : 'BG'}</span>
                  </button>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Language</span>
                    <button 
                      onClick={() => {
                        const nextLocale = currentLocale === 'en' ? 'bg' : 'en';
                        handleTranslation(nextLocale);
                        playSound();
                      }}
                      className="text-sm font-bold text-slate-900 underline decoration-2 decoration-indigo-200 hover:text-indigo-600 hover:decoration-indigo-600 transition-all text-left"
                    >
                      {currentLocale === 'en' ? 'Switch to Bulgarian' : 'Switch to English'}
                    </button>
                  </div>
                </div>
                <button 
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 transition-colors"
                >
                    <X size={24} />
                </button>
            </div>
            
          <div className="flex flex-col gap-6 w-full grow justify-center">
            {links.map((link, index) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                onClick={() => {
                  setActive(link.id);
                  setMenuOpen(false);
                  playSound();
                  const element = document.getElementById(link.id);
                  if (element) {
                    // close menu first then scroll
                    setTimeout(() => {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }, 300);
                  }
                }}
                className={cn(
                  "text-4xl sm:text-5xl font-black tracking-tight hover:text-indigo-600 transition-colors text-left w-full",
                  active === link.id ? "text-indigo-600" : "text-slate-900"
                )}
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          <div className="w-full border-t border-slate-100 pt-6 mt-auto">
             <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Get in touch</span>
                 <a href="mailto:contact@markomoev.com" className="text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors break-all">
                    contact@markomoev.com
                 </a>
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
