import type { CoverageEntry } from './types';

// Notes written in October. Underlying event dates are kept separate.
export const ENTRIES_2026_Q4: CoverageEntry[] = [
  {
    id: '2026-10-openevidence-nyu-langone',
    headline: 'OpenEvidence goes deeper into Epic at NYU Langone',
    entryDate: 'October 29, 2026',
    sortKey: '2026-10-29',
    eventDate: 'October 29, 2026 announcement',
    analysis:
      'NYU Langone and OpenEvidence announced that OpenEvidence will sit inside the health system\'s Epic workflow and use patient record context when answering clinicians\' questions with medical literature. NYU Langone says the deployment extends across its hospitals, ambulatory network and Family Health Centers. The system reports 12.4 million outpatient visits and more than 421,000 emergency visits a year, with over 6,000 physicians and faculty. Those numbers describe the health system, not measured use of OpenEvidence.\n\nThis sounds deeper than the Northwestern access I noted earlier this month. Opening a tool with hospital credentials removes a login step; bringing the patient record into the answer moves OpenEvidence into the clinical workflow. The announcement still gives no contract terms, rollout usage, independent accuracy results or patient outcomes. I want to know which chart fields the product can use, how clinicians audit the context behind an answer and whether the deployment creates enterprise revenue beyond advertising.',
    entryType: 'platform',
    scope: 'company',
    themes: ['ambient-ai'],
    relatedCompanyIds: ['openevidence'],
    relatedEntryIds: ['2026-10-openevidence-northwestern-epic'],
    sources: [
      {
        title: 'OpenEvidence and NYU Langone Health partner on patient-aware clinical intelligence',
        publisher: 'NYU Langone Health',
        url: 'https://nyulangone.org/news/openevidence-and-nyu-langone-health-partner-bring-patient-aware-intelligence-12-million-visits-new-york-city',
        publishedAt: 'October 29, 2026',
      },
    ],
    status: 'current-view',
  },
  {
    id: '2026-10-fda-individualized-ge-bla-draft',
    headline: 'FDA sketches a license for one editing platform and many patient-specific variants',
    entryDate: 'October 28, 2026',
    sortKey: '2026-10-28',
    eventDate: 'October 27, 2026 announcement; October 28, 2026 Federal Register publication',
    analysis:
      'FDA issued draft guidance describing how an individualized genome-editing product with multiple patient-specific variants could sit under one biologics license. The applicant would define an Individualized Feature Space, or IFS, that sets the allowed variation in components such as a guide RNA sequence. Once the original BLA is approved, FDA says a new variant inside that space could generally be added as a manufacturing change through a supplement, using in vitro activity and safety data rather than another clinical trial.\n\nThe boundary matters. The draft is limited to monogenic diseases, variants in the same gene and the same editing outcome. The delivery vehicle, formulation, strength and other parts of the product stay fixed. The original license still needs supporting clinical data, and each new guide and editor combination needs its own in vitro off-target assessment. This is draft, nonbinding guidance under comment until November 27, not an approval or a blanket path for every one-patient therapy.\n\nIn my first KJ Muldoon note, I did not know how a regulator could approve an n-of-one therapy as a category. FDA has now described part of an answer. The category would be the platform and its defined limits, with a patient-specific guide added inside them. It does not solve who pays or how one-off doses get manufactured quickly, but it moves the regulatory question from an open-ended hope to a proposed process I can follow.',
    entryType: 'regulation-policy',
    scope: 'industry',
    themes: ['gene-editing'],
    relatedEntryIds: [
      '2025-11-kj-muldoon',
      '2026-03-kj-one-year',
      '2026-10-beam-301-initial-data',
    ],
    sources: [
      {
        title: 'Individualized Human Genome Editing Products: Considerations for BLA Submission and Postapproval Management',
        publisher: 'FDA',
        url: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/individualized-human-genome-editing-products-considerations-bla-submission-and-postapproval',
        publishedAt: 'October 2026 draft guidance',
      },
      {
        title: 'Individualized Human Genome Editing Products: Draft Guidance for Industry; Availability',
        publisher: 'Federal Register',
        url: 'https://www.federalregister.gov/documents/2026/10/28/2026-21954/individualized-human-genome-editing-products-considerations-for-bla-submission-and-postapproval',
        publishedAt: 'October 28, 2026',
      },
    ],
    status: 'current-view',
  },
  {
    id: '2026-10-beam-301-initial-data',
    headline: 'Beam gets an early human signal from base editing beyond one patient',
    entryDate: 'October 27, 2026',
    sortKey: '2026-10-27',
    eventDate: 'October 27, 2026 report; August 17, 2026 data cutoff',
    analysis:
      'Beam reported the first data from its open-label Phase 1/2 trial of BEAM-301, a liver-targeted base editor for people with the R83C variant of glycogen storage disease type Ia. Six patients received one infusion: three at 20 mg and three at 40 mg. At Day 36, median time to fasting hypoglycemia rose from 2.5 hours to the protocol maximum of 15 hours in the 40 mg group. Two of those three patients no longer needed daily starch supplementation at their latest assessments. The third did not improve at the first post-dose test.\n\nThe safety result needs equal weight. All six patients had a treatment-related adverse event, and four had a related serious adverse event. Three had Grade 3 infusion reactions. Diarrhea and rhabdomyolysis occurred in two patients and resolved, as did the reported liver-enzyme elevations. Beam reported no dose-limiting toxicity, Grade 4 or 5 event, or treatment discontinuation. Enrollment at 60 mg is underway.\n\nI have been following the one-patient KJ treatment because a reusable editing process could make rare-disease development look very different. BEAM-301 is not the same model: it targets one recurrent mutation with a sponsor-run product rather than a guide designed for one child. Still, this is the first small sign in my notes that base editing can move from a bespoke case into a repeatable clinical program. Six company-reported patients in dose exploration, with short follow-up and meaningful safety events, cannot establish durable correction or an approval path.',
    entryType: 'clinical',
    scope: 'industry',
    themes: ['gene-editing'],
    relatedEntryIds: ['2025-11-kj-muldoon', '2026-03-kj-one-year'],
    sources: [
      {
        title: 'Beam reports initial Phase 1/2 data from the BEAM-301 trial',
        publisher: 'Beam Therapeutics',
        url: 'https://beamtherapeutics.gcs-web.com/news-releases/news-release-details/beam-therapeutics-reports-initial-clinical-data-phase-12-trial',
        publishedAt: 'October 27, 2026',
      },
      {
        title: 'A Study of BEAM-301 in Patients With Glycogen Storage Disease Type Ia (GSDIa)',
        publisher: 'ClinicalTrials.gov',
        url: 'https://clinicaltrials.gov/study/NCT06735755',
      },
    ],
    status: 'current-view',
  },
  {
    id: '2026-10-abridge-october-release',
    headline: 'Abridge moves from drafting the note into orders and diagnoses',
    entryDate: 'October 27, 2026',
    sortKey: '2026-10-27',
    eventDate: 'October 27, 2026 product release',
    analysis:
      'Abridge released a set of workflow and revenue-cycle additions. It now stages orders discussed during outpatient visits in Epic for clinician review and signature. Its Query Engine extends to outpatient notes, and accepted inpatient diagnosis suggestions write back to the chart. Inpatient drafts can also draw on new labs, vital signs and radiology results, with the chart sources shown inline.\n\nThe company also added an Evaluation Dashboard for health-system governance teams. It shows results by product and quality measure, with the method, refresh schedule and stated limitations, and separates recurring metrics from fixed peer-reviewed studies. Abridge describes the capabilities; this release does not provide customer-level adoption, independent accuracy results or patient outcomes.\n\nI care because this is the direction behind my Abridge thesis. Note drafting is getting crowded. Orders, documentation queries and diagnosis write-back sit closer to the workflow and the claim. The release makes that expansion tangible, but I still need evidence that hospitals use the modules repeatedly and pay more for them.',
    entryType: 'platform',
    scope: 'company',
    themes: ['ambient-ai'],
    relatedCompanyIds: ['abridge'],
    sources: [
      {
        title: 'Now in Practice: October 2026',
        publisher: 'Abridge',
        url: 'https://www.abridge.com/blog/now-in-practice-october-2026',
        publishedAt: 'October 27, 2026',
      },
    ],
    status: 'current-view',
  },
  {
    "id": "2026-10-treasury-biotech-outbound-rule",
    "headline": "China-biotech political risk now has a proposed investment rule",
    "entryDate": "October 26, 2026",
    "sortKey": "2026-10-26",
    "eventDate": "October 26, 2026 Federal Register publication; October 22, 2026 proposal",
    "analysis": "Treasury proposed adding biotechnology to the US outbound-investment restrictions for countries of concern. The rule would prohibit or require notice for some equity investments, debt with equity-like rights, joint ventures, greenfield projects and fund interests involving covered foreign companies. It is a proposal, not a final rule, and comments are due December 7.\n\nThe draft is broad. It reaches the bioengineering and manufacture of pharmaceuticals and delivery systems, brain-computer interfaces, sequencing, mass spectrometry, lab automation and cloud-lab infrastructure. Treasury is asking whether the pharmaceutical and equipment definitions should be narrowed to advanced technologies. That question matters because the current wording extends well beyond a short list of military applications.\n\nThe proposal does not list an ordinary asset licence as a covered transaction, and The Wall Street Journal reports that licensing would remain allowed. I would not read that as a blanket safe harbour. A licence paired with equity, a joint venture or another covered investment could still fall within the rule, and the text withholds one transaction exception from contracts that transfer technology or technical knowledge. My April view that tariffs alone would not stop China licensing still holds. The political-risk caveat from July is now concrete enough that I would check structure, information rights and technology transfer in every deal rather than treating the headline licence as the whole transaction.",
    "entryType": "regulation-policy",
    "scope": "industry",
    "themes": [
      "china-licensing"
    ],
    "relatedEntryIds": [
      "2026-04-tariff-china-licensing",
      "2026-07-china-geopolitical-risk"
    ],
    "sources": [
      {
        "title": "Treasury Issues Proposed Rule to Implement Comprehensive Outbound Investment National Security Act",
        "publisher": "US Department of the Treasury",
        "url": "https://home.treasury.gov/news/press-releases/sb0667",
        "publishedAt": "October 22, 2026"
      },
      {
        "title": "Outbound Investment Security Program Regulations",
        "publisher": "Federal Register",
        "url": "https://www.federalregister.gov/documents/2026/10/26/2026-21786/outbound-investment-security-program-regulations",
        "publishedAt": "October 26, 2026"
      },
      {
        "title": "Treasury to Limit Chinese Biotech Deals but Still Allow Licensing",
        "publisher": "The Wall Street Journal",
        "url": "https://www.wsj.com/pro/venture-capital/treasury-to-limit-chinese-biotech-deals-but-still-allow-licensing-36a38e48",
        "publishedAt": "October 26, 2026"
      }
    ],
    "status": "current-view"
  },
  {
    "id": "2026-10-intismeran-phase-3",
    "headline": "The personalised melanoma vaccine has its Phase 3 result",
    "entryDate": "October 25, 2026",
    "sortKey": "2026-10-25",
    "eventDate": "October 24, 2026 presentation; October 22, 2026 results announcement",
    "analysis": "Merck and Moderna's INTerpath-001 trial enrolled 1,137 people whose stage IIB-IV melanoma had been completely removed. Intismeran, a vaccine designed from each person's tumor mutations, plus Keytruda reduced the risk of recurrence or death by 42% versus placebo plus Keytruda after 24.6 months of median follow-up. At two years, 82.2% of the combination group and 70.0% of the control group were alive without recurrence. The risk of distant metastasis or death fell by 38%.\n\nThis is the first positive Phase 3 result for an individualized mRNA neoantigen therapy, and it strengthens the five-year Phase 2b signal I was already following. It is still an adjuvant melanoma result, not evidence that the vaccine treats visible metastatic disease or works across tumors. Overall-survival data are immature. Treatment-related grade 3-5 adverse events were similar at 14.2% versus 13.4%, while fever and injection-site pain were common with the vaccine.\n\nThe timing is useful. Outcomes were comparable during the first six months, when the nine-dose vaccine regimen was being delivered, then separated afterward in a pre-specified analysis. I read that as support for a biological effect, not a manufacturing answer. Every treatment still has to be designed from one patient's tumor and produced on time. The clinical question has moved forward; the industrial one has not.",
    "entryType": "clinical",
    "scope": "industry",
    "themes": [
      "cancer-vaccines"
    ],
    "relatedEntryIds": [
      "2026-01-mrna-vaccine-5yr"
    ],
    "sources": [
      {
        "title": "Merck and Moderna Will Present Results From Landmark Phase 3 INTerpath-001 Trial",
        "publisher": "Merck",
        "url": "https://www.merck.com/news/merck-and-moderna-will-present-results-from-landmark-phase-3-interpath-001-trial-for-intismeran-autogene-plus-keytruda-pembrolizumab-at-esmo-2026-presidential-symposium/",
        "publishedAt": "October 22, 2026"
      },
      {
        "title": "First positive phase III data for personalised mRNA neoantigen therapy",
        "publisher": "ESMO",
        "url": "https://www.esmo.org/insights-by-esmo/all-news/first-positive-phase-iii-trial-data-for-an-individualised-mrna-based-neoantigen-therapy",
        "publishedAt": "October 24, 2026"
      }
    ],
    "status": "current-view"
  },
  {
    "id": "2026-10-coherence-neuro-seed",
    "headline": "Coherence Neuro's first human step lasted thirty minutes",
    "entryDate": "October 24, 2026",
    "sortKey": "2026-10-24",
    "eventDate": "October 21, 2026 financing report; June 23, 2026 first-in-human study announcement",
    "analysis": "Wired reports that Coherence Neuro raised a $45 million seed round involving the OpenAI Startup Fund and Founders Fund. The company is building an implant intended to record electrical activity around brain tumors and eventually use stimulation as treatment. Coherence says animal signals can distinguish whether cancer is growing, shrinking or recurring. I have not found an independent human result showing that the device can detect tumor change or improve an outcome.\n\nThe human work so far is narrower. Three people undergoing tumor-removal surgery had the investigational device placed for roughly thirty minutes and then removed. The company describes the study as a test of safety, basic performance and handling during short intraoperative use. It plans to add recording and stimulation in seven more patients, then study a long-term implant in glioblastoma. This is an interesting therapeutic use of a brain interface, but it is not chronic-implant evidence. The financing gives Coherence time to test the idea; it does not establish tumor control, survival benefit or durable signal quality.",
    "entryType": "financing",
    "scope": "industry",
    "themes": [
      "bci"
    ],
    "relatedCompanyIds": [
      "synchron",
      "precision-neuroscience"
    ],
    "sources": [
      {
        "title": "OpenAI invests in startup that uses brain implants to detect cancer",
        "publisher": "Wired",
        "url": "https://www.wired.com/story/openai-startup-brain-implants-detect-cancer/",
        "publishedAt": "October 21, 2026"
      },
      {
        "title": "Coherence Neuro has started its first clinical study",
        "publisher": "Coherence Neuro",
        "url": "https://www.coherenceneuro.com/article/coherence-neuro-has-started-its-first-clinical-study",
        "publishedAt": "June 23, 2026"
      }
    ],
    "status": "current-view"
  },
  {
    "id": "2026-10-xaira-x-automate",
    "headline": "Xaira connects its agent to the lab and keeps the HPLC running",
    "entryDate": "October 23, 2026",
    "sortKey": "2026-10-23",
    "eventDate": "October 23, 2026",
    "analysis": "Xaira introduced X-Automate, a lab-automation system linking X-Scientist to an in-house vision-guided robot and existing lab instruments. In a company-run seven-day HPLC deployment, the system moved and analyzed 18 96-well plates. Xaira reports 97.2% instrument utilization versus 53.6% in a modeled weekday 9-to-5 loading schedule, or 80% more plates.\n\nThat baseline is modeled rather than measured against a human-operated week. The run also needed human intervention: four interruptions in upstream plate storage required manual recovery, although Xaira says it observed no X-Bot or X-Scientist errors during the week. I care because faster experimental feedback could strengthen the proprietary data loop behind Xaira's models. It still tells me nothing about whether the resulting targets or antibodies become useful medicines.",
    "entryType": "platform",
    "scope": "company",
    "themes": [
      "ai-drug-discovery"
    ],
    "relatedCompanyIds": [
      "xaira"
    ],
    "sources": [
      {
        "title": "X-Automate brings physical and agentic AI to the lab",
        "publisher": "Xaira Therapeutics",
        "url": "https://www.xaira.com/news/x-automate-brings-physical-and-agentic-ai-to-labs",
        "publishedAt": "October 23, 2026"
      }
    ],
    "status": "current-view"
  },
  {
    "id": "2026-10-gilead-pepstar",
    "headline": "Gilead puts $1.275B upfront on an early oral immunology program",
    "entryDate": "October 22, 2026",
    "sortKey": "2026-10-22",
    "eventDate": "October 22, 2026 agreement announcement",
    "analysis": "Gilead signed a definitive agreement to acquire PepStar's oral IL-23R inhibitor program, including HCXT-2001, for $1.275 billion of upfront cash payable at closing, subject to customary adjustments. The transaction has not closed; Gilead expects it to close in the fourth quarter of 2026. HCXT-2001 is an oral macrocyclic peptide in Phase 1. Gilead says it has an extended half-life and could be used alone or with other programs, but its safety and efficacy have not been established. Reuters notes that no clinical data have been published.\n\nThe price stands out for a program this early. It tells me nothing about whether the drug works. For Beeline, it suggests that buyer appetite for owned oral immunology assets can appear before late-stage proof. It is not a direct lupus comparison: the mechanism and disease differ, and afimetoran has a company-reported Phase 2 topline. I care more about the full human data and the rights Beeline retained than about treating this transaction as category validation.",
    "entryType": "ma-licensing",
    "scope": "industry",
    "relatedCompanyIds": [
      "beeline-medicines"
    ],
    "sources": [
      {
        "title": "Gilead to acquire investigational oral IL-23R inhibitor HCXT-2001",
        "publisher": "Gilead Sciences",
        "url": "https://investors.gilead.com/news/news-details/2026/Gilead-to-Acquire-Investigational-Oral-IL-23R-Inhibitor-HCXT-2001-Strengthening-Its-Inflammation-Pipeline-in-IBD/default.aspx",
        "publishedAt": "October 22, 2026"
      },
      {
        "title": "Gilead to buy PepStar's inflammation drug program in $1.28 billion deal",
        "publisher": "Reuters",
        "url": "https://www.reuters.com/legal/litigation/gilead-buy-pepstars-inflammation-drug-program-128-billion-deal-2026-10-22/",
        "publishedAt": "October 22, 2026"
      }
    ],
    "status": "current-view"
  },
  {
    "id": "2026-10-openevidence-ft-ad-revenue",
    "headline": "OpenEvidence's revenue estimate is getting large enough to test the ad model",
    "entryDate": "October 21, 2026",
    "sortKey": "2026-10-21",
    "eventDate": "October 21, 2026 report",
    "analysis": "The Financial Times reports that OpenEvidence says US physicians sent more than 42 million prompts to the platform last month. A person close to the company projects $400 million to $500 million of advertising revenue in 2026. Neither figure is audited: the query count is company-reported, and the revenue range is a source's projection rather than recognised revenue.\n\nAt the $15 billion September valuation, that range would imply roughly 30 to 38 times projected 2026 advertising revenue. The growth makes the scale harder to dismiss, but it also makes the conflict question more important. I still need advertiser concentration, renewal behaviour and evidence that the answers remain independent of who pays for the surrounding ad inventory.",
    "entryType": "industry-observation",
    "scope": "company",
    "relatedCompanyIds": [
      "openevidence"
    ],
    "sources": [
      {
        "title": "The $15bn 'viral' AI start-up changing how American doctors treat patients",
        "publisher": "Financial Times",
        "url": "https://www.ft.com/content/0ed17b79-47dd-4ad8-8dca-44eb35617edc",
        "publishedAt": "October 21, 2026"
      }
    ],
    "status": "current-view"
  },
  {
    "id": "2026-10-isomorphic-still-preclinical",
    "headline": "Isomorphic stays preclinical as its year-end trial deadline approaches",
    "entryDate": "October 21, 2026",
    "sortKey": "2026-10-21",
    "eventDate": "October 21, 2026 report",
    "analysis": "STAT reports that Isomorphic executives confirmed the company remains in preclinical development and declined to say whether it still expects to begin human testing by the end of 2026. Chief Medical Officer Ben Wolf suggested that one or two candidates are in late preclinical development, without naming them or giving a trial date.\n\nThis is not an announced delay, and it does not tell me what regulatory work may be under way. It is a narrower update: ten weeks before the public deadline, the company would not reaffirm it and still has not disclosed a named clinical candidate. The first-patient milestone remains the useful test; another platform description would not answer it.",
    "entryType": "clinical",
    "scope": "company",
    "themes": [
      "ai-drug-discovery"
    ],
    "relatedCompanyIds": [
      "isomorphic-labs"
    ],
    "sources": [
      {
        "title": "Does Isomorphic Labs have what it takes to revolutionize drugmaking?",
        "publisher": "STAT, republished by The Boston Globe",
        "url": "https://www.bostonglobe.com/2026/10/21/business/isomorphic-labs-drugmaking/",
        "publishedAt": "October 21, 2026"
      }
    ],
    "status": "current-view"
  },
  {
    "id": "2026-10-xaira-x-scientist",
    "headline": "Xaira's agent finds wet-lab hits about as often as human curation",
    "entryDate": "October 21, 2026",
    "sortKey": "2026-10-21",
    "eventDate": "October 21, 2026",
    "analysis": "Xaira introduced X-Scientist, an agentic research system connecting language models with its internal data and X-Cell, X-Design and X-Patient models. In a company-run liver-cell experiment, 381 agent-nominated genetic perturbations produced a 7.1% hit rate for reversing a TGF-beta response, compared with 6.9% for 321 human-curated perturbations and 0.9% for 433 random selections. Xaira says the nominations took about 20 minutes, versus more than three hours for human curation.\n\nThis is a wet-lab result, which is more useful to me than another software benchmark. It is still target nomination in one defined cellular context, not a drug candidate, an animal result or a patient outcome. Xaira designed and reported the test, so independent replication and evidence that the nominated targets progress into useful molecules remain open.",
    "entryType": "platform",
    "scope": "company",
    "themes": [
      "ai-drug-discovery"
    ],
    "relatedCompanyIds": [
      "xaira"
    ],
    "sources": [
      {
        "title": "X-Scientist: A Recursive Self-Improving Agentic AI Platform for Drug Discovery",
        "publisher": "Xaira Therapeutics",
        "url": "https://www.xaira.com/news/x-scientist-recursive-self-improving-agentic-ai-platform",
        "publishedAt": "October 21, 2026"
      }
    ],
    "status": "current-view"
  },
  {
    "id": "2026-10-openai-orchestra-bio",
    "headline": "OpenAI buys Orchestra Bio to extend Rosalind into drug-development workflows",
    "entryDate": "October 20, 2026",
    "sortKey": "2026-10-20",
    "eventDate": "October 20, 2026",
    "analysis": "OpenAI says it acquired Orchestra Bio and is combining the team and technology with Rosalind, its life-sciences models and tools. Orchestra's platform coordinates studies, campaigns and dependencies across drug programs; OpenAI describes GPT-Rosalind as a biology and chemistry reasoning model and Rosalind Workbench as the layer connecting models with scientific tools and data. The announcement disclosed no purchase price.\n\nFor my Isomorphic and Xaira comparisons, this is an adjacent move rather than evidence of a better molecule. A general AI company is extending from research questions and experiment planning into development workflow. That could commoditise more of the software layer around AI drug discovery, but the announcement gives me no clinical result, drug-asset economics or independent measure of whether these agents shorten development.",
    "entryType": "ma-licensing",
    "scope": "industry",
    "themes": [
      "ai-drug-discovery"
    ],
    "relatedCompanyIds": [
      "isomorphic-labs",
      "xaira"
    ],
    "sources": [
      {
        "title": "OpenAI acquires Orchestra Bio",
        "publisher": "OpenAI",
        "url": "https://openai.com/index/openai-to-acquire-orchestra-bio/",
        "publishedAt": "October 20, 2026"
      }
    ],
    "status": "current-view"
  },
  {
    "id": "2026-10-merck-silence",
    "headline": "Merck KGaA agrees to buy Silence at a $1.3B equity value",
    "entryDate": "October 20, 2026",
    "sortKey": "2026-10-20",
    "eventDate": "October 18, 2026 agreement; announced October 19",
    "analysis": "Merck KGaA signed a definitive agreement to acquire Silence Therapeutics for $20 per ADS in cash, implying a $1.1 billion enterprise value and approximately $1.3 billion equity value. This is an agreed transaction, not a completed acquisition: it still needs shareholder, regulatory and court approvals and is expected to close in the first quarter of 2027.\n\nThe main asset is divesiran, a Phase 3-ready siRNA candidate for phlebotomy-dependent polycythemia vera. Merck reports an 88% responder rate versus 19% on placebo and 0.2 versus 2.1 mean phlebotomies per patient over weeks 0–36 in Phase 2. Those results support the asset's value, but they are not evidence that an RNA-design platform alone commands the purchase price. For Inceptive, this sharpens the difference between licensing design capability and owning a clinically de-risked program.",
    "entryType": "ma-licensing",
    "scope": "industry",
    "relatedCompanyIds": [
      "inceptive"
    ],
    "sources": [
      {
        "title": "Merck KGaA to acquire Silence Therapeutics",
        "publisher": "Merck KGaA, Darmstadt, Germany",
        "url": "https://www.emdgroup.com/en/news/silence-therapeutics-19-10-2026.html",
        "publishedAt": "October 19, 2026"
      },
      {
        "title": "Silence Therapeutics Form 8-K on definitive transaction agreement",
        "publisher": "Silence Therapeutics / SEC",
        "url": "https://www.sec.gov/Archives/edgar/data/1479615/000119312526424695/d172259d8k.htm",
        "publishedAt": "October 19, 2026"
      }
    ],
    "status": "current-view"
  },
  {
    "id": "2026-10-city-ipo-closing",
    "headline": "City closes its IPO at $230M gross",
    "entryDate": "October 19, 2026",
    "sortKey": "2026-10-19",
    "eventDate": "October 19, 2026",
    "analysis": "City confirmed that its IPO closed with 12,777,777 shares sold at $18, including the underwriters' full exercise of their 1,666,666-share option. Gross proceeds were approximately $230 million before fees and expenses, compared with the roughly $200 million base offering I recorded yesterday.\n\nThat answers the closing question in my earlier note. In the Inceptive comparison, I can now treat this as completed financing for an RNAi asset developer. I still want to see how far the proceeds take City's programs and what clinical evidence emerges; the gross raise alone gives me neither a runway estimate nor proof of patient benefit.",
    "entryType": "financing",
    "scope": "industry",
    "relatedCompanyIds": [
      "inceptive"
    ],
    "relatedEntryIds": [
      "2026-10-city-rnai-ipo"
    ],
    "sources": [
      {
        "title": "City Therapeutics closes upsized IPO including full underwriters' option",
        "publisher": "City Therapeutics / GlobeNewswire",
        "url": "https://www.globenewswire.com/news-release/2026/10/19/3383856/0/en/city-therapeutics-announces-closing-of-230-0-million-upsized-initial-public-offering-including-full-exercise-of-underwriters-option-to-purchase-additional-shares.html",
        "publishedAt": "October 19, 2026"
      }
    ],
    "status": "current-view"
  },
  {
    "id": "2026-10-openevidence-doximity-settlement",
    "headline": "OpenEvidence and Doximity reportedly end their legal fight",
    "entryDate": "October 19, 2026",
    "sortKey": "2026-10-19",
    "eventDate": "October 15, 2026 settlement in principle; October 16 dismissal, reported October 19",
    "analysis": "Fierce Healthcare reports that OpenEvidence and Doximity reached a settlement in principle on October 15, followed by dismissal of all claims and counterclaims with prejudice on October 16. Each party bears its own costs and attorneys' fees. The report says the joint notice disclosed no settlement terms.\n\nI read this as a change in the litigation status. It gives me no basis to call either side's allegations proven or infer a payment. My competitive questions remain: which tool clinicians return to, what source access costs, and how much advertisers pay for that attention.",
    "entryType": "regulation-policy",
    "scope": "company",
    "relatedCompanyIds": [
      "openevidence"
    ],
    "sources": [
      {
        "title": "OpenEvidence, Doximity reach settlement in contentious AI legal battle",
        "publisher": "Fierce Healthcare",
        "url": "https://www.fiercehealthcare.com/ai-and-machine-learning/openevidence-doximity-reach-settlement-contentious-ai-lawsuit",
        "publishedAt": "October 19, 2026"
      }
    ],
    "status": "current-view"
  },
  {
    "id": "2026-10-iambic-ipo",
    "headline": "Iambic's IPO adds a public financing comparison for AI drug discovery",
    "eventDate": "October 14, 2026 pricing; October 16 IPO completion",
    "analysis": "Iambic priced 9,375,000 shares at $16, giving the base offering $150 million in gross proceeds before fees and expenses. Its October 16 SEC filing records completion of the IPO. The company says it advanced IAM1363 from discovery into the clinic in approximately two years; that is its account of a development timeline, not a controlled measure of AI's contribution.\n\nFor my Isomorphic and Xaira comparisons, I now have another clinical-stage developer with public financing terms and a prospectus to examine. I want to compare candidate quality, development spending and clinical progress. The amount raised is not the company's valuation, and a successful financing does not establish better patient outcomes.",
    "entryType": "financing",
    "scope": "industry",
    "themes": [
      "ai-drug-discovery"
    ],
    "relatedCompanyIds": [
      "isomorphic-labs",
      "xaira"
    ],
    "sources": [
      {
        "title": "Iambic announces IPO pricing",
        "publisher": "Iambic Therapeutics",
        "url": "https://ir.iambic.ai/news-releases/news-release-details/iambic-announces-pricing-initial-public-offering",
        "publishedAt": "October 14, 2026"
      },
      {
        "title": "Form 8-K records completion of Iambic IPO",
        "publisher": "Iambic Therapeutics / SEC",
        "url": "https://www.sec.gov/Archives/edgar/data/1997038/000119312526424242/iam-20261016.htm",
        "publishedAt": "October 16, 2026"
      }
    ],
    "entryDate": "October 18, 2026",
    "sortKey": "2026-10-18",
    "status": "current-view"
  },
  {
    "id": "2026-10-city-rnai-ipo",
    "headline": "City prices an RNAi IPO, with closing still ahead",
    "eventDate": "October 15, 2026 pricing; closing expected October 19",
    "analysis": "City Therapeutics priced an upsized IPO of 11,111,111 shares at $18, approximately $200 million gross before fees and expenses. The October 15 announcement expected closing on October 19, subject to customary conditions. I am recording the priced offering; completion still needs checking. City describes itself as a clinical-stage RNAi developer, with programs including CITY-FXI for thromboembolic disease and CITY-RBP4 for retinal disease.\n\nFor Inceptive, this is a useful business-model comparison. City is financing development of its own RNAi assets; Inceptive's Alnylam arrangement sells design capability with contingent milestones. I want to compare capital required through human readouts with the rights and economics each company keeps. Raising public capital alone cannot settle which model captures more value.",
    "entryType": "financing",
    "scope": "industry",
    "relatedCompanyIds": [
      "inceptive"
    ],
    "relatedEntryIds": [
      "2026-06-alnylam-inceptive"
    ],
    "sources": [
      {
        "title": "City Therapeutics announces pricing of upsized IPO",
        "publisher": "City Therapeutics",
        "url": "https://investors.citytx.com/news-releases/news-release-details/city-therapeutics-announces-pricing-upsized-initial-public",
        "publishedAt": "October 15, 2026"
      }
    ],
    "entryDate": "October 18, 2026",
    "sortKey": "2026-10-18",
    "status": "current-view"
  },
  {
    "id": "2026-10-synchron-trial-stage-correction",
    "headline": "I overstated Synchron's trial stage",
    "eventDate": "May 11, 2026 registry update; checked October 17, 2026",
    "analysis": "My August note said Synchron had a pivotal trial running. I have not verified that claim. The sponsor's INTENT record (NCT07543367) lists a recruiting early-feasibility study, estimated enrolment of ten, and device-related serious adverse events through six months as its primary endpoint. Estimated enrolment is not a count of implanted participants.\n\nI am keeping the earlier prediction visible, but correcting the present memo and Precision comparison. The endovascular procedure still interests me. I should not turn that preference into an assumed regulatory lead; I need a separately verified pivotal protocol and actual enrolment before making that argument.",
    "entryType": "clinical",
    "scope": "company",
    "relatedCompanyIds": [
      "synchron",
      "precision-neuroscience"
    ],
    "relatedEntryIds": [
      "2026-08-bci-reimbursement",
      "2026-08-what-i-am-looking-for-next"
    ],
    "sources": [
      {
        "title": "INTENT early-feasibility study, NCT07543367",
        "publisher": "ClinicalTrials.gov / Synchron",
        "url": "https://clinicaltrials.gov/study/NCT07543367",
        "publishedAt": "Last update posted May 11, 2026"
      }
    ],
    "entryDate": "October 17, 2026",
    "sortKey": "2026-10-17",
    "status": "current-view"
  },
  {
    "id": "2026-10-inceptive-animal-data",
    "headline": "Inceptive has animal data; the question now is durability",
    "eventDate": "September 3, 2026",
    "analysis": "Inceptive reports that three of five model-designed CAR mRNA sequences beat its Capstan-sequence benchmark for B-cell depletion in humanized mice. The displayed experiment used four animals per group and ended at 24 hours. All sequences used the same collaborator's targeted lipid nanoparticle.\n\nThat partly answers the animal-data question in my memo. It does not establish durable immune reset, human benefit or independent replication. I am more interested in the next experiment now: whether the advantage lasts, with acceptable safety, beyond that first day. The Alnylam agreement and this mRNA experiment are different evidence; I should not treat a CAR-T result as validation of partnered siRNA drugs.",
    "entryType": "clinical",
    "scope": "company",
    "relatedCompanyIds": [
      "inceptive"
    ],
    "relatedEntryIds": [
      "2026-06-alnylam-inceptive"
    ],
    "sources": [
      {
        "title": "From better models to better in vivo CAR-T",
        "publisher": "Inceptive",
        "url": "https://inceptive.com/blog/from-better-models-to-better-in-vivo-car-t",
        "publishedAt": "September 3, 2026"
      }
    ],
    "entryDate": "October 17, 2026",
    "sortKey": "2026-10-17",
    "status": "current-view"
  },
  {
    "id": "2026-10-beeline-treatment-context",
    "headline": "Beeline needs to improve existing lupus care, not invent oral treatment",
    "eventDate": "September 9, 2026 topline release; current pipeline checked October 17, 2026",
    "analysis": "I overstated the treatment gap when I wrote that lupus had no good oral option. Hydroxychloroquine is established care, and EULAR recommends it unless contraindicated. Afimetoran needs to add enough disease control and spare enough steroid exposure to justify another treatment.\n\nBeeline's positive Phase 2 topline still leaves me waiting for response rates by arm and detailed safety counts. I also called all five BMS programs clinical-stage. The current pipeline lists BLN-481 and BLN-498 as preclinical. I have corrected the memo; five assets are not five clinical shots on goal. Before getting more confident, I want the full dataset and a funded plan for what comes next.",
    "entryType": "clinical",
    "scope": "company",
    "relatedCompanyIds": [
      "beeline-medicines"
    ],
    "sources": [
      {
        "title": "Afimetoran Phase 2 topline",
        "publisher": "Beeline Medicines",
        "url": "https://beelinemedicines.com/press-releases/beeline-medicines-announces-positive-topline-results-from-global-phase-2-study-of-afimetoran-in-systemic-lupus-erythematosus/",
        "publishedAt": "September 9, 2026"
      },
      {
        "title": "Current pipeline",
        "publisher": "Beeline Medicines",
        "url": "https://beelinemedicines.com/"
      },
      {
        "title": "EULAR recommendations for SLE, 2023 update",
        "publisher": "Annals of the Rheumatic Diseases",
        "url": "https://pubmed.ncbi.nlm.nih.gov/37827694/",
        "publishedAt": "January 2, 2024"
      }
    ],
    "entryDate": "October 17, 2026",
    "sortKey": "2026-10-17",
    "status": "current-view"
  },
  {
    "id": "2026-10-omass-series-c",
    "headline": "OMass raises $310M with two clinical questions to fund",
    "eventDate": "October 15, 2026",
    "analysis": "OMass announced a $310 million Series C co-led by Bain Capital Life Sciences, Forbion and Novo Holdings. It plans to advance MC2 receptor antagonist OMS1620 through Phase 2 for congenital adrenal hyperplasia and ACTH-dependent Cushing's syndrome, and generate early clinical data for an SLC15A4 inhibitor targeting lupus and related disease. These are development plans, not reported patient results.\n\nThis is a useful comparison for Beeline and the discovery platforms I follow: which specific human readouts does the financing buy? OMass has not disclosed a valuation in this release, and I cannot infer runway from the round size. I want to understand clinical differentiation and the entry price before adding a full case. For Beeline, it is another reason to compare oral mechanisms as well as cell therapy.",
    "entryType": "financing",
    "scope": "industry",
    "relatedCompanyIds": [
      "beeline-medicines"
    ],
    "sources": [
      {
        "title": "OMass announces $310 million Series C",
        "publisher": "OMass Therapeutics",
        "url": "https://www.omass.com/2026/10/15/omass-therapeutics-announces-310-million-series-c-financing-to-advance-portfolio-of-small-molecule-therapeutics-in-endocrinology-and-immunology/",
        "publishedAt": "October 15, 2026"
      }
    ],
    "entryDate": "October 17, 2026",
    "sortKey": "2026-10-17",
    "status": "current-view"
  },
  {
    "id": "2026-10-recursion-sanofi-option",
    "headline": "Sanofi takes a Recursion candidate forward and triggers an earned milestone",
    "entryDate": "October 16, 2026",
    "sortKey": "2026-10-16",
    "eventDate": "October 15, 2026",
    "analysis": "Recursion says Sanofi optioned the first development candidate from their collaboration, triggering a $10 million milestone payment and bringing upfront and milestone payments received to $144 million. Sanofi takes further development and commercialization; Phase 1 is planned for 2027. More than $300 million in additional program milestones remains contingent, alongside potential royalties.\n\nCompared with a newly signed discovery agreement, this gives me a candidate selection and an earned payment to examine. It does not establish clinical efficacy. For my Isomorphic and Xaira comparisons, I want to track the time and cost from discovery to this handoff, then what happens in patients.",
    "entryType": "ma-licensing",
    "scope": "industry",
    "themes": [
      "ai-drug-discovery"
    ],
    "relatedCompanyIds": [
      "isomorphic-labs",
      "xaira"
    ],
    "relatedEntryIds": [
      "2026-10-insitro-astrazeneca",
      "2026-10-generate-zealand"
    ],
    "sources": [
      {
        "title": "Sanofi options first development candidate from Recursion collaboration",
        "publisher": "Recursion",
        "url": "https://recursion.gcs-web.com/news-releases/news-release-details/recursion-announces-sanofi-options-potential-first-class",
        "publishedAt": "October 15, 2026"
      }
    ],
    "status": "current-view"
  },
  {
    "id": "2026-10-recursion-clinical-denominators",
    "headline": "Recursion's clinical update needs its patient counts beside the percentages",
    "entryDate": "October 16, 2026",
    "sortKey": "2026-10-16",
    "eventDate": "October 15, 2026 disclosure; September 10 TUPELO and August 21 DAHLIA data cutoffs",
    "analysis": "In open-label TUPELO, Recursion reported a 47% median reduction in total polyp burden after 12 weeks of REC-4881 in 16 efficacy-evaluable adults with familial adenomatous polyposis. After 12 weeks off treatment, 11 of 13 remained below baseline. Among 26 safety-evaluable patients, four had Grade 3 treatment-related adverse events. The company also reports four discontinuations due to adverse events, none because of a Grade 3 treatment-related event.\n\nIn DAHLIA, two partial responses were confirmed and one remained unconfirmed among 12 efficacy-evaluable cancer patients starting REC-1245 at 45 mg or higher. Patients without a first efficacy assessment were excluded. These are small, uncontrolled, company-reported datasets. I want longer follow-up and controlled evidence: polyp reduction does not establish cancer prevention, and early tumor responses do not establish a survival benefit. Neither dataset isolates AI's contribution to discovery.",
    "entryType": "clinical",
    "scope": "industry",
    "themes": [
      "ai-drug-discovery"
    ],
    "relatedCompanyIds": [
      "isomorphic-labs",
      "xaira"
    ],
    "relatedEntryIds": [
      "2026-10-recursion-sanofi-option"
    ],
    "sources": [
      {
        "title": "October 15 Form 8-K: REC-4881 and REC-1245 study designs and data",
        "publisher": "Recursion / SEC",
        "url": "https://www.sec.gov/Archives/edgar/data/1601830/000160183026000128/rxrx-20261015.htm",
        "publishedAt": "October 15, 2026"
      },
      {
        "title": "Clinical data updates and financing announcement",
        "publisher": "Recursion",
        "url": "https://ir.recursion.com/news-releases/news-release-details/recursion-announces-200-million-oversubscribed-follow-offering",
        "publishedAt": "October 15, 2026"
      }
    ],
    "status": "current-view"
  },
  {
    "id": "2026-10-estuary-kidney-gene-therapy",
    "headline": "Estuary puts kidney delivery at the centre of its gene-therapy launch",
    "entryDate": "October 16, 2026",
    "sortKey": "2026-10-16",
    "eventDate": "October 16, 2026",
    "analysis": "Estuary launched with $103 million in total committed financing, including a $93 million Series A led by RA Capital and an earlier $10 million seed round. Its locally delivered AAV programs target autosomal dominant polycystic kidney disease: EST-201 delivers PKD2 and is expected to enter the clinic in 2027; EST-101 delivers a functional region derived from polycystin-1 and is planned for 2028. The reversal biology described in the release comes from mice.\n\nThis gives me a specific delivery problem to investigate beyond the AI companies. Can enough kidney cells receive the therapy safely, and does expression last long enough to preserve kidney function? The financing funds that investigation; safety and efficacy in patients remain unestablished. I would want the administration procedure, distribution data and durability evidence before treating a one-time treatment as an achieved result.",
    "entryType": "financing",
    "scope": "industry",
    "sources": [
      {
        "title": "Estuary launches with $103 million in total committed financing",
        "publisher": "Estuary Biotherapeutics",
        "url": "https://estuarybio.com/news/estuary-series-a",
        "publishedAt": "October 16, 2026"
      }
    ],
    "status": "current-view"
  },
  {
    "entryDate": "October 15, 2026",
    "sortKey": "2026-10-15",
    "status": "current-view",
    "id": "2026-10-openevidence-jama-usage",
    "headline": "OpenEvidence now has defined usage data, not just registration claims",
    "eventDate": "October 15, 2026 publication; January 2024–June 2026 study period",
    "analysis": "JAMA published an analysis of OpenEvidence logs covering 952,008 US clinicians and 271 million queries. June 2026 had 703,265 monthly active users, defined as at least one query that month. Month-to-month retention reached approximately 90% in 2026.\n\nThat is stronger evidence of repeat use than registrations alone. It does not tell me whether queries happened during visits or improved patient outcomes. OpenEvidence supplied the data and three coauthors are employees; this is not an independent commercial audit. I still need advertiser retention and revenue per active clinician.",
    "entryType": "clinical",
    "scope": "company",
    "relatedCompanyIds": [
      "openevidence"
    ],
    "sources": [
      {
        "title": "Clinician Use of an Artificial Intelligence–Enabled Clinical Information Platform",
        "publisher": "JAMA",
        "url": "https://jamanetwork.com/journals/jama/fullarticle/2855491",
        "publishedAt": "October 15, 2026"
      },
      {
        "title": "First large-scale study shows how doctors use AI in medicine",
        "publisher": "Harvard Medical School",
        "url": "https://hms.harvard.edu/news/first-large-scale-study-shows-how-doctors-use-ai-medicine",
        "publishedAt": "October 15, 2026"
      }
    ]
  },
  {
    "entryDate": "October 15, 2026",
    "sortKey": "2026-10-15",
    "status": "current-view",
    "id": "2026-10-nabla-openevidence",
    "headline": "Nabla makes OpenEvidence a partner inside the ambient workflow",
    "eventDate": "October 15, 2026",
    "analysis": "Nabla says clinicians can now open OpenEvidence beside their note and ask patient-specific questions. The integration passes context including diagnoses, medications and the generated note. The announcement gives no commercial terms or measured patient outcomes.\n\nThis changes how I draw the competitive map. An ambient vendor can distribute OpenEvidence rather than replace it, while Suki has chosen UpToDate for Ask. For my Abridge and Ambience comparisons, I want to know who controls the clinical interface, permissions and economics when evidence comes from a partner.",
    "entryType": "care-delivery",
    "scope": "industry",
    "themes": [
      "ambient-ai"
    ],
    "relatedCompanyIds": [
      "openevidence",
      "abridge",
      "ambience-healthcare"
    ],
    "relatedEntryIds": [
      "2026-10-suki-financing-ask"
    ],
    "sources": [
      {
        "title": "Nabla integrates with OpenEvidence",
        "publisher": "Nabla",
        "url": "https://www.nabla.com/press-release/nabla-integrates-with-openevidence-to-deliver-clinical-evidence-at-the-point-of-care",
        "publishedAt": "October 15, 2026"
      }
    ]
  },
  {
    "entryDate": "October 15, 2026",
    "sortKey": "2026-10-15",
    "status": "current-view",
    "id": "2026-10-precision-commercial-leadership",
    "headline": "Precision hires for the reimbursement work ahead",
    "eventDate": "October 15, 2026",
    "analysis": "Precision appointed Nevro founder and former CEO Konstantinos Alataris as president, and Katherine Neuenfeldt as senior vice president, commercial strategies. She led the US launch and market access work for Nevro's Senza system; Alataris has been on Precision's board since May 2025.\n\nI like seeing implant commercialization and reimbursement experience added after the Series D. Hiring people who have done it gives me a more specific team to assess, not evidence that Precision has secured coverage. The appointments do not change the distinction between its short-term cleared array and the chronic BCI still in development.",
    "entryType": "people",
    "scope": "company",
    "relatedCompanyIds": [
      "precision-neuroscience"
    ],
    "sources": [
      {
        "title": "Precision appoints Konstantinos Alataris and Katherine Neuenfeldt",
        "publisher": "Precision Neuroscience / GlobeNewswire",
        "url": "https://www.globenewswire.com/news-release/2026/10/15/3381700/0/en/precision-neuroscience-appoints-nevro-founder-konstantinos-alataris-as-president-and-katherine-neuenfeldt-as-senior-vice-president-commercial-strategies.html",
        "publishedAt": "October 15, 2026"
      }
    ]
  },
  {
    "entryDate": "October 15, 2026",
    "sortKey": "2026-10-15",
    "status": "current-view",
    "id": "2026-10-insitro-astrazeneca",
    "headline": "insitro's AstraZeneca agreement separates upfront cash from possible milestones",
    "eventDate": "October 15, 2026",
    "analysis": "insitro and AstraZeneca announced a discovery and licensing agreement for MASH and cardiomyopathies. insitro will receive $40 million upfront and is eligible for up to approximately $1.46 billion in potential milestones, plus royalties. Its work runs through development-candidate selection; AstraZeneca leads clinical development, regulatory work and commercialization, with exclusive worldwide rights to selected programs.\n\nAlongside Generate's Zealand agreement, this gives me another disclosed price for external AI discovery work. It is a commercial commitment, not clinical validation of insitro or of the different approaches at Isomorphic and Xaira. I want to follow candidate delivery and earned milestones, rather than count the possible total as revenue.",
    "entryType": "ma-licensing",
    "scope": "industry",
    "themes": [
      "ai-drug-discovery"
    ],
    "relatedCompanyIds": [
      "isomorphic-labs",
      "xaira"
    ],
    "relatedEntryIds": [
      "2026-10-generate-zealand"
    ],
    "sources": [
      {
        "title": "insitro announces AstraZeneca discovery collaboration",
        "publisher": "insitro",
        "url": "https://www.insitro.com/news/insitro-announces-a-strategic-collaboration-with-astrazeneca-for-ai-enabled-discovery-of-novel-therapeutics-for-mash-and-cardiomyopathies/",
        "publishedAt": "October 15, 2026"
      },
      {
        "title": "AstraZeneca announces insitro collaboration and licensing agreement",
        "publisher": "AstraZeneca",
        "url": "https://www.astrazeneca.com/media-centre/press-releases/2026/astrazeneca-announces-new-strategic-collaboration-with-insitro-for-difficult-to-treat-cardiometabolic-diseases.html",
        "publishedAt": "October 15, 2026"
      }
    ]
  },
  {
    "entryDate": "October 15, 2026",
    "sortKey": "2026-10-15",
    "status": "current-view",
    "id": "2026-10-abridge-assistant",
    "headline": "Abridge describes Assistant access beyond its documentation users",
    "eventDate": "October 13, 2026 description of September 2026 release",
    "analysis": "Abridge's October 13 product account says its September release made Assistant available to every clinician at its partner health systems, including those who do not use its documentation product. It describes chart-cited answers, clinical guidelines, calculators populated from chart values, and draft referrals and handoffs for clinician review. These are company descriptions of capabilities and access, not independently measured adoption or outcomes.\n\nThe broader access matters to my distribution comparison with OpenEvidence. I want active use and separate module economics before treating eligibility across a health system as a new paying customer base.",
    "entryType": "care-delivery",
    "scope": "company",
    "relatedCompanyIds": [
      "abridge",
      "openevidence"
    ],
    "sources": [
      {
        "title": "Meet the AI Assistant for Healthcare",
        "publisher": "Abridge",
        "url": "https://www.abridge.com/blog/abridge-assistant-is-the-ai-assistant-for-healthcare",
        "publishedAt": "October 13, 2026"
      }
    ]
  },
  {
    "id": "2026-10-openevidence-hopkins",
    "headline": "OpenEvidence and Hopkins set out what they want to build",
    "entryDate": "October 14, 2026",
    "sortKey": "2026-10-14",
    "eventDate": "October 13, 2026",
    "analysis": "Johns Hopkins Medicine and OpenEvidence announced a collaboration on medical education and clinical AI. The planned care tools would combine published evidence, a patient's medical history and Hopkins practices. The announcement describes work to be developed, without commercial terms or patient-outcome results.\n\nI want to see which tools emerge and how Hopkins evaluates them. Compared with Northwestern's existing Epic access, this is an earlier product-development commitment. It gives OpenEvidence another route into clinical work, while leaving the question of who pays unresolved.",
    "entryType": "care-delivery",
    "scope": "company",
    "relatedCompanyIds": [
      "openevidence"
    ],
    "relatedEntryIds": [
      "2026-10-openevidence-northwestern-epic"
    ],
    "sources": [
      {
        "title": "OpenEvidence and Johns Hopkins Medicine announce education and clinical AI collaboration",
        "publisher": "Johns Hopkins Medicine",
        "url": "https://www.hopkinsmedicine.org/news/newsroom/news-releases/2026/10/openevidence-and-johns-hopkins-medicine-announce-landmark-collaboration-to-design-the-future-of-medicine-and-medical-education-in-the-age-of-ai",
        "publishedAt": "October 13, 2026"
      }
    ],
    "status": "current-view"
  },
  {
    "id": "2026-10-bioage-deep-origin",
    "headline": "BioAge has new discovery hits to follow before they become drug candidates",
    "entryDate": "October 14, 2026",
    "sortKey": "2026-10-14",
    "eventDate": "October 14, 2026",
    "analysis": "Deep Origin announced a multi-target collaboration with BioAge and said BioAge's laboratory had confirmed small-molecule hits against the first target. It reports delivery in less than three months and progression into hit-to-lead optimization. BioAge handles subsequent development; Deep Origin is eligible for success-based milestones, with amounts undisclosed.\n\nThese are collaborator-reported early discovery results. I want the target, compound-level data and comparison with conventional screening before judging the time saved. This creates a separate question alongside BGE-102: can BioAge repeatedly turn targets from its human data into useful chemistry? It leaves the QUELL-CV and QUELL-DME clinical questions open.",
    "entryType": "clinical",
    "scope": "company",
    "relatedCompanyIds": [
      "bioage-labs"
    ],
    "relatedEntryIds": [
      "2026-10-bioage-dme-trial-design"
    ],
    "sources": [
      {
        "title": "Deep Origin announces BioAge collaboration and first wet-lab-confirmed hits",
        "publisher": "Deep Origin",
        "url": "https://deeporigin.com/news/deep-origin-announces-multi-target-collaboration-with-bioage-labs/",
        "publishedAt": "October 14, 2026"
      }
    ],
    "status": "current-view"
  },
  {
    "id": "2026-10-suki-financing-ask",
    "headline": "Suki's new financing comes with a closer overlap in clinical reasoning",
    "entryDate": "October 14, 2026",
    "sortKey": "2026-10-14",
    "eventDate": "October 13, 2026 financing; October 8 product announcement",
    "analysis": "Suki announced $90 million in financing as part of its Series E on October 13. It reports serving more than 450 healthcare organizations and over 30 technology partners, without disclosing valuation or absolute revenue. Those are company-reported adoption figures.\n\nThe product change matters to my comparisons as well. On October 8 Suki launched Ask using Wolters Kluwer's UpToDate Expert AI, combining access to patient information with clinical reasoning inside its app. I need to compare that workflow with OpenEvidence and Abridge, alongside the documentation and coding comparison with Ambience. More capital supports competition; it does not establish which product clinicians keep using.",
    "entryType": "financing",
    "scope": "industry",
    "themes": [
      "ambient-ai"
    ],
    "relatedCompanyIds": [
      "openevidence",
      "abridge",
      "ambience-healthcare"
    ],
    "sources": [
      {
        "title": "Suki announces $90 million financing",
        "publisher": "Suki",
        "url": "https://www.suki.ai/press-releases/suki-secures-90-million-to-build-and-scale-ai-agents-for-health-systems-and-health-tech-companies/",
        "publishedAt": "October 13, 2026"
      },
      {
        "title": "Suki launches Ask with UpToDate Expert AI",
        "publisher": "Suki",
        "url": "https://www.suki.ai/press-releases/suki-launches-ask-accelerating-complex-clinical-decision-support-powered-by-wolters-kluwer-up-to-date-expert-ai/",
        "publishedAt": "October 8, 2026"
      }
    ],
    "status": "current-view"
  },
  {
    "id": "2026-10-generate-zealand",
    "headline": "Generate's Zealand agreement gives me cash terms and a division of the work",
    "entryDate": "October 14, 2026",
    "sortKey": "2026-10-14",
    "eventDate": "October 13, 2026",
    "analysis": "Generate and Zealand signed a collaboration for AI-designed protein medicines in obesity and metabolic disease. For two initial programs, Generate will receive $30 million upfront and can earn nearly $1.2 billion in total milestones, including up to $35 million in early preclinical milestones, plus royalties. A third program is optional. Generate leads research through candidate selection; Zealand takes subsequent clinical development and commercialization.\n\nI find the division of work more useful than the headline total. A partner has agreed to pay for the capability, while most of the possible consideration still depends on development. I want to follow candidate selection and what gets paid next before treating this as evidence of clinical success.",
    "entryType": "ma-licensing",
    "scope": "industry",
    "themes": [
      "ai-drug-discovery",
      "obesity"
    ],
    "sources": [
      {
        "title": "Generate and Zealand announce collaboration and license agreement",
        "publisher": "Generate Biomedicines",
        "url": "https://generatebiomedicines.com/news-releases/generate-biomedicines-and-zealand-pharma-enter-collaboration-and-license-agreement-to-develop-protein-therapeutics-engineered-with-ai-for-metabolic-diseases/",
        "publishedAt": "October 13, 2026"
      }
    ],
    "status": "current-view"
  },
  {
    "id": "2026-10-agilent-proscia",
    "headline": "Agilent wants to own the pathology workflow it already distributes",
    "entryDate": "October 14, 2026",
    "sortKey": "2026-10-14",
    "eventDate": "October 13, 2026",
    "analysis": "Agilent signed an agreement to buy Proscia for $240 million in cash at closing, with up to $30 million more tied to performance milestones. Closing remains subject to conditions and is expected early in Agilent's fiscal 2027. Agilent reports Proscia's trailing twelve-month revenue exceeds $18 million; that figure is from the buyer's announcement. The companies have had a distribution agreement since September 2022.\n\nProscia connects scanners, lab systems and image-analysis tools. I read the proposed purchase as a reason to investigate who owns that workflow as pathology becomes digital. I still want margins, customer retention and the case for ownership over distribution. An agreed acquisition price alone cannot tell me the investors' returns.",
    "entryType": "ma-licensing",
    "scope": "industry",
    "themes": [
      "diagnostics"
    ],
    "sources": [
      {
        "title": "Agilent announces definitive agreement to acquire Proscia",
        "publisher": "Agilent Technologies",
        "url": "https://www.agilent.com/about/newsroom/presrel/2026/13oct-gp26020.html",
        "publishedAt": "October 13, 2026"
      }
    ],
    "status": "current-view"
  },
  {
    id: '2026-10-openevidence-northwestern-epic',
    headline: 'OpenEvidence moves into Northwestern’s Epic workflow',
    entryDate: 'October 13, 2026',
    sortKey: '2026-10-13',
    eventDate: 'October 12, 2026 announcement; access began October 8',
    analysis: 'Northwestern announced on October 12 that its clinicians can launch OpenEvidence from Epic using their hospital credentials. Access began October 8 and now includes nurses, pharmacists and other clinical staff.\n\nI read this as distribution progress. A clinician has fewer steps to reach the tool, and access extends beyond physicians. That may strengthen use; the release does not disclose contract value, retention or patient-outcome results. I still need the commercial terms before treating enterprise access as a new revenue line.',
    entryType: 'care-delivery',
    scope: 'company',
    relatedCompanyIds: ['openevidence'],
    sources: [{
      title: 'OpenEvidence and Northwestern integrate clinical evidence into the EHR',
      publisher: 'Northwestern Medicine',
      url: 'https://news.nm.org/openevidence-and-northwestern-medicine-launch-collaboration-to-integrate-clinical-evidence-into-the-ehr/',
      publishedAt: 'October 12, 2026',
    }],
    status: 'current-view',
  },
  {
    id: '2026-10-isomorphic-funding-talks',
    headline: 'Isomorphic’s reported $40B–$50B target is still a negotiation',
    entryDate: 'October 13, 2026',
    sortKey: '2026-10-13',
    eventDate: 'October 8, 2026',
    analysis: 'SiliconANGLE, citing Bloomberg, reported on October 8 that Isomorphic was in early fundraising discussions targeting a $40 billion to $50 billion valuation. The report did not specify the amount to be raised or the investors.\n\nI am keeping that proposed price separate from completed financing. It adds nothing to the $2.7 billion capital total in my memo. If a round closes near that range, I would need to understand how much clinical and commercial success the price assumes before calling it a good investment.',
    entryType: 'financing',
    scope: 'company',
    relatedCompanyIds: ['isomorphic-labs'],
    sources: [{
      title: 'Isomorphic reportedly in early fundraising talks at a $40B–$50B valuation',
      publisher: 'SiliconANGLE, citing Bloomberg',
      url: 'https://siliconangle.com/2026/10/08/alphabet-spinoff-isomorphic-labs-reportedly-raising-funding-at-up-to-50b-valuation/',
      publishedAt: 'October 8, 2026',
    }],
    status: 'current-view',
  },
  {
    id: '2026-10-abridge-ut-system',
    headline: 'Abridge’s UT agreement opens a route to expansion',
    entryDate: 'October 13, 2026',
    sortKey: '2026-10-13',
    eventDate: 'October 8, 2026',
    analysis: 'Abridge announced a systemwide access agreement with University of Texas REAL Health AI on October 8. Local institutions retain their implementation decisions. The company says the preceding pilot covered five locations and more than 50 specialties.\n\nI want to see how much of that access becomes sustained use. Abridge reports that recording clinicians grew 73% and monthly notes 80% during the pilot’s last twelve months, but does not give the starting counts. Those growth rates are encouraging; they do not tell me how many paid users or how much revenue the wider agreement will produce.',
    entryType: 'care-delivery',
    scope: 'company',
    relatedCompanyIds: ['abridge'],
    sources: [{
      title: 'Abridge announces enterprise-wide agreement with the UT System',
      publisher: 'Abridge',
      url: 'https://www.abridge.com/press-release/ut-health-enterprise-wide',
      publishedAt: 'October 8, 2026',
    }],
    status: 'current-view',
  },
  {
    id: '2026-10-bioage-dme-trial-design',
    headline: 'For QUELL-DME, I can ask about vision directly',
    entryDate: 'October 13, 2026',
    sortKey: '2026-10-13',
    eventDate: 'October 2, 2026 filing',
    analysis: 'BioAge’s October 2 filing sets out a roughly 180-person, three-arm QUELL-DME trial. It compares anti-VEGF plus oral placebo with anti-VEGF plus BGE-102 and BGE-102 plus a sham injection. The primary endpoint is change in best-corrected visual acuity at week 12; topline is expected in the second half of 2027.\n\nThat helps me separate the questions in the two Phase 2 programs. QUELL-CV asks about an inflammation biomarker. QUELL-DME asks whether people see better. I want the size of that visual benefit against the control and the safety data before drawing a commercial conclusion.',
    entryType: 'clinical',
    scope: 'company',
    relatedCompanyIds: ['bioage-labs'],
    relatedEntryIds: ['2026-10-bioage-endpoint-correction'],
    sources: [{
      title: 'October 2 Form 8-K: QUELL-DME design and expected readout',
      publisher: 'BioAge Labs / SEC filing',
      url: 'https://ir.bioagelabs.com/node/8096/html',
      publishedAt: 'October 2, 2026',
    }, {
      title: 'QUELL-CV trial design and primary endpoint',
      publisher: 'BioAge Labs',
      url: 'https://ir.bioagelabs.com/news-releases/news-release-details/bioage-labs-announces-first-participant-dosed-quell-cv-phase-2',
      publishedAt: 'June 16, 2026',
    }],
    status: 'current-view',
  },
  {
    "id": "2026-10-precision-atlas",
    "headline": "Precision’s atlas is a data milestone, not a chronic implant result",
    "entryDate": "October 13, 2026",
    "sortKey": "2026-10-13",
    "eventDate": "October 8, 2026",
    "analysis": "Precision released a manuscript on October 8 describing recordings from 70 patients, with the broader program now above 100. The company says the manuscript is on bioRxiv.\n\nI want to keep that separate from permanent home use. More recordings may improve the development process without answering whether a chronic implant holds its signal. The dataset is useful progress; it is not the milestone I was waiting for.",
    "entryType": "clinical",
    "scope": "company",
    "relatedCompanyIds": [
      "precision-neuroscience"
    ],
    "sources": [
      {
        "title": "Precision releases a human nervous system atlas",
        "publisher": "Precision Neuroscience / GlobeNewswire",
        "url": "https://www.globenewswire.com/news-release/2026/10/08/3377330/0/en/precision-neuroscience-unveils-a-new-map-of-the-human-nervous-system.html",
        "publishedAt": "October 8, 2026"
      }
    ],
    "status": "current-view"
  },
  {
    "id": "2026-10-isomorphic-shared-data",
    "headline": "Isomorphic joins a shared-data effort; the clinical clock remains",
    "entryDate": "October 13, 2026",
    "sortKey": "2026-10-13",
    "eventDate": "October 7, 2026",
    "analysis": "On October 7 Isomorphic joined the Biohub-convened Virtual Biology Initiative, which aims to make biological data accessible for predictive models.\n\nThat fits the idea that generating better data is still a constraint. It does not answer the first-patient question. I also corrected my memo: Ben Wolf’s CMO appointment was public in June 2025. Missing it was a gap in my research, not evidence that the company lacked clinical leadership.",
    "entryType": "platform",
    "scope": "company",
    "relatedCompanyIds": [
      "isomorphic-labs"
    ],
    "sources": [
      {
        "title": "Isomorphic joins the Virtual Biology Initiative",
        "publisher": "Isomorphic Labs",
        "url": "https://www.isomorphiclabs.com/articles/isomorphic-labs-joins-the-virtual-biology-initiative",
        "publishedAt": "October 7, 2026"
      },
      {
        "title": "Ben Wolf appointed Chief Medical Officer",
        "publisher": "Isomorphic Labs",
        "url": "https://www.isomorphiclabs.com/articles/isomorphic-labs-appoints-dr-ben-wolf-as-chief-medical-officer-and-establishes-us-presence",
        "publishedAt": "June 17, 2025"
      }
    ],
    "status": "current-view"
  },
  {
    "id": "2026-10-xaira-antibody-design",
    "headline": "Xaira gives me a more useful experiment to read",
    "entryDate": "October 13, 2026",
    "sortKey": "2026-10-13",
    "eventDate": "October 2, 2026",
    "analysis": "On October 2 Xaira disclosed antibody-design case studies for XA-1 and XA-4. It describes a preclinical lead for XA-1 after seven weeks of experimental work. These are company-reported examples, with a systematic assessment still promised.\n\nThat is more concrete than a model benchmark. It also means my old shorthand of “nothing nominated” needs updating: there are now disclosed programs and preclinical work, without an announced human dosing milestone. I want comparative controls and repeatability before making the platform claim stronger.",
    "entryType": "clinical",
    "scope": "company",
    "relatedCompanyIds": [
      "xaira"
    ],
    "sources": [
      {
        "title": "De Novo Design of Progressable Antibodies to Therapeutic Targets",
        "publisher": "Xaira Therapeutics",
        "url": "https://www.xaira.com/news/de-novo-design-of-progressable-antibodies-to-therapeutic-targets",
        "publishedAt": "October 2, 2026"
      }
    ],
    "status": "current-view"
  },
  {
    "id": "2026-10-openevidence-financing",
    "headline": "OpenEvidence’s completed round is $15B, not the proposed $20B",
    "entryDate": "October 13, 2026",
    "sortKey": "2026-10-13",
    "eventDate": "September 28, 2026",
    "analysis": "Becker’s reported on September 28 that Daniel Nadler confirmed a new $250 million raise at a $15 billion valuation, led by a16z and Byers Capital. I have updated the memo and kept Sacra’s revenue run rate labelled as an estimate.\n\nThat is still an expensive entry. It also fixes a distinction I want this notebook to make reliably: an offer, a reported negotiation and a completed financing are different events.",
    "entryType": "financing",
    "scope": "company",
    "relatedCompanyIds": [
      "openevidence"
    ],
    "sources": [
      {
        "title": "OpenEvidence raises $250M at $15B valuation; CEO confirms to Becker’s",
        "publisher": "Becker's Hospital Review",
        "url": "https://www.beckershospitalreview.com/healthcare-information-technology/ai/openevidence-raises-250m-at-15b-valuation/",
        "publishedAt": "September 28, 2026"
      },
      {
        "title": "OpenEvidence revenue, valuation and funding estimates",
        "publisher": "Sacra",
        "url": "https://sacra.com/c/openevidence/"
      }
    ],
    "status": "current-view"
  },
  {
    "id": "2026-10-precision-series-d",
    "headline": "Precision raises $250M, and I stop relying on the old valuation comparison",
    "entryDate": "October 13, 2026",
    "sortKey": "2026-10-13",
    "eventDate": "September 24, 2026",
    "analysis": "The September 24 Series D brings Precision’s reported capital raised to $430 million. The release does not disclose valuation.\n\nI removed the old roughly $500 million comparison from the current case. Capital gives the company time to work through manufacturing and chronic-device development. It does not make either problem solved, and an undisclosed price means I cannot call the new round cheap.",
    "entryType": "financing",
    "scope": "company",
    "relatedCompanyIds": [
      "precision-neuroscience"
    ],
    "sources": [
      {
        "title": "Precision closes $250M Series D",
        "publisher": "Precision Neuroscience / GlobeNewswire",
        "url": "https://www.globenewswire.com/news-release/2026/09/24/3368254/0/en/precision-neuroscience-closes-oversubscribed-250m-series-d-led-by-pershing-square-inc-the-ackman-oxman-institute-and-a-leading-life-sciences-investment-fund.html",
        "publishedAt": "September 24, 2026"
      }
    ],
    "status": "current-view"
  },
  {
    "id": "2026-10-abridge-va",
    "headline": "The VA contract is distribution, not $775M of Abridge revenue",
    "entryDate": "October 13, 2026",
    "sortKey": "2026-10-13",
    "eventDate": "September 22, 2026",
    "analysis": "Abridge announced on September 22 that it can provide ambient AI through the VA enterprise contract. The $775.72 million ceiling covers multiple vendors over five years; task orders still determine what each earns.\n\nThat is a useful distribution route, and the company reports more than 75 VA medical centers in its pilot. I want actual awarded work and deployment economics before translating the ceiling into a revenue case.",
    "entryType": "care-delivery",
    "scope": "company",
    "relatedCompanyIds": [
      "abridge"
    ],
    "sources": [
      {
        "title": "Abridge selected for VA enterprise contract",
        "publisher": "Abridge",
        "url": "https://www.abridge.com/press-release/va-enterprise-contract",
        "publishedAt": "September 22, 2026"
      }
    ],
    "status": "current-view"
  },
  {
    "id": "2026-10-bioage-endpoint-correction",
    "headline": "I asked a biomarker trial to answer an outcomes question",
    "entryDate": "October 13, 2026",
    "sortKey": "2026-10-13",
    "eventDate": "2026-10-13",
    "analysis": "I described QUELL-CV as the point where we learn whether reducing inflammation prevents cardiovascular events. That was wrong. Its primary endpoint is change in hsCRP, in roughly 160 participants over twelve weeks.\n\nA good result can establish dose response and support further development. It cannot establish fewer heart attacks. I corrected the current memo and am keeping this correction next to the earlier notes, because reading the endpoint is work I should have done before making the prediction.",
    "entryType": "clinical",
    "scope": "company",
    "relatedCompanyIds": [
      "bioage-labs"
    ],
    "sources": [
      {
        "title": "QUELL-CV trial design and primary endpoint",
        "publisher": "BioAge Labs",
        "url": "https://ir.bioagelabs.com/news-releases/news-release-details/bioage-labs-announces-first-participant-dosed-quell-cv-phase-2",
        "publishedAt": "June 16, 2026"
      },
      {
        "title": "Second quarter financial results and development update",
        "publisher": "BioAge Labs",
        "url": "https://ir.bioagelabs.com/news-releases/news-release-details/bioage-labs-reports-second-quarter-2026-financial-results-and",
        "publishedAt": "August 5, 2026"
      }
    ],
    "status": "current-view"
  },
  {
    "id": "2026-10-thesis-beyond-software",
    "headline": "I broadened the thesis beyond who pays for software",
    "entryDate": "October 13, 2026",
    "sortKey": "2026-10-13",
    "eventDate": "2026-10-13",
    "analysis": "The software payment argument is still useful, but it was doing too much work as a thesis for a notebook containing drugs and devices. The current version starts with the step between scientific capability and something a patient receives.\n\nI am giving more attention to wet-lab evidence, clinical endpoints, durability, manufacturing and runway. The older thesis and company cases remain readable. This is a change in the questions I want to pursue, not a claim that the new answers are already settled.",
    "entryType": "industry-observation",
    "scope": "industry",
    "relatedCompanyIds": [
      "xaira",
      "precision-neuroscience",
      "bioage-labs"
    ],
    "sources": [
      {
        "title": "De Novo Design of Progressable Antibodies to Therapeutic Targets",
        "publisher": "Xaira Therapeutics",
        "url": "https://www.xaira.com/news/de-novo-design-of-progressable-antibodies-to-therapeutic-targets",
        "publishedAt": "October 2, 2026"
      },
      {
        "title": "Precision releases a human nervous system atlas",
        "publisher": "Precision Neuroscience / GlobeNewswire",
        "url": "https://www.globenewswire.com/news-release/2026/10/08/3377330/0/en/precision-neuroscience-unveils-a-new-map-of-the-human-nervous-system.html",
        "publishedAt": "October 8, 2026"
      },
      {
        "title": "QUELL-CV trial design and primary endpoint",
        "publisher": "BioAge Labs",
        "url": "https://ir.bioagelabs.com/news-releases/news-release-details/bioage-labs-announces-first-participant-dosed-quell-cv-phase-2",
        "publishedAt": "June 16, 2026"
      }
    ],
    "status": "current-view"
  }
];
