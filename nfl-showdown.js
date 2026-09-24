const NFL_SHOWDOWN = [
  {
    id: "nyg-lar",
    title: "GIANTS AT RAMS",
    when: "Week 2 · Monday night",
    final: "LAR 28-6",
    field: "222",
    youRank: "—",
    youPts: "—",
    cash: "$200 SE",
    winPts: "—",
    youLine: "CPT Adams · Dart · Kyren · Nabers · Corum · Parkinson",
    winLine: "Stafford went off the card. Ferguson 6-54-1, not Parkinson.",
    script: "Blowout. Dart knee Q1. Nabers shoulder. Adams 8-195-2 CPT was right.",
    rows: [
      ["Davante Adams", "CPT right", "—", "8-195-2"],
      ["Jaxson Dart", "dead Q1", "—", "Knee. Instant kill"],
      ["Parkinson", "last seat", "—", "Ferguson was cheaper and involved"]
    ],
    paid: ["Adams CPT paid.","Q1 QB-to-locker-room is an instant kill."],
    died: ["Dart and Nabers.","Parkinson over Ferguson was leftover salary."],
    miss: "Right captain. Dead on the QB exit and the last seat."
  },
  {
    id: "det-buf",
    title: "LIONS AT BILLS",
    when: "Week 2 · Thursday night",
    final: "BUF 41-31",
    field: "1,111",
    youRank: "450",
    youPts: "126.83",
    cash: "did not cash",
    winPts: "174.51",
    youLine: "CPT Allen · St. Brown · Moore · Kincaid · Bass · Davis",
    winLine: "CPT Allen · St. Brown · Goff · Kincaid · Palmer · Knox",
    script: "Shootout. 72 points. Both QBs scored.",
    rows: [
      ["Josh Allen", "61.23 CPT", "24.8% CPT", "Correct captain"],
      ["Jared Goff", "32.78 flex", "1.4% CPT", "In 13 of top 20"],
      ["DJ Moore", "-0.1", "36.9%", "Gone at half"],
      ["Ray Davis", "0", "5.0%", "Last slot. Zero"]
    ],
    paid: ["Allen CPT + St. Brown + Kincaid."],
    died: ["Moore, Bass, Davis vs Goff."],
    miss: "Right captain. Dead on Goff and the last two. 450th of 1,111."
  },
  {
    id: "ne-sea",
    title: "PATRIOTS AT SEAHAWKS",
    when: "Week 1 · Wed night",
    final: "SEA 13-10",
    field: "1,110",
    youRank: "576",
    youPts: "68.5",
    cash: "78.6",
    winPts: "93.6",
    youLine: "CPT Maye · JSN · A.J. Brown · Price · Henry · Kiner",
    winLine: "CPT JSN · Maye · Stevenson · Price · Henry · Hollins",
    script: "Slog. The receiver who got the ball won the 1.5x.",
    rows: [["JSN", "43.8 CPT", "15% CPT", "Every top-20"],["Maye", "19.2 CPT", "18% CPT", "0 CPT in top 20"]],
    paid: ["JSN captain."],
    died: ["Maye captain in a 13-10."],
    miss: "Captained the expensive QB in a slog."
  },
  {
    id: "dal-nyg",
    title: "COWBOYS AT GIANTS",
    when: "Week 1 · Sun night",
    final: "NYG 28-20",
    field: "831",
    youRank: "17",
    youPts: "120.9",
    cash: "cashed",
    winPts: "135.2",
    youLine: "CPT Javonte · Lamb · Dart · Skattebo · Likely · Demercado",
    winLine: "CPT Dart · Dak · Javonte · Skattebo · Likely · Singletary",
    script: "Right core. Lost first to a 3% back.",
    rows: [["Dart", "39.9 CPT", "25% CPT", "Cheap QB CPT"],["Demercado", "0.7", "17%", "Your punter"]],
    paid: ["Right four besides the punter."],
    died: ["Demercado 0.7 vs Singletary 13.8."],
    miss: "17th of 831."
  },
  {
    id: "den-kc",
    title: "BRONCOS AT CHIEFS",
    when: "Week 1 · Mon night",
    final: "KC 31-10",
    field: "1,106",
    youRank: "266",
    youPts: "89.7",
    cash: "92.7",
    winPts: "124.6",
    youLine: "CPT Rice · Walker · Mahomes · Harvey · Butker · Mims",
    winLine: "CPT Walker · Mahomes · Rice · Kelce · Chiefs DST · Engram",
    script: "Walker 173-2. Rice CPT was the hole.",
    rows: [["Walker", "55.7 CPT", "17% CPT", "Optimal CPT"],["Rice", "14.9 CPT", "9% CPT", "Your CPT"]],
    paid: ["Walker captain."],
    died: ["Rice CPT vs Walker CPT."],
    miss: "266th of 1,106."
  }
];
function sdRows(rows){
  return rows.map(function(r){
    return "<tr><td>"+r[0]+"</td><td>"+r[1]+"</td><td>"+r[2]+"</td><td>"+r[3]+"</td></tr>";
  }).join("");
}
function sdList(arr){
  return arr.map(function(x){ return "<li>"+x+"</li>"; }).join("");
}
function paintShowdown(){
  const box = document.getElementById("showdown-box");
  if (!box) return;
  const hist = NFL_SHOWDOWN.map(function(g){
    return "<details class='block sd-hist'>"+
      "<summary>"+g.title+" · "+g.final+" · "+g.youRank+" / "+g.field+"</summary>"+
      "<div class='body'>"+
        "<p class='note'>"+g.script+"</p>"+
        "<div class='sd-you'><b>OUR SIX</b>"+g.youLine+"</div>"+
        "<div class='sd-win'><b>WHAT WON</b>"+g.winLine+"</div>"+
        "<table class='sd-table'><tr><th>Player</th><th>Flex / CPT</th><th>Own</th><th>Note</th></tr>"+sdRows(g.rows)+"</table>"+
        "<p class='note'>"+g.miss+"</p>"+
      "</div></details>";
  }).join("");
  box.innerHTML =
    "<p class='note'>Tonight is live. $100 SE · 1,111. Reviews below are closed slates.</p>"+
    "<div class='sd-you'><b>TNF LOCKED · ATL @ GB</b>CPT Watson · Love · Penix · Bijan · Dotson · Melton · $49,700<br>HOLD if Penix walks: CPT Watson · Love · Bijan · Golden · Johnson · Melton</div>"+
    "<ul class='notes'>"+
      "<li>Do not default the QB captain.</li>"+
      "<li>Q1 QB exit kills the card.</li>"+
      "<li>Last seats from involvement. Melton is salary geometry.</li>"+
      "<li>Both QBs if the other starter is active.</li>"+
    "</ul>"+
    "<p class='note-lab'>CLOSED SLATES</p>"+
    hist;
  const folds = box.querySelectorAll("details.sd-hist");
  folds.forEach(function(d){
    d.addEventListener("toggle", function(){
      if (!d.open) return;
      folds.forEach(function(other){ if (other !== d) other.open = false; });
    });
  });
}
paintShowdown();
