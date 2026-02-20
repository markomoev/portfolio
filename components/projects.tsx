'use client';

import React from 'react';
import { ArrowUpRight, Github, Globe, LayoutTemplate } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Projects() {
    const { t } = useTranslation('projects');

    return (
        <section className="bg-white py-24 w-full rounded-t-[3rem] -mt-8 relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                
                {/* 1. Brands that trusted me */}
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-16 text-center tracking-tight">
                    {t('headline-1')}
                </h2>

                <div className="flex justify-center mb-32 w-full opacity-90">
                     <a href="https://drstoykov.com" target="_blank" rel="noopener noreferrer" className="w-full max-w-sm h-32 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-lg cursor-pointer group p-8">
                        <div className="flex flex-col items-center gap-2">
                             <div className="bg-blue-600 text-white rounded-lg p-2">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                             </div>
                            <span className="text-slate-800 font-bold text-xl group-hover:text-blue-600 transition-colors">Dr. Stoykov</span>
                        </div>
                    </a>
                </div>


                {/* 2. My Personal Projects */}
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-16 text-center tracking-tight">
                    {t('headline-2')}
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
                    
                    {/* Project 1 - Crypto Dashboard */}
                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full transform hover:-translate-y-1">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <LayoutTemplate className="w-8 h-8 text-purple-600" />
                            </div>
                            <div className="flex gap-2">
                                <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-200 transition-all" title="View Code">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 rounded-full text-white hover:bg-blue-600 transition-all" title="Live Demo">
                                    <ArrowUpRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                            CryptoDash
                        </h3>
                        
                        <p className="text-slate-600 text-sm leading-relaxed mb-6 grow">
                            A real-time cryptocurrency dashboard tracking prices, market cap, and volume. Features interactive charts.
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {['React', 'TypeScript', 'CoinGecko'].map((tag) => (
                                <span key={tag} className="text-xs font-medium text-slate-500 bg-white px-2 py-1 rounded-md border border-slate-200">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Project 2 - Portfolio V1 */}
                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full transform hover:-translate-y-1">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <Globe className="w-8 h-8 text-blue-500" />
                            </div>
                            <div className="flex gap-2">
                                <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-200 transition-all" title="View Code">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 rounded-full text-white hover:bg-blue-600 transition-all" title="Live Demo">
                                    <ArrowUpRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                            Portfolio V1
                        </h3>
                        
                        <p className="text-slate-600 text-sm leading-relaxed mb-6 grow">
                             My previous portfolio website built to showcase my early design work and frontend development skills.
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {['HTML', 'CSS', 'JavaScript'].map((tag) => (
                                <span key={tag} className="text-xs font-medium text-slate-500 bg-white px-2 py-1 rounded-md border border-slate-200">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Project 3 - Finance Dashboard */}
                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full transform hover:-translate-y-1">
                         <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="flex gap-2">
                                <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-200 transition-all" title="View Code">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 rounded-full text-white hover:bg-blue-600 transition-all" title="Live Demo">
                                    <ArrowUpRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                            Finance Dash
                        </h3>
                        
                        <p className="text-slate-600 text-sm leading-relaxed mb-6 grow">
                             A conceptual finance dashboard featuring data visualization, transaction tracking, and budget management.
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {['TypeScript', 'Tailwind', 'Recharts'].map((tag) => (
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