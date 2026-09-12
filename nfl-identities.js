window.NFL_DFS_NOTES = [
  "Short week: do not captain the home favorite. Use the road skill stack or leave the game.",
  "Low total (under 45): RB / TE cash. Do not pay up at WR1 unless the matchup note says otherwise.",
  "High total (50-plus): QB + WR1 is the default stack. Second receiver only if the board already likes both.",
  "Backup safeties are not a license to smash the opposing QB. Need snaps and who actually covers, not a name on the injury report.",
  "Road dog that already cashed a short week: those skill pieces stay in the identity book the next time that club is a dog."
];
window.NFL_IDENTITIES = {
  lar: {
    slug: "lar",
    name: "Los Angeles Rams",
    href: "nfl-team-lar.html",
    note: "Short-week home favorite that lost the script."
  },
  ne: {
    slug: "ne",
    name: "New England Patriots",
    href: "nfl-team-ne.html",
    note: "Road dog in a low total. Henry / Stevenson cash."
  },
  sea: {
    slug: "sea",
    name: "Seattle Seahawks",
    href: "nfl-team-sea.html",
    note: "Low-total home favorite. Do not force SEA pass-catchers."
  },
  sf: {
    slug: "sf",
    name: "San Francisco 49ers",
    href: "nfl-team-sf.html",
    note: "Road dog that cashed a short week. Stack the skill, not the home QB."
  }
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
  box.innerHTML = "<p class='note'>Clubs with a reviewed game only. Click the name for the page.</p>" +
    order.map(function(k){
      const t = NFL_IDENTITIES[k];
      return "<div class='g'><b><a class='full-link' href='"+t.href+"'>"+t.name.toUpperCase()+"</a></b><span>"+t.note+"</span></div>";
    }).join("");
}
paintNflDfsNotes();
