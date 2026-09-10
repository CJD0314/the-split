# THE SPLIT — upload rules

Applies to every breakdown from here forward.
Approved look locked 2026-09-09. Do not revert.

## Frozen chrome
- Home: THE SPLIT title, one-line summary, NFL / MLB / NBA / NHL as large white headings.
- DEEP DIVES and RESULTS: gold #d4a017, smaller than NFL (about 15px). Matching + dropdown buttons.
- Week buttons: only the selected week is green. Week 1 is not permanently lit.
- Game rows: logos + network.
- Dive page: one HOME / RESULTS bar. No iframe. No stacked headers.
- Results: $100-unit ledger, closing DraftKings juice.
- Do not redesign unless asked. Do not invent new nav.

## Allowed on an update
- New game data only.
- New file `nfl-week-X-away-home.html` copied from the last finished dive.
- Add that game to the week list and results.html.
- Fix a factual error.

## File names
- Home live file currently `index (1).html` until we flatten names. Do not restyle it back to white subheads.
- Dives: `nfl-week-X-away-home.html`.
- Results: `results.html`.
- Never ship a stub over a finished page.

## Every NFL dive, in order
1. One header: HOME and RESULTS.
2. Brand / week / logos / full names / time, stadium, network.
3. DK tiles: SPREAD, TOTAL, MONEYLINE, MOVE — current + open.
4. TEAM BREAKDOWN with HC, OC, DC and (calls plays).
5. INACTIVES with depth and 1-10 impact.
6. SCRIPT with score band.
7. WR VS CB with notes.
8. DK SALARIES.
9. LINEUP ENTRY REVIEW.
10. BEST BET last, $100, honest DK close.
