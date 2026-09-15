// ─── Founder log ─────────────────────────────────────────────────────────────
//
// People I have spoken to or written to while trying to understand how these
// companies actually get built. Ordered by how widely known the company is, so
// the names a reader recognises sit near the top. Adding one means putting a
// new object at the right place in the list. Nothing else needs to change.

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
  /** What the conversation was about, or what I took from it. */
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
    note: 'Careers do not have to follow a set path. His advice was to move toward promising opportunities rather than working backward from a title I had decided I wanted.',
    companyId: 'beeline-medicines',
  },
  {
    id: 'alex-sneider',
    name: 'Alex Sneider',
    company: 'Lila Sciences',
    role: 'Co-Founder and Head of LILA Origins',
    note: 'Reached out about building companies where AI, biology and scientific discovery meet.',
  },
  {
    id: 'arnon-horev',
    name: 'Arnon Horev',
    company: 'QuantHealth',
    role: 'Co-Founder, Chief Strategy and Operations Officer',
    note: 'Reached out about the business and commercial side of computational clinical trial modelling.',
  },
  {
    id: 'nishith-khandwala',
    name: 'Nishith Khandwala',
    company: 'Bunkerhill Health',
    role: 'Co-Founder and CEO',
    note: 'Reached out about turning medical imaging AI into something clinicians will actually adopt.',
  },
  {
    id: 'andrew-brimer',
    name: 'Andrew Brimer',
    company: 'Wellinks',
    background: 'Co-Founder of Sparo Health',
    note: 'Reached out about clinical validation, product trust, and whether people actually adopt remote monitoring.',
  },
  {
    id: 'lava-sunder',
    name: 'Lava Sunder',
    company: 'Corner Health',
    role: 'Co-Founder and CEO',
    note: 'Her move into founding Corner. What I took from it is that hands-on time at an early-stage company counted for more than the McKinsey name did on its own.',
  },
  {
    id: 'mark-lehmkuhle',
    name: 'Mark Lehmkuhle',
    company: 'Epitel',
    role: 'Founder and CTO',
    note: 'Reached out about turning neuroscience research into a remote EEG platform somebody will pay for.',
  },
  {
    id: 'ben-grynol',
    name: 'Ben Grynol',
    company: 'Throne Science',
    role: 'VP of Growth',
    background: 'Previously a startup founder',
    note: 'Reached out about early-stage growth and building a business around passive health data collection.',
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
    note: 'How running a virtual clinic exposed the infrastructure problems underneath healthcare delivery. He also told me my outreach messages were too long and too formal, which was fair and which I have since changed.',
  },
  {
    id: 'ben-rathi',
    name: 'Ben Rathi',
    company: 'Blueprints for Pangaea',
    role: 'Founder and Chairman; Partner at Predictive VC',
    note: 'Blueprints in its early days, and his route from operating roles at McKinsey and Nuro into venture investing. The substantive conversation is still to come.',
  },
];

export const FOUNDER_COUNT = FOUNDER_NOTES.length;
