'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Linkedin, Phone, UserPlus, ArrowUpRight } from 'lucide-react';

const CONTACTS = [
  { icon: UserPlus, label: 'Add to contacts', href: '/devarshi.vcf', external: false },
  { icon: Mail, label: 'devdalal@umich.edu', href: 'mailto:devdalal@umich.edu', external: false },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/devarshidalal/', external: true },
  { icon: Phone, label: '(248) 289-5537', href: 'tel:+12482895537', external: false },
];

const SECTIONS = [
  {
    href: '/fund',
    title: 'Healthcare investment research',
    meta: 'Twelve memos, 179 dated entries',
    body: 'Companies I follow closely enough to have a view on, written up as structured memos, plus a running record of what happens across biopharma, clinical AI, devices and policy and what I make of each one.',
  },
  {
    href: '/research',
    title: 'Research',
    meta: 'Four papers and posters',
    body: 'Deep learning for radiology quality control, USP33 and deubiquitination in multiple sclerosis, and neurocomputational modelling. Presented at RSNA and AMIA.',
  },
  {
    href: '/library',
    title: 'The Library',
    meta: '65 essays, 8 fields',
    body: 'Shorter pieces on philosophy, psychology, economics, law, strategy, science, technology and culture. Mostly things I wanted to work out on paper.',
  },
];

const EXPERIENCE = [
  {
    org: 'BOND Consulting Group',
    role: 'Senior Consultant',
    when: '2024 to present',
    note: 'Client workstreams end to end, plus training junior consultants on structured problem solving.',
  },
  {
    org: 'Cirqle',
    role: 'Founder',
    when: '2025 to present',
    note: 'AI relationship management platform. Product strategy and the full-stack build. In open beta with 75 active users.',
  },
  {
    org: 'Blueprints for Pangaea',
    role: 'Expansion Manager, Operations and Finance',
    when: '2022 to present',
    note: 'Operations overhaul at the headquarters of a 16-chapter nonprofit. Throughput up 29 percent, accuracy up 15 percent.',
  },
  {
    org: "Kabir's Prep",
    role: 'Instructor and Acting Site Lead',
    when: '2022 to present',
    note: 'Taught SAT and ACT to more than 2,000 students and ran centre operations across two summer terms.',
  },
];

const PROJECTS = [
  {
    title: 'Healthcare investment research',
    when: 'Nov 2025 to present',
    note: 'Twelve investment memos and a 179-entry coverage archive, every claim sourced to primary material.',
    href: '/fund',
  },
  {
    title: 'EEG-fMRI encoding pipeline',
    when: '2026 to present',
    note: 'With Meta AI. Predicting fMRI network activity from simultaneous EEG, benchmarking three artifact-correction methods.',
  },
  {
    title: 'WriVision',
    when: '2021 to 2024',
    note: 'With Henry Ford Health System. A multi-task network trained on 8,700 wrist X-rays, deployed for radiology quality control. Presented at RSNA 2024, National Student Science Award.',
    href: '/research/wrivision-quality-control',
  },
];

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-x-8 gap-y-2 border-b border-stone-light py-7 last:border-0 md:grid-cols-[150px_1fr]">
      <div className="font-mono text-[10px] uppercase tracking-widest text-stone-mid pt-1">{label}</div>
      <div>{children}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="px-6 pb-24">
      {/* ── Hero ── */}
      <section className="mx-auto flex min-h-[78vh] w-full max-w-[720px] flex-col items-center justify-center text-center">
        {/* The visible name lives in the nav. Screen readers and search engines
            still need a real heading on the page. */}
        <h1 className="sr-only">Devarshi Dalal</h1>

        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-10 h-[104px] w-[104px] overflow-hidden border border-obsidian"
          data-cursor="hover"
        >
          <div
            className="pointer-events-none absolute inset-0 z-10 opacity-25 mix-blend-overlay"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E")',
            }}
          />
          <Image src="/headshot.png" alt="Devarshi Dalal" fill sizes="104px" priority className="object-cover" />
        </motion.div>

        <motion.p
          className="mb-11 max-w-[520px] font-serif text-[26px] leading-[1.4] text-obsidian md:text-[30px]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Business, mathematical biology, and neuroscience at Michigan. I work at the intersection of medicine and
          capital.
        </motion.p>

        <motion.div
          className="flex w-full items-center justify-center gap-9 border-t border-stone-light/70 pt-9"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
        >
          {CONTACTS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              aria-label={item.label}
              className="group relative flex flex-col items-center gap-3"
              data-cursor="hover"
            >
              <span className="text-stone-mid transition-colors duration-300 group-hover:-translate-y-1 group-hover:text-accent">
                <item.icon size={19} strokeWidth={1.5} />
              </span>
              <span className="absolute -bottom-6 whitespace-nowrap font-mono text-[10px] uppercase tracking-widest text-stone-mid opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {item.label}
              </span>
            </a>
          ))}
        </motion.div>
      </section>

      {/* ── What is here ── */}
      <motion.section
        className="mx-auto w-full max-w-[720px] border-t border-obsidian pt-14"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-9 font-mono text-[10px] uppercase tracking-widest text-stone-mid">What is here</div>
        <div className="flex flex-col">
          {SECTIONS.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group grid gap-x-8 gap-y-3 border-b border-stone-light py-8 last:border-0 md:grid-cols-[150px_1fr]"
              data-cursor="hover"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-stone-mid pt-1.5">{s.meta}</div>
              <div>
                <h2 className="mb-3 flex items-center gap-2 font-serif text-2xl leading-snug text-obsidian transition-colors group-hover:text-accent md:text-[27px]">
                  {s.title}
                  <ArrowUpRight size={17} className="text-stone-mid transition-colors group-hover:text-accent" />
                </h2>
                <p className="max-w-[520px] font-sans text-[15px] font-light leading-[1.75] text-ink">{s.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* ── Experience ── */}
      <motion.section
        className="mx-auto mt-20 w-full max-w-[720px] border-t border-obsidian pt-14"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-9 font-mono text-[10px] uppercase tracking-widest text-stone-mid">Experience</div>
        <div className="flex flex-col">
          {EXPERIENCE.map((e) => (
            <Row key={e.org} label={e.when}>
              <h3 className="font-serif text-xl leading-snug text-obsidian">{e.org}</h3>
              <div className="mb-2 font-sans text-[13px] text-stone-mid">{e.role}</div>
              <p className="max-w-[500px] font-sans text-[15px] font-light leading-[1.75] text-ink">{e.note}</p>
            </Row>
          ))}
        </div>
      </motion.section>

      {/* ── Projects ── */}
      <motion.section
        className="mx-auto mt-20 w-full max-w-[720px] border-t border-obsidian pt-14"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-9 font-mono text-[10px] uppercase tracking-widest text-stone-mid">Selected projects</div>
        <div className="flex flex-col">
          {PROJECTS.map((p) => {
            const inner = (
              <>
                <h3 className="flex items-center gap-2 font-serif text-xl leading-snug text-obsidian transition-colors group-hover:text-accent">
                  {p.title}
                  {p.href && (
                    <ArrowUpRight size={15} className="text-stone-mid transition-colors group-hover:text-accent" />
                  )}
                </h3>
                <p className="mt-2 max-w-[500px] font-sans text-[15px] font-light leading-[1.75] text-ink">{p.note}</p>
              </>
            );
            return p.href ? (
              <Link key={p.title} href={p.href} className="group contents" data-cursor="hover">
                <Row label={p.when}>{inner}</Row>
              </Link>
            ) : (
              <Row key={p.title} label={p.when}>
                {inner}
              </Row>
            );
          })}
        </div>
      </motion.section>

      {/* ── Education ── */}
      <motion.section
        className="mx-auto mt-20 w-full max-w-[720px] border-t border-obsidian pt-14"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-9 font-mono text-[10px] uppercase tracking-widest text-stone-mid">Education</div>
        <Row label="Expected 2028">
          <h3 className="font-serif text-xl leading-snug text-obsidian">University of Michigan</h3>
          <div className="mb-2 font-sans text-[13px] text-stone-mid">
            B.B.A., Ross School of Business and B.S., College of LSA
          </div>
          <p className="max-w-[500px] font-sans text-[15px] font-light leading-[1.75] text-ink">
            Triple major in business administration, mathematical biology and neuroscience. University Honors three
            times. AlphaSights Employer Challenge winner and Pinkert Healthcare Accelerator. UpRound Venture Capital and
            the Zell Lurie Institute.
          </p>
        </Row>
      </motion.section>

      {/* ── Closing contact ── */}
      <motion.section
        className="mx-auto mt-20 w-full max-w-[720px] border-t border-obsidian pt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-6 max-w-[520px] font-serif text-xl leading-snug text-obsidian">
          Happy to talk about any of this, especially the healthcare work.
        </p>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          <a
            href="mailto:devdalal@umich.edu"
            className="font-mono text-[11px] uppercase tracking-widest text-accent underline underline-offset-4 transition-colors hover:text-obsidian"
            data-cursor="hover"
          >
            devdalal@umich.edu
          </a>
          <a
            href="tel:+12482895537"
            className="font-mono text-[11px] uppercase tracking-widest text-stone-mid transition-colors hover:text-obsidian"
            data-cursor="hover"
          >
            (248) 289-5537
          </a>
          <a
            href="https://www.linkedin.com/in/devarshidalal/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-widest text-stone-mid transition-colors hover:text-obsidian"
            data-cursor="hover"
          >
            LinkedIn
          </a>
        </div>
      </motion.section>
    </div>
  );
}
