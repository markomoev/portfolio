"use client";
import { Brain, Code2, Users, Rocket } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function Skills(){
    const { t } = useTranslation('skills');

    return(
        <div className="w-full py-6 md:py-12">
            <div className="w-full bg-slate-950 rounded-[2rem] md:rounded-[2.5rem] py-12 md:py-24 text-slate-100 shadow-xl overflow-hidden">
                <div className="w-full flex flex-col lg:flex-row">
                
                {/* Text Content - Left Side */}
                <div className="w-full lg:w-1/2 px-6 md:px-16 lg:px-24 flex flex-col justify-center">
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight"
                    >
                        {t('headline').split('\n')[0]} <br/>
                        <span className="text-indigo-600">{t('headline').split('\n')[1]}</span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-base md:text-lg text-slate-400 mb-8 md:mb-12 max-w-xl leading-relaxed"
                    >
                        {t('subheadline')}
                    </motion.p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                        
                        {/* Pillar 1 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex flex-col gap-3 p-6 border border-slate-800 rounded-2xl bg-slate-800/30 hover:bg-slate-800/60 transition-colors duration-300"
                        >
                            <div className="flex items-center gap-2 text-indigo-600 font-semibold text-lg mb-2">
                                <Brain className="w-5 h-5" />
                                <h3>{t('skill-1-headline')}</h3>
                            </div>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                {t('skill-1-text')}
                            </p>
                        </motion.div>

                        {/* Pillar 2 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex flex-col gap-3 p-6 border border-slate-800 rounded-2xl bg-slate-800/30 hover:bg-slate-800/60 transition-colors duration-300"
                        >
                            <div className="flex items-center gap-2 text-indigo-600 font-semibold text-lg mb-2">
                                <Code2 className="w-5 h-5" />
                                <h3>{t('skill-2-headline')}</h3>
                            </div>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                {t('skill-2-text')}
                            </p>
                        </motion.div>

                        {/* Pillar 3 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex flex-col gap-3 p-6 border border-slate-800 rounded-2xl bg-slate-800/30 hover:bg-slate-800/60 transition-colors duration-300"
                        >
                            <div className="flex items-center gap-2 text-indigo-600 font-semibold text-lg mb-2">
                                <Users className="w-5 h-5" />
                                <h3>{t('skill-3-headline')}</h3>
                            </div>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                {t('skill-3-text')}
                            </p>
                        </motion.div>

                        {/* Pillar 4 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex flex-col gap-3 p-6 border border-slate-800 rounded-2xl bg-slate-800/30 hover:bg-slate-800/60 transition-colors duration-300"
                        >
                            <div className="flex items-center gap-2 text-indigo-600 font-semibold text-lg mb-2">
                                <Rocket className="w-5 h-5" />
                                <h3>{t('skill-4-headline')}</h3>
                            </div>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                {t('skill-4-text')}
                            </p>
                        </motion.div>

                    </div>
                </div>

                {/* Portrait - Right Side */}
                <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0 flex items-center justify-center p-6 md:p-8 lg:p-24">
                  <div className="relative w-full aspect-[3/4] md:aspect-auto md:h-full md:min-h-[32rem] rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                        <Image
                            src="/photos/portrait.JPG"
                            alt="Marko Moev"
                            fill
                            className="object-cover object-[center_10%] md:object-[center_20%]"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}