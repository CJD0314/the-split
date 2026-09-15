window.NFL_IDENTITIES = Object.assign({}, window.NFL_ID_A||{}, window.NFL_ID_B||{});
function paintTeamIdentities(){
  const box = document.getElementById("team-identities");
  if (!box) return;
  const order = Object.keys(NFL_IDENTITIES).sort(function(a,b){
    return NFL_IDENTITIES[a].name.localeCompare(NFL_IDENTITIES[b].name);
  });
  box.innerHTML = "<p class='note-head'>Tap a club. Staff, tape, and the next-dive line live on the identity page.</p>" +
    order.map(function(k){
      const t = NFL_IDENTITIES[k];
      return "<div class='g'><b><a class='full-link' href='nfl-team.html?t="+k+"'>"+t.name.toUpperCase()+"</a></b><span>"+t.style+"</span><span>"+t.pf+"-"+t.pa+" · "+t.engine+"</span></div>";
    }).join("");
}
paintTeamIdentities();
