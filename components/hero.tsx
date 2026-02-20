"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center px-4 sm:px-10 lg:px-20 bg-transparent overflow-hidden pointer-events-none pt-24 md:pt-32">

      {/* Top Decoration / Branding (Minimal) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-20 right-10 md:right-20 text-right opacity-30">
             <h1 className="text-[10rem] md:text-[16rem] leading-none font-bold text-slate-100 select-none">M</h1>
          </div>
      </div>

      <div className="relative z-10 w-full mx-auto flex flex-col justify-center h-full">
        
        {/* Main Title Area (Editorial style, full width) */}
        <div className="flex flex-col gap-8 w-full">
          <p className="text-sm md:text-base font-medium tracking-wide text-slate-500 uppercase">
             Marko Moev — Web & Frontend Developer
          </p>
          
          <h1 className="w-full font-black tracking-tighter leading-[0.8] text-slate-900 mb-8 flex flex-col uppercase text-center md:text-left">
            <span className="block text-[7.5vw] md:text-[8.5vw] text-slate-900">
              <span className="text-indigo-600">{t('headline_01').split(' ').slice(0, 2).join(' ')}</span> {t('headline_01').split(' ').slice(2).join(' ').replace(/ ([^ ]+)$/, "\u00A0$1")}
            </span>
            <span className="block text-[7.5vw] md:text-[8.5vw] text-slate-900">
              {t('headline_02')}
            </span>
            <span className="block text-[5vw] text-slate-500 mt-2 leading-none font-bold">
               {t('headline_03').split(' ').slice(0, -1).join(' ')} <span className="text-slate-900 border-b-4 md:border-b-8 border-indigo-600">{t('headline_03').split(' ').slice(-1)}</span>
            </span>
          </h1>

          <div className="flex flex-col md:flex-row gap-8 md:items-start pt-8 border-t border-slate-200 mt-4 justify-between px-2">
            
            <div className="flex items-start gap-4 max-w-3xl">
               <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light max-w-2xl">
                {t('subheadline')}
              </p>
              <div className="hidden md:flex flex-col items-center gap-2 text-slate-400 min-w-max mt-8 pb-4">
                 <Image src="/icons/arrow-down.svg" width={60} height={100} alt="Scroll down arrow" className="text-indigo-600/80" />
              </div>
            </div>
            
            <div className="flex flex-col gap-4 min-w-max pointer-events-auto">
              <button className="hover:text-indigo-600 group flex items-center gap-2 text-xl font-bold text-slate-900 transition-all hover:translate-x-2 cursor-pointer">
                {t('cta_primary')} <ArrowUpRight className="w-6 h-6 transition-transform group-hover:rotate-45" />
              </button>
              <button className="group flex items-center gap-2 text-lg font-medium text-slate-500 transition-all hover:text-slate-900 hover:translate-x-2 cursor-pointer">
                {t('cta_secondary')} <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}