import type { CoverageEntry } from './types';

// Notes written in October. Underlying event dates are kept separate.
export const ENTRIES_2026_Q4: CoverageEntry[] = [
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
