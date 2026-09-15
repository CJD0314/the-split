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
- Confidence on every ticket: BET / LEAN / FADE.
- CFB: side only unless told otherwise. Keep posting a side on every Top-25 game.
- MLB: ML + HR + player prop.
- NFL: side + TD + prop on primetime; side on the rest unless told.

## Confidence — BET / LEAN / FADE

LEAN is not the default fill. BET is scarce. FADE is a stay-away, not a ticket we like.

### BET
We want the number with a unit.
- Needs two or more independent reasons that still stand if the rest of the slate vanishes.
- Price cannot be fade juice (ML worse than -190 is never a BET).
- MLB examples that clear the bar: plus-money road dog that already cashed this series AND tonight's starter can keep it close after three.
- Cap: 2-3 BET sides on a 15-game MLB card. NFL/CFB: one or two BET sides on a normal weekend unless the board is clearly wrong.
- HR and player props are almost never BET. Upgrade only if the live DK number is clearly off and the bat or arm is locked in the lineup.

### LEAN
Live, not a unit.
- One clean reason. Most HR tickets and most props live here.
- A side is LEAN only if we would still post it if the rest of the slate vanished.
- Fill tickets (one HR + one prop per MLB game) stay LEAN or they do not post. They are not automatic upgrades.

### FADE
Do not bet this number. TODAY lists it under STAY AWAY. A FADE is not an automatic bet on the other side unless we posted that other side.
- MLB ML juice worse than -190.
- Tired chalk (club coming off a three-game road beating with no rest edge).
- Pitcher K overs at Coors.
- Name-only HR with no park, wind, or recent contact.
- CFB 28-35 point maintenance numbers and 20-plus road favorites one week after a one-score opener.

### How to stamp before posting
1. If the moneyline is worse than -190, or a written stay-away rule hits, stamp FADE. Do not buy that number.
2. If two separate reasons still hold and the price is better than -190, stamp BET. That is a unit.
3. If there is one clean reason, stamp LEAN. That is not a unit.
4. If you cannot say the reason in one sentence, do not post the ticket.

Tuesday 9/15 application: BET is CWS +108 and DET +114 only. BAL +108 and ATL +117 stay LEAN. TB -232, LAD -246, MIL -264, PHI -219, SD -200, tired HOU ML stay FADE.

## MLB player prop
- Open the full DraftKings player market for that game before posting.
- Look at strikeouts (over and under), hits, total bases, stolen bases, RBIs, first-five totals, team totals, and any other posted prop.
- Post the single best value on that board. A strikeout over is allowed when it is actually the best number. It is not the default.
- Price must be the live DK juice.

## Two numbers
- `booked` = first DK number we logged. Never change it after it is set.
- `close` = live DK number + juice. This is what TODAY shows.
- `pick` must match the live DK side/number.
- If DK and the page disagree, DK wins that hour.

## Stamp
- LAST UPDATED rewrites on every page that changes.

## After the game (required, every time)
- Grade off `booked`, not the moving current line.
- Write REVIEW. Public copy only: RIGHT / WRONG / MISSED / GET BETTER.
- APPEND one plain-English line to `tracker.json` `loops` or `fades`. Do not replace those arrays.
- If the club has an identity page, append the same lesson under HOW WE BET THEM.
- Copy on notes and reviews must be easy to read on a phone: short sentences, no jargon pile-up.
- Carry the miss into the next card. Do not repeat the same default.
