function li(arr){ return arr.map(function(x){ return "<li>"+x+"</li>"; }).join(""); }
function capLabel(n){
  const x = Number(n);
  if (!isFinite(x)) return n;
  return x + " (" + Math.round(x / 150 * 100) + "%)";
}
function rows(list){
  return list.map(function(r){
    return "<tr><td>"+r[0]+"</td><td>"+r[1]+"</td><td>"+r[2]+"</td><td>"+capLabel(r[3])+"</td><td>"+r[4]+"</td></tr>";
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
        "Shared QB + WR1 + RB1 + DST counts as one build."
      ])+"</ul>";
  }
  if (pool){
    pool.innerHTML =
      "<p class='note'>1 p.m. main. 416.1k. 150 max. Proj / own from our sheet. Cap is count of 150 and percent.</p>"+
      "<p class='note-lab'>QB</p>"+
      "<table class='sd-table'><tr><th>Player</th><th>Proj</th><th>Own</th><th>Cap</th><th>Role</th></tr>"+
      rows([
        ["Baker Mayfield","18.6","3.9%","32","Cheap pocket A. CLE game can hit 30."],
        ["Tyler Shough","17.8","4.6%","28","Cheap pocket B. Behind at Baltimore."],
        ["Jayden Daniels","20.5","6.8%","18","Mid stack. Better unique than Dak."],
        ["Jordan Love","18.8","6.2%","18","Spike only. Bring Doubs, not Golden as the leave."],
        ["Dak Prescott","21.3","10.9%","12","SE copies. Not 40."],
        ["Malik Willis / Drew Lock","16.5 / 15.8","1.9 / 1.7","12","Thinner cheap. Steal from spike if needed."],
        ["Lamar / Hurts / Burrow","21.6 / 20.6 / 19.2","5.3 / 3.8 / 3.6","15","Chalk QB bag. Combined."],
        ["Bo Nix / Drake Maye","18.1 / 18.3","5.7 / 4.1","15","Second mid bag."]
      ])+"</table>"+
      "<p class='note-lab'>RB</p>"+
      "<table class='sd-table'><tr><th>Player</th><th>Proj</th><th>Own</th><th>Cap</th><th>Role</th></tr>"+
      rows([
        ["Bijan Robinson","23.0","31.9%","60","Sheet chalk. Necessary for some builds. Never 90."],
        ["Bucky Irving","17.2","12.1%","45","Mayfield game. Pair with Egbuka."],
        ["Breece Hall","17.0","8.0%","40","Right volume. Own is fair."],
        ["Saquon Barkley","18.1","9.1%","35","PHI-TEN. Not 90."],
        ["Derrick Henry","21.6","20.3%","30","Own is heavy. Only with Shough or no Lamar."],
        ["De'Von Achane","18.1","11.5%","25","Willis game."],
        ["Ashton Jeanty","16.7","11.9%","25","Secondary."],
        ["Bhayshul Tuten","13.5","1.5%","20","Leverage back. Coker-shaped own."],
        ["Javonte Williams","19.0","23.8%","15","SE only. Field already has him."],
        ["CMC","22.5","19.7%","15","Sit the 15 if he sits."],
        ["Aaron Jones","16.3","19.0%","10","Own > value. Thin."]
      ])+"</table>"+
      "<p class='note-lab'>WR</p>"+
      "<table class='sd-table'><tr><th>Player</th><th>Proj</th><th>Own</th><th>Cap</th><th>Role</th></tr>"+
      rows([
        ["Emeka Egbuka","14.6","5.0%","40","Coker 1. Mayfield pocket."],
        ["Romeo Doubs","11.2","2.7%","30","Coker 2. Golden is 11% own — field, not leverage."],
        ["Chris Olave","15.6","8.5%","35","Right chalk. Shough bring-back."],
        ["DeVonta Smith","15.8","7.3%","25","If Hurts is in the 15."],
        ["Jaylen Waddle","14.2","6.3%","25","Mims OUT."],
        ["Luther Burden III","13.3","5.2%","20","Leave. Not a CHI core."],
        ["Tee Higgins","13.2","6.1%","20","Not Chase."],
        ["Carnell Tate","11.6","1.8%","15","Thin Coker if Egbuka saturates."],
        ["Dontayvion Wicks","9.5","1.3%","12","Thinner Packers leave."],
        ["CeeDee Lamb","19.4","20.1%","15","SE stack only."],
        ["Ja'Marr Chase","18.0","18.4%","15","Dead chalk. Cap."],
        ["Justin Jefferson","20.2","15.9%","15","Dead chalk. Cap."],
        ["George Pickens","17.8","18.3%","12","Owned like Lamb."],
        ["Matthew Golden","10.7","11.4%","10","Love spike only. Not a Coker."]
      ])+"</table>"+
      "<p class='note-lab'>TE</p>"+
      "<table class='sd-table'><tr><th>Player</th><th>Proj</th><th>Own</th><th>Cap</th><th>Role</th></tr>"+
      rows([
        ["Trey McBride","16.7","12.0%","30","Fair own. Lock / Brissett game."],
        ["Juwan Johnson","11.5","6.5%","25","Shough stack."],
        ["Dallas Goedert","11.7","3.9%","20","Last week's winner TE. Low own again."],
        ["Hunter Henry","9.0","4.5%","15","Maye bag."],
        ["Mark Andrews","13.1","20.0%","8","Mayer trap. Fade."],
        ["Dalton Schultz","9.5","16.7%","0","Off the pool."]
      ])+"</table>"+
      "<p class='note-lab'>DST</p>"+
      "<table class='sd-table'><tr><th>Player</th><th>Proj</th><th>Own</th><th>Cap</th><th>Role</th></tr>"+
      rows([
        ["Buccaneers","8.5","11.9%","25","Mayfield game. Own is already up."],
        ["Eagles","8.3","7.4%","20","TEN game."],
        ["Seahawks","7.9","7.0%","15","Lock start. Do not 40-max."],
        ["49ers","7.5","9.0%","15","Willis game. Do not 40-max."],
        ["Ravens","7.5","9.0%","12","Only without Shough."]
      ])+"</table>"+
      "<p class='note-lab'>OFF THE POOL</p>"+
      "<ul class='notes'>"+li([
        "CHI stack off 59. Caleb can be in the 15 chalk bag. Odunze / Swift are not core.",
        "Nico Collins. OUT.",
        "Zay Flowers. OUT.",
        "Brock Bowers. OUT.",
        "A.J. Brown. 0 on the sheet.",
        "Schultz. Andrews as a core. Golden as leverage."
      ])+"</ul>"+
      "<p class='note'>Confirm T-90. If Egbuka or Doubs is inactive, Tate and Wicks take the Coker seats. Caps do not move up on Bijan or Chase to fill the hole.</p>";
  }
}
paintClassicDfs();
