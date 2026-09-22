# BET STANDARD

Purpose: explore the whole market, post only live accurate DraftKings numbers, and get smarter after every card.

Applies to every ticket on TODAY, Bet Tracker, and every full breakdown. No exceptions.

## LEDGER LOCK
`tracker.json` is the record. SETTLED rows never leave.
- Read the live file first. Count `bets`.
- Patch by `id` or APPEND a new `id`. Never write fewer `bets` than you read.
- Forbidden: `bets: []`, PLACEHOLDER, a one-row stub, empty `loops`/`fades`, rebuilding from memory.
- "No OPEN tickets" is not an empty ledger.
- If the file is already empty, restore the latest commit whose message contains `RESTORE full` before any other edit.
- If a write would truncate the JSON, skip `tracker.json` that pass.

## What we post
- Source is always DraftKings.
- Number AND juice. Never `OU -3.5`. Always `OU -5.5 (-108)` or `DET -176`.
- Confidence on every ticket: BET / LEAN / FADE / PASS.
- CFB: side only unless told otherwise.
- MLB: ML + HR + player prop.
- NFL: side + TD + prop on primetime; side on the rest unless told.

## Confidence — BET / LEAN / FADE / PASS
LEAN is not the default fill. BET is scarce. FADE is a stay-away. PASS is a legal stamp.

### How to stamp before posting
1. If the moneyline is worse than -190, or a written stay-away rule hits, stamp FADE.
2. If two separate reasons still hold and the price is better than -190, stamp BET.
3. If there is one clean reason, stamp LEAN.
4. If you cannot say the reason in one sentence, stamp PASS. Do not invent a ticket.

### CFB PROCESS · after Sunday 9/20
- Stamp before the 10k. Sim may only veto. Cover % is never a second reason.
- Side only. No props. No DFS.
- 20-plus road = FADE. 16-plus road juice = FADE.
- 28-plus home: cupcake no lookahead = fade until Q1 kill. Power or lookahead = fade through unless Q1 trips.
- 6-to-14 stays 6-to-14. One plus lean per weekend. Closeout same night.

### NFL PROCESS · after Monday 9/21
- Stamp before the 10k. Sim may only veto.
- Side on every game. TD + prop only on primetime unless told.
- PASS is legal. DET +5.5 PASS stood.
- No OPEN at kick.
- Primetime uses the same fire bar as 1 p.m. Two written reasons or it is not a unit. Logo and window are not reasons.
- One prior box is n=1. Tag it.
- Identities feed the weekly side.
- Juice ML worse than -190 is FADE that number, not an auto-plus.
- Closeout same night: final → settle → REVIEW → button live.
- Sunday 1 p.m. / 4 p.m. dive = no showdown block. Primetime keeps the full showdown.

## PRIMETIME SHOWDOWN · LOCKED 9/22

TNF / SNF / MNF. One single-entry card. Script + 10k first. Sheet is overlay.

### Roster gate — T-90 — do not lock without this
1. Live DK showdown list vs 10k table.
2. One row per active skill name. No slash lines. No dump buckets.
3. Active slate name missing from the table = sim not done. Do not lock.
4. OUT names deleted. Their share re-splits onto remaining actives at that position. Do not park Higbee on Parkinson.
5. Skill yards add back to team totals.

MNF 9/21 bug: Ferguson absent from 10k, 33% owned, 6–54–1. Cannot ship again.

### How the six is built
1. Rank remaining players by 10k involvement (targets, touches, routes, mean yards). Not salary. Not TD-odds twins alone.
2. Cap is a ceiling. Leaving $800–$2,000 unused is legal.
3. Last seat is a written A vs B with one involvement sentence. "Fits the cap" is not a sentence.
4. If WR1 is out, captain him, then compare the $9k opposing WR to the $10k QB on 10k passing volume.
5. Write the legal row: WR1 CPT + both QBs + lead back + two involved cheap. Put it on the page even if we submit the other six.
6. No default QB CPT. Injuries are not a reason to reverse that.
7. Other lead back stays on the card.
8. Fade of 35%+ FLEX or 10%+ CPT gets one written why.
9. SE field: points and script. Do not sit a lead back to get unique.
10. GPP week pool is a different product. Do not mix optimizer uniqueness rules into a six-man lock.

### Live kills — three lines on the dive
1. Starting QB to locker room in Q1 = side dead and bring-back dead.
2. Home / favorite +14 at half = blowout kill.
3. Our dog down 17 after three = side dead.
First one that hits, stop.

### After the contest
Grade the six against the winner, not against the story. Carry only what repeats.

## BIAS LOCK
Write these before the sim. The engine may only veto.
- Stamp the side in one sentence first.
- Juice fade is not an auto-plus.
- n=1 boxes stay tagged.
- Injury on both sides.
- One LEAN per game unless the second ticket has a different reason.
- DK CSV is overlay. Never rebuild the six off sheet ranking.
- Combined 10k rows are a bias. They hide players.
- Filling the cap is a bias. Involvement first.
- Default QB CPT is a bias.
- Slow kills are a bias. QB exit is immediate.

## MLB player prop
Open the full DK player market. Post the single best value. Live juice.

## Two numbers
`booked` never changes. `close` is live DK. If DK and the page disagree, DK wins that hour.

## Stamp
Do not paint LAST UPDATED. stamp.js strips it.

## THE UPDATE COMMAND
When the user says **update**, run the whole pass. Day = America/New_York.
0. Lock the ledger first. Never write fewer rows than you read.
1. Close the previous day. SETTLED + REVIEW.
2. Board the new day off live DraftKings.
3. Push to CJD0314/the-split main.

Update is not done until yesterday is SETTLED, every final has a REVIEW href, and every new-day game has a FULL BREAKDOWN.
