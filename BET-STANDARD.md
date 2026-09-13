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
