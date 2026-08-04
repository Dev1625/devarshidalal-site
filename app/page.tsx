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

// The bio animates in a clause at a time. Kept as fragments so the stagger
// lands on meaning rather than on arbitrary line breaks.
const BIO = [
  "Hi, I'm Devarshi.",
  'I study business, mathematical biology and neuroscience at Michigan, and I work at the intersection of medicine, strategy and investment.',
  'I built Cirqle, an AI CRM. Away from that I do close-up card magic.',
];

const HONORS = [
  'Michigan Brain Bee champion',
  'USA Brain Bee finalist',
  'Health Physics Society National Student Science Award',
  'AlphaSights Employer Challenge, first place',
  'Deloitte case competition, Michigan finalist',
  'University Honors, three semesters',
];

const EXPERIENCE = [
  {
    org: 'Cirqle',
    role: 'Founder',
    when: '2025',
    line: 'An AI CRM I designed and built alone. In closed beta with 75 users.',
  },
  {
    org: 'UpRound Venture Capital',
    role: 'Deal flow co-lead',
    when: '2026',
    line: 'Sourcing early-stage companies and writing the memos the fund decides on.',
  },
  {
    org: 'BOND Consulting Group',
    role: 'Senior consultant',
    when: '2024',
    line: 'Pricing and operations work for founders and C-suite teams. Promoted, and now train the juniors.',
  },
  {
    org: 'Blueprints for Pangaea',
    role: 'Expansion manager',
    when: '2024',
    line: 'Running operations and new chapters for a nonprofit that redistributes surplus medical supplies.',
  },
  {
    org: "Kabir's Prep",
    role: 'Instructor, then site lead',
    when: '2022',
    line: 'Taught SAT and ACT to a couple thousand students, then ran the site over two summers.',
  },
];

const PROJECTS = [
  {
    title: 'Healthcare investment research',
    when: '2025',
    href: '/fund',
    line: 'Twelve company memos and a 179-entry archive of what happens across the sector.',
  },
  {
    title: 'EEG-fMRI signal validation',
    when: '2026',
    line: 'With a Meta AI researcher. Which artifact-correction methods keep the neural signal intact.',
  },
  {
    title: 'WriVision',
    when: '2021',
    href: '/research/wrivision-quality-control',
    line: 'A neural network on 8,700 wrist X-rays, piloted at Henry Ford Health. Presented at RSNA.',
  },
];

const SECTIONS = [
  { href: '/fund', title: 'Healthcare', meta: '12 memos, 179 entries' },
  { href: '/research', title: 'Research', meta: '4 papers' },
  { href: '/library', title: 'The Library', meta: 'Coming soon' },
];

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <motion.section
      className="mx-auto mt-16 w-full max-w-[640px] border-t border-stone-light pt-10"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.45 }}
    >
      <div className="mb-7 font-mono text-[10px] uppercase tracking-widest text-stone-mid">{label}</div>
      {children}
    </motion.section>
  );
}

/**
 * One list row. The detail line is hidden until hover on pointer devices and
 * always shown on touch, where there is no hover to reveal it.
 */
function Row({
  when,
  title,
  sub,
  line,
  arrow = false,
}: {
  when: string;
  title: string;
  sub?: string;
  line: string;
  arrow?: boolean;
}) {
  return (
    <div className="group border-b border-stone-light/70 py-4 last:border-0">
      <div className="flex items-baseline justify-between gap-5">
        <div className="flex items-baseline gap-3">
          <h3 className="flex items-center gap-1.5 font-serif text-lg text-obsidian transition-colors group-hover:text-accent">
            {title}
            {arrow && <ArrowUpRight size={13} className="text-stone-mid transition-colors group-hover:text-accent" />}
          </h3>
          {sub && <span className="font-sans text-[13px] text-stone-mid">{sub}</span>}
        </div>
        <span className="flex-shrink-0 font-mono text-[10px] uppercase tracking-widest text-stone-mid">{when}</span>
      </div>
      <p className="max-w-[520px] overflow-hidden font-sans text-[14px] font-light leading-[1.7] text-stone-mid transition-all duration-300 md:max-h-0 md:opacity-0 md:group-hover:mt-1.5 md:group-hover:max-h-24 md:group-hover:opacity-100 mt-1.5">
        {line}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="px-6 pb-24">
      {/* ── Hero ── */}
      <section className="mx-auto flex min-h-[72vh] w-full max-w-[640px] flex-col items-center justify-center text-center">
        <h1 className="sr-only">Devarshi Dalal</h1>

        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-9 h-[96px] w-[96px] overflow-hidden border border-obsidian"
          data-cursor="hover"
        >
          <div
            className="pointer-events-none absolute inset-0 z-10 opacity-25 mix-blend-overlay"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E")',
            }}
          />
          <Image src="/headshot.png" alt="Devarshi Dalal" fill sizes="96px" priority className="object-cover" />
        </motion.div>

        <motion.p
          className="mb-10 max-w-[540px] font-serif text-[23px] leading-[1.5] text-obsidian md:text-[26px]"
          initial="hidden"
          animate="shown"
          transition={{ staggerChildren: 0.28, delayChildren: 0.2 }}
        >
          {BIO.map((clause, i) => (
            <motion.span
              key={i}
              className="inline"
              variants={{
                hidden: { opacity: 0, filter: 'blur(4px)' },
                shown: { opacity: 1, filter: 'blur(0px)' },
              }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {clause}
              {i < BIO.length - 1 ? ' ' : ''}
            </motion.span>
          ))}
        </motion.p>

        <motion.div
          className="flex w-full items-center justify-center gap-9 border-t border-stone-light/70 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
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

      {/* ── Education ── */}
      <Section label="Education">
        <div className="flex items-baseline justify-between gap-5">
          <h3 className="font-serif text-lg text-obsidian">University of Michigan</h3>
          <span className="font-mono text-[10px] uppercase tracking-widest text-stone-mid">Expected 2028</span>
        </div>
        <p className="mt-1.5 font-sans text-[14px] font-light leading-[1.7] text-stone-mid">
          B.B.A. from Ross and B.S. from LSA. Triple major in business administration, mathematical biology and
          neuroscience.
        </p>

        <div className="mt-8">
          <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-stone-mid">Honors</div>
          <ul className="flex flex-col">
            {HONORS.map((h) => (
              <li
                key={h}
                className="border-b border-stone-light/70 py-2.5 font-sans text-[15px] font-light text-ink last:border-0"
              >
                {h}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ── Experience ── */}
      <Section label="Experience">
        <div className="flex flex-col">
          {EXPERIENCE.map((e) => (
            <Row key={e.org} when={e.when} title={e.org} sub={e.role} line={e.line} />
          ))}
        </div>
      </Section>

      {/* ── Projects ── */}
      <Section label="Projects">
        <div className="flex flex-col">
          {PROJECTS.map((p) =>
            p.href ? (
              <Link key={p.title} href={p.href} data-cursor="hover" className="contents">
                <Row when={p.when} title={p.title} line={p.line} arrow />
              </Link>
            ) : (
              <Row key={p.title} when={p.when} title={p.title} line={p.line} />
            ),
          )}
        </div>
      </Section>

      {/* ── The rest of the site ── */}
      <Section label="Also here">
        <div className="flex flex-col">
          {SECTIONS.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex items-baseline justify-between gap-5 border-b border-stone-light/70 py-4 last:border-0"
              data-cursor="hover"
            >
              <span className="flex items-center gap-1.5 font-serif text-lg text-obsidian transition-colors group-hover:text-accent">
                {s.title}
                <ArrowUpRight size={13} className="text-stone-mid transition-colors group-hover:text-accent" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-stone-mid">{s.meta}</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── Contact ── */}
      <motion.section
        className="mx-auto mt-16 w-full max-w-[640px] border-t border-stone-light pt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
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
