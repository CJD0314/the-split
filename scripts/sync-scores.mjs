import { writeFileSync, readFileSync, existsSync } from "fs";

const SPORTS = [
  { key: "NFL", url: "https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard" },
  { key: "CFB", url: "https://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard?groups=80&limit=200" },
  { key: "MLB", url: "https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard" }
];

const ALIAS = {
  WSH: "WSH", WAS: "WSH", TA&M: "TAMU", TAM: "TAMU", TEX: "TEX", OSU: "OSU",
  MIA: "MIA", LOU: "LOU", UVA: "UVA", MIZ: "MIZ", KU: "KU", ATH: "ATH", OAK: "ATH"
};

function abbr(team) {
  const raw = String(team.team?.abbreviation || "").toUpperCase();
  return ALIAS[raw] || raw;
}

function gameKey(away, home) {
  return away + " at " + home;
}

function pullDate(ev) {
  const d = ev.date || "";
  return d.slice(0, 10);
}

async function loadSport(s) {
  const res = await fetch(s.url);
  if (!res.ok) return [];
  const json = await res.json();
  const out = [];
  for (const ev of json.events || []) {
    const comp = (ev.competitions || [])[0];
    if (!comp) continue;
    const teams = comp.competitors || [];
    const home = teams.find(t => t.homeAway === "home");
    const away = teams.find(t => t.homeAway === "away");
    if (!home || !away) continue;
    const a = abbr(away);
    const h = abbr(home);
    const as = away.score;
    const hs = home.score;
    const st = String(ev.status?.type?.name || ev.status?.type?.description || "").toUpperCase();
    let line = "";
    if (st.includes("FINAL")) {
      const winner = Number(hs) > Number(as) ? h : a;
      line = winner + " " + Math.max(Number(hs), Number(as)) + "-" + Math.min(Number(hs), Number(as));
    } else if (st.includes("IN") || st.includes("PROGRESS") || st.includes("HALFTIME")) {
      line = "LIVE " + a + " " + as + "-" + h + " " + hs;
    }
    if (!line) continue;
    out.push({ date: pullDate(ev), game: gameKey(a, h), line });
  }
  return out;
}

function readExisting() {
  if (!existsSync("scores.js")) return {};
  const raw = readFileSync("scores.js", "utf8");
  const m = raw.match(/window\.SCORES\s*=\s*(\{[\s\S]*?\});/);
  if (!m) return {};
  try { return JSON.parse(m[1]); } catch (e) { return {}; }
}

const map = readExisting();
for (const s of SPORTS) {
  const rows = await loadSport(s);
  for (const r of rows) {
    map[r.date + "|" + r.game] = r.line;
    map[r.game] = r.line;
  }
}

const body = "window.SCORES = " + JSON.stringify(map, null, 2) + ";\n";
writeFileSync("scores.js", body);
console.log("scores.js keys", Object.keys(map).length);
