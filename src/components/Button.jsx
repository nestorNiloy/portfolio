// src/components/Button.jsx
import React from 'react';

export default function Button({ children, variant = 'primary', ...props }) {
  const baseStyles = "px-5 py-2.5 rounded-xl font-semibold transition-all duration-200 text-sm active:scale-95 cursor-pointer";
  
  const variants = {
    // Rich Blue primary actions
    primary: "bg-blue-600 text-white hover:bg-blue-500 shadow-sm shadow-blue-900/20 border border-blue-500/20",
    // Clean metallic silver-slate look
    secondary: "bg-slate-800 text-slate-200 border border-slate-700/80 hover:bg-slate-700/60 shadow-sm",
    // Ghost variant
    ghost: "text-slate-400 hover:bg-slate-800/60 hover:text-white"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}