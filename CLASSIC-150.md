# CLASSIC 150
Locked 2 Oct 2026. Two contests in the library. A rule cuts a seat only after a third winner agrees. Until then it fills a seat. It removes nobody.

$5, 150 max, about 95,000 entries. Showdown is a different product.

## LIBRARY
416,171 entries. Best 41,729. Winner had Purdy, McCaffrey, JSN. We had none of the three.
95,124 entries. Best 5,632. Median about 73,800. Winner had Darnold, Gibbs, JSN, Wilson. Geno was in seven of the top eight. We had zero Geno, zero JSN, Gibbs in 12 percent.

Purdy and JSN are not a pair. They were on a winner and on different teams. The pair is a quarterback and a receiver from his team. Geno and Wilson were that pair.

## WHAT FILLS A SEAT
The slate back was on both winners. He is in 45 of the 150. This week that is Walker, Henry, and McCaffrey combined. Never two of them in one row. Walker 20, Henry 15, McCaffrey 10 until Sunday says otherwise.

A quarterback does not lock without his own receiver on that row. If the receiver is out, the quarterback moves to the named teammate or leaves. He does not get a receiver from another team.

## WHAT DOES NOT CUT
A one-week winner does not ban a quarterback. Geno is not a law. Lamar is not banned. Season average per thousand is a band, not a cut. A name under 2.0 does not get a second star on the row. He is not removed.

## BUILD
1. Pairs from the salary file. Same team only.
2. One of the three backs. Not two.
3. One optimizer run. No second file.
4. `classic_150.py` on the export. Backs at 45. No missing receiver. Nothing over $50,000.
5. Sunday, swap the questionable receiver. Do not rebuild the counts.

## AFTER
Add the winner as a row. If the back and the pair are there again, they become a branch. If the winner is a different shape, they stay notes. No new cut the same night.

## BANNED
A receiver from another team called a stack. Two of Walker, Henry, and McCaffrey. A second file. A min the optimizer did not hit. A lineup file that was not checked.
