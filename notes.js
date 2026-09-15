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
    mainKeep: [
      "Sunday 1 and 4 only. Never drop a Wednesday, Thursday, Sunday-night, or Monday name into the 50 or the $100 single.",
      "The $5 / 832k with 50 entries is a uniqueness contest. Field 35% on one back means he is in 8 of 50, not 20. Gibbs 29-156-2 was real chalk. The cap still stands.",
      "The $100 single is one clean core. Do not copy a GPP dart into that one line just to feel different.",
      "Pay the featured back in a run-identity offense before you pay the QB who piled yards. Swift 18-124-3 in CHI 59-37. Henry 24-144-3 in BAL 41-23. Hall scored with NYJ +1.5. Jeanty two receiving TDs at home vs Miami.",
      "If two backs go 100 in the same game, play the one who scored three, not both in the same lineup. Swift over Monangai in that Chicago room.",
      "Jefferson two TDs while Packers +1.5 died. The Viking is a main-slate piece. Love throwing 387 into Flores is not a captain on this sheet.",
      "Goedert and Irving scored without needing their team's side. Isolated TE / featured back is a GPP lever. Do not glue them to the dog ticket you already like.",
      "If two lineups share 6 of 9 names, delete one. At least half the 50 should be on the side of the game the public is not stacking.",
      "Never stack the two highest-owned players in the same lineup. Chase plus Gibbs as the whole identity is the field, not the 50."
    ],
    mainFade: [
      "Kincaid 130 yards, 0 TD. Tight-end volume is not a main-slate captain and it is not a required piece. Finish or sit.",
      "Harrison 0 TD on a Cardinals side that cashed +9.5. Do not chain WR1 to a dog you already like. The side and the scorer are different tickets.",
      "Travis Hunter missed on a 34-10 dead road offense. Extra darts on a club that cannot move the ball are dead salary.",
      "Do not build Carolina. They scored 37 and lost by 22. Young 361 and Coker 138 were loser-script yards. Swift was the slate in that game.",
      "Do not force Chase in every line because he is Chase. Bengals covered 33-27 with Chase quiet. The front and the other skill won it.",
      "Do not treat Olave or Shough 410 as a reason to fade Gibbs. Saints +7.5 cashed in OT. Gibbs still went 29-156-2. Cap Gibbs. Do not erase him.",
      "Do not play Browns skill. Ten points on the road is not a GPP game. Jacksonville DST plus one Jaguar is the only live side of that room.",
      "Miami never entered the number after Q1. Do not spend main-slate salary on Dolphins pass catchers against a featured home back."
    ],
    showKeep: [
      "Showdown is its own pool. Never mix SNF or MNF names into Sunday 1 and 4.",
      "Captain first. The rest of the lineup is a stack around that captain. If the captain is wrong, the ticket is dead.",
      "SNF DAL at NYG, final NYG 28-20. Likely anytime cashed. Isolated scorer lived without Cowboys -2.5. That is the showdown pattern: captain the unique finisher, not the brand favorite.",
      "If you captain a Giant, play Giant pieces around him. If you captain a Cowboy, play Cowboy pieces. One player from the other side is a bring-back, not a 50/50 mash.",
      "MNF DEN at KC, total 43.5, DEN +2.5 still OPEN. Low-total showdown. Captains are the rush game and the speed WR, not a 40-pass script and not a tight end.",
      "Worthy is the unique KC captain if Mahomes has to throw. The field will still click Kelce and the Chiefs running back. That is why Worthy is the lever.",
      "If you play Denver, play Denver together. Do not drop one Bronco into a full Chiefs stack and call it unique. That is still a Chiefs lineup with a decoy.",
      "In a total under 45, do not captain the tight end. We already paid that tax on the betting card with Henry the TE and Kincaid. Showdown does not get a third try.",
      "A bring-back in a low total is the other team's running back or the other team's speed WR. It is not the other team's TE2."
    ],
    showFade: [
      "Do not captain Kelce in 43.5 just because the name is bigger. That is the field captain in a low-scoring script.",
      "Do not captain Mahomes and then leave the rush game off the rest of the roster. If the total stays under, the pass captain needs a rush bring-back or you are playing a different game than the one on the field.",
      "Do not captain a Cowboy skill just because Dallas was -2.5. Brand favorites died on this card. The Giant who scores is live. The Cowboy who piles yards is not automatic.",
      "Do not mix one Bronco into four Chiefs and call it a Denver lean. Either the captain is Denver and the stack is Denver, or the captain is Kansas City and the stack is Kansas City.",
      "Do not force a 1.5x tight end in any showdown whose total is under 45. The multiplier wants a touchdown. Tight ends on this card got yards and did not finish.",
      "Do not use Sunday main-slate ownership to pick a Monday captain. Gibbs and Swift are not in this game."
    ]
  }
};
function paintDfsNotes(sport){
  var box = document.getElementById("dfs-notes");
  if (!box) return;
  var n = DFS_NOTES[sport] || {};
  box.innerHTML =
    "<p class='note-head'>Main slate is Sunday 1 and 4. Showdown is SNF and MNF. Do not mix them.</p>" +
    "<p class='note-lab'>MAIN SLATE</p>" +
    "<p class='note-lab'>KEEP DOING</p><ul class='notes'>" + noteList(n.mainKeep) + "</ul>" +
    "<p class='note-lab'>STAY AWAY</p><ul class='notes'>" + noteList(n.mainFade) + "</ul>" +
    "<p class='note-lab'>SHOWDOWN CAPTAINS</p>" +
    "<p class='note-lab'>KEEP DOING</p><ul class='notes'>" + noteList(n.showKeep) + "</ul>" +
    "<p class='note-lab'>STAY AWAY</p><ul class='notes'>" + noteList(n.showFade) + "</ul>" +
    "<p><a class='full-link' href='nfl-dfs-week-1.html'>MAIN SLATE</a> · <a class='full-link' href='nfl-dfs-week-1-snf.html'>SUNDAY NIGHT</a> · <a class='full-link' href='nfl-dfs-week-1-mnf.html'>MONDAY NIGHT</a></p>";
}
