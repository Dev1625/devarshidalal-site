import { CoverageEntry } from './types';

// April through June 2026.

export const ENTRIES_2026_Q2: CoverageEntry[] = [
  {
    id: '2026-04-tariff-232',
    headline: 'The Section 232 pharma tariffs land, and almost everything is exempt',
    entryDate: 'April 2, 2026',
    sortKey: '2026-04-02',
    entryType: 'regulation-policy',
    scope: 'industry',
    themes: ['tariffs'],
    relatedEntryIds: ['2025-11-tariff-aftermath'],
    status: 'current-view',
    analysis:
      'The Commerce Department\'s Section 232 investigation produced formal pharmaceutical tariffs. The exemptions are the substance: drugs from countries that have already signed trade deals with the US, drugs from companies that agreed to pricing and onshoring arrangements, and all generics and biosimilars.\n\nSo what began in September 2025 as a blanket 100 percent tariff on branded and patented imports has become a targeted instrument aimed at companies that did not negotiate. That is a completely different policy from the one announced, and I think the shift vindicates what I wrote in November: the carveout was always the mechanism, and the tariff was leverage rather than revenue.\n\nWho benefits is now fairly clear. Large pharma with US manufacturing and the lobbying capacity to cut a deal pays little. Generic manufacturers are exempt outright, which matters because generics are where the actual import dependence and shortage risk sit. Who is exposed is mid-size companies manufacturing abroad without the scale to negotiate individually.\n\nThe thing I got wrong in November was assuming this would meaningfully reprice drug costs. It mostly has not, because the policy was designed to be avoidable. What it did do is pull forward a large number of US facility announcements, and I still think most of those are 2029 capacity being marketed as a 2026 response.',
    sources: [
      {
        title: '100% On Brand: U.S. Imposes New Tariffs (and Key Exemptions) on Patented Pharmaceuticals',
        publisher: 'Ropes & Gray',
        url: 'https://www.ropesgray.com/en/insights/alerts/2026/04/100-on-brand-us-imposes-new-tariffs-and-key-exemptions-on-patented-pharmaceuticals',
        publishedAt: 'April 2026',
      },
    ],
  },
  {
    id: '2026-04-tariff-generics',
    headline: 'Exempting generics is the part that actually made sense',
    entryDate: 'April 2026',
    sortKey: '2026-04-04',
    entryType: 'regulation-policy',
    scope: 'industry',
    themes: ['tariffs'],
    analysis:
      'Generic manufacturers run on margins thin enough that a tariff of any size would have pushed products off the market rather than onshored them. The US already has recurring shortages in sterile injectables for exactly this reason. Taxing those imports would have produced empty shelves within a quarter, and I suspect that argument is what won the exemption rather than any principled position.',
    sources: [
      {
        title: '100% On Brand: U.S. Imposes New Tariffs (and Key Exemptions) on Patented Pharmaceuticals',
        publisher: 'Ropes & Gray',
        url: 'https://www.ropesgray.com/en/insights/alerts/2026/04/100-on-brand-us-imposes-new-tariffs-and-key-exemptions-on-patented-pharmaceuticals',
      },
    ],
  },
  {
    id: '2026-04-tariff-china-licensing',
    headline: 'Does the tariff slow China licensing? Probably not',
    entryDate: 'April 2026',
    sortKey: '2026-04-06',
    entryType: 'regulation-policy',
    scope: 'industry',
    themes: ['tariffs', 'china-licensing'],
    analysis:
      'A question I had going into this: if the administration is hostile to Chinese pharmaceutical imports, does that chill Western pharma licensing Chinese molecules?\n\nI think the answer is no, and the reason is that licensing is not importing. When AstraZeneca licenses a CSPC asset, it takes the intellectual property and runs its own trials and manufacturing. No product crosses a border. The tariff touches finished goods; the deals touch rights.\n\nThe real political risk to China licensing was never tariffs. It is CFIUS-style review and any future restriction on transferring clinical data or IP, and none of that has been enacted.',
    sources: [
      {
        title: 'China\'s Biotech Ascent: Risk, Opportunity, and Whether the FDA Can Hold the Line',
        publisher: 'David H. Crean',
        url: 'https://davidhcrean.substack.com/p/chinas-biotech-ascent-risk-opportunity',
      },
    ],
  },
  {
    id: '2026-04-abridge-flat',
    headline: 'Abridge extends at a flat $5.3B',
    entryDate: 'April 2026',
    sortKey: '2026-04-15',
    entryType: 'financing',
    scope: 'company',
    relatedCompanyIds: ['abridge'],
    themes: ['ambient-ai'],
    analysis:
      'A $316 million Series E extension at the same valuation as June 2025, taking total capital to roughly $1.1 billion.\n\nMy first reaction was that a flat round after a year of doubling is a warning. Thinking about it more, I lean toward discipline rather than weakness. The company clearly had the option to push for a mark and did not, and taking $316 million at a price you can defend is better than taking it at a price you have to grow into.\n\nStill, flat is information. It says the previous valuation already priced in a lot of the health system additions since.',
    sources: [
      {
        title: 'Abridge Closes Reported $316M Series E Extension at $5.3B Valuation',
        publisher: 'TechJack Solutions',
        url: 'https://techjacksolutions.com/ai-brief/abridge-closes-reported-316m-series-e-extension-at-53b-valua/',
      },
    ],
  },
  {
    id: '2026-04-lilly-kelonia',
    headline: 'Lilly pays up to $7B for a Phase 1 company, and in vivo CAR-T reprices overnight',
    entryDate: 'April 20, 2026',
    sortKey: '2026-04-20',
    entryType: 'ma-licensing',
    scope: 'industry',
    themes: ['lilly-ma', 'patent-cliff'],
    analysis:
      'Up to $7 billion for Kelonia, with $3.25 billion of that upfront, for a company whose lead asset is in Phase 1.\n\nThat number is hard to justify on the asset. It is much easier to justify on the modality. Conventional CAR-T requires extracting a patient\'s cells, engineering them in a facility, and infusing them back, which costs several hundred thousand dollars and takes weeks. In vivo CAR-T does the engineering inside the body with a vector. If that works, it turns a bespoke manufacturing procedure into something closer to a drug, and the addressable population goes from a few thousand oncology patients to potentially millions of people with autoimmune disease.\n\nSo Lilly is not paying $3.25 billion upfront for Kelonia\'s data. It is paying to hold a position in a modality it thinks becomes standard, and paying now because AbbVie already took Capstan for $2.1 billion last June and the supply of credible in vivo CAR-T companies is very short.\n\nThe read-through for anyone still private in this space is excellent. There are maybe a handful of these companies and at least four large pharma buyers who have now publicly signalled they want one.',
    sources: [
      {
        title: 'After Lilly\'s $7B Kelonia deal, are there any in vivo CAR-T biotechs left to buy?',
        publisher: 'Fierce Biotech',
        url: 'https://www.fiercebiotech.com/biotech/frenzied-feeding-playing-defense-and-disruption-lillys-kelonia-acquisition-and-future-vivo',
      },
    ],
  },
  {
    id: '2026-04-lilly-crossbridge',
    headline: 'Lilly also takes CrossBridge Bio for $300M on the same day',
    entryDate: 'April 20, 2026',
    sortKey: '2026-04-20',
    entryType: 'ma-licensing',
    scope: 'industry',
    themes: ['lilly-ma'],
    analysis:
      'Antibody-drug conjugates, small price, announced alongside a $7 billion deal. Doing a $300 million tuck-in on the same day you announce a multi-billion dollar acquisition is a sign of a corporate development team operating at genuinely unusual throughput.',
    sources: [
      {
        title: 'Eli Lilly builds on deal streak with $7B oncology acquisition',
        publisher: 'eMarketer',
        url: 'https://www.emarketer.com/content/eli-lilly-builds-on-deal-streak-with-7b-oncology-acquisition',
      },
    ],
  },
  {
    id: '2026-04-foundayo-cnpv',
    headline: 'Orforglipron approved in 50 days, the fastest new drug review since 2002',
    entryDate: 'April 2026',
    sortKey: '2026-04-10',
    entryType: 'regulation-policy',
    scope: 'industry',
    themes: ['obesity'],
    relatedEntryIds: ['2026-01-fda-cnpv'],
    analysis:
      'Foundayo, Lilly\'s oral small-molecule GLP-1, became the first new molecular entity approved under the Commissioner\'s National Priority Voucher pilot. Fifty days from filing to decision.\n\nFifty days. A standard review is ten to twelve months. Whatever you think about the policy, this is the single most consequential thing the FDA has done for drug economics in years, because nine months of earlier revenue on a drug of this size is worth billions and it changes the net present value of every asset that could qualify.\n\nIt also puts the voucher criteria under a spotlight. If onshoring and supply chain resilience help you qualify, then regulatory speed is now partly an industrial policy instrument, and the companies that manufacture domestically get a compounding advantage that has nothing to do with their science.',
    sources: [
      {
        title: 'Commissioner\'s National Priority Voucher (CNPV) Pilot Program',
        publisher: 'FDA',
        url: 'https://www.fda.gov/industry/commissioners-national-priority-voucher-cnpv-pilot-program',
      },
      {
        title: 'The outlook for obesity from 2026 to 2030',
        publisher: 'IQVIA',
        url: 'https://www.iqvia.com/locations/emea/blogs/2026/04/the-outlook-for-obesity-from-2026-to-2030',
      },
    ],
  },
  {
    id: '2026-04-oral-glp1-supply',
    headline: 'A small molecule GLP-1 changes the supply constraint, not just the dosing',
    entryDate: 'April 2026',
    sortKey: '2026-04-12',
    entryType: 'industry-observation',
    scope: 'industry',
    themes: ['obesity'],
    analysis:
      'Semaglutide and tirzepatide are peptides. They are made biologically, capacity is expensive and slow to add, and shortages have defined this market since 2023. Orforglipron is a conventional small molecule that can be made in standard chemical plants, and it does not carry the food and water restrictions that oral semaglutide does.\n\nThat is a structural advantage independent of efficacy. If two drugs are roughly comparable and one can be manufactured at ten times the volume for a fraction of the cost, the market share question resolves itself.',
    sources: [
      {
        title: 'Weight-Loss Drug Market Growth in 2026',
        publisher: 'IndexBox',
        url: 'https://www.indexbox.io/blog/weight-loss-drug-market-heats-up-novo-nordisk-eli-lilly-and-pfizer-compete-for-100b-sector/',
      },
    ],
  },
  {
    id: '2026-04-bioage-phase1',
    headline: 'BioAge full Phase 1 for BGE-102, and a company that survived losing its lead drug',
    entryDate: 'April 21, 2026',
    sortKey: '2026-04-21',
    entryType: 'clinical',
    scope: 'company',
    relatedCompanyIds: ['bioage-labs'],
    analysis:
      'The full Phase 1 dataset, including a 60mg once-daily cohort dosed for 21 days in people with obesity and elevated inflammation. The company reports substantial hsCRP reductions and consistent movement across other inflammatory markers with good tolerability.\n\nBeing precise: that is a company-reported characterisation of a biomarker, not an independent read on outcomes. The Phase 2 cardiovascular trial later this year is the real test.\n\nWhat I take from it is more about corporate resilience than about NLRP3. Eighteen months ago this company killed its lead asset on liver toxicity and its stock collapsed. It now has a credible Phase 2 program in a different area. That is a better outcome than I would have predicted in December 2024, and it is a reminder that a failed drug and a failed company are not the same thing.',
    sources: [
      {
        title: 'BioAge Reports Positive Phase 1 Data for BGE-102',
        publisher: 'BioAge Labs',
        url: 'https://ir.bioagelabs.com/news-releases/news-release-details/bioage-reports-positive-phase-1-data-bge-102-novel-oral-nlrp3',
        publishedAt: 'April 21, 2026',
      },
    ],
  },
  {
    id: '2026-04-kailera-ipo',
    headline: 'Kailera raises $718.8M in an IPO and the window is open for obesity',
    entryDate: 'April 2026',
    sortKey: '2026-04-24',
    entryType: 'financing',
    scope: 'industry',
    themes: ['ipo-window', 'obesity', 'china-licensing'],
    analysis:
      'One of the largest biotech IPOs in years. Kailera is also a useful data point on China licensing, since its lead assets came out of a Chinese partner and it has moved them quickly.\n\nThe pattern worth noting: license a de-risked asset from China, run it through Western clinical and regulatory machinery, and take it public at a valuation reflecting the Western obesity multiple. That is a genuinely new company-building model and I expect to see it copied a lot.',
    sources: [
      {
        title: 'Biotech IPO Tracker 2026',
        publisher: 'BioBucks',
        url: 'https://www.biobucks.co/biotech-ipo-tracker-2026',
      },
    ],
  },
  {
    id: '2026-04-parabilis-ipo',
    headline: 'Parabilis prices the largest biotech IPO of the year at $670M',
    entryDate: 'April 2026',
    sortKey: '2026-04-28',
    entryType: 'financing',
    scope: 'industry',
    themes: ['ipo-window'],
    analysis:
      'Oncology, late stage. Every large IPO this year has the same profile: clinical data in hand, a defined regulatory path, and enough scale that the offering itself is liquid. Nothing early is getting out.',
    sources: [
      {
        title: 'Pharma and Biotech IPOs of 2026: A Running List',
        publisher: 'Xtalks',
        url: 'https://xtalks.com/pharma-and-biotech-ipos-of-2026-a-running-list-4695/',
      },
    ],
  },
  {
    id: '2026-05-eikon-ipo',
    headline: 'Eikon upsizes its IPO to about $381M',
    entryDate: 'May 2026',
    sortKey: '2026-05-06',
    entryType: 'financing',
    scope: 'industry',
    themes: ['ipo-window', 'ai-drug-discovery'],
    analysis:
      'Priced 21.2 million shares at $18 and upsized. Eikon is interesting as a test case because it sits between the two categories the market treats differently: it has a real technology platform in live-cell imaging and it also has clinical assets. The upsizing suggests investors paid for the second thing.',
    sources: [
      {
        title: 'Pharma and Biotech IPOs of 2026: A Running List',
        publisher: 'Xtalks',
        url: 'https://xtalks.com/pharma-and-biotech-ipos-of-2026-a-running-list-4695/',
      },
    ],
  },
  {
    id: '2026-05-hemab-ipo',
    headline: 'Hemab closes a $346.7M IPO',
    entryDate: 'May 4, 2026',
    sortKey: '2026-05-04',
    entryType: 'financing',
    scope: 'industry',
    themes: ['ipo-window'],
    analysis:
      'Rare bleeding disorders. Small patient populations, high prices, clear endpoints, and payers who cannot say no. In a market that has decided it only wants de-risked assets, rare disease is structurally advantaged because the regulatory path is short and the commercial question is narrow.',
    sources: [
      {
        title: 'Biotech IPO Tracker 2026',
        publisher: 'BioBucks',
        url: 'https://www.biobucks.co/biotech-ipo-tracker-2026',
      },
    ],
  },
  {
    id: '2026-05-turn-bio-auction',
    headline: 'Turn Bio is sold at auction and I lose the thesis entirely',
    entryDate: 'May 21, 2026',
    sortKey: '2026-05-21',
    eventDate: 'Auction held May 6, 2026',
    entryType: 'ma-licensing',
    scope: 'company',
    relatedCompanyIds: ['turn-bio'],
    themes: ['aging'],
    relatedEntryIds: ['2025-11-turn-bio-loi'],
    status: 'retrospective',
    analysis:
      'Turn Biotechnologies\' core assets went to a live auction on May 6th. Daewoong Pharmaceutical won and signed later in the month. The ERA epigenetic reprogramming platform, the lipid nanoparticle delivery system, and the existing HanAll licensing arrangement all transferred.\n\nNothing about the science changed. Turn had a real platform out of Vittorio Sebastiano\'s lab at Stanford, a licensing deal with HanAll worth up to $239 million signed in May 2024, and positive FDA feedback from an INTERACT meeting. By every scientific milestone I was tracking, it was progressing. It ran out of money anyway.\n\nThree things I got wrong, in order of how much they cost me.\n\nI treated scientific milestones as company health. Regulatory feedback and a licensing deal both went in my mental progressing column, and neither puts money in the bank on a schedule that matters. I never once wrote down an estimate of how long this company could fund itself, which in a year when healthcare specialist funds raised roughly $7 billion against a $41 billion peak was the only question that mattered.\n\nI misread the HanAll deal. I saw a $239 million headline and read validation. What it more likely was, in hindsight, is a preclinical company selling rights to its core platform because it needed cash, to a partner thereby perfectly positioned to buy the whole thing cheaply later. Daewoong is HanAll\'s affiliate. The deal I read as a floor was the mechanism of the outcome.\n\nAnd I ignored the October LOI. A five-day round trip on a letter of intent for core assets is a sale process, and I wrote at the time that I had filed it as corporate noise.\n\nWhat changes going forward: I now write a rough runway estimate into any note about a preclinical company, and I no longer read a licensing deal as unambiguously good news without asking who ends up better positioned if things get worse.',
    sources: [
      {
        title: 'Daewoong Pharmaceutical acquires anti-aging platform from Turn Biotechnologies',
        publisher: 'The Korea Herald',
        url: 'https://www.koreaherald.com/article/10742748',
        publishedAt: 'May 2026',
      },
      {
        title: 'Daewoong acquires Turn Bio age-reversal assets',
        publisher: 'Longevity.Technology',
        url: 'https://longevity.technology/news/daewoong-acquires-turn-bio-age-reversal-assets/',
      },
    ],
  },
  {
    id: '2026-05-isomorphic-2b',
    headline: 'Isomorphic raises $2.1B four months after announcing a delay',
    entryDate: 'May 12, 2026',
    sortKey: '2026-05-12',
    entryType: 'financing',
    scope: 'company',
    relatedCompanyIds: ['isomorphic-labs'],
    themes: ['ai-drug-discovery'],
    relatedEntryIds: ['2026-01-isomorphic-delay'],
    analysis:
      'Thrive led, with Alphabet, GV, MGX, Temasek, CapitalG and the UK Sovereign AI Fund. Total outside capital $2.7 billion across two rounds in about fourteen months. No valuation disclosed.\n\nRaising the second largest biotech round on record four months after publicly pushing back your lead program is a strong statement about what investors saw in diligence. I keep going back and forth on how much comfort to take from it. Crossover funds have been wrong about AI-adjacent companies before, and sovereign participation tells you about national interest in domestic AI capability as much as it tells you about a drug.\n\nThe absence of a disclosed valuation bothers me more than it seems to bother anyone else. Nobody outside the cap table knows what $2.7 billion bought a share of.',
    sources: [
      {
        title: 'Alphabet\'s AI biotech Isomorphic Labs bags $2.1B series B',
        publisher: 'Fierce Biotech',
        url: 'https://www.fiercebiotech.com/biotech/alphabets-ai-biotech-isomorphic-labs-bags-21b-series-b-fuel-next-gen-drug-design-model',
        publishedAt: 'May 2026',
      },
    ],
  },
  {
    id: '2026-05-rosarium',
    headline: 'A $6M seed in aging at home, and the payer mix is the whole story',
    entryDate: 'May 2026',
    sortKey: '2026-05-18',
    entryType: 'financing',
    scope: 'industry',
    themes: ['aging'],
    analysis:
      'Rosarium Health raised $6 million and, more importantly, signed partnerships with Medicaid and Medicare Advantage plans. The company works on home modification and accessibility.\n\nThis is the model that I think actually works in aging. The plan pays, because a grab bar is cheaper than a hip fracture. The older adult does not have to operate anything or change behaviour. The adult child is not being asked for a subscription. One stakeholder both pays and benefits, which is rare in this category and is why most aging startups struggle.',
    sources: [
      {
        title: 'Startup Enabling Aging at Home Raises $6M, Gains New MA and Medicaid Partnerships',
        publisher: 'MedCity News',
        url: 'https://medcitynews.com/2026/05/aging-home-funding-rosarium/',
        publishedAt: 'May 2026',
      },
    ],
  },
  {
    id: '2026-05-aging-behavior-test',
    headline: 'The test I now apply to any aging product',
    entryDate: 'May 2026',
    sortKey: '2026-05-20',
    entryType: 'industry-observation',
    scope: 'industry',
    themes: ['aging'],
    relatedEntryIds: ['2025-12-aging-buyer-problem'],
    analysis:
      'Does it still work if the older adult never opens the app?\n\nHome modification passes. Passive fall sensors pass. Medication packaging that arrives pre-sorted passes. Anything requiring daily engagement from someone with mild cognitive impairment fails, no matter how good the demo looks.\n\nThe second test is who captures the savings. If a product prevents a hospitalisation, the money shows up on a Medicare Advantage plan\'s medical loss ratio, not on the family\'s credit card statement. Companies that sell to the plan are in a real business. Companies selling peace of mind to adult children are in a consumer subscription business with terrible retention, because the anxiety that drove the purchase fades and the product gets cancelled.',
    sources: [
      {
        title: 'Living Their Best Life At Home: Senior-Focused Startups And VCs Reevaluate Elder Care',
        publisher: 'Crunchbase News',
        url: 'https://news.crunchbase.com/startups/living-their-best-life-at-home-senior-focused-startups-vcs-reevaluate-elder-care/',
      },
    ],
  },
  {
    id: '2026-05-honor-papa-scale',
    headline: 'Honor and Papa show how much capital the caregiver marketplace consumes',
    entryDate: 'May 2026',
    sortKey: '2026-05-22',
    entryType: 'care-delivery',
    scope: 'industry',
    themes: ['aging'],
    analysis:
      'Honor has raised on the order of $635 million and Papa around $241 million. Both are essentially labour marketplaces with software on top.\n\nThat is a lot of capital for businesses whose fundamental constraint is the supply of people willing to do difficult work for low wages. Software can improve matching and scheduling. It cannot change the fact that the caregiver workforce is underpaid and turnover is brutal. I would want to understand what the gross margin looks like after the caregiver is paid before getting excited about any company in this shape.',
    sources: [
      {
        title: 'Top Elder Care Startups to Watch in 2026',
        publisher: 'Failory',
        url: 'https://www.failory.com/startups/elder-care',
      },
    ],
  },
  {
    id: '2026-06-newlimit',
    headline: 'NewLimit raises $435M at $3.1B, five weeks after Turn Bio was auctioned',
    entryDate: 'June 2, 2026',
    sortKey: '2026-06-02',
    entryType: 'financing',
    scope: 'industry',
    themes: ['aging'],
    relatedEntryIds: ['2026-05-turn-bio-auction'],
    analysis:
      'Founders Fund led, with Thrive, Greenoaks, Quiet Capital and Eli Lilly Ventures. The company reports a prototype that reverses cell age in old human liver cells and plans a Phase 1 next year in fatty liver disease.\n\nSetting this next to the Turn Bio auction five weeks earlier is the most instructive pair of events I have seen this year. Same mechanism, epigenetic reprogramming. Same category. One went to auction, one raised at three billion dollars.\n\nThe difference was not scientific quality. NewLimit tied reprogramming to one organ, one disease, and a trial date. Turn was still a platform looking for its first indication. In a market where roughly two thirds of venture dollars go to companies with something already in humans, being a platform is a description of your risk, not your potential.\n\nI have not started following NewLimit closely. Partly valuation discipline at $3.1 billion pre-clinical, and partly that I would rather sit out a cycle in this category than immediately re-enter to prove I learned something.',
    sources: [
      {
        title: 'NewLimit raises $435M led by Founders Fund',
        publisher: 'NewLimit',
        url: 'https://blog.newlimit.com/p/newlimit-raises-435m-led-by-founders',
        publishedAt: 'June 2, 2026',
      },
    ],
  },
  {
    id: '2026-06-alnylam-inceptive',
    headline: 'Alnylam pays Inceptive for design capability, and the counterparty is the signal',
    entryDate: 'June 3, 2026',
    sortKey: '2026-06-03',
    entryType: 'ma-licensing',
    scope: 'company',
    relatedCompanyIds: ['inceptive'],
    themes: ['ai-drug-discovery'],
    analysis:
      'A three-year collaboration: $30 million upfront in cash plus a purchase of Inceptive equity, with milestones running up to $2 billion. The work is siRNA design, modelling target messenger RNAs and exploring chemical modifications.\n\nSeparate what this proves from what it does not. The $2 billion headline proves nearly nothing, because milestone structures are cheap to sign and most never pay past the first tranche.\n\nWhat it does prove is more specific. Alnylam built the RNAi field and has multiple approved products. Nobody on earth knows more about what makes an siRNA work in a human. When that particular organisation pays cash and takes equity for access to a design model, it is a far stronger signal than a large upfront from a generalist pharma buying optionality on a trend.\n\nBefore this I could not tell Inceptive apart from a dozen companies with similar pitches. Now I can, and it moved my view on outside evidence rather than my own reasoning, which happens less often than I would like.',
    sources: [
      {
        title: 'Alnylam and Inceptive Form Strategic AI Collaboration',
        publisher: 'Alnylam',
        url: 'https://investors.alnylam.com/press-release?id=29941',
        publishedAt: 'June 3, 2026',
      },
      {
        title: 'Alnylam pens $2B deal with Inceptive to transform siRNA design',
        publisher: 'Fierce Biotech',
        url: 'https://www.fiercebiotech.com/biotech/alnylam-pays-inceptive-30m-transform-sirna-design-ai-pioneer',
      },
    ],
  },
  {
    id: '2026-06-abridge-nvidia-lilly',
    headline: 'Abridge takes Lilly equity, and stops being a hospital software company',
    entryDate: 'June 11, 2026',
    sortKey: '2026-06-11',
    entryType: 'platform',
    scope: 'company',
    relatedCompanyIds: ['abridge'],
    themes: ['ambient-ai', 'bionemo'],
    analysis:
      'Two announcements the same day. NVIDIA is co-developing a foundation model for clinical conversation. Eli Lilly took an equity stake connected to using the platform for clinical trial screening.\n\nThe Lilly piece is the one I keep turning over. Trial recruitment is one of the genuinely broken parts of drug development. Most trials miss enrolment targets, and delay costs enormous amounts because every month of slippage is a month off the patent life of the eventual product. If you can flag eligible patients from conversations already happening across 300 health systems, you are selling something pharma has wanted for decades and could not buy.\n\nI had been writing about Abridge as a documentation company with a coding upsell. That framing is too narrow now. It also means the Epic competitive worry I have been carrying matters less than I thought, because this is not a product Epic is positioned to sell. Epic has no pharma relationship business.\n\nThe part I cannot assess is consent. Using clinical conversation data for trial recruitment sits in a legal area nobody has properly litigated, and I would not be surprised to see this become the test case.',
    sources: [
      {
        title: 'Abridge inks deals with Nvidia and Lilly',
        publisher: 'STAT',
        url: 'https://www.statnews.com/2026/06/11/abridge-inks-deals-with-nvidia-and-lilly/',
        publishedAt: 'June 11, 2026',
      },
      {
        title: 'Abridge partners with Eli Lilly, Nvidia as AI scribe eyes expansion',
        publisher: 'Healthcare Dive',
        url: 'https://www.healthcaredive.com/news/abridge-nvidia-eli-lilly-investment-ai-platform-expansion/822783/',
      },
    ],
  },
  {
    id: '2026-06-nvidia-everywhere',
    headline: 'NVIDIA is now on both sides of my portfolio and I only just noticed',
    entryDate: 'June 2026',
    sortKey: '2026-06-13',
    entryType: 'industry-observation',
    scope: 'industry',
    themes: ['bionemo'],
    relatedCompanyIds: ['abridge', 'xaira', 'inceptive', 'synchron'],
    relatedEntryIds: ['2026-01-nvidia-lilly-lab', '2025-12-nvidia-position'],
    analysis:
      'Writing up the Abridge news I realised how many of the companies I follow now have NVIDIA in the story. Abridge is co-developing a clinical foundation model with them. Xaira and Inceptive both have NVentures on the cap table. Synchron uses Holoscan for on-device signal processing and built Chiral on their platform. Lilly has a billion dollar shared lab.\n\nNVIDIA is the compute layer, part of the model layer, a development partner, and an investor, often in the same company. I do not think there is anything sinister about that. It is simply the strongest position anyone holds in healthcare right now, and it was assembled without taking a single day of clinical risk.\n\nThe question I cannot answer is what happens to the model layer of these startups over time. If BioNeMo keeps improving and stays free, the differentiated part of an AI biology company narrows to proprietary data and wet-lab throughput. That is a defensible place to stand. It is a much smaller place than most of these companies pitched three years ago.',
    sources: [
      {
        title: 'NVIDIA BioNeMo Platform Adopted by Life Sciences Leaders',
        publisher: 'NVIDIA Newsroom',
        url: 'https://nvidianews.nvidia.com/news/nvidia-bionemo-platform-adopted-by-life-sciences-leaders-to-accelerate-ai-driven-drug-discovery',
      },
    ],
  },
  {
    id: '2026-06-bionemo-agent-toolkit',
    headline: 'BioNeMo Agent Toolkit, and about fifty partners already on it',
    entryDate: 'June 2026',
    sortKey: '2026-06-16',
    eventDate: 'BIO International Convention',
    entryType: 'platform',
    scope: 'industry',
    themes: ['bionemo'],
    analysis:
      'Tools and skills for agents doing scientific work, with roughly fifty partners adopting at launch.\n\nThe shift from models to agents matters more here than it does in most industries. A model that predicts a structure needs a scientist to decide what to do with it. An agent that can plan an experiment, order the reagents, run it on automated equipment and interpret the result is a different unit of work.\n\nFifty partners at launch also tells you how much of this ecosystem has decided not to build its own tooling. That is rational and it deepens the dependency I keep writing about.',
    sources: [
      {
        title: 'NVIDIA Announces BioNeMo Agent Toolkit',
        publisher: 'NVIDIA Newsroom',
        url: 'https://nvidianews.nvidia.com/news/nvidia-launches-bionemo-agent-toolkit-giving-ai-agents-the-tools-to-accelerate-scientific-discovery',
      },
      {
        title: 'BIO 2026: NVIDIA announces the BioNeMo toolkit for AI agents',
        publisher: 'Pharmaceutical Technology',
        url: 'https://www.pharmaceutical-technology.com/news/bio-2026-nvidia-announces-the-bionemo-toolkit-for-ai-agents/',
      },
    ],
  },
  {
    id: '2026-06-insilico-dosing',
    headline: 'Insilico doses a human with an AI-designed molecule before Isomorphic does',
    entryDate: 'June 17, 2026',
    sortKey: '2026-06-17',
    entryType: 'clinical',
    scope: 'industry',
    themes: ['ai-drug-discovery'],
    relatedCompanyIds: ['isomorphic-labs'],
    relatedEntryIds: ['2026-01-isomorphic-delay'],
    analysis:
      'Insilico Medicine completed first-in-human dosing of ISM8969, an AI-designed brain-penetrant NLRP3 inhibitor, in collaboration with Hygtia Therapeutics.\n\nI want to record a correction. I initially confused this milestone with Isomorphic\'s and had to go back and check. They are different companies and it is an easy mistake to make from headlines, which is precisely why it is worth writing down.\n\nThe substance is more interesting than my error. Insilico raises a fraction of what Isomorphic does and attracts a fraction of the attention, and it got a computationally designed molecule into a person first. If the argument for this field is that AI compresses discovery timelines, the evidence for that argument is currently coming from the less famous company.\n\nIt also complicates a comfortable assumption. Insilico does a great deal of its chemistry and trial work in China. So the first real proof point for AI drug design arrives bundled with the China speed advantage, and separating those two variables is going to be hard.',
    sources: [
      {
        title: 'Insilico Completes First-in-Human Dosing in Phase I Clinical Study of ISM8969',
        publisher: 'BioSpace',
        url: 'https://www.biospace.com/press-releases/insilico-completes-first-in-human-dosing-in-phase-i-clinical-study-of-ai-driven-nlrp3-inhibitor-ism8969-achieving-first-clinical-milestone-in-collaboration-with-hygtia-therapeutics',
        publishedAt: 'June 17, 2026',
      },
    ],
  },
  {
    id: '2026-06-anthropic-claude-science',
    headline: 'Anthropic launches Claude Science and says it will run its own drug programs',
    entryDate: 'June 30, 2026',
    sortKey: '2026-06-30',
    entryType: 'platform',
    scope: 'industry',
    themes: ['anthropic-life-sciences', 'ai-drug-discovery'],
    relatedEntryIds: ['2025-11-anthropic-life-sciences'],
    status: 'current-view',
    analysis:
      'At a San Francisco event, Anthropic launched Claude Science, a workbench for researchers and drug developers, and said it will run its own preclinical discovery programs focused on neglected and rare diseases. It also announced grants of up to $30,000 in compute credits for as many as fifty research teams. Novartis CEO Vas Narasimhan, who sits on Anthropic\'s board, was on the launch panel. AI drug discovery stocks fell on the news.\n\nIn November I called Claude for Life Sciences a packaging exercise and said it did not threaten biology-native model companies. I was wrong about the trajectory, and this is the entry where I say so.\n\nThe launch changes three things. A general model company is now doing its own discovery rather than only selling tools, which makes it a competitor rather than a supplier. The board seat means the relationship with Novartis is structural rather than a vendor arrangement, and Sanofi, Novo Nordisk and AbbVie are already buying Anthropic services. And the compute grants are a distribution strategy aimed at academic labs, which is where the next generation of biotech founders come from.\n\nWhat I think this actually means for startups is more specific than the stock reaction suggests. If general models keep getting better at reasoning over biological literature and data, then the model itself stops being the differentiator. What survives is proprietary experimental data, wet-lab throughput, and validated workflows. Companies whose pitch is that they have a better architecture become less defensible. Companies that own a data-generating machine, like Xaira with its perturbation datasets or Inceptive with its RNA measurement loop, become more valuable, because someone else is now commoditising the layer above them.\n\nThe piece I remain unsure about is whether Anthropic actually wants to be in drug development or whether the preclinical programs are a credibility exercise ahead of enterprise sales. Neglected and rare disease is a defensible choice for a company that wants to demonstrate capability without competing with its own customers, which makes me think it is more the latter.',
    sources: [
      {
        title: 'Anthropic launches AI drug discovery program, Claude Science',
        publisher: 'CNBC',
        url: 'https://www.cnbc.com/2026/06/30/anthropic-launches-ai-drug-discovery-program-claude-science.html',
        publishedAt: 'June 30, 2026',
      },
      {
        title: 'Anthropic debuts AI-driven pharma R&D tool, Claude Science',
        publisher: 'Pharmaceutical Technology',
        url: 'https://www.pharmaceutical-technology.com/news/anthropic-launches-claude-science-ai-tool-drug-discovery/',
      },
      {
        title: 'Novartis CEO joins Anthropic board, embedding AI in the heart of biopharma',
        publisher: 'BioSpace',
        url: 'https://www.biospace.com/business/novartis-ceo-joins-anthropic-board-embedding-ai-in-the-heart-of-biopharma',
      },
    ],
  },
  {
    id: '2026-06-anthropic-novartis-what-novartis-gets',
    headline: 'What does Novartis actually get out of Anthropic?',
    entryDate: 'June 2026',
    sortKey: '2026-06-30',
    entryType: 'industry-observation',
    scope: 'industry',
    themes: ['anthropic-life-sciences'],
    analysis:
      'The relationship matters less as proof that Claude understands biology and more as proof that a major pharmaceutical company will put a general model inside real scientific workflows, with its CEO on the board.\n\nWhat Novartis gets is not model access, which anyone can buy. It gets influence over roadmap, early access, and a seat at the table on how these systems get built for regulated science. That is worth more than a discount.\n\nThe question it raises for everyone else is what stays proprietary. If the model is broadly available, defensibility moves to internal data, validation infrastructure, integrations and workflow design. Those are unglamorous and they are also where large pharma already has an enormous advantage over startups.',
    sources: [
      {
        title: 'Novartis CEO joins Anthropic board, embedding AI in the heart of biopharma',
        publisher: 'BioSpace',
        url: 'https://www.biospace.com/business/novartis-ceo-joins-anthropic-board-embedding-ai-in-the-heart-of-biopharma',
      },
    ],
  },
  {
    id: '2026-06-beeline-upsize',
    headline: 'Beeline upsizes to $426M and I start following immunology properly',
    entryDate: 'June 30, 2026',
    sortKey: '2026-06-30',
    entryType: 'financing',
    scope: 'company',
    relatedCompanyIds: ['beeline-medicines'],
    analysis:
      'The Series A grew from $300 million to $426.3 million with a $126.3 million extension, backed by Bain Capital, BMS and CPPIB. The company was built in 2025 around five BMS programs, and the lead asset afimetoran is an oral TLR7/8 inhibitor for lupus with a Phase 2 readout expected in the second half of this year.\n\nI am adding this because I noticed I was writing constantly about a market where autoimmune and oncology take more than 40 percent of biotech venture dollars while following nothing in immunology. That is a coverage gap rather than a considered position, and I would rather fix it with a small, honest starting point than keep writing around it.\n\nThe question I do not have an answer to is why BMS let these programs go. Large pharma deprioritises assets for portfolio reasons constantly, and it also deprioritises them because the data is mediocre. Bain and CPPIB presumably asked. I have not.',
    sources: [
      {
        title: 'Beeline Medicines Announces Upsized Series A of $426.3 Million',
        publisher: 'BioSpace',
        url: 'https://www.biospace.com/press-releases/beeline-medicines-announces-upsized-series-a-of-426-3-million-to-advance-category-leading-autoimmune-and-inflammatory-disease-portfolio',
        publishedAt: 'June 30, 2026',
      },
    ],
  },
  {
    id: '2026-06-h1-biotech-vc',
    headline: 'Best first half for biotech venture since 2022, and two thirds went to clinical-stage',
    entryDate: 'June 2026',
    sortKey: '2026-06-25',
    entryType: 'industry-observation',
    scope: 'industry',
    themes: ['capital-concentration'],
    analysis:
      'Roughly 68 biotech companies raised about $9.1 billion in the first half, the strongest since the start of 2022. Autoimmune and oncology together took more than 40 percent of it, around $3.9 billion.\n\nThe number that actually describes the market is that about two thirds of rounds went to companies with an asset already in human testing.\n\nSo this is not a broad recovery. It is capital moving decisively toward things that can be observed working, and away from platforms whose pitch is that they will eventually generate assets. Turn Bio is what the second half of that sentence looks like in practice.',
    sources: [
      {
        title: 'Biotech startup funding gap widens despite rebound in VC investment',
        publisher: 'BioPharma Dive',
        url: 'https://www.biopharmadive.com/news/biotech-venture-capital-funding-2026-first-half/824881/',
      },
      {
        title: 'Cancer, immune drugmakers dominate VC funding so far in 2026',
        publisher: 'BioPharma Dive',
        url: 'https://www.biopharmadive.com/news/cancer-immune-venture-funding-2026/824250/',
      },
    ],
  },
  {
    id: '2026-06-ma-123b',
    headline: 'Pharma dealmaking passes $123B by late June',
    entryDate: 'June 22, 2026',
    sortKey: '2026-06-22',
    entryType: 'ma-licensing',
    scope: 'industry',
    themes: ['patent-cliff'],
    analysis:
      'Already ahead of all of 2025, with 33 acquisitions at a billion dollars or more, on a pace that would put the year near $250 billion and make it the strongest since 2019.\n\nI do not think this is optimism. It is a deadline. Companies facing exclusivity losses in 2027 and 2028 have to close deals now for the assets to contribute anything before the revenue disappears. Buying in 2029 would be too late to matter.',
    sources: [
      {
        title: '2026 pharma and biotech deal-making already tops 2025',
        publisher: 'STAT',
        url: 'https://www.statnews.com/2026/06/22/pharma-biotech-ma-boom-2026-deals-total-123-billion/',
        publishedAt: 'June 22, 2026',
      },
    ],
  },
  {
    id: '2026-06-ipo-window-open',
    headline: 'At BIO, investors say the window is open. It is open selectively',
    entryDate: 'June 2026',
    sortKey: '2026-06-18',
    entryType: 'financing',
    scope: 'industry',
    themes: ['ipo-window'],
    analysis:
      'A baker\'s dozen of venture-backed biotechs have priced this year and the mood at BIO was that things have reopened.\n\nWorth being precise about what reopened. Capital has concentrated around de-risked, late-stage, clinically validated companies. Early-stage developers still cannot get out. Saying the window is open when it is only open to companies that could also raise privately is a distinction that matters enormously if you are the one deciding whether to keep funding a preclinical program.',
    sources: [
      {
        title: '\'The window\'s open\': At BIO, investors take stock of a growing class of biotech IPOs',
        publisher: 'BioPharma Dive',
        url: 'https://www.biopharmadive.com/news/bio-2026-ipo-biotech-performance-predictions/823474/',
      },
    ],
  },
  {
    id: '2026-06-q2-layoffs-ease',
    headline: 'Layoffs roughly halve quarter over quarter',
    entryDate: 'June 2026',
    sortKey: '2026-06-28',
    entryType: 'people',
    scope: 'industry',
    analysis:
      'Seventeen biopharma companies announced reductions between April and June, against 33 in the first quarter. Easing, not over. The companies still cutting are mostly the ones that had a trial fail, which is the normal state of the industry rather than a macro signal.',
    sources: [
      {
        title: 'Biotechs in better position to avoid workforce reductions as layoffs continue to ease in Q2 2026',
        publisher: 'Fierce Biotech',
        url: 'https://www.fiercebiotech.com/biotech/biotechs-better-position-avoid-workforce-reductions-layoffs-continue-drop-q226',
      },
    ],
  },
  {
    id: '2026-06-io-biotech-shutdown',
    headline: 'IO Biotech shuts down after an FDA rejection',
    entryDate: 'June 2026',
    sortKey: '2026-06-26',
    entryType: 'people',
    scope: 'industry',
    analysis:
      'The company is winding down entirely, terminating all employees and executives, after its cancer vaccine was rejected and deep cuts failed to save it.\n\nA clean illustration of how binary this is. There is no partial credit for a rejected biologic. The company either had a product or it had nothing, and the transition between those two states took one letter.',
    sources: [
      {
        title: 'Fierce Biotech Layoff Tracker 2026',
        publisher: 'Fierce Biotech',
        url: 'https://www.fiercebiotech.com/biotech/fierce-biotech-layoff-tracker-2026',
      },
    ],
  },
  {
    id: '2026-06-crl-transparency',
    headline: 'FDA publishing complete response letters is quietly useful',
    entryDate: 'June 2026',
    sortKey: '2026-06-20',
    entryType: 'regulation-policy',
    scope: 'industry',
    analysis:
      'Historically when the FDA rejected an application, the only public account was the company\'s own summary, which was always the most favourable reading available. Publishing the letters means outsiders can see what the agency actually objected to.\n\nFor anyone trying to evaluate a company from outside, this is one of the more valuable transparency changes in years. It also means the gap between what management says went wrong and what actually went wrong is now checkable.',
    sources: [
      {
        title: 'JPM 2026: FDA panelists prioritize faster approvals, national security, AI, and more',
        publisher: 'Hogan Lovells',
        url: 'https://www.hoganlovells.com/en/publications/jpm-2026-fda-panelists-prioritize-faster-approvals-national-security-ai-and-more',
      },
    ],
  },
  {
    id: '2026-06-glp1-third-entrant',
    headline: 'Pfizer, Lilly and Novo all chasing the next weight loss drug',
    entryDate: 'June 13, 2026',
    sortKey: '2026-06-13',
    entryType: 'industry-observation',
    scope: 'industry',
    themes: ['obesity'],
    analysis:
      'Pfizer with Metsera in hand is now a credible third entrant, which is exactly why it was willing to pay $10 billion last November.\n\nWhat interests me is where the competition is moving. The first generation competed on weight loss percentage. The next one is competing on muscle preservation, tolerability, dosing convenience and manufacturing scale. That is what a market looks like when the core efficacy question is settled and the differentiation moves to everything around it.',
    sources: [
      {
        title: 'GLP-1s: Lilly, Novo, Pfizer look to new weight loss drugs',
        publisher: 'CNBC',
        url: 'https://www.cnbc.com/2026/06/13/glp-1s-lilly-novo-pfizer-look-to-new-weight-loss-drugs.html',
        publishedAt: 'June 13, 2026',
      },
    ],
  },
  {
    id: '2026-06-kyverna-cabaletta',
    headline: 'The first CAR-T for autoimmune disease is close to a filing',
    entryDate: 'June 2026',
    sortKey: '2026-06-10',
    entryType: 'clinical',
    scope: 'industry',
    analysis:
      'Kyverna is preparing what would be the first regulatory filing for a cell therapy in autoimmune disease, and Cabaletta is heading toward a myositis submission in the second half of the year.\n\nThe underlying insight is elegant. CAR-T was built to kill cancerous B cells. The B cells driving lupus and myositis are not cancerous, but they are still B cells, and the same therapy depletes them. What was an oncology tool became an immunology platform because someone asked whether the target had to be malignant.\n\nThe open question is whether a treatment that requires chemotherapy conditioning and hospitalisation is acceptable in diseases people live with for decades. Oncology patients accept enormous toxicity. A 35-year-old with lupus may not, especially with biologics available.',
    sources: [
      {
        title: 'Kyverna gains clear view to first CAR-T approval for autoimmune disease',
        publisher: 'Fierce Biotech',
        url: 'https://www.fiercebiotech.com/biotech/kyverna-gains-clear-view-first-car-t-approval-autoimmune-disease-after-truly-remarkable-sps',
      },
    ],
  },
  {
    id: '2026-06-abbvie-capstan-context',
    headline: 'Why AbbVie paid $2.1B for Capstan a year ago now looks cheap',
    entryDate: 'June 2026',
    sortKey: '2026-06-11',
    entryType: 'ma-licensing',
    scope: 'industry',
    relatedEntryIds: ['2026-04-lilly-kelonia'],
    analysis:
      'AbbVie bought Capstan in June 2025 for up to $2.1 billion for an in vivo CAR-T platform. Ten months later Lilly paid $3.25 billion upfront and up to $7 billion for Kelonia at a similar stage.\n\nSame modality, roughly triple the price, less than a year apart. Either AbbVie got a bargain or the category got ahead of itself. Given that neither company has clinical proof that in vivo CAR-T works durably in humans, I lean toward the second, and I think the Lilly price is best understood as scarcity pricing rather than as a valuation.',
    sources: [
      {
        title: 'AbbVie reels in Capstan in $2.1B buyout, charting course for in vivo CAR-T market',
        publisher: 'Fierce Biotech',
        url: 'https://www.fiercebiotech.com/biotech/abbvie-reels-capstan-21b-buyout-charting-course-vivo-car-t-market',
      },
    ],
  },
  {
    id: '2026-06-epic-toolbox-revision',
    headline: 'Revisiting my Epic worry, which was too pessimistic',
    entryDate: 'June 2026',
    sortKey: '2026-06-14',
    entryType: 'industry-observation',
    scope: 'industry',
    themes: ['ambient-ai'],
    relatedCompanyIds: ['abridge', 'ambience-healthcare'],
    status: 'retrospective',
    analysis:
      'For most of the past year I treated Epic as the central threat to ambient documentation companies. Epic controls something like 42 percent of US hospital EHR installs and ships its own note-drafting tool, and the usual outcome when a platform enters an adjacent category is that the independents suffocate.\n\nThat has not happened, and the specific thing that changed my mind was Ambience joining Epic\'s Toolbox program in August 2025 and integrating with Haiku. Epic is distributing a competitor to its own product.\n\nMy read now is that Epic sees documentation as a place where hospital needs vary too much to service directly, and would rather take a platform position than win every deal. That is a considerably better world for Abridge and Ambience than the one I had been assuming, and I should have updated in August rather than in June.',
    sources: [
      {
        title: 'Epic adds Ambience Healthcare\'s AI to its Toolbox program',
        publisher: 'Fierce Healthcare',
        url: 'https://www.fiercehealthcare.com/ai-and-machine-learning/epic-adds-ambience-healthcares-ai-its-toolbox-program',
      },
      {
        title: 'How Epic\'s latest EHR features could shift the AI scribe market',
        publisher: 'Fierce Healthcare',
        url: 'https://www.fiercehealthcare.com/ai-and-machine-learning/how-epics-ai-moves-could-shake-health-tech-market',
      },
    ],
  },
];
