function paintClassicDfs(){
  const se = document.getElementById("dfs-se-box");
  const gpp = document.getElementById("dfs-gpp-box");
  const pool = document.getElementById("dfs-pool-box");
  const rules = document.getElementById("dfs-rules-box");
  if (se){
    se.innerHTML =
      "<p class='note'>Sunday main. Not the showdown. Not built.</p>"+
      "<p>Thursday is closed. 632nd of 1,111. That lineup does not come with us.</p>"+
      "<p class='note'>The single entry waits on the sheet. No salary, no lineup.</p>";
  }
  if (gpp){
    gpp.innerHTML =
      "<p class='note'>150-max. Sunday main. Field size is not confirmed.</p>"+
      "<p>This is not the single-entry build. The pool and the caps get written after the sheet, and they have to produce 150 unique lineups before anything is locked.</p>";
  }
  if (pool){
    pool.innerHTML =
      "<p class='note'>No prices. A salary typed from memory is how the Week 2 pool broke. The sheet is the price.</p>"+
      "<p class='note-lab'>SLATE</p>"+
      "<ul>"+
      "<li>All Sunday games. Rams at Broncos is on the main slate unless the contest says otherwise.</li>"+
      "<li>Thursday is out. Falcons and Packers are not in the pool.</li>"+
      "<li>Monday is out. Eagles and Bears are not in the pool.</li>"+
      "</ul>"+
      "<p class='note-lab'>DO NOT ROSTER</p>"+
      "<table class='sd-table'><tr><th>Player</th><th>Team</th><th>Why</th></tr>"+
      "<tr><td>Jayden Daniels</td><td>WSH</td><td>Out. Elbow. Mariota if we use them.</td></tr>"+
      "<tr><td>Jaxson Dart</td><td>NYG</td><td>Out for the year. Winston.</td></tr>"+
      "<tr><td>Nico Collins</td><td>HOU</td><td>Out. Hamstring.</td></tr>"+
      "<tr><td>Rico Dowdle</td><td>PIT</td><td>Out. Toe.</td></tr>"+
      "<tr><td>Josh Simmons</td><td>KC</td><td>Out. Back.</td></tr>"+
      "<tr><td>Alec Pierce</td><td>IND</td><td>Out. Heel.</td></tr>"+
      "<tr><td>Ashton Dulin</td><td>IND</td><td>Out. Ankle.</td></tr>"+
      "<tr><td>Jonah Coleman</td><td>DEN</td><td>Out. Ankle.</td></tr>"+
      "<tr><td>Puka Nacua</td><td>LAR</td><td>Doubtful. Not in until he is active.</td></tr>"+
      "</table>"+
      "<p class='note-lab'>HOLD UNTIL SUNDAY MORNING</p>"+
      "<p class='note'>Questionable is not a pool spot. Warren, Pittman, Flowers, Bowers, Coleman, Moore, Coker, Legette, Evans, Mims. Murray is cleared and Wentz is the backup. Darnold is not on the out list and the preview named Lock. If either starter flips, the pool flips.</p>";
  }
  if (rules){
    rules.innerHTML =
      "<p class='note'>Order is the rule. The optimizer is last.</p>"+
      "<ul>"+
      "<li>Sheet first. Freeze the salary. If a price looks wrong, stop. No rule gets written on a bad price.</li>"+
      "<li>Sunday main only. Thursday and Monday are already gone. Outs are gone. Questionable stays off the flex until Sunday morning.</li>"+
      "<li>Caps live on the pool only. Quarterback, tight end, and defense each add to 150. If the list cannot hit the cap, the list is wrong. Do not hope.</li>"+
      "<li>A rule names a team and a stack. If Love, then Doubs was a bad rule because Doubs was a Patriot. If the quarterback is out, his receiver is already gone. That is not a rule.</li>"+
      "<li>Build 150 unique lineups before anyone is locked. If one player is forced near 85%, the pool is too thin. Add a real piece. Do not raise his cap to hide it.</li>"+
      "<li>Single entry is a different card. One lineup, correlation, and at least one player from a 4:00 game. It is not the 150-max with the chalk removed.</li>"+
      "<li>One cheap defense is not a plan.</li>"+
      "<li>Stop Saturday night. Sunday morning is inactives and a written swap, not a new pool.</li>"+
      "</ul>"+
      "<p class='note'>Send the main-slate sheet. Salary, projection, ownership. Prices get checked before a name is added.</p>";
  }
}
paintClassicDfs();
