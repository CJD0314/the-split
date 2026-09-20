function li(arr){ return arr.map(function(x){ return "<li>"+x+"</li>"; }).join(""); }
function capLabel(n){
  const x = Number(n);
  if (!isFinite(x)) return n;
  return x + " (" + Math.round(x / 150 * 100) + "%)";
}
function rows(list){
  return list.map(function(r){
    return "<tr><td>"+r[0]+"</td><td>"+r[1]+"</td><td>"+r[2]+"</td><td>"+r[3]+"</td><td>"+capLabel(r[4])+"</td><td>"+r[5]+"</td></tr>";
  }).join("");
}
function paintClassicDfs(){
  const se = document.getElementById("dfs-se-box");
  const gpp = document.getElementById("dfs-gpp-box");
  const pool = document.getElementById("dfs-pool-box");
  const rules = document.getElementById("dfs-rules-box");
  if (se){
    se.innerHTML =
      "<p class='note'>Handle CE409. One lineup. Script first. GPP cannot copy this ticket more than 15 times.</p>"+
      "<ul class='notes'>"+li([
        "Stack WSH at DAL. Dak + Lamb or Daniels + McLaurin. One bring-back.",
        "No CHI. No CMC if he is a sit. No Andrews. No Schultz.",
        "Lock after T-90."
      ])+"</ul>";
  }
  if (gpp){
    gpp.innerHTML =
      "<p class='note'>Week 1 tape stays here. This week's names live under WEEK 2. Field is 416.1k on the 1 p.m. main. Not SNF.</p>"+
      "<ul class='notes'>"+li([
        "No QB over 40 of 150 (27%). No RB over 90 (60%). Bijan cap is 60 (40%).",
        "SE stack cap 15 (10%).",
        "Two lineups that share QB + stack WR + RB1 + DST count as one build."
      ])+"</ul>";
  }
  if (pool){
    pool.innerHTML =
      "<p class='note'>Checked Week 2 rosters. Doubs is NE. Waddle is DEN. Willis is MIA. Tua is ATL and inactive. Olave is Q (hamstring).</p>"+
      "<p class='note-lab'>QB · 150 / 150</p>"+
      "<table class='sd-table'><tr><th>Player</th><th>Sal</th><th>Proj</th><th>Own</th><th>Cap</th><th>Role</th></tr>"+
      rows([
        ["Baker Mayfield","$5,600","18.6","3.9%","40","TB. Stack Egbuka."],
        ["Tyler Shough","$5,300","17.8","4.6%","32","NO. Stack Olave + Johnson."],
        ["Jayden Daniels","$6,300","20.5","6.8%","20","WSH. Stack McLaurin."],
        ["Jordan Love","$5,900","18.8","6.2%","20","GB. Stack Watson. Not Doubs."],
        ["Drake Maye","$6,100","18.3","4.1%","14","NE. Stack Doubs. AJ Brown IR."],
        ["Dak Prescott","$6,400","21.3","10.9%","12","DAL. Stack Lamb."],
        ["Lamar Jackson","$7,300","21.6","5.3%","12","BAL. No Andrews. Flowers OUT."]
      ])+"</table>"+
      "<p class='note-lab'>RB</p>"+
      "<table class='sd-table'><tr><th>Player</th><th>Sal</th><th>Proj</th><th>Own</th><th>Cap</th><th>Role</th></tr>"+
      rows([
        ["Bijan Robinson","$8,200","23.0","31.9%","60","ATL. Rush starts. Tua inactive."],
        ["Bucky Irving","$6,100","17.2","12.1%","45","TB. Mayfield stack."],
        ["Breece Hall","$6,200","17.0","8.0%","40","NYJ."],
        ["Saquon Barkley","$7,000","18.1","9.1%","30","PHI."],
        ["Bhayshul Tuten","$4,400","13.5","1.5%","20","JAX."],
        ["Javonte Williams","$6,400","19.0","23.8%","12","DAL. Dak copies only."]
      ])+"</table>"+
      "<p class='note-lab'>WR</p>"+
      "<table class='sd-table'><tr><th>Player</th><th>Sal</th><th>Proj</th><th>Own</th><th>Cap</th><th>Role</th></tr>"+
      rows([
        ["Emeka Egbuka","$6,400","14.6","5.0%","40","TB. Mayfield."],
        ["Christian Watson","$6,200","15.6","11.3%","20","GB. Love."],
        ["Chris Olave","$7,200","15.6","8.5%","35","NO. Shough. Q hamstring."],
        ["Romeo Doubs","$5,000","11.2","2.7%","14","NE. Maye. Not GB."],
        ["Terry McLaurin","$5,400","12.9","10.8%","20","WSH. Daniels."],
        ["CeeDee Lamb","$7,300","19.4","20.1%","12","DAL. Dak copies."],
        ["Ja'Marr Chase","$7,600","18.0","18.4%","8","CIN. Dead chalk tax."],
        ["Justin Jefferson","$7,800","20.2","15.9%","8","MIN. Dead chalk tax."]
      ])+"</table>"+
      "<p class='note-lab'>TE · 150 / 150</p>"+
      "<table class='sd-table'><tr><th>Player</th><th>Sal</th><th>Proj</th><th>Own</th><th>Cap</th><th>Role</th></tr>"+
      rows([
        ["Juwan Johnson","$3,900","11.5","6.5%","50","NO. Shough. Illness, practiced Friday."],
        ["Dallas Goedert","$4,800","11.7","3.9%","45","PHI."],
        ["Trey McBride","$6,900","16.7","12.0%","40","ARI."],
        ["Hunter Henry","$4,000","9.0","4.5%","15","NE. Maye / Doubs. Not Andrews."]
      ])+"</table>"+
      "<p class='note-lab'>DST · 150 / 150</p>"+
      "<table class='sd-table'><tr><th>Player</th><th>Sal</th><th>Proj</th><th>Own</th><th>Cap</th><th>Role</th></tr>"+
      rows([
        ["Eagles","$3,700","8.3","7.4%","50","vs TEN."],
        ["Buccaneers","$3,600","8.5","11.9%","45","vs CLE. Not all 40 Mayfield."],
        ["Seahawks","$3,500","7.9","7.0%","35","Lock starts. Darnold OUT."],
        ["Punt DST","$3,300","—","—","20","Ravens only without Shough."]
      ])+"</table>";
  }
  if (rules){
    rules.innerHTML =
      "<p class='note'>Roster-checked. Doubs = NE. Waddle = DEN / Nix. Willis = MIA. Do not stack across those teams.</p>"+
      "<p class='note-lab'>FORCE IF QB IS IN</p>"+
      "<ul class='notes'>"+li([
        "If Mayfield → Egbuka (TB).",
        "If Shough → Olave and Johnson (NO). If Olave sits, Shough still needs Johnson plus Vele — do not keep 32 unstacked Shough.",
        "If Daniels → McLaurin (WSH). If McLaurin sits, Daniels to 0.",
        "If Love → Watson (GB). Not Doubs. Not Golden as the only WR.",
        "If Maye → Doubs (NE).",
        "If Dak → Lamb (DAL)."
      ])+"</ul>"+
      "<p class='note-lab'>NEVER TOGETHER</p>"+
      "<ul class='notes'>"+li([
        "Love + Doubs.",
        "Maye + Watson.",
        "Willis + Waddle. Different teams.",
        "Lamar + Andrews.",
        "Lamar + Derrick Henry as the only BAL skill — pick one Baltimore bag.",
        "Shough + Ravens DST.",
        "Dak + Daniels.",
        "Bijan + Chase + Jefferson. If Bijan is on, one of Chase / Jefferson max.",
        "Andrews anywhere. Schultz anywhere. Nico. Flowers. AJ Brown."
      ])+"</ul>"+
      "<p class='note-lab'>MAX EXPOSURE</p>"+
      "<ul class='notes'>"+li([
        "Mayfield 27. Shough 21. Daniels 13. Love 13. Maye 9. Dak 8. Lamar 8.",
        "Bijan 40. Irving 30. Hall 27. Saquon 20. Tuten 13. Javonte 8.",
        "Egbuka 27. Watson 13. Olave 23. Doubs 9. McLaurin 13. Lamb 8. Chase 5. Jefferson 5.",
        "Johnson 33. Goedert 30. McBride 27. Hunter Henry 10.",
        "Eagles 33. Bucs 30. Seahawks 23. Ravens 13."
      ])+"</ul>"+
      "<p class='note-lab'>SIT / OUT</p>"+
      "<ul class='notes'>"+li([
        "OUT: Nico Collins. Zay Flowers. AJ Brown (IR). Sam Darnold. Tua (ATL inactive). Penix. Kyler Murray.",
        "DOUBTFUL: Brock Bowers. Treat as out until active.",
        "QUESTIONABLE: Olave hamstring. Burrow back. If Olave out, do not move his 23 onto Chase.",
        "Watson out → Golden only inside the Love 20.",
        "Doubs out → Maye to 0.",
        "McLaurin out → Daniels to 0."
      ])+"</ul>"+
      "<p class='note-lab'>OFF THE 150</p>"+
      "<ul class='notes'>"+li([
        "Willis + Waddle. Waddle only exists with Nix. Nix is not in this pool, so Waddle is not in this pool.",
        "CHI. Caleb. Odunze. Swift.",
        "Golden as leverage. Pickens as a GPP core. CMC unless confirmed SE copies."
      ])+"</ul>";
  }
}
paintClassicDfs();
