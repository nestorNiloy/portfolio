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
      {/* Premium subtle gradient background accent */}
      <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_50%)]" />

      <div className="flex flex-col items-center text-center">
        {/* Main Header Tagline */}
        <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-[#0F172A] sm:text-6xl lg:text-7xl">
          Software Engineer & <br />
          <span className="bg-gradient-to-r from-[#2563EB] to-[#3B82F6] bg-clip-text text-transparent">
            Backend Developer
          </span>
        </h1>

        {/* Versatility Subtitle */}
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-[#475569] leading-relaxed">
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

        {/* Engineering Highlights Grid */}
        <div className="mt-20 w-full max-w-5xl border border-[#E2E8F0] bg-white shadow-sm rounded-2xl grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#E2E8F0] overflow-hidden">
          {metrics.map((metric, idx) => (
            <div key={idx} className="p-6 flex flex-col items-center justify-center bg-gradient-to-b hover:from-white hover:to-[#F8FAFC] transition-colors">
              <span className="text-3xl font-bold tracking-tight text-[#2563EB] sm:text-4xl">
                {metric.value}
              </span>
              <span className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#64748B] text-center">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}