function li(arr){ return arr.map(function(x){ return "<li>"+x+"</li>"; }).join(""); }
function paintClassicDfs(){
  const se = document.getElementById("dfs-se-box");
  const gpp = document.getElementById("dfs-gpp-box");
  if (se){
    se.innerHTML =
      "<p class='note'>Handle CE409. One lineup. High-stake single entry on the main slate. Script first. Confirm inactives at T-90.</p>"+
      "<p class='note-lab'>HOW THIS CONTEST IS WON</p>"+
      "<ul class='notes'>"+li([
        "One ticket. If the game script is wrong the lineup is dead. Do not build a GPP dart and hope.",
        "Stack the game we already stamped as live. Week 2 that is not CAR-ATL or MIN-CHI.",
        "QB + his WR1 or TE. Bring the other skill only if the 10k mean says both score.",
        "Do not force a 40-percent RB because he cashed last week. Gibbs was 43% of the Week 1 field.",
        "DST from a dog we already like, or from a game that stays under."
      ])+"</ul>"+
      "<p class='note-lab'>WEEK 2 BOARD</p>"+
      "<ul class='notes'>"+li([
        "Primary stack: CIN at HOU. Collins OUT. Chase is the pass game.",
        "Second stack: WSH at DAL. 50.5 total.",
        "SNF late pivot: IND at KC. Do not copy Walker 173 into the only lineup.",
        "Fade as a single: CHI off 59. 49ers pieces at juice salaries."
      ])+"</ul>";
  }
  if (gpp){
    gpp.innerHTML =
      "<p class='note'>Week 1 DK GPP. Unique field 831,028. Winner 274.0. CE409 used 50. Best 28,421st at 194.8. Going forward the cap is 150.</p>"+
      "<div class='mini'>"+
        "<div><b>FIELD</b><span>831,028</span></div>"+
        "<div><b>1ST</b><span>274.0</span></div>"+
        "<div><b>TOP 100 QB</b><span>Young 45% / Shough 31%</span></div>"+
        "<div><b>BURROW IN TOP 100</b><span>0</span></div>"+
      "</div>"+
      "<div class='sd-win'><b>WINNER · 274.0 · Love 1.7% field</b>Love · Gibbs · Henry · Swift · Goedert · Watson · DJ Moore · Coker · Steelers</div>"+
      "<div class='sd-you'><b>WHAT ACTUALLY FILLED THE TOP 100</b>Bryce Young 45 · Tyler Shough 31 · Coker 92 · Olave 71 · Gibbs 76 · Swift · Henry · Goedert / Johnson · Steelers</div>"+
      "<p class='note-lab'>HOW THE WINNING POOL WAS BUILT</p>"+
      "<ul class='notes'>"+li([
        "Field QB chalk was Burrow 11.3% and Herbert 10.2%. Both were 0% of the top 100. Winners left the expensive QB.",
        "First place was Love at 1.7% field. That is a spike, not the cashing pool. The cashing pool was the two cheapest QBs who went off: Young 45 of top 100, Shough 31.",
        "The leverage WR was Jalen Coker. 7.5% of the field. 95% of the top 20. 92% of the top 100. That is how a GPP is won. One mid-owned name in a game that broke.",
        "Right chalk WR was Olave. 23.7% field, 71% of the top 100. Dead chalk WR was Chase. 28.3% field, 0% of the top 20 and top 100.",
        "Gibbs was 43% of the field and 76% of the top 100. Necessary. Not sufficient. Winners paired him with Swift or Henry, not with Saquon / Hampton / Achane.",
        "TE and DST were the leftover uniqueness. Goedert and Johnson beat Mayer volume. Steelers showed in first and in 9 of the top 20."
      ])+"</ul>"+
      "<p class='note-lab'>WHERE OUR 50 MISSED THE POOL</p>"+
      "<ul class='notes'>"+li([
        "QB: Lawrence 23 and Burrow 18. Zero Young. Zero Shough. Zero Love.",
        "WR: Higgins 31 and Chase 18. Those were the dead-chalk bucket. Olave 16 was the one right chalk we had.",
        "RB: Gibbs 50 of 50 was correct ownership. The second back was Etienne / Brown / Lloyd, not Swift / Henry.",
        "DST: Jets 22 and Raiders 12. Steelers were 3."
      ])+"</ul>"+
      "<p class='note-lab'>150-MAX POOL FROM NOW ON</p>"+
      "<ul class='notes'>"+li([
        "QB split, not one pocket. 35 cheap-QB Game A. 35 cheap-QB Game B. 25 mid-price live stack. 15 chalk QB. 20 spike / 2% Love-type with the bring-back. 20 late SNF pivot.",
        "One necessary RB can live in 80 to 100 of 150 if the 10k mean and the salary say so. Write why. Never 150 of 150 without a sentence.",
        "Dead-chalk WR (this week analog to Chase) caps at 15 of 150.",
        "Right-chalk WR (Olave analog) can live in 50 to 80.",
        "Leverage WR (Coker analog) is the contest. Find two names under 12% projected own in games that can go 30. Put them in 40 to 70 combined.",
        "Second RB is Swift/Henry, not the other 15% backs. 40 / 35 / 25 across three secondary backs.",
        "DST: 50 on two cheap dogs we already like. 30 on the chalk sack DST. 20 unique.",
        "Do not make 50 copies of one stack and call it 150. If two lineups share QB + WR1 + RB1 + DST, they count as one build."
      ])+"</ul>"+
      "<p class='note-lab'>WEEK 2 TRANSLATION</p>"+
      "<ul class='notes'>"+li([
        "Do not 80-max a juice QB off last week. That was Burrow.",
        "Do not 150-max CHI pieces off 59. That is Love in reverse — the field will do it.",
        "Do not 150-max Walker off 173 or Dart off three scores.",
        "Look for this week's Coker: a second WR in a live cheap-QB game, not the WR1 the field already has."
      ])+"</ul>";
  }
}
paintClassicDfs();
