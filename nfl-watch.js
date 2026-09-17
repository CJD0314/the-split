const NFL_WATCH_WEEK = 2;
const NFL_WATCH = {
  2: {
    note: "WED BOARD. First look at the week’s props. Not a unit list. Confirm live DK. WAIT = injury or QB. KILL = dead.",
    qb: [
      {name: "Josh Allen", team: "buf", game: "DET at BUF · Thu 8:15", tag: "TNF", why: "334 at Houston. Detroit allowed 410 after a 21-0 lead. Total 54.5.", prop: "Allen over 250.5 pass yards", propWhy: "Skip the rush over. n=1 on the 334."},
      {name: "Lamar Jackson", team: "bal", game: "NO at BAL · Sun 1:00", tag: "FLOWERS DNP", why: "324 at Indy. Saints will trail again.", prop: "Jackson over 225.5 pass yards", propWhy: "Sit Flowers. Do not sit Lamar."},
      {name: "Caleb Williams", team: "chi", game: "MIN at CHI · Sun 1:00", why: "65 rush yards and two rushing scores. Flores blitzed Love on 78 percent.", prop: "Williams over 29.5 rush yards", propWhy: "Designed keepers if Swift is limited."},
      {name: "Trevor Lawrence", team: "jax", game: "JAX at DEN · Sun 4:05", why: "Four TD passes vs Cleveland. n=1.", prop: "Lawrence over 1.5 pass TD", propWhy: "Confirm the live number."}
    ],
    rb: [
      {name: "Jahmyr Gibbs", team: "det", game: "DET at BUF · Thu 8:15", tag: "TNF", why: "29-156-2. Two starting linemen out.", prop: "Gibbs over 89.5 rush yards", propWhy: "Volume, not explosiveness."},
      {name: "Kenneth Walker", team: "kc", game: "IND at KC · Sun 8:20", why: "23-173-1 in his Chiefs debut. n=1.", prop: "Walker over 79.5 rush yards", propWhy: "The number is 79.5, not 94."},
      {name: "Derrick Henry", team: "bal", game: "NO at BAL · Sun 1:00", why: "Three rushing scores. Home TD-plus favorite.", prop: "Henry over 0.5 rush TD", propWhy: "The touchdown is the ticket."},
      {name: "D'Andre Swift", team: "chi", game: "MIN at CHI · Sun 1:00", tag: "SIT UNTIL FRI", stamp: "WAIT", why: "Limited Wednesday ankle/knee.", prop: "Swift over 69.5 rush yards", propWhy: "Revisit after Friday practice."},
      {name: "Saquon Barkley", team: "phi", game: "PHI at TEN · Sun 1:00", why: "83 on 15 in Week 1. TEN let Hall go 22-102-1.", prop: "Barkley over 79.5 rush yards", propWhy: "Reset from the Washington slog."}
    ],
    wr: [
      {name: "Amon-Ra St. Brown", team: "det", game: "DET at BUF · Thu 8:15", tag: "TNF", why: "14 targets, 10 catches, two scores.", prop: "St. Brown over 7.5 receptions", propWhy: "Catches, not yards."},
      {name: "Jaxon Smith-Njigba", team: "sea", game: "SEA at ARI · Sun 4:25", why: "8-122 in a 13-10.", prop: "JSN over 6.5 receptions", propWhy: "6.5 is the floor if this opens up."},
      {name: "Ja'Marr Chase", team: "cin", game: "CIN at HOU · Sun 1:00", tag: "CONFIRM BURROW", stamp: "WAIT", why: "Houston just gave Allen 334.", prop: "Chase over 79.5 rec yards", propWhy: "Only if Burrow is active."},
      {name: "Justin Jefferson", team: "min", game: "MIN at CHI · Sun 1:00", tag: "QB WATCH", stamp: "WAIT", why: "Both Week 1 scores came from Wentz.", prop: "Jefferson over 84.5 rec yards", propWhy: "Wait for the starter."},
      {name: "Chris Olave", team: "no", game: "NO at BAL · Sun 1:00", why: "10-182 last week. Empty script again.", prop: "Olave over 74.5 rec yards", propWhy: "10-target share."}
    ],
    te: [
      {name: "Dalton Kincaid", team: "buf", game: "DET at BUF · Thu 8:15", tag: "TNF", why: "5-130 vs Houston. n=1.", prop: "Kincaid over 54.5 rec yards", propWhy: "Same script as Allen pass."},
      {name: "Trey McBride", team: "ari", game: "SEA at ARI · Sun 4:25", why: "13 targets, 9 catches.", prop: "McBride over 6.5 receptions", propWhy: "Catches, not a dart TD."},
      {name: "Travis Kelce", team: "kc", game: "IND at KC · Sun 8:20", why: "71 yards including a 59-yarder.", prop: "Kelce over 49.5 rec yards", propWhy: "Walker empties the box."},
      {name: "Mike Gesicki", team: "cin", game: "CIN at HOU · Sun 1:00", tag: "CONFIRM BURROW", stamp: "WAIT", why: "5-78-1 vs Tampa.", prop: "Gesicki over 44.5 rec yards", propWhy: "Only if Burrow plays. Do not chain with Chase."}
    ],
    def: [
      {name: "Eagles D/ST", team: "phi", game: "PHI at TEN · Sun 1:00", why: "Titans lost 23-10 at home to the Jets.", prop: "Eagles D/ST over 2.5 sacks", propWhy: "Confirm the live sack total."},
      {name: "Dolphins team total", team: "mia", game: "MIA at SF · Sun 4:25", why: "Miami scored 13 at Vegas.", prop: "Dolphins team total under 17.5", propWhy: "Posted team total."},
      {name: "Ravens D/ST", team: "bal", game: "NO at BAL · Sun 1:00", why: "Saints empty script in Detroit.", prop: "Ravens D/ST over 2.5 sacks", propWhy: "Confirm live DK."},
      {name: "Bills D/ST", team: "buf", game: "DET at BUF · Thu 8:15", tag: "TNF", why: "Detroit starts Bartch-Scruggs-Borom.", prop: "Bills D/ST over 2.5 sacks", propWhy: "Not the same ticket as Buffalo -5.5."}
    ]
  }
};
function watchChip(tag){
  if (!tag) return "";
  const cls = /OUT|DNP|SIT/i.test(tag) ? "chip chip-out" : /Q|LIMITED|CONFIRM|WATCH|PROTOCOL|FRI/i.test(tag) ? "chip chip-q" : "chip chip-live";
  return `<span class="${cls}">${tag}</span>`;
}
function holdStamp(p){
  const v = String(p.stamp||"").toUpperCase();
  if (v==="KILL") return `<span class="chip chip-out">KILL</span>`;
  if (v==="WAIT") return `<span class="chip chip-q">WAIT</span>`;
  return "";
}
function holdTally(rows){
  const wait = (rows||[]).filter(function(p){ return String(p.stamp||"").toUpperCase()==="WAIT"; }).length;
  const kill = (rows||[]).filter(function(p){ return String(p.stamp||"").toUpperCase()==="KILL"; }).length;
  const bits = [String((rows||[]).length)];
  if (wait) bits.push(wait+" WAIT");
  if (kill) bits.push(kill+" KILL");
  return bits.join(" · ");
}
function watchCard(p){
  const logo = "https://a.espncdn.com/i/teamlogos/nfl/500/" + p.team + ".png";
  return `<article class="watch"><div class="watch-top"><img src="${logo}" alt=""><div><b>${p.name}${holdStamp(p)}</b><span>${p.game}${watchChip(p.tag)}</span></div></div><div class="watch-prop"><span>${p.prop}</span></div><details class="why-fold"><summary>WHY</summary><p class="watch-why">${p.why} ${p.propWhy}</p></details></article>`;
}
function paintNflWatch(week){
  const box = document.getElementById("nfl-watch");
  if (!box) return;
  const data = NFL_WATCH[week || NFL_WATCH_WEEK];
  if (!data){ box.innerHTML = "<p class='note'>Weekly Watch is not boarded yet.</p>"; return; }
  const blocks = [["QB", data.qb],["RB", data.rb],["WR", data.wr],["TE", data.te],["DEF", data.def]];
  box.innerHTML = `<p class="note">${data.note}</p>` + blocks.map(function(pair){
    return `<details class="block"><summary>${pair[0]} · ${holdTally(pair[1])}</summary><div class="body">${(pair[1]||[]).map(watchCard).join("")}</div></details>`;
  }).join("");
}
paintNflWatch(NFL_WATCH_WEEK);
