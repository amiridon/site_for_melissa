'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage and system preference
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (stored) {
      setTheme(stored);
      document.documentElement.setAttribute('data-theme', stored);
    } else if (prefersDark) {
      setTheme('dark');
      document.documentElement.removeAttribute('data-theme'); // default is dark
    } else {
      setTheme('light');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted">Light</span>
        <div className="w-16 h-6 rounded-full bg-border relative overflow-hidden shadow-inner">
          <div className="absolute inset-0.5 rounded-full bg-bg shadow-inner"></div>
          <div className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-brand shadow-md transform translate-x-0 transition-transform duration-300"></div>
        </div>
        <span className="text-sm text-muted">Dark</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span className={`text-sm transition-colors duration-300 ${theme === 'light' ? 'text-brand font-medium' : 'text-muted'}`}>
        Light
      </span>
      
      <button
        onClick={toggleTheme}
        className="w-16 h-6 rounded-full bg-border relative overflow-hidden shadow-inner transition-all duration-300 
                   focus:outline-none focus:ring-2 focus:ring-brand/40 focus:ring-offset-2 focus:ring-offset-bg
                   hover:shadow-lg"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      >
        {/* Track background with inset shadow */}
        <div className="absolute inset-0.5 rounded-full bg-bg shadow-inner"></div>
        
        {/* Progress fill */}
        <div className={`
          absolute top-0.5 left-0.5 h-5 rounded-full transition-all duration-300 shadow-sm
          ${theme === 'dark' 
            ? 'w-10 bg-gradient-to-r from-brand to-brandHover' 
            : 'w-5 bg-gradient-to-r from-brand to-brandHover'
          }
        `}></div>
        
        {/* Handle */}
        <div className={`
          absolute top-0.5 w-5 h-5 rounded-full transition-all duration-300 transform shadow-md
          ${theme === 'dark' ? 'translate-x-10 left-0.5' : 'translate-x-0 left-0.5'}
          bg-gradient-to-br from-white to-gray-100 border border-gray-200
        `}></div>
      </button>
      
      <span className={`text-sm transition-colors duration-300 ${theme === 'dark' ? 'text-brand font-medium' : 'text-muted'}`}>
        Dark
      </span>
    </div>
  );
}