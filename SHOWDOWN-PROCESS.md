# SHOWDOWN PROCESS
Locked 28 Sep 2026. This is how a primetime six gets built. Skip a line and the six does not lock.

TNF / SNF / MNF only. Classic 150 is a different product.

## FORMAT
1 CPT + 5 FLEX = 6. Cap $50,000. Both teams required. Never 7.

## CLOCK
1. Stamp the side. One sentence. Sim may only veto.
2. T-90 inactives posted.
3. Layer 0 sheet written on the dive (tree + ATT lift + committee cap).
4. Run `showdown_10k.py` (volume-first). Print gates A–G.
5. Mean six and p90 six both on the page.
6. Build from the four-core. Captain last.
7. Ownership overlay: total / flex / CPT. Sheet is overlay.
8. Field size picks which six we enter.
9. Lock. Live kills on the page.

## LAYER 0 — WRITE BEFORE THE DRAW
For each team:
- OUT names and last two games (targets / yards / TD).
- Target tree on remaining actives. Sums to 1.00. Named rows only.
- Carry tree. Committee cap: if last-week snap share < 65%, rush share prior ≤ 0.55.
- Base pass attempts (last 4 + opponent + implied total).
- If WR1 or TE1 is OUT: ATT × 1.08–1.15. Print `ATT old → ATT new`.
- Weather / altitude hits FG make % and deep-shot rate only.

If Layer 0 is blank, do not run the 10k.

## ENGINE
`showdown_10k.py` on this repo.
- Layer 1: NegativeBinomial pass attempts + trail script (~+22% on the trailing side). Rush residual. QB exit p≈0.03 taxes attempts and catchers.
- Layer 2: Multinomial targets and carries. Committee clamp 0.55 if flagged. RZ TDs assigned on `rz_share`.
- Layer 3: Gamma YPT / YPC. QB rush from Layer 0 (`qb_rush_att`, `qb_ypc`, `qb_rush_td`). No 12-yard stub.
- DST uses opponent points from the same draw (DK bands). Kicker FG from stalled drives.
- Identity automatic.
- Prints mean six and p90 six (legal 1 CPT + 5 FLEX, both teams, ≤ $50k).
- `python3 showdown_10k.py layer0.json --score actual.json` runs the four-test card.

## GATES — FAIL = NO LOCK
- A Roster: `Sheet N · Rows N · Missing 0`. One row per active DK skill. No slashes. No others.
- B Target tree printed above the 10k.
- C Attempt lift printed if WR1/TE1 out.
- D Mean six AND p90 six on the page.
- E Committee cap held.
- F Scoring tail on (pick-6 / 4-FG / 2-pt). Or do not fade K/DST off a 5-point mean.
- G Mean ≥ 12 is a must only if tree share ≥ 25% or p(DK≥20) ≥ 18%.

Identity check still runs. It is necessary. It is not sufficient.

## FOUR-CORE
If both QBs are viable and both featured skill players are viable, the row starts with those four.

Captain is the last click and stays inside the four-core:
- cheapest 1.5× among the four, or
- the one the field is under-captaining.

A 10-point committee back is not a captain.

Last two seats: this week’s tree, not leftover salary. The OUT-replacement beats Engram / Trautman / a $200 TE. Write A vs B in one involvement sentence.

Always print the legal four-core + two tree seats even if we submit a different six.

## FIELD SIZE
| Field | Enter |
|---|---|
| 200–400 | Mean six. Chalk CPT allowed if that name is in the four-core. |
| 800–1,200 $100 | Four-core + one tree seat. CPT = under-copied name inside the four-core. |
| 10k–15k $5 | P90 six. Still four-core first. Unique is the last seat. |

Do not cut a 25-point QB to pay for a unique CPT.

## OWNERSHIP
Three columns: total, flex, captain. Sheet and ours. Classic-slate % is not showdown %.

Fade of ≥35% FLEX or ≥10% CPT gets one written why. Fading a four-core name must survive Gibbs / Adams.

## LIVE KILLS
1. Starting QB to locker room in Q1 → side dead, bring-back dead.
2. Home / favorite +14 at half → blowout kill.
3. Our dog down 17 after three → side dead.

## AFTER
Score the 10k:
1. QB attempts within 8.
2. Top-4 target names match the tree.
3. Total inside the 20–80 band.
4. Actual pass attempts inside the 10k p20–p80.

Grade the six against the winner.

## BANNED
7-man rows. Default QB CPT. Unique CPT outside the four-core. Last week’s TE as law. Mean-as-lock. Others bucket. Slash rows. Filling the cap for its own sake. Classic own as showdown own. Calling the $2,000 WR who exists because of an OUT a seat.
