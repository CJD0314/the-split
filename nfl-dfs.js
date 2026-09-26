function capLabel(n){
  return n + " (" + Math.round(n / 150 * 100) + "%)";
}
function poolTable(title, rows, sumNote){
  var h = "<p class='note-lab'>" + title + "</p>";
  if (sumNote) h += "<p class='note'>" + sumNote + "</p>";
  h += "<table class='sd-table'><tr><th>Player</th><th>Team</th><th>Sal</th><th>Cap</th><th>Note</th></tr>";
  rows.forEach(function(r){
    h += "<tr><td>" + r[0] + "</td><td>" + r[1] + "</td><td>$" + r[2].toLocaleString() + "</td><td>" + capLabel(r[3]) + "</td><td>" + (r[4] || "") + "</td></tr>";
  });
  return h + "</table>";
}
function paintClassicDfs(){
  var se = document.getElementById("dfs-se-box");
  var gpp = document.getElementById("dfs-gpp-box");
  var pool = document.getElementById("dfs-pool-box");
  var rules = document.getElementById("dfs-rules-box");
  var qb = [
    ["Josh Allen","BUF",8000,14,"Shakir, Kincaid, Cook"],
    ["Lamar Jackson","BAL",7500,14,"Henry, Andrews, Bateman"],
    ["Dak Prescott","DAL",6700,12,"Lamb, Pickens, Ferguson. 4:25"],
    ["Brock Purdy","SF",6500,14,"CMC, Kittle, Deebo. 4:05"],
    ["Jared Goff","DET",6300,14,"Gibbs, St. Brown, LaPorta"],
    ["Patrick Mahomes","KC",6200,14,"Walker, Rice, Kelce"],
    ["Joe Burrow","CIN",6600,10,"Chase, Higgins"],
    ["Bryce Young","CAR",5600,12,"Hubbard, McMillan"],
    ["Tyler Shough","NO",5400,10,"Olave, Johnson, Vele. 4:25"],
    ["Drew Lock","SEA",5200,10,"JSN. Darnold is not in"],
    ["Kirk Cousins","LV",4800,10,"Jeanty, Tucker. 4:25"],
    ["Deshaun Watson","CLE",4700,8,"Judkins, Boston"],
    ["Marcus Mariota","WAS",4500,8,"Diggs, McLaurin. Daniels is out"]
  ];
  var rb = [
    ["Jahmyr Gibbs","DET",8800,35,""],
    ["Christian McCaffrey","SF",8300,28,"4:05"],
    ["Derrick Henry","BAL",7700,30,""],
    ["Jonathan Taylor","IND",7600,30,""],
    ["Kenneth Walker III","KC",7400,28,"Sheet has him on KC"],
    ["Ashton Jeanty","LV",7100,25,"4:25"],
    ["James Cook III","BUF",6900,22,""],
    ["Omarion Hampton","LAC",6800,18,""],
    ["Javonte Williams","DAL",6700,22,"4:25"],
    ["Chase Brown","CIN",6600,18,""],
    ["De'Von Achane","MIA",6500,15,""],
    ["Breece Hall","NYJ",6400,22,""],
    ["Bucky Irving","TB",6300,20,"4:05"],
    ["Cam Skattebo","NYG",6200,12,"No Giants quarterback"],
    ["Chuba Hubbard","CAR",6100,20,""],
    ["David Montgomery","HOU",6000,16,"Sheet has him on HOU"],
    ["Aaron Jones Sr.","MIN",5900,14,"4:05"],
    ["Travis Etienne Jr.","NO",5800,14,"4:25"],
    ["Bhayshul Tuten","JAX",5600,12,""],
    ["Jeremiyah Love","ARI",5500,12,"4:05"],
    ["Quinshon Judkins","CLE",5500,12,""],
    ["TreVeyon Henderson","NE",5200,14,""]
  ];
  var wr = [
    ["Jaxon Smith-Njigba","SEA",8600,32,""],
    ["Ja'Marr Chase","CIN",8100,28,""],
    ["Amon-Ra St. Brown","DET",7900,32,""],
    ["CeeDee Lamb","DAL",7800,30,"4:25"],
    ["Justin Jefferson","MIN",7500,26,"4:05"],
    ["Chris Olave","NO",7200,28,"4:25"],
    ["George Pickens","DAL",6600,14,"4:25"],
    ["Rashee Rice","KC",6400,18,""],
    ["Garrett Wilson","NYJ",6300,20,""],
    ["Emeka Egbuka","TB",6200,18,"4:05"],
    ["Tee Higgins","CIN",6100,18,""],
    ["Parker Washington","JAX",6000,20,""],
    ["Tetairoa McMillan","CAR",6000,20,""],
    ["Ladd McConkey","LAC",5900,16,""],
    ["Josh Downs","IND",5700,16,"Collins is out"],
    ["Stefon Diggs","WAS",5500,18,""],
    ["Jameson Williams","DET",5400,12,""],
    ["DK Metcalf","PIT",5400,12,""],
    ["Chris Godwin Jr.","TB",5300,12,"4:05"],
    ["Deebo Samuel Sr.","SF",5300,16,"4:05"],
    ["Terry McLaurin","WAS",5100,8,""],
    ["Tre Tucker","LV",5000,16,"4:25"],
    ["Khalil Shakir","BUF",4800,12,""],
    ["Jakobi Meyers","JAX",4800,10,""],
    ["Rashod Bateman","BAL",4700,14,""],
    ["Denzel Boston","CLE",4500,16,""],
    ["Xavier Worthy","KC",4400,12,""],
    ["Devaughn Vele","NO",4400,14,"4:25"],
    ["Joshua Palmer","BUF",3500,10,""]
  ];
  var te = [
    ["Trey McBride","ARI",6700,18,"4:05"],
    ["Dalton Kincaid","BUF",5500,20,""],
    ["Tyler Warren","IND",5300,16,""],
    ["George Kittle","SF",4800,16,"4:05"],
    ["Isaiah Likely","NYG",4700,8,"Sheet has him on NYG"],
    ["Travis Kelce","KC",4500,18,""],
    ["Mark Andrews","BAL",4400,12,""],
    ["Sam LaPorta","DET",4300,16,""],
    ["Dalton Schultz","HOU",4200,14,"Collins is out"],
    ["Jake Ferguson","DAL",4100,12,"4:25"]
  ];
  var dst = [
    ["Vikings","MIN",3100,22,"4:05"],
    ["Panthers","CAR",3000,20,""],
    ["Bengals","CIN",2900,20,""],
    ["Patriots","NE",2700,18,""],
    ["Steelers","PIT",2700,16,""],
    ["Raiders","LV",2600,18,"4:25"],
    ["Seahawks","SEA",3800,16,""],
    ["Jaguars","JAX",2900,12,""],
    ["49ers","SF",3600,8,"4:05"]
  ];
  if (se){
    se.innerHTML = "<p class='note'>Not locked. The 150-max pool is up. The single entry is a different card and it is not built yet.</p><p>It will have one correlated lineup and at least one player from a 4:00 game. It will not be the GPP with the chalk removed.</p>";
  }
  if (gpp){
    gpp.innerHTML = "<p class='note'>150-max. 13-game Sunday sheet. No Thursday. No Monday. No Rams-Broncos.</p><p>Caps are maximums. Quarterback, tight end, and defense each add to 150. Every name below is in the flex. Nobody else.</p>";
  }
  if (pool){
    pool.innerHTML =
      "<p class='note'>Prices are the DraftKings file, checked name by name. Tuten is $5,600. McLaurin is $5,100. Walker is listed on Kansas City. Likely is listed on the Giants. Montgomery is listed on Houston.</p>"+
      "<p class='note'>Questionable and out are not in the flex. Flowers, Evans, Bowers, Moore, Warren, Coker, Pittman, Coleman, Spears, Legette, Mitchell, Miller.</p>"+
      poolTable("QUARTERBACK · 150 / 150", qb, "")+
      poolTable("RUNNING BACK", rb, "Caps are maximums. They do not add to 150. You start two.")+
      poolTable("WIDE RECEIVER", wr, "Caps are maximums. You start three, plus the flex.")+
      poolTable("TIGHT END · 150 / 150", te, "")+
      poolTable("DEFENSE · 150 / 150", dst, "Nine defenses. No one minimum-price punt.")+
      "<p class='note-lab'>LEFT OUT ON PURPOSE</p><ul>"+
      "<li>Nico Collins, Jayden Daniels, Jaxson Dart, Alec Pierce, Rico Dowdle. Out or IR on the sheet.</li>"+
      "<li>Sam Darnold. Drew Lock is the quarterback in the pool. If Darnold starts, Lock comes out and this page changes.</li>"+
      "<li>Kyler Murray and Carson Wentz. Murray has not played. Wentz is the swap only if he is the starter Sunday. Jefferson can be used without either.</li>"+
      "<li>Jameis Winston is $4,000 and averaging 3.5. Malik Nabers is $6,500 and averaging 7. That passing game is not in the pool. Skattebo is the only Giant.</li>"+
      "<li>Drake Maye is not in. Romeo Doubs is not in. That is the Week 2 trap.</li>"+
      "<li>Herbert, Lawrence, Stroud, Rodgers, Mayfield, Jones. No stack that was better than the ones above.</li>"+
      "</ul>";
  }
  if (rules){
    rules.innerHTML =
      "<p class='note'>Enter these. Nothing else. A rule is if the quarterback is in, bring one of his pieces. It does not force the piece to bring the quarterback.</p>"+
      "<ul>"+
      "<li>If Allen, at least 1 of Shakir, Kincaid, Cook.</li>"+
      "<li>If Lamar, at least 1 of Henry, Andrews, Bateman.</li>"+
      "<li>If Dak, at least 1 of Lamb, Pickens, Ferguson.</li>"+
      "<li>If Purdy, at least 1 of McCaffrey, Kittle, Deebo.</li>"+
      "<li>If Goff, at least 1 of Gibbs, St. Brown, LaPorta.</li>"+
      "<li>If Mahomes, at least 1 of Walker, Rice, Kelce.</li>"+
      "<li>If Burrow, at least 1 of Chase, Higgins.</li>"+
      "<li>If Young, at least 1 of Hubbard, McMillan.</li>"+
      "<li>If Shough, at least 1 of Olave, Juwan Johnson, Vele.</li>"+
      "<li>If Lock, at least 1 of Smith-Njigba.</li>"+
      "<li>If Cousins, at least 1 of Jeanty, Tucker.</li>"+
      "<li>If Watson, at least 1 of Judkins, Boston.</li>"+
      "<li>If Mariota, at least 1 of Diggs, McLaurin.</li>"+
      "</ul>"+
      "<p class='note'>Max exposure is the cap on the pool. Do not type it again as a rule. If the optimizer pushes one name to his cap and cannot find 150 unique lineups, stop and tell me. Do not raise the cap to finish.</p>";
  }
}
paintClassicDfs();
