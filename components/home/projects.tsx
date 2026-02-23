'use client';

import React from 'react';
import { ArrowUpRight, Github, Globe, LayoutTemplate, Stethoscope } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Projects() {
    const { t } = useTranslation('projects');

    return (
        <section className="bg-white py-16 md:py-24 w-full rounded-t-[2rem] md:rounded-t-[3rem] -mt-8 relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                
                {/* 1. Brands that trusted me */}
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-slate-900 mb-8 md:mb-16 text-center tracking-tight">
                    {t('headline-1')}
                </h2>

                <div className="flex justify-center mb-16 md:mb-32 w-full opacity-90">
                     <a href="https://drstoykov.net/" target="_blank" rel="noopener noreferrer" className="w-full max-w-sm bg-slate-50 border border-slate-100 rounded-3xl flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-xl cursor-pointer group p-8 transform hover:-translate-y-1">
                        <div className="flex flex-col items-center gap-4">
                             <div className="bg-indigo-600 text-white rounded-2xl p-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                                <Stethoscope className="w-8 h-8" />
                             </div>
                            <div className="text-center">
                                <span className="block text-slate-900 font-bold text-2xl group-hover:text-indigo-600 transition-colors">Dr. Stoykov</span>
                                <span className="block text-slate-500 text-sm font-medium mt-1 mb-3">{t('drstoykov-subheading')}</span>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {t('drstoykov-description')}
                                </p>
                            </div>
                        </div>
                    </a>
                </div>


                {/* 2. My Personal Projects */}
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-slate-900 mb-8 md:mb-16 text-center tracking-tight">
                    {t('headline-2')}
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
                    
                    {/* Project 1 - Coinwise */}
                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full transform hover:-translate-y-1">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="flex gap-2">
                                <a href="https://github.com/markomoev/Coinwise" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-200 transition-all" title="View Code">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="https://coinwise-ivory.vercel.app" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 rounded-full text-white hover:bg-indigo-600 transition-all" title="Live Demo">
                                    <ArrowUpRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                            Coinwise
                        </h3>
                        
                        <p className="text-slate-600 text-sm leading-relaxed mb-6 grow">
                            {t('coinwise-description')}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {['Next.js', 'React', 'Tailwind CSS'].map((tag) => (
                                <span key={tag} className="text-xs font-medium text-slate-500 bg-white px-2 py-1 rounded-md border border-slate-200">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Project 2 - Hustly */}
                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full transform hover:-translate-y-1">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <LayoutTemplate className="w-8 h-8 text-purple-600" />
                            </div>
                            <div className="flex gap-2">
                                <a href="https://github.com/markomoev/Hustly" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-200 transition-all" title="View Code">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="https://hustly.vercel.app" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 rounded-full text-white hover:bg-indigo-600 transition-all" title="Live Demo">
                                    <ArrowUpRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                            Hustly
                        </h3>
                        
                        <p className="text-slate-600 text-sm leading-relaxed mb-6 grow">
                             {t('hustly-description')}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {['Next.js', 'TypeScript', 'Tailwind CSS'].map((tag) => (
                                <span key={tag} className="text-xs font-medium text-slate-500 bg-white px-2 py-1 rounded-md border border-slate-200">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Project 3 - Portfolio */}
                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full transform hover:-translate-y-1">
                         <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <Globe className="w-8 h-8 text-indigo-500" />
                            </div>
                            <div className="flex gap-2">
                                <a href="https://github.com/markomoev/portfolio" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-200 transition-all" title="View Code">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="https://portfolio-opal-phi-od46ng81yy.vercel.app" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 rounded-full text-white hover:bg-indigo-600 transition-all" title="Live Demo">
                                    <ArrowUpRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                            Marko Moev | Portfolio
                        </h3>
                        
                        <p className="text-slate-600 text-sm leading-relaxed mb-6 grow">
                             {t('portfolio-description')}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {['Next.js', 'React', 'Tailwind CSS'].map((tag) => (
                                <span key={tag} className="text-xs font-medium text-slate-500 bg-white px-2 py-1 rounded-md border border-slate-200">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}