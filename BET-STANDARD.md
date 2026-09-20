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
- Cap: 2-3 BET sides on a 15-game MLB card. NFL/CFB: one or two BET sides on a normal weekend unless the board is clearly wrong.

### LEAN
Live, not a unit. One clean reason.

### FADE
Do not bet this number. A FADE is not an automatic bet on the other side unless we posted that other side.
- MLB ML juice worse than -190.
- CFB 20-plus road. CFB 16-plus road juice. CFB 28-plus home split: cupcake until Q1 kill, Power/lookahead through the game.
- NFL juice ML worse than -190. Primetime favorite is not a different rule.

### How to stamp before posting
1. If the moneyline is worse than -190, or a written stay-away rule hits, stamp FADE.
2. If two separate reasons still hold and the price is better than -190, stamp BET.
3. If there is one clean reason, stamp LEAN.
4. If you cannot say the reason in one sentence, do not post the ticket. Stamp PASS.

### CFB PROCESS · after Sunday 9/20 (Week 3 tape)
- Stamp before the 10k. Sim may only veto. Cover % is never a second reason.
- Side only. No props. No DFS.
- 20-plus road = FADE. 16-plus road juice = FADE.
- Split the 28-plus home fade: cupcake no lookahead = fade only until Q1 kill. Power or lookahead = fade through unless Q1 trips.
- 6-to-14 stays 6-to-14. One plus lean per weekend. Closeout same night.

### NFL PROCESS · after Sunday 9/20 (Week 1 + TNF tape)
- Stamp before the 10k. Sim may only veto.
- Side on every game. TD + prop only on primetime unless told.
- PASS is a legal stamp. DET +5.5 PASS, BUF 41-31. That was correct.
- OPEN is a Wednesday state. No OPEN at kick. Every Sunday game is BET, LEAN, FADE, or PASS by T-90.
- Primetime uses the same fire bar as 1 p.m. Two written reasons or it is not a unit. Logo and window are not reasons. DAL -2.5 SNF and DEN +2.5 MNF failed that test.
- One Week 1 box is n=1. Chicago 59 does not make CHI -4.5 a unit. Kansas City 31-10 does not make KC -5.5 a unit.
- Identities feed the weekly side. A pick that fights the identity needs a second reason.
- Juice ML worse than -190 is FADE that number, not an auto-plus.
- Watch gets a Sunday confirm or it comes down. WAIT stays WAIT.
- Showdown fade of a 30%+ FLEX name needs one written line. "We do not like him" is not that line.
- 10k skill totals add to the team total. If one DST is in four of five optimal teams in a 50-point script, the build is wrong before the lineup is wrong.
- Closeout same night: final → settle the ledger id → REVIEW → button live.

## PRIMETIME · TNF / SNF / MNF
DET@BUF 9/17 is the page template. Drawers closed. T-90 folds into INACTIVES. 10k with recipe, side vs total, position groups that add to team totals. Showdown is one $100 SE, script first then mean. CPT the player who scores the game. DK CSV is overlay only. Kicker is the punter unless script says otherwise. Gap under 1 point vs DK = PASS.

Tuesday 9/15 application: BET is CWS +108 and DET +114 only.

## MLB player prop
- Open the full DraftKings player market. Post the single best value. Price is live DK juice.

## Two numbers
- `booked` = first DK number we logged. Never change it after it is set.
- `close` = live DK number + juice.
- If DK and the page disagree, DK wins that hour.

## Stamp
- LAST UPDATED rewrites on every page that changes. Do not paint a stamp the site already strips.

## THE UPDATE COMMAND
When the user says **update**, run the whole pass. Day = America/New_York.

### 0. Lock the ledger first
Read live tracker.json and every shard. Never write fewer rows than you read.

### 1. Close the previous day
Grade off booked. SETTLED + REVIEW + APPEND loops/fades.

### 2. Board the new day
Live DraftKings. Never invent juice.
**NFL** Side on every game. Use the Sunday 9/20 NFL PROCESS block. No OPEN at kick. Cache-bust schedule.js.
**CFB** Use the Sunday 9/20 CFB PROCESS block.
**MLB** Three tickets per game. Cap 2-3 BET sides. ML worse than -190 is never BET.
**TODAY** Card date = today ET. UNITS first.

### 3. Push and prove it
Push to CJD0314/the-split main.

### Done line
Previous day graded, new day boarded, tabs pushed.

## After the game
Grade off booked. REVIEW. APPEND loops or fades. Carry the miss into the next card.
