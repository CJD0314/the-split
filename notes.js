/* Betting notes live in tracker.json loops + fades. Reviews must append one line. */
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
