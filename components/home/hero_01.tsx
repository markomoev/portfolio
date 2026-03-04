"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-start md:justify-center px-4 sm:px-10 lg:px-20 bg-transparent overflow-hidden pointer-events-none pt-35 md:pt-32">

      {/* Top Decoration / Branding (Minimal) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-20 right-10 md:right-20 text-right opacity-30">
             <h1 className="text-[10rem] md:text-[16rem] leading-none font-bold text-slate-100 select-none">M</h1>
          </div>
      </div>

      <div className="relative z-10 w-full mx-auto flex flex-col justify-center h-full">
        
        {/* Main Title Area (Editorial style, full width) */}
        <div className="flex flex-col gap-6 md:gap-8 w-full">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-xs md:text-sm lg:text-base font-medium tracking-wide text-slate-500 uppercase text-center md:text-left"
          >
             Marko Moev — Web & Frontend Developer
          </motion.p>
          
          <h1 className="w-full font-black tracking-tighter leading-[0.9] md:leading-[0.8] text-slate-900 mb-4 md:mb-8 flex flex-col uppercase text-center md:text-left">
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="block text-[10vw] md:text-[8.5vw] text-slate-900"
            >
              <span className="text-indigo-600">{t('headline_01').split(' ').slice(0, 2).join(' ')}</span> {t('headline_01').split(' ').slice(2).join(' ').replace(/ ([^ ]+)$/, "\u00A0$1")}
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="block text-[10vw] md:text-[8.5vw] text-slate-900"
            >
              {t('headline_02')}
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
              className="block text-[6vw] md:text-[5vw] text-slate-500 mt-2 md:mt-4 leading-none font-bold"
            >
               {t('headline_03').split(' ').slice(0, -1).join(' ')} <span className="text-slate-900 border-b-4 md:border-b-8 border-indigo-600">{t('headline_03').split(' ').slice(-1)}</span>
            </motion.span>
          </h1>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col md:flex-row gap-8 md:items-start pt-6 md:pt-8 border-t border-slate-200 mt-2 md:mt-4 justify-between px-0 md:px-2"
          >
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 max-w-3xl text-center md:text-left">
               <p className="text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed font-light max-w-2xl">
                {t('subheadline')}
              </p>
              <div className="hidden md:flex flex-col items-center gap-2 text-slate-400 min-w-max mt-8 pb-4">
                 <Image src="/icons/arrow-down.svg" width={60} height={100} alt="Scroll down arrow" className="text-indigo-600/80" />
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              className="flex flex-col sm:flex-row md:flex-col gap-4 min-w-max pointer-events-auto items-center md:items-end mt-4 md:mt-0"
            >
              <button className="hover:text-indigo-600 group flex items-center gap-2 text-lg md:text-xl font-bold text-slate-900 transition-all hover:translate-x-2 cursor-pointer">
                {t('cta_primary')} <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:rotate-45" />
              </button>
              <button className="group flex items-center gap-2 text-base md:text-lg font-medium text-slate-500 transition-all hover:text-slate-900 hover:translate-x-2 cursor-pointer">
                {t('cta_secondary')} <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}