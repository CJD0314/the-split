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
    se.innerHTML =
      "<p class='note'>$100 single entry · 1,111. SETTLED. 632nd · 111.82. Winner 147.98.</p>"+
      "<p class='note-lab'>TNF SETTLED · ATL 35-14</p>"+
      "<p>CPT Christian Watson $14,700 · 33.90</p>"+
      "<p>Jordan Love $10,000 · 22.48</p>"+
      "<p>Michael Penix Jr. $9,000 · 15.04</p>"+
      "<p>Bijan Robinson $11,800 · 38.30</p>"+
      "<p>Jahan Dotson $3,000 · 2.10</p>"+
      "<p>Bo Melton $1,200 · 0.00</p>"+
      "<p class='note'>111.82. Winner was CPT London · Bijan · Love · Golden · Folk · Moore.</p>"+
      "<p class='note'><a href='nfl-week-3-atl-gb-review.html'>REVIEW</a> · <a href='nfl-week-3-atl-gb.html?v=8'>FULL BREAKDOWN</a></p>";
  }
  if (gpp){
    gpp.innerHTML =
      "<p class='note'>GPP six was not the 1,111 card and is closed with it.</p>"+
      "<p class='note'>Week 2 main-slate 150-max is closed. Pool below is the archive.</p>";
  }
  if (pool){
    pool.innerHTML =
      "<p class='note'>Week 2 archive. 150 unique cores. Not tonight.</p>"+
      "<p class='note-lab'>QB · 150 / 150</p>"+
      "<table class='sd-table'><tr><th>Player</th><th>Sal</th><th>Cap</th><th>Role</th></tr>"+
      "<tr><td>Baker Mayfield</td><td>$5,600</td><td>"+capLabel(28)+"</td><td>TB. Egbuka.</td></tr>"+
      "<tr><td>Tyler Shough</td><td>$5,300</td><td>"+capLabel(24)+"</td><td>NO. Olave + Johnson.</td></tr>"+
      "<tr><td>Jayden Daniels</td><td>$6,300</td><td>"+capLabel(20)+"</td><td>WSH. McLaurin.</td></tr>"+
      "<tr><td>Jordan Love</td><td>$5,900</td><td>"+capLabel(20)+"</td><td>GB. Watson.</td></tr>"+
      "<tr><td>Drake Maye</td><td>$6,100</td><td>"+capLabel(18)+"</td><td>NE. Doubs.</td></tr>"+
      "<tr><td>Dak Prescott</td><td>$6,400</td><td>"+capLabel(20)+"</td><td>DAL. Lamb.</td></tr>"+
      "<tr><td>Lamar Jackson</td><td>$7,300</td><td>"+capLabel(20)+"</td><td>BAL. No stack WR.</td></tr>"+
      "</table>";
  }
  if (rules){
    rules.innerHTML =
      "<p class='note'>Week 2 archive. Tonight is showdown, not classic rules.</p>";
  }
}
paintClassicDfs();
