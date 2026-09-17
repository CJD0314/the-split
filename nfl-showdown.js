const NFL_SHOWDOWN = [
  {
    id: "ne-sea",
    title: "PATRIOTS AT SEAHAWKS",
    when: "Week 1 \u00b7 Wednesday night \u00b7 SEA 13-10",
    you: "576 / 1,110 \u00b7 68.5 pts",
    youLine: "CPT Maye \u00b7 JSN \u00b7 A.J. Brown \u00b7 Price \u00b7 Henry \u00b7 Kiner",
    winLine: "CPT JSN \u00b7 Maye \u00b7 Stevenson \u00b7 Price \u00b7 Henry \u00b7 Hollins",
    winScore: "93.6",
    cash: "~78.6",
    rows: [
      ["JSN", "29.2 / 43.8 CPT", "59% / 15%", "In every top-20 lineup"],
      ["Stevenson", "14.5 / 21.8 CPT", "51% / 22%", "In every top-20 lineup"],
      ["Maye", "12.8 / 19.2 CPT", "63% / 18%", "Flex only. Zero CPT in top 20"],
      ["Seahawks DST", "13.0 / 19.5 CPT", "16% / 1%", "Worked in a slog. Not a 54-point CPT"],
      ["A.J. Brown", "5.6 / 8.4 CPT", "38% / 9%", "0% of top 20"],
      ["Darnold", "0.5 / 0.8 CPT", "41% / 3%", "Field poison"],
      ["Hollins", "9.1 flex", "4%", "Winning punter"],
      ["Kiner", "1.1 flex", "3%", "Your punter"]
    ],
    miss: "Captained the expensive QB in a 13-10. Held the 38% WR. Used Kiner instead of Hollins."
  },
  {
    id: "dal-nyg",
    title: "COWBOYS AT GIANTS",
    when: "Week 1 \u00b7 Sunday night \u00b7 NYG 28-20",
    you: "17 / 831 \u00b7 120.9 pts",
    youLine: "CPT Javonte \u00b7 Lamb \u00b7 Dart \u00b7 Skattebo \u00b7 Likely \u00b7 Demercado",
    winLine: "CPT Dart \u00b7 Dak \u00b7 Javonte \u00b7 Skattebo \u00b7 Likely \u00b7 Singletary",
    winScore: "135.2",
    cash: "cashed",
    rows: [
      ["Likely", "27.8 / 41.7 CPT", "33% / 5.5%", "Highest score. Needed in every serious lineup"],
      ["Dart", "26.6 / 39.9 CPT", "51% / 25%", "Correct cheap-QB captain"],
      ["Javonte", "24.2 / 36.3 CPT", "40% / 23%", "Your CPT. Fine. Not the lever"],
      ["Singletary", "13.8 flex", "3%", "Winning punter"],
      ["Demercado", "0.7 flex", "17%", "Your punter"],
      ["Pickens", "5.8 / 8.7 CPT", "40% / 6%", "Chalk WR, dead weight"]
    ],
    miss: "Right core four. Lost first to a 3% back. Demercado 0.7 vs Singletary 13.8."
  }
];

function paintShowdown(){
  const box = document.getElementById("showdown-box");
  if (!box) return;
  const cards = NFL_SHOWDOWN.map(function(g){
    const rows = g.rows.map(function(r){
      return "<tr><td>"+r[0]+"</td><td>"+r[1]+"</td><td>"+r[2]+"</td><td>"+r[3]+"</td></tr>";
    }).join("");
    return "<article class='g-card'>"+
      "<p class='note-lab'>"+g.when+"</p>"+
      "<p class='note-head'>"+g.title+"</p>"+
      "<div class='sd-you'><b>CE409</b>"+g.you+"<br>"+g.youLine+"</div>"+
      "<div class='sd-win'><b>WINNER \u00b7 "+g.winScore+"</b>"+g.winLine+"</div>"+
      "<table class='sd-table'><tr><th>Player</th><th>Flex / CPT</th><th>Own</th><th>Note</th></tr>"+rows+"</table>"+
      "<p class='note'>"+g.miss+"</p>"+
    "</article>";
  }).join("");
  box.innerHTML =
    "<p class='note'>DraftKings captain showdowns. Handle CE409. Two Week 1 primetime slates. Apply this before TNF.</p>"+
    cards+
    "<article class='g-card'>"+
      "<p class='note-lab'>RULES THAT PAID</p>"+
      "<ul class='notes'>"+
        "<li>Captain production, not salary. Dart and JSN paid. Dak and Maye as CPT did not.</li>"+
        "<li>The 3% back who got the work beats the 17% name. Singletary over Demercado. Hollins over Kiner.</li>"+
        "<li>Chalk WR on the wrong script dies. Pickens 40% / 5.8. Brown 38% / 5.6.</li>"+
        "<li>Do not captain a DST on a 54.5 total. Seahawks CPT only worked in a 13-10.</li>"+
        "<li>Tonight: Allen, St. Brown, or Gibbs as CPT. Goff is the Maye trap. Allen + Kincaid or Gibbs + St. Brown / LaPorta is the stack.</li>"+
      "</ul>"+
    "</article>";
}
paintShowdown();
