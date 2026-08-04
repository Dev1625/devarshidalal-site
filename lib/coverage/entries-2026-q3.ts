import { CoverageEntry } from './types';

// July and August 2026.

export const ENTRIES_2026_Q3: CoverageEntry[] = [
  {
    id: '2026-07-lilly-atai-beckley',
    headline: 'Lilly moves into psychedelics with atai Beckley',
    entryDate: 'July 17, 2026',
    sortKey: '2026-07-17',
    entryType: 'ma-licensing',
    scope: 'industry',
    themes: ['lilly-ma'],
    analysis:
      'Neuroscience, and specifically the psychedelic-derived end of it. This is the therapeutic area Lilly had not yet touched in eighteen months of buying.\n\nWhat makes it interesting is that psychedelics have been an investable category for years without a large pharma buyer willing to put its name on one. Lilly doing it removes a stigma discount from every other company in the space, which is worth more to the sector than the purchase price is to Lilly.',
    sources: [
      {
        title: 'What\'s the Driving Force Behind Eli Lilly\'s Recent Acquisition Spree?',
        publisher: 'Nasdaq',
        url: 'https://www.nasdaq.com/articles/whats-driving-force-behind-eli-lillys-recent-acquisition-spree',
      },
    ],
  },
  {
    id: '2026-07-lilly-pattern',
    headline: 'What Lilly is actually doing, after eighteen months of watching it',
    entryDate: 'July 2026',
    sortKey: '2026-07-20',
    entryType: 'industry-observation',
    scope: 'industry',
    themes: ['lilly-ma', 'patent-cliff'],
    relatedEntryIds: ['2026-03-lilly-centessa', '2026-04-lilly-kelonia'],
    analysis:
      'Laid end to end the sequence is remarkable. Scorpion in oncology, SiteOne in non-opioid pain, Verve in cardiovascular gene therapy, Adverum in ophthalmology, Ventyx in immunology, Orna in RNA delivery, Centessa at $6.1 billion, Kelonia and CrossBridge on the same day in April, now atai Beckley in neuroscience. Nearly $21 billion in a single year.\n\nThe cheap reading is that Lilly is flush and buying everything. I think the accurate reading is narrower and more interesting.\n\nLilly has a temporary, enormous cash flow from two obesity drugs, and it knows it is temporary. Orforglipron is a small molecule, which means the eventual generic competition will be brutal in a way biologics never face. Every competent competitor is racing toward the same market. So the rational move is to convert a windfall with a known expiry into permanent breadth across therapeutic areas, and to do it now while the cash is arriving.\n\nWhat they buy is consistent in a way that gets missed. Delivery technology, platforms and teams, not single molecules. Orna was RNA delivery. Verve was base editing delivered to the liver. Kelonia was in vivo delivery of a CAR construct. Lilly is buying the ability to get things into cells, which is the actual bottleneck in genetic medicine and the part that takes longest to build.\n\nNovo has the same obesity windfall, less of it, and has been much less aggressive. It also lost Metsera on antitrust grounds precisely because it already dominates the category. In five years the gap between these two companies may have less to do with peptide chemistry than with what each of them bought in 2025 and 2026.',
    sources: [
      {
        title: 'Lilly can\'t stop the dealing, with nearly $21B spent on M&A this year',
        publisher: 'BioSpace',
        url: 'https://www.biospace.com/business/lilly-cant-stop-the-dealing-with-nearly-21b-spent-on-m-a-this-year-so-far',
      },
    ],
  },
  {
    id: '2026-07-xaira-partners',
    headline: 'Xaira goes looking for data rather than money',
    entryDate: 'July 2026',
    sortKey: '2026-07-22',
    eventDate: 'BIO International Convention',
    entryType: 'platform',
    scope: 'company',
    relatedCompanyIds: ['xaira'],
    analysis:
      'At BIO, Xaira\'s business development lead described looking for partners specifically to acquire more preclinical data, explicitly not funding.\n\nAfter two years of being famously secretive this is a notable shift, and I respect the candour. My read is that the company found the ceiling on what you can learn from data you generate yourself, however much money you have. Even $1.3 billion does not buy enough biology.\n\nThat is a real finding about the whole generative biology premise, and it is more useful than another benchmark announcement would have been.',
    sources: [
      {
        title: 'Secretive AI drug hunter Xaira dips toe into dealmaking with hunt for partners',
        publisher: 'BioSpace',
        url: 'https://www.biospace.com/business/secretive-ai-drug-hunter-xaira-dips-toe-into-dealmaking-with-hunt-for-partners',
      },
    ],
  },
  {
    id: '2026-07-alnylam-xaira-idea',
    headline: 'The trade I would want to see: Alnylam and Xaira',
    entryDate: 'July 2026',
    sortKey: '2026-07-24',
    entryType: 'industry-observation',
    scope: 'industry',
    relatedCompanyIds: ['xaira', 'inceptive'],
    relatedEntryIds: ['2026-07-xaira-partners', '2026-06-alnylam-inceptive'],
    analysis:
      'Xaira says it wants preclinical data rather than capital. Alnylam has spent two decades generating exactly that kind of data in RNAi and just demonstrated, with Inceptive, that it will pay for computational capability.\n\nA data-for-data trade between them would be more interesting than either company doing another financing. Xaira has the largest perturbation dataset anyone has published. Alnylam has validated in vivo results across multiple approved products. Neither needs the other\'s money.\n\nThe obvious objection is that Alnylam just committed three years to Inceptive on adjacent ground, and running two AI partnerships at once is organisationally expensive. I still think it is the most logical unconsummated deal in the sector right now.',
    sources: [
      {
        title: 'Secretive AI drug hunter Xaira dips toe into dealmaking with hunt for partners',
        publisher: 'BioSpace',
        url: 'https://www.biospace.com/business/secretive-ai-drug-hunter-xaira-dips-toe-into-dealmaking-with-hunt-for-partners',
      },
    ],
  },
  {
    id: '2026-07-rock-health-h1',
    headline: 'Digital health H1: $7.4B, and twelve companies took 59% of it',
    entryDate: 'July 2026',
    sortKey: '2026-07-10',
    entryType: 'financing',
    scope: 'industry',
    themes: ['capital-concentration'],
    relatedEntryIds: ['2026-01-rock-health-2025'],
    analysis:
      '$7.4 billion across 244 deals, up about a billion on last year\'s first half. Twelve companies at $100 million or more accounted for roughly 59 percent of the total.\n\nSame shape as 2025, more extreme. The average is meaningless. If you strip the megadeals out, the median digital health company is raising into a market that has not recovered at all.\n\nWhat I would want to know, and cannot get from the aggregate data, is how many of those 244 deals were flat or structured rounds dressed up as new financings.',
    sources: [
      {
        title: 'H1 2026 funding and market overview: Durable roots, shifting routes',
        publisher: 'Rock Health',
        url: 'https://rockhealth.com/insights/h1-2026-funding-and-market-overview-durable-roots-shifting-routes/',
      },
    ],
  },
  {
    id: '2026-07-layoff-tally',
    headline: '15,405 healthcare and pharma jobs cut so far this year',
    entryDate: 'July 2026',
    sortKey: '2026-07-28',
    entryType: 'people',
    scope: 'industry',
    analysis:
      'Across 25 companies, with Takeda\'s 4,500 the largest single reduction. Down from last year in pace, and still a substantial number in a sector everyone describes as recovering. Aggregate funding figures and employment figures are telling different stories, which usually means the capital is going to different companies than the ones doing the cutting.',
    sources: [
      {
        title: 'Healthcare & Pharma Layoffs 2026',
        publisher: 'LayoffHedge',
        url: 'https://layoffhedge.com/industry/healthcare-layoffs-2026',
      },
    ],
  },
  {
    id: '2026-07-china-innovation-question',
    headline: 'Is Chinese biotech innovating or still fast following?',
    entryDate: 'July 2026',
    sortKey: '2026-07-14',
    entryType: 'industry-observation',
    scope: 'industry',
    themes: ['china-licensing'],
    relatedEntryIds: ['2026-01-china-share'],
    analysis:
      'I have been trying to answer this properly rather than pick a side, because both available narratives are lazy.\n\nThe evidence for fast following is strong in the categories where most deals happen. Antibody-drug conjugates and bispecifics are areas where the biology is understood and the work is engineering and execution. Chinese companies are genuinely excellent at that, and they are faster and cheaper at it than anyone.\n\nThe evidence for real innovation is thinner but not absent. Upfront payments have moved from around $52 million in 2022 to well over $150 million, and buyers like Roche, AstraZeneca, BMS, Merck and Pfizer do not pay that for me-too molecules. Something is being priced beyond speed.\n\nMy current view is that the honest answer is neither. The Chinese advantage is in development, not discovery. Enrolling a trial in months rather than years is a structural advantage that compounds regardless of how novel the underlying idea is, and it means a Chinese company reaches human data on a known mechanism before a Western company reaches human data on a better one.\n\nWhich is worse for Western startups than genuine Chinese innovation would be, because you cannot out-innovate an execution advantage. You have to match it, and matching it means changing how trials are run.',
    sources: [
      {
        title: 'As Chinese biotechs recognize their value, the bargain era may be over',
        publisher: 'PharmaVoice',
        url: 'https://www.pharmavoice.com/news/china-biotech-recognize-value-bargain-over/814979/',
      },
      {
        title: 'Analysis: China biotech licensing boom to hit record in 2026 as pipeline swells',
        publisher: 'Reuters',
        url: 'https://finance.yahoo.com/news/analysis-china-biotech-licensing-boom-092338804.html',
      },
    ],
  },
  {
    id: '2026-07-china-valuation-pressure',
    headline: 'What China licensing does to early-stage Western valuations',
    entryDate: 'July 2026',
    sortKey: '2026-07-15',
    entryType: 'industry-observation',
    scope: 'industry',
    themes: ['china-licensing'],
    analysis:
      'This is the part that should worry any US seed-stage biotech and mostly does not get discussed.\n\nA large pharma with a $100 million budget for a therapeutic area can spend it on a Series A in a US company with a mechanism and a good academic founder, or license a Chinese asset that already has Phase 1 data for a similar upfront.\n\nThe second option has less scientific risk and arrives years earlier. So the Western company is no longer competing on science. It is competing on a timeline it structurally cannot match, and the premium that a prestigious founding team used to command has to come from somewhere else now.\n\nI think the response is either to work on biology genuinely novel enough that no fast follower exists, or to accept lower valuations. Most companies will try to argue their way out of it instead.',
    sources: [
      {
        title: 'Chinese biotechs landed 6 of 26 major pharma deals in 16 months, worth $53 billion',
        publisher: 'Drug Discovery Trends',
        url: 'https://www.drugdiscoverytrends.com/chinese-firms-landed-6-of-26-major-pharma-deals-in-16-months-worth-53-billion/',
      },
    ],
  },
  {
    id: '2026-07-china-geopolitical-risk',
    headline: 'Who holds the political risk in a China licensing deal?',
    entryDate: 'July 2026',
    sortKey: '2026-07-16',
    entryType: 'regulation-policy',
    scope: 'industry',
    themes: ['china-licensing', 'tariffs'],
    analysis:
      'The structures I have looked at generally give the Western partner global rights outside China while the Chinese originator keeps home-market rights. That is sensible commercially and it also quietly allocates political risk.\n\nIf US policy ever restricts transferring clinical data or IP from Chinese entities, the Western licensee is holding an asset whose underlying development history sits in a jurisdiction it cannot control. The FDA has already signalled it is thinking about the acceptability of trial data generated entirely in China, and national security showed up in the agency\'s stated priorities at JPM this year.\n\nNone of this is enacted. But a company whose lead asset came from a Chinese partner is carrying a policy exposure that does not appear anywhere in its scientific risk assessment.',
    sources: [
      {
        title: 'China\'s Biotech Ascent: Risk, Opportunity, and Whether the FDA Can Hold the Line',
        publisher: 'David H. Crean',
        url: 'https://davidhcrean.substack.com/p/chinas-biotech-ascent-risk-opportunity',
      },
    ],
  },
  {
    id: '2026-07-keytruda-subcutaneous',
    headline: 'Merck\'s cliff strategy is partly a syringe',
    entryDate: 'July 2026',
    sortKey: '2026-07-08',
    entryType: 'industry-observation',
    scope: 'industry',
    themes: ['patent-cliff'],
    analysis:
      'One of the standard responses to biologic loss of exclusivity is to move patients onto a differently administered version before generics arrive. A subcutaneous injection given in minutes is more convenient than an infusion taking half an hour in a chair, and it carries its own patent life.\n\nIt is not a cure for the cliff. It is a way to retain a share of patients who would otherwise switch on price alone, and to keep the infusion-centre economics from collapsing all at once. Worth understanding because it means the revenue decline after a biologic goes off patent is usually slower and shallower than the headline number implies.',
    sources: [
      {
        title: 'Drug Patent Expiration: The Complete Strategic Guide to Loss of Exclusivity',
        publisher: 'DrugPatentWatch',
        url: 'https://www.drugpatentwatch.com/blog/the-impact-of-drug-patent-expiration-financial-implications-lifecycle-strategies-and-market-transformations/',
      },
    ],
  },
  {
    id: '2026-07-biosimilar-erosion',
    headline: 'Biologics do not fall off a cliff, they walk down a slope',
    entryDate: 'July 2026',
    sortKey: '2026-07-09',
    entryType: 'industry-observation',
    scope: 'industry',
    themes: ['patent-cliff'],
    analysis:
      'A small molecule losing exclusivity can lose most of its revenue within a year, because pharmacists substitute automatically and the price collapses.\n\nBiologics erode more slowly. Biosimilars cost hundreds of millions to develop, require their own trials, and often are not automatically substitutable, so the discount is smaller and the switching is slower. Stelara entering biosimilar competition is the current live example.\n\nThis matters when reading the $230 billion at-risk figure. That number treats all exclusivity losses alike, and the biologic portion of it will bleed out over years rather than disappear. The companies most exposed are the ones with large small-molecule franchises, which is part of why the Eliquis expiry worries me more for BMS than Keytruda does for Merck.',
    sources: [
      {
        title: 'Beyond the Drug Patent Cliff: Procurement, Generics and Biosimilars',
        publisher: 'DrugPatentWatch',
        url: 'https://www.drugpatentwatch.com/blog/beyond-the-drug-patent-cliff-how-procurement-can-drive-immediate-savings-with-generics-and-biosimilars/',
      },
    ],
  },
  {
    id: '2026-07-cliff-leverage-for-biotech',
    headline: 'The cliff is the best thing that ever happened to mid-size biotech',
    entryDate: 'July 2026',
    sortKey: '2026-07-11',
    entryType: 'industry-observation',
    scope: 'industry',
    themes: ['patent-cliff'],
    analysis:
      'If you hold a Phase 2 asset in 2026 you have more negotiating leverage than at any point in the last decade, and it has nothing to do with your science.\n\nThe buyers are compelled. More than $230 billion of revenue is coming off patent by 2030, the supply of clinically validated assets is fixed, and the deals have to close now for anything to contribute before the revenue disappears. That is a seller\'s market created entirely by other people\'s calendars.\n\nThe corollary is that this leverage has an expiry. Once the cliff passes and the replacement pipelines are set, the same asset is worth considerably less.',
    sources: [
      {
        title: '2026 pharma and biotech deal-making already tops 2025',
        publisher: 'STAT',
        url: 'https://www.statnews.com/2026/06/22/pharma-biotech-ma-boom-2026-deals-total-123-billion/',
      },
    ],
  },
  {
    id: '2026-07-stroke-rural-access',
    headline: 'The stroke problem nobody is funding is geography',
    entryDate: 'July 2026',
    sortKey: '2026-07-06',
    entryType: 'care-delivery',
    scope: 'industry',
    themes: ['stroke'],
    relatedEntryIds: ['2026-03-stroke-bottleneck'],
    analysis:
      'Thrombectomy requires an interventionalist, an angiography suite and a team available at three in the morning. Those exist in cities and at large academic centres. They largely do not exist across rural America.\n\nSo for a meaningful share of the country the pathway is: symptom onset, ambulance to a community hospital, imaging, a decision, then a transfer by road or air to a centre that can operate, then the procedure. Every one of those steps costs brain tissue.\n\nAI triage software addresses maybe fifteen minutes of that sequence. The rest is capital equipment, staffing and helicopters, none of which is venture fundable and all of which is where the actual outcome gap lives. I find this genuinely frustrating as an investment area, because the technically interesting problem and the clinically important problem are not the same problem.',
    sources: [
      {
        title: 'Creating Virtual Stroke Networks: A Scientific Statement From the American Heart Association',
        publisher: 'PubMed',
        url: 'https://pubmed.ncbi.nlm.nih.gov/41342129/',
      },
    ],
  },
  {
    id: '2026-07-telestroke-economics',
    headline: 'Telestroke works and the economics are awkward',
    entryDate: 'July 2026',
    sortKey: '2026-07-07',
    entryType: 'care-delivery',
    scope: 'industry',
    themes: ['stroke'],
    analysis:
      'A remote neurologist reading a scan and authorising thrombolysis at a hospital with no neurologist on staff is one of the clearest wins in telemedicine, and it has been working for years.\n\nThe awkwardness is who pays. The spoke hospital gets the consult and the liability coverage. The hub provides the specialist and bills a modest fee. If the patient then needs transferring, the hub gets the procedure revenue and the spoke gets nothing but the transfer costs.\n\nThat misalignment is why some of the more interesting recent work is aimed at helping spoke hospitals keep patients they can safely treat, rather than at moving patients faster. Retention is a business model. Speed is a feature.',
    sources: [
      {
        title: 'STRokE DOC-AI: Leveraging AI Tools to Optimize Both Hub and Spoke in a Telestroke Network',
        publisher: 'NEJM AI',
        url: 'https://ai.nejm.org/doi/full/10.1056/AI-S2400848',
      },
    ],
  },
  {
    id: '2026-07-stroke-rehab-gap',
    headline: 'Post-stroke rehabilitation is the neglected half of the pathway',
    entryDate: 'July 2026',
    sortKey: '2026-07-12',
    entryType: 'care-delivery',
    scope: 'industry',
    themes: ['stroke', 'bci'],
    analysis:
      'Almost all the money and attention in stroke goes to the first few hours. That is where the dramatic outcome differences are, so it is defensible.\n\nBut most stroke survivors live for years afterward with impairment, and rehabilitation is under-resourced, poorly reimbursed, and delivered in short bursts that stop long before recovery plateaus. Home-based rehab, remote monitoring of adherence and robotics all address this and get a fraction of the investment.\n\nIt is also where brain-computer interfaces eventually intersect stroke rather than only ALS, though I think that is further out than the enthusiasm suggests. The near-term opportunity is much more boring: getting people to do their exercises, at home, for longer than six weeks.',
    sources: [
      {
        title: 'Creating Virtual Stroke Networks: A Scientific Statement From the American Heart Association',
        publisher: 'PubMed',
        url: 'https://pubmed.ncbi.nlm.nih.gov/41342129/',
      },
    ],
  },
  {
    id: '2026-07-dementia-care-gap',
    headline: 'Dementia care is the hardest business model in aging',
    entryDate: 'July 2026',
    sortKey: '2026-07-18',
    entryType: 'care-delivery',
    scope: 'industry',
    themes: ['aging'],
    analysis:
      'Every assumption that makes a digital health product work breaks in dementia. The user cannot reliably learn a new interface. Adherence declines by definition as the condition progresses. The caregiver is often an exhausted spouse in their eighties. And the trajectory is downward, so any product measuring improvement is measuring the wrong thing.\n\nThe businesses that seem to work here are services rather than software: respite care, care navigation, and anything that reduces hours of unpaid family labour. GUIDE-style Medicare models paying for dementia care coordination are the most important development in the category and they are a payment change, not a technology.',
    sources: [
      {
        title: 'Innovative Home Health Services for Senior Caregivers and Aging Adults in 2026',
        publisher: 'AllSeniors',
        url: 'https://allseniors.org/articles/innovative-home-health-services-for-senior-caregivers-and-aging-adults-in-2026/',
      },
    ],
  },
  {
    id: '2026-07-ma-dependency',
    headline: 'Too much of senior care is a bet on Medicare Advantage economics',
    entryDate: 'July 2026',
    sortKey: '2026-07-19',
    entryType: 'care-delivery',
    scope: 'industry',
    themes: ['aging'],
    analysis:
      'A large share of the aging companies I look at ultimately sell to Medicare Advantage plans, and the pitch is always some version of reducing total cost of care so the plan keeps more of its capitated payment.\n\nThat works while MA is profitable and expanding. It is a single point of failure when rates tighten or risk adjustment rules change, and both have been moving. A company whose entire customer base is MA plans is not a healthcare company with a payer concentration problem, it is a leveraged bet on one federal payment program.\n\nThe businesses I would rather see are the ones that also work under fee-for-service, or that sell something a family would buy regardless. There are not many.',
    sources: [
      {
        title: 'Top Home Health Services Trends to Watch in 2025 and 2026',
        publisher: 'AllSeniors',
        url: 'https://allseniors.org/articles/top-home-health-services-trends-to-watch-in-2025-and-2026/',
      },
    ],
  },
  {
    id: '2026-07-pace-model',
    headline: 'PACE is the most interesting model in aging and almost nobody builds on it',
    entryDate: 'July 2026',
    sortKey: '2026-07-21',
    entryType: 'care-delivery',
    scope: 'industry',
    themes: ['aging'],
    analysis:
      'Programs of All-Inclusive Care for the Elderly take full capitated responsibility for people who are nursing-home eligible but living at home, covering medical care, transport, meals and day programs out of one budget.\n\nOne entity holds all the incentives. If a fall sends someone to hospital, the PACE program pays. So it will buy a grab bar, a ride to an appointment or a home visit without needing a study to justify it.\n\nThat is exactly the structure aging technology needs and there are relatively few PACE organisations, they are hard to start, and the regulatory lift is significant. Which is probably why the category is under-built rather than because the model does not work.',
    sources: [
      {
        title: 'Innovative Home Health Services for Senior Caregivers and Aging Adults in 2026',
        publisher: 'AllSeniors',
        url: 'https://allseniors.org/articles/innovative-home-health-services-for-senior-caregivers-and-aging-adults-in-2026/',
      },
    ],
  },
  {
    id: '2026-07-fall-detection',
    headline: 'Fall detection is the one aging product that passes my test',
    entryDate: 'July 2026',
    sortKey: '2026-07-23',
    entryType: 'care-delivery',
    scope: 'industry',
    themes: ['aging'],
    relatedEntryIds: ['2026-05-aging-behavior-test'],
    analysis:
      'Passive sensors require no behaviour change, work when the user has forgotten the device exists, and address an event with a clear and expensive downstream cost. A hip fracture in an eighty-year-old frequently starts a decline that ends in a nursing home, and the payer knows the number.\n\nThe difficulty is false positives. A system that alerts constantly gets muted, and a muted system is worse than none because everyone believes it is working.',
    sources: [
      {
        title: 'Top Elder Care Startups to Watch in 2026',
        publisher: 'Failory',
        url: 'https://www.failory.com/startups/elder-care',
      },
    ],
  },
  {
    id: '2026-08-anthropic-follow-up',
    headline: 'Five weeks after Claude Science, who actually got hurt',
    entryDate: 'August 2026',
    sortKey: '2026-08-04',
    entryType: 'industry-observation',
    scope: 'industry',
    themes: ['anthropic-life-sciences', 'ai-drug-discovery'],
    relatedEntryIds: ['2026-06-anthropic-claude-science'],
    relatedCompanyIds: ['xaira', 'inceptive', 'isomorphic-labs'],
    analysis:
      'AI drug discovery stocks fell when Anthropic announced it would run its own preclinical programs. Having sat with it, I think the market reaction was directionally right and imprecisely aimed.\n\nThe companies genuinely threatened are the ones whose product is a model. If a general model company with far more compute and far more capital decides to work on biological reasoning, a startup whose differentiation is architecture has a serious problem.\n\nThe companies that get more valuable are the ones that own something a model cannot generate. Xaira\'s perturbation datasets. Inceptive\'s RNA measurement loop. Anyone with automated wet-lab throughput. If the model layer commoditises, then whoever supplies the training data captures more, not less.\n\nIsomorphic sits awkwardly between the two. It has Alphabet compute and a real pipeline, so it is not a pure model company, but its entire public identity is model superiority. That is a less comfortable position than it was in May.\n\nThe thing I am watching for is whether Anthropic publishes anything from its own programs. If it does and the work is good, the pressure is real. If the programs stay quiet, this was a positioning exercise ahead of enterprise sales and the sell-off was an overreaction.',
    sources: [
      {
        title: 'Anthropic Launches Claude Science to Enter Life Sciences, AI Drug Discovery Stocks Tumble',
        publisher: 'NAI 500',
        url: 'https://nai500.com/blog/2026/06/anthropic-launches-claude-science-to-enter-life-sciences-ai-drug-discovery-stocks-tumble-in-response/',
      },
    ],
  },
  {
    id: '2026-08-anthropic-vs-biology-native',
    headline: 'Does a general model beat a biology-native one?',
    entryDate: 'August 2026',
    sortKey: '2026-08-05',
    entryType: 'industry-observation',
    scope: 'industry',
    themes: ['anthropic-life-sciences', 'ai-drug-discovery'],
    analysis:
      'My honest answer is that it depends on which task, and that the question is usually asked too broadly.\n\nFor reasoning over literature, drafting regulatory documents, and synthesising what is known, a general model with strong reasoning wins, because that is a language problem and scale helps. For predicting how a specific protein folds or how a cell responds to a perturbation, a specialised model trained on the right data wins, because that is not language and general pretraining does not transfer.\n\nWhere it gets uncomfortable for the specialists is that the first category is most of the actual work in a pharmaceutical company. Discovery is glamorous and small. Documentation, regulatory affairs, trial design and evidence synthesis are enormous, and that is where Anthropic is aiming.',
    sources: [
      {
        title: 'Anthropic Launches Claude Science to Court Pharma Ahead of IPO',
        publisher: 'MedCity News',
        url: 'https://medcitynews.com/2026/06/anthropic-pharma-healthcare/',
      },
    ],
  },
  {
    id: '2026-08-bionemo-commoditization',
    headline: 'Does BioNeMo help or hollow out the startups building on it?',
    entryDate: 'August 2026',
    sortKey: '2026-08-06',
    entryType: 'industry-observation',
    scope: 'industry',
    themes: ['bionemo'],
    relatedEntryIds: ['2026-06-nvidia-everywhere'],
    analysis:
      'I have written about NVIDIA five or six times now and this is the question I keep failing to settle.\n\nThe case that it helps: free, good model components mean a small team can do work that used to require a large one, and the differentiated part of the company moves to biology rather than engineering. That is healthy.\n\nThe case that it hollows out: if the model layer is free and improving, then whatever premium a company earned for having better models evaporates, and the pitch narrows to owning proprietary data or wet-lab capacity. Those are capital-intensive and slow, which favours incumbents and large pharma over startups.\n\nWhat I now believe, tentatively, is that BioNeMo is good for biology and bad for a particular kind of biotech company. Specifically bad for the 2021 vintage that raised on the premise that model quality was the moat. The Chai, Basecamp and Boltz decision to build on the platform rather than against it is the rational response, and it is also an admission.',
    sources: [
      {
        title: 'NVIDIA expands BioNeMo platform through partnerships advancing AI-powered drug discovery',
        publisher: 'Business Daily Network',
        url: 'https://businessdailynetwork.com/stories/678588290-nvidia-expands-bionemo-platform-through-partnerships-advancing-ai-powered-drug-discovery',
      },
    ],
  },
  {
    id: '2026-08-nvidia-strategy-revision',
    headline: 'Revising what I said about NVIDIA in December',
    entryDate: 'August 2026',
    sortKey: '2026-08-07',
    entryType: 'industry-observation',
    scope: 'industry',
    themes: ['bionemo'],
    relatedEntryIds: ['2025-12-nvidia-position', '2026-01-nvidia-lilly-lab'],
    status: 'retrospective',
    analysis:
      'In December I wrote that NVIDIA does not need to own the end-user product because it wins whenever anyone tries. Eight months later I think that was right about the economics and wrong about the ambition.\n\nA billion dollar shared lab with Lilly, co-developing a clinical foundation model with Abridge, an agent toolkit with fifty partners, and equity positions through NVentures in several of the companies doing the work. That is not a supplier posture. It is closer to ecosystem control, where NVIDIA sets the tooling standard, participates in the highest-value applications, and holds equity in the outcomes.\n\nThe part of my December note that holds up is that they take no clinical risk. Every drug that fails costs NVIDIA nothing. That asymmetry is the whole position and I still think it is the best structural trade in healthcare.',
    sources: [
      {
        title: 'NVIDIA and Lilly Announce Co-Innovation AI Lab',
        publisher: 'NVIDIA Newsroom',
        url: 'https://nvidianews.nvidia.com/news/nvidia-and-lilly-announce-co-innovation-lab-to-reinvent-drug-discovery-in-the-age-of-ai',
      },
    ],
  },
  {
    id: '2026-08-what-counts-as-validation',
    headline: 'What would actually count as proof that AI drug discovery works',
    entryDate: 'August 2026',
    sortKey: '2026-08-08',
    entryType: 'industry-observation',
    scope: 'industry',
    themes: ['ai-drug-discovery'],
    relatedCompanyIds: ['isomorphic-labs', 'inceptive', 'xaira'],
    analysis:
      'This field has a measurement problem. Nearly every claim is a benchmark result, and benchmarks are chosen by the people being measured. Protein structure prediction has CASP, a blind competition. Virtual cell modelling, molecular generation and RNA design have nothing equivalent.\n\nSo I have been trying to write down what I would accept instead. Three things.\n\nA regulator letting a computationally designed molecule into a human. Insilico did this in June with ISM8969. Isomorphic has not, and its timeline moved from end of 2025 to end of 2026.\n\nA sophisticated domain partner paying real money for the capability rather than for a press release. Alnylam and Inceptive is the cleanest example, because Alnylam knows RNAi better than anyone and still wanted the design engine.\n\nAnd a molecule surviving Phase 1. Nobody has done this yet, and it is the one that matters most, because Phase 1 tests safety and pharmacokinetics, which is precisely where structure prediction has no advantage. BioAge killed a drug in Phase 2 on liver enzymes after perfectly reasonable preclinical data. Predicting binding does not predict metabolism.\n\nBy that standard, after several billion dollars, the field has shown it can design candidates faster. It has not shown the candidates are better. Those are different claims and the second one is the entire investment case.',
    sources: [
      {
        title: 'Insilico Completes First-in-Human Dosing of ISM8969',
        publisher: 'BioSpace',
        url: 'https://www.biospace.com/press-releases/insilico-completes-first-in-human-dosing-in-phase-i-clinical-study-of-ai-driven-nlrp3-inhibitor-ism8969-achieving-first-clinical-milestone-in-collaboration-with-hygtia-therapeutics',
      },
      {
        title: 'Google-backed Isomorphic Labs delays clinical trial timeline',
        publisher: 'Reuters',
        url: 'https://finance.yahoo.com/news/google-backed-ai-drug-discovery-195423147.html',
      },
    ],
  },
  {
    id: '2026-08-ambient-ai-where-it-lands',
    headline: 'Where I think ambient clinical AI actually ends up',
    entryDate: 'August 2026',
    sortKey: '2026-08-09',
    entryType: 'industry-observation',
    scope: 'industry',
    themes: ['ambient-ai'],
    relatedCompanyIds: ['abridge', 'ambience-healthcare', 'openevidence'],
    analysis:
      'Transcription is a commodity and everyone in the category knows it. The interesting question is what each company converts that access into.\n\nAbridge is converting it into pharma services, via coding and now trial recruitment. Ambience is converting it into revenue cycle and documentation integrity, selling into a function hospitals already staff expensively. OpenEvidence went a different route entirely and never sold documentation at all, building the reference layer physicians use during the decision rather than after it.\n\nAll three are describing the same insight from different angles: the recording is worthless and the position next to the clinician at the moment of decision is extremely valuable. Whoever holds that position can sell almost anything downstream of it.\n\nMy guess is the category consolidates to two or three winners, Epic distributes rather than dominates, and the eventual profit pool is much larger than documentation software but shows up in categories nobody currently calls ambient AI.',
    sources: [
      {
        title: 'Policy brief: ambient AI scribes and the coding arms race',
        publisher: 'PMC',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12738533/',
      },
    ],
  },
  {
    id: '2026-08-bci-reimbursement',
    headline: 'Everyone argues about electrodes. Billing codes will decide it',
    entryDate: 'August 2026',
    sortKey: '2026-08-10',
    entryType: 'industry-observation',
    scope: 'industry',
    themes: ['bci'],
    relatedCompanyIds: ['synchron', 'precision-neuroscience'],
    analysis:
      'Neuralink has over a thousand electrodes and needs a craniotomy, with roughly 21 participants implanted by early 2026. Precision has 1,024 on a film through a sub-millimetre slit, cleared for up to 30 days. Synchron has sixteen on a stent threaded up the jugular, with ten patients and a pivotal trial running.\n\nNo implantable motor BCI has full FDA premarket approval. When one gets it, it still cannot reach patients until Medicare establishes a code that pays for the procedure, and new device categories routinely wait years. That gate gets almost no attention relative to channel count, and it is the one that decides whether any of this becomes a business this decade.\n\nWhich is why I weight surgical accessibility so heavily. Synchron\'s procedure can be done by an interventional neuroradiologist in a cath lab using catheter skills they already have. That is a device an ordinary hospital can adopt on day one.\n\nThe counterargument I take seriously: a device approved for a narrow indication can get stranded there while something better defines the category later. I follow both companies, which is partly a hedge and partly an admission that I cannot resolve it.',
    sources: [
      {
        title: 'BCI Clinical Trials 2026: Neuralink, Synchron, Precision',
        publisher: 'NextWaves Insight',
        url: 'https://nextwavesinsight.com/bci-neuralink-synchron-clinical-trials-2026/',
      },
      {
        title: 'Synchron Brain Implant Targets 2026 Pivotal Trial for First FDA-Approved BCI',
        publisher: 'Tech Times',
        url: 'https://www.techtimes.com/articles/317929/20260606/synchron-brain-implant-targets-2026-pivotal-trial-first-fda-approved-bci.htm',
      },
    ],
  },
  {
    id: '2026-08-apple-bci-underrated',
    headline: 'Apple building a BCI input category is underrated',
    entryDate: 'August 2026',
    sortKey: '2026-08-11',
    entryType: 'platform',
    scope: 'company',
    relatedCompanyIds: ['synchron'],
    themes: ['bci'],
    analysis:
      'Apple added a BCI Human Interface Device profile in May 2025 and Synchron was first to integrate, letting users control iPhone, iPad and Vision Pro without movement or voice.\n\nAssistive technology usually fails at the edges rather than at the device. The software is clunky, it works with one machine, nobody can support it, the company selling it goes under. A maintained accessibility framework from a company that will exist in fifteen years removes an entire category of failure.\n\nIt also means Synchron does not have to build a software ecosystem, which is where a lot of good neurotech hardware has died.',
    sources: [
      {
        title: 'Synchron To Achieve First Native Brain-Computer Interface Integration with iPhone, iPad and Apple Vision Pro',
        publisher: 'Business Wire',
        url: 'https://www.businesswire.com/news/home/20250513927084/en/Synchron-To-Achieve-First-Native-Brain-Computer-Interface-Integration-with-iPhone-iPad-and-Apple-Vision-Pro',
        publishedAt: 'May 13, 2025',
      },
    ],
  },
  {
    id: '2026-08-tools-vs-drugs',
    headline: 'Life science tools are the quiet way to own this cycle',
    entryDate: 'August 2026',
    sortKey: '2026-08-12',
    entryType: 'industry-observation',
    scope: 'industry',
    analysis:
      'Merck KGaA paid $11.3 billion for Bio-Techne. Thermo Fisher is building autonomous lab capability with NVIDIA. Neither of those is a bet on any drug working.\n\nTools businesses sell to every company in the sector regardless of whose molecule succeeds, have recurring consumables revenue, and are indifferent to patent cliffs. In a market where two thirds of venture dollars now chase clinical-stage assets and everyone is bidding for the same scarce pipeline, buying the suppliers is a genuinely contrarian position.\n\nThe catch is that tools revenue depends on research budgets, and research budgets shrink when funding is tight. It is less cyclical than drug development, not acyclical.',
    sources: [
      {
        title: 'Biopharma M&A 2026: Every $1B+ Deal and the Drivers',
        publisher: 'Life Science Daily',
        url: 'https://lifesciencedaily.news/biotech-ma-2026-every-1b-deal-so-far-and-what-is-driving-them/',
      },
    ],
  },
  {
    id: '2026-08-diagnostics-decline',
    headline: 'Diagnostics fell 33% and nobody wrote about it',
    entryDate: 'August 2026',
    sortKey: '2026-08-13',
    entryType: 'industry-observation',
    scope: 'industry',
    themes: ['capital-concentration'],
    analysis:
      'Of all the segment numbers in the 2025 data, the 33 percent decline in diagnostics and tools investment is the one that got the least attention and probably matters most for patients.\n\nDiagnostics have a structural problem that has nothing to do with the science. A test that identifies disease earlier saves money for whoever pays for treatment years later, which is frequently not the payer covering the test today. Reimbursement is set through a slow process that undervalues novel tests, and the same test used by a different doctor can be paid at wildly different rates.\n\nSo you get an area with obvious clinical value and terrible unit economics, and capital does what capital does.',
    sources: [
      {
        title: 'AI Investment Accounted for Nearly Half of Healthcare Investment in 2025',
        publisher: 'Silicon Valley Bank',
        url: 'https://www.svb.com/news/company-news/ai-investment-accounted-for-nearly-half-of-healthcare-investment-in-2025-silicon-valley-bank-releases-17th-healthcare-investments-and-exits-report/',
      },
    ],
  },
  {
    id: '2026-08-pe-scrutiny',
    headline: 'Regulators are finally looking at physician practice roll-ups',
    entryDate: 'August 2026',
    sortKey: '2026-08-14',
    entryType: 'regulation-policy',
    scope: 'industry',
    analysis:
      'Several states have tightened review of management services organisation structures, the arrangement private equity uses to control physician practices in states that formally prohibit corporate ownership of medical practices.\n\nThe structure has always been a workaround. A management company owns everything except the clinical entity, and controls the clinical entity through a services agreement. It is legal and it is obviously designed to get around the rule.\n\nWhat happens to valuations if that structure is restricted is a question a lot of healthcare services funds would rather not answer right now.',
    sources: [
      {
        title: 'Healthcare Trends & Transactions Q2 2026',
        publisher: 'Bass, Berry & Sims',
        url: 'https://www.bassberry.com/news/healthcare-trends-transactions-q2-2026/',
      },
    ],
  },
  {
    id: '2026-08-hospital-margins',
    headline: 'Hospital finances are the constraint under every health tech sale',
    entryDate: 'August 2026',
    sortKey: '2026-08-15',
    entryType: 'care-delivery',
    scope: 'industry',
    analysis:
      'Every clinical software company I follow is ultimately selling into a hospital budget, and hospital operating margins have been thin enough for years that a purchase has to displace a cost rather than add a capability.\n\nThat is why the coding and revenue cycle pitch works and the physician satisfaction pitch does not. One shows up on the revenue line within a quarter. The other requires a CFO to believe in reduced turnover eighteen months out.\n\nIt is also why I am sceptical of any health tech company whose ROI story requires the hospital to eventually hire fewer people. Hospitals rarely reduce headcount because software arrived. They redeploy.',
    sources: [
      {
        title: 'Key trends that will shape healthcare M&A activity in 2026',
        publisher: 'Fierce Healthcare',
        url: 'https://www.fiercehealthcare.com/finance/key-trends-will-shape-healthcare-ma-activity-2026-pwc',
      },
    ],
  },
  {
    id: '2026-08-precision-still-waiting',
    headline: 'Precision\'s chronic implant is still not in a human',
    entryDate: 'August 2026',
    sortKey: '2026-08-16',
    entryType: 'clinical',
    scope: 'company',
    relatedCompanyIds: ['precision-neuroscience'],
    themes: ['bci'],
    relatedEntryIds: ['2026-01-precision-waiting'],
    analysis:
      'Second time I am noting this. The chronic wireless system was targeted for first-in-human during 2026 and there is nothing public with roughly four months left in the year.\n\nStill not alarming on its own. Implantable neurotechnology slips constantly and the 30-day cleared product is generating data in the meantime. But I said in January I would track this, and the honest update is that the milestone I described as determinative has not happened.',
    sources: [
      {
        title: 'Precision Neuroscience Receives FDA Clearance for High-Resolution Cortical Electrode Array',
        publisher: 'GlobeNewswire',
        url: 'https://www.globenewswire.com/news-release/2025/04/17/3063418/0/en/Precision-Neuroscience-Receives-FDA-Clearance-for-High-Resolution-Cortical-Electrode-Array/',
      },
    ],
  },
  {
    id: '2026-08-openevidence-open-question',
    headline: 'The OpenEvidence question I still cannot answer',
    entryDate: 'August 2026',
    sortKey: '2026-08-17',
    entryType: 'industry-observation',
    scope: 'company',
    relatedCompanyIds: ['openevidence'],
    analysis:
      'The revenue is pharma advertising shown to physicians inside a tool they use to make clinical decisions. At roughly $150 million annualised and 90 percent gross margins, it works commercially.\n\nI have not found a clear public account of how the advertising layer is separated from the answer layer, and I think that is the single most important unanswered question about the company. Not because I suspect anything, but because it is exactly the question a regulator or a journalist will eventually ask, and the answer needs to be structural rather than a policy statement.\n\nIf anyone reading this works there or covers them properly, I would like to be told what I am missing.',
    sources: [
      {
        title: 'OpenEvidence revenue, valuation and funding',
        publisher: 'Sacra',
        url: 'https://sacra.com/c/openevidence/',
      },
    ],
  },
  {
    id: '2026-08-what-i-got-wrong',
    headline: 'Nine months in, what I have gotten wrong so far',
    entryDate: 'August 2026',
    sortKey: '2026-08-18',
    entryType: 'industry-observation',
    scope: 'industry',
    status: 'retrospective',
    relatedEntryIds: ['2026-05-turn-bio-auction', '2026-01-openevidence-series-d', '2026-06-epic-toolbox-revision'],
    analysis:
      'Worth collecting these in one place rather than letting them stay buried in individual notes.\n\nTurn Bio is the biggest one. I tracked scientific milestones and read them as company health, never estimated runway, and misread a licensing deal as validation when it was more likely a company selling optionality to survive. It went to auction in May.\n\nOpenEvidence, in the other direction. I spent from July to November calling it a distribution experiment because the product is free, and the revenue figures released in January showed a real business growing roughly twentyfold. I was looking at the wrong number and being sceptical about the wrong thing.\n\nEpic. I spent a year modelling Epic as an extinction event for ambient documentation companies, and the August 2025 Toolbox announcement should have changed my mind ten months before it did.\n\nAnthropic. I called Claude for Life Sciences a packaging exercise in November and said it did not threaten biology-native model companies. By June it was running its own preclinical programs with a pharma CEO on its board.\n\nThe pattern in three of those four is the same: I was too confident about a structural argument and too slow to update when a specific fact contradicted it. The Turn Bio one is different and worse, because it was not an analytical error. I simply never asked how much money the company had left.',
    sources: [
      {
        title: 'Daewoong Pharmaceutical acquires anti-aging platform from Turn Biotechnologies',
        publisher: 'The Korea Herald',
        url: 'https://www.koreaherald.com/article/10742748',
      },
    ],
  },
];
