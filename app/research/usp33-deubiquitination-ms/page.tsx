'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import Link from 'next/link';
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Dna,
  FlaskConical,
  GitBranch,
  Microscope,
  Network,
  Search,
} from 'lucide-react';

type GeneSymbol = 'PYGO2' | 'MAGED2' | 'SLC25A40' | 'USP33' | 'BMP2K' | 'SLC4A8' | 'DNAJB2' | 'PHYH';
type MechanismState = 'normal' | 'overexpressed' | 'rnai';
type RnaiTool = 'ucsc' | 'encode' | 'jaspar' | 'mirbase';

const genes: Array<{
  symbol: GeneSymbol;
  pValue: string;
  logFc: number;
  score: number;
  direction: 'up' | 'down';
  note: string;
}> = [
  { symbol: 'PYGO2', pValue: '4.39E-09', logFc: -0.862, score: 8.36, direction: 'down', note: 'Strongly dysregulated, but less directly tied to the proteolysis mechanism pursued in this project.' },
  { symbol: 'MAGED2', pValue: '6.34E-09', logFc: 1.15, score: 8.2, direction: 'up', note: 'Upregulated candidate from the initial screen.' },
  { symbol: 'SLC25A40', pValue: '1.27E-08', logFc: 1.544, score: 7.9, direction: 'up', note: 'High logFC candidate, but pathway interpretation did not make it the central therapeutic target.' },
  { symbol: 'USP33', pValue: '1.49E-08', logFc: 0.974, score: 7.83, direction: 'up', note: 'Selected focal gene because it was significantly overexpressed and connected to ubiquitin-mediated proteolysis.' },
  { symbol: 'BMP2K', pValue: '1.95E-08', logFc: 0.639, score: 7.71, direction: 'up', note: 'Significant gene that survived the screen but did not meet the same mechanistic focus.' },
  { symbol: 'SLC4A8', pValue: '6.85E-08', logFc: 0.735, score: 7.16, direction: 'up', note: 'Dysregulated gene in the expression analysis.' },
  { symbol: 'DNAJB2', pValue: '9.78E-08', logFc: -0.664, score: 7.01, direction: 'down', note: 'Downregulated candidate from the top gene set.' },
  { symbol: 'PHYH', pValue: '1.07E-07', logFc: 0.968, score: 6.97, direction: 'up', note: 'Upregulated candidate with a similar logFC scale to USP33.' },
];

const rnaiTools: Record<RnaiTool, {
  label: string;
  icon: typeof Search;
  result: string;
  detail: string;
}> = {
  ucsc: {
    label: 'UCSC Genome Browser',
    icon: Search,
    result: 'Located USP33 on chromosome 1',
    detail:
      'The genome browser view grounded the therapeutic search in the actual gene region, including nearby genetic elements and comparative genomics.',
  },
  encode: {
    label: 'ENCODE',
    icon: Activity,
    result: '16 enhancers and 1 promoter',
    detail:
      'ENCODE highlighted regulatory elements in the region, including promoter EH38E1360686, giving a starting point for thinking about transcriptional control.',
  },
  jaspar: {
    label: 'JASPAR',
    icon: GitBranch,
    result: 'No notable TF binding sites found',
    detail:
      'The lack of a strong transcription factor binding-site signal pushed the project toward post-transcriptional downregulation rather than TF-centered regulation.',
  },
  mirbase: {
    label: 'miRBase',
    icon: Dna,
    result: 'Hairpin region containing MI0000483',
    detail:
      'The miRNA/siRNA search supported the RNAi idea: use targeted RNA interference to reduce USP33 expression at the mRNA level.',
  },
};

const mechanismCopy: Record<MechanismState, {
  label: string;
  headline: string;
  description: string;
  accent: string;
}> = {
  normal: {
    label: 'Baseline',
    headline: 'Protein turnover stays regulated.',
    description:
      'In a healthier state, ubiquitination and deubiquitination keep protein abundance controlled. Myelin proteins such as MBP and PLPs are not being pushed into an abnormal degradation story.',
    accent: '#2A4BD7',
  },
  overexpressed: {
    label: 'MS signal',
    headline: 'USP33 is overexpressed in MS samples.',
    description:
      'The MS brain-tissue analysis showed USP33 with p = 1.49E-08 and logFC = 0.97364. The hypothesis is that dysregulated deubiquitination contributes to immune activation and demyelination.',
    accent: '#D44D26',
  },
  rnai: {
    label: 'Intervention',
    headline: 'RNAi becomes the therapeutic idea.',
    description:
      'If USP33 is part of the disease mechanism, then downregulating USP33 with RNAi or small-molecule inhibition could reduce downstream demyelination and slow disease progression.',
    accent: '#0A0A0A',
  },
};

function GenePlot() {
  const [activeGene, setActiveGene] = useState<GeneSymbol>('USP33');
  const selected = genes.find((gene) => gene.symbol === activeGene) ?? genes[3];

  return (
    <section className="border-y border-obsidian bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.2fr]">
        <div>
          <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-accent">
            Gene expression screen
          </div>
          <h2 className="mb-6 font-serif text-4xl leading-tight text-obsidian">
            USP33 came out of a broader search, not a pre-picked story.
          </h2>
          <p className="font-sans text-lg font-light leading-relaxed text-ink">
            The first phase used GEO2R on brain-tissue samples from 10 controls and 40 MS patients. Genes were filtered using statistical significance and fold-change, then interpreted through pathway and network tools.
          </p>

          <div className="mt-8 border border-stone-light bg-bone p-6">
            <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-stone-mid">
              Selected gene
            </div>
            <h3 className="mb-3 font-serif text-3xl text-obsidian">{selected.symbol}</h3>
            <div className="mb-4 grid grid-cols-2 gap-3">
              <div className="border-t border-stone-light pt-3">
                <div className="font-mono text-[10px] uppercase tracking-widest text-stone-mid">p-value</div>
                <div className="font-serif text-2xl text-obsidian">{selected.pValue}</div>
              </div>
              <div className="border-t border-stone-light pt-3">
                <div className="font-mono text-[10px] uppercase tracking-widest text-stone-mid">logFC</div>
                <div className="font-serif text-2xl text-obsidian">{selected.logFc.toFixed(3)}</div>
              </div>
            </div>
            <p className="font-sans text-sm leading-relaxed text-ink">{selected.note}</p>
          </div>
        </div>

        <div className="border border-stone-light bg-[#F8F8F3] p-5 md:p-8">
          <div className="mb-6 flex items-center justify-between">
            <div className="font-mono text-[10px] uppercase tracking-widest text-stone-mid">
              Simplified volcano view
            </div>
            <Microscope size={18} className="text-accent" />
          </div>

          <svg viewBox="0 0 540 300" className="h-auto w-full overflow-visible border border-stone-light bg-white">
            <line x1="55" y1="250" x2="500" y2="250" stroke="#0A0A0A" strokeWidth="1" />
            <line x1="270" y1="32" x2="270" y2="250" stroke="#E0E0DB" strokeWidth="1" />
            <line x1="55" y1="250" x2="55" y2="32" stroke="#0A0A0A" strokeWidth="1" />
            <text x="235" y="282" className="fill-stone-mid font-mono text-[10px] uppercase tracking-widest">
              logFC
            </text>
            <text x="14" y="150" transform="rotate(-90 14 150)" className="fill-stone-mid font-mono text-[10px] uppercase tracking-widest">
              -log10(p)
            </text>
            {genes.map((gene) => {
              const cx = 270 + gene.logFc * 118;
              const cy = 250 - gene.score * 23;
              const isActive = gene.symbol === activeGene;
              return (
                <g key={gene.symbol}>
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isActive ? 9 : 6}
                    fill={gene.symbol === 'USP33' ? '#D44D26' : gene.direction === 'up' ? '#2A4BD7' : '#7F7F7F'}
                    stroke="#0A0A0A"
                    strokeWidth={isActive ? 2 : 1}
                    onClick={() => setActiveGene(gene.symbol)}
                    className="cursor-pointer transition-all"
                    data-cursor="hover"
                  />
                  {(isActive || gene.symbol === 'USP33') && (
                    <text x={cx + 12} y={cy + 4} className="fill-obsidian font-mono text-[10px] uppercase tracking-widest">
                      {gene.symbol}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>

          <div className="mt-6 grid gap-2 sm:grid-cols-4">
            {genes.map((gene) => (
              <button
                key={gene.symbol}
                onClick={() => setActiveGene(gene.symbol)}
                data-cursor="hover"
                className={`border px-3 py-3 text-left transition-colors ${
                  activeGene === gene.symbol ? 'border-obsidian bg-obsidian text-bone' : 'border-stone-light bg-white text-obsidian hover:border-obsidian'
                }`}
              >
                <div className="font-mono text-[10px] uppercase tracking-widest">{gene.symbol}</div>
                <div className="mt-1 font-sans text-xs opacity-70">{gene.direction === 'up' ? 'upregulated' : 'downregulated'}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MechanismExplorer() {
  const [state, setState] = useState<MechanismState>('overexpressed');
  const selected = mechanismCopy[state];

  const nodes = [
    { label: 'USP33', sub: 'deubiquitinating enzyme' },
    { label: 'UMP pathway', sub: 'ubiquitin-mediated proteolysis' },
    { label: 'MBP / PLPs', sub: 'myelin protein stability' },
    { label: 'Demyelination', sub: 'signal disruption in MS' },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-accent">
            Mechanism hypothesis
          </div>
          <h2 className="font-serif text-4xl leading-tight text-obsidian">
            The biological idea is about protein regulation becoming part of demyelination.
          </h2>
        </div>
        <p className="font-sans text-lg font-light leading-relaxed text-ink">
          Multiple sclerosis damages the myelin sheath around neurons. This project connects that clinical phenotype to a molecular path: USP33 overexpression, ubiquitin-mediated proteolysis, and potential degradation of myelin-related proteins such as MBP and PLPs.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="border border-stone-light bg-white p-6">
          <div className="mb-8 flex flex-wrap gap-2">
            {(Object.keys(mechanismCopy) as MechanismState[]).map((key) => (
              <button
                key={key}
                onClick={() => setState(key)}
                data-cursor="hover"
                className={`border px-4 py-2 font-mono text-[10px] uppercase tracking-widest transition-colors ${
                  state === key ? 'border-obsidian bg-obsidian text-bone' : 'border-stone-light bg-bone text-obsidian hover:border-obsidian'
                }`}
              >
                {mechanismCopy[key].label}
              </button>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {nodes.map((node, index) => (
              <div key={node.label} className="relative min-w-0">
                <div
                  className="min-h-[170px] border p-5 transition-colors"
                  style={{
                    borderColor: index === 0 ? selected.accent : '#E0E0DB',
                    backgroundColor: index === 0 ? `${selected.accent}12` : '#F5F5F2',
                  }}
                >
                  <div className="mb-8 font-mono text-[10px] uppercase tracking-widest text-stone-mid">
                    0{index + 1}
                  </div>
                  <div className="font-serif text-[30px] leading-tight text-obsidian">{node.label}</div>
                  <div className="mt-2 font-sans text-xs leading-relaxed text-stone-mid">{node.sub}</div>
                </div>
                {index < nodes.length - 1 && (
                  <ArrowRight className="absolute right-4 top-5 z-10 text-obsidian/40 xl:-right-4 xl:top-1/2 xl:-translate-y-1/2 xl:text-obsidian" size={20} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="border border-obsidian bg-obsidian p-8 text-bone">
          <Network className="mb-8 text-accent-warm" size={26} />
          <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-stone-300">
            {selected.label}
          </div>
          <h3 className="mb-5 font-serif text-3xl">{selected.headline}</h3>
          <p className="font-sans text-sm font-light leading-relaxed text-stone-200">{selected.description}</p>
        </div>
      </div>
    </section>
  );
}

function RnaiExplorer() {
  const [activeTool, setActiveTool] = useState<RnaiTool>('mirbase');
  const selected = rnaiTools[activeTool];
  const Icon = selected.icon;

  return (
    <section className="bg-obsidian text-bone">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-accent-warm">
            Phase 2
          </div>
          <h2 className="mb-6 font-serif text-4xl leading-tight">
            The therapeutic direction was RNAi: reduce USP33 expression instead of just describing it.
          </h2>
          <p className="font-sans text-lg font-light leading-relaxed text-stone-200">
            After identifying USP33, the next step was asking whether its expression could be intentionally downregulated. The poster moves through UCSC, ENCODE, JASPAR, and miRBase to connect gene location, regulatory structure, and RNAi feasibility.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {(Object.keys(rnaiTools) as RnaiTool[]).map((toolKey) => {
              const ToolIcon = rnaiTools[toolKey].icon;
              return (
                <button
                  key={toolKey}
                  onClick={() => setActiveTool(toolKey)}
                  data-cursor="hover"
                  className={`border p-4 text-left transition-colors ${
                    activeTool === toolKey ? 'border-accent-warm bg-accent-warm text-bone' : 'border-stone-mid text-stone-200 hover:border-bone'
                  }`}
                >
                  <ToolIcon size={18} className="mb-8" />
                  <div className="font-mono text-[10px] uppercase tracking-widest">{rnaiTools[toolKey].label}</div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="border border-stone-mid bg-bone p-8 text-obsidian">
          <Icon size={28} className="mb-8 text-accent" />
          <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-stone-mid">
            Active source
          </div>
          <h3 className="mb-3 font-serif text-3xl text-obsidian">{selected.label}</h3>
          <div className="mb-6 border-l-2 border-accent pl-5 font-serif text-2xl leading-snug text-obsidian">
            {selected.result}
          </div>
          <p className="font-sans text-base font-light leading-relaxed text-ink">{selected.detail}</p>
        </div>
      </div>
    </section>
  );
}

export default function Usp33DeubiquitinationPage() {
  return (
    <div className="relative min-h-screen bg-bone pt-16">
      <section className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/research"
            data-cursor="hover"
            className="mb-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-stone-mid hover:text-accent"
          >
            Back to research <ArrowRight size={12} />
          </Link>
          <div className="mb-5 inline-flex border border-stone-light bg-white px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-stone-mid">
            Bioinformatics / Neuroimmunology
          </div>
          <h1 className="mb-8 font-serif text-5xl leading-[1.02] tracking-tight text-obsidian md:text-7xl">
            Targeting USP33 in multiple sclerosis.
          </h1>
          <p className="max-w-3xl font-sans text-xl font-light leading-relaxed text-ink">
            This project started with a disease question: what molecular signals could help explain demyelination in MS, and could one of those signals become a therapeutic target? The page follows the work from gene expression analysis to the RNAi hypothesis.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border border-obsidian bg-white p-6 shadow-[8px_8px_0px_var(--color-obsidian)]"
        >
          <div className="mb-6 flex items-center justify-between">
            <div className="font-mono text-[10px] uppercase tracking-widest text-stone-mid">
              Central finding
            </div>
            <Dna size={18} className="text-accent" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['40', 'MS brain tissue samples'],
              ['10', 'control samples'],
              ['1.49E-08', 'USP33 p-value'],
              ['0.97364', 'USP33 logFC'],
            ].map(([value, label]) => (
              <div key={label} className="border-t border-stone-light pt-4">
                <div className="font-serif text-4xl text-obsidian">{value}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-stone-mid">{label}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 border-l-2 border-accent pl-5 font-sans text-sm leading-relaxed text-ink">
            USP33 was significantly overexpressed in MS samples and connected to ubiquitin-mediated proteolysis, a pathway relevant to protein degradation, immune activation, and demyelination.
          </div>
        </motion.div>
      </section>

      <GenePlot />
      <MechanismExplorer />
      <RnaiExplorer />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-accent">
              Evidence, limits, next experiments
            </div>
            <h2 className="font-serif text-4xl leading-tight text-obsidian">
              The page should make the ambition clear, but also show where the evidence still needs to grow.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="border border-stone-light bg-white p-6">
              <CheckCircle2 className="mb-6 text-accent" size={22} />
              <h3 className="mb-3 font-serif text-2xl text-obsidian">What worked</h3>
              <p className="font-sans text-sm leading-relaxed text-ink">
                The analysis connected a significantly dysregulated gene to a biologically meaningful pathway. KEGG identified ubiquitin-mediated proteolysis with FDR 2.61E-06, and STRING-DB added network context around USP33.
              </p>
            </div>
            <div className="border border-stone-light bg-white p-6">
              <AlertTriangle className="mb-6 text-accent-warm" size={22} />
              <h3 className="mb-3 font-serif text-2xl text-obsidian">What to be careful about</h3>
              <p className="font-sans text-sm leading-relaxed text-ink">
                The sample classes were imbalanced: 10 controls versus 40 MS samples. That means the USP33 signal is promising, but it should be treated as a hypothesis that needs validation rather than a completed therapeutic claim.
              </p>
            </div>
            <div className="border border-stone-light bg-white p-6 md:col-span-2">
              <FlaskConical className="mb-6 text-accent" size={22} />
              <h3 className="mb-3 font-serif text-2xl text-obsidian">Next experiments</h3>
              <p className="font-sans text-sm leading-relaxed text-ink">
                The next step is prospective validation: testing whether reducing USP33 changes MS-relevant biology. The poster points toward cDNA synthesis, IHC on MS brain samples, and drug-screening assays as the bridge from bioinformatics signal to experimental evidence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
