function li(arr){ return arr.map(function(x){ return "<li>"+x+"</li>"; }).join(""); }
function paintClassicDfs(){
  const se = document.getElementById("dfs-se-box");
  const gpp = document.getElementById("dfs-gpp-box");
  if (se){
    se.innerHTML =
      "<p class='note'>Handle CE409. One lineup. High-stake single entry on the main slate. Not a 20-line spray. Script first. Confirm inactives at T-90.</p>"+
      "<p class='note-lab'>HOW THIS CONTEST IS WON</p>"+
      "<ul class='notes'>"+li([
        "One ticket. If the game script is wrong the lineup is dead. Do not build a GPP dart and hope.",
        "Stack the game we already stamped as live. Week 2 that is not CAR-ATL or MIN-CHI. Those are PASS sides.",
        "QB + his WR1 or TE. Bring the other skill only if the 10k mean says both score.",
        "Do not force a 50-percent RB because he was 23 last Thursday. Gibbs 50/50 in the Week 1 GPP. n=1.",
        "DST from a dog we already like, or from a game that stays under. Not the chalk favorite DST off a 31-10."
      ])+"</ul>"+
      "<p class='note-lab'>WEEK 2 BOARD</p>"+
      "<ul class='notes'>"+li([
        "Primary stack to study: CIN at HOU if Burrow is out there. Collins is OUT. That is the injury we already used on the side.",
        "Second stack: WSH at DAL. 50.5 total. Both QBs can finish if it stays on script.",
        "SNF late pivot: IND at KC. Do not copy Walker 173 into the only lineup.",
        "Fade as a single: CHI stack off 59. MIA at SF if you need the 13.5 dog, not the 49ers pieces at juice salaries."
      ])+"</ul>"+
      "<p class='note'>Lock after T-90. If a named piece sits, rebuild. Do not leave an inactive in the only lineup.</p>";
  }
  if (gpp){
    gpp.innerHTML =
      "<p class='note'>Week 1 DK GPP. Field 831,028. Winner 274.0. CE409 entered 50 of 150. Best 28,421st at 194.8. Median 144.8. Worst 115.96.</p>"+
      "<div class='mini'>"+
        "<div><b>FIELD</b><span>831,028</span></div>"+
        "<div><b>1ST</b><span>274.0</span></div>"+
        "<div><b>CE409 BEST</b><span>28,421</span></div>"+
        "<div><b>ENTRIES</b><span>50 / 150</span></div>"+
      "</div>"+
      "<div class='sd-win'><b>WINNER · 274.0</b>QB Love · RB Gibbs · RB Henry · FLEX Swift · TE Goedert · WR Watson · WR DJ Moore · WR Coker · DST Steelers</div>"+
      "<div class='sd-you'><b>CE409 BEST · 194.8 · 28,421st</b>QB Lawrence · RB Gibbs · RB Chase Brown · FLEX Irving · TE Gesicki · WR Olave · WR P. Washington · WR Q. Johnston · DST Steelers</div>"+
      "<p class='note-lab'>WHAT THE FIELD TAUGHT</p>"+
      "<ul class='notes'>"+li([
        "Winner was Love + Packers pass game, not the expensive QBs we leaned. Lawrence 23 of our 50. Burrow 18. Love was the leave.",
        "Gibbs was in all 50 of our lineups and in the winning lineup. That was not the miss. Correlation around him was.",
        "Winning WRs were Watson, DJ Moore, Coker. Our 50 lived on Higgins 31, Chase 18, Olave 16.",
        "Winning TE was Goedert. We spent Gesicki 19 and Johnson 16.",
        "Steelers DST was in first. We used Jets 22 and Raiders 12."
      ])+"</ul>"+
      "<p class='note-lab'>RULES FOR THE 150-MAX</p>"+
      "<ul class='notes'>"+li([
        "Core 8 to 12 unique builds. Do not make 50 almost-copies of Lawrence + Gibbs + Higgins.",
        "One pocket of the field we already faded on the side can be a 3-line dart. Not 20.",
        "Leave the chalk QB in 20 to 30 percent of the 150, not 80.",
        "If a player is in 50 of 50, write why. Gibbs 50/50 last week is the example.",
        "Punt DST and the third WR are where 274 separated from 195. Spend the uniqueness there."
      ])+"</ul>"+
      "<p class='note-lab'>WEEK 2 GPP NOTE</p>"+
      "<ul class='notes'>"+li([
        "Do not 150-max CHI pieces off 59. That is the Week 1 Love-spot in reverse.",
        "If we 150-max anyone tonight, it is not Walker off 173 and it is not Dart off three scores.",
        "Build off games we stamped live: CIN-HOU, WSH-DAL, late KC only as a pivot."
      ])+"</ul>";
  }
}
paintClassicDfs();
