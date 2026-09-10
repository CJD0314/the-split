# THE SPLIT — upload rules

Applies to every breakdown from here forward, not just NE vs SEA.

## Frozen chrome — do not redesign unless asked
- Home page structure stays: THE SPLIT title, one-line summary, NFL / MLB / NBA / NHL buttons, Deep Dives and Results as matching dropdown buttons, week buttons, game rows with logos + network.
- Dive page structure stays the NE-SEA layout: one HOME / RESULTS bar, brand, week, logos, full names, four DK tiles, then the same dropdown sections in the same order.
- Results page stays a $100-unit ledger.
- Do not add iframes, sticky stacked headers, extra landing pages, or experimental nav.
- Do not turn `index.html` into a redirect.
- Do not invent a new visual system mid-week.

## What is allowed to change on an update
- New game data only: lines, inactives, script, matchups, salaries, lineup, best bet.
- Add a new `nfl-week-X-away-home.html` copied from the last finished dive.
- Add that game to the existing week list and to `results.html`.
- Fix a factual error (wrong juice, missing DC, inactive declared).

## File names
- Home: `index.html` only.
- NFL dive: `nfl-week-X-away-home.html` (away first).
- Results: `results.html`.
- If a computer download creates `file (1).html`, copy onto the real name and delete the `(1)` file. Never leave `(1)` as the live page.

## Every NFL dive must include, in this order
1. One header: HOME and RESULTS.
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
- Touch only the files that need new game data.
- One HTML file per dive. No wrapper.
- After push, open the live URL and confirm the long version is up.
