'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function Hero_02() {
  const { t } = useTranslation('hero_02');

  return (
    <section id="about" className="relative w-full py-12 md:py-20 bg-slate-50 overflow-hidden scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Column: Heading and intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight tracking-tight">
              {t('headline')}
            </h2>
            <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed">
              {t('subheadline')}
            </p>
            
            <div className="relative aspect-[4/3] sm:aspect-video md:aspect-auto md:h-96 w-full rounded-2xl overflow-hidden bg-slate-200 border border-slate-200/50 p-4 md:p-6">
                <Image
                  src="/photos/wide.JPG"
                  alt="Why businesses trust me"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent md:bg-gradient-to-b" />
                <div className="relative z-10 flex flex-col justify-end md:justify-start h-full">
                    <div className="bg-slate-900/90 backdrop-blur-md p-2 md:p-4 rounded-lg md:rounded-xl shadow-lg border border-slate-800 w-max transform transition-transform hover:scale-105">
                        <div className="flex items-center gap-2 md:gap-4">
                            <div className="text-white font-bold text-lg md:text-3xl">
                                100%
                            </div>
                            <div className="h-5 md:h-8 w-px bg-slate-700"></div>
                            <div>
                                <p className="text-xs md:text-sm font-semibold text-slate-100">{t('badge-headline')}</p>
                                <p className="text-[10px] md:text-xs text-slate-400">{t('badge-subheadline')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Right Column: Features list */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6 md:space-y-8 pl-0 lg:pl-12 border-l-0 lg:border-l border-slate-200 mt-4 lg:mt-0"
          >
            
            <div className="group">
              <div className="relative">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1 md:mb-2 group-hover:text-indigo-600 transition-colors">
                  {t('bullet-01-headline')}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {t('bullet-01-subheadline')}
                </p>
              </div>
            </div>

            <div className="group">
              <div className="relative">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1 md:mb-2 group-hover:text-indigo-600 transition-colors">
                  {t('bullet-02-headline')}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {t('bullet-02-subheadline')}
                </p>
              </div>
            </div>

            <div className="group">
              <div className="relative">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1 md:mb-2 group-hover:text-indigo-600 transition-colors">
                  {t('bullet-03-headline')}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {t('bullet-03-subheadline')}
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
