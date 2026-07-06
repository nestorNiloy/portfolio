// src/components/Button.jsx
import React from 'react';

export default function Button({ children, variant = 'primary', ...props }) {
  const baseStyles = "px-5 py-2.5 rounded-xl font-medium transition-all duration-200 text-sm active:scale-95 cursor-pointer";
  
  const variants = {
    // Premium Interactive Blue for actions
    primary: "bg-[#2563EB] text-white hover:bg-[#1d4ed8] shadow-sm hover:shadow-blue-500/20",
    // Clean, modern light-mode card look (Not dull!)
    secondary: "bg-white text-[#475569] border border-[#E2E8F0] hover:bg-[#F8FAFC] shadow-sm",
    // Ghost variant for navigation links or secondary toggles
    ghost: "text-[#475569] hover:bg-[#F1F5F9] dark:text-[#94A3B8] dark:hover:bg-[#1E293B]"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}