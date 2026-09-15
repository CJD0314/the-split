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
      "Main slate only. Never put TNF, SNF, or MNF on the cheat sheet.",
      "Every week is a cheat sheet, then a review. Do not mix them.",
      "Hard-cap the chalk back. Pay the featured back who scores."
    ],
    fade: [
      "Yards are not fantasy. Kincaid piled 130 and did not score.",
      "Do not chain WR1 TD to a dog side. Harrison missed. Cardinals +9.5 cashed.",
      "Do not captain a TE in a total under 45."
    ]
  }
};
function paintDfsNotes(sport){
  var box = document.getElementById("dfs-notes");
  if (!box) return;
  var n = DFS_NOTES[sport] || {keep:[], fade:[]};
  box.innerHTML =
    "<p class='note-head'>Main slate only. Sheet first. Review after kickoffs lock.</p>" +
    (n.keep.length ? "<p class='note-lab'>KEEP DOING</p><ul class='notes'>" + noteList(n.keep) + "</ul>" : "") +
    (n.fade.length ? "<p class='note-lab'>STAY AWAY</p><ul class='notes'>" + noteList(n.fade) + "</ul>" : "") +
    "<p><a class='full-link' href='nfl-dfs-week-1.html'>WEEK 1 CHEAT SHEET + REVIEW</a></p>";
}
