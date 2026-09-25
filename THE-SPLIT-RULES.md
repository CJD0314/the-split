# THE SPLIT — upload rules

Never ship a stub, wrapper, iframe, or `filename (1).html` as the live page.

## File names
- Home: `index.html` only. Do not leave a redirect sitting on `index.html`.
- NFL dive: `nfl-week-X-away-home.html` (away first, home second). Example: `nfl-week-1-ne-sea.html`.
- Results: `results.html`.
- If a download creates `file (1).html`, copy that content onto the real name, then delete the `(1)` file.

## Every NFL primetime dive (TNF / SNF / MNF) must include, in this order
1. One header bar: TODAY · NFL · BET TRACKER. Not sticky-frozen stacked bars. No iframe.
2. THE SPLIT / NFL WEEK N · night / both logos / full team names / time · stadium · network. No version stamp in the header.
3. Four DK tiles: SPREAD, TOTAL, MONEYLINE, SITE/WX — current + opening. Source: DraftKings.
4. FROM LAST WEEK — two results, one lesson.
5. TEAM BREAKDOWN — both teams. HC, OC, DC. Write `(calls plays)` when true. Identity tonight. One defensive tell.
6. INACTIVES — table only. Official list at T-90.
7. SCRIPT — score band + why the number moved.
8. 10,000-GAME SIMULATOR — recipe + side power + total power, four result tiles plus margin buckets, **one row per active DK skill player**, board props, three bullets max. Final rerun at T-90 inactives. Side stamp is written before the sim. Gap under 1 point vs DK = PASS. **Identity check must pass before the table ships.**
9. SHOWDOWN — CPT, two cores, one fade. Last seats from 10k involvement, not leftover salary.
10. FAVORITE PICKS last — one table, stamps only. Side + SE + props.

## 10K ROSTER GATE — T-90 · DO NOT LOCK WITHOUT THIS
After official inactives:
1. Take the live DK showdown list. Every QB, RB, WR, TE, K, DST with a salary who is ACTIVE.
2. The 10k average-stat table must have **exactly one row per name**. No `Higbee / Parkinson`. No `Atwell / Mumpfield`. No dump buckets.
3. If a name is on the slate and active and missing from the table, the sim is not done. Do not lock a six.
4. If someone on the pre-T-90 table is now OUT, delete his row and **re-split his share onto the actives at that position**. Do not park a Higbee share on Parkinson by default.
5. Rec / rush / pass yards on the skill rows must still add back to the team totals.
6. Showdown last seats are the highest-involvement remaining names on that table. Salary is a filter after. Cap is a ceiling.

MNF 9/21 bug: Ferguson was 33% owned and 6–54–1. He was not in the 10k table. Parkinson inherited a combined Higbee line. That cannot ship again.

## 10K IDENTITY CHECK — LOCKED 9/24 · DO NOT SHIP WITHOUT THIS
After the run, before the table is painted:
1. Home QB pass yards = sum of that team's receiving yards (WR + TE + RB). Away QB the same. Gap over 8 yards = fail. Re-scale the catchers to the QB. Do not leave the QB haircut on the QB only.
2. Home QB pass TDs = sum of that team's receiving TDs. Away the same. Gap over 0.10 = fail.
3. Rush TDs are separate from receiving TDs. Never print one mixed TD number on a back who also catches.
4. Pass-catcher priors on each side sum to 100%.
5. Team points ≈ 6×(pass TD + rush TD) + FG points from the kicker row. If the score tile and the skill TDs disagree, the score tile wins and skill TDs get scaled.
6. Print the two identities on the page: `Love 229 = GB rec 229` and `Penix 176 = ATL rec 176`.
7. If a rust or Q1-exit tax hits a QB, the catchers take the same tax in the same run. TNF 9/24 bug: Penix 176 vs ATL catchers 202. That cannot ship again.

## Upload checklist (do this every commit)
- [ ] Live filename is the canonical name, not `(1)`.
- [ ] Page is one HTML file. No iframe wrapping another HTML file.
- [ ] Only one header.
- [ ] All ten sections above are present with real notes, not placeholders.
- [ ] T-90 10k has one row per active DK skill name. No slashes. No missing slate players.
- [ ] Identity check passed. QB pass yards = team rec yards. QB pass TDs = team rec TDs.
- [ ] After push, open the live URL and confirm the page is the long version.

## Do not
- Redirect `index.html` to `index (1).html`.
- Wrap the dive in an iframe to “add a header.”
- Overwrite a 15kb+ dive with a 2kb stub.
- Combine two players on one 10k row to save space.
- Lock a showdown six while an active slate TE/WR/RB is missing from the sim table.
- Ship a 10k table where the QB and his catchers do not add up.
