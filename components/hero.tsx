"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-10 lg:px-20 bg-transparent overflow-hidden">
      
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 pt-20 pointer-events-auto">
        
        {/* Text Section */}
        <div className="flex flex-col gap-6">
          {/* Top Tagline */}
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="w-2 h-2 bg-indigo-500 rounded-full" />
            <p className="text-sm md:text-base font-medium tracking-wide text-slate-500 uppercase">
              Marko Moev <span className="text-slate-300">|</span> Website Developer
            </p>
          </div>

          {/* Main Headline */}
          <div className="relative">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-slate-900">
              <span className="block text-indigo-600">Stop waiting</span>
              <span className="block text-slate-800">for the</span>
              <span className="block text-slate-400">perfect moment.</span>
            </h1>
            
            <div className="absolute -left-4 top-2 bottom-2 w-1 bg-indigo-500 origin-top" />
          </div>

          {/* Subheader / Hook */}
          <p className="text-lg md:text-xl font-light text-slate-600 italic border-l-4 border-slate-200 pl-4 py-1">
            "Innovation requires execution."
          </p>

          {/* Detailed Pitch */}
          <p className="text-base md:text-lg text-slate-600 max-w-lg leading-relaxed">
            I work with <strong className="text-slate-900">ambitious companies</strong> and <strong className="text-slate-900">visionary founders</strong> who need expert guidance to build their digital workshops.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <button className="pointer group relative px-8 py-4 bg-slate-900 text-white font-bold text-lg rounded-md overflow-hidden transition-all hover:bg-slate-800">
              <span className="relative z-10 flex items-center gap-2">
                Work with me <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            
            <button className="pointer px-8 py-4 bg-transparent border-2 border-slate-200 text-slate-600 font-bold text-lg rounded-md hover:border-slate-900 hover:text-slate-900 transition-colors">
              View Projects
            </button>
          </div>
        </div>

        {/* Visual/Image Section */}
        <div className="relative h-full min-h-100 flex items-center justify-center lg:justify-end">
           {/* Abstract Decoration */}
           <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
           
           <div className="relative z-10 group">
             {/* Tech Frame Effect - Static now */}
             <div className="absolute -inset-4 border border-dashed border-slate-300 rounded-3xl" />
             
             {/* Image Container */}
             <div className="relative w-72 h-72 md:w-96 md:h-96 bg-slate-100 border border-slate-200 p-2 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 rounded-2xl">
                {/* Placeholder for actual image */}
                <div className="w-full h-full bg-slate-300 flex items-center justify-center overflow-hidden relative rounded-xl">
                  <img src="/api/placeholder/400/400" alt="Marko Moev" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-indigo-500/20 mix-blend-overlay" />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 shadow-lg border border-slate-100 flex items-center gap-3 rounded-xl">
                  <div className="p-2 bg-green-100 rounded-full">
                    <Terminal className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold">Status</p>
                    <p className="text-sm font-bold text-slate-900">Available for hire</p>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}