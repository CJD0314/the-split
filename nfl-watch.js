const NFL_WATCH_WEEK = 2;
const NFL_WATCH = {
  2: {
    note: "WED BOARD. First look. Not a unit list. Confirm live DK. WAIT = injury or QB. KILL = dead.",
    qb: [
      {name:"Josh Allen",team:"buf",game:"DET at BUF · Thu 8:15",tag:"TNF",prop:"over 250.5 pass yards",why:"Houston: 334 pass, 23 rush. Detroit just allowed 410 pass yards after leading 21-0. Total is 54.5. The pass number matches a one-score Thursday. Do not buy his rush over off that 23."},
      {name:"Lamar Jackson",team:"bal",game:"NO at BAL · Sun 1:00",tag:"FLOWERS DNP",prop:"over 225.5 pass yards",why:"324 yards at Indy with Flowers already limited. Saints threw all night at Detroit and will trail again here. Flowers is a KILL. Lamar is not."},
      {name:"Caleb Williams",team:"chi",game:"MIN at CHI · Sun 1:00",prop:"over 29.5 rush yards",why:"10 carries, 65 yards, two rushing scores at Carolina. Flores blitzed Love on 78 percent. This is designed keepers, not a passing-yard bet. If Swift sits, the number gets easier."},
      {name:"Trevor Lawrence",team:"jax",game:"JAX at DEN · Sun 4:05",prop:"over 1.5 pass TD",why:"Four TD passes on 23 attempts vs Cleveland — n=1 against a dead offense. Denver just gave Walker 173 at home. Confirm live DK."}
    ],
    rb: [
      {name:"Jahmyr Gibbs",team:"det",game:"DET at BUF · Thu 8:15",tag:"TNF",prop:"over 89.5 rush yards",why:"29-156-2 with Montgomery gone. Miller and Mahogany are out, so this is volume on a patched line. 89.5 is about 3.6 a carry on 25. Same script as the side we passed."},
      {name:"Kenneth Walker",team:"kc",game:"IND at KC · Sun 8:20",prop:"over 79.5 rush yards",why:"23-173-1 in his Chiefs debut. n=1. Indy just gave Henry 24-144-3. The posted number is 79.5, not 94. Home after a 31-10 is the script."},
      {name:"Derrick Henry",team:"bal",game:"NO at BAL · Sun 1:00",prop:"over 0.5 rush TD",why:"Three rushing scores on 24 carries at Indy. Home touchdown-plus favorite. Yardage overs get messy if they sit on the lead. The TD is the ticket."},
      {name:"D'Andre Swift",team:"chi",game:"MIN at CHI · Sun 1:00",tag:"SIT UNTIL FRI",stamp:"WAIT",prop:"over 69.5 rush yards",why:"18-124-3 at Carolina only counts if he is a full go. Limited Wednesday ankle/knee. Do not ticket until Friday practice is clean."},
      {name:"Saquon Barkley",team:"phi",game:"PHI at TEN · Sun 1:00",prop:"over 79.5 rush yards",why:"Week 1 was 83 on 15 against Washington. Tennessee just let Breece Hall go 22-102-1 at home. Reset against a soft front, not a new identity."}
    ],
    wr: [
      {name:"Amon-Ra St. Brown",team:"det",game:"DET at BUF · Thu 8:15",tag:"TNF",prop:"over 7.5 receptions",why:"14 targets, 10 catches, two scores including OT. This is catches, not yards. Checkdowns can clear 7.5 while Gibbs still works."},
      {name:"Jaxon Smith-Njigba",team:"sea",game:"SEA at ARI · Sun 4:25",prop:"over 6.5 receptions",why:"8-122 on 11 targets in a 13-10. He was the passing game. 6.5 is a floor from a slog, not a shootout projection."},
      {name:"Ja'Marr Chase",team:"cin",game:"CIN at HOU · Sun 1:00",tag:"CONFIRM BURROW",stamp:"WAIT",prop:"over 79.5 rec yards",why:"Houston just gave Allen 334. Chase is the first read if they trail. Burrow was limited Wednesday. If he sits, this ticket is dead."},
      {name:"Justin Jefferson",team:"min",game:"MIN at CHI · Sun 1:00",tag:"QB WATCH",stamp:"WAIT",prop:"over 84.5 rec yards",why:"8-92-2 last week. Both scores came from Wentz after Murray left. Do not ticket until the starter is named."},
      {name:"Chris Olave",team:"no",game:"NO at BAL · Sun 1:00",prop:"over 74.5 rec yards",why:"10-182 in Detroit. Baltimore just scored 41. New Orleans will throw from behind again. Volume is the reason, not 182 repeating."}
    ],
    te: [
      {name:"Dalton Kincaid",team:"buf",game:"DET at BUF · Thu 8:15",tag:"TNF",prop:"over 54.5 rec yards",why:"5-130 at Houston. n=1, and one chunk play did most of it. 54.5 sits under Allen's pass over. Same script, smaller number."},
      {name:"Trey McBride",team:"ari",game:"SEA at ARI · Sun 4:25",prop:"over 6.5 receptions",why:"13 targets, 9 catches, a score. Brissett's first read. Catches in the middle of Seattle, not a dart TD."},
      {name:"Travis Kelce",team:"kc",game:"IND at KC · Sun 8:20",prop:"over 49.5 rec yards",why:"71 yards in the 31-10, 59 of them on one play. Walker pulls linebackers downhill. Kelce is the seam, not the run ticket."},
      {name:"Mike Gesicki",team:"cin",game:"CIN at HOU · Sun 1:00",tag:"CONFIRM BURROW",stamp:"WAIT",prop:"over 44.5 rec yards",why:"5-78-1 vs Tampa as the underneath. Houston leaked Kincaid for 130. Only if Burrow plays. Do not chain with Chase."}
    ],
    def: [
      {name:"Eagles D/ST",team:"phi",game:"PHI at TEN · Sun 1:00",prop:"over 2.5 sacks",why:"Titans lost 23-10 at home to the Jets and could not protect. Confirm the live sack total."},
      {name:"Dolphins",team:"mia",game:"MIA at SF · Sun 4:25",prop:"team total under 17.5",why:"Miami scored 13 at Vegas. San Francisco just won 27-7 and is a home double-digit favorite. Bet the posted team total."},
      {name:"Ravens D/ST",team:"bal",game:"NO at BAL · Sun 1:00",prop:"over 2.5 sacks",why:"Saints lived in an empty passing script in Detroit. Baltimore is the home favorite. Confirm live DK."},
      {name:"Bills D/ST",team:"buf",game:"DET at BUF · Thu 8:15",tag:"TNF",prop:"over 2.5 sacks",why:"Detroit starts Bartch, Scruggs, and Borom. Pressure on Goff is not Buffalo covering -5.5. Separate ticket."}
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
  return `<details class="watch-line" open><summary><img src="${logo}" alt=""><b>${p.name}</b>${holdStamp(p)}<span>${p.prop}</span></summary><p class="watch-why">${p.game}${watchChip(p.tag)} — ${p.why}</p></details>`;
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
