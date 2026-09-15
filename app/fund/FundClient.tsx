'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useCallback, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowUpRight, Search, X } from 'lucide-react';
import { COMPANIES, INTRO, MACRO_THESIS } from '@/lib/fund';
import { ALL_ENTRIES, FILTERS, groupByMonth, searchEntries, COVERAGE_COUNT } from '@/lib/coverage';
import { EntryRow } from '@/components/fund/EntryRow';

const TABS = [
  { id: 'thesis', label: 'The thesis' },
  { id: 'companies', label: 'Companies' },
  { id: 'following', label: 'Following' },
];

export default function FundClient({ view, filter }: { view?: string; filter?: string }) {
  const router = useRouter();

  const activeTab = TABS.some((t) => t.id === view) ? (view as string) : 'thesis';
  const activeFilter = FILTERS.some((f) => f.id === filter) ? (filter as string) : 'all';

  const go = useCallback(
    (nextView: string, nextFilter: string) => {
      const qs = new URLSearchParams();
      if (nextView !== 'thesis') qs.set('view', nextView);
      if (nextFilter !== 'all') qs.set('filter', nextFilter);
      const s = qs.toString();
      router.replace(s ? `/fund?${s}` : '/fund', { scroll: false });
    },
    [router],
  );

  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const f = FILTERS.find((x) => x.id === activeFilter) ?? FILTERS[0];
    return searchEntries(ALL_ENTRIES.filter(f.match), query);
  }, [activeFilter, query]);

  const months = useMemo(() => groupByMonth(filtered), [filtered]);

  return (
    <div className="min-h-screen relative">
      <div className="sticky top-16 z-[700] bg-bone border-b border-obsidian">
        <div className="flex w-full divide-x divide-obsidian overflow-x-auto no-scrollbar">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => go(tab.id, tab.id === 'following' ? activeFilter : 'all')}
              className={`flex-1 min-w-[130px] px-5 py-4 text-left transition-colors ${
                activeTab === tab.id ? 'bg-obsidian text-bone' : 'bg-bone text-obsidian hover:bg-stone-light/30'
              }`}
              data-cursor="hover"
            >
              <span className="font-serif text-sm italic">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <AnimatePresence mode="wait">
          {/* ═══ Thesis ═══ */}
          {activeTab === 'thesis' && (
            <motion.div
              key="thesis"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="max-w-[720px] mb-14">
                <h1 className="font-serif text-[36px] md:text-[50px] leading-[1.14] tracking-tight text-obsidian mb-8">
                  {INTRO.headline}
                </h1>
                {INTRO.body.map((p, i) => (
                  <p key={i} className="font-sans font-light text-[17px] leading-[1.85] text-ink mb-6">
                    {p}
                  </p>
                ))}
              </div>

              <div className="flex flex-col border-t border-stone-light mb-20 max-w-[900px]">
                {INTRO.parts.map((part) => (
                  <div
                    key={part.id}
                    className="grid gap-4 border-b border-stone-light py-9 md:grid-cols-[260px_1fr]"
                  >
                    <h2 className="font-serif text-lg text-obsidian leading-snug">{part.label}</h2>
                    <div className="max-w-[640px]">
                      <p className="font-sans text-[16px] font-light leading-[1.85] text-ink">{part.body}</p>
                      <button
                        onClick={() => go(part.id, 'all')}
                        data-cursor="hover"
                        className="group mt-5 flex items-center gap-1.5 text-stone-mid hover:text-accent transition-colors cursor-none"
                      >
                        <span className="font-mono text-[10px] uppercase tracking-widest">{part.cta}</span>
                        <ArrowUpRight size={12} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-obsidian pt-14 mb-20">
                <div className="font-mono text-[10px] uppercase tracking-widest text-stone-mid mb-4">
                  Where I think healthcare is, {MACRO_THESIS.version}
                </div>
                <h2 className="font-serif text-[30px] md:text-[42px] leading-[1.16] tracking-tight text-obsidian mb-10 max-w-4xl">
                  {MACRO_THESIS.headline}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 mb-14 max-w-[900px]">
                  {MACRO_THESIS.stats.map((s) => (
                    <div key={s.label} className="border-b border-stone-light pb-4">
                      <div className="font-mono text-[9px] uppercase tracking-widest text-stone-mid mb-1.5">
                        {s.label}
                      </div>
                      <div className="font-serif text-lg text-obsidian leading-snug">{s.value}</div>
                    </div>
                  ))}
                </div>

                <div className="max-w-[720px] mb-16">
                  {MACRO_THESIS.body.map((p, i) => (
                    <p key={i} className="font-sans font-light text-[17px] leading-[1.85] text-ink mb-6">
                      {p}
                    </p>
                  ))}
                </div>

                <div className="flex flex-col border-t border-stone-light max-w-[900px]">
                  {MACRO_THESIS.pillars.map((p) => (
                    <div key={p.label} className="grid gap-4 border-b border-stone-light py-9 md:grid-cols-[260px_1fr]">
                      <h3 className="font-serif text-lg text-obsidian leading-snug">{p.label}</h3>
                      <div className="max-w-[640px]">
                        <p className="font-sans text-[16px] font-light leading-[1.85] text-ink">{p.body}</p>
                        <div className="mt-5 border-l-2 border-stone-light pl-4">
                          <div className="font-mono text-[9px] uppercase tracking-widest text-stone-mid mb-1.5">
                            What would prove this wrong
                          </div>
                          <p className="font-sans text-[15px] font-light leading-[1.8] text-stone-mid">{p.test}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="max-w-[720px] mt-14">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-stone-mid mb-3">
                    Where I am least sure
                  </div>
                  <p className="font-sans font-light text-[16px] leading-[1.85] text-ink">
                    {MACRO_THESIS.whereIAmUnsure}
                  </p>
                </div>
              </div>

              <div className="border-t border-stone-light pt-14 max-w-[900px]">
                <div className="font-mono text-[10px] uppercase tracking-widest text-stone-mid mb-8">How I work</div>
                <div className="flex flex-col">
                  {INTRO.method.map((m) => (
                    <div key={m.title} className="grid gap-4 border-b border-stone-light py-8 md:grid-cols-[220px_1fr]">
                      <h3 className="font-serif text-lg text-obsidian leading-snug">{m.title}</h3>
                      <p className="font-sans text-[16px] font-light leading-[1.85] text-ink">{m.body}</p>
                    </div>
                  ))}
                </div>
                <p className="font-sans text-sm text-stone-mid leading-relaxed max-w-[680px] mt-10">
                  {INTRO.disclaimer}
                </p>
              </div>
            </motion.div>
          )}

          {/* ═══ Companies ═══ */}
          {activeTab === 'companies' && (
            <motion.div
              key="companies"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl text-obsidian tracking-tight mb-4">
                Companies I follow.
              </h1>
              <p className="font-sans font-light text-[16px] text-stone-mid max-w-[620px] leading-relaxed mb-14">
                Each one has a current view and the dated notes that got me there.
              </p>

              <div className="flex flex-col border-t border-stone-light">
                {COMPANIES.map((c) => (
                  <Link
                    key={c.id}
                    href={`/fund/${c.id}`}
                    className="group grid gap-x-8 gap-y-2 border-b border-stone-light py-8 md:grid-cols-[260px_1fr] cursor-none"
                    data-cursor="hover"
                  >
                    <div>
                      <h2 className="font-serif text-2xl text-obsidian group-hover:text-accent transition-colors leading-snug">
                        {c.name}
                      </h2>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-stone-mid mt-1.5">
                        {c.followingSince}
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="font-sans font-light text-[16px] leading-[1.8] text-ink max-w-[640px]">{c.what}</p>
                      <div className="flex items-center gap-1.5 text-stone-mid group-hover:text-accent transition-colors">
                        <span className="font-mono text-[10px] uppercase tracking-widest">Read</span>
                        <ArrowUpRight size={12} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* ═══ Following ═══ */}
          {activeTab === 'following' && (
            <motion.div
              key="following"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-stone-mid mb-4">
                {COVERAGE_COUNT} entries &middot; November 2025 to August 2026
              </div>
              <h1 className="font-serif text-4xl md:text-5xl text-obsidian tracking-tight mb-4">Following.</h1>
              <p className="font-sans font-light text-[16px] text-ink max-w-[640px] leading-relaxed mb-10">
                A financing, a trial result, a policy change, someone quietly leaving a company. I write down what
                happened and then what I think it actually means, which is the part worth reading. Some entries are two
                sentences. A few are much longer because the thing deserved it. Later notes argue with earlier ones
                fairly often.
              </p>

              <div className="border-y border-stone-light py-4 mb-12">
                <div className="flex flex-wrap gap-x-5 gap-y-2 mb-4">
                  {FILTERS.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => go('following', f.id)}
                      data-cursor="hover"
                      className={`font-mono text-[10px] uppercase tracking-widest transition-colors ${
                        activeFilter === f.id
                          ? 'text-accent underline underline-offset-4'
                          : 'text-stone-mid hover:text-obsidian'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-3 border-t border-stone-light pt-4">
                  <Search size={14} className="text-stone-mid flex-shrink-0" />
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search entries. Try lilly, patent cliff, stroke, or a company name"
                    aria-label="Search entries"
                    className="flex-1 min-w-0 bg-transparent font-sans text-[15px] text-obsidian placeholder:text-stone-mid/70 focus:outline-none"
                  />
                  {query && (
                    <button
                      onClick={() => setQuery('')}
                      aria-label="Clear search"
                      data-cursor="hover"
                      className="text-stone-mid hover:text-obsidian transition-colors flex-shrink-0"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              </div>

              {query && (
                <p className="font-mono text-[10px] uppercase tracking-widest text-stone-mid mb-8">
                  {filtered.length} {filtered.length === 1 ? 'match' : 'matches'} for &ldquo;{query}&rdquo;
                </p>
              )}

              {filtered.length === 0 && (
                <p className="font-sans text-[16px] text-stone-mid">
                  Nothing matches that. Try a broader term, or{' '}
                  <button
                    onClick={() => {
                      setQuery('');
                      go('following', 'all');
                    }}
                    className="text-accent underline underline-offset-4 cursor-none"
                    data-cursor="hover"
                  >
                    clear the filters
                  </button>
                  .
                </p>
              )}

              <div className="max-w-[860px]">
                {months.map((m) => (
                  <section key={m.label} className="mb-4">
                    <div className="sticky top-[152px] z-[500] bg-bone py-3 border-b border-obsidian">
                      <h2 className="font-mono text-[10px] uppercase tracking-widest text-obsidian">{m.label}</h2>
                    </div>
                    <div>
                      {m.entries.map((e) => (
                        <EntryRow key={e.id} entry={e} showCompanies />
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
