const NFL_WATCH_WEEK = 3;
const NFL_WATCH = {
  3: {
    note: "THU BOARD. First look. Not a unit list. Confirm live DK. WAIT = injury or first snap. KILL = dead.",
    qb: [
      {name:"Jordan Love",team:"gb",game:"ATL at GB · Thu 8:15",tag:"TNF",prop:"over 224.5 pass yards",why:"Reed is out. Watson and Golden are the room. Home opener, mid-40s total. Volume if Green Bay has to throw, not a copy of the OT win. Confirm the live number."},
      {name:"Michael Penix Jr.",team:"atl",game:"ATL at GB · Thu 8:15",tag:"FIRST SNAP",stamp:"WAIT",prop:"over 209.5 pass yards",why:"First snap of 2026 after the ACL year. Full Wednesday. Do not ticket a debut pass over until T-90 confirms he starts and stays in. If he sits, this is dead."},
      {name:"Josh Allen",team:"buf",game:"LAC at BUF · Sun 1:00",prop:"over 244.5 pass yards",why:"Chargers can throw. Highmark. First look only. Do not copy the 334 from Houston or the Thursday 248 against Detroit."},
      {name:"Justin Herbert",team:"lac",game:"LAC at BUF · Sun 1:00",tag:"ROAD",prop:"over 239.5 pass yards",why:"Buffalo just played Thursday. Herbert is the other half of that total. Confirm live DK. Not a unit."}
    ],
    rb: [
      {name:"Bijan Robinson",team:"atl",game:"ATL at GB · Thu 8:15",tag:"TNF",prop:"over 74.5 rush yards",why:"Atlanta does not exist without him. Penix debut does not erase the back. First look on a patched Packers front. Confirm live DK."},
      {name:"MarShawn Lloyd",team:"gb",game:"ATL at GB · Thu 8:15",tag:"OL OUT",stamp:"WAIT",prop:"over 54.5 rush yards",why:"Banks out. Bako-Bewele season. Atlanta has been stout vs RB. Do not buy the home-favorite rush over on a patched line until T-90."},
      {name:"Jahmyr Gibbs",team:"det",game:"NYJ at DET · Sun 1:00",prop:"over 79.5 rush yards",why:"Home against the Jets is volume. First look. Confirm the live number. Do not sit him in SE."},
      {name:"Kenneth Walker",team:"kc",game:"KC at MIA · Sun 1:00",prop:"over 69.5 rush yards",why:"23-173 in the Chiefs debut. n=1. Road vs Miami. First look, not a copy of 173."},
      {name:"Saquon Barkley",team:"phi",game:"PHI at CHI · Mon 8:15",tag:"SHOULDER",stamp:"WAIT",prop:"over 69.5 rush yards",why:"Questionable shoulder. Goedert is doubtful. Do not ticket Monday until Friday/Saturday practice is clean."}
    ],
    wr: [
      {name:"Christian Watson",team:"gb",game:"ATL at GB · Thu 8:15",tag:"TNF · REED OUT",prop:"over 64.5 rec yards",why:"Reed neck is out. Watson is WR1. Terrell is IR. First look on targets, not a copy of three scores. Confirm live DK."},
      {name:"Drake London",team:"atl",game:"ATL at GB · Thu 8:15",tag:"PENIX",stamp:"WAIT",prop:"over 64.5 rec yards",why:"WR1 if Penix is the starter. Dead if Penix sits. Same WAIT as the QB. Do not chain this to a side."},
      {name:"Amon-Ra St. Brown",team:"det",game:"NYJ at DET · Sun 1:00",prop:"over 6.5 receptions",why:"Catches, not yards. Home. Jets. First look."},
      {name:"Jaxon Smith-Njigba",team:"sea",game:"SEA at WSH · Sun 1:00",prop:"over 6.5 receptions",why:"He was the passing game in the slog. Washington is without Daniels. Volume first look. Confirm live DK."},
      {name:"Ja'Marr Chase",team:"cin",game:"CIN at PIT · Sun 1:00",tag:"CONFIRM BURROW",stamp:"WAIT",prop:"over 79.5 rec yards",why:"Only if Burrow is the starter. Do not ticket a backup script. Confirm Friday."}
    ],
    te: [
      {name:"Tucker Kraft",team:"gb",game:"ATL at GB · Thu 8:15",tag:"TNF",prop:"over 44.5 rec yards",why:"Reed out. Love's middle. Involvement seat for showdown last chairs. Confirm live DK. Do not captain him in a 43-point game."},
      {name:"Kyle Pitts Sr.",team:"atl",game:"ATL at GB · Thu 8:15",tag:"PENIX",stamp:"WAIT",prop:"over 39.5 rec yards",why:"Tied to Penix. Same WAIT. Not a TNF captain in a low-mid total."},
      {name:"Dalton Kincaid",team:"buf",game:"LAC at BUF · Sun 1:00",prop:"over 49.5 rec yards",why:"5-130 was n=1. 49.5 is the floor look. Tight-end yards are not a main-slate captain."},
      {name:"Dallas Goedert",team:"phi",game:"PHI at CHI · Mon 8:15",tag:"KNEE",stamp:"KILL",prop:"over 39.5 rec yards",why:"Doubtful knee. Do not board him. If he is a surprise active Monday, revisit. Until then he is dead."}
    ],
    def: [
      {name:"Packers D/ST",team:"gb",game:"ATL at GB · Thu 8:15",tag:"TNF",prop:"over 2.5 sacks",why:"Penix first snap. Atlanta has not lived in the red zone. Sacks are not Green Bay covering 6. Separate ticket. Confirm live DK."},
      {name:"Bills D/ST",team:"buf",game:"LAC at BUF · Sun 1:00",prop:"over 2.5 sacks",why:"Home after Thursday. Chargers pass. First look. Not a reason to lay a week-3 number yet."},
      {name:"Lions D/ST",team:"det",game:"NYJ at DET · Sun 1:00",prop:"over 2.5 sacks",why:"Home vs the Jets. First look. Confirm the live sack total."},
      {name:"Commanders",team:"wsh",game:"SEA at WSH · Sun 1:00",tag:"DANIELS OUT",stamp:"WAIT",prop:"team total under 17.5",why:"Daniels is out. Do not ticket Washington skill. Team total under is the only look, and only after the backup is named."}
    ]
  }
};
function watchChip(tag){
  if (!tag) return "";
  const cls = /OUT|DNP|SIT|KILL/i.test(tag) ? "chip chip-out" : /Q|LIMITED|CONFIRM|WATCH|PROTOCOL|FRI|FIRST|PENIX|OL OUT|REED|SHOULDER|KNEE|DANIELS/i.test(tag) ? "chip chip-q" : "chip chip-live";
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
