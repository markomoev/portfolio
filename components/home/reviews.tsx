'use client';

import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { GlassCard } from '@/components/ui/glass-card';

export default function Reviews() {
  const { t } = useTranslation('reviews');
  const rawReviews = t('reviews', { returnObjects: true, defaultValue: [] });
  const reviews: Array<{ name: string; role: string; review: string; stars: number }> =
    Array.isArray(rawReviews)
      ? (rawReviews as Array<{ name: string; role: string; review: string; stars: number }>)
      : [];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              {t('headline', { defaultValue: 'What Clients Say' })}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('subheadline', {
                defaultValue: "Feedback from people I've had the pleasure of working with.",
              })}
            </p>
        </motion.div>

        <div className="w-[calc(100%+2rem)] -mx-4 px-4 md:w-full md:mx-auto md:px-0 flex gap-4 md:gap-8 overflow-x-auto pb-8 pt-2 snap-x snap-mandatory touch-pan-x md:grid md:grid-cols-2 md:overflow-x-visible md:pb-0 max-w-5xl after:content-[''] after:w-px after:shrink-0 md:after:hidden">
          {reviews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative w-[85vw] shrink-0 snap-start md:w-auto md:shrink-1"
            >
              <GlassCard className="p-8 relative overflow-hidden">
                <Quote className="absolute top-8 right-8 text-indigo-100 w-12 h-12 rotate-180 group-hover:text-indigo-200 transition-colors" />

                <div className="flex gap-1 mb-6">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-indigo-500 text-indigo-500" />
                  ))}
                </div>

                <p className="text-slate-700 text-lg leading-relaxed mb-8 relative z-10 font-medium">
                  &quot;{item.review}&quot;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xl">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.name}</h4>
                    <p className="text-sm text-slate-500">{item.role}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
