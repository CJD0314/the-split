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
      "<p class='note'>These are the rules. They are not entered until the pool has prices.</p>"+
      "<ul>"+
      "<li>QB caps, tight end caps, and defense caps each add to 150. That is 100%.</li>"+
      "<li>Every name in the pool is available in the flex. Nobody else.</li>"+
      "<li>A rule is a stack or a bring-back. If the quarterback is out, his receiver is already gone. That is not a rule.</li>"+
      "<li>150 unique lineups have to exist before the pool is locked.</li>"+
      "<li>The single entry and the 150-max do not share one set of caps.</li>"+
      "<li>One cheap defense is not a plan.</li>"+
      "</ul>"+
      "<p class='note'>Send the main-slate sheet. Salary, projection, ownership. Then the pool and the optimizer lines get written.</p>";
  }
}
paintClassicDfs();
