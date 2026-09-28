const NFL_SHOWDOWN_PROCESS = {
  locked: "28 Sep 2026",
  format: "1 CPT + 5 FLEX = 6. Cap $50,000. Both teams. Never 7.",
  clock: [
    "Stamp the side. Sim may only veto.",
    "T-90 inactives.",
    "Layer 0 on the dive: target tree, ATT lift, committee cap.",
    "Run showdown_10k.py. Volume first. Gates A–G printed.",
    "Mean six and p90 six both on the page.",
    "Four-core first. Captain last and inside the four-core.",
    "Ownership overlay: total / flex / CPT. Sheet is overlay.",
    "Field size picks which six. Then lock."
  ],
  gates: [
    "A Roster — Sheet N · Rows N · Missing 0. No slashes. No others.",
    "B Target tree above the 10k. OUT names reassigned this week.",
    "C WR1/TE1 out → ATT old → ATT new (×1.08–1.15).",
    "D Mean six AND p90 six. Do not enter a mean six in a 14k.",
    "E Committee cap. Snap share <65% last week → rush share prior ≤55%.",
    "F Scoring tail on, or do not fade K/DST off a 5-point mean.",
    "G Mean ≥12 is a must only if tree share ≥25% or p(DK≥20) ≥18%."
  ],
  build: [
    "Four-core first when both QBs and both featured skill names are viable.",
    "Captain is the last click. Cheapest 1.5× inside the four-core, or the under-copied name inside it.",
    "A 10-point committee back is not a captain.",
    "Last seats from this week’s tree. The OUT-replacement beats Engram / Trautman / a $200 TE.",
    "200–400 field: mean six. 800–1,200 $100: four-core + one tree seat. 10k+ $5: p90 six, still four-core first.",
    "Do not cut a 25-point QB to pay for a unique CPT."
  ],
  kills: [
    "Starting QB to locker room in Q1 → side dead, bring-back dead.",
    "Home / favorite +14 at half → blowout kill.",
    "Our dog down 17 after three → side dead."
  ],
  scorecard: [
    "QB attempts within 8.",
    "Top-4 target names match the tree.",
    "Total inside the 20–80 band.",
    "Actual pass attempts inside the 10k p20–p80."
  ]
};

const NFL_SHOWDOWN = [
  {
    id: "lar-den",
    title: "RAMS AT BRONCOS",
    when: "Week 3 · Sunday night",
    final: "DEN 30-26",
    field: "14,268",
    youRank: "12,819",
    youPts: "73.19",
    cash: "did not cash",
    winPts: "142.79",
    youLine: "CPT Harvey · Adams · Nix · Waddle · Ferguson · Engram",
    winLine: "CPT Stafford · Adams · Nix · Kyren · Broncos · Mumpfield",
    script: "DEN from 16-0. Stafford 30/55/390. Higbee 8-62-1. Mumpfield 4-93-1. Waddle 2-10. Ferguson 1-9. Harvey 2 carries.",
    rows: [
      ["Matthew Stafford", "25.9 / 38.9 CPT", "61.5% FLEX · 6.5% CPT", "Four-core. We cut him on the $5."],
      ["Bo Nix", "25.1 / 37.7 CPT", "49.2% FLEX", "Four-core. Kept."],
      ["Davante Adams", "23.7 / 35.6 CPT", "54.5% FLEX", "Four-core. Kept."],
      ["Kyren Williams", "21.8 / 32.7 CPT", "45.9% FLEX · 24.8% CPT", "Four-core. We cut him on the $5."],
      ["Tyler Higbee", "20.2", "1.4% FLEX", "Tree seat. Not a first-class 10k row."],
      ["Konata Mumpfield", "19.3", "3.4% FLEX", "Puka stand-in. We called him a seat."],
      ["RJ Harvey", "10.7 / 16.1 CPT", "1.6% CPT", "Unique CPT outside the four-core."],
      ["Jaylen Waddle", "6.4", "47.6% FLEX", "Mean 17.9 promoted to a must."],
      ["Terrance Ferguson", "1.9", "45.7% FLEX", "Monday TE copied forward."],
      ["Evan Engram", "0.0", "25.9% FLEX", "Cap seat over the tree."]
    ],
    paid: [
      "92 of top 100 had Stafford + Nix + Adams + Kyren.",
      "P90 six was the winner. Mean six was Waddle + Ferguson."
    ],
    died: [
      "Harvey CPT. Cut Stafford and Kyren.",
      "10k mean 40 vs actual 56. Stafford 33 att vs 55."
    ],
    miss: "12,819 of 14,268. Process miss, not variance."
  },
  {
    id: "atl-gb",
    title: "FALCONS AT PACKERS",
    when: "Week 3 · Thursday night",
    final: "ATL 35-14",
    field: "1,111",
    youRank: "632",
    youPts: "111.82",
    cash: "did not cash",
    winPts: "147.98",
    youLine: "CPT Watson · Love · Penix · Bijan · Dotson · Melton",
    winLine: "CPT London · Bijan · Love · Golden · Folk · Moore",
    script: "Falcons smash run. Bijan 194-2. London 9-194. GB 17 rush yards.",
    rows: [
      ["Drake London", "47.10 CPT", "14.58% CPT", "Winner captain"],
      ["Christian Watson", "33.90 CPT", "14.22% CPT", "Our captain"],
      ["Bijan Robinson", "38.30 flex", "23.76% CPT", "On both sixes"],
      ["Jahan Dotson", "2.10", "20.25%", "Dead seat"],
      ["Bo Melton", "0.00", "9.27%", "Salary geometry"]
    ],
    paid: ["Bijan stayed. Love stayed. Side PASS."],
    died: ["Watson CPT vs London CPT. Melton and Dotson vs Folk and Moore.", "Roster 28 sheet / 18 rows."],
    miss: "632nd of 1,111. Last seats, the captain, and a roster-gate fail."
  },
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
    paid: ["Adams CPT paid.", "Q1 QB-to-locker-room is an instant kill."],
    died: ["Dart and Nabers.", "Parkinson over Ferguson was leftover salary. Ferguson missing from the 10k."],
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
    died: ["Moore, Bass, Davis vs Goff. Four-core needed Goff."],
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
    rows: [["JSN", "43.8 CPT", "15% CPT", "Every top-20"], ["Maye", "19.2 CPT", "18% CPT", "0 CPT in top 20"]],
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
    rows: [["Dart", "39.9 CPT", "25% CPT", "Cheap QB CPT"], ["Demercado", "0.7", "17%", "Your punter"]],
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
    rows: [["Walker", "55.7 CPT", "17% CPT", "Optimal CPT"], ["Rice", "14.9 CPT", "9% CPT", "Your CPT"]],
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
  const P = NFL_SHOWDOWN_PROCESS;
  const proc =
    "<div class='sd-you'><b>PROCESS · LOCKED "+P.locked+"</b>"+P.format+"</div>"+
    "<p class='note-lab'>CLOCK</p><ul class='notes'>"+sdList(P.clock)+"</ul>"+
    "<p class='note-lab'>GATES · FAIL = NO LOCK</p><ul class='notes'>"+sdList(P.gates)+"</ul>"+
    "<p class='note-lab'>BUILD</p><ul class='notes'>"+sdList(P.build)+"</ul>"+
    "<p class='note-lab'>LIVE KILLS</p><ul class='notes'>"+sdList(P.kills)+"</ul>"+
    "<p class='note-lab'>10K SCORECARD</p><ul class='notes'>"+sdList(P.scorecard)+"</ul>"+
    "<p class='note'>Full text: SHOWDOWN-PROCESS.md · engine: showdown_10k.py · rules: THE-SPLIT-RULES.md</p>";
  const hist = NFL_SHOWDOWN.map(function(g){
    return "<details class='block sd-hist'>"+
      "<summary>"+g.title+" · "+g.final+" · "+g.youRank+" / "+g.field+"</summary>"+
      "<div class='body'>"+
        "<p class='note'>"+g.script+"</p>"+
        "<div class='sd-you'><b>OUR SIX</b>"+g.youLine+" · "+g.youPts+"</div>"+
        "<div class='sd-win'><b>WHAT WON</b>"+g.winLine+" · "+g.winPts+"</div>"+
        "<table class='sd-table'><tr><th>Player</th><th>Flex / CPT</th><th>Own</th><th>Note</th></tr>"+sdRows(g.rows)+"</table>"+
        "<p class='note'>"+g.miss+"</p>"+
      "</div></details>";
  }).join("");
  box.innerHTML =
    proc +
    "<p class='note'>SNF is closed. $5 / 14,268 · jbelanger0630 · 73.19 · 12,819th. Four-core was Stafford + Nix + Adams + Kyren. We entered Harvey CPT.</p>"+
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
