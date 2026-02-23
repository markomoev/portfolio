'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Hero_02() {
  const { t } = useTranslation('hero_02');

  return (
    <section className="relative w-full py-12 md:py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Column: Heading and intro */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
              {t('headline')}
            </h2>
            <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed">
              {t('subheadline')}
            </p>
            
            <div className="relative h-48 md:h-64 w-full rounded-2xl overflow-hidden bg-slate-200 border border-slate-200/50 p-4 md:p-6">
                <div className="relative z-10 flex flex-col justify-end h-full">
                    <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-800 w-max transform transition-transform hover:scale-105">
                        <div className="flex items-center gap-4">
                            <div className="text-white font-bold text-3xl">
                                100%
                            </div>
                            <div className="h-8 w-px bg-slate-700"></div>
                            <div>
                                <p className="text-sm font-semibold text-slate-100">{t('badge-headline')}</p>
                                <p className="text-xs text-slate-400">{t('badge-subheadline')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Right Column: Features list */}
          <div className="space-y-6 md:space-y-8 pl-0 lg:pl-12 border-l-0 lg:border-l border-slate-200 mt-4 lg:mt-0">
            
            <div className="group">
              <div className="relative">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1 md:mb-2 group-hover:text-blue-600 transition-colors">
                  {t('bullet-01-headline')}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {t('bullet-01-subheadline')}
                </p>
              </div>
            </div>

            <div className="group">
              <div className="relative">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1 md:mb-2 group-hover:text-blue-600 transition-colors">
                  {t('bullet-02-headline')}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {t('bullet-02-subheadline')}
                </p>
              </div>
            </div>

            <div className="group">
              <div className="relative">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1 md:mb-2 group-hover:text-blue-600 transition-colors">
                  {t('bullet-03-headline')}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {t('bullet-04-subheadline')}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
