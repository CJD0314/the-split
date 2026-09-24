const NFL_WATCH_WEEK = 3;
const NFL_WATCH = {
  3: {
    note: "THU LOCKED. Penix starts. 10k mean Penix 176 pass. Sunday looks stay first-look.",
    qb: [
      {name:"Jordan Love",team:"gb",game:"ATL at GB · Thu 8:15",tag:"TNF",prop:"over 224.5 pass yards",why:"10k mean 229. Reed is out. Watson and Golden are the room. Confirm the live number. Not a unit."},
      {name:"Michael Penix Jr.",team:"atl",game:"ATL at GB · Thu 8:15",tag:"STARTS",stamp:"WAIT",prop:"over 209.5 pass yards",why:"He starts. 10k mean is 176 after the rust haircut. 209.5 is not our number. Do not ticket the over. HOLD the six if he walks in Q1."},
      {name:"Josh Allen",team:"buf",game:"LAC at BUF · Sun 1:00",prop:"over 244.5 pass yards",why:"Chargers can throw. Highmark. First look only. Do not copy Houston or the Thursday 248."},
      {name:"Justin Herbert",team:"lac",game:"LAC at BUF · Sun 1:00",tag:"ROAD",prop:"over 239.5 pass yards",why:"Buffalo just played Thursday. First look. Confirm live DK. Not a unit."}
    ],
    rb: [
      {name:"Bijan Robinson",team:"atl",game:"ATL at GB · Thu 8:15",tag:"TNF",prop:"over 74.5 rush yards",why:"10k mean 81 rush. Atlanta does not exist without him. Confirm live DK. He stays in the $100 six."},
      {name:"MarShawn Lloyd",team:"gb",game:"ATL at GB · Thu 8:15",tag:"OL OUT",stamp:"WAIT",prop:"over 54.5 rush yards",why:"Banks and Bako-Bewele out. 10k mean 37. Do not buy 54.5 on a patched line."},
      {name:"Jahmyr Gibbs",team:"det",game:"NYJ at DET · Sun 1:00",prop:"over 79.5 rush yards",why:"Home against the Jets is volume. First look. Do not sit him in Sunday SE."},
      {name:"Kenneth Walker",team:"kc",game:"KC at MIA · Sun 1:00",prop:"over 69.5 rush yards",why:"23-173 in the Chiefs debut. n=1. Road vs Miami. First look, not a copy of 173."},
      {name:"Saquon Barkley",team:"phi",game:"PHI at CHI · Mon 8:15",tag:"SHOULDER",stamp:"WAIT",prop:"over 69.5 rush yards",why:"Questionable shoulder. Goedert is doubtful. Do not ticket Monday until practice is clean."}
    ],
    wr: [
      {name:"Christian Watson",team:"gb",game:"ATL at GB · Thu 8:15",tag:"TNF · REED OUT",prop:"over 64.5 rec yards",why:"10k mean 69. Reed out. Watson is WR1 and the $100 captain. Confirm live DK."},
      {name:"Drake London",team:"atl",game:"ATL at GB · Thu 8:15",tag:"PENIX STARTS",prop:"over 64.5 rec yards",why:"Penix is in. 10k mean 67. First look, not a 1,111 captain."},
      {name:"Amon-Ra St. Brown",team:"det",game:"NYJ at DET · Sun 1:00",prop:"over 6.5 receptions",why:"Catches, not yards. Home. Jets. First look."},
      {name:"Jaxon Smith-Njigba",team:"sea",game:"SEA at WSH · Sun 1:00",prop:"over 6.5 receptions",why:"Washington is without Daniels. Volume first look. Confirm live DK."},
      {name:"Ja'Marr Chase",team:"cin",game:"CIN at PIT · Sun 1:00",tag:"CONFIRM BURROW",stamp:"WAIT",prop:"over 79.5 rec yards",why:"Only if Burrow is the starter. Confirm Friday."}
    ],
    te: [
      {name:"Tucker Kraft",team:"gb",game:"ATL at GB · Thu 8:15",tag:"TNF",prop:"over 44.5 rec yards",why:"10k mean 41. Reed out. Do not captain him in a 42-point game."},
      {name:"Kyle Pitts Sr.",team:"atl",game:"ATL at GB · Thu 8:15",tag:"PENIX STARTS",prop:"over 39.5 rec yards",why:"10k mean 36. Tied to Penix. Not a TNF captain."},
      {name:"Dalton Kincaid",team:"buf",game:"LAC at BUF · Sun 1:00",prop:"over 49.5 rec yards",why:"5-130 was n=1. 49.5 is the floor look."},
      {name:"Dallas Goedert",team:"phi",game:"PHI at CHI · Mon 8:15",tag:"KNEE",stamp:"KILL",prop:"over 39.5 rec yards",why:"Doubtful knee. Do not board him."}
    ],
    def: [
      {name:"Packers D/ST",team:"gb",game:"ATL at GB · Thu 8:15",tag:"TNF",prop:"over 2.5 sacks",why:"Penix first snap. Sacks are not Green Bay covering 4.5. Separate ticket."},
      {name:"Bills D/ST",team:"buf",game:"LAC at BUF · Sun 1:00",prop:"over 2.5 sacks",why:"Home after Thursday. First look."},
      {name:"Lions D/ST",team:"det",game:"NYJ at DET · Sun 1:00",prop:"over 2.5 sacks",why:"Home vs the Jets. First look."},
      {name:"Commanders",team:"wsh",game:"SEA at WSH · Sun 1:00",tag:"DANIELS OUT",stamp:"WAIT",prop:"team total under 17.5",why:"Daniels is out. Do not ticket Washington skill."}
    ]
  }
};
function watchChip(tag){
  if (!tag) return "";
  const cls = /OUT|DNP|SIT|KILL/i.test(tag) ? "chip chip-out" : /Q|LIMITED|CONFIRM|WATCH|PROTOCOL|FRI|FIRST|PENIX|OL OUT|REED|SHOULDER|KNEE|DANIELS|STARTS/i.test(tag) ? "chip chip-q" : "chip chip-live";
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
