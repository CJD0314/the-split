#!/usr/bin/env python3
"""Volume-first 10k for Captain Showdown.

Layer 0 is the weekly work (target tree, ATT lift, committee cap).
Layers 1-3 stay frozen unless the post-game scorecard fails twice.

Usage:
  python3 showdown_10k.py layer0.json
  python3 showdown_10k.py --demo

layer0.json schema is printed by --schema.
"""
from __future__ import annotations

import json
import math
import sys
from dataclasses import dataclass, field

import numpy as np

N_SIM = 10_000
RNG = np.random.default_rng(28)


def nb_draw(mean: float, kappa: float, size: int) -> np.ndarray:
    """Over-dispersed counts. kappa=8 ≈ NFL pass-attempt noise."""
    mean = max(mean, 0.5)
    n = max(kappa, 1.0)
    p = n / (n + mean)
    return RNG.negative_binomial(n, p, size=size)


def softmax(x: np.ndarray) -> np.ndarray:
    z = x - x.max()
    e = np.exp(z)
    return e / e.sum()


@dataclass
class Player:
    name: str
    team: str
    pos: str
    salary: int
    tgt_share: float = 0.0
    carry_share: float = 0.0
    rz_share: float = 0.0
    catch_rate: float = 0.65
    ypt: float = 8.0
    ypc: float = 4.2
    td_tgt: float = 0.06
    td_carry: float = 0.04
    rec_bonus: bool = True


@dataclass
class TeamPrior:
    name: str
    pass_att: float
    rush_att: float
    sack_rate: float = 0.07
    int_rate: float = 0.025
    throwaway: float = 0.10
    fg_att: float = 1.7
    fg_make: float = 0.86
    st_td_p: float = 0.04


def dk_points(pos: str, pass_yds=0, pass_td=0, ints=0, rush_yds=0, rush_td=0,
              rec=0, rec_yds=0, rec_td=0, fg=0, xp=0, dst_td=0, dst_int=0) -> float:
    pts = (
        pass_yds / 25.0 + 4.0 * pass_td - 1.0 * ints
        + rush_yds / 10.0 + 6.0 * rush_td
        + rec + rec_yds / 10.0 + 6.0 * rec_td
        + 3.0 * fg + 1.0 * xp
        + 6.0 * dst_td + 2.0 * dst_int
    )
    if pass_yds >= 300:
        pts += 3.0
    if rush_yds >= 100:
        pts += 3.0
    if rec_yds >= 100:
        pts += 3.0
    return pts


def run(layer0: dict, n: int = N_SIM) -> dict:
    teams = {t["name"]: TeamPrior(**{k: t[k] for k in TeamPrior.__dataclass_fields__ if k in t})
             for t in layer0["teams"]}
    players = [Player(**p) for p in layer0["players"]]
    home = layer0["home"]
    away = layer0["away"]

    # Layer 1 volume
    script = RNG.normal(0.0, 1.0, n)  # + = home trailing / away passing more
    att = {}
    rush = {}
    for side, sign in ((home, -1.0), (away, 1.0)):
        base = teams[side].pass_att
        att[side] = nb_draw(base * (1.0 + 0.08 * sign * script), 8.0, n).clip(12, 62)
        rush[side] = nb_draw(teams[side].rush_att * (1.0 - 0.06 * sign * script), 10.0, n).clip(8, 42)
    st_td = {home: RNG.random(n) < teams[home].st_td_p, away: RNG.random(n) < teams[away].st_td_p}
    ints = {s: RNG.binomial(att[s], teams[s].int_rate) for s in (home, away)}

    pass_eff = {home: RNG.gamma(8.0, 1 / 8.0, n), away: RNG.gamma(8.0, 1 / 8.0, n)}
    run_eff = {home: RNG.gamma(12.0, 1 / 12.0, n), away: RNG.gamma(12.0, 1 / 12.0, n)}

    by_team = {home: [p for p in players if p.team == home],
               away: [p for p in players if p.team == away]}

    acc = {p.name: {"dk": np.zeros(n), "tgt": np.zeros(n), "car": np.zeros(n),
                    "rec": np.zeros(n), "ryd": np.zeros(n), "cyd": np.zeros(n)}
           for p in players}
    qb_att = {home: att[home], away: att[away]}
    team_pass_yds = {home: np.zeros(n), away: np.zeros(n)}
    team_rec_yds = {home: np.zeros(n), away: np.zeros(n)}
    team_pts = {home: np.zeros(n), away: np.zeros(n)}

    for i in range(n):
        for side in (home, away):
            tprior = teams[side]
            targets = max(int(att[side][i] * (1.0 - tprior.throwaway)), 1)
            carries = int(rush[side][i])
            roster = by_team[side]
            skill = [p for p in roster if p.pos in ("WR", "TE", "RB")]
            qbs = [p for p in roster if p.pos == "QB"]
            kicks = [p for p in roster if p.pos == "K"]
            dsts = [p for p in roster if p.pos == "DST"]

            tw = np.array([max(p.tgt_share, 1e-6) for p in skill])
            tw = tw / tw.sum()
            cw = np.array([max(p.carry_share, 1e-6) for p in skill])
            cw = cw / cw.sum()
            tgt = RNG.multinomial(targets, tw)
            car = RNG.multinomial(carries, cw)

            rec_yds_sum = 0.0
            pass_td = 0
            rush_td = 0
            rec_n = {}
            rec_yd = {}
            rush_yd = {}
            rec_td = {}
            car_td = {}
            for j, p in enumerate(skill):
                rec_n[p.name] = int(RNG.binomial(int(tgt[j]), p.catch_rate))
                rec_yd[p.name] = float(RNG.gamma(max(rec_n[p.name], 1) * 2.0,
                                                 (p.ypt * pass_eff[side][i]) / 2.0)) if rec_n[p.name] else 0.0
                if rec_n[p.name] == 0:
                    rec_yd[p.name] = 0.0
                rush_yd[p.name] = float(car[j] * p.ypc * run_eff[side][i])
                rec_td[p.name] = int(RNG.binomial(max(rec_n[p.name], 0), min(p.td_tgt, 0.25)))
                car_td[p.name] = int(RNG.binomial(int(car[j]), min(p.td_carry, 0.20)))
                rec_yds_sum += rec_yd[p.name]
                pass_td += rec_td[p.name]
                rush_td += car_td[p.name]
                acc[p.name]["tgt"][i] = tgt[j]
                acc[p.name]["car"][i] = car[j]
                acc[p.name]["rec"][i] = rec_n[p.name]
                acc[p.name]["ryd"][i] = rec_yd[p.name]
                acc[p.name]["cyd"][i] = rush_yd[p.name]

            team_rec_yds[side][i] = rec_yds_sum
            team_pass_yds[side][i] = rec_yds_sum  # identity
            fg = int(RNG.binomial(max(int(round(tprior.fg_att)), 0), tprior.fg_make))
            if st_td[side][i]:
                dst_td = 1
            else:
                dst_td = 0
            team_pts[side][i] = 6 * (pass_td + rush_td + dst_td) + 3 * fg + 1 * max(pass_td + rush_td, 0)

            for p in qbs:
                rush_qb = float(max(RNG.normal(12.0 if p.pos == "QB" else 0, 8.0), 0))
                acc[p.name]["dk"][i] = dk_points(
                    "QB",
                    pass_yds=rec_yds_sum,
                    pass_td=pass_td,
                    ints=int(ints[side][i]),
                    rush_yds=rush_qb,
                    rush_td=1 if (RNG.random() < 0.12 and rush_qb > 8) else 0,
                )
                acc[p.name]["tgt"][i] = att[side][i]
            for p in skill:
                acc[p.name]["dk"][i] = dk_points(
                    p.pos,
                    rush_yds=rush_yd[p.name],
                    rush_td=car_td[p.name],
                    rec=rec_n[p.name],
                    rec_yds=rec_yd[p.name],
                    rec_td=rec_td[p.name],
                )
            for p in kicks:
                acc[p.name]["dk"][i] = 3.0 * fg + 1.0 * (pass_td + rush_td)
            for p in dsts:
                acc[p.name]["dk"][i] = 6.0 * dst_td + 2.0 * int(ints[home if side == away else away][i])

    def pct(a, q):
        return float(np.percentile(a, q))

    rows = []
    for p in players:
        d = acc[p.name]["dk"]
        rows.append({
            "name": p.name, "team": p.team, "pos": p.pos, "sal": p.salary,
            "mean": round(float(d.mean()), 2),
            "p20": round(pct(d, 20), 2),
            "p50": round(pct(d, 50), 2),
            "p80": round(pct(d, 80), 2),
            "p90": round(pct(d, 90), 2),
            "p20plus": round(float((d >= 20).mean()) * 100, 1),
            "p25plus": round(float((d >= 25).mean()) * 100, 1),
            "tgt": round(float(acc[p.name]["tgt"].mean()), 2),
            "car": round(float(acc[p.name]["car"].mean()), 2),
        })

    tot = team_pts[home] + team_pts[away]
    out = {
        "n": n,
        "home": home,
        "away": away,
        "score_mean": {home: round(float(team_pts[home].mean()), 1),
                       away: round(float(team_pts[away].mean()), 1)},
        "total": {"mean": round(float(tot.mean()), 1),
                  "p20": round(pct(tot, 20), 1),
                  "p50": round(pct(tot, 50), 1),
                  "p80": round(pct(tot, 80), 1)},
        "pass_att": {home: {"mean": round(float(att[home].mean()), 1),
                            "p20": round(pct(att[home], 20), 1),
                            "p80": round(pct(att[home], 80), 1),
                            "p90": round(pct(att[home], 90), 1)},
                     away: {"mean": round(float(att[away].mean()), 1),
                            "p20": round(pct(att[away], 20), 1),
                            "p80": round(pct(att[away], 80), 1),
                            "p90": round(pct(att[away], 90), 1)}},
        "identity": {
            home: {"pass_yds": round(float(team_pass_yds[home].mean()), 1),
                   "rec_yds": round(float(team_rec_yds[home].mean()), 1)},
            away: {"pass_yds": round(float(team_pass_yds[away].mean()), 1),
                   "rec_yds": round(float(team_rec_yds[away].mean()), 1)},
        },
        "players": sorted(rows, key=lambda r: -r["mean"]),
    }
    return out


SCHEMA = {
    "home": "DEN",
    "away": "LAR",
    "teams": [
        {"name": "LAR", "pass_att": 38, "rush_att": 24},
        {"name": "DEN", "pass_att": 34, "rush_att": 26},
    ],
    "players": [
        {"name": "Matthew Stafford", "team": "LAR", "pos": "QB", "salary": 10400},
        {"name": "Davante Adams", "team": "LAR", "pos": "WR", "salary": 10200,
         "tgt_share": 0.30, "ypt": 11.0, "catch_rate": 0.62, "td_tgt": 0.08},
    ],
}


def main():
    if "--schema" in sys.argv:
        print(json.dumps(SCHEMA, indent=2))
        return
    if "--demo" in sys.argv:
        print("Pass a layer0.json built from T-90. --schema prints the shape.")
        return
    if len(sys.argv) < 2:
        print("usage: showdown_10k.py layer0.json", file=sys.stderr)
        sys.exit(2)
    layer0 = json.loads(open(sys.argv[1]).read())
    out = run(layer0)
    print(json.dumps(out, indent=2))


if __name__ == "__main__":
    main()
