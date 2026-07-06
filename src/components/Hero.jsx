// src/components/Hero.jsx
import React from 'react';
import Button from './Button';

export default function Hero() {
  const metrics = [
    { value: '35+', label: 'REST API Endpoints' },
    { value: '6+', label: 'Production-Style Projects' },
    { value: '5', label: 'Cloud Deployments' },
    { value: '4', label: 'Core Languages (Py, Java, JS)' },
  ];

  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Sleek blue glow backdrop */}
      <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_50%)]" />

      <div className="flex flex-col items-center text-center">
        {/* Main Header Tagline */}
        <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Software Engineer & <br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-200 to-blue-500 bg-clip-text text-transparent">
            Backend Developer
          </span>
        </h1>

        {/* Versatility Subtitle */}
        <p className="mt-6 max-w-2xl text-base md:text-lg text-slate-300 leading-relaxed">
          Building production-style analytics platforms, asynchronous automation workflows, 
          and enterprise Java systems with robust engineering fundamentals.
        </p>

        {/* Primary Call to Actions */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button variant="primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore Systems
          </Button>
          <Button variant="secondary">
            View Architecture
          </Button>
        </div>

        {/* Transformed Silver-Glass Engineering Highlights Grid */}
        <div className="mt-20 w-full max-w-5xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)] rounded-2xl grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-700/50 overflow-hidden">
          {metrics.map((metric, idx) => (
            <div key={idx} className="p-6 flex flex-col items-center justify-center hover:bg-slate-800/30 transition-colors">
              <span className="text-3xl font-black tracking-tight text-blue-400 sm:text-4xl shadow-sm">
                {metric.value}
              </span>
              <span className="mt-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 text-center">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}