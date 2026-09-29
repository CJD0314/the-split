#!/usr/bin/env python3
"""Volume-first 10k for Captain Showdown.

Layer 0 is weekly (tree, ATT lift, committee, QB rush).
Layers 1-3 stay frozen unless --score fails the same test twice.

Usage:
  python3 showdown_10k.py layer0.json
  python3 showdown_10k.py layer0.json --score actual.json
  python3 showdown_10k.py --schema
"""
from __future__ import annotations

import itertools
import json
import sys
from dataclasses import dataclass

import numpy as np

N_SIM = 10_000
CAP = 50_000
RNG = np.random.default_rng(28)


def nb_draw(mean, kappa: float) -> np.ndarray:
    mean = np.clip(np.asarray(mean, dtype=float), 0.5, None)
    n = max(float(kappa), 1.0)
    p = n / (n + mean)
    return RNG.negative_binomial(n, p)


def pct(a, q):
    return float(np.percentile(a, q))


def dk_points(pass_yds=0, pass_td=0, ints=0, rush_yds=0, rush_td=0,
              rec=0, rec_yds=0, rec_td=0, fg=0, xp=0, dst=0):
    pts = (
        pass_yds / 25.0 + 4.0 * pass_td - 1.0 * ints
        + rush_yds / 10.0 + 6.0 * rush_td
        + rec + rec_yds / 10.0 + 6.0 * rec_td
        + 3.0 * fg + 1.0 * xp
        + dst
    )
    if pass_yds >= 300:
        pts += 3.0
    if rush_yds >= 100:
        pts += 3.0
    if rec_yds >= 100:
        pts += 3.0
    return pts


def dst_from_points_allowed(pa: float, st_td: int, ints_forced: int, sacks: float) -> float:
    """DK DST bands + turnovers / ST."""
    if pa == 0:
        base = 10.0
    elif pa <= 6:
        base = 7.0
    elif pa <= 13:
        base = 4.0
    elif pa <= 20:
        base = 1.0
    elif pa <= 27:
        base = 0.0
    elif pa <= 34:
        base = -1.0
    else:
        base = -4.0
    return base + 6.0 * st_td + 2.0 * ints_forced + 1.0 * sacks


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
    committee: bool = False
    qb_rush_att: float = 0.0
    qb_ypc: float = 4.5
    qb_rush_td: float = 0.08


@dataclass
class TeamPrior:
    name: str
    pass_att: float
    rush_att: float
    sack_rate: float = 0.07
    int_rate: float = 0.025
    throwaway: float = 0.10
    fg_make: float = 0.86
    st_td_p: float = 0.04
    qb_exit_p: float = 0.03


def parse_players(raw):
    out = []
    for p in raw:
        keys = {k: p[k] for k in Player.__dataclass_fields__ if k in p}
        out.append(Player(**keys))
    return out


def run(layer0: dict, n: int = N_SIM) -> dict:
    teams = {t["name"]: TeamPrior(**{k: t[k] for k in TeamPrior.__dataclass_fields__ if k in t})
             for t in layer0["teams"]}
    players = parse_players(layer0["players"])
    home = layer0["home"]
    away = layer0["away"]
    clamps = []

    # committee clamp before any draw
    for p in players:
        if p.committee and p.carry_share > 0.55:
            clamps.append(f"{p.name} carry {p.carry_share:.2f} -> 0.55")
            p.carry_share = 0.55

    script = RNG.normal(0.0, 1.0, n)
    att, rush, sacks, qb_dead = {}, {}, {}, {}
    for side, trail_sign in ((home, -1.0), (away, 1.0)):
        # +script = home trailing = home throws more (sign for home is -1 on the
        # original; flip so positive script increases HOME pass). Use trail_sign
        # so the trailing side gets +22% attempts.
        trail = np.clip(trail_sign * script, -2.5, 2.5)
        # home trail_sign -1: when script>0 (home trailing) trail is negative —
        # invert: trailing = more pass. Define trailing as script>0 for home.
        if side == home:
            trail = script
        else:
            trail = -script
        base = teams[side].pass_att
        att[side] = nb_draw(base * (1.0 + 0.22 * trail), 7.0).astype(np.int64).clip(12, 62)
        rush[side] = nb_draw(teams[side].rush_att * (1.0 - 0.14 * trail), 9.0).astype(np.int64).clip(8, 42)
        sacks[side] = RNG.binomial(att[side], teams[side].sack_rate)
        qb_dead[side] = RNG.random(n) < teams[side].qb_exit_p
        att[side] = np.where(qb_dead[side], np.maximum(att[side] * 0.35, 8), att[side]).astype(np.int64)

    ints = {s: RNG.binomial(att[s], teams[s].int_rate) for s in (home, away)}
    st_td = {s: RNG.random(n) < teams[s].st_td_p for s in (home, away)}
    pass_eff = {s: RNG.gamma(8.0, 1 / 8.0, n) for s in (home, away)}
    run_eff = {s: RNG.gamma(12.0, 1 / 12.0, n) for s in (home, away)}

    by_team = {home: [p for p in players if p.team == home],
               away: [p for p in players if p.team == away]}
    acc = {p.name: {k: np.zeros(n) for k in ("dk", "tgt", "car", "rec", "ryd", "cyd", "pass_yds")}
           for p in players}
    team_pass_yds = {home: np.zeros(n), away: np.zeros(n)}
    team_rec_yds = {home: np.zeros(n), away: np.zeros(n)}
    team_pts = {home: np.zeros(n), away: np.zeros(n)}
    team_fg = {home: np.zeros(n), away: np.zeros(n)}

    for i in range(n):
        td_pass = {}
        td_rush = {}
        rec_yds_sum = {}
        for side in (home, away):
            tprior = teams[side]
            roster = by_team[side]
            skill = [p for p in roster if p.pos in ("WR", "TE", "RB")]
            qbs = [p for p in roster if p.pos == "QB"]
            targets = max(int(att[side][i] * (1.0 - tprior.throwaway)), 1)
            carries = int(rush[side][i])

            tw = np.array([max(p.tgt_share, 1e-9) for p in skill], dtype=float)
            tw = tw / tw.sum()
            cw = np.array([max(p.carry_share, 1e-9) for p in skill], dtype=float)
            cw = cw / cw.sum()
            tgt = RNG.multinomial(targets, tw)
            car = RNG.multinomial(carries, cw)

            rz_td_n = int(RNG.poisson(0.7))
            rw = np.array([max((p.rz_share or 0) + 0.15 * p.tgt_share + 0.20 * p.carry_share, 1e-9) for p in skill])
            rw = rw / rw.sum()
            rz = RNG.multinomial(max(rz_td_n, 0), rw) if rz_td_n else np.zeros(len(skill), dtype=int)

            rec_yds_sum[side] = 0.0
            td_pass[side] = 0
            td_rush[side] = 0
            rec_n, rec_yd, rush_yd, rec_td, car_td = {}, {}, {}, {}, {}
            for j, p in enumerate(skill):
                rec_n[p.name] = int(RNG.binomial(int(tgt[j]), min(p.catch_rate, 0.95)))
                if rec_n[p.name]:
                    rec_yd[p.name] = float(RNG.gamma(rec_n[p.name] * 2.0, (p.ypt * pass_eff[side][i]) / 2.0))
                else:
                    rec_yd[p.name] = 0.0
                rush_yd[p.name] = float(car[j] * p.ypc * run_eff[side][i])
                # open-field TDs + RZ assignment
                rec_td[p.name] = int(RNG.binomial(rec_n[p.name], min(p.td_tgt, 0.12)))
                car_td[p.name] = int(RNG.binomial(int(car[j]), min(p.td_carry, 0.10)))
                if rz[j] > 0:
                    extra = int(rz[j])
                    if p.pos == "RB" or p.carry_share >= (p.tgt_share + 0.01):
                        car_td[p.name] += extra
                    else:
                        rec_td[p.name] += extra
                rec_yds_sum[side] += rec_yd[p.name]
                td_pass[side] += rec_td[p.name]
                td_rush[side] += car_td[p.name]
                acc[p.name]["tgt"][i] = tgt[j]
                acc[p.name]["car"][i] = car[j]
                acc[p.name]["rec"][i] = rec_n[p.name]
                acc[p.name]["ryd"][i] = rec_yd[p.name]
                acc[p.name]["cyd"][i] = rush_yd[p.name]

            team_rec_yds[side][i] = rec_yds_sum[side]
            team_pass_yds[side][i] = rec_yds_sum[side]

            qb_rtd_tot = 0
            for p in qbs:
                qb_att = float(p.qb_rush_att) * (0.25 if qb_dead[side][i] else 1.0)
                qb_car = max(int(RNG.poisson(max(qb_att, 0.05))), 0)
                qb_yd = float(qb_car * p.qb_ypc * run_eff[side][i])
                qb_rtd = int(RNG.binomial(qb_car, min(p.qb_rush_td, 0.20)))
                qb_rtd_tot += qb_rtd
                acc[p.name]["dk"][i] = dk_points(
                    pass_yds=rec_yds_sum[side],
                    pass_td=td_pass[side],
                    ints=int(ints[side][i]),
                    rush_yds=qb_yd,
                    rush_td=qb_rtd,
                )
                acc[p.name]["tgt"][i] = att[side][i]
                acc[p.name]["car"][i] = qb_car
                acc[p.name]["cyd"][i] = qb_yd
                acc[p.name]["pass_yds"][i] = rec_yds_sum[side]

            stalled = max(int(round(att[side][i] / 20.0)), 0)
            fg = int(RNG.binomial(stalled, tprior.fg_make))
            team_fg[side][i] = fg
            dst_td = 1 if st_td[side][i] else 0
            off_td = td_pass[side] + td_rush[side] + qb_rtd_tot
            team_pts[side][i] = 7 * off_td + 3 * fg + 6 * dst_td

            for p in skill:
                acc[p.name]["dk"][i] = dk_points(
                    rush_yds=rush_yd[p.name], rush_td=car_td[p.name],
                    rec=rec_n[p.name], rec_yds=rec_yd[p.name], rec_td=rec_td[p.name],
                )

        # kickers / DST after both scores exist
        for side, opp in ((home, away), (away, home)):
            kicks = [p for p in by_team[side] if p.pos == "K"]
            dsts = [p for p in by_team[side] if p.pos == "DST"]
            fg = int(team_fg[side][i])
            tds = max(int(round((team_pts[side][i] - 3 * fg) / 7.0)), 0)
            for p in kicks:
                acc[p.name]["dk"][i] = 3.0 * fg + 1.0 * tds
            pa = team_pts[opp][i]
            for p in dsts:
                acc[p.name]["dk"][i] = dst_from_points_allowed(
                    pa, 1 if st_td[side][i] else 0, int(ints[opp][i]), float(sacks[opp][i])
                )

    rows = []
    by_name = {p.name: p for p in players}
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
    rows = sorted(rows, key=lambda r: -r["mean"])

    tot = team_pts[home] + team_pts[away]
    att_block = {
        s: {
            "mean": round(float(att[s].mean()), 1),
            "p20": round(pct(att[s], 20), 1),
            "p80": round(pct(att[s], 80), 1),
            "p90": round(pct(att[s], 90), 1),
        } for s in (home, away)
    }

    sixes = build_sixes(rows)

    out = {
        "n": n,
        "home": home,
        "away": away,
        "clamps": clamps,
        "score_mean": {home: round(float(team_pts[home].mean()), 1),
                       away: round(float(team_pts[away].mean()), 1)},
        "total": {"mean": round(float(tot.mean()), 1),
                  "p20": round(pct(tot, 20), 1),
                  "p50": round(pct(tot, 50), 1),
                  "p80": round(pct(tot, 80), 1)},
        "pass_att": att_block,
        "identity": {
            home: {"pass_yds": round(float(team_pass_yds[home].mean()), 1),
                   "rec_yds": round(float(team_rec_yds[home].mean()), 1)},
            away: {"pass_yds": round(float(team_pass_yds[away].mean()), 1),
                   "rec_yds": round(float(team_rec_yds[away].mean()), 1)},
        },
        "players": rows,
        "mean_six": sixes["mean"],
        "p90_six": sixes["p90"],
    }
    return out


def build_sixes(rows):
    """Legal 1 CPT + 5 FLEX, both teams, <= 50k. Rank by mean and by p90."""
    pool = [r for r in rows if r["pos"] != "" and r["sal"] > 0]
    # drop zero-sal leftovers
    cand = pool[:16] if len(pool) > 16 else pool

    def best(metric):
        scored = []
        names = [c["name"] for c in cand]
        idx = {c["name"]: c for c in cand}
        for combo in itertools.combinations(names, 6):
            people = [idx[n] for n in combo]
            teams = {p["team"] for p in people}
            if len(teams) < 2:
                continue
            for cap in people:
                flex = [p for p in people if p["name"] != cap["name"]]
                sal = int(round(cap["sal"] * 1.5)) + sum(p["sal"] for p in flex)
                if sal > CAP:
                    continue
                score = cap[metric] * 1.5 + sum(p[metric] for p in flex)
                scored.append((score, sal, cap["name"], [p["name"] for p in flex], people))
        if not scored:
            return None
        scored.sort(key=lambda x: -x[0])
        s, sal, cpt, flex, people = scored[0]
        return {
            "cpt": cpt,
            "flex": flex,
            "salary": sal,
            "metric": metric,
            "score": round(s, 2),
        }

    return {"mean": best("mean"), "p90": best("p90")}


def scorecard(out: dict, actual: dict) -> dict:
    """actual.json: {team: {pass_att, points}, total, top4_targets: []}"""
    checks = {}
    for team in (out["home"], out["away"]):
        if team in actual.get("teams", {}):
            a = actual["teams"][team].get("pass_att")
            if a is not None:
                band = out["pass_att"][team]
                checks[f"{team}_att_within_8"] = abs(a - band["mean"]) <= 8
                checks[f"{team}_att_in_p20_p80"] = band["p20"] <= a <= band["p80"]
    if "total" in actual:
        t = out["total"]
        checks["total_in_20_80"] = t["p20"] <= actual["total"] <= t["p80"]
    if "top4_targets" in actual:
        sim_top = [p["name"] for p in sorted(out["players"], key=lambda r: -r["tgt"])[:4]]
        checks["top4_overlap"] = len(set(sim_top) & set(actual["top4_targets"]))
    return checks


SCHEMA = {
    "home": "CHI",
    "away": "PHI",
    "teams": [
        {"name": "PHI", "pass_att": 32, "rush_att": 28},
        {"name": "CHI", "pass_att": 33, "rush_att": 24},
    ],
    "players": [
        {"name": "Jalen Hurts", "team": "PHI", "pos": "QB", "salary": 10800,
         "qb_rush_att": 8.0, "qb_ypc": 4.8, "qb_rush_td": 0.14},
        {"name": "DeVonta Smith", "team": "PHI", "pos": "WR", "salary": 10600,
         "tgt_share": 0.32, "rz_share": 0.22, "ypt": 9.8, "catch_rate": 0.68},
    ],
}


def main():
    args = sys.argv[1:]
    if "--schema" in args:
        print(json.dumps(SCHEMA, indent=2))
        return
    paths = [a for a in args if not a.startswith("--")]
    if not paths:
        print("usage: showdown_10k.py layer0.json [--score actual.json]", file=sys.stderr)
        sys.exit(2)
    layer0 = json.loads(open(paths[0]).read())
    out = run(layer0)
    if "--score" in args:
        i = args.index("--score")
        actual = json.loads(open(args[i + 1]).read())
        out["scorecard"] = scorecard(out, actual)
    print(json.dumps(out, indent=2))


if __name__ == "__main__":
    main()
