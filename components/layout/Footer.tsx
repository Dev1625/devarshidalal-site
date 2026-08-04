'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-obsidian flex items-center justify-between px-8 py-3 bg-bone">
      <div className="font-mono text-[9px] uppercase tracking-widest text-obsidian">
        © {new Date().getFullYear()} Devarshi Dalal // CLINICAL_EXECUTIVE
      </div>
      <div className="font-mono text-[9px] uppercase tracking-widest flex items-center text-obsidian">
        <span className="w-[6px] h-[6px] bg-accent-warm inline-block mr-2" />
        NETWORK: SECURE/ENCRYPTED
      </div>
    </footer>
  );
}
