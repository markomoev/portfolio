'use client';

import Image from 'next/image';
import { ArrowUpRight, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { GlassCard } from '@/components/ui/glass-card';

const iconBg = "bg-indigo-50 text-indigo-600";
const githubBtn = "p-2 rounded-full border border-slate-200 bg-white text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all";
const liveBtn = "p-2 bg-slate-900 rounded-full text-white hover:bg-indigo-600 transition-all";
const snapshotLabel = "text-xs font-bold uppercase tracking-widest text-slate-400";
const snapshotList = "mt-3 space-y-2 text-sm text-slate-600";

function TechTag({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center text-xs font-medium text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200">
      {name}
    </span>
  );
}

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
                      <GlassCard variant="elevated" className="p-8 md:p-10 group">
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
                            <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-slate-50 transition-transform duration-300 group-hover:scale-110 shrink-0 -ml-4">
                              <Image
                                src="/logos/coinwise.png"
                                alt="Coinwise logo"
                                fill
                                className="object-contain object-left mix-blend-multiply pr-1 py-1"
                                sizes="56px"
                              />
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
                              {['React', 'Supabase'].map((tag) => (<TechTag key={tag} name={tag} />))}
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
                            <div className="transition-transform duration-300 group-hover:scale-110 shrink-0">
                              <span className="text-4xl font-black text-amber-700 leading-none">h</span>
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
                              {['React', 'Supabase'].map((tag) => (<TechTag key={tag} name={tag} />))}
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
                            <div className="group/logo flex items-center font-bold text-indigo-600 shrink-0 transition-transform duration-300 group-hover:scale-110">
                              <div className="flex items-center">
                                <span>M</span>
                                <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-700 ease-in-out group-hover/logo:max-w-16 group-hover/logo:opacity-100">arko</span>
                              </div>
                              <span className="w-0.5 h-4 bg-slate-300 mx-1 rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500"></span>
                              <div className="flex items-center">
                                <span className="inline-block transition-transform duration-700 -scale-y-100 group-hover/logo:scale-y-100">M</span>
                                <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-700 ease-in-out group-hover/logo:max-w-16 group-hover/logo:opacity-100">oev</span>
                              </div>
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
                              {['Next.js', 'React', 'Tailwind'].map((tag) => (<TechTag key={tag} name={tag} />))}
                            </div>
                          </div>
                        </GlassCard>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
