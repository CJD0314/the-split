function paintClassicDfs(){
  var se=document.getElementById("dfs-se-box");
  var gpp=document.getElementById("dfs-gpp-box");
  var pool=document.getElementById("dfs-pool-box");
  var rules=document.getElementById("dfs-rules-box");
  if(se){se.innerHTML="<p class='note'>Not this pool. The single entry is one lineup. A min on this table is copies in the 150. It does not mean that player is in the one lineup.</p>";}
  if(gpp){gpp.innerHTML="<p class='note'>$5. 150 max. 95,100 entries. Sunday sheet. No Thursday, no Monday.</p><p>Surgical pass: JSN is 20 of 150. Hock 28. Two-TE 71. Every Purdy team has a 49ers pass catcher. Inactives still pending.</p>";}
  if(rules){rules.innerHTML="<p class='note'>Locks still apply. Flex is WR and TE only. No Gibbs + Walker. No Shough + Vele. Differ by 2. Leave at most $1,200.</p><p class='note-lab'>QUARTERBACKS IN THE POSTED 150</p><table class='sd-table pool'><thead><tr><th>Quarterback</th><th class='num'>Lineups</th><th class='num'>Percent</th></tr></thead><tbody><tr><td>Brock Purdy</td><td class='num'>25</td><td class='num'>17%</td></tr><tr><td>Josh Allen</td><td class='num'>20</td><td class='num'>13%</td></tr><tr><td>Joe Burrow</td><td class='num'>20</td><td class='num'>13%</td></tr><tr><td>Lamar Jackson</td><td class='num'>15</td><td class='num'>10%</td></tr><tr><td>Patrick Mahomes</td><td class='num'>15</td><td class='num'>10%</td></tr><tr><td>Dak Prescott</td><td class='num'>12</td><td class='num'>8%</td></tr><tr><td>Jared Goff</td><td class='num'>10</td><td class='num'>7%</td></tr><tr><td>Justin Herbert</td><td class='num'>10</td><td class='num'>7%</td></tr><tr><td>Drake Maye</td><td class='num'>8</td><td class='num'>5%</td></tr><tr><td>Kyler Murray</td><td class='num'>8</td><td class='num'>5%</td></tr><tr><td>Trevor Lawrence</td><td class='num'>3</td><td class='num'>2%</td></tr><tr><td>Jameis Winston</td><td class='num'>3</td><td class='num'>2%</td></tr><tr><td>Tyler Shough</td><td class='num'>1</td><td class='num'>1%</td></tr></tbody></table><p class='note'>25+20+20+15+15+12+10+10+8+8+3+3+1 = 150. Kirk Cousins is not in the file.</p><p class='note-lab'>TYPE THESE</p><ul><li>If Brock Purdy, Christian McCaffrey.</li><li>If Josh Allen, Dalton Kincaid.</li><li>If Joe Burrow, Ja'Marr Chase.</li><li>If Lamar Jackson, Mark Andrews.</li><li>If Patrick Mahomes, Travis Kelce.</li><li>If Dak Prescott, CeeDee Lamb.</li><li>If Jared Goff, Amon-Ra St. Brown.</li><li>If Kyler Murray, Justin Jefferson.</li><li>If Justin Herbert, Ladd McConkey.</li><li>If Drake Maye, Romeo Doubs.</li><li>If Trevor Lawrence, Parker Washington.</li><li>If Tyler Shough, Chris Olave.</li><li>If Jameis Winston, Malik Nabers.</li><li>Flex is WR and TE only. Running back is off.</li><li>No more than 1 of Jahmyr Gibbs, Kenneth Walker III.</li><li>No more than 1 of Tyler Shough, Devaughn Vele.</li><li>No more than 1 of Jadarian Price, Quinshon Judkins, Tony Pollard, Bhayshul Tuten.</li><li>No more than 2 of Devaughn Vele, Malik Washington, Denzel Boston, Xavier Worthy, Rashod Bateman.</li><li>Each lineup differs by at least 2 players.</li></ul>";}
  if(!pool) return;
  fetch("results/week-3-pool.json?v=3").then(function(r){return r.json();}).then(function(data){
    function cell(n){return n+"<span>"+Math.round(n/150*100)+"%</span>";}
    function money(s){return "$"+s.toLocaleString();}
    var cls={QB:"pq",RB:"pr",WR:"pw",TE:"pt",DST:"pd"};
    var h="<p class='note'>These are the actual counts in the posted 150 after the surgical pass. Min and max are the same number. Pos is the natural slot. Flex is only the FLEX slot. Proj is the 7 a.m. sheet.</p>";
    h+="<table class='sd-table pool'><thead><tr><th>Player</th><th>Tm</th><th class='num'>Sal</th><th class='num'>Proj</th><th class='num'>Min</th><th class='num'>Max</th><th class='num'>Pos</th><th class='num'>Flex</th></tr></thead><tbody>";
    data.forEach(function(g){
      h+="<tr class='pos pos-"+cls[g.pos]+"'><td colspan='8'>"+g.label+"</td></tr>";
      g.players.forEach(function(p){
        h+="<tr class='"+cls[g.pos]+"'><td>"+p.n+"</td><td class='tm'>"+p.tm+"</td><td class='num'>"+money(p.sal)+"</td><td class='num'>"+p.proj.toFixed(1)+"</td><td class='num'>"+cell(p.tot)+"</td><td class='num'>"+cell(p.tot)+"</td><td class='num'>"+cell(p.posn)+"</td><td class='num'>"+cell(p.flex)+"</td></tr>";
      });
    });
    h+="</tbody></table>";
    pool.innerHTML=h;
  }).catch(function(){pool.innerHTML="<p class='note'>Pool table failed to load. Hard refresh.</p>";});
}
paintClassicDfs();
