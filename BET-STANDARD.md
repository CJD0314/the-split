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
- LAST UPDATED rewrites on every page that changes. Do not paint a stamp the site already strips.

## THE UPDATE COMMAND

When the user says **update** (or "daily update," "close it out," "get us ready for today"), run this whole pass. Do not ask which tab. Do not stop after the ledger. Do not leave a subsection stale.

**Day** = America/New_York. Previous day = yesterday ET. New day = today ET. Football weeks flip on the first kick of that week (NFL Week 2 = Thu Sept 17; CFB Week 3 = Thu Sept 17). If it is a midweek morning with no new NFL/CFB kick yet, still close yesterday's MLB and board today's MLB.

### 0. Lock the ledger first
- Read live `tracker.json` and every shard (`tracker-settled.json`, `tracker-settled-2.json`, `tracker-open.json`, `tracker-nfl-w1.json`, `tracker-mlb-914.json`, `tracker-mlb-915.json`, and any new shard). Count `bets`.
- Never write fewer rows than you read. SETTLED rows stay. If the file is empty, restore the latest `RESTORE full` commit before anything else.

### 1. Close the previous day
For every OPEN ticket whose game is FINAL:
- Grade off `booked`, not the moving close.
- Set `status: SETTLED`, `result: WIN|LOSS|PUSH`, `pl`, `final`.
- Write or finish the REVIEW page. Public copy only: RIGHT / WRONG / MISSED / GET BETTER.
- APPEND one phone-readable line to `loops` or `fades`. Do not replace those arrays.
- If the club has an identity page, append the same lesson under HOW WE BET THEM.
- Put FINAL into `scores.js`.
- On the slate card: RESULT tile + REVIEW link live, not a dead href.

Sports that were idle yesterday (no games) get a one-line note, not a fake review.

### 2. Board the new day
Pull live DraftKings. If you cannot see DK, write `not confirmed`. Never invent juice.

**MLB (every day there is a slate)**
- New dive HTML for every game: `mlb-YYYY-MM-DD-away-home.html`.
- Each dive: market tiles, starters, SCRIPT, CONFIRM THE BAT, STARTER LEASH, BEST BET, HR with the player name, PROP from the full DK player market.
- Each game posts three tickets: side (ML or run line), HR, one prop.
- Stamp BET / LEAN / FADE on each. Cap 2-3 BET sides on a 15-game card. ML worse than -190 is never BET.
- New shard `tracker-mlb-MMDD.json`. Merge it in `tracker.js` `loadLedger`. Do not shrink other shards.
- `mlb.js` slate for that date. Default calendar day = today ET. Stamps and "FROM LAST NIGHT" on the card.
- `mlb.html` DEEP DIVES / REVIEW / BETTING NOTES / TEAM IDENTITIES all current. Cache-bust `mlb.js`.

**NFL**
- If a new week has started or TNF/SNF/MNF is next: slate every game on `schedule.js`, CURRENT_WEEK set, week button live.
- Side on every game. TD + prop only on primetime unless told.
- Dive: `nfl-week-X-away-home.html`. REVIEW hrefs for finished games.
- NFL tab subsections: DEEP DIVES, WEEK NOTES, BETTING NOTES, DFS (only when that week's sheet exists), TEAM IDENTITIES.
- Cache-bust `schedule.js`.

**CFB**
- Top-25 sides only. No TD. No player prop unless told.
- New week button when that week's first kick is this week. Default the tab to the live week.
- Numbers 28-35 and 20-plus road favorites after a one-score opener are FADE juice, still posted as a side.
- Dive or `cfb-game.html?g=` plus a review path so REVIEW is never 404.
- Cache-bust `cfb.js`.

**TODAY**
- Card date = today ET.
- UNITS — BET ONLY at the top.
- One pack per game, first-pitch / kick order. Side, then HR/TD, then prop. FADE juice lives on that pack, not as a second copy under STAY AWAY.
- STAY AWAY only if we posted nothing live on that game.
- Player names on HR and props. Kick times in `KICK`.
- Cache-bust `today.html` / `tracker.js`.

**BET TRACKER**
- Settled table includes yesterday. Open table is only still-live tickets.
- Bank / record / P/L match the merged ledger.

### 3. Push and prove it
- Push every new or changed file to `CJD0314/the-split` main. Local-only is not updated.
- Hard-refresh versions on script tags you touched.
- After push, the live MLB / NFL / CFB / TODAY / TRACKER pages must show the new day without a blank subsection.

### 4. What "update" is not
- Not a stamp rewrite.
- Not a notes-only pass.
- Not "NFL only" unless the user named one sport.
- Not deleting SETTLED rows.
- Not turning automations back on.

### Done line
End the pass with: previous day graded (W-L-P, $P/L), new day boarded (BET count + the unit tickets), which tabs were pushed.

## After the game (required, every time)
- Grade off `booked`, not the moving current line.
- Write REVIEW. Public copy only: RIGHT / WRONG / MISSED / GET BETTER.
- APPEND one plain-English line to `tracker.json` `loops` or `fades`. Do not replace those arrays.
- If the club has an identity page, append the same lesson under HOW WE BET THEM.
- Copy on notes and reviews must be easy to read on a phone: short sentences, no jargon pile-up.
- Carry the miss into the next card. Do not repeat the same default.
