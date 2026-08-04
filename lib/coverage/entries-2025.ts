import { CoverageEntry } from './types';

// November and December 2025. Where this record starts.

export const ENTRIES_2025: CoverageEntry[] = [
  {
    id: '2025-11-metsera-pfizer',
    headline: 'Pfizer wins Metsera at roughly double its opening bid, and the FTC decides it',
    entryDate: 'November 8, 2025',
    sortKey: '2025-11-08',
    entryType: 'ma-licensing',
    scope: 'industry',
    themes: ['obesity', 'patent-cliff'],
    analysis:
      'Metsera accepted Pfizer\'s original offer around $4.9 billion in October. Novo came in at $6.5 billion, then $7.6 billion, and Pfizer ended up at as much as $10 billion, structured as $65.60 per share in cash plus a contingent value right worth up to another $20.65.\n\nThe part worth noticing is that this was not settled by price. The FTC warned Metsera that Novo\'s structure carried serious antitrust risk, and Metsera said in its own filings that Novo\'s proposal presented unacceptably high legal and regulatory risk. Novo already sells semaglutide. Buying an emerging competitor in the same category is exactly the transaction regulators are set up to block.\n\nSo the practical rule this establishes is that in obesity, the incumbents can be outbid by anyone who is not already dominant in obesity. Pfizer paid a premium partly because Pfizer has no GLP-1 to lose. If I am an early obesity company, my most likely buyer is now a large pharma with a hole in its metabolic portfolio and a patent cliff coming, which is a longer list than I would have guessed a year ago.',
    sources: [
      {
        title: 'Pfizer wins bidding war for Metsera with $10B offer',
        publisher: 'BioPharma Dive',
        url: 'https://www.biopharmadive.com/news/metsera-pfizer-accept-offer-novo-ftc-obesity-drugs/805080/',
        publishedAt: 'November 8, 2025',
      },
      {
        title: 'Pfizer beats out Novo in bidding war for obesity-drug startup Metsera',
        publisher: 'STAT',
        url: 'https://www.statnews.com/2025/11/07/pfizer-beats-novo-nordisk-to-acquire-metsera-obesity/',
        publishedAt: 'November 7, 2025',
      },
    ],
  },
  {
    id: '2025-11-synchron-series-d',
    headline: 'Synchron raises $200M and the investor list turns sovereign',
    entryDate: 'November 6, 2025',
    sortKey: '2025-11-06',
    entryType: 'financing',
    scope: 'company',
    relatedCompanyIds: ['synchron'],
    themes: ['bci'],
    analysis:
      'Double Point Ventures led, with ARCH, Khosla and Bezos Expeditions returning, and the Qatar Investment Authority, IQT and Australia\'s National Reconstruction Fund coming in new. Total funding now $345 million, earmarked for the pivotal trial and commercial preparation.\n\nTwo things stand out. The lead is not a marquee venture name, which suggests the round was available rather than fought over. And when a cap table starts filling with sovereign funds and IQT, the company is signalling that it needs capital patient enough to sit through a multi-year regulatory process. That is realistic rather than bad, but it does tell you what kind of timeline the people writing checks are underwriting.',
    sources: [
      {
        title: 'Synchron Raises $200 Million Series D to Advance Brain-Computer Interface Technology',
        publisher: 'Business Wire',
        url: 'https://www.businesswire.com/news/home/20251106150841/en/Synchron-Raises-$200-Million-Series-D-to-Advance-Brain-Computer-Interface-Technology',
        publishedAt: 'November 6, 2025',
      },
    ],
  },
  {
    id: '2025-11-evolutionaryscale-czbiohub',
    headline: 'EvolutionaryScale goes to CZ Biohub, and the model was never the business',
    entryDate: 'November 2025',
    sortKey: '2025-11-15',
    entryType: 'ma-licensing',
    scope: 'company',
    relatedCompanyIds: ['evolutionaryscale'],
    themes: ['ai-drug-discovery'],
    analysis:
      'Chan Zuckerberg Biohub acquired EvolutionaryScale. The team joined as staff, Alexander Rives became Head of Science, and the work moved into a nonprofit research institute.\n\nThe technology was never in doubt. ESM3 generated esmGFP, a working fluorescent protein sharing only 58 percent of its sequence with the nearest natural one, and it published in Science. What did not work was the plan to license model access to biopharma. Your customers are large, conservative, and capable of running open-weights alternatives, and the research moves fast enough that any specific model has a short commercial life.\n\nI think this is the right home for the work and that is exactly the uncomfortable part. Foundational biological modelling looks like research infrastructure, and research infrastructure is usually better funded philanthropically than by people who need an exit. Being right about the science and getting nothing for it is a failure mode I had not properly considered.',
    sources: [
      {
        title: 'Chan Zuckerberg Biohub Acquires EvolutionaryScale',
        publisher: 'Genomely',
        url: 'https://genomely.substack.com/p/chan-zuckerberg-biohub-acquires-evolutionaryscal',
        publishedAt: 'November 2025',
      },
    ],
  },
  {
    id: '2025-11-anthropic-life-sciences',
    headline: 'Anthropic ships Claude for Life Sciences, and I underrate it',
    entryDate: 'November 2025',
    sortKey: '2025-11-04',
    eventDate: 'October 2025',
    entryType: 'platform',
    scope: 'industry',
    themes: ['anthropic-life-sciences', 'ai-drug-discovery'],
    status: 'superseded',
    analysis:
      'Anthropic released a version of Claude aimed at biopharma work: clinical trial coordination, regulatory documents, research summarisation. My first reaction is that this is a packaging exercise rather than a scientific one. It is connectors and prompts and a compliance story wrapped around the same model everyone else can already use.\n\nThe reason I am writing it down anyway is that pharma has an enormous amount of unstructured document work, and being the vendor that a regulatory affairs department trusts is worth a lot even if the underlying intelligence is undifferentiated. I do not yet think this threatens companies building biology-native models. Ask me again if it turns into something that touches discovery.',
    sources: [
      {
        title: 'Advancing Claude in healthcare and the life sciences',
        publisher: 'Anthropic',
        url: 'https://www.anthropic.com/news/healthcare-life-sciences',
      },
    ],
  },
  {
    id: '2025-11-tariff-aftermath',
    headline: 'Six weeks into the 100% pharma tariff, the exemption is the policy',
    entryDate: 'November 2025',
    sortKey: '2025-11-12',
    eventDate: 'Announced September 25, 2025, effective October 1',
    entryType: 'regulation-policy',
    scope: 'industry',
    themes: ['tariffs'],
    analysis:
      'To be precise about what was announced, because a lot of commentary has not been: a 100 percent tariff on imported branded or patented pharmaceutical products, announced September 25th and effective October 1st, with a carveout for manufacturers that are breaking ground or under construction on a US plant. Generics were not the target. The administration has floated 150 and 250 percent for later.\n\nThe carveout is the whole design. A tariff you can avoid by announcing a domestic facility is not really a revenue measure, it is a lever to extract capital commitments. Which means the companies that respond fastest with a groundbreaking photo pay nothing, and the ones exposed are those without the balance sheet to build in the US.\n\nI would be careful about reading the reshoring announcements that follow as real capacity. Pharmaceutical manufacturing takes years to qualify and validate. An announcement in 2025 is a plant in 2029 at the earliest.',
    sources: [
      {
        title: '100% U.S. Tariff on Branded/Patented Drugs Effective October 1, 2025',
        publisher: 'Foley Hoag LLP',
        url: 'https://foleyhoag.com/news-and-insights/publications/alerts-and-updates/2025/september/100-us-tariff-on-branded-patented-drugs-effective-october-1-2025/',
        publishedAt: 'September 2025',
      },
      {
        title: 'Trump revives pharma tariffs with 100% charges, but leaves loopholes',
        publisher: 'BioPharma Dive',
        url: 'https://www.biopharmadive.com/news/trump-revives-pharma-tariffs-100-percent-levies/816584/',
      },
    ],
  },
  {
    id: '2025-11-cms-pfs-2026',
    headline: 'CMS finalises the 2026 physician fee schedule',
    entryDate: 'November 2025',
    sortKey: '2025-11-03',
    eventDate: 'October 31, 2025',
    entryType: 'regulation-policy',
    scope: 'industry',
    themes: ['aging'],
    analysis:
      'Effective January 1st. Fee schedule rules are the least glamorous documents in healthcare and they decide more startup outcomes than most Series A memos. If a code exists and pays, a product has a business. If it does not, the product is a science project a hospital pays for out of goodwill.',
    sources: [
      {
        title: 'Calendar Year 2026 Medicare Physician Fee Schedule final rule',
        publisher: 'CMS',
        url: 'https://www.cms.gov/medicare/payment/fee-schedules/physician',
        publishedAt: 'October 31, 2025',
      },
    ],
  },
  {
    id: '2025-11-china-licensing-scale',
    headline: 'China licensing stops being a discount story',
    entryDate: 'November 2025',
    sortKey: '2025-11-20',
    entryType: 'ma-licensing',
    scope: 'industry',
    themes: ['china-licensing'],
    analysis:
      'The framing I keep hearing is that Western pharma licenses Chinese assets because they are cheap. The numbers have moved past that. Average upfronts on China-sourced deals have gone from roughly $52 million in 2022 to well north of $100 million, and the most active in-licensors are Roche, AstraZeneca, BMS, Merck and Pfizer, which is not a list of bargain hunters.\n\nThe more accurate version is that a Chinese biotech will often have a molecule in humans while the comparable US company is still presenting platform slides. Speed is the product. Chinese trial enrolment is faster and cheaper, and a large pharma buying an asset with clinical data is buying reduced risk, not a discount.\n\nThe uncomfortable implication for early-stage Western biotech is that a good mechanism and a famous academic founder may no longer command the same premium when someone else already has a Phase 1 readout in the same class.',
    sources: [
      {
        title: 'After 230% deal size explosion, China is no longer the bargain basement for biopharma licensing',
        publisher: 'Fierce Biotech',
        url: 'https://www.fiercebiotech.com/biotech/analyst-china-no-longer-bargain-basement-biotech-acquisitions',
      },
    ],
  },
  {
    id: '2025-11-openevidence-c-round',
    headline: 'Three OpenEvidence rounds in eight months, and I cannot tell if it is real',
    entryDate: 'November 2025',
    sortKey: '2025-11-01',
    eventDate: 'October 2025',
    entryType: 'financing',
    scope: 'company',
    relatedCompanyIds: ['openevidence'],
    themes: ['ambient-ai'],
    status: 'superseded',
    analysis:
      'A $200 million round led by GV at $6.1 billion, following $210 million at $3.5 billion in July and a Series A around $750 million in February. Three marks in eight months, each roughly doubling.\n\nMy honest reaction is discomfort. The product is free to physicians, and free products generate registration numbers that look extraordinary and mean very little. I do not have revenue disclosure and cannot tell whether this is a business or a very well-funded distribution experiment. Writing it down so I can check myself later.',
    sources: [
      {
        title: 'OpenEvidence revenue, valuation and funding',
        publisher: 'Sacra',
        url: 'https://sacra.com/c/openevidence/',
      },
    ],
  },
  {
    id: '2025-11-turn-bio-loi',
    headline: 'A five-day round trip on a letter of intent at Turn Bio',
    entryDate: 'November 2025',
    sortKey: '2025-11-02',
    eventDate: 'October 2 to 7, 2025',
    entryType: 'ma-licensing',
    scope: 'company',
    relatedCompanyIds: ['turn-bio'],
    themes: ['aging'],
    analysis:
      'Klotho Neurosciences issued a letter of intent to acquire select Turn Biotechnologies assets on October 2nd, and announced on October 7th that it had expired because the board decided the acquisition did not fit its strategy.\n\nI filed this as corporate noise at the time. Looking at it again while writing this up, a five-day round trip on an LOI for a company\'s core platform is not partnership talk. It is a sale process that did not close, and it was public.',
    sources: [
      {
        title: 'Klotho Neuro moves to acquire Turn Bio assets',
        publisher: 'Longevity.Technology',
        url: 'https://longevity.technology/news/klotho-neuro-moves-to-acquire-turn-bio-assets/',
        publishedAt: 'October 2025',
      },
    ],
  },
  {
    id: '2025-11-stroke-ai-triage',
    headline: 'Stroke triage software has good outcome data and an unclear buyer',
    entryDate: 'November 2025',
    sortKey: '2025-11-25',
    entryType: 'care-delivery',
    scope: 'industry',
    themes: ['stroke'],
    analysis:
      'Viz.ai has published real-world data showing large reductions in time-to-treatment for large vessel occlusion strokes, and a systematic review in Translational Stroke Research supports the workflow effect. So the software works at what it claims.\n\nThe question I keep circling is who actually pays. The clinical logic is that faster detection means faster thrombectomy means less dead brain tissue. The economic logic is messier, because the hospital that buys the software is often not the hospital that captures the revenue from the procedure. One of the Viz studies makes this explicit by modelling reimbursement shifting toward primary stroke centres that stop unnecessarily transferring patients out.\n\nThat is the interesting part to me. The product is not really selling speed. It is selling patient retention to community hospitals, and that is a much more concrete pitch than better outcomes.',
    sources: [
      {
        title: 'Two New Studies Demonstrate Impact of Viz.ai\'s Stroke Solution',
        publisher: 'Viz.ai',
        url: 'https://www.viz.ai/news/new-studies-demonstrate-impact-of-vizais-stroke-solution',
      },
      {
        title: 'Automated Emergent Large Vessel Occlusion Detection Using Viz.ai Software',
        publisher: 'Translational Stroke Research',
        url: 'https://link.springer.com/article/10.1007/s12975-025-01354-0',
      },
    ],
  },
  {
    id: '2025-12-oral-wegovy',
    headline: 'Oral semaglutide clears FDA and the obesity market changes shape',
    entryDate: 'December 2025',
    sortKey: '2025-12-20',
    entryType: 'clinical',
    scope: 'industry',
    themes: ['obesity'],
    analysis:
      'Novo got approval for an oral version of Wegovy in late December, with commercial rollout following in early 2026.\n\nInjectables built this market, but the ceiling on injectables is behavioural. A meaningful share of people who would benefit will not start a weekly injection, and adherence falls off. A pill changes the addressable population more than it changes the pharmacology.\n\nWhat I want to watch is not the launch but the manufacturing. Oral peptides require far more active ingredient per dose than injectables because absorption is poor. Whoever wins the pill market wins it on supply chain as much as on data.',
    sources: [
      {
        title: '2026 is the year of obesity pills. Here\'s how they could reshape the GLP-1 market',
        publisher: 'CNBC',
        url: 'https://www.cnbc.com/2026/01/10/2026-is-the-year-of-obesity-pills-from-novo-nordisk-eli-lilly-.html',
        publishedAt: 'January 10, 2026',
      },
    ],
  },
  {
    id: '2025-12-lilly-adverum',
    headline: 'Lilly buys Adverum and quietly builds an eye franchise',
    entryDate: 'December 10, 2025',
    sortKey: '2025-12-10',
    entryType: 'ma-licensing',
    scope: 'industry',
    themes: ['lilly-ma'],
    analysis:
      'Gene therapy for retinal disease. Adverum is small and this is not the kind of deal that gets written about, which is why it is worth recording. Lilly has now bought oncology, pain, cardiovascular gene therapy and ophthalmology inside twelve months. That is not a company filling one gap. It is a company converting cash flow into optionality across every therapeutic area it can reach.',
    sources: [
      {
        title: 'Lilly to Acquire Adverum Biotechnologies',
        publisher: 'Eli Lilly and Company',
        url: 'https://investor.lilly.com/news-releases/news-release-details/lilly-acquire-adverum-biotechnologies',
        publishedAt: 'December 10, 2025',
      },
    ],
  },
  {
    id: '2025-12-bioage-bge102-interim',
    headline: 'BioAge posts interim Phase 1 data for BGE-102',
    entryDate: 'December 4, 2025',
    sortKey: '2025-12-04',
    entryType: 'clinical',
    scope: 'company',
    relatedCompanyIds: ['bioage-labs'],
    analysis:
      'Positive interim results for an oral brain-penetrant NLRP3 inhibitor, roughly a year after the company killed azelaprag on liver toxicity.\n\nI want to note that I did not know azelaprag had been discontinued until much later, which is embarrassing given it was announced by press release and covered widely. I had built my understanding of this company from secondary summaries and never went back to the filings. The lesson is not about NLRP3.',
    sources: [
      {
        title: 'BioAge Announces Positive Interim Phase 1 Data for BGE-102',
        publisher: 'BioAge Labs',
        url: 'https://ir.bioagelabs.com/news-releases/news-release-details/bioage-announces-positive-interim-phase-1-data-bge-102-novel',
        publishedAt: 'December 4, 2025',
      },
    ],
  },
  {
    id: '2025-12-biotech-layoffs-2025',
    headline: 'A brutal layoff year ends, and the cuts were concentrated in the clinic',
    entryDate: 'December 2025',
    sortKey: '2025-12-15',
    entryType: 'people',
    scope: 'industry',
    analysis:
      'Looking back at 2025, most of the biopharma workforce reductions I can trace follow the same pattern: a late-stage trial reads out badly, and the company cuts to extend runway toward one remaining shot. Theravance and Gossamer are the clean examples.\n\nThat is a different thing from a sector-wide contraction, and it is worth separating. A company cutting after a Phase 3 miss is behaving rationally. A company cutting while its data is fine is telling you something about its ability to raise.',
    sources: [
      {
        title: 'Biopharma layoffs surged last year, but 2026 is a chance to turn the page',
        publisher: 'PharmaVoice',
        url: 'https://www.pharmavoice.com/news/layoffs-biopharma-2026-drug-pharma/810386/',
      },
    ],
  },
  {
    id: '2025-12-ipo-window-shut',
    headline: 'Ending 2025 with the IPO window mostly closed',
    entryDate: 'December 2025',
    sortKey: '2025-12-28',
    entryType: 'financing',
    scope: 'industry',
    themes: ['ipo-window'],
    analysis:
      'Very little went out this year, and what did go out was late-stage. The read-through for private companies is that the exit assumption in every venture model built in 2021 needs replacing. If you cannot list, the only liquidity is acquisition, and that hands pricing power to a small number of large pharma buyers.',
    sources: [
      {
        title: 'Biotech IPO Tracker 2026',
        publisher: 'BioBucks',
        url: 'https://www.biobucks.co/biotech-ipo-tracker-2026',
      },
    ],
  },
  {
    id: '2025-12-aging-buyer-problem',
    headline: 'The four-stakeholder problem in aging technology',
    entryDate: 'December 2025',
    sortKey: '2025-12-18',
    entryType: 'care-delivery',
    scope: 'industry',
    themes: ['aging'],
    analysis:
      'I have been reading through the aging-at-home category and the same structural problem shows up again and again. The adult child buys it. The parent uses it. A caregiver has to operate it. Medicare or a Medicare Advantage plan captures whatever savings it generates.\n\nFour parties, four sets of incentives, and most of these companies are built as though all four want the same thing. The ones that seem to work either sell to a single payer who both pays and benefits, or they solve something so acute for the adult child that the purchase does not need justifying.\n\nThe honest test I now apply is whether the product still helps if the older adult never opens the app. Anything that requires daily engagement from an eighty-year-old with mild cognitive impairment is designed for the demo rather than the user.',
    sources: [
      {
        title: 'Living Their Best Life At Home: Senior-Focused Startups And VCs Reevaluate Elder Care',
        publisher: 'Crunchbase News',
        url: 'https://news.crunchbase.com/startups/living-their-best-life-at-home-senior-focused-startups-vcs-reevaluate-elder-care/',
      },
    ],
  },
  {
    id: '2025-12-nvidia-position',
    headline: 'Trying to describe what NVIDIA actually is in life sciences',
    entryDate: 'December 2025',
    sortKey: '2025-12-22',
    entryType: 'platform',
    scope: 'industry',
    themes: ['bionemo'],
    status: 'superseded',
    analysis:
      'NVIDIA sells the hardware every computational biology company runs on, publishes BioNeMo as a model layer on top of it, partners with the companies building applications, and through NVentures invests in several of them.\n\nI keep trying to work out whether that is four businesses or one. My current view is that it is one, and the product is dependency. NVIDIA does not need to win drug discovery. It needs every serious attempt at drug discovery to consume more NVIDIA infrastructure, and it is indifferent to which attempt succeeds.\n\nWhat I have not resolved is whether BioNeMo helps or hurts the startups building on it. Free, good enough model components raise the floor for everyone, which is great if your advantage is proprietary data and bad if your advantage was the model.',
    sources: [
      {
        title: 'NVIDIA BioNeMo',
        publisher: 'NVIDIA',
        url: 'https://www.nvidia.com/en-us/clara/bionemo/',
      },
    ],
  },
];
