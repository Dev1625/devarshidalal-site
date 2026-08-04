'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const LINKS = [
  { 
    name: 'Research', 
    href: '/research',
    sublinks: [
      { name: 'WriVision QC', href: '/research/wrivision-quality-control' },
      { name: 'USP33 in MS', href: '/research/usp33-deubiquitination-ms' }
    ]
  },
  { name: 'Healthcare', href: '/fund' },
  { name: 'Library', href: '/library' },
];

export function Nav() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isHoveringName, setIsHoveringName] = useState(false);
  
  const bgOpacity = useTransform(scrollY, [0, 40], [0, 0.9]);
  const blur = useTransform(scrollY, [0, 40], [0, 8]);

  return (
    <>
      <nav 
        className="fixed top-0 left-0 right-0 z-[800] px-8 h-16 flex items-center justify-between border-b border-obsidian bg-bone"
      >
        <div className="flex-1 lg:flex-none lg:w-[300px] flex items-center">
          <Link href="/" className="relative flex items-center h-8 overflow-hidden group cursor-none" 
            onMouseEnter={() => setIsHoveringName(true)}
            onMouseLeave={() => setIsHoveringName(false)}
            data-cursor="hover"
          >
            <motion.span 
              className="font-serif text-2xl font-medium tracking-tight text-obsidian leading-none absolute left-0"
              initial={false}
              animate={{ y: isHoveringName ? '-100%' : '0%', opacity: isHoveringName ? 0 : 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              Devarshi
            </motion.span>
            <motion.span 
              className="font-serif text-2xl font-medium tracking-tight text-obsidian leading-none"
              style={{ opacity: 0, pointerEvents: 'none', visibility: 'hidden' }}
            >
              Devarshi
            </motion.span>
            <motion.span 
              className="font-serif text-2xl font-medium tracking-tight text-obsidian leading-none absolute left-0"
              initial={false}
              animate={{ y: isHoveringName ? '0%' : '100%', opacity: isHoveringName ? 1 : 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              Dalal.
            </motion.span>
          </Link>
        </div>
        
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6">
          {LINKS.map((link) => (
            <div key={link.href} className="relative group/navitem">
              <Link 
                href={link.href}
                data-cursor="hover"
                className={`font-mono text-[11px] tracking-[0.1em] uppercase relative transition-colors py-4 ${
                  pathname.startsWith(link.href) ? 'text-accent font-bold' : 'text-obsidian hover:text-accent'
                }`}
              >
                {link.name}
              </Link>
              {link.sublinks && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-2 opacity-0 pointer-events-none group-hover/navitem:opacity-100 group-hover/navitem:pointer-events-auto transition-opacity duration-200 min-w-[200px] flex flex-col bg-bone border border-obsidian p-4 shadow-sm z-50">
                  {link.sublinks.map(sublink => (
                    <Link 
                      key={sublink.href} 
                      href={sublink.href}
                      data-cursor="hover"
                      className="font-mono text-[10px] tracking-widest text-obsidian hover:text-accent py-2 uppercase transition-colors whitespace-nowrap"
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="hidden md:flex flex-1 lg:flex-none lg:w-[300px] justify-end items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-none bg-accent-warm animate-pulse" />
          <span className="font-mono text-[9px] tracking-widest text-obsidian uppercase">
            Status: Open to Opportunities
          </span>
        </div>

        <button 
          className="md:hidden p-2 text-obsidian"
          onClick={() => setIsMobileOpen(true)}
        >
          <span className="sr-only">Open menu</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </nav>

      {/* Mobile Nav Takeover */}
      {isMobileOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] bg-bone flex flex-col justify-center px-8"
        >
          <button 
            className="absolute top-8 right-6 p-2 text-obsidian"
            onClick={() => setIsMobileOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Link href="/" className="font-serif text-4xl text-obsidian" onClick={() => setIsMobileOpen(false)}>
                Home
              </Link>
            </motion.div>
            
            {LINKS.map((link, i) => (
              <motion.div 
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + (i + 1) * 0.1 }}
              >
                <Link 
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`font-serif text-4xl ${pathname.startsWith(link.href) ? 'text-accent' : 'text-obsidian'}`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
