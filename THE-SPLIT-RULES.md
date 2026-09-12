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
- TEAM BREAKDOWN uses .tb-row. ONE heading spans both teams (STAFF, WHAT THAT MEANS THIS WEEK, KEY PLAYERS, IN THE NEWS). Team logos sit in the first row, 48px left of the name, same as NFL.
- Staff labels: (calls plays - offense) and (calls plays - defense)
- Personnel always translated in parentheses when used
- Travel notes live in IN THE NEWS only
- INACTIVES split by team, then offense / defense. Team name once.
- SCRIPT: TEAM WINS IF -- winning score first. Specific downs, red zone, who has to stay clean. No base-band box.
- WR VS CB split by team. Table columns: Receiver, Team, Primary cover, Game effect, Why it matters.
- BEST BET: pick, juice, stake to win $100. Why uses the number, the tape, and the sit that actually moves the bet.
- College football: no DFS, no DK salaries, no lineup review. No CFB TD or player props unless the user asks.
- NFL primetime only: DK salaries + lineup review
- After the game: REVIEW page. Correct / incorrect / missed / get better.

## BET TRACKER
Home subsection is BET TRACKER (not Results). $100 unit. DraftKings close.
- OPEN rows may take an updated close price until kickoff.
- At kickoff the pick, close number, and stake freeze. They do not get rewritten to a better number after the fact.
- After the game, only FINAL, RESULT, and P/L update.
- Do not add a settled bet that was not on the board before kickoff.
- SETTLED P/L is the running total of closed rows only. OPEN rows are not in the total.

## LEARNING LOOP
Every settled ticket writes one rule into tracker.json book[] if the review produced a new lesson.
Next board in that sport MUST cite the matching rule in BEST BET or FADES.
If confidence is FADE, do not fire a full juice favorite just to fill the card.
A plus-money dog needs the starter to keep it close.
Do not stamp FADE and still treat the ticket like a BET.
Hourly job: grade, review, then update book / loops / fades. That is the growth pass.
