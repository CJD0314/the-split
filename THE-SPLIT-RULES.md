# THE SPLIT — upload rules

Never ship a stub, wrapper, iframe, or `filename (1).html` as the live page.

## File names
- Home: `index.html` only. Do not leave a redirect sitting on `index.html`.
- NFL dive: `nfl-week-X-away-home.html` (away first, home second). Example: `nfl-week-1-ne-sea.html`.
- Results: `results.html`.
- If a download creates `file (1).html`, copy that content onto the real name, then delete the `(1)` file.

## Every NFL primetime dive (TNF / SNF / MNF) must include, in this order
1. One header bar: TODAY · NFL · BET TRACKER. Not sticky-frozen stacked bars. No iframe.
2. THE SPLIT / NFL WEEK N · night / both logos / full team names / time · stadium · network. No version stamp in the header.
3. Four DK tiles: SPREAD, TOTAL, MONEYLINE, SITE/WX — current + opening. Source: DraftKings.
4. FROM LAST WEEK — two results, one lesson.
5. TEAM BREAKDOWN — both teams. HC, OC, DC. Write `(calls plays)` when true. Identity tonight. One defensive tell.
6. INACTIVES — table only. Official list at T-90.
7. SCRIPT — score band + why the number moved.
8. 10,000-GAME SIMULATOR — recipe + side power + total power, four result tiles plus margin buckets, full DK pool minus zeros, `$11,400` salaries, DK points that add up to team totals, board props, three bullets max, empty after-game residual row. Final rerun at T-90 inactives.
9. SHOWDOWN — CPT, two cores, one fade. No second salary table.
10. BEST BET last — one table, stamps only.

Do not ship standalone DK SALARIES, WR VS CB, or LINEUP ENTRY REVIEW on primetime pages. Those notes fold into TEAM BREAKDOWN and SHOWDOWN.

## Upload checklist (do this every commit)
- [ ] Live filename is the canonical name, not `(1)`.
- [ ] Page is one HTML file. No iframe wrapping another HTML file.
- [ ] Only one header.
- [ ] All ten sections above are present with real notes, not placeholders.
- [ ] Results ledger matches the dive’s closing number.
- [ ] After push, open the live URL and confirm the page is the long version.

## Do not
- Redirect `index.html` to `index (1).html`.
- Wrap the dive in an iframe to “add a header.”
- Overwrite a 15kb+ dive with a 2kb stub.
- Ask the user to restate these rules on the next update.
- Treat "update" as the full close-yesterday / board-today pass in BET-STANDARD.md. Do not ask which tab.
