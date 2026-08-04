import { CoverageEntry } from './types';

// January through March 2026.

export const ENTRIES_2026_Q1: CoverageEntry[] = [
  {
    id: '2026-01-lilly-ventyx',
    headline: 'Lilly opens the year with Ventyx',
    entryDate: 'January 8, 2026',
    sortKey: '2026-01-08',
    entryType: 'ma-licensing',
    scope: 'industry',
    themes: ['lilly-ma'],
    analysis:
      'Immunology and inflammation, small molecules. Eight days into the year and Lilly has already done a deal. I am starting to think the right way to model this company is not as a drug developer that occasionally acquires, but as an acquirer that happens to have the best cash flow in the industry.',
    sources: [
      {
        title: 'What\'s the Driving Force Behind Eli Lilly\'s Recent Acquisition Spree?',
        publisher: 'Nasdaq',
        url: 'https://www.nasdaq.com/articles/whats-driving-force-behind-eli-lillys-recent-acquisition-spree',
      },
    ],
  },
  {
    id: '2026-01-nvidia-lilly-lab',
    headline: 'NVIDIA and Lilly put up to $1B into a shared lab, and BioNeMo becomes a platform',
    entryDate: 'January 12, 2026',
    sortKey: '2026-01-12',
    eventDate: 'J.P. Morgan Healthcare Conference',
    entryType: 'platform',
    scope: 'industry',
    themes: ['bionemo', 'lilly-ma', 'ai-drug-discovery'],
    relatedEntryIds: ['2025-12-nvidia-position'],
    analysis:
      'Announced at JPM. A five-year arrangement worth up to $1 billion, building a Bay Area co-innovation lab where Lilly scientists sit with NVIDIA model builders. Alongside it, BioNeMo expanded from a set of models into an open development platform aimed at lab-in-the-loop workflows, where a model proposes, an automated lab tests, and the result feeds back into training.\n\nIn December I wrote that NVIDIA does not need to own the end product because it wins whenever anyone tries. This deal complicates that. Co-locating engineers inside a pharma partner and building models against that partner\'s proprietary data is not infrastructure supply. It is participating in discovery.\n\nThe question I have not resolved is who owns what comes out. If Lilly owns the models trained on Lilly data, NVIDIA is a very well-paid consultant with a hardware attachment. If NVIDIA retains anything generalisable, it is quietly assembling a position in drug discovery without taking clinical risk, which would be the best trade in the sector.\n\nEither way, the read-through for AI drug discovery startups is uncomfortable. Their pitch to pharma has been that they have modelling capability pharma lacks. Lilly just bought that capability directly from the company that sells everyone the compute.',
    sources: [
      {
        title: 'NVIDIA and Lilly Announce Co-Innovation AI Lab to Reinvent Drug Discovery',
        publisher: 'NVIDIA Newsroom',
        url: 'https://nvidianews.nvidia.com/news/nvidia-and-lilly-announce-co-innovation-lab-to-reinvent-drug-discovery-in-the-age-of-ai',
        publishedAt: 'January 12, 2026',
      },
      {
        title: 'NVIDIA Bets Big on AI-Driven Drug Discovery, Physical AI, and a $1 Billion Eli Lilly Partnership',
        publisher: 'Bio-IT World',
        url: 'https://www.bio-itworld.com/news/2026/01/12/nvidia-bets-big-on-ai-driven-drug-discovery--physical-ai--and-a--1-billion-eli-lilly-partnership',
        publishedAt: 'January 12, 2026',
      },
    ],
  },
  {
    id: '2026-01-bionemo-adoption',
    headline: 'BioNeMo picks up Thermo Fisher, Chai, Basecamp and Boltz',
    entryDate: 'January 12, 2026',
    sortKey: '2026-01-12',
    entryType: 'platform',
    scope: 'industry',
    themes: ['bionemo'],
    analysis:
      'The Thermo Fisher piece is the one I would not skip. Thermo makes the instruments. If instruments become intelligent and labs become closer to autonomous, the lab-in-the-loop idea stops being a slide and starts being a physical system NVIDIA and Thermo jointly control.\n\nChai Discovery, Basecamp Research and Boltz joining the ecosystem is a different signal. Those are exactly the companies whose model work could be commoditised by a good free platform. Building on it is probably correct and it does concede the model layer.',
    sources: [
      {
        title: 'NVIDIA BioNeMo Platform Adopted by Life Sciences Leaders',
        publisher: 'NVIDIA Newsroom',
        url: 'https://nvidianews.nvidia.com/news/nvidia-bionemo-platform-adopted-by-life-sciences-leaders-to-accelerate-ai-driven-drug-discovery',
        publishedAt: 'January 12, 2026',
      },
    ],
  },
  {
    id: '2026-01-svb-report',
    headline: 'Healthcare investment fell 12% while AI took 46% of it',
    entryDate: 'January 2026',
    sortKey: '2026-01-14',
    entryType: 'industry-observation',
    scope: 'industry',
    themes: ['capital-concentration'],
    analysis:
      'SVB\'s annual report puts 2025 healthcare investment at $46.8 billion, down 12 percent. Biopharma fell 19 percent and diagnostics and tools fell 33 percent. Healthtech and devices grew slightly. AI companies took 46 percent of the total, somewhere over $18 billion.\n\nSo AI did not grow healthcare investing. It took a bigger share of a shrinking pool. Those are very different stories and the second one is being told far less often.\n\nThe figure I keep returning to is upstream of all of it: healthcare-focused venture firms raised about $7 billion in new funds in 2025, against roughly $41 billion at the 2021 peak. The limited partners left. Everything downstream of that, including the flight toward companies with clinical data, follows from firms deploying older and smaller funds that cannot afford many misses.',
    sources: [
      {
        title: 'AI Investment Accounted for Nearly Half of Healthcare Investment in 2025',
        publisher: 'Silicon Valley Bank',
        url: 'https://www.svb.com/news/company-news/ai-investment-accounted-for-nearly-half-of-healthcare-investment-in-2025-silicon-valley-bank-releases-17th-healthcare-investments-and-exits-report/',
      },
    ],
  },
  {
    id: '2026-01-rock-health-2025',
    headline: 'Digital health raised $14.2B and nine companies distorted the whole picture',
    entryDate: 'January 2026',
    sortKey: '2026-01-13',
    entryType: 'financing',
    scope: 'industry',
    themes: ['capital-concentration'],
    analysis:
      'Rock Health puts US digital health at $14.2 billion in 2025, up 35 percent from $10.5 billion. AI-labelled companies took 54 percent of dollars, up from 37 percent, and raised at roughly a 19 percent size premium. Average deal size went from $20.7 million to $29.3 million.\n\nThe line that matters is buried: strip out the top nine companies by dollars raised and the 2025 total falls below 2024. So the sector did not recover. Nine companies had an extraordinary year and everyone else had a worse one than the headline suggests.\n\nIf you are a Series A digital health company reading a story about a 35 percent increase, that number has nothing to do with your fundraising.',
    sources: [
      {
        title: '2025 year-end digital health funding overview: A tale of two markets',
        publisher: 'Rock Health',
        url: 'https://rockhealth.com/insights/2025-year-end-digital-health-funding-overview-a-tale-of-two-markets/',
      },
    ],
  },
  {
    id: '2026-01-openevidence-series-d',
    headline: 'OpenEvidence at $12B, and the revenue answers what I asked in November',
    entryDate: 'January 21, 2026',
    sortKey: '2026-01-21',
    entryType: 'financing',
    scope: 'company',
    relatedCompanyIds: ['openevidence'],
    relatedEntryIds: ['2025-11-openevidence-c-round'],
    status: 'current-view',
    analysis:
      'A $250 million Series D co-led by Thrive and DST at $12 billion, roughly doubling the October mark and bringing total funding to about $700 million.\n\nIn November I wrote that I could not tell whether this was a business or a distribution experiment, because the product is free and free products produce meaningless signup numbers. The operating figures released with this round settle it. Revenue went from roughly $7.9 million annualised in 2024 to about $150 million in 2025, at gross margins near 90 percent. Consultations are around 20 million a month against about 3 million a year earlier.\n\nThat is not soft engagement. Ninety percent gross margin on advertising revenue is a software profile, and a physician choosing to use something during a live visit is a much harder behaviour to manufacture than a registration.\n\nI was wrong to be as sceptical as I was, and specifically wrong about which number to look at. My remaining concern is narrower and more boring: $12 billion on $150 million of revenue is priced for everything going right, and the revenue is pharma advertising, which is cyclical and will eventually attract a regulator asking how the ad layer is separated from the answer layer.',
    sources: [
      {
        title: 'OpenEvidence hits $12B valuation, with new round led by Thrive, DST',
        publisher: 'TechCrunch',
        url: 'https://techcrunch.com/2026/01/21/openevidence-hits-12b-valuation-with-new-round-led-by-thrive-dst/',
        publishedAt: 'January 21, 2026',
      },
      {
        title: 'OpenEvidence revenue, valuation and funding',
        publisher: 'Sacra',
        url: 'https://sacra.com/c/openevidence/',
      },
    ],
  },
  {
    id: '2026-01-isomorphic-delay',
    headline: 'Isomorphic slips a year, and nobody seems to mind',
    entryDate: 'January 20, 2026',
    sortKey: '2026-01-20',
    eventDate: 'World Economic Forum, Davos',
    entryType: 'clinical',
    scope: 'company',
    relatedCompanyIds: ['isomorphic-labs'],
    themes: ['ai-drug-discovery'],
    analysis:
      'Hassabis said at Davos that Isomorphic expects its first clinical trials by the end of 2026. A year earlier he had said end of 2025.\n\nMost of the coverage led with the ambition and mentioned the revision in passing. I think that is the wrong emphasis. The entire argument for computational drug design is that it is faster. The first public test of that argument came in a year late, on the one milestone that cannot be substituted with a benchmark.\n\nThis does not falsify anything. Preclinical work slips constantly and a year is small by pharma standards. But it does mean that as of today, after roughly $2.7 billion of committed capital across the category leader, the evidence base has not moved since 2024.',
    sources: [
      {
        title: 'Google-backed Isomorphic Labs delays clinical trial timeline',
        publisher: 'Reuters',
        url: 'https://finance.yahoo.com/news/google-backed-ai-drug-discovery-195423147.html',
        publishedAt: 'January 2026',
      },
    ],
  },
  {
    id: '2026-01-bioage-bge102-more',
    headline: 'More BGE-102 interim data',
    entryDate: 'January 12, 2026',
    sortKey: '2026-01-12',
    entryType: 'clinical',
    scope: 'company',
    relatedCompanyIds: ['bioage-labs'],
    analysis:
      'Additional interim Phase 1 results in participants with elevated cardiovascular risk, again centred on hsCRP reduction. Worth keeping straight that hsCRP is an inflammation marker, not an outcome. Moving it is necessary and nowhere near sufficient, and the graveyard of anti-inflammatory cardiovascular programs is full of drugs that moved CRP.',
    sources: [
      {
        title: 'BioAge Announces Additional Positive Interim Phase 1 Data for BGE-102',
        publisher: 'BioAge Labs',
        url: 'https://ir.bioagelabs.com/news-releases/news-release-details/bioage-announces-additional-positive-interim-phase-1-data-bge',
        publishedAt: 'January 12, 2026',
      },
    ],
  },
  {
    id: '2026-01-bioage-dme',
    headline: 'BioAge adds an eye indication, which tells you about the balance sheet',
    entryDate: 'January 20, 2026',
    sortKey: '2026-01-20',
    entryType: 'clinical',
    scope: 'company',
    relatedCompanyIds: ['bioage-labs'],
    analysis:
      'BGE-102 expands into diabetic macular edema with a Phase 1b/2a planned for mid-2026. Adding a second indication before the first has a Phase 2 result is usually a sign a company wants more shots on goal with the cash it has. Retinal disease also has shorter, cheaper trials with visible endpoints, so it is a sensible place to look for a faster signal.',
    sources: [
      {
        title: 'BioAge Announces Indication Expansion for BGE-102',
        publisher: 'BioAge Labs',
        url: 'https://ir.bioagelabs.com/news-releases/news-release-details/bioage-announces-indication-expansion-oral-nlrp3-inhibitor-bge',
        publishedAt: 'January 20, 2026',
      },
    ],
  },
  {
    id: '2026-01-fda-cnpv',
    headline: 'The FDA priority voucher is a bigger deal than it sounds',
    entryDate: 'January 2026',
    sortKey: '2026-01-16',
    entryType: 'regulation-policy',
    scope: 'industry',
    analysis:
      'The Commissioner\'s National Priority Voucher pilot compresses review from ten to twelve months down to one or two, for drugs touching five stated priorities including onshoring and supply chain resilience.\n\nA voucher that saves nine months of review is worth an enormous amount on a drug with real revenue, and it is now partly awarded on whether you manufacture domestically. Read alongside the tariff, this is the same industrial policy arriving through a second door. The government is not only taxing imports, it is paying for onshoring in regulatory time.',
    sources: [
      {
        title: 'Commissioner\'s National Priority Voucher (CNPV) Pilot Program',
        publisher: 'FDA',
        url: 'https://www.fda.gov/industry/commissioners-national-priority-voucher-cnpv-pilot-program',
      },
    ],
  },
  {
    id: '2026-01-fda-cds-guidance',
    headline: 'FDA updates its clinical decision support guidance',
    entryDate: 'January 2026',
    sortKey: '2026-01-26',
    entryType: 'regulation-policy',
    scope: 'industry',
    themes: ['ambient-ai'],
    analysis:
      'Refreshed guidance on general wellness products and clinical decision support software. The line that has always mattered in CDS is whether the clinician can independently review the basis for a recommendation. Software that shows its reasoning stays outside device regulation. Software that just outputs an answer does not.\n\nThat is worth holding next to every clinical AI company currently competing on how confident its answers sound.',
    sources: [
      {
        title: 'FDA Adapts with the Times on Digital Health',
        publisher: 'Ropes & Gray',
        url: 'https://www.ropesgray.com/en/insights/alerts/2026/01/fda-adapts-with-the-times-on-digital-health-updated-guidances-on-general-wellness-products',
        publishedAt: 'January 2026',
      },
    ],
  },
  {
    id: '2026-01-jpm-fda-panel',
    headline: 'FDA panellists at JPM talk about national security more than science',
    entryDate: 'January 2026',
    sortKey: '2026-01-15',
    entryType: 'regulation-policy',
    scope: 'industry',
    themes: ['tariffs', 'china-licensing'],
    analysis:
      'Faster approvals, national security, AI. The presence of national security in a drug regulator\'s stated priorities is new and it connects the tariff, the priority voucher and the growing scrutiny of Chinese-origin assets into one policy posture rather than three separate stories.',
    sources: [
      {
        title: 'JPM 2026: FDA panelists prioritize faster approvals, national security, AI, and more',
        publisher: 'Hogan Lovells',
        url: 'https://www.hoganlovells.com/en/publications/jpm-2026-fda-panelists-prioritize-faster-approvals-national-security-ai-and-more',
      },
    ],
  },
  {
    id: '2026-01-obesity-pills-year',
    headline: 'The obesity market turns into a pill market',
    entryDate: 'January 2026',
    sortKey: '2026-01-10',
    entryType: 'industry-observation',
    scope: 'industry',
    themes: ['obesity'],
    analysis:
      'Novo\'s oral semaglutide is rolling out and Lilly\'s orforglipron is close behind. Between them these two companies hold something like 87 percent of prescription weight management revenue.\n\nThe thing I find most interesting is that orforglipron is a small molecule rather than a peptide. That means normal chemical manufacturing rather than the capacity constraints that have defined this market for three years, and no dietary restrictions around dosing. If the efficacy is anywhere near competitive, the supply advantage alone reshapes share.',
    sources: [
      {
        title: '2026 is the year of obesity pills',
        publisher: 'CNBC',
        url: 'https://www.cnbc.com/2026/01/10/2026-is-the-year-of-obesity-pills-from-novo-nordisk-eli-lilly-.html',
        publishedAt: 'January 10, 2026',
      },
    ],
  },
  {
    id: '2026-01-patent-cliff-scale',
    headline: 'Putting a number on the cliff everyone keeps referring to',
    entryDate: 'January 2026',
    sortKey: '2026-01-28',
    entryType: 'industry-observation',
    scope: 'industry',
    themes: ['patent-cliff'],
    analysis:
      'I wanted to get the actual exposure straight rather than keep repeating that a cliff is coming.\n\nKeytruda is the big one. Roughly $29.5 billion of 2023 revenue for Merck, with core US loss of exclusivity around 2028. Eliquis, over $10 billion a year for BMS and Pfizer, with key US patents expiring between 2027 and 2029. Opdivo, around $9 billion, also 2028. Stelara at $10.8 billion for J&J already entering biosimilar competition.\n\nEstimates for total industry revenue at risk between now and 2030 run north of $230 billion, with some projections reaching $400 billion by 2033.\n\nBMS is the most exposed because Eliquis and Opdivo land in the same narrow window, which is why analysts describe it as having the largest growth gap among large-cap pharma. Merck has more time but a more concentrated problem, since Keytruda alone is a larger share of revenue than most companies\' entire portfolios.\n\nOnce you hold these numbers, most of the M&A this year stops looking like enthusiasm and starts looking like arithmetic. A company facing a $25 billion hole in 2028 can rationally pay $6 billion in 2026 for something that might fill a fifth of it.',
    sources: [
      {
        title: 'Blockbuster Drugs on Patent Cliffs Research Report 2025-2030',
        publisher: 'GlobeNewswire',
        url: 'https://www.globenewswire.com/fr/news-release/2025/07/28/3122199/0/en/Blockbuster-Drugs-on-Patent-Cliffs-Research-Report-2025-2030-Patent-Cliff-to-Be-Largest-Since-2010-Hitting-Blockbusters-Like-Keytruda-Eliquis-and-Darzalex.html',
      },
      {
        title: 'Blockbuster drugs face a massive patent cliff in 2026',
        publisher: 'Drug Discovery News',
        url: 'https://www.drugdiscoverynews.com/blockbuster-drugs-face-a-massive-patent-cliff-in-2026-17019',
      },
    ],
  },
  {
    id: '2026-01-bms-cliff',
    headline: 'BMS has the worst two-year window in the industry',
    entryDate: 'January 2026',
    sortKey: '2026-01-29',
    entryType: 'industry-observation',
    scope: 'industry',
    themes: ['patent-cliff'],
    analysis:
      'Eliquis and Opdivo both come off within roughly the same stretch, which is why the estimated growth gap for BMS is around $38 billion. Most large pharma gets to stagger its cliffs. BMS does not.\n\nThe practical consequence for anyone selling a late-stage asset is that BMS is the buyer with the least ability to walk away, and that is worth knowing before you set a price.',
    sources: [
      {
        title: 'Blockbuster Drugs on Patent Cliffs Research Report 2025-2030',
        publisher: 'GlobeNewswire',
        url: 'https://www.globenewswire.com/fr/news-release/2025/07/28/3122199/0/en/Blockbuster-Drugs-on-Patent-Cliffs-Research-Report-2025-2030-Patent-Cliff-to-Be-Largest-Since-2010-Hitting-Blockbusters-Like-Keytruda-Eliquis-and-Darzalex.html',
      },
    ],
  },
  {
    id: '2026-01-china-share',
    headline: 'A third of large pharma licensing now starts in China',
    entryDate: 'January 2026',
    sortKey: '2026-01-24',
    entryType: 'ma-licensing',
    scope: 'industry',
    themes: ['china-licensing'],
    relatedEntryIds: ['2025-11-china-licensing-scale'],
    analysis:
      'Total China-origin out-licensing value reached roughly $135.7 billion for 2025, close to triple the prior record. Something like 38 percent of large pharma licensing deals now originate with Chinese partners, accounting for around 30 percent of industry upfront payments.\n\nWhat changed is not that Chinese biotech got cheaper. It got faster. A company that can enrol a trial in months rather than years arrives at human data while a comparable Western program is still raising a Series B.\n\nI do not think this is uniform, and I want to be careful not to flatten it. The strength appears concentrated in modalities where fast follower chemistry works well, particularly antibody-drug conjugates and bispecifics. That is different from claiming Chinese biotech leads on novel biology.',
    sources: [
      {
        title: 'China Biotech Outbound Licensing Tracker 2026',
        publisher: 'Vision Life Sciences',
        url: 'https://visionlifesciences.com/insights/china-biotech-outbound-licensing-tracker',
      },
      {
        title: 'Deepening Ties: Why China is Becoming Big Pharma\'s Most Essential R&D Partner',
        publisher: 'Pharmaceutical Executive',
        url: 'https://www.pharmexec.com/view/deepening-ties-why-china-becoming-big-pharma-most-essential-rd-partner',
      },
    ],
  },
  {
    id: '2026-01-astrazeneca-cspc',
    headline: 'AstraZeneca and CSPC, and what an $18.5B China deal implies',
    entryDate: 'January 2026',
    sortKey: '2026-01-25',
    entryType: 'ma-licensing',
    scope: 'industry',
    themes: ['china-licensing', 'obesity'],
    analysis:
      'An obesity and metabolic agreement reported at up to $18.5 billion in total value with roughly $1.2 billion upfront. A $1.2 billion upfront is not an option payment. That is a company buying conviction.\n\nIt also tells you AstraZeneca decided the fastest route into metabolic disease was to license rather than build. Given how far ahead Lilly and Novo are, that is probably right, and it is the clearest example yet of China being used as external R&D capacity rather than as a discount rack.',
    sources: [
      {
        title: 'China Biotech Outbound Licensing Tracker 2026',
        publisher: 'Vision Life Sciences',
        url: 'https://visionlifesciences.com/insights/china-biotech-outbound-licensing-tracker',
      },
    ],
  },
  {
    id: '2026-01-gsk-hengrui',
    headline: 'GSK and Hengrui, twelve programs at once',
    entryDate: 'January 2026',
    sortKey: '2026-01-26',
    entryType: 'ma-licensing',
    scope: 'industry',
    themes: ['china-licensing'],
    analysis:
      'Reported at up to roughly $12 billion across as many as twelve programs, with around $500 million upfront. The structure is what interests me. Buying twelve shots rather than one is a portfolio purchase, and it implies GSK is treating Hengrui less as a partner on a specific asset and more as an outsourced discovery engine.',
    sources: [
      {
        title: 'China Biotech Outbound Licensing Tracker 2026',
        publisher: 'Vision Life Sciences',
        url: 'https://visionlifesciences.com/insights/china-biotech-outbound-licensing-tracker',
      },
    ],
  },
  {
    id: '2026-01-precision-waiting',
    headline: 'Still no chronic implant from Precision',
    entryDate: 'January 2026',
    sortKey: '2026-01-30',
    entryType: 'clinical',
    scope: 'company',
    relatedCompanyIds: ['precision-neuroscience'],
    themes: ['bci'],
    analysis:
      'The company has been pointing at a first-in-human chronic wireless implant during 2026 and there is nothing yet. Noting the absence rather than waiting for news, because I want the habit of recording when something I expected has not happened. Implantable neurotech timelines slip as a rule, so a few months means little on its own.',
    sources: [
      {
        title: 'Precision Neuroscience Receives FDA Clearance for High-Resolution Cortical Electrode Array',
        publisher: 'GlobeNewswire',
        url: 'https://www.globenewswire.com/news-release/2025/04/17/3063418/0/en/Precision-Neuroscience-Receives-FDA-Clearance-for-High-Resolution-Cortical-Electrode-Array/',
      },
    ],
  },
  {
    id: '2026-02-lilly-orna',
    headline: 'Lilly buys Orna for up to $2.4B and keeps buying delivery',
    entryDate: 'February 11, 2026',
    sortKey: '2026-02-11',
    entryType: 'ma-licensing',
    scope: 'industry',
    themes: ['lilly-ma', 'patent-cliff'],
    analysis:
      'Circular RNA and the delivery technology around it. This is the fourth or fifth time in about a year that Lilly has bought a way of getting a molecule into a cell rather than a specific molecule.\n\nThe price looks steep if you value only the lead program. It looks reasonable if what Lilly is actually buying is a delivery platform plus a team, because delivery is the constraint on genetic medicine and it is the part that is slowest to reproduce internally. That distinction decides whether this is an expensive asset purchase or an admission that building it in-house would take longer than the patent cliff allows.',
    sources: [
      {
        title: 'What\'s the Driving Force Behind Eli Lilly\'s Recent Acquisition Spree?',
        publisher: 'Nasdaq',
        url: 'https://www.nasdaq.com/articles/whats-driving-force-behind-eli-lillys-recent-acquisition-spree',
      },
    ],
  },
  {
    id: '2026-02-lilly-novo-divergence',
    headline: 'Lilly is still growing while Novo braces for a decline',
    entryDate: 'February 4, 2026',
    sortKey: '2026-02-04',
    entryType: 'industry-observation',
    scope: 'industry',
    themes: ['obesity'],
    analysis:
      'Fourth quarter earnings from both. Lilly\'s GLP-1 franchise keeps compounding, Novo is guiding toward a decline.\n\nTwo companies, the same market, opposite directions. The clean explanation is tirzepatide simply works better than semaglutide on weight, and once that became widely accepted, prescriber behaviour moved. It is a reminder that in a category with two credible options, head-to-head efficacy differences that look modest in a trial produce enormous commercial divergence.',
    sources: [
      {
        title: 'Eli Lilly\'s GLP-1 growth is only getting started as Novo Nordisk braces for a decline in 2026',
        publisher: 'CNBC',
        url: 'https://www.cnbc.com/2026/02/04/eli-lilly-novo-nordisk-earnings-glp1-market.html',
        publishedAt: 'February 4, 2026',
      },
    ],
  },
  {
    id: '2026-02-abbvie-apogee',
    headline: 'AbbVie pays $10.9B for Apogee',
    entryDate: 'February 2026',
    sortKey: '2026-02-18',
    entryType: 'ma-licensing',
    scope: 'industry',
    themes: ['patent-cliff'],
    analysis:
      'Immunology, long-acting antibodies. AbbVie has spent a decade being the Humira company and is now buying its way into the next generation of the same therapeutic area.\n\nThis is what a cliff response looks like when the company has already been through one. AbbVie knows exactly how fast biosimilars take revenue, and it is paying eleven billion dollars to avoid learning that lesson twice.',
    sources: [
      {
        title: 'Biopharma M&A 2026: Every $1B+ Deal and the Drivers',
        publisher: 'Life Science Daily',
        url: 'https://lifesciencedaily.news/biotech-ma-2026-every-1b-deal-so-far-and-what-is-driving-them/',
      },
    ],
  },
  {
    id: '2026-02-merck-terns',
    headline: 'Merck takes Terns for $6.7B, and it is all about Keytruda',
    entryDate: 'February 2026',
    sortKey: '2026-02-20',
    entryType: 'ma-licensing',
    scope: 'industry',
    themes: ['patent-cliff', 'obesity'],
    analysis:
      'This deal makes more sense read through Keytruda than through the asset. Merck does not need any single transaction to replace $29 billion of revenue. It needs enough credible programs that investors stop treating 2028 as one catastrophic event and start treating it as a manageable transition.\n\nBuying into metabolic disease also diversifies away from oncology, which is the right instinct for a company whose entire equity story currently rests on one PD-1 inhibitor.',
    sources: [
      {
        title: 'Biopharma M&A 2026: Every $1B+ Deal and the Drivers',
        publisher: 'Life Science Daily',
        url: 'https://lifesciencedaily.news/biotech-ma-2026-every-1b-deal-so-far-and-what-is-driving-them/',
      },
    ],
  },
  {
    id: '2026-02-merck-kgaa-biotechne',
    headline: 'Merck KGaA buys Bio-Techne for $11.3B and nobody calls it a cliff deal',
    entryDate: 'February 2026',
    sortKey: '2026-02-22',
    entryType: 'ma-licensing',
    scope: 'industry',
    analysis:
      'Life science tools rather than drugs. Worth separating from the therapeutic M&A, because tools businesses sell to everyone and are relatively insulated from any one drug going generic. Buying picks and shovels at eleven billion dollars while the rest of the industry bids for pipeline is a different strategy and probably an underrated one.',
    sources: [
      {
        title: 'Biopharma M&A 2026: Every $1B+ Deal and the Drivers',
        publisher: 'Life Science Daily',
        url: 'https://lifesciencedaily.news/biotech-ma-2026-every-1b-deal-so-far-and-what-is-driving-them/',
      },
    ],
  },
  {
    id: '2026-02-novartis-pikavation',
    headline: 'Novartis puts $2B upfront into Pikavation',
    entryDate: 'February 2026',
    sortKey: '2026-02-24',
    entryType: 'ma-licensing',
    scope: 'industry',
    analysis:
      'Two billion upfront plus a billion in milestones. The ratio is the story: when upfront money is twice the milestone money, the buyer is not optioning a thesis, it is paying for something it believes is already de-risked.',
    sources: [
      {
        title: 'Biopharma M&A 2026: Every $1B+ Deal and the Drivers',
        publisher: 'Life Science Daily',
        url: 'https://lifesciencedaily.news/biotech-ma-2026-every-1b-deal-so-far-and-what-is-driving-them/',
      },
    ],
  },
  {
    id: '2026-02-ipo-q1-larger',
    headline: 'Fewer biotech IPOs, but bigger ones',
    entryDate: 'February 2026',
    sortKey: '2026-02-26',
    entryType: 'financing',
    scope: 'industry',
    themes: ['ipo-window'],
    analysis:
      'The pace is still slow and the deals are getting larger. That combination usually means the market is open only to companies that do not strictly need it, which is the least useful kind of open window if you are a private company burning cash.',
    sources: [
      {
        title: 'Biotech IPOs stayed at slow pace, but grew larger in the first quarter of 2026',
        publisher: 'BioPharma Dive',
        url: 'https://www.biopharmadive.com/news/biotech-ipo-performance-q1-2026/815879/',
      },
    ],
  },
  {
    id: '2026-02-layoffs-q1',
    headline: '33 biopharma companies announced layoffs in one quarter',
    entryDate: 'February 2026',
    sortKey: '2026-02-27',
    entryType: 'people',
    scope: 'industry',
    analysis:
      'Takeda alone accounted for about 4,500 positions, roughly 9.2 percent of its workforce, with the changes timed around Julie Kim taking over as CEO.\n\nA restructuring announced before a new chief executive formally starts is almost always the outgoing management clearing the decks. It lets the incoming CEO inherit a lower cost base without owning the decision, which is common and rarely described honestly.',
    sources: [
      {
        title: 'Healthcare & Pharma Layoffs 2026',
        publisher: 'LayoffHedge',
        url: 'https://layoffhedge.com/industry/healthcare-layoffs-2026',
      },
    ],
  },
  {
    id: '2026-02-genentech-gred',
    headline: 'Genentech cuts senior scientists, which is a different kind of layoff',
    entryDate: 'February 2026',
    sortKey: '2026-02-28',
    entryType: 'people',
    scope: 'industry',
    analysis:
      'A restructuring of Genentech Research and Early Development that included vice presidents Vishva Dixit, Man-Wah Tan and Todd McDevitt.\n\nMost layoffs remove capacity. Removing senior research leadership removes judgment, and it is much harder to rebuild. My interpretation, and it is only that, is that this is a company reallocating from discovery toward development. It is worth watching whether the science that leaves Genentech shows up in startups over the next two years, because that has historically been how a lot of good biotech gets founded.',
    sources: [
      {
        title: 'Fierce Biotech Layoff Tracker 2026',
        publisher: 'Fierce Biotech',
        url: 'https://www.fiercebiotech.com/biotech/fierce-biotech-layoff-tracker-2026',
      },
    ],
  },
  {
    id: '2026-03-lilly-centessa',
    headline: 'Centessa at $6.1B is the biggest Lilly deal yet',
    entryDate: 'March 31, 2026',
    sortKey: '2026-03-31',
    entryType: 'ma-licensing',
    scope: 'industry',
    themes: ['lilly-ma'],
    analysis:
      'Six billion dollars for a company built as a portfolio of independent asset-centric subsidiaries. Lilly is not buying one program here, it is buying a structure that was itself designed to hold many programs.\n\nAt this point the pattern across roughly fifteen months is unmistakable. Scorpion in oncology, SiteOne in non-opioid pain, Verve in cardiovascular gene therapy, Adverum in ophthalmology, Ventyx in immunology, Orna in RNA delivery, now Centessa. Nearly $21 billion of M&A in a single year.\n\nWhat Lilly is doing is converting a temporary and enormous cash flow from two obesity drugs into permanent pipeline breadth, before that cash flow is competed away. Novo, which has the same problem and less cash, cannot match this pace, and lost Metsera partly on antitrust. The gap between these two companies in five years may have less to do with GLP-1 chemistry than with what each of them bought in 2025 and 2026.',
    sources: [
      {
        title: 'Lilly can\'t stop the dealing, with nearly $21B spent on M&A this year',
        publisher: 'BioSpace',
        url: 'https://www.biospace.com/business/lilly-cant-stop-the-dealing-with-nearly-21b-spent-on-m-a-this-year-so-far',
      },
    ],
  },
  {
    id: '2026-03-xaira-xcell',
    headline: 'Xaira ships X-Cell and I hit the limit of what I can judge',
    entryDate: 'March 2026',
    sortKey: '2026-03-15',
    entryType: 'platform',
    scope: 'company',
    relatedCompanyIds: ['xaira'],
    themes: ['ai-drug-discovery'],
    analysis:
      'Xaira released its first virtual cell model, trained on X-Atlas/Pisces, which the company describes as the largest genome-wide perturbation dataset built.\n\nI spent a while trying to work out whether this is a real advance and concluded that I cannot tell. Protein structure prediction has CASP, a blind competition that lets outsiders check claims. Virtual cell modelling has nothing equivalent. Every company evaluates its own model on data it chose.\n\nThat is not an accusation, it is a description of an immature field. But it means my confidence in this whole category should be well below my interest in it, and I would rather say that than build a technical justification I cannot actually defend.',
    sources: [
      {
        title: 'News and Content',
        publisher: 'Xaira Therapeutics',
        url: 'https://www.xaira.com/news-content',
      },
    ],
  },
  {
    id: '2026-03-openevidence-million-day',
    headline: 'A million clinical consultations in twenty-four hours',
    entryDate: 'March 10, 2026',
    sortKey: '2026-03-10',
    entryType: 'platform',
    scope: 'company',
    relatedCompanyIds: ['openevidence'],
    analysis:
      'Worth sitting with the denominator. There are roughly a million practising physicians in the United States. Even allowing heavily for repeat use, a tool fielding that volume in a day has stopped being an application and become part of how medicine is practised.\n\nI do not think most people outside healthcare have registered that this happened, and I suspect the reason is that it happened to a free product with no consumer brand.',
    sources: [
      {
        title: 'OpenEvidence revenue, valuation and funding',
        publisher: 'Sacra',
        url: 'https://sacra.com/c/openevidence/',
      },
    ],
  },
  {
    id: '2026-03-cagrisema',
    headline: 'CagriSema posts 22.7% and it still may not be enough',
    entryDate: 'March 2026',
    sortKey: '2026-03-20',
    entryType: 'clinical',
    scope: 'industry',
    themes: ['obesity'],
    analysis:
      'Novo reported REDEFINE-1 topline showing 22.7 percent mean body weight reduction at 52 weeks.\n\nIn any other therapeutic area a result like that would be spectacular. In obesity in 2026 the immediate question is how it compares with what Lilly has, and whether the tolerability profile lets patients actually reach the top dose. This is what happens when a category matures: the bar stops being placebo and starts being the best available competitor.',
    sources: [
      {
        title: 'Outlook for Obesity in 2026: From Consolidation to Acceleration',
        publisher: 'IQVIA',
        url: 'https://www.iqvia.com/locations/emea/blogs/2026/01/outlook-for-obesity-in-2026',
      },
    ],
  },
  {
    id: '2026-03-isc-rapidai-viz',
    headline: 'RapidAI and Viz go head to head on LVO detection, and the numbers are not close',
    entryDate: 'March 2026',
    sortKey: '2026-03-05',
    eventDate: 'International Stroke Conference 2026',
    entryType: 'care-delivery',
    scope: 'industry',
    themes: ['stroke'],
    analysis:
      'Data presented at ISC put RapidAI at 98 percent sensitivity for large vessel occlusions against 74 percent for Viz LVO, with specificity of 94 percent versus 91 percent.\n\nI would treat any head-to-head presented at a conference with some caution about who designed the comparison. But if that sensitivity gap holds up, it matters more than most software differences do, because a missed LVO is not a missed alert. It is a patient who does not get to a thrombectomy centre in time.\n\nThis is also a useful reminder that in clinical AI the switching costs are lower than vendors like to claim. Radiology triage tools plug into existing PACS workflows. If one is meaningfully better at the actual detection task, hospitals can move.',
    sources: [
      {
        title: 'Transforming Stroke Diagnosis with Artificial Intelligence',
        publisher: 'Medicina',
        url: 'https://doi.org/10.3390/medicina62030582',
      },
    ],
  },
  {
    id: '2026-03-choice2',
    headline: 'CHOICE2 shows adding a clot-buster after thrombectomy improves outcomes',
    entryDate: 'March 2026',
    sortKey: '2026-03-06',
    eventDate: 'International Stroke Conference 2026',
    entryType: 'clinical',
    scope: 'industry',
    themes: ['stroke'],
    analysis:
      'Late-breaking Phase 3 data: intra-arterial alteplase given after a successful thrombectomy significantly improved functional outcomes at 90 days in large vessel stroke.\n\nThe reason this is interesting is that it says the problem is not fully solved by pulling the clot out. Even after the big vessel is opened, small vessels downstream stay blocked, and clearing those changes how much function a patient recovers.\n\nCommercially, it means the neurointervention procedure gets an added drug step rather than a new device. That is good for whoever supplies the thrombolytic and largely neutral for the device makers, which is not how most stroke innovation is priced.',
    sources: [
      {
        title: 'International Stroke Conference 2026 coverage',
        publisher: 'NeurologyLive',
        url: 'https://www.neurologylive.com/conferences/isc',
      },
    ],
  },
  {
    id: '2026-03-aha-virtual-stroke',
    headline: 'AHA writes a scientific statement on virtual stroke networks',
    entryDate: 'March 2026',
    sortKey: '2026-03-08',
    entryType: 'care-delivery',
    scope: 'industry',
    themes: ['stroke'],
    analysis:
      'A statement covering AI, mobile imaging and telehealth in stroke triage, affirmed by the American Academy of Neurology as an educational tool.\n\nGuideline and statement language is how this category actually gets bought. A hospital committee does not purchase software because a startup published outcome data. It purchases because a professional society has described the approach as standard practice. Anyone selling into stroke should care more about this document than about their own marketing.',
    sources: [
      {
        title: 'Creating Virtual Stroke Networks: A Scientific Statement From the American Heart Association',
        publisher: 'PubMed',
        url: 'https://pubmed.ncbi.nlm.nih.gov/41342129/',
      },
    ],
  },
  {
    id: '2026-03-stroke-bottleneck',
    headline: 'The bottleneck in stroke is transport, not detection',
    entryDate: 'March 2026',
    sortKey: '2026-03-12',
    entryType: 'industry-observation',
    scope: 'industry',
    themes: ['stroke'],
    analysis:
      'After reading through the ISC material I think the sector has over-solved one part of the pathway.\n\nDetection is close to handled. Algorithms flag large vessel occlusions from a CT angiogram in a couple of minutes and route the alert to a phone. That was the hard technical problem and it is largely done.\n\nWhat has not moved is everything physical. A patient in a rural county still has to be identified by a paramedic, taken to a hospital that may not perform thrombectomy, imaged, then transferred to a centre that does, often by helicopter, often hours later. There are only so many neurointerventionalists and they are concentrated in cities. No amount of faster image interpretation fixes a two-hour drive or an on-call roster.\n\nSo when I look at stroke companies now, the question I care about is whether the product changes where a patient physically goes or how quickly a procedure can start. Software that shortens interpretation from fifteen minutes to three is real and it is competing for hospital budget against the least glamorous fixes, like paying for another interventionalist or a second angiography suite.',
    sources: [
      {
        title: 'Creating Virtual Stroke Networks: A Scientific Statement From the American Heart Association',
        publisher: 'PubMed',
        url: 'https://pubmed.ncbi.nlm.nih.gov/41342129/',
      },
    ],
  },
  {
    id: '2026-03-pe-hospital-closure',
    headline: 'Another private equity backed hospital closes',
    entryDate: 'March 2026',
    sortKey: '2026-03-18',
    entryType: 'care-delivery',
    scope: 'industry',
    analysis:
      'An Oak Park hospital shutdown tied to a private equity backed chain. The tracking data also shows the number of PE-owned hospitals rated one star more than doubling, from ten facilities to twenty-three.\n\nI am wary of treating every PE hospital story as the same story, because plenty of these facilities were failing before anyone bought them. But the pattern after Steward is hard to ignore: sale-leaseback of the real estate extracts the one asset that made the operating business survivable, and then the operating business does not survive.',
    sources: [
      {
        title: 'PESP Private Equity Hospital Tracker (2026)',
        publisher: 'Private Equity Stakeholder Project',
        url: 'https://pestakeholder.org/reports/private-equity-hospital-tracker-2026/',
      },
    ],
  },
  {
    id: '2026-03-physician-groups-deals',
    headline: 'Physician groups are now 46% of healthcare deal volume',
    entryDate: 'March 2026',
    sortKey: '2026-03-22',
    entryType: 'care-delivery',
    scope: 'industry',
    analysis:
      'Up from 37 percent a year earlier, even as several states tighten scrutiny of management services organisation structures.\n\nRising deal share alongside rising regulatory attention usually means buyers are trying to get transactions done before the rules change. That is worth watching, because a wave of consolidation completed under a closing window tends to produce the assets nobody wants three years later.',
    sources: [
      {
        title: 'Healthcare Trends & Transactions Q2 2026',
        publisher: 'Bass, Berry & Sims',
        url: 'https://www.bassberry.com/news/healthcare-trends-transactions-q2-2026/',
      },
    ],
  },
  {
    id: '2026-03-ma-surge',
    headline: 'March M&A surge, and the year starts to look historic',
    entryDate: 'March 2026',
    sortKey: '2026-03-28',
    entryType: 'ma-licensing',
    scope: 'industry',
    themes: ['patent-cliff'],
    analysis:
      'Enough deals landed in March that the trade press started projecting a record year. Underneath it is the same driver every time: more than $230 billion of industry revenue losing exclusivity by 2030, and a limited number of late-stage assets available to replace it.\n\nWhen the buyers are compelled and the supply is fixed, prices go up. That is good for anyone holding a Phase 2 asset and bad for anyone trying to buy one.',
    sources: [
      {
        title: 'March M&A surge triggers high expectations for 2026',
        publisher: 'Fierce Pharma',
        url: 'https://www.fiercepharma.com/pharma/march-ma-surge-triggers-high-expectations-2026',
      },
    ],
  },
  {
    id: '2026-03-medicare-home-health',
    headline: 'Medicare broadens home health eligibility for 2026',
    entryDate: 'March 2026',
    sortKey: '2026-03-25',
    entryType: 'regulation-policy',
    scope: 'industry',
    themes: ['aging'],
    analysis:
      'Coverage widened to include more people with chronic conditions needing regular monitoring rather than hospitalisation.\n\nThis is the single most important input to every aging-at-home business and it will get almost no coverage. Reimbursement eligibility is the difference between a remote monitoring company selling to a payer and selling to an anxious adult child with a credit card. The first is a business. The second is a very hard consumer subscription.',
    sources: [
      {
        title: 'Innovative Home Health Services for Senior Caregivers and Aging Adults in 2026',
        publisher: 'AllSeniors',
        url: 'https://allseniors.org/articles/innovative-home-health-services-for-senior-caregivers-and-aging-adults-in-2026/',
      },
    ],
  },
];
