'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const pathname = usePathname();

  const getLinkClasses = (href: string) => {
    const isActive = pathname === href;
    const baseClasses = "px-4 py-3 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-brand/40 transition-all duration-200 shadow-sm hover:shadow-md";
    
    if (isActive) {
      return `${baseClasses} bg-brand text-brandFg shadow-md`;
    }
    
    return `${baseClasses} text-muted hover:text-brand hover:bg-brand/5 active:bg-brand/10`;
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-bg/70 border-b border-card">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-text font-semibold text-xl tracking-tight hover:text-brand focus:outline-none focus:ring-2 focus:ring-brand/40 focus:ring-offset-2 focus:ring-offset-bg rounded-lg px-2 py-1 -mx-2 -my-1 transition-colors"
          >
            MCR Estate Management
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <Link 
              href="/" 
              className={getLinkClasses('/')}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={getLinkClasses('/about')}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className={getLinkClasses('/services')}
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className={getLinkClasses('/contact')}
            >
              Contact
            </Link>
          </nav>

          {/* Theme Toggle */}
          <div className="flex items-center ml-6">
            <ThemeToggle />
          </div>

          {/* Mobile menu button - TODO: implement mobile menu */}
          <button className="md:hidden inline-flex items-center justify-center p-3 rounded-xl text-muted hover:text-brand hover:bg-brand/5 focus:outline-none focus:ring-2 focus:ring-brand/40 transition-all duration-200 shadow-sm hover:shadow-md">
            <span className="sr-only">Open main menu</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}