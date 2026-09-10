# THE SPLIT — upload rules

Never ship a stub, wrapper, iframe, or `filename (1).html` as the live page.

## File names
- Home: `index.html` only.
- NFL dive: `nfl-week-X-away-home.html` (away first). Example: `nfl-week-1-ne-sea.html`.
- Results: `results.html`.
- If a download creates `file (1).html`, copy that content onto the real name, then delete the `(1)` file.

## Every NFL dive must include, in this order
1. One header bar only: HOME and RESULTS. No stacked bars. No iframe.
2. THE SPLIT / NFL WEEK N / both logos / full team names / time, stadium, network.
3. Four DK tiles: SPREAD, TOTAL, MONEYLINE, MOVE — current + opening. DraftKings only.
4. TEAM BREAKDOWN: HC, OC, DC for both teams. Write (calls plays) when true. Never omit a coordinator.
5. INACTIVES: depth chart, 1-10 impact, NFL.com source.
6. SCRIPT: score band plus why.
7. WR VS CB: who covers who plus notes, including non-stars.
8. DK SALARIES: FLEX and CPT.
9. LINEUP ENTRY REVIEW: players with team, pos, salary, then grades.
10. BEST BET last: closing DK number, $100 unit, honest juice.

## Every commit
- Live filename is the canonical name.
- One HTML file.
- All ten sections present.
- Results ledger matches the dive.
