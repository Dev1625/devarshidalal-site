import type { MacroThesis } from './fund';

// Retired views remain readable. Factual errors in the September price and award comparisons are corrected.
export const THESIS_HISTORY: MacroThesis[] = [
  {
    "version": "Rewritten September 2026",
    "headline": "Whether a healthcare software company works comes down to which budget pays for it. I can only find three that hold up: pharma marketing, a cut of the money you collect, and a billing code.",
    "stats": [
      {
        "label": "US hospital operating margin, 2026 so far",
        "value": "1.7%, and down about 5% from last year"
      },
      {
        "label": "Cost of a similar ambient scribe",
        "value": "$99 a month at Freed, about $2,500 a year at Abridge"
      },
      {
        "label": "Doximity revenue growth, this year into next",
        "value": "13%, guided down to 4%"
      },
      {
        "label": "What the new AI billing codes cover",
        "value": "Diagnostic results, not notes"
      }
    ],
    "body": [
      "People keep arguing about whether clinical AI is a feature or a real company. I do not think the products can settle it, because they are getting harder to tell apart. Epic put its own AI charting into general release in February. Freed sells a scribe for $99 a month and Abridge sells one for about $2,500 per clinician a year. On an annual basis that is roughly a 2.1-fold price difference; it does not establish equivalent functionality.",
      "So I stopped comparing products and started asking a duller question. Whose budget does the invoice come out of? Hospital operating margin was 1.7 percent year to date in March, and it fell about 5 percent nationally across the first five months of 2026. Sell into that budget and you are competing with nurse staffing, you go through procurement, and you have to show a return inside the same fiscal year. I had written a version of that sentence about aging products, then about stroke software, then about hospital finances, before I noticed I had been circling the same idea for nine months without ever saying it plainly.",
      "The first budget that works is pharma marketing. OpenEvidence charges doctors nothing and sells access to verified prescribers instead. It went from about $150 million annualised at the end of 2025 to roughly $300 million by the middle of 2026, at close to 90 percent gross margin. No hospital had to approve that spend, because there was nothing to approve.",
      "The second is a cut of the money you collect. Revenue cycle software is priced at three to five percent of what it brings in, against six to twelve percent for doing the billing in house. It pays for itself, so it never queues behind the IT budget. That is why revenue cycle was the most heavily consolidated category of the half year, why Ensemble traded at around $12 billion, and why Abridge, Nabla and Commure all moved into it. Abridge won Best in KLAS for Ambient AI within the Revenue Cycle Management category; that does not measure standalone RCM revenue.",
      "The third is a billing code. In January the AMA gave AI services Category I CPT status for the first time, which sounds like a general opening until you read which services actually got one. Coronary plaque assessment. Cardiac risk from the fat around the arteries. Burn wound classification. AI that returns a result a hospital can bill for now gets paid for it. AI that returns a note still does not.",
      "The part that should worry anyone holding the pharma-funded companies, me included, is that the best of the three budgets is an advertising budget. Doximity is the only public company making money from doctors the same way. It grew 13 percent last fiscal year and has guided investors to 4 percent this year, saying demand for HCP digital pharma advertising is soft and that clients are committing for shorter periods. If that pool is growing at 5 percent or less and OpenEvidence doubled inside it, then OpenEvidence is taking Doximity's share rather than opening a new market. It is still the best business I follow. But the ceiling is set by somebody else's ad budget, and I have not seen anyone price it that way. That is also the answer to the OpenEvidence question I said in August I could not work out."
    ],
    "pillars": [
      {
        "label": "Ambient documentation gets you in the door and not much further",
        "body": "Epic put its own AI charting into general release in February 2026, and health systems started rethinking their standalone scribe contracts within weeks. Every company doing well in this category has already moved somewhere else. Abridge took equity from Lilly and went into trial recruitment and revenue cycle. Ambience became the ambient vendor Epic distributes, which is a good outcome and also a ceiling. Transcription is what gets a company into the room. It is also the part that keeps getting cheaper.",
        "test": "If Abridge keeps its per-seat price and holds net revenue retention above roughly 110 percent through 2027, with Epic's own tool available the whole time, then documentation defends itself and I am wrong."
      },
      {
        "label": "In devices, the billing code matters more than the FDA clearance",
        "body": "Precision Neuroscience has had 510(k) clearance since April 2025, but only for implants that stay in up to thirty days, which is not something a hospital can build a service line around. Synchron holds the first IDE for a permanently implanted BCI and is running a pivotal trial. Neither has a route to getting paid by CMS, and no implanted BCI in the United States does. China approved Neuracle's NEO on 13 March 2026 and its health security administration attached a reimbursement code almost straight away, because it had set the pricing up a year before the device existed. Everyone argues about electrodes. This is the part that will decide it.",
        "test": "A Category I CPT code or a national coverage decision for an implanted BCI before 2029. If that turns up early, I have underrated how quickly the payer side moves once a device is real."
      },
      {
        "label": "A lot of the cash-pay story is people who lost a subsidy",
        "body": "The cash-pay thesis, which a16z calls insurance defection, treats people paying out of pocket as a durable group who prefer it that way. Some of them are. Function at $2.2 billion and Oura at $11 billion are not selling to distressed buyers. But the enhanced ACA subsidies ran out at the end of 2025, and the share of marketplace enrollees getting a tax credit fell from 92 to 87 percent, the first drop since 2020. KFF expected what enrollees pay to rise 114 percent. It rose 58 percent, because people moved to cheaper plans with higher deductibles rather than dropping coverage. Someone with a higher deductible pays cash for more things without ever having chosen to. That is a different customer from the one in the pitch decks.",
        "test": "Cash-pay volume still growing through 2027, once the subsidy change has annualised. If it holds up, then people really do prefer it and I have called this wrong."
      }
    ],
    "whereIAmUnsure": "The billing code argument is the one I can check least well. Category I status arrived in January and I am reading three codes as if they were a trend, which is thin. The AMA could widen the taxonomy over the next two years, and then the line I am drawing between a billable result and a note would stop meaning anything. I am also leaning hard on one public comparable for the central claim, and building an argument on a single comp is the thing I complain about when other people do it.",
    "lastUpdated": "September 2026"
  }
];
