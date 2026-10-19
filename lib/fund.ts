// ─── Types ───────────────────────────────────────────────────────────────────

export interface KeyFact {
  label: string;
  value: string;
}

export interface Metric {
  label: string;
  value: string;
  /** What the number actually tells me. A memo that lists metrics without reading them is a fact sheet. */
  read?: string;
}

export interface RiskItem {
  risk: string;
  mitigant: string;
}

export interface MemoSection {
  title: string;
  body: string;
}

export interface Company {
  id: string;
  name: string;
  status?: 'active' | 'archived';
  archivedReason?: string;
  lastReviewed?: string;
  sources?: { title: string; publisher: string; url: string; publishedAt?: string }[];
  /** One sentence, plain language. */
  what: string;
  followingSince: string;
  /** Header facts. */
  snapshot: KeyFact[];
  /** The case in one short paragraph. Everything below is the argument for this. */
  summary: string;
  problem: string;
  product: string;
  whyNow: string;
  market: string;
  traction: Metric[];
  competition: string;
  team: string;
  risks: RiskItem[];
  /** Questions I would want answered before putting real money behind this. */
  diligence: string[];
  /** Specific, observable things that would move me. */
  changeMyMind: string[];
  /** Where I land today, one or two sentences. */
  view: string;
  /** Optional extra sections where a company needs one. */
  extra?: MemoSection[];
}

export interface MacroPillar {
  label: string;
  body: string;
  /** The observable thing that would tell me this sub-thesis is wrong. */
  test: string;
}

export interface MacroThesis {
  version: string;
  headline: string;
  stats: { label: string; value: string }[];
  body: string[];
  pillars: MacroPillar[];
  whereIAmUnsure: string;
  lastUpdated: string;
  sources?: { title: string; publisher: string; url: string; publishedAt?: string }[];
}

export interface IntroPart {
  /** Matches the tab id above, so the label reads the same as the nav. */
  id: string;
  label: string;
  body: string;
  cta: string;
}

export interface Intro {
  headline: string;
  body: string[];
  parts: IntroPart[];
  method: { title: string; body: string }[];
  disclaimer: string;
  lastUpdated: string;
}

// ─── Intro ───────────────────────────────────────────────────────────────────

export const INTRO: Intro = {
  headline: 'A running file on healthcare companies and the industry around them.',
  body: [
    "I want to understand how a scientific idea turns into something a patient actually receives, and where that process breaks. Some of what follows is drug discovery, some is software inside hospitals, some is hardware people put in their skulls, and a lot of it is the money and policy moving underneath.",
    "Current company memos, past research cases, a founder log and a dated record of what I am following."
  ],
  parts: [
    {
      "id": "companies",
      "label": "Companies",
      "body": "Companies I would want to own, written up as full memos.",
      "cta": "Read the memos"
    },
    {
      "id": "founders",
      "label": "Founder log",
      "body": "Conversations with founders and operators building healthcare companies.",
      "cta": "Read the log"
    },
    {
      "id": "following",
      "label": "Following",
      "body": "A dated record of what happened across the sector and what I made of it.",
      "cta": "Read the record"
    },
    {
      "id": "archive",
      "label": "Past research",
      "body": "Earlier cases and what I learned from their outcomes.",
      "cta": "Read past cases"
    }
  ],
  method: [
    {
      title: 'Why the memos look like memos',
      body: 'Every company below runs through the same sections: problem, product, why now, market, traction, competition, team, risks against mitigants, open diligence questions, and what would change my mind. I did not invent that structure and that is the point. It is roughly what a real investment memo covers, and using it stops me writing three paragraphs about the science and forgetting to ask who pays.',
    },
    {
      title: 'Which numbers I trust',
      body: 'The ones that are hard to manufacture. Revenue growth with a margin attached. Patients dosed. Regulatory decisions. Whether a sophisticated partner paid real money. I discount registered users, market size projections, and anything a company can improve by changing a definition. Where a figure is company-reported and unaudited, the memo says so.',
    },
  ],
  disclaimer:
    'Nothing here is investment advice, and I am not managing money. These are companies I would want to own if I were, written up in memo form as a way of forcing myself to think clearly.',
  lastUpdated: "October 2026",
};

// ─── Macro thesis ────────────────────────────────────────────────────────────

export const MACRO_THESIS: MacroThesis = {
  version: "Rewritten October 2026",
  headline:
    "I want to own the part that turns a scientific capability into something a patient can actually receive.",
  stats: [
    {
      "label": "Precision’s September financing",
      "value": "$250M Series D; valuation undisclosed"
    },
    {
      "label": "Xaira’s antibody-design disclosure",
      "value": "Two company-reported preclinical case studies"
    },
    {
      "label": "BioAge’s near-term test",
      "value": "hsCRP dose response, not cardiovascular events"
    },
    {
      "label": "Inceptive’s partner validation",
      "value": "$30M upfront consideration from Alnylam"
    }
  ],
  body: [
    "In September I organised the thesis around who pays for healthcare software. I still think that is a useful question. It is too narrow for the companies I most want to understand, which are trying to make a new treatment possible rather than sell a tool inside an existing workflow.",
    "The working idea now is that the valuable step is often the one after the impressive demonstration. Can a designed molecule survive development? Can a device be manufactured, placed safely and used long enough to matter? Can the company keep funding the work until someone will pay for the result? I find that space more interesting than another comparison of model benchmarks, partly because it connects the science to a business I can try to reason about.",
    "The recent disclosures give me reasons to keep looking, not a reason to declare the field solved. Xaira has shown two antibody-design case studies. Precision has raised more capital and published a much larger recording footprint. Each makes a company easier to investigate. Neither settles the eventual clinical outcome.",
    "My preference is private biotech, medtech and life sciences, but that is a research preference rather than a rule about what can work. BioAge stays because public trial designs let me check my own reasoning. Software can still belong when the evidence on adoption, retention and payment is better than the story. I want this collection to show the quality of the questions and how the answers change, not how consistently I can defend a category."
  ],
  pillars: [
    {
      "label": "Wet-lab results should change the case before model scores do",
      "body": "I give more weight to a designed molecule tested against relevant controls than to a benchmark alone. Xaira’s disclosure helps, but company-selected examples are still a limited test. Inceptive’s paid partnership tells me a qualified buyer values the capability; it does not tell me a medicine will work.",
      "test": "Independent replication, disclosed development economics or repeated clinical failures could change the relative weight I put on model capability and experimental evidence."
    },
    {
      "label": "In medtech, durability and delivery are part of the product",
      "body": "The BCI question is not settled by electrode count. I want to know how the signal holds up, which clinicians can place the device, what manufacturing costs and whether payment supports a service. Precision and Synchron let me follow different routes through that problem without pretending either route has won.",
      "test": "Long-term home use with reproducible functional benefit, acceptable safety and a workable payment path would matter more than another recording demonstration."
    },
    {
      "label": "Read the endpoint before interpreting the result",
      "body": "BioAge exposed a mistake in my own work. I described a biomarker study as if it could answer a cardiovascular outcomes question. A positive result is only useful relative to the trial that produced it. I need to carry that discipline into lupus, RNA design and neural interfaces as well.",
      "test": "A surrogate reliably predicting patient benefit across independent trials would justify more confidence in it. Until then I will keep the two claims separate."
    },
    {
      "label": "Runway and value capture belong in the scientific case",
      "body": "I want to ask early who owns the eventual asset, who funds the next experiment and who receives the upside. Turn Bio and EvolutionaryScale stay visible as past cases. I can learn from their direction of travel without inventing investor returns that were never disclosed.",
      "test": "Licensing businesses repeatedly producing durable revenue and attractive returns without owning therapeutic assets would make me less insistent on asset ownership."
    }
  ],
  whereIAmUnsure:
    "I am still more comfortable reading an experiment than pricing its commercial value. The preference for biotech and devices could be partly taste: I find the mechanisms interesting, which is not a reason they are good investments. The next useful step is to compare the cases against alternatives and entry price, including businesses I find less exciting.",
  lastUpdated: "October 13, 2026",

  sources: [
    {
      "title": "De Novo Design of Progressable Antibodies to Therapeutic Targets",
      "publisher": "Xaira Therapeutics",
      "url": "https://www.xaira.com/news/de-novo-design-of-progressable-antibodies-to-therapeutic-targets",
      "publishedAt": "October 2, 2026"
    },
    {
      "title": "Precision closes $250M Series D",
      "publisher": "Precision Neuroscience / GlobeNewswire",
      "url": "https://www.globenewswire.com/news-release/2026/09/24/3368254/0/en/precision-neuroscience-closes-oversubscribed-250m-series-d-led-by-pershing-square-inc-the-ackman-oxman-institute-and-a-leading-life-sciences-investment-fund.html",
      "publishedAt": "September 24, 2026"
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
    },
    {
      "title": "Alnylam and Inceptive collaboration terms",
      "publisher": "Alnylam",
      "url": "https://investors.alnylam.com/press-release?id=12c82628-531a-443b-b21b-26cc5b51230b",
      "publishedAt": "June 3, 2026"
    }
  ],
};

// ─── Companies ───────────────────────────────────────────────────────────────

export const COMPANIES: Company[] = [
  // ── OpenEvidence ───────────────────────────────────────────────────────────
  {
    id: 'openevidence',
    name: 'OpenEvidence',
    what:
      'A free clinical search tool that answers doctors\' questions using medical literature it licenses directly from NEJM and JAMA.',
    followingSince: 'Following since early 2025',
    snapshot: [
      {
        "label": "Sector",
        "value": "Clinical decision support"
      },
      {
        "label": "Stage",
        "value": "Growth round, September 2026"
      },
      {
        "label": "Founded",
        "value": "2022"
      },
      {
        "label": "Headquarters",
        "value": "Cambridge, MA"
      },
      {
        "label": "Total raised",
        "value": "Nearly $1B, reported September 2026"
      },
      {
        "label": "Last round",
        "value": "$250M at $15B, CEO-confirmed to Becker’s September 28, 2026"
      },
      {
        "label": "Lead investors",
        "value": "a16z and Byers Capital (September round); earlier backers include Thrive, DST, GV and Sequoia"
      },
      {
        "label": "Revenue",
        "value": "~$300M annualised, July 2026 estimate from Sacra; reported ~90% gross margin"
      }
    ],
    summary:
      "The strongest adoption story in this collection, and still a business whose economics I want to understand better. Verified clinicians receive literature-backed answers without paying for access. Sacra estimates a roughly $300 million annualised revenue run rate in July 2026; it is not audited revenue. September’s completed financing puts the reported valuation at $15 billion. I like the habit being built, but advertising concentration and entry price remain open questions.",
    problem:
      'Medical knowledge doubles faster than any clinician can read, and the moment of need is not a moment with time in it. A physician sees a patient with an unusual drug interaction or an atypical presentation, and needs an answer during the visit. The realistic alternatives are recalling something from training, asking whoever is nearby, or using a general search engine that surfaces content optimised for consumers rather than clinicians. UpToDate exists and is good, but it is a subscription product with editorial lag, and it answers the question someone anticipated rather than the one being asked.',
    product:
      'A search interface that takes a clinical question in natural language and returns a synthesised answer with inline citations to primary literature. The distinguishing feature is not the model, it is the corpus. OpenEvidence signed multi-year content agreements with NEJM Group in February 2025 and the JAMA Network in June 2025, giving it licensed full text of the journals US physicians actually trust rather than abstracts scraped from PubMed. DeepConsult, launched July 2025, extends this into an agent that cross-references studies autonomously rather than answering one question at a time. Access is free to verified clinicians and monetised through pharma advertising.',
    whyNow:
      'Two things converged. Language models got good enough to synthesise medical literature reliably around 2023, and the journals became willing to license. The second is the harder and more recent condition. Publishers spent two decades treating AI as a threat to their subscription businesses; the shift to seeing it as a distribution channel is what makes this company possible now and not in 2019. There is also a bleaker driver: physician time per patient keeps compressing, so anything that resolves a question in seconds rather than minutes gets adopted without a procurement process.',
    market:
      "The market begins with clinicians using literature at the point of care and pharma advertisers paying to reach them. Becker’s reports that more than half of US physicians use the platform regularly; regular use is not the same metric as daily active use. I want revenue per active clinician, advertiser concentration and renewal behaviour before treating registrations as a commercial moat.",
    traction: [
      {
        "label": "Revenue",
        "value": "~$300M annualised in July 2026, estimated by Sacra",
        "read": "The growth matters, but this is an estimate of a run rate, not audited annual revenue. I should not have treated the margin as impossible to fake."
      },
      {
        "label": "Consultations",
        "value": "~20M per month (Jan 2026), against ~3M a year earlier",
        "read": "These are earlier reported volume figures, not evidence that every query happened inside a live visit. On March 10 2026 it reportedly handled a million in twenty-four hours. The new study cannot establish visit setting."
      },
      {
        "label": "Earlier adoption claim, not a current metric",
        "value": "Earlier claim: 757,000+ verified clinicians, 40%+ of US physicians daily",
        "read": "I have not established a matched measurement date for this earlier figure. The daily-use claim should not be treated as verified by the monthly data below."
      },
      {
        "label": "New registrations",
        "value": "~65,000 verified clinicians per month",
        "read": "Still adding at a rate that implies it has not saturated, which matters because the US ceiling is around a million."
      },
      {
        "label": "Valuation path",
        "value": "$12B in January 2026; $15B in September 2026",
        "read": "The CEO confirmed the new $250M financing to Becker’s. The older $20B report was a proposed mark, not the completed round."
      },
      {
        label: 'Northwestern deployment',
        value: 'Epic access live October 8; announced October 12, 2026',
        read: 'Hospital credentials now open the tool to physicians, nurses, pharmacists and other clinical staff. I read this as distribution progress; the announcement gives no contract value or patient-outcome results.',
      },
      {
        "label": "Johns Hopkins collaboration",
        "value": "Education and clinical AI development announced October 13, 2026",
        "read": "The partners describe planned work combining evidence and patient history. The release gives no commercial terms or patient-outcome results."
      },
      {
        "label": "Defined usage and retention",
        "value": "703,265 monthly active users in June 2026; ~90% monthly retention in 2026",
        "read": "Active means at least one query in a month, not daily use. Retention means another query the next month, not an advertiser renewal."
      },
    ],
    competition:
      "UpToDate is the incumbent, owned by Wolters Kluwer, subscription-based and editorially curated. General models are another alternative, though access to medical sources and clinical workflows varies. I can no longer put Abridge in a separate documentation category: it offers chart-connected clinical intelligence across its partner systems. Northwestern’s OpenEvidence deployment gives me a concrete example on the other side of that overlap. I want to compare source access, patient context and repeat use. The journal licences and the usage habit still matter, but I need to check their terms rather than assume exclusivity. Suki's October 8 Ask launch embeds UpToDate Expert AI in its clinical app, giving me another product to compare on source access and patient context. Nabla's October 15 integration distributes OpenEvidence inside its ambient workflow. A vendor can be a partner in one layer and a competitor in another.",
    team:
      'Co-founded in 2022 by Daniel Nadler and Zachary Ziegler. Nadler holds a PhD from Harvard and previously founded Kensho Technologies, which S&P Global acquired in 2018, so this is a second-time founder who has already built and sold a data business into a regulated industry. Ziegler is CTO, an ML researcher out of Alexander Rush\'s NLP lab at Harvard. Both cite personal medical experiences as motivation, which I mention because it is consistent with a company that chose to give the product away to clinicians rather than charge them.',
    risks: [
      {
        "risk": "A $15B entry price on an estimated $300M annualised run rate is roughly 50x. Estimates, ad-budget exposure and entry price all matter.",
        "mitigant": "Rapid adoption is encouraging, but it is not a substitute for audited revenue and retention."
      },
      {
        "risk": "Revenue is pharma advertising inside a clinical decision tool, which is a structural conflict a regulator will eventually examine.",
        "mitigant": "The advertising market for physicians is long-established and heavily regulated already, so there is precedent to build against rather than a blank sheet."
      },
      {
        "risk": "Ad spend is cyclical and concentrated among a small number of pharma buyers. This is the risk I now weight most, because Doximity grew 13 percent last fiscal year and guided to 4 percent this one, telling investors that HCP digital pharma demand is soft.",
        "mitigant": "There is not much of one yet. A slow-growing comparable makes share-taking plausible, but the buyers, budgets and market definitions need to be checked before attributing growth to a specific incumbent."
      },
      {
        "risk": "General models improve fast and could make synthesis a commodity.",
        "mitigant": "The journal licences are contractual rather than technical, so a better model does not by itself get you the corpus."
      }
    ],
    diligence: [
      'How is the advertising layer structurally separated from the answer layer? Not the policy, the architecture. Can a sponsor influence which evidence surfaces, and who audits that?',
      'What is revenue per active physician, and how concentrated is it across pharma advertisers? A handful of large sponsors would change the risk profile substantially.',
      'What are the actual terms and durations of the NEJM and JAMA agreements, and are they exclusive?',
      "What does weekly active use look like against the 757,000 registration figure? Registrations and habits are different assets. The October 15 JAMA paper supplies monthly use and retention, but not weekly activity.",
      'What are the commercial terms of enterprise deployments such as Northwestern: who pays, what is priced, and does the arrangement diversify revenue beyond advertising?',
      "Which tools emerge from the Johns Hopkins collaboration, and how will their effects on clinical decisions and patient outcomes be evaluated?",
    ],
    changeMyMind: [
      'Any regulatory action or credible journalism on advertiser influence over clinical answers.',
      'A journal declining to renew, or signing a competing exclusive.',
      'Consultation growth flattening well below the roughly one million US physician ceiling.',
      'Disclosure that revenue depends on a small number of advertisers.',
    ],
    view:
      "My view as of October 2026 is still favourable, but the September round changes the entry question. At $15 billion against Sacra’s estimated $300 million annualised revenue, the rough multiple is 50 times, before asking what revenue will actually be earned over a year. The Doximity comparison makes me cautious about the advertising budget; it does not prove OpenEvidence took its growth specifically from Doximity. Northwestern’s Epic deployment strengthens the distribution case and extends access beyond physicians. It does not disclose a new revenue stream. JAMA now adds defined monthly usage retention. I still want advertiser concentration, enterprise terms and commercial retention.",

    lastReviewed: "October 15, 2026",
    sources: [
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
      },
      {
        title: 'OpenEvidence and Northwestern integrate clinical evidence into the EHR',
        publisher: 'Northwestern Medicine',
        url: 'https://news.nm.org/openevidence-and-northwestern-medicine-launch-collaboration-to-integrate-clinical-evidence-into-the-ehr/',
        publishedAt: 'October 12, 2026',
      },
      {
        title: 'Abridge extends chart-connected clinical intelligence to partner systems',
        publisher: 'Abridge',
        url: 'https://www.abridge.com/press-release/context-aware-clinical-intelligence-extended-to-all-partners',
        publishedAt: 'August 17, 2026',
      },
      {
        "title": "OpenEvidence and Johns Hopkins Medicine announce education and clinical AI collaboration",
        "publisher": "Johns Hopkins Medicine",
        "url": "https://www.hopkinsmedicine.org/news/newsroom/news-releases/2026/10/openevidence-and-johns-hopkins-medicine-announce-landmark-collaboration-to-design-the-future-of-medicine-and-medical-education-in-the-age-of-ai",
        "publishedAt": "October 13, 2026"
      },
      {
        "title": "Suki launches Ask with UpToDate Expert AI",
        "publisher": "Suki",
        "url": "https://www.suki.ai/press-releases/suki-launches-ask-accelerating-complex-clinical-decision-support-powered-by-wolters-kluwer-up-to-date-expert-ai/",
        "publishedAt": "October 8, 2026"
      },
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
      },
      {
        "title": "Nabla integrates with OpenEvidence",
        "publisher": "Nabla",
        "url": "https://www.nabla.com/press-release/nabla-integrates-with-openevidence-to-deliver-clinical-evidence-at-the-point-of-care",
        "publishedAt": "October 15, 2026"
      },
    ],
  },

  // ── Abridge ────────────────────────────────────────────────────────────────
  {
    id: 'abridge',
    name: 'Abridge',
    what:
      'Listens to a doctor and patient talking, writes the clinical note, turns it into billing codes, and now helps pharma find patients for clinical trials.',
    followingSince: 'Following since early 2024',
    snapshot: [
      { label: 'Sector', value: 'Clinical workflow AI' },
      { label: 'Stage', value: 'Series E extension' },
      { label: 'Founded', value: '2018' },
      { label: 'Headquarters', value: 'Pittsburgh, PA' },
      { label: 'Total raised', value: '~$830M, reported June 2026' },
      { label: 'Last round', value: 'Series E extended to $316M, reported April 2026; $5.3B reported valuation' },
      { label: 'Lead investors', value: 'a16z, Khosla, NVentures, Lightspeed, Bessemer, Eli Lilly' },
      { label: 'Deployment', value: '300+ health systems, 100M+ conversations/year' },
    ],
    summary:
      'The transcription was never the business. Note-taking commoditised fast and the pricing proves it, with Nabla selling a competent scribe at $119 per physician per month against Nuance DAX in the four to six hundred range. What Abridge is actually building is the layer converting a conversation into a claim, which is a compliance problem rather than an AI problem and therefore favours incumbency. Since June it is also something else: Lilly took equity to use the platform for trial screening, which is a pharma services business Epic has no position to compete in.',
    problem:
      'Electronic records digitised clinical work and moved an enormous documentation burden onto clinicians, who now spend a substantial share of every encounter typing rather than looking at the patient. That is the problem everyone talks about. The larger and less discussed one sits downstream: hospitals lose significant revenue to under-coding and claim denials because the documentation does not capture what justifies the billing, and they employ expensive human reviewers to chase physicians for the missing detail.',
    product:
      "Ambient capture of the clinical conversation, generating a structured note inside the EHR workflow. On top of that, code generation that maps the conversation to ICD-10 and CPT codes intended to survive a payer audit. Another layer, announced June 11 2026, is trial screening: identifying patients eligible for clinical studies from conversations already happening, sold to pharma rather than to hospitals. NVIDIA is separately co-developing a foundation model trained on clinical conversation. Its October 13 account describes Assistant, available since the September release even to non-documentation users at partner systems: chart-cited answers, guidelines and clinician-reviewed drafts.",
    whyNow:
      'Speech recognition on messy multi-speaker clinical audio became reliable around 2023, which opened the category. What makes 2026 the interesting moment is different: health system margins are thin enough that a documentation product has to justify itself financially rather than on physician satisfaction, which pushes every serious company toward the revenue cycle. Abridge got there with more scale than anyone else, and the accumulated denial data compounds.',
    market:
      'US revenue cycle management is roughly a $90 billion market, currently staffed by people. That is the near-term expansion. The Lilly arrangement points at something structurally better: clinical trial recruitment, where most studies miss enrolment targets and every month of delay consumes patent life on the eventual product. Pharma has wanted a way to find eligible patients at the point of care for decades and has never had one. Margins on a data and services relationship with pharma are considerably better than on hospital software.',
    traction: [
      {
        "label": "Health systems live",
        "value": "300+",
        "read": "Enterprise healthcare sales cycles run twelve to eighteen months, so this represents years of accumulated distribution that a new entrant cannot short-circuit."
      },
      {
        "label": "Clinical conversations",
        "value": "100M+ per year",
        "read": "Volume is a technical asset here, not just a commercial one. Coding accuracy improves with denial data at scale."
      },
      {
        "label": "Capital and valuation",
        "value": "~$830M raised, reported June 2026; $5.3B reported valuation",
        "read": "The April 2026 extension came at an unchanged mark. I read that as discipline rather than weakness, but flat after a year of doubling is information."
      },
      {
        "label": "Best in KLAS",
        "value": "Ambient AI, 2025 and 2026",
        "read": "KLAS surveys the hospitals paying the bills, which makes it one of very few third-party signals in a category where everyone publishes their own accuracy numbers."
      },
      {
        "label": "Strategic capital",
        "value": "NVIDIA and Eli Lilly, June 2026",
        "read": "Lilly taking equity tied to trial screening is a customer validating a business line by investing in it, which is a stronger signal than a commercial contract."
      },
      {
        "label": "Pre-bill review",
        "value": "Announced September 14, 2026",
        "read": "A concrete extension into CDI and coding. Human teams keep control over claim decisions; the announcement does not establish net new RCM revenue."
      },
      {
        label: 'University of Texas System',
        value: 'Enterprise-wide access agreement, October 8, 2026',
        read: 'The framework preserves local institutional decisions. The pilot covered five locations and more than 50 specialties; I would not count every eligible institution as a completed deployment.',
      }
    ],
    competition:
      "Epic ships its own note-drafting tool and controls somewhere around 42 percent of US hospital EHR installs, which I treated as the central threat for most of a year. I have revised that. In August 2025 Epic admitted Ambience into its Toolbox program and distributes it through Haiku, which suggests Epic sees documentation as a category where needs vary too much to service directly. Microsoft Nuance DAX is the scaled incumbent, Ambience the closest direct competitor, Nabla the price disruptor. Defensibility rests on the coding layer, where switching costs are real because a coding error is a False Claims Act exposure and the software line is a rounding error next to it. Suki announced $90 million in financing on October 13; its Ask product also adds clinical reasoning through UpToDate Expert AI. I want account-level retention and competitive outcomes before judging the effect on Abridge. Nabla now embeds OpenEvidence, so I also need to compare an integrated assistant with an ambient product using an external evidence partner.",
    team:
      'Founded in 2018 by Shiv Rao, a cardiologist who still practises at UPMC and previously ran UPMC\'s innovation and venture arm. That combination is unusually well suited to this company: he understands the clinical workflow from inside it and knew how to get a health system to pilot and then invest. UPMC backed it early and expanded the partnership across its network. Founder credibility with physician buyers is a real asset in a category where clinicians decide adoption.',
    risks: [
      {
        risk: 'Epic\'s native scribe compresses pricing in the mid-market even if it never wins academic centres.',
        mitigant:
          'Epic distributing Ambience suggests a platform posture rather than a displacement one, and Abridge competes on specialty depth Epic finds uninteresting.',
      },
      {
        risk: 'Payer audit exposure on AI-generated codes. One publicised clawback at a marquee customer would reprice the category.',
        mitigant:
          'Scale means more denial data and better calibration than a smaller competitor, and the product supports human review rather than replacing it.',
      },
      {
        risk: 'At $5.3B on an estimated $200M to $300M of revenue, much of the RCM expansion is already in the price.',
        mitigant:
          'The flat April round suggests the company is not pushing the mark, and the pharma line is upside not currently reflected.',
      },
      {
        risk: 'Using clinical conversation for trial recruitment runs into patient consent questions nobody has litigated.',
        mitigant:
          'Structuring as de-identified screening with site-level consent is a known pathway, though it has not been tested at this scale.',
      },
    ],
    diligence: [
      'What is coding and revenue cycle revenue as distinct from scribe revenue? The entire thesis rests on the second being durable and I am inferring its size.',
      'What are the economics of the Lilly arrangement? Per-patient fee, milestone, or equity only? And is it exclusive to Lilly?',
      'What is net revenue retention within existing health systems, and how much comes from seat expansion versus new modules?',
      'What is the cost of deployment per health system, and is it falling with scale or fixed?',
      'Who owns the models and outputs from the NVIDIA collaboration?',
      'What is the consent architecture for trial screening, and has any health system legal team refused it?',
      "What share of clinicians with Assistant access use it repeatedly, and what does it earn separately from documentation?",
    ],
    changeMyMind: [
      'A major health system publicly switching from Abridge to Epic\'s native tool.',
      'Any large publicised payer clawback tied to AI-generated coding.',
      'The Lilly relationship lapsing without a second pharma partner.',
      'An S-1 revealing that coding revenue is a much smaller share than I have assumed.',
    ],
    view:
      "My view as of October 2026 is that pre-bill review makes the coding thesis more concrete. The VA enterprise contract is another distribution route, but its $775.72 million ceiling is shared across vendors and is not booked Abridge revenue. The October 8 UT System agreement creates another route to expansion while leaving local institutions in control. I want to know how many turn access into sustained use, and what the modules earn. More places to deploy a product and a better product are both useful; neither settles what I should pay for the company.",

    lastReviewed: "October 15, 2026",
    sources: [
      {
        "title": "Pre-bill review for CDI and coding teams",
        "publisher": "Abridge",
        "url": "https://www.abridge.com/press-release/pre-bill-review-for-cdi-and-coding-teams",
        "publishedAt": "September 14, 2026"
      },
      {
        "title": "Abridge selected for VA enterprise contract",
        "publisher": "Abridge",
        "url": "https://www.abridge.com/press-release/va-enterprise-contract",
        "publishedAt": "September 22, 2026"
      },
      {
        "title": "2026 Best in KLAS for Ambient AI",
        "publisher": "Abridge",
        "url": "https://www.abridge.com/press-release/best-in-klas-2026-press",
        "publishedAt": "February 4, 2026"
      },
      {
        "title": "Abridge platform expansion and reported financing history",
        "publisher": "MobiHealthNews",
        "url": "https://www.mobihealthnews.com/news/abridge-partners-nvidia-expands-beyond-clinical-documentation",
        "publishedAt": "June 12, 2026"
      },
      {
        title: 'Abridge announces enterprise-wide agreement with the UT System',
        publisher: 'Abridge',
        url: 'https://www.abridge.com/press-release/ut-health-enterprise-wide',
        publishedAt: 'October 8, 2026',
      },
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
      },
      {
        "title": "Meet the AI Assistant for Healthcare",
        "publisher": "Abridge",
        "url": "https://www.abridge.com/blog/abridge-assistant-is-the-ai-assistant-for-healthcare",
        "publishedAt": "October 13, 2026"
      },
      {
        "title": "Nabla integrates with OpenEvidence",
        "publisher": "Nabla",
        "url": "https://www.nabla.com/press-release/nabla-integrates-with-openevidence-to-deliver-clinical-evidence-at-the-point-of-care",
        "publishedAt": "October 15, 2026"
      },
    ],
  },

  // ── Isomorphic Labs ────────────────────────────────────────────────────────
  {
    id: 'isomorphic-labs',
    name: 'Isomorphic Labs',
    what:
      'The DeepMind spinout trying to turn AlphaFold-style structure prediction into actual drugs, with 17 programs across cancer and immune disease.',
    followingSince: 'Following since 2024',
    snapshot: [
      { label: 'Sector', value: 'AI drug discovery' },
      { label: 'Stage', value: 'Series B' },
      { label: 'Founded', value: '2021, Alphabet spinout' },
      { label: 'Headquarters', value: 'London, UK' },
      { label: 'Total raised', value: '$2.7B outside capital' },
      { label: 'Last round', value: '$2.1B, May 12 2026, Thrive Capital' },
      { label: 'Other investors', value: 'Alphabet, GV, MGX, Temasek, CapitalG, UK Sovereign AI Fund' },
      { label: 'Valuation', value: 'Completed rounds undisclosed; Oct 8 talks reportedly target $40B–$50B' },
    ],
    summary:
      'The company whose outcome I care most about and where I have the least ability to check anything independently. The bet is that predicting how a molecule and a protein fit together accurately enough lets you skip a large share of the trial and error that makes drug discovery cost billions and take fifteen years. Everything about the science says this should work. Nothing yet says it does, because as of August 2026 Isomorphic has not put a molecule into a person, and the timeline for doing so has already moved by a year.',
    problem:
      'A new drug takes roughly a decade and costs on the order of two billion dollars, and around nine in ten candidates that clear animal safety still fail in humans. A large share of that cost is spent finding and optimising molecules that bind a target well, which is done through medicinal chemistry cycles that are slow, expensive and substantially trial and error. If binding could be predicted rather than discovered, the front half of that pipeline compresses dramatically.',
    product:
      'A drug design engine descended from AlphaFold, predicting protein and small-molecule structures and their interactions, used to generate and prioritise candidates internally rather than sold as software. Seventeen programs are running, weighted to oncology and immunology. The company retains ownership of its internal pipeline and runs co-development arrangements with Eli Lilly and Novartis alongside it.',
    whyNow:
      'AlphaFold 2 solved structure prediction for single proteins in 2020 and AlphaFold 3 extended it to complexes with small molecules and nucleic acids. That capability is only about three years old at production quality. The reason to fund this now rather than later is that the compute and talent required are concentrated in very few places, and Alphabet is one of them.',
    market:
      "Global pharmaceutical R&D spend is well over $200 billion annually, and the addressable value is not software licences but ownership of drugs. A single approved oncology asset can produce billions in annual revenue. That is why the business model shifted toward holding internal programs rather than licensing the engine: a licensing business captures value differently from one that owns drugs. EvolutionaryScale made me ask that question, but its move to Biohub does not establish what investors received.",
    traction: [
      {
        label: 'Molecules in humans',
        value: "No dosing announcement located",
        read: "I have not located a patient-dosing announcement in the material reviewed. First trials are now targeted for the end of 2026, revised at Davos in January from an end-2025 target.",
      },
      {
        label: 'Capital raised',
        value: '$2.7B across two rounds in ~14 months',
        read: 'The May round was the second largest in biotech history, closed four months after the company publicly pushed back its lead program. That is a strong statement about what investors saw in diligence.',
      },
      {
        label: 'Pharma milestones committed',
        value: '~$3B across Eli Lilly and Novartis',
        read: 'Milestone-heavy structures are cheap to sign and mostly never pay past the first tranche. I read this as credibility, not expected revenue.',
      },
      {
        label: 'Programs',
        value: '17, oncology and immunology weighted',
        read: 'Company president Colin Murdoch has described plans to scale to hundreds. Seventeen is a real portfolio; the question is whether any of them is close.',
      },
      {
        label: 'Valuation',
        value: 'Reported $40B–$50B target in new talks, October 8, 2026',
        read: 'SiliconANGLE cites Bloomberg on early discussions, with no deal size disclosed. The completed capital total stays at $2.7 billion. I cannot use a proposed mark as the price of a completed round.',
      },
    ],
    competition:
      "Insilico Medicine is the most instructive comparison, because it raises far less, attracts far less attention, and got an AI-designed molecule into a human in June 2026 before Isomorphic did. Recursion and Schrodinger occupy adjacent positions with more disclosure. The larger competitive question is whether large pharma simply builds this internally, and the January 2026 NVIDIA and Lilly co-innovation lab, worth up to $1 billion, is evidence that at least one of them intends to try. Isomorphic's durable advantage is Alphabet compute and DeepMind talent density, which is real and which also means the moat partly belongs to the parent. Recursion's October 15 Sanofi option triggered a $10 million milestone payment, with Phase 1 planned for 2027. I can compare that paid candidate handoff with Isomorphic's progress without assuming the platforms or molecules are equivalent. Iambic priced a $150 million gross IPO on October 14 and recorded completion on October 16. It gives me a clinical-stage public comparison to examine through its disclosures, without equating the amount raised with a valuation or the two platforms with one another.",
    team:
      "Founded and led by Demis Hassabis, who also runs Google DeepMind and shared the 2024 Nobel Prize in Chemistry for AlphaFold. Colin Murdoch was an early business leader. Max Jaderberg moved from Chief AI Officer to President effective January 1 2026. Ben Wolf was appointed Chief Medical Officer in June 2025. I missed that when I described the clinical bench as invisible. The question is now how that team translates the computational work, not whether the company has hired a CMO.",
    risks: [
      {
        risk: 'A second timeline slip. One delay is normal, two starts to look like a pattern.',
        mitigant:
          'Preclinical work for first-in-class molecules routinely slips, and a year is small by pharma standards.',
      },
      {
        risk: 'Structure prediction has no advantage in Phase 1, which tests safety and pharmacokinetics.',
        mitigant:
          'Seventeen programs mean the company is not dependent on a single molecule surviving, though the first readout will set sentiment for all of them.',
      },
      {
        risk: 'A reported $40B–$50B target could price in clinical success before human data.',
        mitigant:
          'These are talks, not terms of a completed financing. I need the actual price and the evidence offered to support it.',
      },
      {
        risk: 'Dependence on Alphabet for compute means a strategic decision elsewhere could change the cost base.',
        mitigant:
          'Alphabet remains an investor across both rounds, which aligns the incentive at least for now.',
      },
    ],
    diligence: [
      "What is the actual status of the lead program? IND-enabling toxicology complete, or still in optimisation? The public statements do not distinguish.",
      "What does the company pay Alphabet for compute, and on what terms? This is the single largest unknown in the cost structure.",
      "How are the Lilly and Novartis milestones structured, and how much has been earned to date rather than committed?",
      "Who owns IP generated jointly under the pharma collaborations?",
      "What is the internal attrition rate from computational candidate to development candidate? That number would tell you more about the platform than any benchmark.",
      "How is Ben Wolf’s clinical organisation staffed, and what decisions does it control as the first programs approach human testing?"
    ],
    changeMyMind: [
      'First patient dosed before the end of 2026, which would restore the timeline claim.',
      'A second slip announced without a specific technical explanation.',
      'A Phase 1 liver or cardiac safety signal, which would reprice the entire category and not just this company.',
      'Two or three additional INDs cleared, which would turn one anecdote into a platform.',
    ],
    view:
      "My view as of October 2026 is that I still want to follow this through its first human data. The October 7 Virtual Biology Initiative is a useful commitment to shared biological data, not a patient-dosing milestone. I also corrected my own blind spot on the CMO appointment. I have not located a first-patient announcement in the material reviewed, which is narrower than knowing that nobody has been dosed. The end-2026 promise remains the thing to score. The reported $40B–$50B fundraising target makes the entry question harder; I am keeping it labelled as talks, with no addition to capital raised.",

    lastReviewed: "October 18, 2026",
    sources: [
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
      },
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
      },
      {
        "title": "Building a new path to make medicines with AI",
        "publisher": "Isomorphic Labs",
        "url": "https://www.isomorphiclabs.com/articles/building-a-new-path-to-make-medicines-with-ai",
        "publishedAt": "September 29, 2026"
      },
      {
        title: 'Isomorphic reportedly in early fundraising talks at a $40B–$50B valuation',
        publisher: 'SiliconANGLE, citing Bloomberg',
        url: 'https://siliconangle.com/2026/10/08/alphabet-spinoff-isomorphic-labs-reportedly-raising-funding-at-up-to-50b-valuation/',
        publishedAt: 'October 8, 2026',
      },
      {
        "title": "Sanofi options first development candidate from Recursion collaboration",
        "publisher": "Recursion",
        "url": "https://recursion.gcs-web.com/news-releases/news-release-details/recursion-announces-sanofi-options-potential-first-class",
        "publishedAt": "October 15, 2026"
      },
    ],
  },

  // ── Synchron ───────────────────────────────────────────────────────────────
  {
    id: 'synchron',
    name: 'Synchron',
    what:
      'A brain-computer interface that reaches the brain through a blood vessel instead of through the skull, so someone with paralysis can control a phone without open brain surgery.',
    followingSince: 'Following since late 2024',
    snapshot: [
      {
        "label": "Sector",
        "value": "Neurotechnology, implantable BCI"
      },
      {
        "label": "Stage",
        "value": "Series D"
      },
      {
        "label": "Founded",
        "value": "2016"
      },
      {
        "label": "Headquarters",
        "value": "New York, NY"
      },
      {
        "label": "Total raised",
        "value": "$345M"
      },
      {
        "label": "Last round",
        "value": "$200M, November 6 2025, Double Point Ventures"
      },
      {
        "label": "Other investors",
        "value": "ARCH, Khosla, Bezos Expeditions, QIA, IQT, Australian NRF"
      },
      {
        "label": "Clinical status",
        "value": "Investigational; INTENT registry lists recruiting early feasibility, not a pivotal study"
      }
    ],
    summary:
      'Most argument about brain-computer interfaces is about electrode count. I think that is the wrong axis. The binding constraint is how many hospitals can perform the procedure and whether anyone will pay for it. Synchron threads a stent with electrodes up the jugular vein into a vessel running above the motor cortex and reads through the vessel wall, which means an interventional neuroradiologist can place it in a cath lab using skills they already have. That makes it the most likely device to be approved, reimbursed and actually used, despite having sixteen electrodes against a thousand-plus for competitors.',
    problem:
      'People with severe paralysis from ALS, stroke or spinal cord injury lose the ability to operate the devices that would otherwise let them communicate and control their environment. Existing assistive technology depends on residual movement or eye tracking, both of which degrade as disease progresses. Implanted interfaces that read motor intent directly solve this, and the reason they have not reached patients is that the ones with good signal require opening the skull.',
    product:
      'The Stentrode is a nitinol stent with sixteen platinum-iridium electrodes, delivered through the jugular vein into the superior sagittal sinus, a large venous channel running along the top of the brain directly above motor cortex. It expands, endothelium grows over it, and it reads motor cortex activity through a few millimetres of tissue. Signals pass to an implanted transmitter and are decoded into digital commands. Since May 2025 it integrates natively with Apple\'s BCI Human Interface Device profile, so users control iPhone, iPad and Vision Pro directly.',
    whyNow:
      "The COMMAND study reported in September 2024 that all six US participants met the twelve-month primary safety endpoint with no device-related serious adverse events and no serious vascular or brain events. That is encouraging small-cohort safety evidence, not established safety for a wider population. The INTENT record I checked on October 17 labels it early feasibility, with estimated enrolment of ten and a six-month device-related serious-adverse-event primary endpoint. I have not verified a separate pivotal study enrolling.",
    market:
      'Roughly 30,000 people in the US live with ALS at any time, with several hundred thousand more affected by severe paralysis from stroke and spinal cord injury. This is a device market with a procedure attached, so revenue depends on a reimbursement code covering both the implant and the placement. No implantable motor BCI has full FDA premarket approval yet, and analysts do not expect one before 2027 or 2028, so the commercial market currently does not exist. That cuts both ways: nothing to capture, and nothing to defend against.',
    traction: [
      {
        "label": "Patients implanted",
        "value": "10 reported in the November 2025 financing release",
        "read": "This is a dated company figure, not a reconfirmed October 2026 total. I removed the conflicting twelve-patient number."
      },
      {
        "label": "COMMAND primary endpoint",
        "value": "6 of 6 met at 12 months, no device-related SAEs",
        "read": "The first FDA-approved investigational trial of a permanently implanted BCI. Small n, but this is the actual regulatory record rather than a demo."
      },
      {
        "label": "Apple integration",
        "value": "Native BCI HID profile, May 2025",
        "read": "Underrated. Assistive technology usually fails at the software edges rather than the device, and this hands Synchron a maintained ecosystem it did not have to build."
      },
      {
        "label": "Funding",
        "value": "$345M total, $200M Series D",
        "read": "Led by Double Point rather than a marquee venture firm, which suggests the round was available rather than contested. Sovereign and strategic participation implies patient capital for a long regulatory process."
      },
      {
        "label": "Chiral foundation model",
        "value": "Unveiled March 2025 with NVIDIA",
        "read": "A decoder trained on neural data. If it extracts more from sixteen electrodes, it partially answers the channel-count objection. Ten patients is a thin training corpus."
      }
    ],
    competition:
      'Neuralink has over a thousand electrodes and roughly 21 participants implanted by early 2026, and requires a craniotomy. Precision Neuroscience puts 1,024 electrodes on a surface film through a sub-millimetre slit and holds a 510(k) clearance for thirty-day use. Paradromics and Science Corporation occupy adjacent positions. Synchron has by far the lowest surgical barrier and by far the lowest bandwidth. The bet is that the first device approved and reimbursed defines the clinical pathway, the CPT codes and the surgical training, and that this is worth more than being technically better in 2030. I hold that at roughly 65 percent.',
    team:
      'Founded in 2016 by Tom Oxley, an interventional neurologist who is CEO, with Nick Opie as founding director. The endovascular approach comes directly from Oxley\'s clinical background: the insight that you could reach the motor cortex through the venous system is the kind of thing a catheter specialist thinks of and a neurosurgeon does not. Founder-market fit here is about as tight as it gets.',
    risks: [
      {
        risk: 'No CMS reimbursement code, or one that arrives in 2030. Approval without payment is not a business.',
        mitigant:
          'The procedure uses existing catheter techniques and cath lab infrastructure, which makes coding it more tractable than a novel surgical category.',
      },
      {
        risk: 'Sixteen channels caps the addressable indication set and could strand the device in a narrow approval.',
        mitigant:
          'The Chiral decoder work is aimed exactly at this, and next-generation higher-density transcatheter arrays are in development.',
      },
      {
        risk: 'Ten patients reported in November 2025 is a small, dated safety base; later trial stages still need verification.',
        mitigant:
          'Twelve-month data is clean across all six US participants, and the mechanism avoids the parenchymal injury that drives most implant failures.',
      },
      {
        risk: 'The company is years from revenue and dependent on further financing.',
        mitigant:
          '$345M raised with sovereign participation suggests capital available for a long horizon.',
      },
    ],
    diligence: [
      'What is the reimbursement strategy, specifically? Which CPT pathway, what timeline, and has CMS been engaged? This is the largest unpriced risk and I cannot answer it.',
      'What is actual INTENT enrolment against its estimate, and what separate pivotal protocol and timetable has the FDA agreed?',
      'What does the decoder achieve today in bits per minute, and how does that compare to Neuralink and Precision on the same task?',
      'What is the durability data past 24 months, and has any device shown signal degradation?',
      'How much of the Apple integration is contractual versus a public accessibility framework anyone can build against?',
      'What is the manufacturing cost per device and the expected procedure cost to a hospital?',
    ],
    changeMyMind: [
      'Pivotal trial enrolment completing on schedule, which would put a PMA submission in view.',
      'Any concrete CMS signal on coding for implantable neural interfaces.',
      'A competitor demonstrating fluent speech decoding, which would reframe sixteen channels as transitional.',
      'A serious adverse event in the pivotal cohort, particularly anything vascular.',
    ],
    view:
      "My view as of August 2026 is that Synchron is the most likely BCI to reach patients first and the one whose ceiling I am least sure about. I also notice I find the mechanism unusually elegant, and I try to discount my own enthusiasm accordingly. On October 17 I am less comfortable with the timing argument: my August note treated a pivotal trial as running without sufficient support. I am retaining the case for its procedure, but I need a verified regulatory timetable before giving it a lead on reimbursement. The pivotal milestones remain future tests, not claims that such a cohort is enrolling.",

    lastReviewed: "October 17, 2026",
    sources: [
      {
        title: 'INTENT early-feasibility study, NCT07543367',
        publisher: 'ClinicalTrials.gov / Synchron',
        url: 'https://clinicaltrials.gov/study/NCT07543367',
        publishedAt: 'Registry last update posted May 11, 2026; checked October 17, 2026'
      },
      {
        "title": "Synchron Series D and clinical footprint",
        "publisher": "Synchron / Business Wire",
        "url": "https://www.businesswire.com/news/home/20251106150841/en/Synchron-Raises-%24200-Million-Series-D-to-Advance-Brain-Computer-Interface-Technology",
        "publishedAt": "November 6, 2025"
      },
      {
        "title": "Synchron technology and investigational status",
        "publisher": "Synchron",
        "url": "https://synchron.com/"
      }
    ],
  },

  // ── Precision Neuroscience ─────────────────────────────────────────────────
  {
    id: 'precision-neuroscience',
    name: 'Precision Neuroscience',
    what:
      'A brain interface built as a film thinner than a hair holding 1,024 electrodes, slid through a slit in the skull to rest on the surface of the brain without penetrating it.',
    followingSince: 'Following since spring 2025',
    snapshot: [
      {
        "label": "Sector",
        "value": "Neurotechnology, implantable BCI"
      },
      {
        "label": "Stage",
        "value": "Series D"
      },
      {
        "label": "Founded",
        "value": "2021"
      },
      {
        "label": "Headquarters",
        "value": "New York, NY"
      },
      {
        "label": "Total raised",
        "value": "$430M, company-reported September 2026"
      },
      {
        "label": "Valuation",
        "value": "Undisclosed in the September 2026 financing release"
      },
      {
        "label": "Investors",
        "value": "Pershing Square Inc., Ackman Oxman Institute, an undisclosed life sciences fund and others"
      },
      {
        "label": "Regulatory",
        "value": "FDA 510(k) cleared March 2025, up to 30 days"
      }
    ],
    summary:
      "Precision is the counterargument to my Synchron thesis. The surface-array approach tries to combine recording density with less tissue injury. September’s financing gives it more room to attempt that. The important distinction is between recordings made during a procedure and a chronic system someone can use at home; I should not collapse those into one measure of progress.",
    problem:
      'Same underlying problem as Synchron: restoring communication and control for people with severe paralysis. The technical framing is different. High-bandwidth decoding, particularly of speech, needs many electrodes close to the cortex. Penetrating arrays deliver that and cause localised tissue scarring that degrades signal over time. Non-invasive EEG avoids the damage and lacks the resolution. The gap between them is where Precision is operating.',
    product:
      'The Layer 7 Cortical Interface, a flexible thin-film array roughly fifty microns thick, about one fifth the thickness of a human hair, holding 1,024 microelectrodes. It is inserted through a sub-millimetre slit in the skull and conforms to the cortical surface without penetrating brain tissue. Cleared by the FDA under 510(k) in March 2025 for use up to thirty days, which permits intraoperative and short-term clinical use today. A fully wireless chronic implant is in development with first-in-human targeted for 2026.',
    whyNow:
      'The 510(k) clearance in March 2025 changed the company from a research program into a commercial one, and it is the first full regulatory clearance granted to a company developing a next-generation wireless BCI. That creates a feedback loop the rest of the field does not have: real recordings, from real patients, in ordinary clinical settings, legally, at volume, feeding the submission for the chronic device.',
    market:
      "Two markets stacked. The near-term one is intraoperative cortical mapping during neurosurgery, an existing procedure with existing reimbursement where Precision is selling a better electrode. That is a modest business and it is a business. The larger one is the same chronic paralysis market Synchron is pursuing, which does not exist commercially yet. I like the sequencing: the near-term product funds data collection toward the larger market.",
    traction: [
      {
        "label": "FDA clearance",
        "value": "510(k), cleared March 30 2025, announced April 17",
        "read": "The only cleared next-generation BCI I am aware of. Narrow, and it means data collection under a real regulatory framework while competitors work under research protocols."
      },
      {
        "label": "Electrode density",
        "value": "1,024 on a ~50 micron film",
        "read": "Roughly 64 times Synchron's channel count without penetrating tissue. If chronic stability holds, this is the strongest technical position in the field."
      },
      {
        "label": "Chronic wireless implant",
        "value": "Targeted first-in-human during 2026, not yet public",
        "read": "I have now noted the absence of this twice, in January and August. Not alarming on its own, since neurotech timelines slip as a rule, but it is the milestone I said would determine the position."
      },
      {
        "label": "Series D",
        "value": "$250M raised; $430M total, September 24, 2026",
        "read": "Runway and manufacturing capacity now matter more to my case than the old, unconfirmed valuation comparison."
      },
      {
        "label": "Neural atlas",
        "value": "70-patient dataset; total program surpassed 100 patients, October 8, 2026",
        "read": "Company-reported recordings, with a manuscript on bioRxiv. These are not 100 permanent home-use implants."
      }
    ],
    competition:
      'Neuralink is the high-bandwidth penetrating benchmark with far more capital and far more surgical risk. Synchron is the low-invasiveness endovascular alternative with far fewer channels; its verified INTENT registry record is early feasibility, so I should not describe a pivotal trial as already running. Precision sits between them and is arguably the technically best-positioned if surface arrays hold their signal chronically, which is precisely the unproven part. Blackrock Neurotech occupies the legacy research-array position. The competitive risk is timing: Synchron may define the reimbursement pathway first, but I have not established that lead.',
    team:
      "Co-founded in 2021 by Michael Mager, who is CEO and came from private equity, and Benjamin Rapoport, a neurosurgeon who was a founding member of Neuralink. Rapoport leaving Neuralink to build a non-penetrating alternative is itself an argument, and it is the single most informative fact about this company. A practising neurosurgeon who has seen the inside of both approaches chose this one. On October 15, 2026, Nevro founder and former CEO Konstantinos Alataris joined as president and Katherine Neuenfeldt as senior vice president, commercial strategies, adding implant launch and market access experience.",
    risks: [
      {
        "risk": "Chronic signal stability for a thin film in cerebrospinal fluid is unproven and is the whole question.",
        "mitigant": "Surface placement avoids the gliosis that degrades penetrating arrays, and the 30-day cleared product is generating relevant durability data."
      },
      {
        "risk": "The chronic implant milestone has slipped past mid-2026 without a public update.",
        "mitigant": "The cleared product generates revenue and data in the meantime, so the company is not idle while the timeline moves."
      },
      {
        "risk": "Surgeons must learn a new placement technique, and surgical adoption curves are slow.",
        "mitigant": "The micro-slit approach is far less demanding than a craniotomy, and intraoperative use builds familiarity before the chronic product arrives."
      },
      {
        "risk": "The new round’s valuation was not disclosed, so I cannot judge entry price against competing BCI businesses.",
        "mitigant": "More capital reduces financing pressure. It does not answer chronic durability or reimbursement."
      }
    ],
    diligence: [
      "What is the longest continuous recording from a Layer 7 array to date, and what does signal quality look like across that period?",
      "What revenue does the 510(k) product generate, and is it a real commercial line or a data-collection subsidy?",
      "What is the current status of the chronic wireless system? IDE submitted, in review, or still preclinical?",
      "How does decoding performance compare to penetrating arrays on the same speech or motor task, measured independently?",
      "What is the burn rate and runway after the $250M Series D, and how much funds chronic-device development versus manufacturing?",
      "How many neurosurgeons have been trained on micro-slit placement?",
      "How will the new commercial leadership turn clinical evidence into payer coverage for the chronic BCI, distinct from the short-term cleared array?",
    ],
    changeMyMind: [
      'First chronic wireless human implant, which is the event that determines this position.',
      'Published speech decoding data from the intraoperative dataset competitive with penetrating arrays.',
      'Evidence of signal drift or degradation in extended recordings.',
      'Synchron securing a reimbursement pathway first, which would matter more than any technical comparison.',
    ],
    view:
      "My view as of October 2026 is that the financing and atlas improve the operating case. I am still waiting for verified chronic human-use data. Surface recordings across many procedures can teach the company a great deal without demonstrating durability in a permanent implant. The distinction is what I want to keep testing.",

    lastReviewed: "October 17, 2026",
    sources: [
      {
        title: 'INTENT early-feasibility study, NCT07543367',
        publisher: 'ClinicalTrials.gov / Synchron',
        url: 'https://clinicaltrials.gov/study/NCT07543367',
        publishedAt: 'Registry last update posted May 11, 2026; checked October 17, 2026'
      },
      {
        "title": "Precision closes $250M Series D",
        "publisher": "Precision Neuroscience / GlobeNewswire",
        "url": "https://www.globenewswire.com/news-release/2026/09/24/3368254/0/en/precision-neuroscience-closes-oversubscribed-250m-series-d-led-by-pershing-square-inc-the-ackman-oxman-institute-and-a-leading-life-sciences-investment-fund.html",
        "publishedAt": "September 24, 2026"
      },
      {
        "title": "Precision releases a human nervous system atlas",
        "publisher": "Precision Neuroscience / GlobeNewswire",
        "url": "https://www.globenewswire.com/news-release/2026/10/08/3377330/0/en/precision-neuroscience-unveils-a-new-map-of-the-human-nervous-system.html",
        "publishedAt": "October 8, 2026"
      },
      {
        "title": "Precision appoints Konstantinos Alataris and Katherine Neuenfeldt",
        "publisher": "Precision Neuroscience / GlobeNewswire",
        "url": "https://www.globenewswire.com/news-release/2026/10/15/3381700/0/en/precision-neuroscience-appoints-nevro-founder-konstantinos-alataris-as-president-and-katherine-neuenfeldt-as-senior-vice-president-commercial-strategies.html",
        "publishedAt": "October 15, 2026"
      },
    ],
  },

  // ── Ambience Healthcare ────────────────────────────────────────────────────
  {
    id: 'ambience-healthcare',
    name: 'Ambience Healthcare',
    what:
      'Ambient documentation, medical coding and clinical documentation integrity sold as one product to health systems, across more than 200 specialties by the company\'s own count.',
    followingSince: 'Following since mid 2025',
    snapshot: [
      { label: 'Sector', value: 'Clinical workflow AI' },
      { label: 'Stage', value: 'Series C' },
      { label: 'Founded', value: '2020' },
      { label: 'Headquarters', value: 'San Francisco, CA' },
      { label: 'Total raised', value: '~$345M' },
      { label: 'Last round', value: '$243M at $1.25B, July 2025' },
      { label: 'Lead investors', value: 'Oak HC/FT, a16z, OpenAI Startup Fund, Kleiner Perkins, Optum Ventures' },
      { label: 'Distribution', value: 'Epic Toolbox member since August 2025' },
      { label: 'Deployment', value: '40+ health systems, including Cleveland Clinic, UCSF and Houston Methodist' },
      { label: 'Pricing model', value: 'Began offering performance-based contracts, April 2026' },
    ],
    summary:
      "The same argument as Abridge, one tier down in scale and price, with one different asset: Ambience joined Epic's Toolbox program in August 2025, so it is distributed through the EHR rather than sold around it. The CDI line interests me most, because clinical documentation integrity is a function hospitals already staff with expensive human reviewers, which makes the sales conversation arithmetic rather than persuasion. I filed this for a year as a cheaper expression of a thesis I already owned, which I now think was the wrong read. In April 2026 the company started offering contracts where part of its fee depends on the financial outcome it produces for the hospital, and that is a different kind of business from the one I thought I was following.",
    problem:
      'Hospitals lose revenue through under-coding and claim denials, and they pay clinical documentation integrity specialists to review charts and query physicians for the detail that changes reimbursement. It is slow, retrospective, and staffed by people who are expensive and hard to hire. Meanwhile the documentation burden on clinicians is the same problem Abridge addresses. Ambience is attacking both ends of one workflow.',
    product:
      'A suite covering ambient note generation, real-time code assignment for HCC, E/M, ICD-10 and CPT, and clinical documentation integrity. The Epic integration through the Ambient Module and Haiku means it appears inside the workflow clinicians already use rather than as a separate application, which removes the largest friction point in this category.',
    whyNow:
      'Two things. Health system margins have tightened to the point where documentation products must justify themselves on revenue capture rather than physician satisfaction, which favours a suite that includes coding and CDI over a pure scribe. And Epic opened Toolbox to third-party ambient vendors in 2025, which is a distribution window that did not previously exist and may not stay open.',
    market:
      'The same roughly $90 billion US revenue cycle market Abridge is pursuing, approached from the documentation integrity side rather than the ambient side. CDI specifically is a well-defined budget line inside hospitals with existing headcount attached, which makes it the easiest part of this market to sell into and the easiest to quantify.',
    traction: [
      {
        "label": "Performance-based contracts",
        "value": "The Ambience Standard, August 19, 2026",
        "read": "The company describes fees at risk against customer outcome targets. I still want contract-level economics, not just a description of the model."
      },
      {
        "label": "Funding",
        "value": "$243M Series C at $1.25B, July 2025; ~$345M total",
        "read": "Oak HC/FT leading matters. They are a healthcare services and revenue cycle specialist rather than a generalist, which is a vote on the coding thesis specifically."
      },
      {
        "label": "Epic Toolbox",
        "value": "Member since August 2025",
        "read": "The fact that most changed my read of the whole ambient category. Epic distributing a third-party ambient product implies a platform posture rather than a displacement one."
      },
      {
        "label": "Specialty coverage",
        "value": "200+, current company claim",
        "read": "I replaced the old thirty-specialty figure. Breadth is company-reported; consistent performance across that breadth is a separate question."
      },
      {
        "label": "Strategic investor",
        "value": "Optum Ventures",
        "read": "A distribution channel and a fairly clear signal about who eventually buys this company. That caps the upside and raises the floor."
      }
    ],
    competition:
      "Abridge is the direct competitor with roughly three times the capital and better name recognition. Microsoft Nuance DAX is the scaled incumbent, Suki is growing, and Epic's own AI Charting is the free default. Ambience's differentiation is the combined coding and CDI product plus Epic distribution. My honest assessment is that I cannot articulate why Ambience wins a competitive account against Abridge other than price and channel, which is a real weakness in this memo. Suki's October 13 announcement adds $90 million in financing to that competitor picture. Its UpToDate-powered Ask product also means I need to compare clinical reasoning alongside documentation and coding. Nabla's October 15 OpenEvidence integration adds an evidence partner to its ambient workflow. I want to compare clinical support as well as documentation and coding.",
    team:
      'Founded in 2020 by Mike Ng and Nikhil Buduma, who met at MIT in 2013. Buduma became CEO in September 2025, with Ng moving to President and Chairman. Buduma was previously chief scientist and wrote an early widely used deep learning textbook. A founder-to-founder CEO transition inside a company this size usually signals a shift from building the product to scaling the commercial organisation, and both founders remaining is a better sign than one leaving.',
    risks: [
      {
        "risk": "Competing directly against a better-capitalised, better-known company in the same accounts.",
        "mitigant": "Epic distribution reaches customers Abridge has to sell around, and the price point is lower."
      },
      {
        "risk": "Epic could change or close the Toolbox program, removing a channel Ambience did not build.",
        "mitigant": "The product is differentiated by CDI and specialty depth independent of channel, and direct enterprise sales continue in parallel."
      },
      {
        "risk": "Coding accuracy across 200-plus claimed specialties is harder than in primary care, and audit exposure scales with breadth.",
        "mitigant": "CDI as a product line is inherently about review and accuracy, so the company is built around the failure mode rather than exposed to it blindly."
      },
      {
        "risk": "Optum on the cap table likely means a strategic acquisition price rather than a venture outcome.",
        "mitigant": "A strategic floor is worth something in a market where the IPO window is closed to companies this size."
      }
    ],
    diligence: [
      'What is the revenue split across scribe, coding and CDI, and which line is growing fastest?',
      'What share of new customers arrive through Epic Toolbox versus direct sales?',
      'What are the terms of the Toolbox arrangement, including exclusivity, revenue share and termination rights?',
      'In head-to-head evaluations against Abridge, what is the win rate and on what basis do hospitals decide?',
      'What documented denial-rate reduction exists at named health systems, ideally audited rather than case-study?',
      'What was the reason for the September 2025 CEO transition, and how is the commercial organisation being built out?',
    ],
    changeMyMind: [
      'Published denial-rate or net revenue improvement data at a named large health system.',
      'Epic restricting or ending the Toolbox arrangement.',
      'Evidence of head-to-head wins against Abridge on product rather than price.',
      'An Optum acquisition, which would resolve this position one way or the other.',
    ],
    view:
      'My view as of September 2026 is that I had this filed as a cheaper Abridge and that was lazy. Ambience is trying to get paid out of revenue capture rather than out of the software budget, which is the specific move I argue elsewhere is the only durable one in clinical software, and it is the only company I follow actually attempting it contractually. Optum Ventures being on the cap table still makes an acquisition the likeliest ending. But the thing I want now is a signed performance contract with disclosed terms, because that would be the first hard evidence for the central claim I make on the thesis page, and its absence by mid-2027 would be evidence against it.',

    lastReviewed: "October 15, 2026",
    sources: [
      {
        "title": "The Ambience Standard and performance-based contracts",
        "publisher": "Ambience Healthcare",
        "url": "https://www.ambiencehealthcare.com/blog-legacy/ambience-healthcare-sets-a-new-standard-for-ai-partnerships-in-healthcare",
        "publishedAt": "August 19, 2026"
      },
      {
        "title": "Current platform and specialty coverage",
        "publisher": "Ambience Healthcare",
        "url": "https://www.ambiencehealthcare.com/"
      },
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
      },
      {
        "title": "Nabla integrates with OpenEvidence",
        "publisher": "Nabla",
        "url": "https://www.nabla.com/press-release/nabla-integrates-with-openevidence-to-deliver-clinical-evidence-at-the-point-of-care",
        "publishedAt": "October 15, 2026"
      },
    ],
  },

  // ── Inceptive ──────────────────────────────────────────────────────────────
  {
    id: 'inceptive',
    name: 'Inceptive',
    what:
      'Uses machine learning to design RNA molecules, training on millions of its own lab measurements of how RNA folds and how much protein it produces.',
    followingSince: 'Following since 2025',
    snapshot: [
      { label: 'Sector', value: 'AI drug discovery, RNA' },
      { label: 'Stage', value: 'Series A' },
      { label: 'Founded', value: '2021' },
      { label: 'Headquarters', value: 'Palo Alto, CA' },
      { label: 'Total raised', value: '$100M+, plus Alnylam equity' },
      { label: 'Key partnership', value: 'Alnylam, June 3 2026, $30M upfront, up to $2B milestones' },
      { label: 'Investors', value: 'a16z, NVentures, Obvious Ventures, Alnylam (strategic)' },
      { label: 'Valuation', value: 'Undisclosed' },
    ],
    summary:
      'RNA drugs have an engineering problem more than a biology problem. You can specify the protein you want a cell to make, but the molecule degrades quickly, folds in ways that suppress expression, and often needs cold storage. Inceptive treats that as an optimisation problem and trains on experimental data it generates itself. The Alnylam collaboration is the strongest third-party validation any company on this list has received, and it is the reason this moved from an interesting bet to a position I would defend.',
    problem:
      "The promise of RNA medicine is that you can encode any protein and let the body manufacture it. But RNA is fragile and its behaviour is dominated by secondary structure that is hard to predict and harder to control. Two sequences encoding the identical protein can differ enormously in stability, expression level and duration. Getting that right has been done by intuition and screening, which is slow and does not generalise.",
    product:
      'Models that generate RNA sequences optimised for stability and expression, trained on high-throughput experimental measurements produced in the company\'s own automated laboratory. This is the important structural detail: the training data is proprietary and generated in-house rather than assembled from public sources, which is what makes the position defensible as general models improve. Under the Alnylam collaboration the work covers siRNA design, modelling target messenger RNAs and exploring chemical modifications.',
    whyNow:
      'Two conditions. The transformer architecture applies well to sequence problems and RNA is a sequence problem, so the modelling side became tractable. And automated wet-lab throughput reached the point where generating millions of measurements is a capital expense rather than a research career. Neither was true five years ago. The commercial timing is set by RNAi maturing enough that a company like Alnylam has both approved products and a clear view of where design is the bottleneck.',
    market:
      'RNA therapeutics span vaccines, RNAi, and protein replacement, with the RNAi segment alone supporting multiple approved products at Alnylam. Inceptive does not capture that market directly. Its model is licensing and milestones, which means value accrues slowly and mostly to partners, and the ceiling is set by how many partnerships it can run rather than by the size of any end market. That is a real limitation and it is also why the company can be capital efficient relative to a company carrying its own clinical programs.',
    traction: [
      {
        label: 'Alnylam collaboration',
        value: '$30M upfront in cash and equity, up to $2B milestones, three years',
        read: 'The dollar figures matter less than the counterparty. Alnylam built the RNAi field and has multiple approved products. Nobody knows better what makes an siRNA work in a human, and they still wanted this.',
      },
      {
        label: 'Milestone structure',
        value: 'Up to $2B, largely unearned',
        read: 'Milestone headlines are cheap to sign and most never pay past the first tranche. I do not treat this as expected value.',
      },
      {
        label: 'Equity purchase',
        value: 'Alnylam took equity alongside the cash',
        read: "I give the equity purchase more weight than an option or licensing fee alone because it is a longer commitment.",
      },
      {
        label: 'Proprietary data generation',
        value: 'Automated high-throughput RNA synthesis and measurement',
        read: 'Gets more valuable as BioNeMo, Anthropic and open models commoditise the layer above it. Whoever supplies training data captures more when models are free.',
      },
    ],
    competition:
      "Internal RNA groups at every large pharma with an RNA franchise, plus specialised RNA AI startups. The broader competitive threat is the one running through this whole archive: NVIDIA's BioNeMo and general model companies making the modelling layer free. Inceptive's answer is that its advantage is the measurement loop rather than the architecture, which I find credible. The narrower risk is concentration, since one deep partnership is validation and single-point exposure at the same time. City Therapeutics priced an approximately $200 million gross IPO on October 15, with closing expected October 19. As an RNAi asset developer, it is a useful comparison for the capital and economics of owning programs rather than providing design capability; the announcement does not establish completed proceeds or clinical success.",
    team:
      'Co-founded by Jakob Uszkoreit, one of the authors of the Transformer paper, and Rhiju Das, a Stanford biochemist who has spent his career on RNA structure. That pairing is unusually well matched to this specific problem: one person who helped invent the architecture and one who has spent twenty years on the biology it is being pointed at. Most AI-for-biology companies have one of those two and hire the other.',
    risks: [
      {
        risk: 'In vitro stability gains have a long history of not surviving contact with a living animal.',
        mitigant:
          'Alnylam has the in vivo validation infrastructure and the incentive to test this quickly, which surfaces the answer sooner than an internal program would.',
      },
      {
        risk: 'Concentration in a single partner. If Alnylam walks at term, the signal reverses hard.',
        mitigant:
          'A three-year term with equity attached is a longer commitment than an option, and a successful first collaboration is the best route to a second partner.',
      },
      {
        risk: 'Licensing and milestone economics mean value accrues slowly and mostly to the partner.',
        mitigant:
          'Capital efficiency is correspondingly high, and the company retains the platform for its own programs later.',
      },
      {
        risk: 'General models could erode the modelling advantage.',
        mitigant:
          'The proprietary measurement loop is the actual asset and it becomes relatively more valuable as models commoditise.',
      },
    ],
    diligence: [
      'What are the first milestone triggers under the Alnylam agreement, and what has been earned to date?',
      'How large is the internal dataset, and what does it cost to generate an additional million measurements?',
      'Has any designed sequence gone into an animal, and what were the results relative to a conventionally designed control?',
      'That animal-data question is partly answered by the September 3 company report. Can the result replicate independently and persist beyond its 24-hour endpoint?',
      'Is the Alnylam arrangement exclusive within siRNA, and does it restrict other partnerships?',
      'How much equity did Alnylam take and at what valuation?',
      'What is the path to owning assets rather than licensing capability?',
    ],
    changeMyMind: [
      'A first designed candidate entering Alnylam preclinical development, triggering a real milestone.',
      'A second major partner, which would prove the platform is not an Alnylam-specific arrangement.',
      'In vivo data showing designed sequences outperforming conventional ones.',
      'The Alnylam collaboration lapsing quietly at term.',
    ],
    view:
      "My view as of October 2026 is that Inceptive is the cleanest test I follow of whether counterparty quality works as a signal when I cannot judge the science myself. I cannot evaluate these RNA models. Alnylam can, has done almost nothing else for twenty years, and committed $30 million of upfront consideration, including cash and an equity purchase, for access to them. That satisfies the second of the three tests I set for this field, a serious domain partner paying real money. The third, a molecule surviving Phase 1, is still a milestone I need to evaluate program by program. So I hold this as evidence that the capability is worth something to people qualified to price it, and not as evidence that it produces drugs. The September 3 CAR-T report partly answers my animal-data question: Inceptive reports greater B-cell depletion with three of five designs than its benchmark in humanized mice. This was company-run work with a 24-hour endpoint, not human remission or proof of durable effect. I want independent replication and longer follow-up before moving that judgment further.",

    lastReviewed: "October 18, 2026",
    sources: [
      {
        "title": "City Therapeutics announces pricing of upsized IPO",
        "publisher": "City Therapeutics",
        "url": "https://investors.citytx.com/news-releases/news-release-details/city-therapeutics-announces-pricing-upsized-initial-public",
        "publishedAt": "October 15, 2026"
      },
      {
        title: 'From better models to better in vivo CAR-T',
        publisher: 'Inceptive',
        url: 'https://inceptive.com/blog/from-better-models-to-better-in-vivo-car-t',
        publishedAt: 'September 3, 2026'
      },
      {
        "title": "Alnylam and Inceptive collaboration terms",
        "publisher": "Alnylam",
        "url": "https://investors.alnylam.com/press-release?id=12c82628-531a-443b-b21b-26cc5b51230b",
        "publishedAt": "June 3, 2026"
      }
    ],
  },

  // ── Xaira Therapeutics ─────────────────────────────────────────────────────
  {
    id: 'xaira',
    name: 'Xaira Therapeutics',
    what:
      'Launched with over a billion dollars to build models that predict how a whole cell responds when you perturb it, rather than just predicting what a single protein looks like.',
    followingSince: 'Following since 2024',
    snapshot: [
      {
        "label": "Sector",
        "value": "Generative biology"
      },
      {
        "label": "Stage",
        "value": "Series A"
      },
      {
        "label": "Founded",
        "value": "2023, launched April 2024"
      },
      {
        "label": "Headquarters",
        "value": "South San Francisco, CA"
      },
      {
        "label": "Total raised",
        "value": "$1.3B"
      },
      {
        "label": "Investors",
        "value": "ARCH Venture Partners, Foresite Capital, F-Prime, NVentures, Sequoia"
      },
      {
        "label": "Platform",
        "value": "X-Cell virtual cell model, X-Atlas/Pisces dataset"
      },
      {
        "label": "Clinical status",
      "value": "Preclinical pipeline disclosed; no human dosing announced in the material reviewed"
      }
    ],
    summary:
      'The premise is that structure prediction solved the easy half. Knowing the shape of a protein does not tell you what happens to a cell when you interfere with it, and that second question is closer to what determines whether a drug works. Xaira generates enormous perturbation datasets in its own lab and trains on them. I hold this on the strength of the data asset and the people rather than on any independent evaluation of the model, because no independent evaluation is possible.',
    problem:
      'Most drug candidates fail because a molecule that binds its target beautifully does something unexpected to the cell or the organism. Structure prediction addresses binding. It does not address what happens to the thousands of other things in the cell when the target is inhibited, which is where most of the surprise lives. Predicting cellular response to perturbation would let you screen for those surprises before spending years in the lab.',
    product:
      'X-Cell, released March 2026, a virtual cell model predicting transcriptional response to genetic perturbation, trained on X-Atlas/Pisces, which the company describes as the largest genome-wide perturbation dataset built. Alongside it, protein design capability descending from David Baker\'s work at the Institute for Protein Design. The company generates its own training data through automated high-throughput Perturb-seq.',
    whyNow:
      'Single-cell sequencing costs fell far enough that genome-scale perturbation screens became affordable around 2022, which is what makes the dataset possible. Before that you could not generate enough data to train a model of this kind at any price. The talent condition was David Baker winning the 2024 Nobel and the surrounding field maturing into something a company could hire out of.',
    market:
      'Xaira’s intended value capture is an internal pipeline of biologic therapeutics, rather than only selling model access. Its current platform page shows preclinical programs across oncology, immunology and undisclosed indications. I want to assess how that pipeline progresses before attributing value to the platform beyond the data and experimental work already disclosed.',
    traction: [
      {
        "label": "Capital",
        "value": "$1.3B at launch",
        "read": "One of the largest biotech launches on record. It buys years of runway. After following Turn Bio, I care more about how long that funds the work than about the size of the round."
      },
      {
        "label": "X-Cell and X-Atlas/Pisces",
        "value": "Released March 2026",
        "read": "I cannot independently grade this and I want that stated plainly. Structure prediction has CASP, a blind competition. Virtual cell modelling has no equivalent, so every company evaluates its own model on data it chose."
      },
      {
        "label": "Partnership posture",
        "value": "At BIO in July 2026, seeking preclinical data rather than capital",
        "read": "Candid and revealing. It suggests even $1.3B does not buy enough biology, and that the generate-everything-yourself premise has limits that arrived faster than expected."
      },
      {
        "label": "Disclosed pipeline work",
        "value": "XA-1 and XA-4, October 2, 2026",
        "read": "Company-reported preclinical examples are a more useful starting point than my old “none announced” shorthand. They are not human evidence."
      }
    ],
    competition:
      "Isomorphic Labs on the structural side, Recursion on phenotypic screening, and the internal AI groups at every large pharma. The more interesting competitive dynamic is with the platform layer: as BioNeMo improves and general models get better at biological reasoning, the modelling advantage narrows and the data asset becomes the defensible part. That is a smaller position than the company pitched at launch, and it is a real one. Recursion's October 15 Sanofi candidate option triggered a $10 million milestone payment. It gives me a disclosed partner handoff to compare with Xaira's preclinical work, while leaving clinical translation open. Iambic's October IPO also adds a clinical-stage public comparator. I want to compare its disclosed spending and progress with Xaira's internal pipeline, without assuming the technologies or candidates are interchangeable.",
    team:
      'Co-founded and led by Marc Tessier-Lavigne as Chairman and CEO, previously Executive Vice President for Research and Chief Scientific Officer at Genentech and later president of Rockefeller and Stanford. Co-founder Hetu Kamisetty is CTO. David Baker, the 2024 Nobel laureate in Chemistry for computational protein design, is a co-founder. Paulo Fontoura joined as Chief Medical Officer from Roche. The board includes Carolyn Bertozzi and Scott Gottlieb. On paper this is close to the strongest team in the sector; the open question is whether an organisation assembled this way can move quickly.',
    risks: [
      {
        risk: 'No independent benchmark exists for virtual cell models, so the central technical claim cannot be verified externally.',
        mitigant:
          'The dataset itself is verifiable and expensive to replicate regardless of how good the model is.',
      },
      {
        risk: 'Cell-line transcriptional predictions historically fail to translate to animal efficacy.',
        mitigant:
          'The company is pursuing partnerships specifically to acquire in vivo preclinical data, which is the right response.',
      },
      {
        risk: 'A $1.3B launch sets an expectation clock a 2028 or 2029 first candidate may not satisfy.',
        mitigant:
          'The capital base means the company controls its own timeline rather than raising into a bad market.',
      },
      {
        risk: 'General models and free platform tooling erode the modelling differentiation.',
        mitigant:
          'The perturbation data asset appreciates as models commoditise, which partially hedges this.',
      },
    ],
    diligence: [
      'Is there any held-out or third-party evaluation of X-Cell? Without one I am relying on reputation, which I would not accept from a smaller company.',
      'How large is X-Atlas/Pisces in cells and perturbations, and what does it cost to extend?',
      'What is the annual burn against $1.3B, and what is the expected runway?',
      'What target classes are the internal programs against, and what stage is the most advanced?',
      'What specifically is the company seeking from data partners, and what is it offering in return?',
      'What is the retention picture on senior scientific staff two years post-launch?',
    ],
    changeMyMind: [
      'A first development candidate nomination.',
      'A pharma partnership involving data exchange, which would mean someone with wet-lab depth finds X-Cell useful.',
      'Any independent benchmark or blind evaluation of virtual cell models emerging as a field standard.',
      'Senior scientific departures, which in a company assembled around specific people would matter more than usual.',
    ],
    view:
      "My view as of October 2026 is more specific: I now have experimental claims to investigate alongside the data asset. X-Design’s antibody examples strengthen the case for doing that work without settling platform generality or clinical translation. I still want a partner who can independently assess the work, and I would like to see the promised systematic evaluation rather than only selected campaigns.",

    lastReviewed: "October 18, 2026",
    sources: [
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
      },
      {
        "title": "De Novo Design of Progressable Antibodies to Therapeutic Targets",
        "publisher": "Xaira Therapeutics",
        "url": "https://www.xaira.com/news/de-novo-design-of-progressable-antibodies-to-therapeutic-targets",
        "publishedAt": "October 2, 2026"
      },
      {
        "title": "Xaira platform and current preclinical pipeline",
        "publisher": "Xaira Therapeutics",
        "url": "https://www.xaira.com/platform"
      },
      {
        "title": "Sanofi options first development candidate from Recursion collaboration",
        "publisher": "Recursion",
        "url": "https://recursion.gcs-web.com/news-releases/news-release-details/recursion-announces-sanofi-options-potential-first-class",
        "publishedAt": "October 15, 2026"
      },
    ],
  },

  // ── Beeline Medicines ──────────────────────────────────────────────────────
  {
    id: 'beeline-medicines',
    name: 'Beeline Medicines',
    what:
      'A company built in 2025 around five BMS programs, spanning clinical and preclinical development, with an oral lupus drug in the lead.',
    followingSince: 'Following since spring 2026',
    snapshot: [
      { label: 'Sector', value: 'Immunology and inflammation' },
      { label: 'Stage', value: 'Series A, clinical stage' },
      { label: 'Founded', value: 'July 2025, emerged from stealth April 15 2026' },
      { label: 'Headquarters', value: 'Stamford, CT; additional location in Cambridge, MA' },
      { label: 'Total raised', value: '$426.3M Series A' },
      { label: 'Investors', value: 'Bain Capital, Bristol Myers Squibb, CPPIB' },
      { label: 'Lead asset', value: 'Afimetoran, oral TLR7/8 inhibitor, lupus' },
      { label: 'Phase 2 SLE', value: 'Met primary endpoint, September 9 2026' },
    ],
    summary:
      'I started following this because I was writing constantly about a market where autoimmune and inflammation take more than 40 percent of biotech venture dollars while covering nothing in it. That is a coverage gap rather than a considered thesis, and this memo is shorter on original scientific insight than the others as a result. What makes it worth holding is structural: five BMS programs at different stages, a CEO who just sold his last company to Merck KGaA, and a Phase 2 readout close enough that I would find out quickly whether the interest was warranted. The company reported a positive Phase 2 topline on 9 September 2026. So I now have to separate two things that feel the same from the inside, which is whether I understood this going in or simply got a good result.',
    problem:
      'Lupus already has oral treatment, including hydroxychloroquine, alongside immunosuppressants and biologics. EULAR recommends hydroxychloroquine unless contraindicated and tries to minimise long-term glucocorticoid exposure. The unmet need is better disease control with less treatment burden and toxicity. Calling this a market with no good oral option overstated the gap.',
    product:
      'Afimetoran is an oral, once-daily, equipotent inhibitor of toll-like receptors 7 and 8. Those receptors sit upstream of the type I interferon signalling that drives a large part of lupus pathology. The other BMS programs are BLN-326 (early clinical), lomedeucitinib (late clinical), and BLN-481 and BLN-498 (preclinical), according to the current company pipeline. These are not five clinical-stage assets.',
    whyNow:
      'The immunology market repriced sharply in 2025 and 2026 as cell therapy crossed over from oncology into autoimmune disease. AbbVie paid up to $2.1 billion for Capstan and Lilly agreed to pay up to $7 billion for Kelonia, both in vivo CAR-T. That drew capital into the whole category. Separately, large pharma under patent-cliff pressure is triaging portfolios aggressively, which is why five programs became available from BMS at all.',
    market:
      "Roughly 200,000 to 300,000 people in the US have systemic lupus erythematosus, with a larger population across other autoimmune indications the platform could reach. I would price afimetoran against the benefit it adds to existing treatment and the steroid exposure it can spare, rather than assume oral dosing earns a premium. Cell therapy is one competitor; other oral mechanisms also need comparing.",
    traction: [
      {
        label: 'Series A',
        value: '$426.3M, upsized from $300M with a $126.3M extension in June 2026',
        read: 'An upsize usually means demand exceeded the original allocation. Bain and CPPIB are not tourist investors in this category.',
      },
      {
        label: 'Programs in-licensed',
        value: 'Five BMS programs; three clinical and two preclinical on the company pipeline',
        read: 'Cuts both ways and I cannot resolve it. Large pharma deprioritises for portfolio reasons constantly, and also because the data is mediocre.',
      },
      {
        label: 'Phase 2 readout',
        value: 'SRI-4 at week 48, all three doses beat placebo, p below 0.001',
        read: 'The company reports separation across all three doses and no new safety signal, with pivotal studies planned. Its September release does not give arm-level response rates or adverse-event counts. I need those details before judging the size and cost of the benefit. A positive topline is not a result I predicted.',
      },
      {
        label: 'BMS retained stake',
        value: 'BMS is an investor in the spinout',
        read: 'The seller keeping equity is mildly reassuring. It suggests the programs were deprioritised for fit rather than written off entirely.',
      },
    ],
    competition:
      'The immediate competition is the existing standard of care and the biologics already approved in lupus. The strategically more important competition is autoimmune cell therapy, where Kyverna is preparing what would be the first CAR-T regulatory filing in autoimmune disease and Cabaletta is heading toward a myositis submission. If cell therapy delivers durable drug-free remission, a chronic oral therapy competes on convenience and cost rather than on outcome, which is a weaker position. If cell therapy proves too toxic or too expensive for a disease people live with for decades, an oral option wins by default.',
    team:
      'Saqib Islam is CEO, having previously led SpringWorks Therapeutics through its acquisition by Merck KGaA in 2025. That is the fact I weight most in this memo. A CEO who has just completed a sale to large pharma knows exactly what a buyer diligences and builds the company backwards from that. The board is chaired by Daniel S. Lynch, with Robert Plenge, Nicholas Downing, Adam Koppel and Andrew Kaplan since the July 2025 Series A close.',
    risks: [
      {
        "risk": "Phase 2 in lupus is not Phase 3 in lupus, and confirmatory trials in this disease have gone badly for other drugs.",
        "mitigant": "Separation across all three doses at week 48 is a better starting point than a single dose squeaking past. I have not done the work on the base rate yet, and that is now the main thing worth doing on this name."
      },
      {
        "risk": "I do not have a differentiated scientific view here, which makes this closer to category exposure than a pick.",
        "mitigant": "The position is deliberately framed as a starting point rather than a conviction, and the Phase 2 readout has now arrived."
      },
      {
        "risk": "A company assembled from another company's deprioritised programs raises the question of why they were deprioritised.",
        "mitigant": "BMS retained equity and Bain and CPPIB diligenced the assets, which is not proof but is not nothing."
      },
      {
        "risk": "Autoimmune cell therapy could redefine the standard of care while this is still in Phase 2.",
        "mitigant": "Cell therapy requires conditioning chemotherapy and hospitalisation, which limits its reach in a chronic non-fatal disease."
      }
    ],
    diligence: [
      'Why did BMS deprioritise these five programs specifically? This is the central question and I do not have an answer.',
      'What does the pivotal program look like, how large, and does the FDA agree on the endpoint for cutaneous disease?',
      'What safety data exists on TLR7/8 inhibition to date, including anything from the BMS-run studies?',
      'What are the terms of the BMS arrangement? Royalties, milestones, equity, and does BMS retain any option to reacquire?',
      'The company now identifies all five programs and their stages. Which deserve funding alongside afimetoran, and what would make it stop one?',
      'How much of the $426M is allocated to afimetoran versus the rest of the portfolio?',
    ],
    changeMyMind: [
      'Phase 3 failing to reproduce the week 48 separation, which is the risk that now carries the position.',
      'Disclosure of the BMS deprioritisation rationale.',
      'Autoimmune CAR-T showing durable drug-free remission with acceptable toxicity.',
      'A safety signal on TLR7/8 inhibition in any program.',
    ],
    view:
      "My view as of September 2026 is that the readout landed and I still do not have a differentiated scientific view, which is an uncomfortable pair of things to hold at once. I added the company for category exposure, and the readout was positive. I am keeping it because Phase 3 is a real question I can now do work on, not because Phase 2 vindicated anything I actually said. On October 17, my next gate is the full dose-level dataset and the confirmatory protocol. I also need cash and burn by program: the $426.3 million financing total does not tell me present runway or the cost of taking several assets forward.",

    lastReviewed: "October 17, 2026",
    sources: [
      {
        title: 'Current clinical and preclinical pipeline',
        publisher: 'Beeline Medicines',
        url: 'https://beelinemedicines.com/'
      },
      {
        title: 'EULAR recommendations for SLE, 2023 update',
        publisher: 'Annals of the Rheumatic Diseases',
        url: 'https://pubmed.ncbi.nlm.nih.gov/37827694/',
        publishedAt: 'January 2, 2024'
      },
      {
        "title": "Afimetoran Phase 2 topline results",
        "publisher": "Beeline Medicines",
        "url": "https://beelinemedicines.com/press-releases/beeline-medicines-announces-positive-topline-results-from-global-phase-2-study-of-afimetoran-in-systemic-lupus-erythematosus/",
        "publishedAt": "September 9, 2026"
      }
    ],
  },

  // ── Turn Biotechnologies ───────────────────────────────────────────────────
  {
    id: 'turn-bio',
    name: 'Turn Biotechnologies',
    what:
      'Developed a way to make old cells behave like young ones using short bursts of mRNA, and sold its technology at auction in May 2026.',
    followingSince: 'Followed from 2025 through mid 2026',
    snapshot: [
      { label: 'Sector', value: 'Longevity, cellular rejuvenation' },
      { label: 'Stage', value: 'Preclinical at technology-asset sale' },
      { label: 'Founded', value: '2018' },
      { label: 'Headquarters', value: 'Mountain View, CA' },
      { label: 'Total raised', value: 'Not independently reconciled' },
      { label: 'Outcome', value: 'Technology assets acquired by Daewoong, announced May 2026' },
      { label: 'Key partnership', value: 'HanAll Biopharma licence, up to $239M, May 2024' },
      { label: 'Regulatory status', value: 'Positive FDA INTERACT feedback, pre-IND' },
    ],
    summary:
      'The scientific idea still interests me: transient reprogramming might rejuvenate cells without taking them all the way back to pluripotency. Daewoong acquired the technology assets after an auction in May 2026. Financing pressure is my interpretation of that sequence, not a disclosed explanation, and I have not reconciled the funding total or investor proceeds. I keep the memo because I tracked scientific progress without asking enough about the money required to reach the next experiment.',
    problem:
      'Cellular ageing drives a long list of degenerative conditions, and essentially all existing treatment manages symptoms rather than the underlying decline. Partial epigenetic reprogramming offers a route to restoring youthful cell function directly. The danger is that full reprogramming produces pluripotent stem cells, which form teratomas, so the therapeutic question is whether you can go partway and stop.',
    product:
      'The ERA platform delivered transient mRNA encoding reprogramming factors via a proprietary lipid nanoparticle system called eTurna, licensed from Vittorio Sebastiano\'s lab at Stanford. Limiting factor expression to a brief window was intended to rejuvenate cell function while avoiding full pluripotency. Lead programs targeted dermatology and cartilage repair, chosen for localised delivery and clean endpoints.',
    whyNow:
      'The case at the time was that mRNA delivery had matured through the vaccine era, lipid nanoparticle manufacturing was industrialised, and localised indications avoided the systemic delivery problem that makes reprogramming dangerous. That reasoning was sound. What I did not weigh is that "why now" for the science and "why now" for the financing market are separate questions, and the second one was moving against the company the entire time.',
    market:
      'Dermatology and osteoarthritis are both large markets with established reimbursement, chosen deliberately as commercially viable entry points rather than as the eventual ambition. The strategy was correct. The company never reached the point of testing it.',
    traction: [
      {
        label: 'HanAll licence',
        value: 'Up to $239M, signed May 2024',
        read: 'I read this as validation at the time. In hindsight a preclinical company selling rights to its core platform is often raising cash it cannot get elsewhere, and it hands the buyer a well-informed position to acquire everything cheaply later. Daewoong is HanAll\'s affiliate.',
      },
      {
        label: 'FDA INTERACT feedback',
        value: 'Positive, on the path toward IND',
        read: "A scientific milestone that puts no money in the bank. I had this in my \"progressing\" column and it was not a measure of company health.",
      },
      {
        label: 'Klotho letter of intent',
        value: 'Issued October 2 2025, expired October 7 2025',
        read: 'A five-day round trip on an LOI for core assets is a sale process that did not close. It was public and I filed it as corporate noise.',
      },
      {
        label: 'Runway',
        value: 'Never estimated, by me or publicly',
        read: 'The number that decided the outcome, and the one metric absent from every note I wrote about this company.',
      },
    ],
    competition:
      'Altos Labs and Retro Biosciences hold vastly larger capital bases in the same scientific area. NewLimit is the most instructive comparison: five weeks after Turn went to auction it raised $435 million at a $3.1 billion valuation for the same basic mechanism. The difference was not scientific quality. NewLimit tied reprogramming to one organ, one disease and a planned Phase 1. Turn was a platform looking for its first indication in a market that had stopped funding platforms.',
    team:
      'Built around Vittorio Sebastiano\'s work at Stanford, which was the scientific asset and the reason the technology was worth buying at auction. What the company appears to have lacked, and what I never assessed, is the financing leadership required to raise into a closing market. Assessing that is hard from outside and it is now a standard question in my diligence lists.',
    risks: [
      {
        risk: 'Runway. The company could not fund itself to IND in a market that had stopped buying preclinical longevity.',
        mitigant:
          'None that materialised. This is the risk that happened and the one I never wrote down.',
      },
      {
        risk: 'The HanAll licence gave an affiliated party a favourable position to acquire the platform in distress.',
        mitigant:
          'None. The deal I read as a floor turned out to be the mechanism of the outcome.',
      },
      {
        risk: 'Platform without a lead indication in a market rewarding clinical-stage assets.',
        mitigant:
          'Dermatology and osteoarthritis were reasonable choices; the company did not reach them in time.',
      },
      {
        risk: 'Delivery specificity of LNPs to cartilage was unproven.',
        mitigant:
          "Still open at wind-down, and never the thing that killed it.",
      },
    ],
    diligence: [
      'What was cash on hand and monthly burn? I never asked, and it was the only question that mattered.',
      'What were the actual terms of the HanAll licence, including any change-of-control or asset-purchase rights?',
      'Who were the existing investors and were any of them in a position to bridge?',
      'What did the Klotho LOI cover and why did it expire?',
      'Was there an active Series B process, and what feedback was it getting?',
    ],
    changeMyMind: [
      "The technology assets transferred in May 2026. Public reporting reviewed here does not establish what every equity holder received."
    ],
    view:
      'My view as of August 2026 is that following this company taught me more than any of the ones that worked. I now write a rough runway estimate into any note about a preclinical company, and I no longer read a licensing deal as unambiguously good news without asking who is better positioned if things get worse.',

    status: "archived",
    archivedReason: "Archived after the May 2026 technology-asset auction. I keep the case because the financing questions I missed are part of the research record.",
    lastReviewed: "October 13, 2026",
    sources: [
      {
        "title": "Daewoong acquires Turn Bio technology assets",
        "publisher": "The Korea Herald",
        "url": "https://www.koreaherald.com/article/10742748",
        "publishedAt": "May 21, 2026"
      }
    ],
  },

  // ── BioAge Labs ────────────────────────────────────────────────────────────
  {
    id: 'bioage-labs',
    name: 'BioAge Labs',
    what:
      'A public longevity biotech whose original muscle-preservation drug failed on safety, and which has since built a promising anti-inflammatory program in its place.',
    followingSince: 'Following since 2024',
    snapshot: [
      { label: 'Sector', value: 'Longevity, metabolic and inflammation' },
      { label: 'Stage', value: 'Public, NASDAQ: BIOA' },
      { label: 'Founded', value: '2015' },
      { label: 'Headquarters', value: 'Richmond, CA' },
      { label: 'IPO', value: 'September 2024' },
      { label: 'Lead asset', value: 'BGE-102, oral brain-penetrant NLRP3 inhibitor' },
      { label: 'Discontinued', value: 'Azelaprag, December 6 2024, liver transaminitis' },
      { label: 'Near-term catalyst', value: 'QUELL-CV Phase 2 topline, H2 2026' },
    ],
    summary:
      'The thesis that drew me in was that GLP-1 drugs cause people to lose a large share of their weight as muscle rather than fat, which is dangerous specifically in older patients, and a drug preserving muscle during that treatment would be close to mandatory. I still think that argument is right. It was just not an argument about this drug. The company killed azelaprag on liver toxicity in December 2024 and has rebuilt around an NLRP3 inhibitor, which is arguably a more interesting company than the one I thought I owned.',
    problem:
      'Two problems across the company\'s history. The original one: incretin therapy drives substantial lean mass loss, and in older adults muscle loss accelerates frailty and fall risk, which is what ends independent living. The current one: chronic inflammation drives cardiovascular events and a range of age-related disease, and existing anti-inflammatory approaches are either too broad or too weak.',
    product:
      "BGE-102 is an oral, brain-penetrant small molecule inhibitor of the NLRP3 inflammasome, targeting cardiovascular risk and expanding into retinal disease. Phase 1 completed with the company reporting substantial reductions in hsCRP, an inflammation biomarker, across a 60mg once-daily cohort dosed for 21 days in participants with obesity and elevated inflammation. Underneath both programs is a human biobank of longitudinal samples used for target discovery.",
    whyNow:
      'The brain-penetrant property is the differentiating claim and the reason the company can pursue neuroinflammation alongside cardiovascular indications. NLRP3 has been a target of interest for a decade without a clean win, so the timing argument rests on this molecule specifically rather than on the target becoming newly tractable.',
    market:
      'Cardiovascular risk reduction is one of the largest markets in medicine and one of the hardest to win, because the standard of care is cheap generics and the trials required are enormous. Diabetic macular edema is a smaller, faster, better-defined market with visible endpoints, which is why the January 2026 indication expansion makes sense for a company managing its cash. The first patient in that trial, QUELL-DME, was dosed on 8 September 2026, with data not expected until the second half of 2027.',
    traction: [
      {
        "label": "BGE-102 Phase 1",
        "value": "April 21 2026: median hsCRP down 85% or more at 60mg and 120mg, IL-1beta suppression up to 98%",
        "read": "The numbers are large and they are also biomarkers rather than outcomes. Plenty of anti-inflammatory programs have moved CRP and then failed on events. The company calls it best in class, which is a characterisation rather than an independent read."
      },
      {
        "label": "Phase 2 cardiovascular",
        "value": "QUELL-CV, first patient dosed June 2026, enrolment complete, topline H2 2026",
        "read": "A dose-ranging biomarker study, not a cardiovascular outcomes trial. Its primary endpoint is percent change in hsCRP over twelve weeks."
      },
      {
        "label": "Azelaprag discontinuation",
        "value": "11 of 204 subjects with transaminase elevations, December 2024",
        "read": "No signal in the tirzepatide-only arm, so it was the BioAge drug. The clean example of why binding prediction does not predict metabolism."
      },
      {
        "label": "Public filings",
        "value": "Quarterly reports; annual audited financial statements",
        "read": "After Turn Bio this is worth something on its own. Cash, burn and trial status are disclosed on a schedule with legal consequences for getting them wrong."
      },
      {
        "label": "Indication expansion",
        "value": "Diabetic macular edema, announced January 2026",
        "read": "Adding a second indication before the first has Phase 2 data usually means a company wants more shots with the cash it has. Retinal trials are shorter and cheaper."
      },
      {
        label: 'QUELL-DME design',
        value: '~180 participants, three arms; visual acuity at week 12',
        read: 'The October 2 filing describes oral BGE-102 alone and with anti-VEGF against anti-VEGF with oral placebo. Topline is expected in H2 2027. I want the visual benefit and safety comparison, beyond biomarker changes.',
      },
      {
        "label": "Deep Origin discovery collaboration",
        "value": "First-target hits reported October 14, 2026; hit-to-lead optimization",
        "read": "These are collaborator-reported early discovery results, with success-based milestone amounts undisclosed. They do not establish a new clinical candidate."
      },
    ],
    competition:
      'NLRP3 is crowded, with programs at Novartis, Roche and several biotechs, and a mixed clinical history. On the cardiovascular inflammation thesis the reference point is colchicine and canakinumab, both of which showed that reducing inflammation reduces events and neither of which became a commercial success. That is the cautionary structure here: being right about the biology has not historically been sufficient.',
    team:
      'Co-founded in 2015 and led by Kristen Fortney, who took the company public in September 2024 and then had to discontinue its lead asset ten weeks later. Managing that transition without the company folding, and having a credible Phase 2 program eighteen months on, is a real operational result. I weight it more than I would weight a founder who has never had to do it.',
    risks: [
      {
        "risk": "Moving hsCRP is not the same as preventing cardiovascular events, and the field has failed here before.",
        "mitigant": "QUELL-CV tests dose response and biomarker activity. Demonstrating fewer cardiovascular events requires a different, larger trial."
      },
      {
        "risk": "NLRP3 is crowded with better-capitalised competitors.",
        "mitigant": "Brain penetrance differentiates the molecule and opens neuroinflammation indications others cannot pursue."
      },
      {
        "risk": "A company that pivoted after a safety failure may be valued on the memory of the old program.",
        "mitigant": "That is also the opportunity, if the new program is being underpriced for reasons unrelated to it."
      },
      {
        "risk": "It is publicly traded, so this sits outside the framing of the rest of these memos.",
        "mitigant": "Public filings make it the easiest company here to diligence, which after Turn Bio I value more than I used to."
      }
    ],
    diligence: [
      "How would a successful hsCRP result translate into the design, cost and timing of a cardiovascular outcomes trial?",
      "What is the full safety database on BGE-102 to date, particularly any hepatic signal given the azelaprag history?",
      "What is cash on hand and runway through the DME readout?",
      "How does the hsCRP reduction compare quantitatively to canakinumab and to competing NLRP3 programs?",
      "What did the biobank actually contribute to identifying BGE-102, as opposed to the platform narrative?",
      "Has the azelaprag mechanism been abandoned entirely, or is a backup being pursued?",
      "What are the first Deep Origin target, compound-level results and screening controls, and what are the milestone obligations?",
    ],
    changeMyMind: [
      "QUELL-CV showing a reproducible dose response with acceptable safety, followed by a credible outcomes-trial plan.",
      "Any hepatic safety signal on BGE-102, which would raise questions about the platform rather than the molecule.",
      "QUELL-DME showing a useful visual-acuity result at week 12 with acceptable safety, with topline expected in H2 2027.",
      "A competitor NLRP3 program failing on outcomes despite biomarker success."
    ],
    view:
      "My view as of October 2026 is that I asked the wrong question of QUELL-CV. It is a roughly 160-person, twelve-week dose-ranging study with hsCRP as its primary endpoint. It cannot establish fewer heart attacks. I expect biomarker activity, but the useful questions are dose response, safety and whether the result justifies the next trial. The October 2 filing makes the retinal comparison clearer: QUELL-DME tests visual acuity at week 12, with BGE-102 alone and alongside anti-VEGF. That is a separate functional question, with topline expected in H2 2027. I still like having a public company whose assumptions I can check against filings.",

    lastReviewed: "October 14, 2026",
    sources: [
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
      },
      {
        "title": "First participant dosed in QUELL-DME",
        "publisher": "BioAge Labs",
        "url": "https://ir.bioagelabs.com/news-releases/news-release-details/bioage-labs-announces-first-participant-dosed-quell-dme-phase-2",
        "publishedAt": "September 8, 2026"
      },
      {
        title: 'October 2 Form 8-K: QUELL-DME design and expected readout',
        publisher: 'BioAge Labs / SEC filing',
        url: 'https://ir.bioagelabs.com/node/8096/html',
        publishedAt: 'October 2, 2026',
      },
      {
        "title": "Deep Origin announces BioAge collaboration and first wet-lab-confirmed hits",
        "publisher": "Deep Origin",
        "url": "https://deeporigin.com/news/deep-origin-announces-multi-target-collaboration-with-bioage-labs/",
        "publishedAt": "October 14, 2026"
      },
    ],
  },

  // ── EvolutionaryScale ──────────────────────────────────────────────────────
  {
    id: 'evolutionaryscale',
    name: 'EvolutionaryScale',
    what:
      'Built ESM3, a large model that reasons about protein sequence, structure and function at once, and was absorbed into Chan Zuckerberg Biohub in November 2025.',
    followingSince: 'Followed from mid 2024 to late 2025',
    snapshot: [
      { label: 'Sector', value: 'Biological foundation models' },
      { label: 'Stage', value: 'Seed at acquisition' },
      { label: 'Founded', value: '2023' },
      { label: 'Headquarters', value: 'New York, NY' },
      { label: 'Total raised', value: '$142M seed, June 2024' },
      { label: 'Investors', value: 'Nat Friedman, Daniel Gross, Lux Capital, Amazon, NVentures' },
      { label: 'Outcome', value: 'Acquired by Chan Zuckerberg Biohub, November 2025' },
      { label: 'Headline result', value: 'esmGFP, published in Science, January 2025' },
    ],
    summary:
      'The technical work was impressive and the company is now part of Biohub. That made me revisit an assumption: important research does not explain how investors capture value. I do not know the transaction terms well enough to score the return. I keep this case because it made the commercial questions harder to ignore, even when I like the science.',
    problem:
      'Natural evolution has explored a tiny fraction of possible protein sequence space. Traditional biologic discovery screens natural libraries or makes incremental mutations, which limits what can be built. A model reasoning jointly over sequence, structure and function would let you specify a desired function and generate a protein that performs it.',
    product:
      'ESM3, a 98-billion parameter multimodal model trained on roughly 2.78 billion protein sequences, reasoning across sequence, structure and function simultaneously and generatively. Distributed through AWS Bedrock and NVIDIA BioNeMo. The headline demonstration was esmGFP, a functional green fluorescent protein sharing only 58 percent sequence identity with the closest known natural equivalent, framed as roughly 500 million years of evolutionary distance produced computationally.',
    whyNow:
      'The scaling argument that worked for language applied to protein sequence, and the compute to train at that scale became available. The team that had done this work inside Meta AI became available when Meta disbanded the group. Both conditions were specific to 2023 and neither is a durable advantage, which is part of the lesson.',
    market:
      'The intended market was licensing model access to biopharma. That market turned out to be much smaller than it appeared, for reasons that are obvious in hindsight: customers are large and conservative, capable of running open-weights alternatives, and the research moves fast enough that any specific model has a short commercial life. There was no recurring revenue mechanism that a better free model would not undercut.',
    traction: [
      {
        "label": "esmGFP",
        "value": "58% sequence identity to nearest natural protein, published in Science January 2025",
        "read": "Cleared peer review, which a lot of AI-for-biology claims never do. The technical bet was correct and verifiable."
      },
      {
        "label": "Distribution",
        "value": "AWS Bedrock and NVIDIA BioNeMo",
        "read": "Wide availability and no pricing power. Being distributed through platforms that also commoditise you is a structural problem, not a channel win."
      },
      {
        "label": "Commercial traction",
        "value": "No disclosed licensing revenue at scale",
        "read": "The absence is the finding. I wrote eleven paragraphs about the model and four sentences about monetisation."
      },
      {
        "label": "Outcome",
        "value": "Now part of Biohub",
        "read": "The destination is public. Investor proceeds and transaction terms are not established by the company website, so I removed the claim that it produced no venture return."
      }
    ],
    competition:
      'Isomorphic Labs, Xaira, and academic open-source protein models. The decisive competitive factor was not a rival company but the open-weights ecosystem, including Baker lab releases like RFdiffusion3, which went open source in June 2026. When the free alternative is close enough and improving, a licensing business has no floor.',
    team:
      'Founded in 2023 by researchers from Meta AI\'s protein team, with Alexander Rives as chief scientist. Exceptional research group, and the outcome suggests the company was structured as a research lab that intended to find a business model later. In a market that funds research labs philanthropically, it found the right home.',
    risks: [
      {
        risk: 'Licensing model access is a weak business when customers can run open alternatives.',
        mitigant:
          'None that worked. This is the risk that determined the outcome.',
      },
      {
        risk: 'Short commercial half-life for any specific model in a fast-moving field.',
        mitigant:
          'Retaining rights to internal therapeutic programs was the stated hedge and was never developed far enough to matter.',
      },
      {
        risk: 'Compute costs to train and serve a 98B parameter model.',
        mitigant:
          'Amazon and NVIDIA as investors provided some access, which reduced the burn without solving the revenue problem.',
      },
    ],
    diligence: [
      'What was licensing revenue, and from how many customers? I never asked and it would have told me everything.',
      'What is the pricing model, and what stops a customer using an open-weights alternative next year?',
      'What internal therapeutic programs exist, and who owns the IP from model outputs?',
      'What is the burn rate against $142M and how long does that fund a model of this size?',
    ],
    changeMyMind: [
      "The company is now part of Biohub. I have not established investor proceeds from primary public disclosures."
    ],
    view:
      'My view as of October 2026 is that the technical and commercial questions need separate evidence. I initially read the move to Biohub as a poor venture outcome, but I have not established the investor proceeds and should not score it that way. The useful lesson is to investigate value capture as early as the model, rather than assume one follows from the other.',

    status: "archived",
    archivedReason: "Archived after the team and technology joined Biohub. The scientific result and the commercial outcome remain separate questions.",
    lastReviewed: "October 13, 2026",
    sources: [
      {
        "title": "EvolutionaryScale is now part of Biohub",
        "publisher": "EvolutionaryScale",
        "url": "https://www.evolutionaryscale.ai/"
      }
    ],
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function getCompanyBySlug(slug: string): Company | undefined {
  return COMPANIES.find((c) => c.id === slug);
}

export function getAllCompanies(): Company[] {
  return COMPANIES;
}

export const ACTIVE_COMPANIES = COMPANIES.filter((c) => c.status !== 'archived');
export const ARCHIVED_COMPANIES = COMPANIES.filter((c) => c.status === 'archived');
