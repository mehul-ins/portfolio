import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'SCHEMA', href: '#home' },
  { label: 'ED-01', href: '#education' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJ-X', href: '#projects' },
  { label: 'EXP-12', href: '#experience' },
  { label: 'CORE', href: '#connect' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 border border-[var(--accent)] flex items-center justify-center">
            <span className="text-[var(--accent)] text-xs font-bold">MV</span>
          </div>
          <span className="marker hidden sm:block">PORTFOLIO.SYS_REF</span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {NAV_ITEMS.map((item, i) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="mono text-[10px] tracking-widest text-white/50 hover:text-[var(--accent)] transition-colors"
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1"
        >
          <div className={`w-6 h-[1px] bg-[var(--accent)] transition-all ${mobileOpen ? 'rotate-45 translate-y-[2px]' : ''}`} />
          <div className={`w-6 h-[1px] bg-[var(--accent)] transition-all ${mobileOpen ? '-rotate-45 -translate-y-[2px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#050505] border-b border-white/5 py-8 px-6 md:hidden"
          >
            <ul className="flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="mono text-xs tracking-[0.3em] text-white/60"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}