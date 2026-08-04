'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import Link from 'next/link';
import { Plus, Minus } from 'lucide-react';
import { CoverageEntry, FEATURED_IDS } from '@/lib/coverage';
import { COMPANIES } from '@/lib/fund';

function companyName(id: string) {
  return COMPANIES.find((c) => c.id === id)?.name ?? id;
}

/**
 * One note in the stream. Collapsed it shows the date, headline and any
 * companies it touches. Expanded it shows the full analysis and sources.
 */
export function EntryRow({ entry, showCompanies = true }: { entry: CoverageEntry; showCompanies?: boolean }) {
  const [open, setOpen] = useState(false);
  const paragraphs = entry.analysis.split('\n\n');
  const isShort = entry.analysis.length < 340;

  return (
    <article className="border-b border-stone-light">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left pt-6 pb-5 flex items-start justify-between gap-6 group"
        data-cursor="hover"
        aria-expanded={open}
      >
        <div className="flex-1">
          <div className="font-mono text-[10px] uppercase tracking-widest text-stone-mid mb-2 flex flex-wrap items-center gap-x-2 gap-y-1">
            {FEATURED_IDS.has(entry.id) && (
              <span aria-label="One I would start with" title="One I would start with" className="text-accent">
                &#9679;
              </span>
            )}
            <span>{entry.entryDate}</span>
            {entry.scope === 'industry' && <span className="text-stone-mid/70">/ Industry</span>}
            {showCompanies &&
              entry.relatedCompanyIds?.map((id) => (
                <span key={id} className="text-accent">
                  / {companyName(id)}
                </span>
              ))}
            {entry.status === 'retrospective' && <span className="text-accent-warm">/ Looking back</span>}
            {entry.status === 'superseded' && <span className="text-accent-warm">/ I changed my mind later</span>}
          </div>
          <h3 className="font-sans text-[17px] md:text-[18px] text-obsidian leading-snug group-hover:text-accent transition-colors max-w-[680px]">
            {entry.headline}
          </h3>
        </div>
        <div className="flex-shrink-0 mt-1 text-stone-mid group-hover:text-accent transition-colors">
          {open ? <Minus size={15} /> : <Plus size={15} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pr-8 max-w-[680px]">
              {entry.eventDate && (
                <div className="font-mono text-[9px] uppercase tracking-widest text-stone-mid mb-4">
                  Event: {entry.eventDate}
                </div>
              )}

              <div className={isShort ? 'space-y-4' : 'space-y-5'}>
                {paragraphs.map((p, i) => (
                  <p key={i} className="font-sans font-light text-[15px] leading-[1.8] text-ink">
                    {p}
                  </p>
                ))}
              </div>

              {entry.relatedCompanyIds && entry.relatedCompanyIds.length > 0 && (
                <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1">
                  {entry.relatedCompanyIds.map((id) => (
                    <Link
                      key={id}
                      href={`/fund/${id}`}
                      className="font-mono text-[10px] uppercase tracking-widest text-accent hover:text-obsidian transition-colors cursor-none"
                      data-cursor="hover"
                    >
                      {companyName(id)} &rarr;
                    </Link>
                  ))}
                </div>
              )}

              {entry.sources.length > 0 && (
                <div className="mt-7 pt-4 border-t border-stone-light">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-stone-mid mb-2">
                    {entry.sources.length === 1 ? 'Source' : 'Sources'}
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {entry.sources.map((s) => (
                      <li key={s.url}>
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-sans text-[13px] text-stone-mid hover:text-accent transition-colors cursor-none"
                          data-cursor="hover"
                        >
                          {s.title}
                          <span className="text-stone-mid/70">
                            {' '}
                            &middot; {s.publisher}
                            {s.publishedAt ? `, ${s.publishedAt}` : ''}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
