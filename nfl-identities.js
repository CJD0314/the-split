window.NFL_IDENTITIES = Object.assign({}, window.NFL_ID_A||{}, window.NFL_ID_B||{});
function paintTeamIdentities(){
  const box = document.getElementById("team-identities");
  if (!box) return;
  const order = Object.keys(NFL_IDENTITIES).sort(function(a,b){
    return NFL_IDENTITIES[a].name.localeCompare(NFL_IDENTITIES[b].name);
  });
  box.innerHTML = order.map(function(k){
    const t = NFL_IDENTITIES[k];
    const logo = "https://a.espncdn.com/i/teamlogos/nfl/500/" + k + ".png";
    return "<a class='g' href='nfl-team.html?t="+k+"'><img src='"+logo+"' alt=''><b>"+t.name.toUpperCase()+"</b></a>";
  }).join("");
}
paintTeamIdentities();
