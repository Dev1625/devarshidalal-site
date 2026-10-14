# Hosted healthcare maintenance coordination

This branch stores public technical coordination only. It is never the production source and must never be merged into main. Always fetch current remote main for site work. Do not store private owner records, credentials or unpublished personal additions here.

Runtime: hosted ChatGPT automation with connected GitHub and Vercel, plus an ephemeral cloud shell. No desktop, Windows path, local automation or persistent local worktree is required. Scheduling remains in ChatGPT; this repository does not schedule runs.

## Atomic shared lock

The only coordination record is .healthcare-cloud/state.json on branch healthcare-maintenance-state.

1. Fetch state.json using connected GitHub fetch_file with that explicit branch. Retain the returned blob SHA.
2. If lock is null, set lock to a unique run owner, acquiredAt UTC timestamp, Eastern review date and run kind. Increment revision. Preserve every other field. Use connected GitHub update_file with the exact fetched blob SHA and this explicit branch.
3. A 409 or ambiguous result grants no ownership. Read back. Proceed only if lock.owner exactly equals this run's token and the write was verified. A competing owner must not edit candidate content, publish, checkpoint or release.
4. Every coordination write requires a fresh read, matching owner and blob-SHA-guarded update, with revision incremented. Monotonic revision prevents reuse of an old unlocked blob SHA.
5. Do not use forced ref updates, blind overwrites, elapsed-time lock expiry or delete/recreate. If another owner is active, leave its work intact. The winner's workflow covers both reviews on Saturday. If a lock appears abandoned, inspect pending candidate and deployment state; report the exact recovery requirement. Never steal an uncertain lock.
6. Release by setting lock to null after saving checkpoints or recoverable failure state, incrementing revision and using a fresh SHA. Read back to verify. If release cannot be verified, report it.

## Safe serial workflow

On any Eastern Saturday, whichever task acquires the lock performs the pending-publication recovery, daily review, then thesis review, in that order. This is authorized regardless of which of the two scheduled tasks won. Reuse evidence and skip each stage already successfully completed for that Eastern date. The other task returns quietly if the same date is complete or a verified peer owns the lock. The daily trigger still runs every day, including Saturdays and Sundays; the Saturday trigger still runs at its agreed time. Do not shift schedules to achieve ordering.

Before new research, recover pendingPublication under the lock. Inspect current remote main and Vercel. If the exact pending commit is already READY on the production domain, verify affected live pages and checkpoint it. If unpublished, reconcile its isolated candidate against current main, preserve others' changes, validate the resulting exact candidate and finish it. Keep source evidence, candidate branch/SHA, base SHA, modes and Eastern dates in pendingPublication so interrupted work can be recovered. Store only public healthcare evidence and technical data. Never mark a failed or partially verified publication successful.

The daily checkpoint starts at 2026-10-13 from owner confirmation, with an unknown cutoff time. Overlap October 13 in the next delta scan and deduplicate existing notes. A no-change review may advance its review checkpoint after actual research, with no content-only cosmetic commit. A changed review advances only after exact-commit READY and live verification.

Record at most a compact recent run history, relevant successful review dates, source windows and production SHA/deployment ID. Preserve earlier checkpoints. A skipped run is not a successful review.

## Candidate and publication gate

Read latest main HEALTHCARE_MAINTENANCE.md and WEBSITE_VOICE.md. Their local worktree advice is superseded for these hosted jobs. Use a clean cloud checkout of current remote main. Candidate edits must stay within healthcare, directly related counts and metadata. Fetch main again before publication.

Every exact candidate must pass npm ci, npm run check:healthcare and npm run build in a cloud shell. Do not read secrets or purchase APIs/services. If the cloud shell/build path is unavailable, use an isolated GitHub candidate branch with a successful GitHub Actions content/build check before main advances. If that check capability is unavailable too, retain the candidate and report the missing step; no gate bypass is allowed.

Use connected GitHub writes for immutable candidate blobs/tree/commit or an isolated candidate branch. Validate the exact tree locally, read back the remote candidate and compare hashes. Publish with update_ref for main, force:false, after rechecking its current head. A concurrent main change requires reconciliation and a fresh validation of the resulting candidate. Never advance main to an unvalidated merge.

Use the existing Git-triggered production deployment. Confirm Vercel READY for the exact published SHA, project prj_MP6HX6J1BbTgjb13bfijIqAIJFsw and team team_xHBV5hVB1Mej8bOt9eHKI6Iq, on devarshidalal.com. Inspect /fund, current and archive counts, stable memo URLs, changed memos, Home healthcare counts and Following filters. A push alone does not establish publication. If Git deployment fails to start, use the connected Vercel deployment tool for the exact tested commit, existing project and production target.

Stay quiet for no material change. Notify only on meaningful publication, failure or required owner action. Do not pause or delete the two original LOCAL heartbeats from a cloud job.

## Setup verification

On 2026-10-13 Eastern, connected GitHub authenticated as Dev1625, confirmed repository admin/push, read latest main instructions, and created this separate coordination branch. Lock acquisition/readback succeeded; a stale competing write was rejected with HTTP 409; owner release succeeded. Production main remained f47ad390a31d1c82ce59f55f8d4dab92f8d2e0c1, confirmed READY on the existing domain. Cloud clone and dependency installation succeeded. Build result is recorded in state.json after completion. No new healthcare research or content publication was performed.
