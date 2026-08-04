import { CoverageEntry } from './types';

// Science and breakthrough notes. Kept separate because these are less about
// deals and more about what a result makes possible.

export const ENTRIES_SCIENCE: CoverageEntry[] = [
  {
    id: '2025-11-kj-muldoon',
    headline: 'A baby got a drug that was designed for him alone, and it took six months',
    entryDate: 'November 2025',
    sortKey: '2025-11-22',
    eventDate: 'Treated February 25, 2025; presented at ASGCT May 15, 2025',
    entryType: 'clinical',
    scope: 'industry',
    themes: ['gene-editing'],
    analysis:
      'I keep coming back to this one. KJ Muldoon was born with severe CPS1 deficiency, a liver enzyme defect that lets ammonia build up in the blood and usually causes catastrophic neurological damage or death in infancy. There is no drug for it because there are almost no patients with his exact variant.\n\nSo a team at CHOP and Penn built one. They read his specific mutation, designed a base editor with a guide sequence targeting it, packaged it in lipid nanoparticles, manufactured it, and dosed him at seven months old. From diagnosis to treatment was roughly six months.\n\nThe thing that gets me is not that gene editing worked. It is the timeline. Six months from identifying a variant to putting a bespoke medicine into a specific child is a completely different model of drug development from the one everything else in this archive describes. There is no market. There is no Phase 3. There is one patient and a manufacturing run of one.\n\nWhat that implies, if it can be repeated, is enormous. There are thousands of ultra-rare metabolic and neurological disorders where the biology is understood and nobody will ever fund a program because the patient population is a few dozen people worldwide. If the editing platform stays constant and only the guide sequence changes, then the expensive part becomes regulatory and manufacturing rather than discovery, and those are problems that respond to standardisation.\n\nI do not know how it gets paid for. I do not know how a regulator approves a therapy with an n of one as a category rather than case by case. But this is the most exciting single result I read about this year and I wanted it on the record early.',
    sources: [
      {
        title: 'World\'s First Patient Treated with Personalized CRISPR Gene Editing Therapy',
        publisher: "Children's Hospital of Philadelphia",
        url: 'https://www.chop.edu/news/worlds-first-patient-treated-personalized-crispr-gene-editing-therapy-childrens-hospital',
        publishedAt: 'May 2025',
      },
      {
        title: 'A baby gets the world\'s first personalized CRISPR therapy',
        publisher: 'Chemical & Engineering News',
        url: 'https://cen.acs.org/biological-chemistry/gene-editing/baby-world39s-first-personalized-CRISPR/103/web/2025/05',
      },
    ],
  },
  {
    id: '2026-03-kj-one-year',
    headline: 'A year on, KJ is fine and the team is trying to make it a platform',
    entryDate: 'March 2026',
    sortKey: '2026-03-04',
    eventDate: 'Rare Disease Day 2026, NIH',
    entryType: 'clinical',
    scope: 'industry',
    themes: ['gene-editing'],
    relatedEntryIds: ['2025-11-kj-muldoon'],
    analysis:
      'KJ appeared at Rare Disease Day at the NIH. He is tolerating more dietary protein, needs less nitrogen-scavenging medication, and has come through ordinary childhood infections without the ammonia crises that would previously have been life-threatening.\n\nThe CHOP and Penn team is now explicitly working on making the approach reusable rather than heroic. That is the whole question. One bespoke therapy is a remarkable story about one child. A standardised process where the delivery vehicle and the editor stay fixed and only the guide changes is a new category of medicine.\n\nIf they get there, the constraint stops being science and becomes regulatory precedent and manufacturing throughput, which is a much better problem to have.',
    sources: [
      {
        title: 'A Year After First-in-World Gene-Editing Therapy, CHOP-Penn Team Aims to Scale the Science',
        publisher: 'CHOP Research Institute',
        url: 'https://www.research.chop.edu/cornerstone-blog/a-year-after-first-in-world-gene-editing-therapy-chop-penn-team-aims-to-scale-the-science',
      },
      {
        title: 'The baby whose life was saved by the first personalized CRISPR therapy',
        publisher: 'Nature',
        url: 'https://www.nature.com/articles/d41586-025-03847-2',
      },
    ],
  },
  {
    id: '2026-01-nam-prediction',
    headline: 'A call: the FDA is going to make lab-grown human models the default, and that creates a real market',
    entryDate: 'January 2026',
    sortKey: '2026-01-27',
    entryType: 'regulation-policy',
    scope: 'industry',
    themes: ['nams'],
    status: 'current-view',
    analysis:
      'Putting a prediction on the record so I can be judged on it.\n\nIn April 2025 the FDA published a roadmap to phase out animal testing for monoclonal antibodies and other drugs, aiming to make animal studies the exception within three to five years. On December 2nd it followed with draft guidance on reducing nonhuman primate use in antibody toxicity studies past the initial three-month window. Right now the agency merely encourages new approach methodologies, meaning organ-on-chip systems, organoids and computational models.\n\nMy call is that this goes further within the year, and specifically that the FDA flips the burden of proof. Today a company using an organ chip has to show it performs equivalently to the animal study. That framing guarantees animals stay the reference standard forever, and it contradicts the stated goal. If the agency is serious, it has to define validation on human-relevance grounds instead.\n\nIf that happens, the companies building these systems stop selling a research tool and start selling a regulatory pathway, which is a completely different business with completely different pricing power. Emulate and the organoid vendors are the obvious beneficiaries.\n\nI think this is the most underpriced regulatory shift in healthcare right now. Everyone is watching AI guidance. This one changes what evidence a drug application is allowed to be built from, and I find it genuinely thrilling that the reference standard for human safety might finally become human tissue.',
    sources: [
      {
        title: 'FDA Announces Plan to Phase Out Animal Testing Requirement for Monoclonal Antibodies and Other Drugs',
        publisher: 'FDA',
        url: 'https://www.fda.gov/news-events/press-announcements/fda-announces-plan-phase-out-animal-testing-requirement-monoclonal-antibodies-and-other-drugs',
        publishedAt: 'April 2025',
      },
      {
        title: "FDA's shift from animal testing opens doors for organoid makers",
        publisher: 'Chemical & Engineering News',
        url: 'https://cen.acs.org/pharmaceuticals/drug-development/FDAs-shift-animal-testing-opens/103/web/2025/04',
      },
    ],
  },
  {
    id: '2026-03-nam-guidance-confirms',
    headline: 'The FDA reversed the burden of proof, which is what I said in January it would have to do',
    entryDate: 'March 2026',
    sortKey: '2026-03-16',
    entryType: 'regulation-policy',
    scope: 'industry',
    themes: ['nams'],
    relatedEntryIds: ['2026-01-nam-prediction'],
    status: 'retrospective',
    analysis:
      'Draft guidance establishing four validation principles for new approach methodologies: context of use, human biological relevance, technical characterisation, and fit for purpose. Crucially, sponsors no longer have to demonstrate that a non-animal method performs equivalently to an animal study. The requirement is now adherence to human-centric approaches.\n\nThat is the specific reversal I predicted in January, and I want to be honest about why I got it right, because it was not clairvoyance. The April 2025 roadmap stated a goal that was logically incompatible with the existing validation standard. Once you say animal testing should become the exception, you cannot keep animal data as the benchmark every alternative must match. The guidance had to move or the roadmap was decorative.\n\nThat is the kind of prediction I think is actually available to someone reading carefully: not guessing what people will do, but noticing when a stated goal and an existing rule cannot both survive.\n\nWhat happens next is the part I care about. A drug application built on human organ chips and computational models rather than mouse and monkey studies is not just cheaper, it is more likely to be predictive, because roughly nine in ten drugs that clear animal safety still fail in humans. If even a slice of that attrition is species mismatch rather than biology, this is one of the highest-leverage changes anyone could make to drug development.',
    sources: [
      {
        title: 'FDA roadmap to reducing animal testing: a regulatory and scientific paradigm shift',
        publisher: 'Stem Cell Research & Therapy',
        url: 'https://link.springer.com/article/10.1186/s13287-026-05090-6',
      },
      {
        title: 'FDA efforts to reduce animal testing signal shift toward AI, organ-on-chip study methods',
        publisher: 'Healio',
        url: 'https://www.healio.com/news/rheumatology/20260312/fda-efforts-to-reduce-animal-testing-signal-shift-toward-ai-organonchip-study-methods',
        publishedAt: 'March 2026',
      },
    ],
  },
  {
    id: '2026-04-emulate-capital',
    headline: 'Capital follows the guidance into organ chips',
    entryDate: 'April 2026',
    sortKey: '2026-04-22',
    entryType: 'financing',
    scope: 'industry',
    themes: ['nams'],
    relatedEntryIds: ['2026-03-nam-guidance-confirms'],
    analysis:
      'Emulate has now raised over $200 million, and the reporting attributes a meaningful part of that to regulatory interest rather than to a product cycle.\n\nThis is the mechanism I described in January working exactly as expected. The technology did not change in the last twelve months. What changed is that a regulator said the output is acceptable evidence, and a research tool became infrastructure. That transition is worth far more than any incremental improvement to the chips themselves.',
    sources: [
      {
        title: 'FDA NAM Roadmap: In Silico Models and Animal-Free Testing',
        publisher: 'IntuitionLabs',
        url: 'https://intuitionlabs.ai/articles/fda-nam-roadmap-in-silico-animal-free-approval',
      },
    ],
  },
  {
    id: '2026-02-invivo-cart-call',
    headline: 'A call: the next in vivo CAR-T company sells for far more than Capstan did',
    entryDate: 'February 2026',
    sortKey: '2026-02-08',
    entryType: 'industry-observation',
    scope: 'industry',
    themes: ['cell-therapy'],
    status: 'current-view',
    analysis:
      'Second prediction I want on the record.\n\nHere is the reasoning. Conventional CAR-T means extracting a patient\'s T cells, shipping them to a facility, engineering them, and infusing them back. It costs several hundred thousand dollars, takes weeks, and requires a specialised centre. It works remarkably well and it will never reach most patients because the logistics do not scale.\n\nIn vivo CAR-T does the engineering inside the body using a targeted vector. If it works, a bespoke manufacturing procedure becomes something closer to an injection. Combined with the finding that CAR-T depletes the B cells driving lupus and myositis just as it depletes malignant ones, the addressable population goes from a few thousand oncology patients to potentially millions of people with autoimmune disease.\n\nAbbVie paid up to $2.1 billion for Capstan in June 2025, and had already committed up to $1.4 billion across two Umoja deals in January 2024. Kyverna and Cabaletta are both heading toward autoimmune cell therapy filings. Meanwhile there are only a handful of credible in vivo CAR-T companies in existence.\n\nCompelled buyers, fixed supply. My call is that the next one goes for materially more than Capstan, and I would not be surprised by a number with a three in front of it as an upfront payment. The thing that would make me wrong is a safety signal, because delivering a genetic construct systemically is a very different risk profile from doing it in a manufacturing suite.',
    sources: [
      {
        title: 'AbbVie reels in Capstan in $2.1B buyout, charting course for in vivo CAR-T market',
        publisher: 'Fierce Biotech',
        url: 'https://www.fiercebiotech.com/biotech/abbvie-reels-capstan-21b-buyout-charting-course-vivo-car-t-market',
      },
      {
        title: 'Lilly, AbbVie climb aboard in vivo CAR T train, but safety remains a hurdle',
        publisher: 'BioSpace',
        url: 'https://www.biospace.com/drug-development/lilly-abbvie-climb-aboard-in-vivo-car-t-train-but-safety-remains-a-hurdle',
      },
    ],
  },
  {
    id: '2026-04-kelonia-confirms-call',
    headline: 'Lilly paid $3.25B upfront for Kelonia, which is the February call landing',
    entryDate: 'April 2026',
    sortKey: '2026-04-21',
    entryType: 'ma-licensing',
    scope: 'industry',
    themes: ['cell-therapy', 'lilly-ma'],
    relatedEntryIds: ['2026-02-invivo-cart-call', '2026-04-lilly-kelonia'],
    status: 'retrospective',
    analysis:
      'Up to $7 billion, with $3.25 billion upfront, for a Phase 1 company. In February I wrote that the next in vivo CAR-T deal would clear Capstan by a wide margin and that a three in front of the upfront would not surprise me.\n\nI want to be careful about how much credit to take. I did not predict which company or when, and the reasoning was not sophisticated. It was just counting: four or five large pharma buyers who have publicly signalled they want a position, a handful of credible targets, and a modality whose upside is measured in millions of autoimmune patients rather than thousands of oncology ones. Scarcity pricing is not a hard call when you can see both sides of the ledger.\n\nWhat I underweighted is how fast it happened. Ten months between a $2.1 billion deal and a $7 billion one for assets at a similar stage is a very steep repricing, and it makes me think the category is now ahead of its evidence. Nobody has shown durable in vivo CAR-T results in humans yet. Lilly is paying for the option on a modality, not for data.',
    sources: [
      {
        title: "After Lilly's $7B Kelonia deal, are there any in vivo CAR-T biotechs left to buy?",
        publisher: 'Fierce Biotech',
        url: 'https://www.fiercebiotech.com/biotech/frenzied-feeding-playing-defense-and-disruption-lillys-kelonia-acquisition-and-future-vivo',
      },
    ],
  },
  {
    id: '2026-02-cnpv-call',
    headline: 'A smaller call: orforglipron gets an unusually fast review',
    entryDate: 'February 2026',
    sortKey: '2026-02-19',
    entryType: 'regulation-policy',
    scope: 'industry',
    themes: ['obesity'],
    analysis:
      'The Commissioner\'s National Priority Voucher pilot lists onshoring and supply chain resilience among its qualifying priorities, and promises review in one to two months instead of ten to twelve.\n\nOrforglipron is a small molecule made by a domestic manufacturer in conventional chemical plants, addressing a condition affecting a very large share of the population. If the voucher programme is going to be used on anything, it is going to be used on that. I would expect an approval this year that is fast enough to surprise people.\n\nWorth saying plainly that this is a prediction about policy behaviour rather than about science, which is a much easier kind of call to make.',
    sources: [
      {
        title: "Commissioner's National Priority Voucher (CNPV) Pilot Program",
        publisher: 'FDA',
        url: 'https://www.fda.gov/industry/commissioners-national-priority-voucher-cnpv-pilot-program',
      },
    ],
  },
  {
    id: '2026-04-cnpv-confirms',
    headline: 'Fifty days. Fastest new molecular entity review since 2002',
    entryDate: 'April 2026',
    sortKey: '2026-04-11',
    entryType: 'regulation-policy',
    scope: 'industry',
    themes: ['obesity'],
    relatedEntryIds: ['2026-02-cnpv-call', '2026-04-foundayo-cnpv'],
    status: 'retrospective',
    analysis:
      'Foundayo became the first new molecular entity approved under the priority voucher pilot, fifty days from filing.\n\nI called a fast review in February. I did not call fifty days, and I want to note the difference, because predicting a direction and predicting a magnitude are not the same skill and I only did the first one.\n\nFifty days is genuinely startling. Nine months of earlier revenue on a drug of this size is worth billions, which means the voucher itself is now one of the most valuable assets a company can hold, and the criteria for getting one include where you manufacture.',
    sources: [
      {
        title: "Commissioner's National Priority Voucher (CNPV) Pilot Program",
        publisher: 'FDA',
        url: 'https://www.fda.gov/industry/commissioners-national-priority-voucher-cnpv-pilot-program',
      },
    ],
  },
  {
    id: '2025-12-lenacapavir',
    headline: 'Two injections a year and more than 99 percent stayed HIV negative',
    entryDate: 'December 2025',
    sortKey: '2025-12-02',
    eventDate: 'FDA approval June 2025; WHO recommendation July 14, 2025',
    entryType: 'clinical',
    scope: 'industry',
    themes: ['global-health'],
    analysis:
      'Lenacapavir was approved in June for HIV pre-exposure prophylaxis, dosed twice a year, and in the large prevention trials more than 99 percent of people taking it remained HIV negative. The WHO recommended it in July.\n\nThis is the closest thing to a vaccine that HIV prevention has ever had, and it is not a vaccine. Daily oral PrEP already works nearly perfectly when taken, and the failure mode has always been that people do not take a pill every day for years, especially young women in the highest-incidence settings where taking it is also socially difficult. Two injections a year removes the daily decision entirely.\n\nThe reason I find this so exciting is that it is a rare case where the hard problem was adherence rather than efficacy, and someone solved the adherence problem directly with pharmacology instead of trying to change behaviour. Most of healthcare tries the second thing and fails.\n\nThe catch is price. Over $28,000 a year in the US is not a global health intervention, it is a rich-country product.',
    sources: [
      {
        title: 'WHO recommends injectable lenacapavir for HIV prevention',
        publisher: 'World Health Organization',
        url: 'https://www.who.int/news/item/14-07-2025-who-recommends-injectable-lenacapavir-for-hiv-prevention',
        publishedAt: 'July 14, 2025',
      },
    ],
  },
  {
    id: '2026-06-lenacapavir-south-africa',
    headline: 'South Africa starts giving it out, and the price problem is being solved faster than I expected',
    entryDate: 'June 2026',
    sortKey: '2026-06-05',
    entryType: 'care-delivery',
    scope: 'industry',
    themes: ['global-health'],
    relatedEntryIds: ['2025-12-lenacapavir'],
    analysis:
      'Lenacapavir is now available at around 360 public health facilities across six South African provinces and 24 high-burden districts, with a stated goal of reaching three million people over three years. PEPFAR has committed to distribution in eight to twelve high-burden countries this year, and generic versions are expected around 2027 at roughly $40 per person per year.\n\nFrom $28,000 to $40 is a factor of seven hundred. That gap is the entire story of global drug access compressed into one product, and the fact that it is closing in about two years rather than the decade it took for HIV treatment is the most encouraging thing in this note.\n\nWhat I want to watch is delivery rather than supply. An injection every six months still requires someone to show up twice a year, and the health systems doing the reaching are the ones with the least capacity. The drug solved adherence. It did not solve access.',
    sources: [
      {
        title: 'South Africa launches breakthrough HIV prevention shot',
        publisher: 'NPR',
        url: 'https://www.npr.org/2026/06/05/nx-s1-5846846/south-africa-hiv-lenacapavir-aid',
        publishedAt: 'June 5, 2026',
      },
      {
        title: 'UNAIDS welcomes expanded rollout of HIV prevention medicine',
        publisher: 'UNAIDS',
        url: 'https://www.unaids.org/en/resources/presscentre/pressreleaseandstatementarchive/2026/april/20260415_lenacapavir_expanded_rollout',
        publishedAt: 'April 15, 2026',
      },
    ],
  },
  {
    id: '2025-12-xeno-ind',
    headline: 'The FDA cleared pig kidney transplants for actual clinical trials',
    entryDate: 'December 2025',
    sortKey: '2025-12-12',
    eventDate: 'IND clearances September 2025',
    entryType: 'clinical',
    scope: 'industry',
    themes: ['xenotransplantation'],
    analysis:
      'United Therapeutics and eGenesis both received clearance to run trials of gene-edited pig kidneys in humans. Before this, every xenotransplant had been done under expanded access, one desperate patient at a time.\n\nThe numbers involved are worth stating. Roughly one hundred thousand Americans are on the kidney waiting list and thousands die waiting each year, because human organs are a fixed and inadequate supply. Xenotransplantation is the only approach that changes the supply rather than rationing it better.\n\nThe two companies have made different bets on how much editing is required. United Therapeutics uses a source pig with ten gene edits; eGenesis uses sixty-nine. That is a genuine scientific disagreement about whether you need to remove every immunological red flag or just the ones that matter most, and the trials will settle it in a way no amount of argument could.\n\nI find this one of the most exciting things happening in medicine and I have no idea how to invest in it, which is a useful reminder that those are separate questions.',
    sources: [
      {
        title: 'Pig kidney transplants take a step forward with approval of human trials',
        publisher: 'CNN',
        url: 'https://www.cnn.com/2025/09/08/health/pig-kidney-transplant-human-trial-fda',
        publishedAt: 'September 8, 2025',
      },
      {
        title: 'World-first pig kidney trials mark turning point for xenotransplantation',
        publisher: 'Nature',
        url: 'https://www.nature.com/articles/d41591-025-00020-0',
      },
    ],
  },
  {
    id: '2026-05-xeno-trials-running',
    headline: 'Seventy patients will get pig kidneys this year',
    entryDate: 'May 2026',
    sortKey: '2026-05-16',
    entryType: 'clinical',
    scope: 'industry',
    themes: ['xenotransplantation'],
    relatedEntryIds: ['2025-12-xeno-ind'],
    analysis:
      'Both multicentre trials are enrolling, with United Therapeutics planning up to 50 patients and eGenesis 33 over about two and a half years. NYU Langone performed the first transplant in the gene-edited pig kidney trial.\n\nContext for what counts as progress here: an earlier eGenesis kidney supported a patient for nine months under expanded access, and Towana Looney lived dialysis-free for 130 days. Those were individual cases. Seventy patients in structured trials is the point at which you start learning things that generalise, like which immunosuppression regimen works and what the actual failure mode is.\n\nIf a pig kidney reliably gives someone two or three dialysis-free years, that is not a cure and it is an enormous change in quality of life for a population currently spending twelve hours a week attached to a machine.',
    sources: [
      {
        title: 'First Gene-Edited Pig Kidney Transplant Clinical Trial Begins at NYU Langone Health',
        publisher: 'NYU Langone',
        url: 'https://nyulangone.org/news/first-gene-edited-pig-kidney-transplant-clinical-trial-begins-nyu-langone-health',
      },
    ],
  },
  {
    id: '2026-06-xeno-animal-testing-tension',
    headline: 'Two things I am excited about are in direct conflict',
    entryDate: 'June 2026',
    sortKey: '2026-06-12',
    entryType: 'industry-observation',
    scope: 'industry',
    themes: ['xenotransplantation', 'nams'],
    relatedEntryIds: ['2026-03-nam-guidance-confirms', '2025-12-xeno-ind'],
    analysis:
      'Reporting this month points out something I had not considered. Reducing animal testing and advancing xenotransplantation pull against each other, because xenotransplantation research is inherently animal research. You cannot develop a gene-edited pig organ without gene-edited pigs, and the preclinical work runs through non-human primates.\n\nI do not think there is a clean resolution and I am not sure the tension is a problem so much as a reminder that policy written for one purpose lands on everything. A guidance framework designed to stop unnecessary monkey toxicology studies for antibodies also touches a field where primate work is the only route to saving a hundred thousand people from dialysis.\n\nMostly I am noting this because I wrote enthusiastically about both developments within six months and had not connected them. That is the kind of thing writing entries down catches.',
    sources: [
      {
        title: 'Ending animal testing could set back xenotransplantation just as the field is poised for a breakthrough',
        publisher: 'STAT',
        url: 'https://www.statnews.com/2026/06/09/pig-organ-transplant-animal-testing-impact-xenotransplantation/',
        publishedAt: 'June 9, 2026',
      },
    ],
  },
  {
    id: '2025-12-ai-antibiotics',
    headline: 'A generative model designed antibiotics that do not resemble any existing class',
    entryDate: 'December 2025',
    sortKey: '2025-12-16',
    eventDate: 'Published in Cell, August 2025',
    entryType: 'clinical',
    scope: 'industry',
    themes: ['ai-drug-discovery'],
    analysis:
      'MIT generated more than 36 million candidate compounds and screened them computationally for antimicrobial activity. The top candidates are structurally unlike any antibiotic currently in use and appear to work by disrupting bacterial membranes through mechanisms that are new. One, DN1, cleared an MRSA skin infection in mice, and others target drug-resistant gonorrhoea.\n\nThis is the application of generative chemistry I find most compelling, and the reason is economic rather than scientific. Antibiotics are the clearest market failure in medicine. A new one should be used as little as possible to preserve it, which means the commercial reward for developing it is close to zero, which is why almost nobody does. Several antibiotic companies have gone bankrupt after successfully getting a drug approved.\n\nGenerative design attacks the cost side of that equation. If exploring novel chemical space becomes computational rather than requiring years of medicinal chemistry, the discovery cost falls far enough that the terrible commercial economics might stop mattering as much.\n\nIt is telling that Phare Bio, the organisation advancing these candidates, is a nonprofit. That is an honest admission about the market. But a nonprofit that can afford to run discovery because the compute is cheap is a genuinely new answer to a problem that has resisted every other one.',
    sources: [
      {
        title: 'Using generative AI, researchers design compounds that can kill drug-resistant bacteria',
        publisher: 'MIT News',
        url: 'https://news.mit.edu/2025/using-generative-ai-researchers-design-compounds-kill-drug-resistant-bacteria-0814',
        publishedAt: 'August 14, 2025',
      },
    ],
  },
  {
    id: '2026-02-ai-antibiotics-followup',
    headline: 'MIT maps how the new antibiotic actually works, which matters more than finding it',
    entryDate: 'February 2026',
    sortKey: '2026-02-04',
    entryType: 'clinical',
    scope: 'industry',
    themes: ['ai-drug-discovery'],
    relatedEntryIds: ['2025-12-ai-antibiotics'],
    analysis:
      'Follow-up work using AI to map how one of the new compounds targets gut bacteria specifically.\n\nThis is the unglamorous half and it is where the value is. Generating a molecule that kills bacteria is not hard. Generating one that kills the pathogen without destroying the gut microbiome is the difference between a drug and a disinfectant, and understanding the mechanism is what lets you steer that.\n\nI would rather see a company that can explain why its molecule works than one that has more molecules.',
    sources: [
      {
        title: 'AI maps how a new antibiotic targets gut bacteria',
        publisher: 'MIT News',
        url: 'https://news.mit.edu/2025/ai-maps-how-new-antibiotic-targets-gut-bacteria-1003',
      },
    ],
  },
  {
    id: '2026-01-mrna-vaccine-5yr',
    headline: 'Five years on, the melanoma vaccine is still cutting recurrence risk by half',
    entryDate: 'January 2026',
    sortKey: '2026-01-15',
    entryType: 'clinical',
    scope: 'industry',
    themes: ['cancer-vaccines'],
    analysis:
      'Moderna and Merck released five-year follow-up from KEYNOTE-942. Their personalised mRNA vaccine combined with Keytruda continues to reduce recurrence or death by 49 percent versus Keytruda alone in resected high-risk melanoma, identical to the three-year figure.\n\nThe durability is the whole point. Immunotherapy results frequently look excellent at two years and then converge as the untreated arm catches up. A curve that stays separated for five years suggests you did not delay recurrence, you prevented it in a subset of people.\n\nWhat this actually is, mechanically, still amazes me. You sequence a patient\'s tumour, identify mutations unique to that tumour, design an mRNA sequence encoding those specific mutant fragments, and inject it so the immune system learns to recognise cancer cells by markers that exist only in that one person. It is a drug manufactured for a single patient, and unlike KJ Muldoon\'s case it is being done at trial scale with Phase 3 studies now running across three tumour types in dozens of countries.\n\nThe bottleneck is manufacturing. Every dose is bespoke, sequencing to injection takes weeks, and a cancer patient does not have unlimited weeks. Whoever industrialises that process captures most of the value here, and it will probably not be a scientific advance that does it.',
    sources: [
      {
        title: "Merck & Moderna's Personalized mRNA Vaccine Sustains 49% Risk Reduction in Melanoma at Five Years",
        publisher: 'PackGene',
        url: 'https://www.packgene.com/frontier/012026-merck-modernas-personalized-mrna-vaccine/',
        publishedAt: 'January 2026',
      },
      {
        title: 'Moderna and Merck Announce mRNA-4157/V940 Met Primary Efficacy Endpoint in KEYNOTE-942',
        publisher: 'Merck',
        url: 'https://www.merck.com/news/moderna-and-merck-announce-mrna-4157-v940-an-investigational-personalized-mrna-cancer-vaccine-in-combination-with-keytruda-pembrolizumab-met-primary-efficacy-endpoint-in-phase-2b-keynote-94/',
      },
    ],
  },
  {
    id: '2026-05-biontech-pancreatic',
    headline: 'BioNTech is aiming a personalised vaccine at pancreatic cancer, which is the hard one',
    entryDate: 'May 2026',
    sortKey: '2026-05-28',
    entryType: 'clinical',
    scope: 'industry',
    themes: ['cancer-vaccines'],
    analysis:
      'Autogene cevumeran is in Phase 2 across pancreatic ductal adenocarcinoma, melanoma, bladder and colorectal cancer, built around twenty patient-specific neoantigens.\n\nPancreatic is the interesting choice and the brave one. Five-year survival is in the low teens, the tumour has famously few mutations for the immune system to recognise, and it sits inside a microenvironment that actively suppresses immune attack. Almost everything tried there has failed.\n\nIf a neoantigen vaccine produces durable responses in pancreatic cancer, it would say the approach works even where the target set is thin, which would be a much stronger claim than melanoma alone supports. Melanoma is the friendliest tumour in immunotherapy. Working there proves less than people assume.',
    sources: [
      {
        title: 'ASCO 2026 mRNA personalized tumor vaccine competitive landscape',
        publisher: 'Patsnap Eureka',
        url: 'https://eureka.patsnap.com/blog/life-science/asco-2026-mrna-personalized-tumor-vaccine-competitive-landscape-analysis/',
      },
    ],
  },
  {
    id: '2025-11-alzheimers-blood-test',
    headline: 'You can now detect Alzheimer\'s pathology from a blood draw',
    entryDate: 'November 2025',
    sortKey: '2025-11-28',
    eventDate: 'Lumipulse cleared May 2025; Roche Elecsys pTau181 cleared October 13, 2025',
    entryType: 'clinical',
    scope: 'industry',
    themes: ['diagnostics', 'aging'],
    analysis:
      'The FDA cleared Lumipulse in May, measuring the ratio of phosphorylated tau to beta-amyloid, and Roche\'s Elecsys pTau181 in October. The Roche test is the first blood biomarker cleared for primary care, with a negative predictive value around 97.9 percent.\n\nUntil now, confirming amyloid pathology required a PET scan costing thousands of dollars with limited availability, or a lumbar puncture, which is exactly as unappealing as it sounds. Most people with cognitive symptoms got neither and were diagnosed clinically, which is to say by guesswork.\n\nA blood test in primary care changes who gets diagnosed and when. That matters enormously more now that anti-amyloid drugs exist, because those drugs work best early and require confirmed amyloid to prescribe. A diagnostic bottleneck was quietly capping the entire treatment market.\n\nThe primary care point is the one I keep thinking about. Specialists were never the constraint. There are not enough neurologists and there never will be. Anything that moves a decision into a GP office is a bigger deal than a marginal improvement in the drug.',
    sources: [
      {
        title: 'FDA Clears First Blood Test for Early Detection of Alzheimer-Linked Amyloid Plaques',
        publisher: 'AJMC',
        url: 'https://www.ajmc.com/view/fda-clears-first-blood-test-for-early-detection-of-alzheimer-linked-amyloid-plaques',
      },
      {
        title: "Roche's Elecsys pTau181 becomes the only FDA-cleared blood test for primary care",
        publisher: 'StockTitan',
        url: 'https://www.stocktitan.net/news/RHHBY/roche-s-elecsys-p-tau181-becomes-the-only-fda-cleared-blood-test-for-mebe9f59et6q.html',
      },
    ],
  },
  {
    id: '2026-03-lumipulse-recall',
    headline: 'The Alzheimer\'s blood test gets a recall, and this is why diagnostics are hard',
    entryDate: 'March 2026',
    sortKey: '2026-03-26',
    entryType: 'clinical',
    scope: 'industry',
    themes: ['diagnostics'],
    relatedEntryIds: ['2025-11-alzheimers-blood-test'],
    status: 'retrospective',
    analysis:
      'A Class II recall on specific Lumipulse lots after unexpectedly high false-positive rates, apparently traced to a manufacturing issue, with corrected lots being released.\n\nI was enthusiastic about this test in November and I still am about the category. But this is a useful correction to how I was thinking. A false positive here is not an inconvenience. It is telling someone they probably have Alzheimer\'s disease, and potentially starting them on an expensive antibody with real risks.\n\nDiagnostics get evaluated on sensitivity and specificity in a clinical study and then live or die on manufacturing consistency across thousands of lots in the field. Those are different capabilities, and the second one is where diagnostics companies actually fail. I had been treating clearance as the finish line.',
    sources: [
      {
        title: "New blood tests for Alzheimer's disease",
        publisher: 'Parsemus Foundation',
        url: 'https://www.parsemus.org/2026/03/new-blood-tests-for-alzheimers-disease/',
      },
      {
        title: "New FDA-approved blood tests for diagnosing Alzheimer's disease",
        publisher: 'Mayo Clinic',
        url: 'https://www.mayoclinic.org/diseases-conditions/alzheimers-disease/in-depth/new-blood-tests-alzheimers/art-20585060',
      },
    ],
  },
  {
    id: '2026-06-rfdiffusion3',
    headline: 'RFdiffusion3 goes open source and can design proteins that bind DNA',
    entryDate: 'June 2026',
    sortKey: '2026-06-24',
    entryType: 'platform',
    scope: 'industry',
    themes: ['ai-drug-discovery'],
    relatedCompanyIds: ['xaira'],
    analysis:
      'Baker lab released the third generation of RFdiffusion openly, extending de novo design to proteins that interact with DNA and small molecules, and to catalytic enzymes.\n\nEnzyme design is the part I find most exciting and it has almost nothing to do with medicine. If you can specify a chemical reaction and generate a protein that catalyses it, you are describing a general-purpose manufacturing technology: plastic degradation, carbon capture, industrial chemistry currently run at high temperature and pressure. Biology does this at room temperature in water.\n\nThe open sourcing is what makes it consequential rather than impressive. Anyone can now run this, which raises the floor across the field and simultaneously removes model quality as a differentiator for the companies that were selling it. That is the same dynamic I keep writing about with BioNeMo and Anthropic, arriving from a third direction.\n\nSeparately, recent binder work is producing affinities from 76 picomolar to mid-nanomolar against therapeutically relevant targets like KIT, PDGFRα and ALK-2. Picomolar affinity from a computationally designed binder against a chosen target would have been an extraordinary claim three years ago.',
    sources: [
      {
        title: 'RFdiffusion3 Now Open Source, Designs DNA Binders and Advanced Enzymes',
        publisher: 'GEN',
        url: 'https://www.genengnews.com/topics/artificial-intelligence/rfdiffusion3-now-open-source-designs-dna-binders-and-advanced-enzymes/',
      },
      {
        title: 'The past, present and future of de novo protein design',
        publisher: 'Nature',
        url: 'https://www.nature.com/articles/s41586-026-10328-7',
      },
    ],
  },
  {
    id: '2026-07-manufacturing-is-the-bottleneck',
    headline: 'Every personalised medicine I am excited about has the same bottleneck',
    entryDate: 'July 2026',
    sortKey: '2026-07-26',
    entryType: 'industry-observation',
    scope: 'industry',
    themes: ['gene-editing', 'cancer-vaccines', 'cell-therapy'],
    relatedEntryIds: ['2025-11-kj-muldoon', '2026-01-mrna-vaccine-5yr', '2026-02-invivo-cart-call'],
    analysis:
      'Writing this after noticing the same sentence in three separate notes.\n\nKJ Muldoon got a base editor designed for his single variant. Moderna and Merck make an mRNA vaccine from each patient\'s own tumour mutations. CAR-T means engineering one person\'s cells and giving them back. All three work. All three are limited by the same thing, which is that making one dose is a project rather than a production run.\n\nThe science in each case is close to solved in the sense that we know what to build. What we do not have is a way to build it a hundred thousand times without a hundred thousand skilled people, and the clock is unforgiving in a way it is not for conventional drugs. A pancreatic cancer patient waiting six weeks for a bespoke vaccine may not have six weeks.\n\nThis is why in vivo CAR-T commands the prices it does. It is not a better therapy than conventional CAR-T. It is the same therapy with the manufacturing step deleted.\n\nSo the thing I would most want to invest in, if I could find it, is not another modality. It is whatever makes bespoke biology manufacturable: closed-loop automated cell processing, distributed manufacturing at the hospital, standardised platforms where only the payload changes. That is an unglamorous engineering problem sitting underneath every exciting result of the last two years, and I think it is where a lot of the value ends up.',
    sources: [
      {
        title: 'A Year After First-in-World Gene-Editing Therapy, CHOP-Penn Team Aims to Scale the Science',
        publisher: 'CHOP Research Institute',
        url: 'https://www.research.chop.edu/cornerstone-blog/a-year-after-first-in-world-gene-editing-therapy-chop-penn-team-aims-to-scale-the-science',
      },
    ],
  },
  {
    id: '2026-08-what-im-most-excited-about',
    headline: 'The five things I would tell someone are genuinely exciting right now',
    entryDate: 'August 2026',
    sortKey: '2026-08-19',
    entryType: 'industry-observation',
    scope: 'industry',
    themes: ['gene-editing', 'nams', 'xenotransplantation', 'global-health'],
    relatedEntryIds: [
      '2025-11-kj-muldoon',
      '2026-03-nam-guidance-confirms',
      '2025-12-xeno-ind',
      '2025-12-lenacapavir',
      '2025-12-ai-antibiotics',
    ],
    analysis:
      'Almost everything else in this archive is about money and policy, so I want one entry that is only about what I think is worth being excited about.\n\nBespoke gene editing. One child, one variant, six months from diagnosis to dosing, and a year later he is going home and eating normally. If that becomes a process rather than a heroic effort, thousands of ultra-rare diseases that are currently untreatable because nobody can fund them become addressable.\n\nHuman tissue replacing animals as the reference standard for safety. Around nine in ten drugs that pass animal testing still fail in humans. If even part of that is species mismatch, the FDA reversing the burden of proof in March is one of the highest-leverage changes anyone has made to how drugs are developed.\n\nPig kidneys. A hundred thousand Americans on a waiting list, thousands dying on it, and the only approach that increases supply rather than rationing it is now in real trials with seventy patients.\n\nLenacapavir. Two injections a year, over 99 percent protection, and a generic at around $40 a year expected in 2027 against $28,000 today. The hard problem in HIV prevention was never efficacy, it was that people cannot take a daily pill for a decade, and someone solved that with chemistry instead of asking people to try harder.\n\nGenerative antibiotics. The market for antibiotics is broken in a way no policy has fixed, and making discovery computational is the first credible attack on the cost side of that equation.\n\nWhat these share is that none of them is an incremental improvement to something that already works. Each one changes what is possible rather than how well it is done, and four of the five are being driven by people who are not going to make much money from them. That last part is worth sitting with, given how the rest of this archive reads.',
    sources: [
      {
        title: "World's First Patient Treated with Personalized CRISPR Gene Editing Therapy",
        publisher: "Children's Hospital of Philadelphia",
        url: 'https://www.chop.edu/news/worlds-first-patient-treated-personalized-crispr-gene-editing-therapy-childrens-hospital',
      },
      {
        title: 'World-first pig kidney trials mark turning point for xenotransplantation',
        publisher: 'Nature',
        url: 'https://www.nature.com/articles/d41591-025-00020-0',
      },
    ],
  },
];
