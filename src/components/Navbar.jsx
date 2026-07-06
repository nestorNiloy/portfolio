// src/components/Navbar.jsx
import React from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-900 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Branding Logo */}
        <span className="font-mono text-sm font-bold tracking-tight text-white select-none">
          niloy<span className="text-blue-500">.barua</span>
        </span>
        
        {/* Navigation Elements */}
        <div className="flex items-center gap-6">
          <a 
            href="#projects" 
            className="text-xs font-semibold text-slate-400 hover:text-white transition-colors duration-200"
          >
            Projects
          </a>
          <a 
            href="#architecture" 
            className="text-xs font-semibold text-slate-400 hover:text-white transition-colors duration-200"
          >
            Metrics
          </a>
          <a 
            href="#skills" 
            className="text-xs font-semibold text-slate-400 hover:text-white transition-colors duration-200"
          >
            Skills
          </a>
          <a 
            href="#experience" 
            className="text-xs font-semibold text-slate-400 hover:text-white transition-colors duration-200"
          >
            Experience
          </a>
          
          {/* Divider line before action toggle */}
          <span className="h-4 w-[1px] bg-slate-800" aria-hidden="true" />
          
          {/* Embedded Theme Controller Button */}
          <ThemeToggle /> 
        </div>
      </div>
    </nav>
  );
}