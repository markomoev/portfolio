'use client';

import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Reviews() {
  const { t } = useTranslation('reviews');

  const reviews = [
    {
      name: "Aleksandar Dimov",
      role: "CEO, TechStart BG",
      review: "Marko is an exceptional developer. He transformed our outdated platform into a modern, high-performance web application. His attention to detail and ability to solve complex frontend challenges is truly impressive.",
      stars: 5
    },
    {
      name: "Elena Petrova",
      role: "Product Manager, E-Shop Solutions",
      review: "Working with Marko was a seamless experience. He not only delivered the project ahead of schedule but also suggested UI improvements that significantly boosted our user engagement. Highly recommended!",
      stars: 5
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            What Clients Say
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Feedback from people I've had the pleasure of working with.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
           {reviews.map((item, index) => (
             <div key={index} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300 group relative">
                <Quote className="absolute top-8 right-8 text-indigo-100 w-12 h-12 rotate-180 group-hover:text-indigo-200 transition-colors" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-indigo-500 text-indigo-500" />
                  ))}
                </div>

                <p className="text-slate-700 text-lg leading-relaxed mb-8 relative z-10 font-medium">
                  "{item.review}"
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
             </div>
           ))}
        </div>

      </div>
    </section>
  );
}
