# devarshidalal.com

Personal site. The main thing here is a healthcare investment research notebook: twelve
structured company memos and a dated archive of notes on what is happening across
biopharma, clinical AI, medical devices, care delivery and healthcare policy.

Nothing on the site is investment advice and no capital is managed. The memos are written
as a way of forcing clear thinking, and the archive is a record of how that thinking
changed, including where it was wrong.

## Stack

Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, Motion, Lenis.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

Only run one dev server at a time. Two `next dev` processes sharing the same `.next`
directory overwrite each other's compiled CSS and the site renders unstyled with no error.

## Content

Content is data, not markup. Adding to the site means editing a TypeScript object, never a
component.

| What | Where |
| --- | --- |
| Company memos, macro thesis, intro | `lib/fund.ts` |
| Coverage entries | `lib/coverage/entries-*.ts` |
| Entry types, filters, featured list | `lib/coverage/types.ts` |
| Merge, search and grouping helpers | `lib/coverage/index.ts` |

A new coverage note is one object appended to whichever `entries-*.ts` file matches its
date. It flows into the timeline, the filters, the search index and, if it names a company
in `relatedCompanyIds`, that company's memo page. Nothing else needs to change.

## Build

```bash
npm run build
```
