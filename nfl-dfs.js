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
      "<p class='note'>DK salaries checked 9/20. McLaurin $5,200. Tuten $5,600. Optimizer wins if it disagrees.</p>"+
      "<p class='note-lab'>1 P.M. INACTIVES · SKILL</p>"+
      "<ul class='notes'>"+li([
        "NO: Kendre Miller. Olave and Johnson are active.",
        "BAL: Zay Flowers. Madubuike.",
        "NE: AJ Brown (IR). Doubs and Henry and Maye are active.",
        "PIT: Michael Pittman. Joey Porter Jr.",
        "ATL: Tua. Penix. Bijan is active. Rush starts.",
        "CHI / MIN: Kyler Murray. Jauan Jennings. Jordan Mason.",
        "HOU: Nico Collins. Clowney.",
        "GB: Jacobs (exempt). Hargrave. Watson and Love are active.",
        "NYJ: Minkah. Omar Cooper IR. Hall is active.",
        "PHI: Greenard. Elijah Moore. Saquon and Goedert are active.",
        "CIN: Burrow is active. Nico is the Texans out."
      ])+"</ul>"+
      "<p class='note-lab'>QB · 150 / 150</p>"+
      "<table class='sd-table'><tr><th>Player</th><th>Sal</th><th>Proj</th><th>Own</th><th>Cap</th><th>Role</th></tr>"+
      rows([
        ["Baker Mayfield","$5,600","18.6","3.9%","40","TB. Stack Egbuka."],
        ["Tyler Shough","$5,300","17.8","4.6%","32","NO. Stack Olave + Johnson."],
        ["Jayden Daniels","$6,300","20.5","6.8%","20","WSH. Stack McLaurin."],
        ["Jordan Love","$5,900","18.8","6.2%","20","GB. Stack Watson."],
        ["Drake Maye","$6,100","18.3","4.1%","14","NE. Stack Doubs."],
        ["Dak Prescott","$6,400","21.3","10.9%","12","DAL. Stack Lamb."],
        ["Lamar Jackson","$7,300","21.6","5.3%","12","BAL. Flowers OUT."]
      ])+"</table>"+
      "<p class='note-lab'>RB</p>"+
      "<table class='sd-table'><tr><th>Player</th><th>Sal</th><th>Proj</th><th>Own</th><th>Cap</th><th>Role</th></tr>"+
      rows([
        ["Bijan Robinson","$8,200","23.0","31.9%","60","ATL."],
        ["Bucky Irving","$6,100","17.2","12.1%","45","TB."],
        ["Breece Hall","$6,200","17.0","8.0%","40","NYJ."],
        ["Saquon Barkley","$7,000","18.1","9.1%","30","PHI."],
        ["Bhayshul Tuten","$5,600","13.5","1.5%","20","JAX."],
        ["Javonte Williams","$6,400","19.0","23.8%","12","DAL. Dak copies only."]
      ])+"</table>"+
      "<p class='note-lab'>WR</p>"+
      "<table class='sd-table'><tr><th>Player</th><th>Sal</th><th>Proj</th><th>Own</th><th>Cap</th><th>Role</th></tr>"+
      rows([
        ["Emeka Egbuka","$6,400","14.6","5.0%","40","TB. Mayfield."],
        ["Christian Watson","$6,200","15.6","11.3%","20","GB. Love."],
        ["Chris Olave","$7,200","15.6","8.5%","35","NO. Shough."],
        ["Romeo Doubs","$5,000","11.2","2.7%","14","NE. Maye."],
        ["Terry McLaurin","$5,200","12.9","10.8%","20","WSH. Daniels."],
        ["CeeDee Lamb","$7,300","19.4","20.1%","12","DAL. Dak copies."],
        ["Ja'Marr Chase","$7,600","18.0","18.4%","8","CIN."],
        ["Justin Jefferson","$7,800","20.2","15.9%","8","MIN."]
      ])+"</table>"+
      "<p class='note-lab'>TE · 150 / 150</p>"+
      "<table class='sd-table'><tr><th>Player</th><th>Sal</th><th>Proj</th><th>Own</th><th>Cap</th><th>Role</th></tr>"+
      rows([
        ["Juwan Johnson","$3,900","11.5","6.5%","50","NO. Shough."],
        ["Dallas Goedert","$4,800","11.7","3.9%","45","PHI."],
        ["Trey McBride","$6,900","16.7","12.0%","40","ARI."],
        ["Hunter Henry","$4,000","9.0","4.5%","15","NE."]
      ])+"</table>"+
      "<p class='note-lab'>DST · 150 / 150</p>"+
      "<table class='sd-table'><tr><th>Player</th><th>Sal</th><th>Proj</th><th>Own</th><th>Cap</th><th>Role</th></tr>"+
      rows([
        ["Eagles","$3,700","8.3","7.4%","50","vs TEN."],
        ["Buccaneers","$3,600","8.5","11.9%","45","vs CLE."],
        ["Seahawks","$3,500","7.9","7.0%","35","4:25."],
        ["Punt DST","$3,300","—","—","20","Ravens. Not with Shough."]
      ])+"</table>";
  }
  if (rules){
    rules.innerHTML =
      "<p class='note'>Group + Manual. Caps live in PLAYER POOL. Trust DK salaries in the optimizer over this table.</p>"+
      "<p class='note-lab'>FORCE · IF AT LEAST 1 → THEN AT LEAST 1</p>"+
      "<table class='sd-table'><tr><th>If</th><th>Then</th></tr>"+
      "<tr><td>Mayfield</td><td>Egbuka</td></tr>"+
      "<tr><td>Shough</td><td>Olave + Johnson</td></tr>"+
      "<tr><td>Daniels</td><td>McLaurin</td></tr>"+
      "<tr><td>Love</td><td>Watson</td></tr>"+
      "<tr><td>Maye</td><td>Doubs</td></tr>"+
      "<tr><td>Dak</td><td>Lamb</td></tr>"+
      "</table>"+
      "<p class='note-lab'>NEVER · IF AT LEAST 1 → THEN NO MORE THAN 0</p>"+
      "<table class='sd-table'><tr><th>If</th><th>No more than 0</th></tr>"+
      "<tr><td>Shough</td><td>Ravens DST</td></tr>"+
      "<tr><td>Bijan</td><td>Chase + Jefferson</td></tr>"+
      "</table>";
  }
}
paintClassicDfs();
