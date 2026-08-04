import { CoverageEntry } from './types';
import { ENTRIES_2025 } from './entries-2025';
import { ENTRIES_2026_Q1 } from './entries-2026-q1';
import { ENTRIES_2026_Q2 } from './entries-2026-q2';
import { ENTRIES_2026_Q3 } from './entries-2026-q3';
import { ENTRIES_SUPPLEMENTAL } from './entries-supplemental';
import { ENTRIES_SCIENCE } from './entries-science';

export * from './types';

/** Everything, newest first. Add a new file here and it flows through the whole site. */
export const ALL_ENTRIES: CoverageEntry[] = [
  ...ENTRIES_2025,
  ...ENTRIES_2026_Q1,
  ...ENTRIES_2026_Q2,
  ...ENTRIES_2026_Q3,
  ...ENTRIES_SUPPLEMENTAL,
  ...ENTRIES_SCIENCE,
].sort((a, b) => (a.sortKey < b.sortKey ? 1 : a.sortKey > b.sortKey ? -1 : 0));

export function getEntriesForCompany(companyId: string): CoverageEntry[] {
  return ALL_ENTRIES.filter((e) => e.relatedCompanyIds?.includes(companyId));
}

export function getEntryById(id: string): CoverageEntry | undefined {
  return ALL_ENTRIES.find((e) => e.id === id);
}

export function getEntriesByTheme(theme: string): CoverageEntry[] {
  return ALL_ENTRIES.filter((e) => e.themes?.includes(theme));
}

/**
 * Plain substring search across the headline, the note itself, the date, any
 * companies it touches and its themes. Deliberately simple: the archive is a
 * few hundred entries, so there is no reason to build an index.
 */
export function searchEntries(entries: CoverageEntry[], query: string): CoverageEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return entries;
  const terms = q.split(/\s+/);
  return entries.filter((e) => {
    const haystack = [
      e.headline,
      e.analysis,
      e.entryDate,
      e.eventDate ?? '',
      ...(e.relatedCompanyIds ?? []),
      ...(e.themes ?? []),
      ...e.sources.map((s) => `${s.title} ${s.publisher}`),
    ]
      .join(' ')
      .toLowerCase();
    return terms.every((t) => haystack.includes(t));
  });
}

/** Groups the stream by month for the date rail in the UI. */
export function groupByMonth(entries: CoverageEntry[]): { label: string; entries: CoverageEntry[] }[] {
  const out: { label: string; entries: CoverageEntry[] }[] = [];
  for (const e of entries) {
    const [year, month] = e.sortKey.split('-');
    const label = `${
      [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ][Number(month) - 1]
    } ${year}`;
    const last = out[out.length - 1];
    if (last && last.label === label) last.entries.push(e);
    else out.push({ label, entries: [e] });
  }
  return out;
}

export const COVERAGE_COUNT = ALL_ENTRIES.length;
