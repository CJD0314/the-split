window.NFL_DFS_NOTES = [
  "Short week: do not captain the home favorite. Use the road skill stack or leave the game.",
  "Low total (under 45): RB / TE cash. Do not pay up at WR1 unless the matchup note says otherwise.",
  "High total (50-plus): QB + WR1 is the default stack. Second receiver only if the board already likes both.",
  "Backup safeties are not a license to smash the opposing QB. Need snaps and who actually covers, not a name on the injury report.",
  "Road dog that already cashed a short week: those skill pieces stay in the identity book the next time that club is a dog."
];
window.NFL_IDENTITIES = {
  ari: {name:"Arizona Cardinals", note:"Week 1 at LAC still live. Identity fills after the first reviewed game."},
  atl: {name:"Atlanta Falcons", note:"Week 1 at PIT still live. Identity fills after the first reviewed game."},
  bal: {name:"Baltimore Ravens", note:"Week 1 at IND still live. Identity fills after the first reviewed game."},
  buf: {name:"Buffalo Bills", note:"Week 1 at HOU still live. Identity fills after the first reviewed game."},
  car: {name:"Carolina Panthers", note:"Week 1 vs CHI still live. Identity fills after the first reviewed game."},
  chi: {name:"Chicago Bears", note:"Week 1 at CAR still live. Identity fills after the first reviewed game."},
  cin: {name:"Cincinnati Bengals", note:"Week 1 vs TB still live. Identity fills after the first reviewed game."},
  cle: {name:"Cleveland Browns", note:"Week 1 at JAX still live. Identity fills after the first reviewed game."},
  dal: {name:"Dallas Cowboys", note:"Week 1 at NYG still live. Identity fills after the first reviewed game."},
  den: {name:"Denver Broncos", note:"Week 1 at KC still live. Identity fills after the first reviewed game."},
  det: {name:"Detroit Lions", note:"Week 1 vs NO still live. Identity fills after the first reviewed game."},
  gb: {name:"Green Bay Packers", note:"Week 1 at MIN still live. Identity fills after the first reviewed game."},
  hou: {name:"Houston Texans", note:"Week 1 vs BUF still live. Identity fills after the first reviewed game."},
  ind: {name:"Indianapolis Colts", note:"Week 1 vs BAL still live. Identity fills after the first reviewed game."},
  jax: {name:"Jacksonville Jaguars", note:"Week 1 vs CLE still live. Identity fills after the first reviewed game."},
  kc: {name:"Kansas City Chiefs", note:"Week 1 vs DEN still live. Identity fills after the first reviewed game."},
  lac: {name:"Los Angeles Chargers", note:"Week 1 vs ARI still live. Identity fills after the first reviewed game."},
  lar: {name:"Los Angeles Rams", note:"Short-week home favorite that lost the script. Fade the home QB as captain on short weeks. If you still play LAR, it is one skill piece, not the whole stack."},
  lv: {name:"Las Vegas Raiders", note:"Week 1 vs MIA still live. Identity fills after the first reviewed game."},
  mia: {name:"Miami Dolphins", note:"Week 1 at LV still live. Identity fills after the first reviewed game."},
  min: {name:"Minnesota Vikings", note:"Week 1 vs GB still live. Identity fills after the first reviewed game."},
  ne: {name:"New England Patriots", note:"Road dog in a low total. Henry / Stevenson type roles are the cash pieces. Do not captain Maye unless the script is already a shootout. Do not build the passing script off a Seattle injury-report name."},
  no: {name:"New Orleans Saints", note:"Week 1 at DET still live. Identity fills after the first reviewed game."},
  nyg: {name:"New York Giants", note:"Week 1 vs DAL still live. Identity fills after the first reviewed game."},
  nyj: {name:"New York Jets", note:"Week 1 at TEN still live. Identity fills after the first reviewed game."},
  phi: {name:"Philadelphia Eagles", note:"Week 1 vs WAS still live. Identity fills after the first reviewed game."},
  pit: {name:"Pittsburgh Steelers", note:"Week 1 vs ATL still live. Identity fills after the first reviewed game."},
  sea: {name:"Seattle Seahawks", note:"Low-total home favorite. Do not force SEA pass-catchers in GPPs just because they are home. Backup safety looks do not automatically smash the other QB."},
  sf: {name:"San Francisco 49ers", note:"Road dog that cashed a short week. When a short-week favorite is getting faded, the other skill pieces (CMC, Jennings, Kittle) are the stack, not the home QB."},
  tb: {name:"Tampa Bay Buccaneers", note:"Week 1 at CIN still live. Identity fills after the first reviewed game."},
  ten: {name:"Tennessee Titans", note:"Week 1 vs NYJ still live. Identity fills after the first reviewed game."},
  wsh: {name:"Washington Commanders", note:"Week 1 at PHI still live. Identity fills after the first reviewed game."}
};
function paintNflDfsNotes(){
  const notes = document.getElementById("dfs-notes");
  if (notes){
    notes.innerHTML = "<p class='note'>Slate rules. Not team pages.</p><ul>" +
      NFL_DFS_NOTES.map(function(x){ return "<li>"+x+"</li>"; }).join("") +
      "</ul>";
  }
  const box = document.getElementById("team-identities");
  if (!box) return;
  const order = Object.keys(NFL_IDENTITIES).sort(function(a,b){
    return NFL_IDENTITIES[a].name.localeCompare(NFL_IDENTITIES[b].name);
  });
  box.innerHTML = "<p class='note'>Built from reviewed games. Hourly pass appends after each final.</p>" +
    order.map(function(k){
      const t = NFL_IDENTITIES[k];
      return "<div class='g'><b>"+t.name.toUpperCase()+"</b><span>"+t.note+"</span></div>";
    }).join("");
}
paintNflDfsNotes();
