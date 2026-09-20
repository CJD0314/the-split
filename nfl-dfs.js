function li(arr){ return arr.map(function(x){ return "<li>"+x+"</li>"; }).join(""); }
function paintClassicDfs(){
  const se = document.getElementById("dfs-se-box");
  const gpp = document.getElementById("dfs-gpp-box");
  if (se){
    se.innerHTML =
      "<p class='note'>Handle CE409. One lineup. Script first. GPP is not allowed to copy this ticket 40 times.</p>"+
      "<p class='note-lab'>WEEK 2 SINGLE ENTRY</p>"+
      "<ul class='notes'>"+li([
        "Stack WSH at DAL. 50.5. Dak + Lamb or Daniels + McLaurin. One bring-back, not both QBs.",
        "If Burrow is active, Chase can be the WR. Collins is OUT. Do not add a Texans WR1 who is not playing.",
        "No CHI. No Walker 173. No CMC if he is a game-time sit — sit the ticket.",
        "DST from the dog in a game we think stays close. Not the 49ers."
      ])+"</ul>"+
      "<p class='note'>Lock after T-90. If a named piece sits, rebuild the only lineup.</p>";
  }
  if (gpp){
    gpp.innerHTML =
      "<p class='note'>Caps are live. Pool is named before the lean list. Field last week 831,028. We use 150.</p>"+
      "<p class='note-lab'>HARD CAPS</p>"+
      "<ul class='notes'>"+li([
        "No QB in more than 40 of 150.",
        "No RB in more than 90 of 150.",
        "If two lineups share QB + WR1 + RB1 + DST, they count as one build.",
        "The single-entry stack cannot appear in more than 15 of the 150."
      ])+"</ul>"+
      "<p class='note-lab'>CHEAP QB POCKETS — 35 EACH</p>"+
      "<ul class='notes'>"+li([
        "A: Baker Mayfield $5,600 vs CLE. Game can hit 30. Bring Egbuka, not Godwin as the only WR.",
        "B: Tyler Shough $5,300 at BAL. Cheap QB throwing from behind. Cap him at 35. Do not 80-copy last week's cashing QB."
      ])+"</ul>"+
      "<p class='note-lab'>THIS WEEK'S COKERS — 40 TO 70 COMBINED</p>"+
      "<ul class='notes'>"+li([
        "Matthew Golden. Not the Packers WR1 the field already has. Second WR in a game that can go 30. Why is salary and role, not GB +3.5.",
        "Emeka Egbuka. Not Evans. Mayfield pocket. Same rule as Coker: mid/low own, not the WR the field slams."
      ])+"</ul>"+
      "<p class='note-lab'>REST OF THE 150</p>"+
      "<ul class='notes'>"+li([
        "Mid-price live stack 25: Dak or Daniels. That is the SE game. It does not get to 40.",
        "Chalk QB 15: Lamar or Hurts. Fifteen. Not the old Burrow pile.",
        "Spike 20: Love + Golden bring-back. Last week's 1.7% winner is allowed here. Not in the other 130.",
        "Late SNF 20: Jones or Mahomes. No Walker 173 in all 20.",
        "Dead-chalk WR cap 15: Chase and Jefferson live here, not in 80.",
        "Right-chalk WR 50 to 80: Lamb or Hall/Saquon if used as FLEX volume — pick one, write why.",
        "No CHI pieces. No 150-max CMC. Sit CMC tickets if he sits."
      ])+"</ul>"+
      "<p class='note-lab'>WHY THIS IS NOT THE LEAN LIST</p>"+
      "<ul class='notes'>"+li([
        "Mayfield and Shough are not our Sunday plus-money leans. That is the point.",
        "Golden and Egbuka are not side stamps. They are second WRs in games that can break.",
        "WSH-DAL stays the single-entry script. GPP only gets 15 copies of it."
      ])+"</ul>";
  }
}
paintClassicDfs();
