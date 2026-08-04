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

const EXPERIENCE = [
  {
    org: 'BOND Consulting Group',
    role: 'Senior Consultant and Advisor',
    when: 'Aug 2024 to now',
    points: [
      'Led pricing and operations workstreams on five-person teams, turning management interviews and analysis into four presentations for founders and C-suite executives. Promoted, and trained six junior consultants.',
      'Built a dynamic pricing model for a Minor League Baseball franchise that forecasts attendance within 100 tickets a game. It set website prices and segmented promotions, and the client passed the analysis to its MLB affiliate.',
      'Trained a gradient boosting demand model on five years of data across 300 SKUs and two plants, reaching 90 percent accuracy and guiding production sequencing and entry into new categories.',
    ],
  },
  {
    org: 'UpRound Venture Capital',
    role: 'Deal Flow Pod Co-Lead and Investment Analyst',
    when: 'Jan 2026 to now',
    points: [
      'Sourced and contacted 40 early-stage companies, wrote six investment memos covering market, competitive, business model and founding team diligence, and presented recommendations for $10K checks to the fund team.',
    ],
  },
  {
    org: 'Cirqle',
    role: 'Founder',
    when: 'Jul 2025 to now',
    points: [
      'Built an AI relationship management platform alone, across product, design, full-stack engineering, auth and security. Raised $3,000 externally and reached 75 closed-beta users at roughly 70 percent seven-day retention.',
      'Turned five user interviews into Gmail and Calendar integrations, relationship health scoring, a ranked weekly action plan, and outreach drafts that remember context.',
    ],
  },
  {
    org: 'Blueprints for Pangaea',
    role: 'Expansion Manager',
    when: 'Aug 2024 to now',
    points: [
      'Run operations and expansion for the Michigan State and Ohio State chapters after two promotions, and mentor 15 interns and analysts on national projects.',
      'Automated classification and costing for more than 10,000 SKUs with a computer vision and LLM pipeline, tested across six inventory events. Throughput up 29 percent, errors down 15 percent against the manual process.',
      'Consolidated roughly $50K of grants, revenue, expenses and inventory across 16 chapters into Tableau, replacing scattered spreadsheets and giving 50 stakeholders one view for budgeting.',
    ],
  },
  {
    org: "Kabir's Prep",
    role: 'Instructor, and Acting Site Lead over summers 2023 and 2024',
    when: 'Mar 2022 to now',
    points: [
      'Ran summer site operations across two terms, training and scheduling six instructors and handling staffing, materials and proctoring for sittings of up to 250 students.',
      'Taught three to four weekly SAT and ACT cohorts of about 60 students inside programs serving over 2,000 learners. Site participants averaged 215-point SAT and 5-point ACT gains, and 98 percent improved.',
    ],
  },
];

const PROJECTS = [
  {
    title: 'Healthcare investment research',
    when: 'Nov 2025 to now',
    href: '/fund',
    note: 'Twelve invest or pass memos across healthcare AI, biotech, pharma and medtech, using market sizing, valuation, unit economics, clinical trial and regulatory analysis. Alongside them a 179-entry archive tracking financings, M&A, clinical readouts and FDA and CMS decisions, with claims grounded in SEC filings, agency documents and peer-reviewed work.',
  },
  {
    title: 'EEG-fMRI signal validation',
    when: 'May 2026 to now',
    note: 'A research collaboration with a Meta AI researcher. Evaluated ICA, OBS and hybrid artifact-correction methods on a 20-participant simultaneous EEG-fMRI dataset, catching neural signal distortion before bad features reached downstream fMRI modelling.',
  },
  {
    title: 'WriVision',
    when: 'Jun 2021 to Jun 2024',
    href: '/research/wrivision-quality-control',
    note: 'With Henry Ford Health. Built and clinically piloted a multi-task neural network and clinician-facing app trained on more than 8,700 wrist X-rays, flagging four labelling and acquisition inconsistencies for radiologic technologists. Presented at RSNA 2024.',
  },
];

const SECTIONS = [
  { href: '/fund', title: 'Healthcare', meta: '12 memos, 179 entries' },
  { href: '/research', title: 'Research', meta: '4 papers and posters' },
  { href: '/library', title: 'The Library', meta: '65 essays, 8 fields' },
];

function Section({
  label,
  children,
  className = '',
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      className={`mx-auto w-full max-w-[720px] border-t border-obsidian pt-14 ${className}`}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-9 font-mono text-[10px] uppercase tracking-widest text-stone-mid">{label}</div>
      {children}
    </motion.section>
  );
}

function Entry({
  when,
  title,
  sub,
  children,
}: {
  when: string;
  title: string;
  sub?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="grid gap-x-8 gap-y-3 border-b border-stone-light py-8 last:border-0 md:grid-cols-[132px_1fr]">
      <div className="pt-1.5 font-mono text-[10px] uppercase tracking-widest text-stone-mid">{when}</div>
      <div>
        <h3 className="font-serif text-xl leading-snug text-obsidian">{title}</h3>
        {sub && <div className="mt-1 font-sans text-[13px] text-stone-mid">{sub}</div>}
        {children}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="px-6 pb-24">
      {/* ── Hero ── */}
      <section className="mx-auto flex min-h-[74vh] w-full max-w-[720px] flex-col items-center justify-center text-center">
        {/* The visible name lives in the nav. Search and screen readers still need one here. */}
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

      {/* ── Education ── */}
      <Section label="Education">
        <Entry
          when="Expected 2028"
          title="University of Michigan"
          sub="Dual degree: B.B.A., Ross School of Business and B.S., College of LSA"
        >
          <p className="mt-3 max-w-[520px] font-sans text-[15px] font-light leading-[1.75] text-ink">
            Triple major in business administration, mathematical biology and neuroscience, with a 3.7 GPA. Coursework
            has run from business strategy, financial management and financial trading through linear algebra and
            biochemistry, which is roughly the split I am trying to hold onto.
          </p>
          <div className="mt-5">
            <div className="mb-2 font-mono text-[9px] uppercase tracking-widest text-stone-mid">Honors</div>
            <p className="max-w-[520px] font-sans text-[15px] font-light leading-[1.75] text-ink">
              Michigan Brain Bee champion and USA Brain Bee finalist. Health Physics Society National Student Science
              Award. First place in the AlphaSights Employer Challenge and a Michigan finalist in the Deloitte case
              competition. University Honors three semesters.
            </p>
          </div>
        </Entry>
      </Section>

      {/* ── Experience ── */}
      <Section label="Experience" className="mt-20">
        <div className="flex flex-col">
          {EXPERIENCE.map((e) => (
            <Entry key={e.org} when={e.when} title={e.org} sub={e.role}>
              <ul className="mt-3 flex flex-col gap-2.5">
                {e.points.map((p, i) => (
                  <li
                    key={i}
                    className="max-w-[520px] border-l border-stone-light pl-4 font-sans text-[15px] font-light leading-[1.75] text-ink"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </Entry>
          ))}
        </div>
      </Section>

      {/* ── Projects ── */}
      <Section label="Selected projects" className="mt-20">
        <div className="flex flex-col">
          {PROJECTS.map((p) => {
            const body = (
              <>
                <h3 className="flex items-center gap-2 font-serif text-xl leading-snug text-obsidian transition-colors group-hover:text-accent">
                  {p.title}
                  {p.href && (
                    <ArrowUpRight size={15} className="text-stone-mid transition-colors group-hover:text-accent" />
                  )}
                </h3>
                <p className="mt-3 max-w-[520px] font-sans text-[15px] font-light leading-[1.75] text-ink">{p.note}</p>
              </>
            );
            const row = (
              <div className="grid gap-x-8 gap-y-3 border-b border-stone-light py-8 last:border-0 md:grid-cols-[132px_1fr]">
                <div className="pt-1.5 font-mono text-[10px] uppercase tracking-widest text-stone-mid">{p.when}</div>
                <div>{body}</div>
              </div>
            );
            return p.href ? (
              <Link key={p.title} href={p.href} className="group" data-cursor="hover">
                {row}
              </Link>
            ) : (
              <div key={p.title}>{row}</div>
            );
          })}
        </div>
      </Section>

      {/* ── The rest of the site ── */}
      <Section label="Also here" className="mt-20">
        <div className="flex flex-col">
          {SECTIONS.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex items-baseline justify-between gap-6 border-b border-stone-light py-5 last:border-0"
              data-cursor="hover"
            >
              <span className="flex items-center gap-2 font-serif text-lg text-obsidian transition-colors group-hover:text-accent">
                {s.title}
                <ArrowUpRight size={14} className="text-stone-mid transition-colors group-hover:text-accent" />
              </span>
              <span className="text-right font-mono text-[10px] uppercase tracking-widest text-stone-mid">
                {s.meta}
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── Tools and interests ── */}
      <Section label="Otherwise" className="mt-20">
        <div className="grid gap-x-8 gap-y-6 md:grid-cols-[132px_1fr]">
          <div className="pt-1 font-mono text-[10px] uppercase tracking-widest text-stone-mid">Tools</div>
          <p className="max-w-[520px] font-sans text-[15px] font-light leading-[1.75] text-ink">
            Python, SQL, R, Excel, Tableau, React and TypeScript, Git. Financial modelling, market sizing, valuation and
            machine learning. This site is Next.js and TypeScript, built and deployed by hand.
          </p>
          <div className="pt-1 font-mono text-[10px] uppercase tracking-widest text-stone-mid">Away from work</div>
          <p className="max-w-[520px] font-sans text-[15px] font-light leading-[1.75] text-ink">
            Close-up card magic, fifteen or so paid shows and one executive audition for America&apos;s Got Talent.
            Bollywood and hip-hop dance. Vinyl and film scores. I also record explainer videos for the USA Brain Bee,
            which is how I ended up caring about neuroscience education in the first place.
          </p>
        </div>
      </Section>

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
