'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Dna, ScanSearch } from 'lucide-react';

const PROJECTS = [
  {
    title: 'WriVision: AI Quality Control for Wrist X-rays',
    href: '/research/wrivision-quality-control',
    eyebrow: 'Medical imaging AI',
    dek: 'I worked on a multi-task DenseNet121 model to check projection, laterality, cast, and hardware in wrist X-rays. The aim was to help technologists catch quality problems before a patient leaves.',
    icon: ScanSearch,
    stats: ['6,823 filtered radiographs', '4 simultaneous output heads', '97.23% projection F1'],
  },
  {
    title: 'Targeting USP33 in Multiple Sclerosis',
    href: '/research/usp33-deubiquitination-ms',
    eyebrow: 'Bioinformatics / Neuroimmunology',
    dek: 'I used gene-expression and pathway analysis to investigate USP33 overexpression in multiple sclerosis, then asked whether reducing its expression with RNAi could be a useful therapeutic direction.',
    icon: Dna,
    stats: ['40 MS samples', 'USP33 p = 1.49E-08', 'UMP FDR = 2.61E-06'],
  },
];

export default function ResearchHome() {
  return (
    <div className="min-h-screen px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-6xl"
      >
        <h1 className="font-serif text-5xl md:text-7xl text-obsidian tracking-tight mb-8">
          Research.
        </h1>
        <p className="font-sans font-light text-xl text-stone-mid mb-16 leading-relaxed max-w-4xl">
          I use computation to investigate clinical problems. In one project, I worked on quality control for wrist X-rays. In the other, I followed a molecular signal in multiple sclerosis toward a possible therapeutic target. Both left me with questions that the analysis alone could not answer.
        </p>

        <div className="grid gap-6 border-t border-stone-300 pt-16 lg:grid-cols-2">
          {PROJECTS.map((project) => {
            const Icon = project.icon;
            return (
              <Link
                key={project.href}
                href={project.href}
                className="group flex min-h-[420px] flex-col justify-between border border-obsidian bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_var(--color-obsidian)]"
                data-cursor="hover"
              >
                <div>
                  <div className="mb-10 flex items-center justify-between">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-accent">{project.eyebrow}</div>
                    <Icon size={22} className="text-obsidian transition-colors group-hover:text-accent" />
                  </div>
                  <h2 className="mb-5 font-serif text-4xl leading-tight text-obsidian transition-colors group-hover:text-accent">
                    {project.title}
                  </h2>
                  <p className="font-sans text-base font-light leading-relaxed text-ink">
                    {project.dek}
                  </p>
                </div>

                <div>
                  <div className="mb-8 grid gap-3">
                    {project.stats.map((stat) => (
                      <div key={stat} className="border-t border-stone-light pt-3 font-mono text-[10px] uppercase tracking-widest text-stone-mid">
                        {stat}
                      </div>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-obsidian transition-colors group-hover:text-accent">
                    Open project <ArrowRight size={13} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
