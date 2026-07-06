// src/components/Timeline.jsx
import React from 'react';

export default function Timeline() {
  const coreCompetencies = [
    "Layered Architecture (MVC / Repository Pattern)",
    "Asynchronous Processing & Background Tasks",
    "REST API Design & Documentation",
    "Relational Database Design & Connection Pooling",
    "State Machine Workflow Engineering",
    "Cloud Infrastructure & Automated Deployment"
  ];

  const timelineEvents = [
    {
      year: "2026",
      title: "AI Job Discovery & Automation Platform",
      description: "Architected asynchronous workflow systems with decoupled service/repository layers and complex state-machine tracking mechanics."
    },
    {
      year: "2025",
      title: "Smart Public Transport Intelligence Platform",
      description: "Engineered high-concurrency API pipelines processing live transit feeds and route scheduling matrix optimizations."
    },
    {
      year: "2025",
      title: "Enterprise ATM Transaction Dashboard",
      description: "Built full-stack financial analytics system leveraging Java Spring Boot backends and responsive frontend metrics pipelines."
    }
  ];

  return (
    <section id="architecture" className="py-20 border-t border-slate-800">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Side: Architectural Competencies */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
              Core Frameworks
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white">
              System Architecture Fundamentals
            </h2>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              A solid engineering foundation goes beyond raw syntax. I design platforms around scalable design patterns, decoupled boundaries, and rigorous performance metrics.
            </p>
          </div>

          <div className="space-y-2.5">
            {coreCompetencies.map((skill, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-3.5 bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-[0_4px_12px_-2px_rgba(0,0,0,0.2)] text-xs font-semibold text-slate-200"
              >
                <span className="flex h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Interactive Production Timeline */}
        <div id="timeline" className="lg:col-span-7 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
              Systems Timeline
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white">
              Engineering Milestones
            </h2>
          </div>

          <div className="relative border-l-2 border-slate-800 ml-4 pl-6 space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative group">
                {/* Timeline Node Dot */}
                <span className="absolute -left-[31px] top-1 flex h-4 w-4 rounded-full border-2 border-blue-500 bg-slate-900 group-hover:bg-blue-400 transition-colors duration-200 shadow-[0_0_8px_rgba(59,130,246,0.4)]" />
                
                <div className="p-5 bg-slate-800/40 backdrop-blur-md border border-slate-700/50 hover:border-blue-500/30 rounded-xl shadow-[0_4px_12px_-2px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_24px_-10px_rgba(37,99,235,0.1)] transition-all duration-300">
                  <span className="text-xs font-bold text-blue-400">
                    {event.year}
                  </span>
                  <h4 className="text-base font-bold text-white mt-1 group-hover:text-blue-400 transition-colors">
                    {event.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}