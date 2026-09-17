const NFL_WATCH_WEEK = 2;
const NFL_WATCH = {
  2: {
    note: "WED BOARD. First look. Not a unit list. Confirm live DK. Flowers DNP — KILL. Swift limited — WAIT on Friday. Burrow limited — WAIT. Murray protocol — WAIT.",
    qb: [
      {name: "Josh Allen", team: "buf", game: "DET at BUF · Thu 8:15", tag: "TNF", stamp: "LOOK", why: "334 at Houston. Detroit allowed 410 pass yards after a 21-0 lead. Total 54.5.", prop: "Allen over 250.5 pass yards", propWhy: "250.5 sits under last week. Skip the rush over. n=1 on the 334."},
      {name: "Lamar Jackson", team: "bal", game: "NO at BAL · Sun 1:00", tag: "FLOWERS DNP", stamp: "LOOK", why: "17-of-25 for 324 at Indy. Saints will trail again in Baltimore.", prop: "Jackson over 225.5 pass yards", propWhy: "Sit Flowers. Do not sit Lamar."},
      {name: "Caleb Williams", team: "chi", game: "MIN at CHI · Sun 1:00", stamp: "LOOK", why: "Ten carries, 65 yards, two rushing scores. Flores blitzed Love on 78 percent.", prop: "Williams over 29.5 rush yards", propWhy: "Designed keepers if Swift is limited."},
      {name: "Trevor Lawrence", team: "jax", game: "JAX at DEN · Sun 4:05", stamp: "LOOK", why: "Four TD passes on 23 attempts vs Cleveland. n=1.", prop: "Lawrence over 1.5 pass TD", propWhy: "Confirm the live number."}
    ],
    rb: [
      {name: "Jahmyr Gibbs", team: "det", game: "DET at BUF · Thu 8:15", tag: "TNF", stamp: "LOOK", why: "29-156-2. Montgomery gone. Two starting linemen out.", prop: "Gibbs over 89.5 rush yards", propWhy: "Volume, not explosiveness."},
      {name: "Kenneth Walker", team: "kc", game: "IND at KC · Sun 8:20", stamp: "LOOK", why: "23-173-1 in his Chiefs debut. n=1.", prop: "Walker over 79.5 rush yards", propWhy: "The number is 79.5, not 94."},
      {name: "Derrick Henry", team: "bal", game: "NO at BAL · Sun 1:00", stamp: "LOOK", why: "Three rushing scores on 24 carries. Home TD-plus favorite.", prop: "Henry over 0.5 rush TD", propWhy: "The touchdown is the ticket."},
      {name: "D'Andre Swift", team: "chi", game: "MIN at CHI · Sun 1:00", tag: "SIT UNTIL FRI", stamp: "WAIT", why: "18-124-3. Limited Wednesday ankle/knee.", prop: "Swift over 69.5 rush yards", propWhy: "Do not bet tonight. Revisit after Friday practice."},
      {name: "Saquon Barkley", team: "phi", game: "PHI at TEN · Sun 1:00", stamp: "LOOK", why: "Week 1 was 83 on 15. TEN let Hall go 22-102-1.", prop: "Barkley over 79.5 rush yards", propWhy: "Reset from the Washington slog."}
    ],
    wr: [
      {name: "Amon-Ra St. Brown", team: "det", game: "DET at BUF · Thu 8:15", tag: "TNF", stamp: "LOOK", why: "14 targets, 10 catches, two scores including OT.", prop: "St. Brown over 7.5 receptions", propWhy: "Catches, not yards."},
      {name: "Jaxon Smith-Njigba", team: "sea", game: "SEA at ARI · Sun 4:25", stamp: "LOOK", why: "8-122 on 11 targets in a 13-10.", prop: "JSN over 6.5 receptions", propWhy: "6.5 is the floor if this opens up."},
      {name: "Ja'Marr Chase", team: "cin", game: "CIN at HOU · Sun 1:00", tag: "CONFIRM BURROW", stamp: "WAIT", why: "Houston just gave Allen 334.", prop: "Chase over 79.5 rec yards", propWhy: "Only if Burrow is active. If he sits, KILL."},
      {name: "Justin Jefferson", team: "min", game: "MIN at CHI · Sun 1:00", tag: "QB WATCH", stamp: "WAIT", why: "8-92-2. Both scores from Wentz after Murray left.", prop: "Jefferson over 84.5 rec yards", propWhy: "Do not ticket until the starter is named."},
      {name: "Chris Olave", team: "no", game: "NO at BAL · Sun 1:00", stamp: "LOOK", why: "10-182 last week. Empty script again.", prop: "Olave over 74.5 rec yards", propWhy: "10-target share."}
    ],
    te: [
      {name: "Dalton Kincaid", team: "buf", game: "DET at BUF · Thu 8:15", tag: "TNF", stamp: "LOOK", why: "5-130 vs Houston. n=1.", prop: "Kincaid over 54.5 rec yards", propWhy: "One chunk play. Same script as Allen pass."},
      {name: "Trey McBride", team: "ari", game: "SEA at ARI · Sun 4:25", stamp: "LOOK", why: "13 targets, 9 catches, a score.", prop: "McBride over 6.5 receptions", propWhy: "Catches, not a dart TD."},
      {name: "Travis Kelce", team: "kc", game: "IND at KC · Sun 8:20", stamp: "LOOK", why: "71 yards in the 31-10 including a 59-yarder.", prop: "Kelce over 49.5 rec yards", propWhy: "Walker empties the box."},
      {name: "Mike Gesicki", team: "cin", game: "CIN at HOU · Sun 1:00", tag: "CONFIRM BURROW", stamp: "WAIT", why: "5-78-1 vs Tampa.", prop: "Gesicki over 44.5 rec yards", propWhy: "Only if Burrow plays. Do not chain with Chase."}
    ],
    def: [
      {name: "Eagles D/ST", team: "phi", game: "PHI at TEN · Sun 1:00", stamp: "LOOK", why: "Titans lost 23-10 at home to the Jets.", prop: "Eagles D/ST over 2.5 sacks", propWhy: "Confirm the live sack total."},
      {name: "Dolphins team total", team: "mia", game: "MIA at SF · Sun 4:25", stamp: "LOOK", why: "Miami scored 13 at Vegas. SF is a home double-digit favorite.", prop: "Dolphins team total under 17.5", propWhy: "Posted team total, not a sack we invented."},
      {name: "Ravens D/ST", team: "bal", game: "NO at BAL · Sun 1:00", stamp: "LOOK", why: "Saints lived in an empty script in Detroit.", prop: "Ravens D/ST over 2.5 sacks", propWhy: "Confirm live DK sack total."},
      {name: "Bills D/ST", team: "buf", game: "DET at BUF · Thu 8:15", tag: "TNF", stamp: "LOOK", why: "Detroit starts Bartch-Scruggs-Borom.", prop: "Bills D/ST over 2.5 sacks", propWhy: "Pressure on Goff is not Buffalo -5.5."}
    ]
  }
};
function watchChip(tag){
  if (!tag) return "";
  const cls = /OUT|DNP|SIT/i.test(tag) ? "chip chip-out" : /Q|LIMITED|CONFIRM|WATCH|PROTOCOL|FRI/i.test(tag) ? "chip chip-q" : "chip chip-live";
  return `<span class="${cls}">${tag}</span>`;
}
function stampTally(rows){
  const n = {LOOK:0,WAIT:0,KILL:0};
  (rows||[]).forEach(function(p){ const s=String(p.stamp||"LOOK").toUpperCase(); n[s]=(n[s]||0)+1; });
  return ["LOOK","WAIT","KILL"].filter(function(k){ return n[k]; }).map(function(k){ return n[k]+" "+k; }).join(" · ");
}
function watchCard(p){
  const logo = "https://a.espncdn.com/i/teamlogos/nfl/500/" + p.team + ".png";
  const st = String(p.stamp||"LOOK").toUpperCase();
  return `<article class="watch"><div class="watch-top"><img src="${logo}" alt=""><div><b>${p.name}</b><span>${p.game}${watchChip(p.tag)}</span></div></div><div class="mini"><div><b>STAMP</b><span>${st}</span></div><div><b>PROP</b><span>${p.prop}</span></div></div><details class="why-fold"><summary>WHY</summary><p class="watch-why">${p.why} ${p.propWhy}</p></details></article>`;
}
function paintNflWatch(week){
  const box = document.getElementById("nfl-watch");
  if (!box) return;
  const w = week || NFL_WATCH_WEEK;
  const data = NFL_WATCH[w];
  if (!data){ box.innerHTML = `<p class="note">Weekly Watch for Week ${w} is not boarded yet.</p>`; return; }
  const blocks = [["QB", data.qb],["RB", data.rb],["WR", data.wr],["TE", data.te],["DEF", data.def]];
  box.innerHTML = `<p class="note">${data.note}</p>` + blocks.map(function(pair){
    const title = pair[0], rows = pair[1] || [];
    return `<details class="block"><summary>${title} · ${stampTally(rows)}</summary><div class="body">${rows.map(watchCard).join("")}</div></details>`;
  }).join("");
}
paintNflWatch(NFL_WATCH_WEEK);
