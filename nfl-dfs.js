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
      "<p class='note'>1 p.m. main. 416.1k. 150 max. Salary is live DK. Proj / own from our sheet. Optimizer rules sit in RULES.</p>"+
      "<p class='note-lab'>QB · 150 / 150</p>"+
      "<table class='sd-table'><tr><th>Player</th><th>Sal</th><th>Proj</th><th>Own</th><th>Cap</th><th>Role</th></tr>"+
      rows([
        ["Baker Mayfield","$5,600","18.6","3.9%","40","Pocket A. Stack Egbuka."],
        ["Tyler Shough","$5,300","17.8","4.6%","32","Pocket B. Stack Olave + Johnson."],
        ["Jayden Daniels","$6,300","20.5","6.8%","20","Stack McLaurin."],
        ["Jordan Love","$5,900","18.8","6.2%","20","Spike. Stack Doubs."],
        ["Dak Prescott","$6,400","21.3","10.9%","12","SE stack with Lamb."],
        ["Malik Willis","$5,200","16.5","1.9%","14","Stack Waddle."],
        ["Lamar Jackson","$7,300","21.6","5.3%","12","One chalk QB. No Andrews."]
      ])+"</table>"+
      "<p class='note-lab'>RB</p>"+
      "<table class='sd-table'><tr><th>Player</th><th>Sal</th><th>Proj</th><th>Own</th><th>Cap</th><th>Role</th></tr>"+
      rows([
        ["Bijan Robinson","$8,200","23.0","31.9%","60","Necessary chalk. Never 90."],
        ["Bucky Irving","$6,100","17.2","12.1%","45","Mayfield stack."],
        ["Breece Hall","$6,200","17.0","8.0%","40","Second back."],
        ["Saquon Barkley","$7,000","18.1","9.1%","30","PHI-TEN."],
        ["Bhayshul Tuten","$4,400","13.5","1.5%","20","Leverage back / salary relief."],
        ["Javonte Williams","$6,400","19.0","23.8%","12","Dak copies only."]
      ])+"</table>"+
      "<p class='note-lab'>WR</p>"+
      "<table class='sd-table'><tr><th>Player</th><th>Sal</th><th>Proj</th><th>Own</th><th>Cap</th><th>Role</th></tr>"+
      rows([
        ["Emeka Egbuka","$6,400","14.6","5.0%","40","Coker 1. Mayfield stack."],
        ["Romeo Doubs","$5,000","11.2","2.7%","30","Coker 2. Love stack."],
        ["Chris Olave","$7,200","15.6","8.5%","35","Shough stack."],
        ["Jaylen Waddle","$6,500","14.2","6.3%","20","Willis stack. Mims OUT."],
        ["Terry McLaurin","$5,400","12.9","10.8%","20","Daniels stack."],
        ["CeeDee Lamb","$7,300","19.4","20.1%","12","Dak copies. Same cap as Dak."],
        ["Ja'Marr Chase","$7,600","18.0","18.4%","8","Dead chalk tax."],
        ["Justin Jefferson","$7,800","20.2","15.9%","8","Dead chalk tax."]
      ])+"</table>"+
      "<p class='note-lab'>TE · 150 / 150</p>"+
      "<table class='sd-table'><tr><th>Player</th><th>Sal</th><th>Proj</th><th>Own</th><th>Cap</th><th>Role</th></tr>"+
      rows([
        ["Juwan Johnson","$3,900","11.5","6.5%","50","Shough stack. Salary relief."],
        ["Dallas Goedert","$4,800","11.7","3.9%","45","Low own."],
        ["Trey McBride","$6,900","16.7","12.0%","40","Fair own."],
        ["Punt TE","$4,000","—","—","15","Hunter Henry. Not Andrews. Not Schultz."]
      ])+"</table>"+
      "<p class='note-lab'>DST · 150 / 150</p>"+
      "<table class='sd-table'><tr><th>Player</th><th>Sal</th><th>Proj</th><th>Own</th><th>Cap</th><th>Role</th></tr>"+
      rows([
        ["Eagles","$3,700","8.3","7.4%","50","TEN game."],
        ["Buccaneers","$3,600","8.5","11.9%","45","Mayfield game. Not all 40 Mayfield lineups."],
        ["Seahawks","$3,500","7.9","7.0%","35","Lock start."],
        ["Punt DST","$3,300","—","—","20","Ravens only without Shough."]
      ])+"</table>";
  }
  if (rules){
    rules.innerHTML =
      "<p class='note'>Plug these into the optimizer. Max % is of 150. Force-if and never-together first. Then exposures.</p>"+
      "<p class='note-lab'>FORCE IF QB IS IN</p>"+
      "<ul class='notes'>"+li([
        "If Mayfield → Egbuka.",
        "If Shough → Olave and Johnson.",
        "If Daniels → McLaurin. If McLaurin sits, Daniels exposure to 0.",
        "If Love → Doubs.",
        "If Dak → Lamb.",
        "If Willis → Waddle."
      ])+"</ul>"+
      "<p class='note-lab'>NEVER TOGETHER</p>"+
      "<ul class='notes'>"+li([
        "Lamar + Andrews.",
        "Lamar + Henry.",
        "Shough + Ravens DST.",
        "Shough + Henry + Lamar.",
        "Dak + Daniels.",
        "Willis + Lock.",
        "Bijan + Chase + Jefferson. If Bijan is on, one of Chase / Jefferson max.",
        "Andrews anywhere. Schultz anywhere.",
        "Golden as the Love stack if Doubs is in."
      ])+"</ul>"+
      "<p class='note-lab'>MAX EXPOSURE</p>"+
      "<ul class='notes'>"+li([
        "Mayfield 27. Shough 21. Daniels 13. Love 13. Dak 8. Willis 9. Lamar 8.",
        "Bijan 40. Irving 30. Hall 27. Saquon 20. Tuten 13. Javonte 8.",
        "Egbuka 27. Doubs 20. Olave 23. Waddle 13. McLaurin 13. Lamb 8. Chase 5. Jefferson 5.",
        "Johnson 33. Goedert 30. McBride 27. Hunter Henry 10.",
        "Eagles 33. Bucs 30. Seahawks 23. Ravens 13."
      ])+"</ul>"+
      "<p class='note-lab'>150 UNIQUE</p>"+
      "<ul class='notes'>"+li([
        "Two lineups that share QB + stack WR + RB1 + DST count as one. Change two of those four.",
        "Mayfield 40: vary second back, second WR, TE, DST. Bucs DST cannot ride all 40.",
        "Shough 32: second back Tuten or Hall. No Ravens.",
        "Dak 12 is the SE stack with Lamb + Javonte. Do not build a 13th."
      ])+"</ul>"+
      "<p class='note-lab'>SIT SWAPS</p>"+
      "<ul class='notes'>"+li([
        "Egbuka out → Tate. Cap stays 27. Do not move it to Chase.",
        "Doubs out → Wicks. Cap stays 20. Do not move it to Golden.",
        "McLaurin out → Daniels to 0.",
        "Willis out → Lock. Same 9. Not both."
      ])+"</ul>"+
      "<p class='note-lab'>EXCLUDE</p>"+
      "<ul class='notes'>"+li([
        "CHI. Caleb. Odunze. Swift.",
        "Nico Collins. Zay Flowers. Brock Bowers. A.J. Brown.",
        "Andrews. Schultz. Golden as leverage. Pickens as a GPP core. CMC unless confirmed and you burn the SE bag."
      ])+"</ul>";
  }
}
paintClassicDfs();
