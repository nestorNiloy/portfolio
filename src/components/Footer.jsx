// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-[#E2E8F0] bg-white mt-20">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#64748B]">
        <div>
          <p>© 2026 Niloy Barua. Built with React, Vite, and Tailwind v4.</p>
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/nestorNiloy" target="_blank" rel="noreferrer" className="hover:text-[#2563EB] transition-colors">
            GitHub
          </a>
          <a href="mailto:your.email@domain.com" className="hover:text-[#2563EB] transition-colors">
            Contact Email
          </a>
        </div>
      </div>
    </footer>
  );
}