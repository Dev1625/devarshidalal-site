'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Company } from '@/lib/fund';
import { CoverageEntry } from '@/lib/coverage';
import { EntryRow } from '@/components/fund/EntryRow';

interface Props {
  company: Company | undefined;
  others: Company[];
  entries: CoverageEntry[];
}

/** Numbered memo section. The number is what makes it read like a memo rather than a blog post. */
function Section({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-stone-light pt-8">
      <div className="grid gap-x-8 gap-y-3 md:grid-cols-[52px_1fr]">
        <div className="font-mono text-[11px] text-accent pt-1">{num}</div>
        <div>
          <h2 className="font-serif text-xl md:text-2xl text-obsidian mb-5 leading-snug">{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}

function Prose({ text }: { text: string }) {
  return (
    <div className="space-y-5">
      {text.split('\n\n').map((p, i) => (
        <p key={i} className="font-sans font-light text-[16px] leading-[1.85] text-ink">
          {p}
        </p>
      ))}
    </div>
  );
}

export default function FundMemoClient({ company, others, entries }: Props) {
  if (!company) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-sans text-sm text-stone-mid mb-4">There is no memo for that company.</p>
          <Link
            href="/fund?view=companies"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent hover:text-obsidian transition-colors cursor-none"
            data-cursor="hover"
          >
            <ArrowLeft size={12} />
            All companies
          </Link>
        </div>
      </div>
    );
  }

  const history = [...entries].reverse();

  return (
    <div className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-12"
        >
          <Link
            href="/fund?view=companies"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-stone-mid hover:text-obsidian transition-colors self-start cursor-none"
            data-cursor="hover"
          >
            <ArrowLeft size={13} />
            All companies
          </Link>

          {/* ── Memo header ── */}
          <header>
            <div className="font-mono text-[10px] uppercase tracking-widest text-stone-mid mb-4">
              Investment memo &middot; {company.followingSince}
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-obsidian tracking-tight mb-5">{company.name}</h1>
            <p className="font-sans font-light text-xl text-ink leading-relaxed max-w-[640px]">{company.what}</p>
          </header>

          {/* ── Snapshot ── */}
          <div className="border-y border-obsidian py-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
              {company.snapshot.map((f) => (
                <div key={f.label} className="flex flex-col gap-0.5">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-stone-mid">{f.label}</div>
                  <div className="font-sans text-[15px] text-obsidian leading-snug">{f.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Summary ── */}
          <section>
            <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-4">Summary</div>
            <p className="font-serif text-xl md:text-[22px] leading-[1.55] text-obsidian">{company.summary}</p>
          </section>

          <Section num="01" title="The problem">
            <Prose text={company.problem} />
          </Section>

          <Section num="02" title="What the product actually is">
            <Prose text={company.product} />
          </Section>

          <Section num="03" title="Why now">
            <Prose text={company.whyNow} />
          </Section>

          <Section num="04" title="Market and how it makes money">
            <Prose text={company.market} />
          </Section>

          <Section num="05" title="Traction">
            <div className="flex flex-col gap-6">
              {company.traction.map((m) => (
                <div key={m.label} className="grid gap-x-6 gap-y-1.5 sm:grid-cols-[190px_1fr]">
                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-widest text-stone-mid mb-1">{m.label}</div>
                    <div className="font-sans text-[15px] font-medium text-obsidian leading-snug">{m.value}</div>
                  </div>
                  {m.read && (
                    <p className="font-sans font-light text-[15px] leading-[1.8] text-ink">{m.read}</p>
                  )}
                </div>
              ))}
            </div>
          </Section>

          <Section num="06" title="Competition and defensibility">
            <Prose text={company.competition} />
          </Section>

          <Section num="07" title="Team">
            <Prose text={company.team} />
          </Section>

          <Section num="08" title="Risks and mitigants">
            <div className="flex flex-col">
              {company.risks.map((r, i) => (
                <div key={i} className="grid gap-x-8 gap-y-3 md:grid-cols-2 border-b border-stone-light py-5 first:pt-0 last:border-0">
                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-widest text-accent-warm mb-1.5">
                      Risk {String(i + 1).padStart(2, '0')}
                    </div>
                    <p className="font-sans font-light text-[15px] leading-[1.8] text-ink">{r.risk}</p>
                  </div>
                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-widest text-stone-mid mb-1.5">Mitigant</div>
                    <p className="font-sans font-light text-[15px] leading-[1.8] text-stone-mid">{r.mitigant}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section num="09" title="Open diligence questions">
            <p className="font-sans text-sm text-stone-mid mb-5 leading-relaxed">
              What I would want answered before putting real money behind this.
            </p>
            <ol className="flex flex-col gap-4">
              {company.diligence.map((q, i) => (
                <li key={i} className="grid gap-x-5 grid-cols-[26px_1fr]">
                  <span className="font-mono text-[10px] text-stone-mid pt-1.5">{String(i + 1).padStart(2, '0')}</span>
                  <p className="font-sans font-light text-[15px] leading-[1.8] text-ink">{q}</p>
                </li>
              ))}
            </ol>
          </Section>

          <Section num="10" title="What would change my mind">
            <ul className="flex flex-col gap-3">
              {company.changeMyMind.map((c, i) => (
                <li
                  key={i}
                  className="font-sans font-light text-[15px] leading-[1.8] text-ink pl-5 border-l border-stone-light"
                >
                  {c}
                </li>
              ))}
            </ul>
          </Section>

          {company.extra?.map((s, i) => (
            <Section key={s.title} num={String(11 + i)} title={s.title}>
              <Prose text={s.body} />
            </Section>
          ))}

          {/* ── Current view ── */}
          <section className="border-y border-obsidian py-8">
            <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-4">Where I land</div>
            <p className="font-serif text-xl md:text-2xl leading-snug text-obsidian">{company.view}</p>
          </section>

          {/* ── Coverage history ── */}
          {history.length > 0 && (
            <section>
              <h2 className="font-serif text-xl text-obsidian mb-2">How this developed</h2>
              <p className="font-sans text-sm text-stone-mid mb-6">
                Notes written as things happened, oldest first. These also appear in{' '}
                <Link
                  href="/fund?view=following"
                  className="text-accent hover:text-obsidian transition-colors cursor-none"
                  data-cursor="hover"
                >
                  the full archive
                </Link>
                .
              </p>
              <div className="border-t border-stone-light">
                {history.map((e) => (
                  <EntryRow key={e.id} entry={e} showCompanies={false} />
                ))}
              </div>
            </section>
          )}

          <section className="border-t border-stone-light pt-10">
            <h2 className="font-mono text-[10px] uppercase tracking-widest text-stone-mid mb-5">Other memos</h2>
            <div className="flex flex-col">
              {others.map((o) => (
                <Link
                  key={o.id}
                  href={`/fund/${o.id}`}
                  className="group flex items-baseline justify-between gap-6 py-3 border-b border-stone-light last:border-0 cursor-none"
                  data-cursor="hover"
                >
                  <span className="font-serif text-lg text-obsidian group-hover:text-accent transition-colors">
                    {o.name}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-stone-mid text-right">
                    {o.followingSince}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
