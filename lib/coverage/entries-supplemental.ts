import { CoverageEntry } from './types';

// Additional notes across the whole period. These sort into place by date.
// Kept in a separate file purely so the chronological files stay readable.

export const ENTRIES_SUPPLEMENTAL: CoverageEntry[] = [
  {
    id: '2025-11-abridge-starting-view',
    headline: 'Writing down where I stand on Abridge before anything else happens',
    entryDate: 'November 2025',
    sortKey: '2025-11-18',
    entryType: 'industry-observation',
    scope: 'company',
    relatedCompanyIds: ['abridge'],
    themes: ['ambient-ai'],
    analysis:
      'Starting this record, so I want my current position on the record too. Abridge is at $5.3 billion after a $300 million Series E in June, with a few hundred health systems live.\n\nMy view is that the scribe is a wedge and the coding layer is the business, and my main worry is Epic, which controls something like 42 percent of hospital EHR installs and ships its own ambient tool. I would put maybe 60 percent odds on the independents holding the enterprise segment. Check back on that.',
    sources: [
      {
        title: 'Abridge scores $300M series E, boosting valuation to $5.3B',
        publisher: 'Fierce Healthcare',
        url: 'https://www.fiercehealthcare.com/ai-and-machine-learning/ambient-ai-startup-abridge-scores-300m-series-e-backed-a16z-and-khosla',
      },
    ],
    status: 'superseded',
  },
  {
    id: '2026-02-abridge-klas',
    headline: 'Abridge takes Best in KLAS again',
    entryDate: 'February 2026',
    sortKey: '2026-02-06',
    entryType: 'industry-observation',
    scope: 'company',
    relatedCompanyIds: ['abridge'],
    themes: ['ambient-ai'],
    analysis:
      'Second year running for ambient AI. KLAS surveys the hospitals actually paying, which makes it one of very few third-party signals in a category where everyone publishes their own accuracy numbers. Two years in a row is meaningful, and it is also the kind of thing a company can win while its growth rate is slowing, so I would not read it as more than it is.',
    sources: [
      {
        title: 'Best AI Medical Scribes in 2026',
        publisher: 'OmniMD',
        url: 'https://omnimd.com/blog/best-medical-ai-scribes/',
      },
    ],
  },
  {
    id: '2026-01-ambience-epic-distribution',
    headline: 'Ambience is now the only ambient vendor Epic distributes',
    entryDate: 'January 2026',
    sortKey: '2026-01-22',
    entryType: 'platform',
    scope: 'company',
    relatedCompanyIds: ['ambience-healthcare'],
    themes: ['ambient-ai'],
    analysis:
      'Working through the competitive picture, this is the fact that most separates Ambience from Abridge. Being inside Epic Toolbox and integrated with Haiku means the hospital does not have to buy around its EHR vendor, which removes the single biggest friction point in this sale.\n\nIt also creates a dependency. If Epic changes the terms of that program, Ambience loses a channel it did not build.',
    sources: [
      {
        title: 'Ambience Healthcare joins Epic Toolbox',
        publisher: 'Barchart',
        url: 'https://www.barchart.com/story/news/34179999/ambience-healthcare-joins-epic-toolbox-unlocking-advanced-ai-functionality-within-haiku-for-epic-customers',
      },
    ],
  },
  {
    id: '2026-04-beeline-debut',
    headline: 'Beeline comes out of stealth with five BMS programs',
    entryDate: 'April 15, 2026',
    sortKey: '2026-04-15',
    entryType: 'financing',
    scope: 'company',
    relatedCompanyIds: ['beeline-medicines'],
    analysis:
      'Formed in July 2025, launched publicly in April with a portfolio handed over from Bristol Myers Squibb and Bain money behind it.\n\nThe structure is worth noticing on its own. Large pharma spinning out deprioritised clinical assets into a separately funded company lets BMS keep economic exposure without carrying the development cost, and gives the assets a management team whose only job is to advance them. Expect more of this while cliff pressure forces portfolio triage.',
    sources: [
      {
        title: 'Beeline Medicines Debuts to Deliver Precision Therapies for Autoimmune and Inflammatory Diseases',
        publisher: 'GlobeNewswire',
        url: 'https://www.globenewswire.com/news-release/2026/04/15/3274299/0/en/beeline-medicines-debuts-to-deliver-category-leading-precision-therapies-for-people-living-with-autoimmune-and-inflammatory-diseases.html',
        publishedAt: 'April 15, 2026',
      },
    ],
  },
  {
    id: '2026-01-evolutionaryscale-aftermath',
    headline: 'What the EvolutionaryScale outcome should have taught everyone',
    entryDate: 'January 2026',
    sortKey: '2026-01-08',
    entryType: 'industry-observation',
    scope: 'company',
    relatedCompanyIds: ['evolutionaryscale', 'xaira', 'inceptive'],
    themes: ['ai-drug-discovery'],
    analysis:
      'Two months after CZ Biohub absorbed EvolutionaryScale I keep thinking about how cleanly it separates two questions I had been treating as one.\n\nDoes the technology work, and can the company capture value from it. ESM3 answered the first decisively and the second turned out to be independent of it.\n\nApplying that test to the rest of the category: Inceptive captures value because its models sit inside a partner\'s drug pipeline with milestones attached. Xaira might, because it owns a data-generating machine rather than only a model. Anyone whose plan is to license model access to pharma should probably read the EvolutionaryScale outcome as a warning rather than as bad luck.',
    sources: [
      {
        title: 'Chan Zuckerberg Biohub Acquires EvolutionaryScale',
        publisher: 'Genomely',
        url: 'https://genomely.substack.com/p/chan-zuckerberg-biohub-acquires-evolutionaryscal',
      },
    ],
  },
  {
    id: '2026-03-turn-bio-warning-signs',
    headline: 'Trying to work out what I should have seen at Turn Bio',
    entryDate: 'March 2026',
    sortKey: '2026-03-02',
    entryType: 'industry-observation',
    scope: 'company',
    relatedCompanyIds: ['turn-bio'],
    themes: ['aging'],
    analysis:
      'The company has gone quiet, the October letter of intent expired, and I have not seen a financing announcement in a long time.\n\nWriting this down because I want a record of noticing before I know the outcome. The honest position today is that I do not know whether Turn is fine or in trouble, and the reason I do not know is that I never built a way to estimate it. For a preclinical company, the two numbers that matter are cash on hand and monthly burn, and I have neither.',
    sources: [
      {
        title: 'Klotho Neuro moves to acquire Turn Bio assets',
        publisher: 'Longevity.Technology',
        url: 'https://longevity.technology/news/klotho-neuro-moves-to-acquire-turn-bio-assets/',
      },
    ],
  },
  {
    id: '2026-02-synchron-chiral-followup',
    headline: 'Coming back to Chiral with a year of hindsight',
    entryDate: 'February 2026',
    sortKey: '2026-02-14',
    entryType: 'platform',
    scope: 'company',
    relatedCompanyIds: ['synchron'],
    themes: ['bci'],
    analysis:
      'A year ago Synchron unveiled a foundation model trained on neural data and I could not decide whether it was substance or a GTC keynote slot.\n\nI am still not sure, and the reason is the data. Ten implanted patients is not a training corpus by any modern standard. What might make it work is that the signal is extremely dense per patient, so hours of continuous recording from ten people is not the same as ten samples.\n\nIf a better decoder genuinely extracts more from sixteen electrodes, it partly answers the channel-count objection I keep raising. That would matter more than another partnership announcement.',
    sources: [
      {
        title: 'Synchron Unveils Chiral, the World\'s First Cognitive AI Brain Foundation Model',
        publisher: 'Business Wire',
        url: 'https://www.businesswire.com/news/home/20250319964709/en/Synchron-Unveils-Chiral-the-Worlds-First-Cognitive-AI-Brain-Foundation-Model',
        publishedAt: 'March 19, 2025',
      },
    ],
  },
  {
    id: '2026-05-bioage-q1',
    headline: 'BioAge Q1, and the value of a company you can actually read',
    entryDate: 'May 8, 2026',
    sortKey: '2026-05-08',
    entryType: 'clinical',
    scope: 'company',
    relatedCompanyIds: ['bioage-labs'],
    analysis:
      'Quarterly results and a business update. The thing I appreciate about following a public company after being burned by a private one is that everything is in a filing on a schedule. Cash position, burn rate, trial status, all of it, four times a year, with legal consequences for getting it wrong.\n\nI spent a year evaluating Turn Bio\'s science and never once knew how much money it had. That is not possible here.',
    sources: [
      {
        title: 'BioAge Labs Reports First Quarter 2026 Financial Results',
        publisher: 'BioAge Labs',
        url: 'https://ir.bioagelabs.com/news-releases/news-release-details/bioage-labs-reports-first-quarter-2026-financial-results-and',
        publishedAt: 'May 8, 2026',
      },
    ],
  },
  {
    id: '2025-12-medtech-quiet-growth',
    headline: 'Devices grew while biopharma fell, and nobody noticed',
    entryDate: 'December 2025',
    sortKey: '2025-12-08',
    entryType: 'industry-observation',
    scope: 'industry',
    analysis:
      'In a year when biopharma investment fell 19 percent and diagnostics and tools fell 33 percent, medical devices grew about 1.5 percent and healthtech about 5.3 percent.\n\nGrowth of one and a half percent is not exciting. It is also the only part of healthcare that did not contract, and it happened without any of the narrative attention AI got. Devices have a specific advantage right now: a 510(k) pathway that is far shorter than a drug approval, and reimbursement that often already exists for the procedure the device slots into.',
    sources: [
      {
        title: 'AI Investment Accounted for Nearly Half of Healthcare Investment in 2025',
        publisher: 'Silicon Valley Bank',
        url: 'https://www.svb.com/news/company-news/ai-investment-accounted-for-nearly-half-of-healthcare-investment-in-2025-silicon-valley-bank-releases-17th-healthcare-investments-and-exits-report/',
      },
    ],
  },
  {
    id: '2026-02-510k-advantage',
    headline: 'Why the 510(k) pathway keeps producing quiet winners',
    entryDate: 'February 2026',
    sortKey: '2026-02-10',
    entryType: 'regulation-policy',
    scope: 'industry',
    relatedCompanyIds: ['precision-neuroscience'],
    analysis:
      'Precision Neuroscience got a cleared product to market by demonstrating substantial equivalence to an existing device class, and is now collecting clinical data legally while its competitors work under research protocols.\n\nThat asymmetry is available to a lot of companies and underused. Getting a narrow version of your product cleared early gives you revenue, real-world data, and a regulatory relationship, all of which feed the harder submission later. The instinct to wait for the full product is usually wrong.',
    sources: [
      {
        title: 'Precision Neuroscience wins FDA clearance for BCI cortical interface',
        publisher: 'MassDevice',
        url: 'https://www.massdevice.com/precision-neuroscience-fda-clearance-bci-interface/',
      },
    ],
  },
  {
    id: '2026-03-tempo-pilot',
    headline: 'FDA and CMS run a joint pilot, which almost never happens',
    entryDate: 'March 2026',
    sortKey: '2026-03-10',
    entryType: 'regulation-policy',
    scope: 'industry',
    analysis:
      'The TEMPO pilot pairs FDA and CMS on bringing digital health devices to Medicare and Medicaid patients.\n\nThe single worst structural problem in health technology is that approval and payment are decided by different agencies on different timelines with different criteria. A company can clear the FDA and then wait years for a code. Anything that couples those two processes is worth more to the sector than most funding rounds, and I would like to see whether this pilot produces an actual pathway or a report.',
    sources: [
      {
        title: 'FDA Digital Health Guidance: 2026 Requirements Overview',
        publisher: 'IntuitionLabs',
        url: 'https://intuitionlabs.ai/articles/fda-digital-health-technology-guidance-requirements',
      },
    ],
  },
  {
    id: '2026-01-ma-plan-pressure',
    headline: 'Medicare Advantage economics are tightening under everything',
    entryDate: 'January 2026',
    sortKey: '2026-01-18',
    entryType: 'care-delivery',
    scope: 'industry',
    themes: ['aging'],
    analysis:
      'A large share of the care delivery companies I look at sell to Medicare Advantage plans on a total-cost-of-care argument. That works while MA is profitable and expanding.\n\nRisk adjustment scrutiny and rate pressure have both been moving against the plans. When a payer\'s margin compresses, the first thing it cuts is the vendor whose savings claim depends on a model rather than on an invoice. Companies with a hard, auditable ROI survive that. Companies with a modelled one do not.',
    sources: [
      {
        title: 'Top Home Health Services Trends to Watch in 2025 and 2026',
        publisher: 'AllSeniors',
        url: 'https://allseniors.org/articles/top-home-health-services-trends-to-watch-in-2025-and-2026/',
      },
    ],
  },
  {
    id: '2026-04-caregiver-supply',
    headline: 'The binding constraint in home care is people, not software',
    entryDate: 'April 2026',
    sortKey: '2026-04-08',
    entryType: 'care-delivery',
    scope: 'industry',
    themes: ['aging'],
    analysis:
      'Every home care marketplace pitch is about matching and scheduling. The actual problem is that the work is physically hard, emotionally heavy, pays close to retail wages, and has turnover to match.\n\nSoftware can reduce the cost of finding a caregiver. It cannot create more caregivers, and demographics are moving the wrong way on both sides: more people needing care, fewer working-age people per retiree. Any business model that assumes labour supply scales with demand is assuming away the whole problem.',
    sources: [
      {
        title: 'Top Elder Care Startups to Watch in 2026',
        publisher: 'Failory',
        url: 'https://www.failory.com/startups/elder-care',
      },
    ],
  },
  {
    id: '2026-06-social-isolation',
    headline: 'Loneliness is a real clinical risk and a terrible product category',
    entryDate: 'June 2026',
    sortKey: '2026-06-08',
    entryType: 'care-delivery',
    scope: 'industry',
    themes: ['aging'],
    analysis:
      'Social isolation in older adults carries mortality risk comparable to some well-known cardiovascular factors, so the clinical case is not in question.\n\nThe commercial case is awful. Nobody buys a subscription to be less lonely, the person who would benefit is often the least likely to adopt new technology, and the payer only sees the benefit indirectly through downstream utilisation. Papa\'s model of sending students to spend time with seniors is the most credible attempt I have seen, and it is a staffing business with all the margin problems that implies.',
    sources: [
      {
        title: 'Living Their Best Life At Home: Senior-Focused Startups And VCs Reevaluate Elder Care',
        publisher: 'Crunchbase News',
        url: 'https://news.crunchbase.com/startups/living-their-best-life-at-home-senior-focused-startups-vcs-reevaluate-elder-care/',
      },
    ],
  },
  {
    id: '2026-05-mobile-stroke-units',
    headline: 'Mobile stroke units work and almost nobody can afford them',
    entryDate: 'May 2026',
    sortKey: '2026-05-12',
    entryType: 'care-delivery',
    scope: 'industry',
    themes: ['stroke'],
    analysis:
      'An ambulance with a CT scanner in it lets you diagnose and start thrombolysis before the patient reaches a hospital, which is the single largest time saving available anywhere in the stroke pathway.\n\nThey also cost well over a million dollars to put on the road plus staffing, and reimbursement does not cleanly cover a scan performed in a vehicle. So the units that exist are mostly grant funded or run by large academic systems as a service line, which means the intervention with the best time savings is the least deployable.\n\nThis is the clearest example I know of where the clinical answer and the economic answer point in opposite directions.',
    sources: [
      {
        title: 'Creating Virtual Stroke Networks: A Scientific Statement From the American Heart Association',
        publisher: 'PubMed',
        url: 'https://pubmed.ncbi.nlm.nih.gov/41342129/',
      },
    ],
  },
  {
    id: '2026-06-stroke-who-buys',
    headline: 'In stroke software the buyer and the beneficiary are rarely the same',
    entryDate: 'June 2026',
    sortKey: '2026-06-06',
    entryType: 'care-delivery',
    scope: 'industry',
    themes: ['stroke'],
    analysis:
      'The comprehensive stroke centre performs the thrombectomy and captures the revenue. The community hospital does the initial imaging and gets the transfer costs. The patient bears the delay.\n\nSo when a vendor sells detection software, the hospital most likely to benefit clinically is the one least able to justify the purchase. The vendors that have figured this out sell to the hub, which then extends the software out to its spokes as a network play. That is a much better structure and it explains why these companies talk about networks rather than seats.',
    sources: [
      {
        title: 'Two New Studies Demonstrate Impact of Viz.ai\'s Stroke Solution',
        publisher: 'Viz.ai',
        url: 'https://www.viz.ai/news/new-studies-demonstrate-impact-of-vizais-stroke-solution',
      },
    ],
  },
  {
    id: '2026-02-down-rounds-hidden',
    headline: 'The down rounds are not showing up in the data',
    entryDate: 'February 2026',
    sortKey: '2026-02-12',
    entryType: 'financing',
    scope: 'industry',
    themes: ['capital-concentration'],
    analysis:
      'Aggregate funding figures count dollars raised, not the terms. A round can be flat on headline valuation and still be a down round once you account for liquidation preferences, ratchets or a large insider-led tranche.\n\nWith healthcare specialist funds having raised $7 billion in 2025 against $41 billion in 2021, I would expect a lot of structure in the market right now, and none of it appears in the topline numbers everyone quotes. When someone tells me a company raised at a flat valuation, my first question is what the preference stack looks like.',
    sources: [
      {
        title: '2025 year-end digital health funding overview: A tale of two markets',
        publisher: 'Rock Health',
        url: 'https://rockhealth.com/insights/2025-year-end-digital-health-funding-overview-a-tale-of-two-markets/',
      },
    ],
  },
  {
    id: '2026-03-insider-rounds',
    headline: 'How to tell an insider round from a rescue',
    entryDate: 'March 2026',
    sortKey: '2026-03-14',
    entryType: 'financing',
    scope: 'industry',
    analysis:
      'A round led entirely by existing investors with no new name is usually one of two things. Either the company is performing and the insiders want more of it before anyone else can bid, or nobody else would price it.\n\nThe tell I look for is whether the round is priced or a convertible note, and whether the amount is a full round or six months of runway. Existing investors funding six months are buying time to find a buyer.',
    sources: [
      {
        title: 'H1 2026 funding and market overview',
        publisher: 'Rock Health',
        url: 'https://rockhealth.com/insights/h1-2026-funding-and-market-overview-durable-roots-shifting-routes/',
      },
    ],
  },
  {
    id: '2026-05-royalty-financing',
    headline: 'Royalty and structured financing is filling the gap the IPO left',
    entryDate: 'May 2026',
    sortKey: '2026-05-26',
    entryType: 'financing',
    scope: 'industry',
    themes: ['ipo-window'],
    analysis:
      'When the public market is only open to late-stage companies and venture funds are smaller, commercial-stage biotechs with real revenue turn to royalty monetisation and structured debt instead of equity.\n\nIt is non-dilutive and it is expensive, and it works well for a company with an approved product and a predictable revenue line. It does nothing for anyone preclinical, which is exactly the group with the problem. The financing innovation is happening at the end of the pipeline that least needs it.',
    sources: [
      {
        title: 'Biotech IPO Tracker 2026',
        publisher: 'BioBucks',
        url: 'https://www.biobucks.co/biotech-ipo-tracker-2026',
      },
    ],
  },
  {
    id: '2026-04-hospital-margins-tech-budget',
    headline: 'Health systems buy things that show up on this year\'s income statement',
    entryDate: 'April 2026',
    sortKey: '2026-04-18',
    entryType: 'care-delivery',
    scope: 'industry',
    analysis:
      'I keep coming back to this when I look at any clinical software company. Hospital operating margins are thin enough that a purchase has to displace a cost or capture revenue inside the budget year.\n\nThat single fact explains why coding and revenue cycle products sell and physician wellbeing products do not, why every ambient AI company eventually pivots toward billing, and why the most clinically valuable products in stroke and aging are the hardest to fund. It is not that hospitals do not care about outcomes. It is that a CFO cannot approve a purchase against a benefit that lands in someone else\'s budget in three years.',
    sources: [
      {
        title: 'Key trends that will shape healthcare M&A activity in 2026',
        publisher: 'Fierce Healthcare',
        url: 'https://www.fiercehealthcare.com/finance/key-trends-will-shape-healthcare-ma-activity-2026-pwc',
      },
    ],
  },
  {
    id: '2026-01-pharmacy-middlemen',
    headline: 'Nothing in drug pricing changes while the middle stays intact',
    entryDate: 'January 2026',
    sortKey: '2026-01-31',
    entryType: 'regulation-policy',
    scope: 'industry',
    themes: ['tariffs'],
    analysis:
      'A tariff raises the manufacturer\'s cost. A negotiation lowers the list price. Neither touches the layer between the manufacturer and the patient where rebates are negotiated and retained.\n\nWhich is why I am sceptical of any policy that works on the price at one end of the chain and expects the effect to show up at the other. The most consequential healthcare policy of the next few years is probably not the tariff or Medicare negotiation but whatever eventually happens to rebate economics, and it gets a fraction of the attention.',
    sources: [
      {
        title: 'A Pivotal Week for Pharmaceutical Policy',
        publisher: 'Mintz',
        url: 'https://www.mintz.com/insights-center/viewpoints/2146/2025-10-07-pivotal-week-pharmaceutical-policy-trump-administration',
      },
    ],
  },
  {
    id: '2026-06-api-dependence',
    headline: 'The supply chain problem is upstream of the drugs',
    entryDate: 'June 2026',
    sortKey: '2026-06-05',
    entryType: 'regulation-policy',
    scope: 'industry',
    themes: ['tariffs'],
    analysis:
      'Most of the debate about pharmaceutical onshoring is about finished drugs. The dependence that actually matters is in active pharmaceutical ingredients and the chemical precursors behind them, much of which is concentrated in China and India.\n\nYou can build a fill-finish plant in the US in a couple of years. Rebuilding the chemistry several steps upstream is a much longer project with worse economics, because those are commodity products with thin margins that moved offshore for exactly that reason. A policy that reshores the last step and leaves the first four where they are has changed the label on the box more than the supply chain.',
    sources: [
      {
        title: 'New Pharmaceutical Tariff Impacts Niche Overseas Pharmaceuticals',
        publisher: 'American Bar Association',
        url: 'https://www.americanbar.org/groups/health_law/news/2025/new-pharmaceutical-tariff-impacts-overseas/',
      },
    ],
  },
  {
    id: '2026-05-adc-modality',
    headline: 'Antibody-drug conjugates are where China\'s advantage is clearest',
    entryDate: 'May 2026',
    sortKey: '2026-05-14',
    entryType: 'industry-observation',
    scope: 'industry',
    themes: ['china-licensing'],
    analysis:
      'ADCs attach a cytotoxic payload to an antibody so the poison is delivered mostly to tumour cells. The biology is well understood. The hard part is engineering: which antibody, which linker, which payload, at which ratio.\n\nThat is an iteration problem, and iteration is exactly where speed and cost advantages compound. It is not a coincidence that a large share of China-origin licensing is in this modality. It is the category where doing many rounds quickly beats having a better initial idea.\n\nThe corollary is that Western companies competing on ADCs alone are competing on the dimension where they are structurally worst.',
    sources: [
      {
        title: 'Deepening Ties: Why China is Becoming Big Pharma\'s Most Essential R&D Partner',
        publisher: 'Pharmaceutical Executive',
        url: 'https://www.pharmexec.com/view/deepening-ties-why-china-becoming-big-pharma-most-essential-rd-partner',
      },
    ],
  },
  {
    id: '2026-07-china-trial-data-quality',
    headline: 'The unresolved question about China-generated trial data',
    entryDate: 'July 2026',
    sortKey: '2026-07-13',
    entryType: 'regulation-policy',
    scope: 'industry',
    themes: ['china-licensing'],
    analysis:
      'The FDA has historically wanted evidence that trial results generalise to the US population, and a trial run entirely in one country raises that question regardless of which country it is.\n\nIn practice most Western licensees rerun or extend trials with US and European sites, which is part of why the upfront is not the whole cost of these deals. Anyone modelling a China in-licensing deal as cheap external R&D should add the bridging study to the price.\n\nWhat I do not know is whether the agency\'s posture here tightens. National security appeared in the FDA\'s stated priorities this year, and it is not hard to imagine data provenance becoming a formal issue rather than a scientific one.',
    sources: [
      {
        title: 'China\'s Biotech Ascent: Risk, Opportunity, and Whether the FDA Can Hold the Line',
        publisher: 'David H. Crean',
        url: 'https://davidhcrean.substack.com/p/chinas-biotech-ascent-risk-opportunity',
      },
    ],
  },
  {
    id: '2026-03-novo-cliff-question',
    headline: 'Novo has an obesity windfall and no obvious second act',
    entryDate: 'March 2026',
    sortKey: '2026-03-24',
    entryType: 'industry-observation',
    scope: 'industry',
    themes: ['obesity', 'patent-cliff'],
    analysis:
      'Semaglutide is enormous and its exclusivity does not last forever. Novo is guiding toward a decline this year while Lilly keeps growing, and Novo has been far less aggressive on acquisitions, partly by choice and partly because it lost Metsera on antitrust grounds.\n\nA company that dominates one category is structurally blocked from buying its way into adjacent parts of that same category. That is a real constraint, and it means Novo has to diversify outward rather than deepen, at a moment when everything worth buying is expensive.',
    sources: [
      {
        title: 'Eli Lilly\'s GLP-1 growth is only getting started as Novo Nordisk braces for a decline in 2026',
        publisher: 'CNBC',
        url: 'https://www.cnbc.com/2026/02/04/eli-lilly-novo-nordisk-earnings-glp1-market.html',
      },
    ],
  },
  {
    id: '2026-06-glp1-muscle-question',
    headline: 'The muscle loss problem in GLP-1s is still unsolved',
    entryDate: 'June 2026',
    sortKey: '2026-06-09',
    entryType: 'clinical',
    scope: 'industry',
    themes: ['obesity'],
    relatedCompanyIds: ['bioage-labs'],
    analysis:
      'People losing weight on incretin drugs lose a substantial share of it as lean mass rather than fat. In a 40-year-old that is cosmetic. In a 75-year-old it accelerates frailty and fall risk, and falls are what end independent living.\n\nBioAge tried to solve this and killed its drug on liver toxicity. Several other programs are working on it. As GLP-1 prescribing extends further into older populations this becomes a bigger clinical problem, and whoever solves it has a combination product that attaches to the largest drug franchise in the world.\n\nI thought this was the most obvious opportunity in metabolic medicine eighteen months ago and I still do. I was just wrong about which company would get there.',
    sources: [
      {
        title: 'BioAge Labs Announces Discontinuation of STRIDES Phase 2 Clinical Trial',
        publisher: 'BioAge Labs',
        url: 'https://ir.bioagelabs.com/news-releases/news-release-details/bioage-labs-announces-discontinuation-strides-phase-2-clinical',
      },
    ],
  },
  {
    id: '2026-02-ai-regulation-framework',
    headline: 'FDA says it is building an AI framework, which could go either way',
    entryDate: 'February 2026',
    sortKey: '2026-02-16',
    entryType: 'regulation-policy',
    scope: 'industry',
    themes: ['ambient-ai'],
    analysis:
      'Guidance on AI change control plans arrived in 2025 and the agency has signalled a broader framework is coming.\n\nChange control is the interesting piece. Traditional device regulation assumes a product is fixed at approval. A model that retrains is not fixed, and the whole regulatory apparatus was built for the first case. A predetermined change control plan lets a company specify in advance how the model may evolve without a new submission, which is either a sensible accommodation or a large loophole depending on how specific the plans have to be.',
    sources: [
      {
        title: 'FDA AI Guidance 2026: Drug Manufacturing & Digital Health',
        publisher: 'IntuitionLabs',
        url: 'https://intuitionlabs.ai/articles/fda-ai-guidance-2026-drug-manufacturing-digital-health',
      },
    ],
  },
  {
    id: '2026-08-what-i-am-looking-for-next',
    headline: 'What I am watching for the rest of the year',
    entryDate: 'August 2026',
    sortKey: '2026-08-20',
    entryType: 'industry-observation',
    scope: 'industry',
    relatedCompanyIds: ['isomorphic-labs', 'beeline-medicines', 'bioage-labs', 'precision-neuroscience', 'synchron'],
    analysis:
      'Five things, so I can be held to them.\n\nWhether Isomorphic gets a molecule into a person by December. It has been promising this for two years and slipped once.\n\nThe Beeline Phase 2 lupus readout. It is the first real test of a company I added mostly to fix a coverage gap, and it arrives soon enough to tell me whether that was a reasonable way to start following something.\n\nBioAge\'s Phase 2 cardiovascular data. Moving hsCRP is not the same as preventing events, and this is where we find out.\n\nWhether Precision actually implants its chronic wireless system. I have now noted its absence twice.\n\nAnd whether Synchron completes pivotal enrolment, because everything about that company runs through the trial and then through a reimbursement question nobody has answered.\n\nIf I had to guess: Isomorphic slips again, Beeline reads out mixed, and the BCI timelines both move right. I would rather write that down and be wrong than be vague about it.',
    sources: [
      {
        title: 'Google-backed Isomorphic Labs delays clinical trial timeline',
        publisher: 'Reuters',
        url: 'https://finance.yahoo.com/news/google-backed-ai-drug-discovery-195423147.html',
      },
    ],
  },
];
