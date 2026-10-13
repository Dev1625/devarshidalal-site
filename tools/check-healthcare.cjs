const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const cache = new Map();
function load(file) {
  file = path.resolve(file);
  if (cache.has(file)) return cache.get(file);
  const exported = {};
  cache.set(file, exported);
  const compiled = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  new Function('exports', 'require', compiled)(exported, name => {
    const candidate = path.resolve(path.dirname(file), name);
    return load(fs.existsSync(candidate + '.ts') ? candidate + '.ts' : path.join(candidate, 'index.ts'));
  });
  return exported;
}
const { COMPANIES, ACTIVE_COMPANIES, ARCHIVED_COMPANIES, MACRO_THESIS } = load('lib/fund.ts');
const { ALL_ENTRIES, FEATURED_IDS } = load('lib/coverage/index.ts');
const { THESIS_HISTORY } = load('lib/thesis-history.ts');
const errors = [];
const unique = (items, label) => {
  const ids = new Set();
  for (const item of items) { if (ids.has(item.id)) errors.push(`Duplicate ${label}: ${item.id}`); ids.add(item.id); }
  return ids;
};
const companies = unique(COMPANIES, 'company');
const entries = unique(ALL_ENTRIES, 'entry');
const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
function sources(items, context) {
  if (!items?.length) errors.push(`Missing sources: ${context}`);
  for (const item of items || []) {
    try { if (new URL(item.url).protocol !== 'https:') errors.push(`Non-HTTPS source: ${context}`); }
    catch { errors.push(`Invalid source URL: ${context}`); }
  }
}
for (const entry of ALL_ENTRIES) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(entry.sortKey) || Number.isNaN(Date.parse(entry.sortKey))) errors.push(`Invalid date: ${entry.id}`);
  if (entry.sortKey > today) errors.push(`Future-dated note: ${entry.id}`);
  sources(entry.sources, entry.id);
  for (const id of entry.relatedCompanyIds || []) if (!companies.has(id)) errors.push(`Missing company ${id} in ${entry.id}`);
  for (const id of entry.relatedEntryIds || []) if (!entries.has(id)) errors.push(`Missing related note ${id} in ${entry.id}`);
}
for (const company of COMPANIES) {
  if (company.status === 'archived' && !company.archivedReason) errors.push(`Missing archive reason: ${company.id}`);
  if (company.lastReviewed) sources(company.sources, company.id);
  for (const key of ['summary', 'problem', 'product', 'whyNow', 'market', 'competition', 'team', 'view']) if (!company[key]?.trim()) errors.push(`Empty memo field ${key}: ${company.id}`);
}
for (const id of FEATURED_IDS) if (!entries.has(id)) errors.push(`Missing featured entry: ${id}`);
if (ACTIVE_COMPANIES.length + ARCHIVED_COMPANIES.length !== COMPANIES.length) errors.push('Company partition lost a memo');
if (!THESIS_HISTORY.length) errors.push('Missing prior thesis');
sources(MACRO_THESIS.sources, 'macro thesis');
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`Healthcare content valid: ${ACTIVE_COMPANIES.length} current, ${ARCHIVED_COMPANIES.length} archived, ${ALL_ENTRIES.length} notes, ${THESIS_HISTORY.length} prior thesis.`);
