// ─── Founder log ─────────────────────────────────────────────────────────────
//
// Conversations with founders and operators, kept because talking to someone
// who has built one of these companies teaches me things reading cannot.
// Ordered by how widely known the company is, so the names a reader recognises
// sit near the top. Each note is a short description of what we covered.
// Adding one means putting a new object at the right place in the list.

export interface FounderNote {
  id: string;
  /** The person. */
  name: string;
  /** Where they are now. Rendered large, because it is the thing people scan for. */
  company: string;
  /** Title at that company, where I know it. Left out rather than guessed. */
  role?: string;
  /** Anything worth knowing about where they were before. */
  background?: string;
  /** What we talked about. */
  note: string;
  /** Set when the company has a memo, so the entry can link to it. */
  companyId?: string;
}

export const FOUNDER_NOTES: FounderNote[] = [
  {
    id: 'badreddin-edris',
    name: 'Badreddin Edris',
    company: 'Beeline Medicines',
    background: 'Previously co-founded Silverback Therapeutics and Edgewise Therapeutics',
    note: 'Career paths in biotech, and why moving toward promising opportunities beats working backward from a title you have already decided you want.',
    companyId: 'beeline-medicines',
  },
  {
    id: 'lava-sunder',
    name: 'Lava Sunder',
    company: 'Corner Health',
    role: 'Co-Founder and CEO',
    note: 'Her move out of consulting into founding Corner, and why hands-on time at an early-stage company counted for more than the McKinsey name did.',
  },
  {
    id: 'ben-grynol',
    name: 'Ben Grynol',
    company: 'Throne Science',
    role: 'VP of Growth',
    background: 'Previously a startup founder',
    note: 'Early-stage growth, and what it takes to build a business around passive health data collection.',
  },
  {
    id: 'douglas-mcmillin',
    name: 'Douglas McMillin',
    company: 'CORE Biomedicine',
    role: 'Head of Business Development and Operations',
    background: 'Former oncology startup founder',
    note: 'The technical rigour behind biotech business development, how to balance a broad platform against a focused lead asset, and how early pharma partnerships get structured.',
  },
  {
    id: 'keith-oneill',
    name: 'Keith O\'Neill',
    company: 'Vivid Dx',
    role: 'CEO',
    background: 'Co-Founder of Novus Diagnostics',
    note: 'Taking rapid sepsis diagnostics through clinical validation and into the market, including outcomes modelling, cost savings analysis and go-to-market.',
  },
  {
    id: 'rahul-shivkumar',
    name: 'Rahul Shivkumar',
    company: 'Assured',
    role: 'Co-Founder',
    background: 'Previously co-founded Dawn Health',
    note: 'How running a virtual clinic exposed the infrastructure problems underneath healthcare delivery.',
  },
  {
    id: 'ben-rathi',
    name: 'Ben Rathi',
    company: 'Blueprints for Pangaea',
    role: 'Founder and Chairman; Partner at Predictive VC',
    note: 'Blueprints in its early days, and his route from operating roles at McKinsey and Nuro into venture investing.',
  },
];

export const FOUNDER_COUNT = FOUNDER_NOTES.length;
