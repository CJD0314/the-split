window.NFL_DFS_NOTES = [
  "Short week: do not captain the home favorite. Use the road skill stack or leave the game.",
  "Total under 45: play the running back and tight end. Do not pay WR1 unless the matchup note says so.",
  "Total 50 or more: start with QB + WR1. Add a second receiver only if the board already likes both.",
  "A backup safety on the injury report is not a reason to smash the other quarterback.",
  "A road dog that already cashed a short week: those skill pieces stay in the book the next time that club is a dog."
];
window.NFL_IDENTITIES = {
  lar: { slug:"lar", name:"Los Angeles Rams", href:"nfl-team-lar.html", note:"Short-week home favorite. Lost the script Week 1." },
  ne:  { slug:"ne",  name:"New England Patriots", href:"nfl-team-ne.html", note:"Road dog in a low total. Tight end and backs cash first." },
  sea: { slug:"sea", name:"Seattle Seahawks", href:"nfl-team-sea.html", note:"Low-total home favorite. Do not force Seahawks pass-catchers." },
  sf:  { slug:"sf",  name:"San Francisco 49ers", href:"nfl-team-sf.html", note:"Road dog that cashed a short week. Stack their skill, not the home QB." }
};
function paintNflDfsNotes(){
  const notes = document.getElementById("dfs-notes");
  if (notes){
    notes.innerHTML = "<p class='note-head'>Slate rules. Not team pages.</p><ul class='notes'>" +
      NFL_DFS_NOTES.map(function(x){ return "<li>"+x+"</li>"; }).join("") +
      "</ul>";
  }
  const box = document.getElementById("team-identities");
  if (!box) return;
  const order = Object.keys(NFL_IDENTITIES).sort(function(a,b){
    return NFL_IDENTITIES[a].name.localeCompare(NFL_IDENTITIES[b].name);
  });
  box.innerHTML = "<p class='note-head'>Clubs with a reviewed game only. Tap the name.</p>" +
    order.map(function(k){
      const t = NFL_IDENTITIES[k];
      return "<div class='g'><b><a class='full-link' href='"+t.href+"'>"+t.name.toUpperCase()+"</a></b><span>"+t.note+"</span></div>";
    }).join("");
}
paintNflDfsNotes();
