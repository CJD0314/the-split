#!/usr/bin/env python3
"""Score showdown rules against slate_library.csv.

A rule cuts a seat at 6 of the library. 5 is a branch. Below that is a note.
Add a winner as a row, then run this before the next lock.
"""
import csv
import sys

RULES = [
    "qb_paired",
    "wr1_in",
    "cheap_wr",
    "cpt_wr1_or_qb",
    "both_qbs",
    "kicker_or_dst",
    "back_each_side",
    "one_te",
]


def state(hits, n):
    if hits * 8 >= 6 * n:
        return "CUT"
    if hits * 8 >= 5 * n:
        return "BRANCH"
    return "NOTE"


def main():
    path = sys.argv[1] if len(sys.argv) > 1 else "slate_library.csv"
    rows = list(csv.DictReader(open(path)))
    n = len(rows)
    print(f"library {n}")
    print(f"{'rule':18} hits   state")
    for rule in RULES:
        hits = sum(int(r[rule]) for r in rows)
        print(f"{rule:18} {hits}/{n}    {state(hits, n)}")


if __name__ == "__main__":
    main()
