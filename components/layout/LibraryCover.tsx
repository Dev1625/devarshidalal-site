'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

/**
 * Placeholder shown in place of the Library while it is being edited.
 * Rendered instead of the real page when LIBRARY_PUBLISHED is false.
 */
export function LibraryCover() {
  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-[640px] flex-col justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="mb-10 font-serif text-4xl leading-tight tracking-tight text-obsidian md:text-5xl">
          Currently updating essays. Check back soon.
        </h1>

        <div className="flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-stone-light pt-7">
          <Link
            href="/fund"
            className="font-mono text-[11px] uppercase tracking-widest text-accent underline underline-offset-4 transition-colors hover:text-obsidian"
            data-cursor="hover"
          >
            Healthcare research
          </Link>
          <Link
            href="/research"
            className="font-mono text-[11px] uppercase tracking-widest text-stone-mid transition-colors hover:text-obsidian"
            data-cursor="hover"
          >
            Research
          </Link>
          <Link
            href="/"
            className="font-mono text-[11px] uppercase tracking-widest text-stone-mid transition-colors hover:text-obsidian"
            data-cursor="hover"
          >
            Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
