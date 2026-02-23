"use client";
import { Brain, Code2, Users, Rocket } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Skills(){
    const { t } = useTranslation('skills');

    return(
        <div className="w-full py-6 md:py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full bg-slate-950 rounded-[2rem] md:rounded-[2.5rem] py-12 md:py-24 text-slate-100 shadow-xl overflow-hidden">
                <div className="w-full flex flex-col lg:flex-row">
                
                {/* Text Content - Left Side */}
                <div className="w-full lg:w-1/2 px-6 md:px-16 lg:px-24 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                        {t('headline').split('\n')[0]} <br/>
                        <span className="text-indigo-500">{t('headline').split('\n')[1]}</span>
                    </h2>
                    
                    <p className="text-base md:text-lg text-slate-400 mb-8 md:mb-12 max-w-xl leading-relaxed">
                        {t('subheadline')}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                        
                        {/* Pillar 1 */}
                        <div className="flex flex-col gap-3 p-6 border border-slate-800 rounded-2xl bg-slate-800/30 hover:bg-slate-800/60 transition-colors duration-300">
                            <div className="flex items-center gap-2 text-indigo-400 font-semibold text-lg mb-2">
                                <Brain className="w-5 h-5" />
                                <h3>{t('skill-1-headline')}</h3>
                            </div>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                {t('skill-1-text')}
                            </p>
                        </div>

                        {/* Pillar 2 */}
                        <div className="flex flex-col gap-3 p-6 border border-slate-800 rounded-2xl bg-slate-800/30 hover:bg-slate-800/60 transition-colors duration-300">
                            <div className="flex items-center gap-2 text-indigo-400 font-semibold text-lg mb-2">
                                <Code2 className="w-5 h-5" />
                                <h3>{t('skill-2-headline')}</h3>
                            </div>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                {t('skill-2-text')}
                            </p>
                        </div>

                        {/* Pillar 3 */}
                        <div className="flex flex-col gap-3 p-6 border border-slate-800 rounded-2xl bg-slate-800/30 hover:bg-slate-800/60 transition-colors duration-300">
                            <div className="flex items-center gap-2 text-indigo-400 font-semibold text-lg mb-2">
                                <Users className="w-5 h-5" />
                                <h3>{t('skill-3-headline')}</h3>
                            </div>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                {t('skill-3-text')}
                            </p>
                        </div>

                        {/* Pillar 4 */}
                        <div className="flex flex-col gap-3 p-6 border border-slate-800 rounded-2xl bg-slate-800/30 hover:bg-slate-800/60 transition-colors duration-300">
                            <div className="flex items-center gap-2 text-indigo-400 font-semibold text-lg mb-2">
                                <Rocket className="w-5 h-5" />
                                <h3>{t('skill-4-headline')}</h3>
                            </div>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                {t('skill-4-text')}
                            </p>
                        </div>

                    </div>
                </div>

                {/* Image Placeholder - Right Side */}
                <div className="w-full lg:w-1/2 min-h-75 md:min-h-100 lg:min-h-screen relative mt-12 lg:mt-0 flex items-center justify-center p-6 md:p-8 lg:p-24">
                     {/* The Image Container */}
                    <div className="relative w-full h-full min-h-75 md:min-h-100 bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                        {/* Decorative Elements for Placeholder */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-slate-700 font-mono text-sm p-4 border border-slate-800 rounded-lg bg-slate-950/50">
                                &lt;ImagePlaceholder /&gt;
                                <br/>
                                <span className="text-xs text-slate-600">// Add your professional photo here</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}