'use client';
import React from 'react'
import { useEffect, useRef } from 'react';

type LinkItem = { id: string; label: string };
const LINKS: LinkItem[] = [
  { id: 'features', label: 'Features' },
  { id: 'suite', label: 'Key Benefits' },
  { id: 'why-choose-us',      label: 'Why Choose Us' },
  { id: 'resources',label: 'Resources' },
  { id: 'contact',  label: 'Contact' },
];
export default function Header() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Scroll smoothly to section, no highlight changes
  const goto = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 112; // header height in px
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/95 border-b border-gray-200 dark:border-gray-800 shadow-md">
      <nav className="container mx-auto flex items-center justify-between px-10 h-[5rem]">
        {/* Logo */}
        <button
          onClick={goTop}
          className="text-2xl font-extrabold bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 bg-clip-text text-transparent hover:opacity-90 transition"
          aria-label="Go to top"
        >
          PCLnXAI
        </button>

        {/* Nav Links */}
        <div
          ref={containerRef}
          className="flex items-center gap-5 text-l font-medium text-gray-800"
        >
          {LINKS.map(({ id, label }) => (
            <a
              key={id}
              ref={(el) => { linkRefs.current[id] = el}}
              href={`#${id}`}
              onClick={e => {
                e.preventDefault();
                goto(id);
              }}
              className="relative py-1 px-2 text-gray-700 opacity-80 hover:opacity-100 
                transition-colors duration-300 group"
            >
              {label}
              {/* Hover underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 rounded-full
                group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => goto('contact')}
          className="rounded-xl px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
        >
          🚀 Schedule Demo
        </button>
      </nav>
    </header>
  );
}
