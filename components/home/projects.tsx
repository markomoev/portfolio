'use client';

import React from 'react';
import { ArrowUpRight, Github, Globe, LayoutTemplate, Stethoscope } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { GlassCard } from '@/components/ui/glass-card';

const iconBg = "bg-indigo-50 text-indigo-600";
const githubBtn = "p-2 rounded-full border border-slate-200 bg-white text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all";
const liveBtn = "p-2 bg-slate-900 rounded-full text-white hover:bg-indigo-600 transition-all";
const tagCls = "text-xs font-medium text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200";
const snapshotLabel = "text-xs font-bold uppercase tracking-widest text-slate-400";
const snapshotList = "mt-3 space-y-2 text-sm text-slate-600";

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
                    className="flex justify-center mb-16 md:mb-24 w-full"
                >
                    <a href="https://drstoykov.net/" target="_blank" rel="noopener noreferrer" className="w-full max-w-xl">
                      <GlassCard className="p-8 md:p-10 group">
                        <div className="flex items-start gap-5">
                          <div className={`shrink-0 rounded-2xl p-4 transition-transform duration-300 group-hover:scale-110 ${iconBg}`}>
                            <Stethoscope className="w-7 h-7" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                              <span className="text-2xl font-black tracking-tight text-slate-900">Dr. Stoykov</span>
                              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{t('drstoykov-subheading')}</span>
                            </div>
                            <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">{t('drstoykov-description')}</p>
                            <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 group-hover:text-indigo-600 transition-colors">
                              <span>View live</span>
                              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                            </div>
                          </div>
                        </div>
                      </GlassCard>
                    </a>
                </motion.div>

                {/* 2. My Personal Projects */}
                <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-2xl md:text-3xl lg:text-5xl font-bold text-slate-900 mb-8 md:mb-12 text-center tracking-tight"
                >
                    {t('headline-2')}
                </motion.h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">

                    {/* Project 1 - Coinwise */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="h-full"
                    >
                        <GlassCard className="p-8 group flex flex-col h-full">
                          <div className="flex justify-between items-start mb-6 gap-4">
                            <div className={`p-3 rounded-2xl transition-transform duration-300 group-hover:scale-110 ${iconBg}`}>
                              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div className="flex gap-2">
                              <a href="https://github.com/markomoev/Coinwise" target="_blank" rel="noopener noreferrer" className={githubBtn} title="View Code"><Github className="w-5 h-5" /></a>
                              <a href="https://coinwise-ivory.vercel.app" target="_blank" rel="noopener noreferrer" className={liveBtn} title="Live Demo"><ArrowUpRight className="w-5 h-5" /></a>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold mb-3 tracking-tight text-slate-900">Coinwise</h3>
                          <p className="text-sm leading-relaxed mb-6 grow text-slate-600">{t('coinwise-description')}</p>
                          <div className="mt-auto pt-2">
                            <div className={snapshotLabel}>Snapshot</div>
                            <ul className={snapshotList}>
                              <li>Problem → messy personal finance tracking</li>
                              <li>Solution → budgets + insights UI</li>
                              <li>Result → clearer decisions (demo)</li>
                            </ul>
                            <div className="flex flex-wrap gap-2 mt-5">
                              {['Next.js', 'React', 'Tailwind'].map((tag) => (<span key={tag} className={tagCls}>{tag}</span>))}
                            </div>
                          </div>
                        </GlassCard>
                    </motion.div>

                    {/* Project 2 - Hustly */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="h-full"
                    >
                        <GlassCard className="p-8 group flex flex-col h-full">
                          <div className="flex justify-between items-start mb-6 gap-4">
                            <div className={`p-3 rounded-2xl transition-transform duration-300 group-hover:scale-110 ${iconBg}`}>
                              <LayoutTemplate className="w-8 h-8" />
                            </div>
                            <div className="flex gap-2">
                              <a href="https://github.com/markomoev/Hustly" target="_blank" rel="noopener noreferrer" className={githubBtn} title="View Code"><Github className="w-5 h-5" /></a>
                              <a href="https://hustly.vercel.app" target="_blank" rel="noopener noreferrer" className={liveBtn} title="Live Demo"><ArrowUpRight className="w-5 h-5" /></a>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold mb-3 tracking-tight text-slate-900">Hustly</h3>
                          <p className="text-sm leading-relaxed mb-6 grow text-slate-600">{t('hustly-description')}</p>
                          <div className="mt-auto pt-2">
                            <div className={snapshotLabel}>Snapshot</div>
                            <ul className={snapshotList}>
                              <li>Problem → scattered tasks and projects</li>
                              <li>Solution → clean dashboard flow</li>
                              <li>Result → faster planning (demo)</li>
                            </ul>
                            <div className="flex flex-wrap gap-2 mt-5">
                              {['Next.js', 'TypeScript', 'Tailwind'].map((tag) => (<span key={tag} className={tagCls}>{tag}</span>))}
                            </div>
                          </div>
                        </GlassCard>
                    </motion.div>

                    {/* Project 3 - Portfolio */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="h-full"
                    >
                        <GlassCard className="p-8 group flex flex-col h-full">
                          <div className="flex justify-between items-start mb-6 gap-4">
                            <div className={`p-3 rounded-2xl transition-transform duration-300 group-hover:scale-110 ${iconBg}`}>
                              <Globe className="w-8 h-8" />
                            </div>
                            <div className="flex gap-2">
                              <a href="https://github.com/markomoev/portfolio" target="_blank" rel="noopener noreferrer" className={githubBtn} title="View Code"><Github className="w-5 h-5" /></a>
                              <a href="https://portfolio-opal-phi-od46ng81yy.vercel.app" target="_blank" rel="noopener noreferrer" className={liveBtn} title="Live Demo"><ArrowUpRight className="w-5 h-5" /></a>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold mb-3 tracking-tight text-slate-900">Marko Moev | Portfolio</h3>
                          <p className="text-sm leading-relaxed mb-6 grow text-slate-600">{t('portfolio-description')}</p>
                          <div className="mt-auto pt-2">
                            <div className={snapshotLabel}>Snapshot</div>
                            <ul className={snapshotList}>
                              <li>Problem → show skills + trust fast</li>
                              <li>Solution → tech-forward landing layout</li>
                              <li>Result → clear services + CTA</li>
                            </ul>
                            <div className="flex flex-wrap gap-2 mt-5">
                              {['Next.js', 'React', 'Tailwind'].map((tag) => (<span key={tag} className={tagCls}>{tag}</span>))}
                            </div>
                          </div>
                        </GlassCard>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
