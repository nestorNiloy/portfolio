// src/data/projects.js

export const projectsData = [
  {
    title: "Smart Public Transport Intelligence Platform",
    description: "An asynchronous data analytics engine processing real-time public transit schedules, network latencies, and route optimization metrics.",
    metrics: ["Async Architecture", "11+ REST APIs", "Live DB Integration", "Railway Deployed"],
    stats: { primary: "11,000+", label: "Schedules Processed" },
    challenges: [
      "Handling high-concurrency API data streams",
      "Implementing thread-safe database connection pooling"
    ],
    github: "https://github.com/nestorNiloy/transit-intel-platform",
  },
  {
    title: "AI Job Discovery & Application Automation Platform",
    description: "An asynchronous backend workflow engine using an enterprise repository pattern to scrape job boards, trigger synthetic AI tailoring, and manage status state machines.",
    metrics: ["FastAPI Async", "SQLAlchemy 2.0", "Repository Pattern", "Adzuna API"],
    stats: { primary: "35+", label: "API Endpoints" },
    challenges: [
      "Building deterministic state machine transitions",
      "Decoupling service layers from active database routers"
    ],
    github: "https://github.com/nestorNiloy?tab=repositories", // Directing to general repos until created
  },
  {
    title: "Enterprise ATM Transaction Dashboard",
    description: "A full-stack financial analytics interface tracking metrics, volume optimization, and failure vectors across retail transactional banking systems.",
    metrics: ["Spring Boot", "REST Architecture", "Data Engineering", "React Frontend"],
    stats: { primary: "2,790", label: "Simulated ATMs" },
    challenges: [
      "Aggregating high-volume transactional logs cleanly",
      "Designing responsive light-mode metrics graphs"
    ],
    github: "https://github.com/nestorNiloy/atm-transaction-dashboard",
  }
];