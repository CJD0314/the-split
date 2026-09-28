# BET STANDARD

Purpose: explore the whole market, post only live accurate DraftKings numbers, and get smarter after every card.

Applies to every ticket on TODAY, Bet Tracker, and every full breakdown. No exceptions.

Renovated 28 Sep 2026. Primetime 10k and six-man lock now follow `THE-SPLIT-RULES.md` gates A–G. This file keeps ledger, stamps, CFB, MLB, and the short NFL side rules.

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

### CFB PROCESS · after Saturday 9/26
- Side only. No props. No DFS.
- 20-plus road = FADE. 16-plus road juice = FADE.
- 28-plus home: cupcake, no lookahead = fade until the first quarter. A power opponent or a lookahead game stays a fade through unless that quarter trips.
- First quarter: if the favorite leads by 21, the fade is dead. Write the score. A blank line means the fade was never a rule.
- A number within 2.5 of a fade is answered before noon. The answer is the one lean, or one sentence why it is not. It is not a silent pass.
- 6-to-14 stays 6-to-14. One plus lean per weekend, written before kickoff. Closeout same night.
- No sim unless our number is at least a point off the board. A sim that copies the spread cannot make a bet and cannot veto one.
- File the number before kickoff. A result with no filed number is not a stamp we keep.

### NFL PROCESS · after Monday 9/28
- Stamp before the 10k. Sim may only veto.
- Side on every game. TD + prop only on primetime unless told.
- PASS is legal.
- No OPEN at kick.
- Primetime uses the same fire bar as 1 p.m. Two written reasons or it is not a unit.
- One prior box is n=1. Tag it.
- Identities feed the weekly side.
- Juice ML worse than -190 is FADE that number, not an auto-plus.
- Closeout same night: final → settle → REVIEW → button live.
- Sunday 1 p.m. / 4 p.m. dive = no showdown block. Primetime keeps the full showdown.

## PRIMETIME SHOWDOWN · LOCKED 9/28

TNF / SNF / MNF. One single-entry card per contest. Script + 10k first. Sheet is overlay.

Full gates live in `THE-SPLIT-RULES.md`. Short version:

### Do not lock without
1. Roster gate: `Sheet N · Rows N · Missing 0`. One row per active DK skill. No slashes. No others.
2. Target tree printed above the 10k. Every OUT name reassigned this week.
3. Attempt lift if WR1/TE1 is out. Print ATT old → ATT new.
4. Identity check: pass yards = rec yards, pass TDs = rec TDs, named rows only.
5. Mean six **and** p90 six both on the page.
6. Format is 1 CPT + 5 FLEX. Never 7.

### How the six is built
1. Four-core first when both QBs and both featured skill players are viable.
2. Captain last. Cheapest 1.5× inside the four-core, or the under-copied name **inside** the four-core. A 10-point committee back is not a captain.
3. Last seats from this week’s target tree. The OUT-replacement beats Engram / Trautman / a $200 TE.
4. Cap is a ceiling. Leaving salary is legal. Filling the cap is a bias.
5. Field size picks which six: 200–400 uses mean six. 800–1,200 uses four-core + one tree seat. 10k+ uses p90 six, still four-core first.
6. No default QB CPT. Cutting a 25-point QB to pay for unique CPT is the same bias flipped.
7. Fade of ≥35% FLEX or ≥10% CPT gets one written why.
8. DK CSV is overlay. Never rebuild the six off sheet ranking.
9. Classic-slate own is not showdown own.

### Live kills
1. Starting QB to locker room in Q1 = side dead and bring-back dead.
2. Home / favorite +14 at half = blowout kill.
3. Our dog down 17 after three = side dead.

### After the contest
Score the 10k on three things: QB attempts ±8, top-4 target tree, total inside 20–80 band.
Grade the six against the winner.

Bugs this renovation exists to kill:
- MNF 9/21 Ferguson missing from the 10k.
- TNF 9/24 roster 28/18 and Penix 176 vs catchers 202.
- SNF 9/27 mean 40 vs actual 56; Waddle/Ferguson locked; Mumpfield/Higbee called seats; Harvey CPT; 7-man format error.
- Sunday Classic Gibbs in 8% of 150 and 100% of top 100.

## CLASSIC GPP · SUNDAY 150
1. A 25%+ owned RB who can print 28 is in 30–45% of a 150.
2. Do not spend 14% on already-faded names unless p90 ≥ 20 and the script is real.
3. One cheap stand-up TE/WR is a 15–25% dart.
4. Unique-by-2 is a lineup rule, not a reason to delete the slate-breaker.

## BIAS LOCK
Write these before the sim. The engine may only veto.
- Stamp the side in one sentence first.
- Juice fade is not an auto-plus.
- n=1 boxes stay tagged.
- Combined 10k rows hide players.
- An others bucket fakes identity.
- One ownership number is a bias.
- Filling the cap is a bias.
- Default QB CPT is a bias. Unique-CPT that cuts a four-core QB is a bias.
- Last week’s TE is a bias.
- Mean-as-lock is a bias.
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
