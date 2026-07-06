// src/components/Projects.jsx
import React from 'react';
import Button from './Button';

export default function Projects() {
  const projects = [
    {
      title: "Smart Public Transport Intelligence Platform",
      description: "An asynchronous data analytics engine processing real-time public transit schedules, network latencies, and route optimization metrics.",
      metrics: ["Async Architecture", "11+ REST APIs", "Live DB Integration", "Railway Deployed"],
      stats: { primary: "11,000+", label: "Schedules Processed" },
      challenges: ["Handling high-concurrency API data streams", "Implementing thread-safe database connection pooling"],
      github: "https://github.com/nestorNiloy",
    },
    {
      title: "AI Job Discovery & Automation Platform",
      description: "An asynchronous backend workflow engine using an enterprise repository pattern to scrape job boards, trigger synthetic AI tailoring, and manage status state machines.",
      metrics: ["FastAPI Async", "SQLAlchemy 2.0", "Repository Pattern", "Adzuna API"],
      stats: { primary: "35+", label: "API Endpoints" },
      challenges: ["Building deterministic state machine transitions", "Decoupling service layers from active database routers"],
      github: "https://github.com/nestorNiloy/portfolio",
    },
    {
      title: "Enterprise ATM Transaction Dashboard",
      description: "A full-stack financial analytics interface tracking metrics, volume optimization, and failure vectors across retail transactional banking systems.",
      metrics: ["Spring Boot", "REST Architecture", "Data Engineering", "React Frontend"],
      stats: { primary: "2,790", label: "Simulated ATMs" },
      challenges: ["Aggregating high-volume transactional logs cleanly", "Designing responsive light-mode metrics graphs"],
      github: "https://github.com/nestorNiloy",
    }
  ];

  return (
    <section id="projects" className="py-20 border-t border-[#E2E8F0]">
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-[#2563EB]/5 px-3 py-1 rounded-full">
          Production Systems
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl">
          Engineered Projects & Platforms
        </h2>
        <p className="mt-3 max-w-2xl text-base text-[#475569]">
          Skip the basic tutorials. These are production-style software solutions engineered with structural patterns, real data pipelines, and architectural depth.
        </p>
      </div>

      {/* Structured Feature-Product Grid */}
      <div className="space-y-12 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="group relative border border-[#E2E8F0] bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-8 items-start">
            
            {/* Left Column: Info & Details */}
            <div className="flex-1 space-y-4">
              <h3 className="text-xl font-bold text-[#0F172A] tracking-tight group-hover:text-[#2563EB] transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                {project.description}
              </p>
              
              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.metrics.map((m, i) => (
                  <span key={i} className="text-xs font-medium text-[#475569] bg-[#F1F5F9] px-2.5 py-1 rounded-md">
                    {m}
                  </span>
                ))}
              </div>

              {/* Engineering Challenges Addressed */}
              <div className="pt-4 border-t border-[#F1F5F9]">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-2">
                  Key Engineering Challenges Solved:
                </h4>
                <ul className="text-xs text-[#475569] space-y-1.5 list-disc list-inside">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="leading-normal">{c}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Key System Metric & Actions */}
            <div className="w-full md:w-52 flex flex-col justify-between h-full md:self-stretch border-t md:border-t-0 md:border-l border-[#E2E8F0] pt-6 md:pt-0 md:pl-8 space-y-6">
              <div className="bg-[#F8FAFC] rounded-xl p-4 text-center border border-[#F1F5F9]">
                <span className="block text-2xl font-bold text-[#2563EB] tracking-tight">
                  {project.stats.primary}
                </span>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#64748B] mt-1">
                  {project.stats.label}
                </span>
              </div>

              <div className="flex flex-col gap-2.5">
                <Button variant="primary" onClick={() => window.open(project.github, '_blank')}>
                  Source Code
                </Button>
                <Button variant="secondary">
                  System Architecture
                </Button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}