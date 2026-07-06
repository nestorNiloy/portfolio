// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Stats from './components/Stats'; // Added this
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16">
        <Hero />
        <Projects />
        <Stats /> {/* Added this */}
        <Skills />
        <Timeline />
      </main>
      <Footer />
    </div>
  );
}
