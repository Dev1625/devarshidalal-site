'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Mail, Linkedin, Phone, UserPlus } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-20 min-h-0">
      <div className="w-full max-w-[600px] flex flex-col items-center text-center">
        
        {/* Headshot */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[120px] h-[120px] rounded-none border border-obsidian overflow-hidden mb-12 group cursor-none"
          data-cursor="hover"
        >
          {/* Noise overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none mix-blend-overlay opacity-30" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
          
          <Image
            src="/headshot.png"
            alt="Devarshi Dalal"
            fill
            className="object-cover transition-all duration-700 ease-out"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Introduction */}
        <motion.p 
          className="font-sans font-light text-xl text-stone-mid max-w-[480px] mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Devarshi Dalal. Business, mathematical biology, and neuroscience at Michigan. I work at the intersection of
          medicine and capital.
        </motion.p>

        {/* Shortcut Dock */}
        <motion.div 
          className="flex items-center justify-center gap-8 pt-10 border-t border-stone-light/50 w-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { icon: UserPlus, label: 'Add to contacts', href: '/devarshi.vcf', group: 'contact' },
            { icon: Mail, label: 'devdalal@umich.edu', href: 'mailto:devdalal@umich.edu', group: 'email' },
            {
              icon: Linkedin,
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/devarshidalal/',
              group: 'linkedin',
            },
            { icon: Phone, label: '(248) 289-5537', href: 'tel:+12482895537', group: 'phone' },
          ].map((item, idx) => (
            <a 
              key={idx} 
              href={item.href} 
              className="flex flex-col items-center gap-3 group relative pointer-events-auto"
              data-cursor="hover"
            >
              <div className="text-stone-mid group-hover:text-accent transition-colors duration-300 transform group-hover:-translate-y-1">
                <item.icon size={20} strokeWidth={1.5} />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-stone-mid opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-6 whitespace-nowrap">
                {item.label}
              </span>
            </a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="mt-24 flex flex-col items-center gap-4 text-stone-mid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div 
            className="w-[1px] h-12 bg-stone-light origin-top"
            animate={{ scaleY: [0, 1, 0], translateY: [0, 24, 48] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
          />
          <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        </motion.div>

      </div>
    </div>
  );
}
