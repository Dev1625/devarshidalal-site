'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { FOUNDER_NOTES, FounderNote } from '@/lib/founders';

/**
 * One entry on the line. On desktop it sits in the left or right column by
 * index and the text runs toward the centre rule. On mobile the rule moves to
 * the left edge and everything stacks under it.
 *
 * The node lives on the row wrapper rather than in here, because this element
 * carries the column padding and anything positioned against it lands off the
 * rule by exactly that padding.
 *
 * Entries animate on mount rather than on scroll. A scroll-triggered reveal
 * left three of them stranded at zero opacity when the page was jumped to the
 * bottom, and invisible content is a worse failure than a missed animation.
 */
function FounderCard({ note, side, index }: { note: FounderNote; side: 'left' | 'right'; index: number }) {
  const alignRight = side === 'left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1], delay: Math.min(index * 0.06, 0.5) }}
      className={
        alignRight
          ? 'pl-10 md:col-start-1 md:row-start-1 md:pl-0 md:pr-14 md:text-right'
          : 'pl-10 md:col-start-2 md:row-start-1 md:pl-14 md:pr-0'
      }
    >
      <h3 className="font-serif text-[26px] md:text-[31px] leading-[1.12] tracking-tight text-obsidian">
        {note.company}
      </h3>

      <div className={`mt-2.5 flex flex-wrap items-baseline gap-x-2.5 gap-y-1 ${alignRight ? 'md:justify-end' : ''}`}>
        <span className="font-sans text-[15px] text-obsidian">{note.name}</span>
        {note.role && (
          <span className="font-mono text-[10px] uppercase tracking-widest text-stone-mid">{note.role}</span>
        )}
      </div>

      {note.background && (
        <div className="font-sans text-[13px] font-light text-stone-mid mt-1.5">{note.background}</div>
      )}

      <p
        className={`font-sans font-light text-[15px] leading-[1.8] text-ink mt-4 max-w-[430px] ${
          alignRight ? 'md:ml-auto' : ''
        }`}
      >
        {note.note}
      </p>

      {note.companyId && (
        <Link
          href={`/fund/${note.companyId}`}
          data-cursor="hover"
          className={`mt-4 inline-flex items-center gap-1.5 text-stone-mid hover:text-accent transition-colors cursor-none ${
            alignRight ? 'md:flex-row-reverse' : ''
          }`}
        >
          <span className="font-mono text-[10px] uppercase tracking-widest">Read the memo</span>
          <ArrowUpRight size={12} />
        </Link>
      )}
    </motion.div>
  );
}

export function FounderTimeline() {
  return (
    <div className="relative max-w-[1000px]">
      {/* The rule. Left edge on mobile, centre on desktop. */}
      <div
        aria-hidden
        className="absolute top-2 bottom-2 w-px bg-stone-light left-[7px] md:left-1/2 md:-translate-x-1/2"
      />

      <div className="flex flex-col gap-14 md:gap-0">
        {FOUNDER_NOTES.map((note, i) => (
          <div key={note.id} className="relative md:grid md:grid-cols-2 md:pb-16">
            <span
              aria-hidden
              className="absolute top-[11px] z-10 block h-[7px] w-[7px] rounded-full bg-bone ring-1 ring-obsidian left-[4px] md:left-1/2 md:-translate-x-1/2"
            />
            <FounderCard note={note} side={i % 2 === 0 ? 'left' : 'right'} index={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
