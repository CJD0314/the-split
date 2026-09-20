function capLabel(n){
  const x = Number(n);
  if (!isFinite(x)) return n;
  return x + " (" + Math.round(x / 150 * 100) + "%)";
}
function paintClassicDfs(){
  const se = document.getElementById("dfs-se-box");
  const gpp = document.getElementById("dfs-gpp-box");
  const pool = document.getElementById("dfs-pool-box");
  const rules = document.getElementById("dfs-rules-box");
  if (se){
    se.innerHTML = "<p class='note'>CE409. One lineup. GPP copies this ticket 12 times max.</p>";
  }
  if (gpp){
    gpp.innerHTML = "<p class='note'>416.1k field. Unique = QB + stack WR + RB1 + DST. Caps are max exposure in the builder.</p>";
  }
  if (pool){
    pool.innerHTML =
      "<p class='note'>150 unique cores. Stack WR locked to QB. FLEX WR is how the third receiver exists.</p>"+
      "<p class='note-lab'>QB · 150 / 150</p>"+
      "<table class='sd-table'><tr><th>Player</th><th>Sal</th><th>Cap</th><th>Role</th></tr>"+
      "<tr><td>Baker Mayfield</td><td>$5,600</td><td>"+capLabel(28)+"</td><td>TB. Egbuka.</td></tr>"+
      "<tr><td>Tyler Shough</td><td>$5,300</td><td>"+capLabel(24)+"</td><td>NO. Olave + Johnson.</td></tr>"+
      "<tr><td>Jayden Daniels</td><td>$6,300</td><td>"+capLabel(20)+"</td><td>WSH. McLaurin.</td></tr>"+
      "<tr><td>Jordan Love</td><td>$5,900</td><td>"+capLabel(20)+"</td><td>GB. Watson.</td></tr>"+
      "<tr><td>Drake Maye</td><td>$6,100</td><td>"+capLabel(18)+"</td><td>NE. Doubs.</td></tr>"+
      "<tr><td>Dak Prescott</td><td>$6,400</td><td>"+capLabel(20)+"</td><td>DAL. Lamb.</td></tr>"+
      "<tr><td>Lamar Jackson</td><td>$7,300</td><td>"+capLabel(20)+"</td><td>BAL. No stack WR.</td></tr>"+
      "</table>"+
      "<p class='note-lab'>RB</p>"+
      "<table class='sd-table'><tr><th>Player</th><th>Sal</th><th>Cap</th><th>Role</th></tr>"+
      "<tr><td>Bijan Robinson</td><td>$8,200</td><td>"+capLabel(55)+"</td><td>ATL.</td></tr>"+
      "<tr><td>Bucky Irving</td><td>$6,100</td><td>"+capLabel(40)+"</td><td>TB.</td></tr>"+
      "<tr><td>Breece Hall</td><td>$6,200</td><td>"+capLabel(35)+"</td><td>NYJ.</td></tr>"+
      "<tr><td>Saquon Barkley</td><td>$7,000</td><td>"+capLabel(28)+"</td><td>PHI.</td></tr>"+
      "<tr><td>Rhamondre Stevenson</td><td>$5,700</td><td>"+capLabel(22)+"</td><td>NE. Second back.</td></tr>"+
      "<tr><td>Aaron Jones Sr.</td><td>$5,100</td><td>"+capLabel(22)+"</td><td>MIN. Cheap RB1.</td></tr>"+
      "<tr><td>Bhayshul Tuten</td><td>$5,600</td><td>"+capLabel(18)+"</td><td>JAX.</td></tr>"+
      "<tr><td>Javonte Williams</td><td>$6,400</td><td>"+capLabel(20)+"</td><td>DAL. Dak only.</td></tr>"+
      "</table>"+
      "<p class='note-lab'>WR · STACK</p>"+
      "<table class='sd-table'><tr><th>Player</th><th>Sal</th><th>Cap</th><th>Role</th></tr>"+
      "<tr><td>Emeka Egbuka</td><td>$6,400</td><td>"+capLabel(28)+"</td><td>Mayfield only.</td></tr>"+
      "<tr><td>Chris Olave</td><td>$7,200</td><td>"+capLabel(24)+"</td><td>Shough only.</td></tr>"+
      "<tr><td>Terry McLaurin</td><td>$5,200</td><td>"+capLabel(20)+"</td><td>Daniels only.</td></tr>"+
      "<tr><td>Christian Watson</td><td>$6,200</td><td>"+capLabel(20)+"</td><td>Love only.</td></tr>"+
      "<tr><td>Romeo Doubs</td><td>$5,000</td><td>"+capLabel(18)+"</td><td>Maye only.</td></tr>"+
      "<tr><td>CeeDee Lamb</td><td>$7,300</td><td>"+capLabel(20)+"</td><td>Dak only.</td></tr>"+
      "</table>"+
      "<p class='note-lab'>WR · FLEX</p>"+
      "<table class='sd-table'><tr><th>Player</th><th>Sal</th><th>Cap</th><th>Role</th></tr>"+
      "<tr><td>Matthew Golden</td><td>$4,700</td><td>"+capLabel(28)+"</td><td>GB. Third WR.</td></tr>"+
      "<tr><td>Jalen Coker</td><td>$5,100</td><td>"+capLabel(22)+"</td><td>CAR.</td></tr>"+
      "<tr><td>Garrett Wilson</td><td>$6,000</td><td>"+capLabel(22)+"</td><td>NYJ.</td></tr>"+
      "<tr><td>George Pickens</td><td>$6,300</td><td>"+capLabel(18)+"</td><td>DAL. Not forced.</td></tr>"+
      "<tr><td>Ja'Marr Chase</td><td>$7,600</td><td>"+capLabel(8)+"</td><td>CIN.</td></tr>"+
      "<tr><td>Justin Jefferson</td><td>$7,800</td><td>"+capLabel(8)+"</td><td>MIN.</td></tr>"+
      "</table>"+
      "<p class='note-lab'>TE · 150 / 150</p>"+
      "<table class='sd-table'><tr><th>Player</th><th>Sal</th><th>Cap</th><th>Role</th></tr>"+
      "<tr><td>Juwan Johnson</td><td>$3,900</td><td>"+capLabel(50)+"</td><td>Force with Shough.</td></tr>"+
      "<tr><td>Dallas Goedert</td><td>$4,800</td><td>"+capLabel(45)+"</td><td>PHI.</td></tr>"+
      "<tr><td>Trey McBride</td><td>$6,900</td><td>"+capLabel(40)+"</td><td>ARI.</td></tr>"+
      "<tr><td>Hunter Henry</td><td>$4,000</td><td>"+capLabel(15)+"</td><td>NE.</td></tr>"+
      "</table>"+
      "<p class='note-lab'>DST · 150 / 150</p>"+
      "<table class='sd-table'><tr><th>Player</th><th>Sal</th><th>Cap</th><th>Role</th></tr>"+
      "<tr><td>Eagles</td><td>$3,700</td><td>"+capLabel(40)+"</td><td>vs TEN.</td></tr>"+
      "<tr><td>Buccaneers</td><td>$3,600</td><td>"+capLabel(35)+"</td><td>vs CLE.</td></tr>"+
      "<tr><td>Seahawks</td><td>$3,500</td><td>"+capLabel(30)+"</td><td>4:25.</td></tr>"+
      "<tr><td>Patriots</td><td>$3,100</td><td>"+capLabel(25)+"</td><td>vs PIT. Cheap.</td></tr>"+
      "<tr><td>Ravens</td><td>$3,300</td><td>"+capLabel(20)+"</td><td>Punt. Not with Shough.</td></tr>"+
      "</table>";
  }
  if (rules){
    rules.innerHTML =
      "<p class='note'>Type every Cap into Max Exposure. Unique core = QB + stack WR + RB1 + DST.</p>"+
      "<p class='note-lab'>FORCE</p>"+
      "<table class='sd-table'><tr><th>If</th><th>Then</th></tr>"+
      "<tr><td>Mayfield</td><td>Egbuka</td></tr>"+
      "<tr><td>Egbuka</td><td>Mayfield</td></tr>"+
      "<tr><td>Shough</td><td>Olave + Johnson</td></tr>"+
      "<tr><td>Olave</td><td>Shough</td></tr>"+
      "<tr><td>Daniels</td><td>McLaurin</td></tr>"+
      "<tr><td>McLaurin</td><td>Daniels</td></tr>"+
      "<tr><td>Love</td><td>Watson</td></tr>"+
      "<tr><td>Watson</td><td>Love</td></tr>"+
      "<tr><td>Maye</td><td>Doubs</td></tr>"+
      "<tr><td>Doubs</td><td>Maye</td></tr>"+
      "<tr><td>Dak</td><td>Lamb</td></tr>"+
      "<tr><td>Lamb</td><td>Dak</td></tr>"+
      "<tr><td>Javonte</td><td>Dak</td></tr>"+
      "</table>"+
      "<p class='note-lab'>NEVER</p>"+
      "<table class='sd-table'><tr><th>If</th><th>No more than 0</th></tr>"+
      "<tr><td>Shough</td><td>Ravens DST</td></tr>"+
      "<tr><td>Bijan</td><td>Chase + Jefferson</td></tr>"+
      "</table>"+
      "<p class='note'>No force on Golden, Coker, Wilson, Pickens, Stevenson, Jones, Patriots DST.</p>";
  }
}
paintClassicDfs();
