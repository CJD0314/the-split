# SHOWDOWN PROCESS
Locked 28 Sep 2026. Library scorer added 2 Oct 2026. Skip a line and the six does not lock.

TNF / SNF / MNF only. Classic 150 is a different product.

## RULE METHOD
A rule has four states. Note, branch, cut, dead. It moves one state at a time.

The score is `python3 score_library.py`. It reads `slate_library.csv`. A rule cuts a seat at 6 of the library. 5 is a branch. Below that is a note. Add the winner as a row, run the scorer, then lock. Do not re-score in chat.

Current score, 8 winners:

- qb_paired 8/8 CUT. A catcher does not lock without his quarterback.
- wr1_in 8/8 CUT. A catch rate does not cut the WR1.
- cheap_wr 8/8 CUT. The cheap receiver is in the flex. A blocker is not that seat.
- cpt_wr1_or_qb 6/8 CUT. Captain is the WR1 or the quarterback who throws.
- both_qbs 5/8 BRANCH. In if the WR1 and the cheap receiver still fit.
- kicker_or_dst 5/8 BRANCH. Name who comes off.
- back_each_side 3/8 NOTE. Does not cut a seat.
- one_te 3/8 NOTE. Pittsburgh, Philly, Atlanta, and Denver had none. Does not cut a seat.

Exceptions stay in the table. DET-BUF had no back and two tight ends. PHI-CHI had no back. PIT-CLE captained a back. IND-KC captained a tight end.

## FORMAT
1 CPT + 5 FLEX = 6. Cap $50,000. Both teams. Never 7. Salary added on the page before the six is called legal.

## CLOCK
1. Stamp the side.
2. Inactives.
3. Tree on the page.
4. 10k. Mean and p90 on the page. Neither is the ticket.
5. Confirmed seats first. Branches only if the cap holds. Notes do not remove a player.
6. Run score_library.py if a winner was added.
7. Lock.

## BUILD
1. Quarterback with a catcher.
2. WR1 in.
3. Cheap receiver in.
4. Captain is the WR1 or the quarterback who throws.
5. Second quarterback, then kicker. Stop when the cap breaks.
6. A back or a tight end fills leftover salary. Neither is required.
7. Salary total printed.

## DOORS
Both doors at a position stay eligible until a number rejects one. Print share, catch rate, yards per target, snaps, captain ownership. A one-game collapse can reject. A season catch rate on the WR1 cannot.

## GATES
Roster complete. Tree printed. Confirmed seats filled before a branch. Kicker swap named. Salary added. Scorer run if the library changed.

## AFTER
Add the winner to slate_library.csv. Run score_library.py. A rule that drops moves down one state. Do not write a cut the same night.

## BANNED
7-man rows. Catcher without his quarterback. Cutting the WR1 on catch rate. A note used as a cut. A branch used as a cut. A six whose salaries were not added.
