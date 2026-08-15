'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { GlassCard } from '@/components/ui/glass-card';

export default function Projects() {
    const { t } = useTranslation('projects');

    return (
        <section id="projects" className="py-16 md:py-24 w-full relative z-20 scroll-mt-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                
                {/* 1. Brands that trusted me */}
                <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-2xl md:text-3xl lg:text-5xl font-bold text-slate-900 mb-8 md:mb-12 text-center tracking-tight"
                >
                    {t('headline-1')}
                </motion.h2>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24 w-full max-w-4xl"
                >
                    <a href="https://drstoykov.net/" target="_blank" rel="noopener noreferrer" className="w-full">
                      <GlassCard variant="elevated" className="p-8 md:p-10 group h-full">
                        <div className="flex flex-col gap-3">
                          <div className="relative w-full h-[52px]">
                            <Image
                              src="/logos/stoykovmed.png"
                              alt="Stoykovmed logo"
                              fill
                              className="object-contain object-left"
                              sizes="(max-width: 640px) 100vw, 576px"
                            />
                          </div>
                          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{t('drstoykov-subheading')}</span>
                          <p className="text-sm md:text-base text-slate-600 leading-relaxed">{t('drstoykov-description')}</p>
                          <div className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 group-hover:text-indigo-600 transition-colors">
                            <span>View live</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                          </div>
                        </div>
                      </GlassCard>
                    </a>

                    <a href="https://www.plenty.bg/" target="_blank" rel="noopener noreferrer" className="w-full">
                      <GlassCard variant="elevated" className="p-8 md:p-10 group h-full">
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center h-[52px]">
                            <span className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">PLENTY</span>
                          </div>
                          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{t('plenty-subheading')}</span>
                          <p className="text-sm md:text-base text-slate-600 leading-relaxed">{t('plenty-description')}</p>
                          <div className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 group-hover:text-indigo-600 transition-colors">
                            <span>View live</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                          </div>
                        </div>
                      </GlassCard>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
