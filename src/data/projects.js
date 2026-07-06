// src/data/projects.js

export const projectsData = [
  {
    title: "Dual-Study Application Tracker REST API",
    description: "A secure, high-concurrency backend solution built to monitor and organize enterprise pipeline applications.",
    metrics: ["Java", "Spring Boot", "SQLite", "REST API"],
    challenges: [
      "Designed thread-safe SQLite connection pooling mechanisms to avoid database locking during concurrent writes.",
      "Implemented a rigid structural state machine to handle application lifecycle progression cleanly."
    ],
    stats: {
      primary: "35+",
      label: "API Endpoints Managed"
    },
    github: "https://github.com/nestorNiloy",
    /* Added project-specific architecture breakdown */
    architecture: {
      pattern: "Layered Architecture (Controller-Service-Repository)",
      details: [
        "Decoupled route handling layers from transactional core business logic services.",
        "Data Access Layer (DAO) isolated via Hibernate/JPA object-relational abstraction maps.",
        "Integrated central exception interceptors to enforce uniform error telemetry schema formats."
      ]
    }
  },
  {
    title: "Home Security & Automation Core",
    description: "An embedded event-driven security architecture providing automated motion analytics and telemetry collection.",
    metrics: ["C++", "NodeMCU", "PIR Sensors", "Asynchronous Processing"],
    challenges: [
      "Optimized polling hardware routines into asynchronous edge interrupts to capture physical motion instantly.",
      "Engineered low-overhead memory buffers to eliminate memory fragmentation bugs over prolonged uptimes."
    ],
    stats: {
      primary: "11,000+",
      label: "Schedules Processed"
    },
    github: "https://github.com/nestorNiloy",
    /* Added project-specific architecture breakdown */
    architecture: {
      pattern: "Event-Driven Firmware Architecture",
      details: [
        "Edge hardware sensors mapped directly to asynchronous hardware interrupt routines.",
        "Non-blocking scheduler loops manage network socket states without slowing down physical metric sampling.",
        "Integrated watch-dog timer reset boundaries to self-recover from local hardware hang ups."
      ]
    }
  }
];