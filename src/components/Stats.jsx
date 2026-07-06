// src/components/Stats.jsx
import React from 'react';
import { statsData } from '../data/stats';

export default function Stats() {
  return (
    <section id="architecture" className="py-16 border-t border-slate-800 bg-slate-900/20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden border border-slate-800/80 bg-slate-900/40 p-6 rounded-xl text-center group hover:border-slate-700/60 transition-colors"
            >
              {/* Subtle top light effect */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
              
              <div className="text-4xl font-black text-white tracking-tight bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mt-2">
                {stat.label}
              </div>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed max-w-[240px] mx-auto">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
