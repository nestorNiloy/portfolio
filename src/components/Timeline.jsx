// src/components/Timeline.jsx
import React from 'react';
import { timelineData } from '../data/timeline';

export default function Timeline() {
  return (
    <section id="experience" className="py-20 border-t border-slate-800">
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
          History
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Experience & Education
        </h2>
        <p className="mt-3 max-w-2xl text-base text-slate-400">
          A timeline of professional data roles, retail operational experience, and rigorous engineering academics.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto border-l border-slate-700/60 ml-4 md:ml-auto">
        {timelineData.map((item, index) => (
          <div key={index} className="mb-10 last:mb-0 pl-6 md:pl-8 relative group">
            {/* Timeline node point */}
            <span className="absolute -left-[6.5px] top-1.5 flex h-3 w-3 rounded-full bg-slate-900 border-2 border-slate-500 group-hover:border-blue-500 group-hover:bg-blue-500 transition-colors duration-300 shadow-[0_0_8px_rgba(0,0,0,0.5)]" />
            
            <div className="border border-slate-700/40 bg-slate-800/20 backdrop-blur-sm p-5 rounded-xl hover:border-slate-700/80 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {item.role}
                  </h3>
                  <p className="text-xs font-semibold text-blue-400">
                    {item.company}
                  </p>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 sm:text-right">
                  {item.period}
                </span>
              </div>
              
              <ul className="space-y-2">
                {item.highlights.map((bullet, i) => (
                  <li key={i} className="text-xs text-slate-300 leading-relaxed list-disc list-inside marker:text-slate-600">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}