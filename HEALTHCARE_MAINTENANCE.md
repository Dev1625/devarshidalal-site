# Healthcare research maintenance

Maintain the healthcare research portfolio at https://devarshidalal.com/fund. The owner has authorised direct publication of both routine updates and major changes to company selection or the macro thesis. This is a research portfolio for venture capital and growth equity readers. It does not establish that the owner invested capital in the companies covered.

## Scope and voice

Maintain Healthcare only: the thesis, company memos, past research cases, Following entries and their sources. Update related Home counts and healthcare metadata when needed. Leave biography, personal experience, Research and Library alone. Never invent a founder conversation, personal interaction, investment or return. Founder log content needs information supplied by the owner.

Write in the existing exploratory student voice, in first person, with specific observations, subjective reactions and honest uncertainty. Preserve good existing prose. Separate what a source says from what I infer. Avoid press-release language, generic praise, repetitive conclusions and unsupported certainty. A modest update is better than pretending to have a differentiated view. Do not manufacture changes or add news merely to fill a daily quota.

Prefer private medtech, biotech and life sciences businesses. Software, care delivery and insurance can belong when the evidence supports a stronger case. Public companies can belong with an explicit reason, such as unusually useful disclosure or a strong comparative case. There is no fixed number of current companies; select enough to investigate well. Existing ten active memos are the starting collection, not a permanent constraint.

## Daily run

Research material developments since the last successful review, including any missed days. Prioritise currently followed companies and their competitors, financing, licensing and M&A, clinical results, trial milestones, devices, regulatory decisions, manufacturing and changes in leadership. Include wider healthcare developments when they change a case or raise a useful question.

Read the source passage before writing. Prefer company and investor disclosures, trial registries, regulatory publications, filings and original papers. Use reputable journalism for reported transactions and independent context. Distinguish announced, reported, proposed and completed deals; upfront consideration and contingent milestones; annualised estimates and audited revenue; company-reported adoption and independent outcomes; biomarkers and clinical outcomes; short-term procedures and permanent implants. Never infer an event did not happen merely because a search did not find it. No news is a valid result.

Add concise sourced Following notes with the writing date and actual event date separate. Link relevant companies. Refresh affected snapshot facts and memo sections consistently, keeping dates and estimates attached. Verify that source links support the specific claims. Daily work can correct a clear factual or arithmetic error immediately; defer a discretionary change to the company universe or overall thesis to the Saturday review unless a major event makes the current page misleading.

## Saturday review

Read the whole current healthcare collection and the latest week's evidence. Check each company's open diligence questions, risks, runway, value capture, entry valuation and what would change my mind. Search beyond the current names, especially private medtech, biotech and life sciences. Compare candidates against the existing cases rather than adding names because they raised money or received an award.

The owner authorises adding companies, retiring or replacing companies, changing conviction and rewriting the macro thesis entirely when evidence supports it. Keep existing cases if the evidence does not justify a change. Explain the substantive reason for additions, removals or major reversals in the memo or a concise dated note. No mandatory weekly rewrite, no turnover target, and no need to preserve a software-focused thesis.

## Archive and data

`lib/fund.ts` holds the current thesis, intro and all company memos. Use `status: 'archived'` and an `archivedReason` when retiring a name. Preserve its ID, memo URL, research period, outcome, lessons and linked dated notes. Keep all company objects in `COMPANIES`; `ACTIVE_COMPANIES` and `ARCHIVED_COMPANIES` derive the two lists. Do not delete a failed case or invent investor proceeds. Archived views are research history, not audited investment performance.

`lib/thesis-history.ts` preserves prior substantive theses. Keep historical predictions dated. A concise correction or revision note is enough; a formal revision log is not a priority. Clearly correct factual mistakes without silently changing a historical prediction into a successful call.

`lib/coverage/entries-YYYY-qN.ts` holds dated notes. Import new quarter files in `lib/coverage/index.ts`; the list sorts automatically and drives the date range, filters, search, Home counts and company histories. IDs must be unique. Keep all historical related company and entry IDs valid. Add sources and a `lastReviewed` date to affected memos, without suggesting all old claims were reverified if they were not. Current source lists are evidence for the latest review, not an assertion that every sentence is independently verified.

## Publish and verify

Repository: https://github.com/Dev1625/devarshidalal-site. Production branch: `main`. Vercel project: `prj_MP6HX6J1BbTgjb13bfijIqAIJFsw`; team: `team_xHBV5hVB1Mej8bOt9eHKI6Iq`. Preserve the existing audience and domain.

Reuse this chat's attached healthcare maintenance worktree when suitable. Fetch the current remote main before editing and advance the worktree only when its state is clean; never reset or overwrite unrelated work. The original project may contain unfinished Research edits and must not be deployed wholesale. If a new worktree is necessary, use the managed worktree tools and start from current `origin/main`. Keep the reusable maintenance worktree attached while the schedules need it.

Both schedules are due at 10 PM America/New_York, with the daily run on every day and the wider review on Saturdays. When they share an evening, execute them sequentially, reuse the first run's research and do not publish duplicate notes. If another run has made unpublished changes, finish or reconcile those changes before starting a second publication.

Run `npm run check:healthcare` and `npm run build` before publishing. Inspect the diff for scope, unsupported claims and preservation of old links. Commit only the intended healthcare changes. Push the tested commit to `main` without force. If Git-triggered deployment does not start, use the connected Vercel deployment tool for that exact commit, existing project and production target. Confirm READY and inspect the public `/fund` page, current list, archive, affected memos and Following filters. A successful push alone is not confirmed publication. Resolve a failed build before enabling new content.

For meaningful publications, report the important changes and live link. Stay quiet when there is no material update. Notify on publication failure or a concrete need for owner input. Never claim success without checking it.
