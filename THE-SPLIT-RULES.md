# THE SPLIT -- locked template
Source of truth: nfl-week-1-sf-lar.html as of 2026-09-09 night, plus Friday CFB boards (miz-ku / lou-vill / uva-norf) for college.
Every future dive copies that page. NFL and college football use the same breakdown.

Must match:
- One HOME header on a dive. REVIEW is its own page after the game is final.
- Brand, week, centered logos, full names, time / venue / network
- Four centered tiles: SPREAD / TOTAL / MONEYLINE / MOVE
- SPREAD, TOTAL, MONEYLINE each show Current: and Open: in the same large white type
- MOVE is ONLY open-to-current line movement. Nothing about players, coaches, injuries, TV, or narratives.
- MONEYLINE lists the price. Write "heavy" only if the favorite is worse than -600.
- TEAM BREAKDOWN uses .tb-row. ONE heading spans both teams.
- After the game: REVIEW page. Correct / incorrect / missed / get better. Betting lessons only. No shop notes.

## LAST UPDATED
One file: updated.js. That is the site clock.
stamp.js paints LAST UPDATED on every page that loads it (TODAY, NFL, CFB, MLB, BET TRACKER, identities, DFS sheets).
Every content commit must rewrite updated.js to the minute of that commit:
LAST UPDATED: Ddd Mon DD, YYYY h:mm a.m./p.m. ET
Do not leave a stale stamp on a hub after you touch tracker, notes, identities, or a dive.

## BET TRACKER
$100 unit. DraftKings close. Kickoff freezes pick, close, stake.

## LEARNING LOOP
Settled tickets write on-field rules into playbook.json. Next board cites the rule. No shop process on the public site.
