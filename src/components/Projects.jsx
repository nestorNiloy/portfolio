// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { projectsData } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-slate-800">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-16 text-center"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
          Production Systems
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Engineered Projects & Platforms
        </h2>
        <p className="mt-3 max-w-2xl text-base text-slate-400">
          Skip the basic tutorials. These are production-style software solutions engineered with structural patterns, real data pipelines, and architectural depth.
        </p>
      </motion.div>

      <div className="space-y-12 max-w-5xl mx-auto">
        {projectsData.map((project, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            /* Added relative layer & silver gradient border transition */
            className="group relative bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.4)] flex flex-col md:flex-row gap-8 items-start overflow-hidden border border-slate-800/80 hover:border-slate-400/40 transition-colors duration-500"
          >
            {/* Embedded High-End Silver Border Accent Line */}
            <div className="absolute inset-0 border border-transparent group-hover:border-gradient-to-r group-hover:from-slate-500/20 group-hover:via-white/20 group-hover:to-slate-500/20 rounded-2xl pointer-events-none transition-all duration-500" />

            {/* Left Column: Info & Details */}
            <div className="flex-1 space-y-4 relative z-10">
              <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.description}
              </p>
              
              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.metrics.map((m, i) => (
                  <span key={i} className="text-xs font-semibold text-blue-300 bg-blue-950/60 border border-blue-800/50 px-2.5 py-1 rounded-md">
                    {m}
                  </span>
                ))}
              </div>

              {/* Engineering Challenges */}
              <div className="pt-4 border-t border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Key Engineering Challenges Solved:
                </h4>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="leading-normal">{c}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Key System Metric & Actions */}
            <div className="w-full md:w-52 flex flex-col justify-between h-full md:self-stretch border-t md:border-t-0 md:border-l border-slate-800 pt-6 md:pt-0 md:pl-8 space-y-6 relative z-10">
              <div className="bg-slate-950/60 rounded-xl p-4 text-center border border-slate-800">
                <span className="block text-2xl font-black text-blue-400 tracking-tight">
                  {project.stats.primary}
                </span>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">
                  {project.stats.label}
                </span>
              </div>

              <div className="flex flex-col gap-2.5">
                <Button variant="primary" onClick={() => window.open(project.github, '_blank')}>
                  Source Code
                </Button>
                <Button variant="secondary" onClick={() => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' })}>
                  System Architecture
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}