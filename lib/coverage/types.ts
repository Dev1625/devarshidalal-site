// ─── Coverage entry model ────────────────────────────────────────────────────
//
// An entry is one dated note. It may be attached to companies I follow, or it
// may stand on its own when the development is about the industry rather than
// about any one business. Adding a new entry means appending an object to one
// of the files in this directory. Nothing else needs to change.

export type EntryType =
  | 'financing'
  | 'ma-licensing'
  | 'platform'
  | 'people'
  | 'clinical'
  | 'regulation-policy'
  | 'care-delivery'
  | 'industry-observation';

export type EntryScope = 'company' | 'industry';

export type EntryStatus = 'current-view' | 'superseded' | 'retrospective';

export interface SourceLink {
  title: string;
  publisher: string;
  url: string;
  publishedAt?: string;
}

export interface CoverageEntry {
  id: string;
  headline: string;
  /** Display date for the note. */
  entryDate: string;
  /** ISO date used for sorting. */
  sortKey: string;
  /** When the underlying event happened, if it differs from when I wrote. */
  eventDate?: string;
  /** The note itself. Blank lines separate paragraphs. */
  analysis: string;
  entryType: EntryType;
  scope: EntryScope;
  themes?: string[];
  relatedCompanyIds?: string[];
  /** Ids of earlier or later entries this one speaks to. */
  relatedEntryIds?: string[];
  sources: SourceLink[];
  status?: EntryStatus;
}

export const ENTRY_TYPE_LABELS: Record<EntryType, string> = {
  financing: 'Financing',
  'ma-licensing': 'M&A and licensing',
  platform: 'Platforms',
  people: 'People',
  clinical: 'Science and regulation',
  'regulation-policy': 'Policy',
  'care-delivery': 'Care delivery',
  'industry-observation': 'Industry',
};

/**
 * The notes I would show someone first. Curated by hand rather than by a rule,
 * because "this one is good" is a judgment. Mostly the longer pieces, the calls
 * that later landed or fell over, and the science I actually care about.
 * To add one, put its id here.
 */
export const FEATURED_IDS = new Set<string>([
  // Science and what it makes possible
  '2025-11-kj-muldoon',
  '2025-12-lenacapavir',
  '2026-06-lenacapavir-south-africa',
  '2025-12-xeno-ind',
  '2026-06-xeno-animal-testing-tension',
  '2025-12-ai-antibiotics',
  '2026-01-mrna-vaccine-5yr',
  '2026-06-rfdiffusion3',
  '2026-07-manufacturing-is-the-bottleneck',
  '2026-08-what-im-most-excited-about',
  // Calls I made early and what happened to them
  '2026-01-nam-prediction',
  '2026-03-nam-guidance-confirms',
  '2026-02-invivo-cart-call',
  '2026-04-kelonia-confirms-call',
  '2026-08-what-i-am-looking-for-next',
  // Where I was wrong
  '2026-05-turn-bio-auction',
  '2026-08-what-i-got-wrong',
  '2026-01-openevidence-series-d',
  '2026-06-epic-toolbox-revision',
  // The threads I keep pulling on
  '2026-01-nvidia-lilly-lab',
  '2026-06-nvidia-everywhere',
  '2026-08-nvidia-strategy-revision',
  '2026-06-anthropic-claude-science',
  '2026-08-what-counts-as-validation',
  '2026-07-lilly-pattern',
  '2026-01-patent-cliff-scale',
  '2026-07-china-innovation-question',
  '2026-03-stroke-bottleneck',
  '2026-06-abridge-nvidia-lilly',
]);

/** Filters shown above the stream. Deliberately few. */
export const FILTERS: { id: string; label: string; match: (e: CoverageEntry) => boolean }[] = [
  { id: 'all', label: 'All', match: () => true },
  { id: 'best', label: 'Start here', match: (e) => FEATURED_IDS.has(e.id) },
  { id: 'companies', label: 'Companies I follow', match: (e) => e.scope === 'company' },
  { id: 'industry', label: 'Industry', match: (e) => e.scope === 'industry' },
  { id: 'financing', label: 'Financing', match: (e) => e.entryType === 'financing' },
  { id: 'ma-licensing', label: 'M&A and licensing', match: (e) => e.entryType === 'ma-licensing' },
  {
    id: 'science',
    label: 'Science and regulation',
    match: (e) => e.entryType === 'clinical' || e.entryType === 'regulation-policy',
  },
  { id: 'people', label: 'People', match: (e) => e.entryType === 'people' },
  { id: 'care-delivery', label: 'Care delivery', match: (e) => e.entryType === 'care-delivery' },
  { id: 'platform', label: 'Platforms', match: (e) => e.entryType === 'platform' },
];

/** Themes that thread through many entries. Used for cross-linking, not decoration. */
export const THEMES: Record<string, string> = {
  'patent-cliff': 'Patent cliffs',
  'china-licensing': 'China licensing',
  bionemo: 'NVIDIA and BioNeMo',
  'anthropic-life-sciences': 'Anthropic in life sciences',
  'lilly-ma': 'Lilly acquisition strategy',
  stroke: 'Stroke care',
  aging: 'Aging and senior care',
  tariffs: 'Pharma tariffs',
  obesity: 'Obesity and GLP-1',
  'ambient-ai': 'Ambient clinical AI',
  bci: 'Brain-computer interfaces',
  'ai-drug-discovery': 'AI drug discovery',
  'ipo-window': 'The IPO window',
  'capital-concentration': 'Where the capital went',
  'gene-editing': 'Gene editing',
  'cell-therapy': 'Cell therapy',
  'cancer-vaccines': 'Cancer vaccines',
  xenotransplantation: 'Xenotransplantation',
  nams: 'Replacing animal testing',
  diagnostics: 'Diagnostics',
  'global-health': 'Global health',
};
