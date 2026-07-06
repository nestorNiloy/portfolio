// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F6F8FB] text-[#0F172A]">
      <Navbar />
      
      {/* Main layout container to align with fixed header */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        
        {/* Placeholder container for the Projects section coming up next */}
        <div id="projects" className="py-20 text-center text-[#64748B] border-t border-[#E2E8F0]">
          Projects Section Blueprint Ready... 🛠️
        </div>
      </main>
    </div>
  );
}