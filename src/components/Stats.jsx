// src/components/Stats.jsx
import React from 'react';
import { statsData } from '../data/stats';

export default function Stats() {
  return (
    <section id="architecture" className="py-16 border-t border-slate-800 bg-slate-950/20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden bg-slate-900/60 p-6 rounded-xl text-center group border border-slate-800 hover:border-slate-400/40 transition-colors duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
            >
              {/* Brushed Metallic Edge Lining Effect */}
              <div className="absolute inset-0 border border-transparent group-hover:border-gradient-to-b group-hover:from-white/10 group-hover:to-transparent rounded-xl pointer-events-none transition-all duration-500" />
              
              {/* Subtle top light anchor */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-400/30 to-transparent" />
              
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
