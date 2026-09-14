function noteList(arr){
  return (arr || []).map(function(x){ return "<li>" + x + "</li>"; }).join("");
}
async function paintBettingNotes(sport){
  var box = document.getElementById("betting-notes");
  if (!box || typeof loadLedger !== "function") return;
  var data = await loadLedger();
  var loops = (data.loops && data.loops[sport]) || [];
  var fades = (data.fades && data.fades[sport]) || [];
  if (!loops.length && !fades.length){
    box.innerHTML = "<p class='note'>No notes logged yet. Every review adds one.</p>";
    return;
  }
  box.innerHTML =
    "<p class='note-head'>Updated after every reviewed final. One line per lesson.</p>" +
    (loops.length ? "<p class='note-lab'>KEEP DOING</p><ul class='notes'>" + noteList(loops) + "</ul>" : "") +
    (fades.length ? "<p class='note-lab'>STAY AWAY</p><ul class='notes'>" + noteList(fades) + "</ul>" : "");
}
var DFS_NOTES = {
  NFL: {
    keep: [
      "Hard-cap the chalk back. Field 35% means 8 of 50, not 20.",
      "Pay the featured back in a run-identity offense. Henry and Swift were the slate.",
      "Monday DEN-KC is a showdown, not the Sunday 50. Low total. Do not captain a TE."
    ],
    fade: [
      "Yards are not fantasy. McCaffrey and Kincaid piled work and did not score.",
      "Do not stack the two highest-owned players in the same lineup.",
      "Do not mix one Bronco into a full Chiefs stack and call it unique."
    ]
  }
};
function paintDfsNotes(sport){
  var box = document.getElementById("dfs-notes");
  if (!box) return;
  var n = DFS_NOTES[sport] || {keep:[], fade:[]};
  box.innerHTML =
    "<p class='note-head'>DFS notes move after the slate is final.</p>" +
    (n.keep.length ? "<p class='note-lab'>KEEP DOING</p><ul class='notes'>" + noteList(n.keep) + "</ul>" : "") +
    (n.fade.length ? "<p class='note-lab'>STAY AWAY</p><ul class='notes'>" + noteList(n.fade) + "</ul>" : "") +
    "<p><a class='full-link' href='nfl-dfs-week-1.html'>OPEN THE CHEAT SHEET</a></p>";
}
