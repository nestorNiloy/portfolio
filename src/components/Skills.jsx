// src/components/Skills.jsx
import React from 'react';
import { skillsData } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-slate-800">
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
          Capabilities
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Technical Frameworks & Architecture
        </h2>
        <p className="mt-3 max-w-2xl text-base text-slate-400">
          Demonstrating system competency through layered boundaries, decoupled routing patterns, and strict data management policies.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillsData.map((skillGroup, index) => (
          <div 
            key={index} 
            className="border border-slate-700/50 bg-slate-800/40 backdrop-blur-md p-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)] hover:border-blue-500/30 transition-all duration-300"
          >
            <h3 className="text-base font-bold text-white tracking-tight mb-4 border-b border-slate-700/60 pb-2">
              {skillGroup.category}
            </h3>
            <ul className="space-y-3">
              {skillGroup.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs font-medium text-slate-300 leading-normal">
                  <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.6)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
