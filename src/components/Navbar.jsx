// src/components/Navbar.jsx
import React from 'react';
import Button from './Button';

export default function Navbar() {
  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Timeline', href: '#timeline' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/80 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo / Branding */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight text-white">
            Niloy<span className="text-blue-400">Barua</span>
          </span>
          <span className="rounded-md bg-slate-800 border border-slate-700/60 px-2 py-0.5 text-xs font-semibold text-slate-300">
            Software Engineer
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <Button variant="secondary" onClick={() => window.open('https://github.com/nestorNiloy', '_blank')}>
            GitHub
          </Button>
          <Button variant="primary">
            Download CV
          </Button>
        </div>

      </div>
    </nav>
  );
}