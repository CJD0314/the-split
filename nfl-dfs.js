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
      "<p class='note'>Week 1 tape stays here. This week's names live in PLAYER POOL. Field this week is 416.1k on the 1 p.m. main. Not last week's 831k. Not SNF.</p>"+
      "<ul class='notes'>"+li([
        "No QB over 40 of 150 (27%). No RB over 90 (60%). Bijan cap is 60 (40%) after the sheet.",
        "SE stack cap 15 (10%).",
        "Two lineups that share QB + stack WR + RB1 + DST count as one build. Change two of those four or it does not count toward 150."
      ])+"</ul>";
  }
  if (pool){
    pool.innerHTML =
      "<p class='note'>Tight pool. 416.1k. 150 max. QB + TE + DST caps each sum to 150. 150 unique means 150 lineups that do not share QB + stack WR + RB1 + DST.</p>"+
      "<p class='note-lab'>150 UNIQUE</p>"+
      "<ul class='notes'>"+li([
        "Mayfield 40: Egbuka + Irving. Vary the second back (Hall / Tuten / Saquon / Bijan), the second WR (Doubs / Waddle), TE, and DST. Bucs DST cannot be in all 40.",
        "Shough 32: Olave + Johnson. Second back is Tuten or Hall, not Henry unless Lamar is out of that lineup. No Ravens DST.",
        "Daniels 20: McLaurin is the stack WR. Without him this cap cannot be filled. Bring one Dallas piece max.",
        "Love 20: Doubs is the stack WR. Second WR is Waddle or Egbuka, not Golden.",
        "Dak 12: Lamb + Javonte. That is the SE stack. Do not build a 13th.",
        "Willis 14: Waddle. Second back Tuten or Hall.",
        "Lamar 12: no Andrews. Second back is not Henry if Shough is also in the 150 that way — pick one Baltimore skill bag per lineup.",
        "Bijan at $8,200 does not fit with Chase and Jefferson in the same lineup. If Bijan is in, one dead-chalk WR max."
      ])+"</ul>"+
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
        ["Terry McLaurin","$5,400","12.9","10.8%","20","Daniels stack. Required to fill the 20."],
        ["CeeDee Lamb","$7,300","19.4","20.1%","12","Dak copies. Same cap as Dak."],
        ["Ja'Marr Chase","$7,600","18.0","18.4%","8","Dead chalk tax."],
        ["Justin Jefferson","$7,800","20.2","15.9%","8","Dead chalk tax."]
      ])+"</table>"+
      "<p class='note-lab'>TE · 150 / 150</p>"+
      "<table class='sd-table'><tr><th>Player</th><th>Sal</th><th>Proj</th><th>Own</th><th>Cap</th><th>Role</th></tr>"+
      rows([
        ["Juwan Johnson","$3,900","11.5","6.5%","50","Shough stack. Also salary relief."],
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
      ])+"</table>"+
      "<p class='note-lab'>ONLY IF A CORE SITS</p>"+
      "<ul class='notes'>"+li([
        "Egbuka out: Tate takes the 40. Do not move it to Chase.",
        "Doubs out: Wicks takes the 30. Do not move it to Golden.",
        "McLaurin out: cut Daniels to 0. Do not keep 20 unstacked Daniels.",
        "Willis sits: Lock. Same 14. Not both."
      ])+"</ul>"+
      "<p class='note-lab'>OFF THE 150</p>"+
      "<ul class='notes'>"+li([
        "CHI. Odunze. Swift. Caleb.",
        "Nico Collins. Zay Flowers. Brock Bowers. A.J. Brown.",
        "Andrews. Schultz. Golden as leverage. Pickens as a GPP core. CMC unless confirmed and you burn SE copies."
      ])+"</ul>"+
      "<p class='note'>T-90. Caps do not climb on Bijan or Chase to fill a hole.</p>";
  }
}
paintClassicDfs();
