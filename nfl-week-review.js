const NFL_WEEK_GAMES = {
  1: [
    {day:"WED", game:"NE at SEA", score:"SEA 13-10", ticket:"Patriots +3", result:"PUSH", href:"nfl-week-1-ne-sea-review.html", note:"Dog in a 23-point game. +3 hit exactly. Maye 3 INT. Low total was the script."},
    {day:"THU", game:"SF at LAR", score:"SF 27-7", ticket:"49ers +3.5", result:"WIN", href:"nfl-week-1-sf-lar-review.html", note:"Travel-week favorite died. Road dog that can run cashed by 20."},
    {day:"SUN", game:"CHI at CAR", score:"CHI 59-37", ticket:"WATCH", result:"--", href:"nfl-week-1-reviews.html#chi-car", note:"96-point game. Do not assume Week 1 totals stay quiet after a 13-10 opener."},
    {day:"SUN", game:"TB at CIN", score:"CIN 33-27", ticket:"WATCH", result:"--", href:"nfl-week-1-reviews.html#tb-cin", note:"Burrow home opener cashed the points. Road favorite in Week 1 is not free."},
    {day:"SUN", game:"NO at DET", score:"DET 31-30 OT", ticket:"WATCH", result:"--", href:"nfl-week-1-reviews.html#no-det", note:"One-score OT. Home favorite survived. Not a smash."},
    {day:"SUN", game:"BUF at HOU", score:"BUF 36-31", ticket:"WATCH", result:"--", href:"nfl-week-1-reviews.html#buf-hou", note:"Bills won a track meet. Houston stayed inside one score late."},
    {day:"SUN", game:"BAL at IND", score:"BAL 41-23", ticket:"WATCH", result:"--", href:"nfl-week-1-reviews.html#bal-ind", note:"Ravens offense showed up in the new system. Cover was real."},
    {day:"SUN", game:"CLE at JAX", score:"JAX 34-10", ticket:"WATCH", result:"--", href:"nfl-week-1-reviews.html#cle-jax", note:"Home smash. Browns offense was not a Week 1 number."},
    {day:"SUN", game:"ATL at PIT", score:"PIT 20-13", ticket:"WATCH", result:"--", href:"nfl-week-1-reviews.html#atl-pit", note:"Watt pick-six. Ugly home cover. Defense traveled farther than the offense."},
    {day:"SUN", game:"NYJ at TEN", score:"NYJ 23-10", ticket:"WATCH", result:"--", href:"nfl-week-1-reviews.html#nyj-ten", note:"Road Jets. Titans home opener did not hold."},
    {day:"SUN", game:"ARI at LAC", score:"ARI 26-14", ticket:"WATCH", result:"--", href:"nfl-week-1-reviews.html#ari-lac", note:"Road Cardinals covered. Chargers home favorite died."},
    {day:"SUN", game:"GB at MIN", score:"MIN 39-22", ticket:"WATCH", result:"--", href:"nfl-week-1-reviews.html#gb-min", note:"Vikings scored the last 29. Love volume is not the same as a cover."},
    {day:"SUN", game:"MIA at LV", score:"LV 27-13", ticket:"WATCH", result:"--", href:"nfl-week-1-reviews.html#mia-lv", note:"Home Raiders handled Miami. Road offense stalled."},
    {day:"SUN", game:"WSH at PHI", score:"PHI 24-22", ticket:"WATCH", result:"--", href:"nfl-week-1-reviews.html#wsh-phi", note:"Home favorite inside a field goal. Not a lay-the-house number."},
    {day:"SNF", game:"DAL at NYG", score:"NYG 28-20", ticket:"WATCH", result:"--", href:"nfl-week-1-reviews.html#dal-nyg", note:"Giants home dog cashed. Cowboys defense was the miss."},
    {day:"MON", game:"DEN at KC", score:"8:15 ET", ticket:"OPEN", result:"--", href:"nfl-week-1-reviews.html#den-kc", note:"Not final. No review until the whistle."}
  ]
};
const NFL_WEEK_NOTES = {
  1: {
    held: [
      "49ers +3.5 BET cashed 27-7. A travel-week favorite is fadeable when the dog can run.",
      "Patriots +3 PUSH. Dog in a total under 45 was the right side even when it did not cash.",
      "Sunday was watch-only. We did not invent tickets after the games ended."
    ],
    broke: [
      "A 13-10 opener does not mean the Sunday slate stays under. Bears-Panthers put up 96.",
      "Home favorites were not automatic. Chargers, Titans, Packers, Cowboys all lost as chalk or at home."
    ],
    next: [
      "Board Sunday 1 p.m. games before kickoff or leave them as WATCH.",
      "Do not captain a short-week favorite just because the name is bigger.",
      "A late home collapse is a fade note for next week, not a live ticket on Monday."
    ]
  }
};
function nflReviewWeek(week){
  document.querySelectorAll("#nfl-review-btns button").forEach((b,i)=> b.classList.toggle("on", i+1===week));
  const box = document.getElementById("nfl-week-review");
  if (!box) return;
  const notes = NFL_WEEK_NOTES[week] || {held:[],broke:[],next:[]};
  const games = NFL_WEEK_GAMES[week] || [];
  function bullets(arr, empty){
    if (!arr.length) return "<p class='note'>"+empty+"</p>";
    return "<ul>"+arr.map(x=>"<li>"+x+"</li>").join("")+"</ul>";
  }
  const rows = games.map(g => {
    const stamp = g.result && g.result!=="--" ? g.result : g.ticket;
    return `<div class="g-row"><div class="g-main"><span class="g-name">${g.day} · ${g.game}</span><span class="g-pick">${g.ticket} · ${g.score}</span><span class="note">${g.note}</span></div><div class="g-side"><span class="stamp">${stamp}</span><a href="${g.href}">REVIEW</a></div></div>`;
  }).join("");
  box.innerHTML =
    "<p class='note'>WEEK "+week+" — every game. Boarded tickets first. Sunday was WATCH.</p>" +
    "<h3 style='color:#d4a017;font-size:12px;letter-spacing:.08em'>GAME REVIEWS</h3>" +
    (rows || "<p class='note'>No games stored.</p>") +
    "<h3 style='color:#d4a017;font-size:12px;letter-spacing:.08em'>WHAT HELD</h3>" + bullets(notes.held, "Nothing posted.") +
    "<h3 style='color:#d4a017;font-size:12px;letter-spacing:.08em'>WHAT BROKE</h3>" + bullets(notes.broke, "Nothing posted.") +
    "<h3 style='color:#d4a017;font-size:12px;letter-spacing:.08em'>RULES THAT MOVE TO NEXT WEEK</h3>" + bullets(notes.next, "Nothing posted.");
}
(function(){
  const btns = document.getElementById("nfl-review-btns");
  if (!btns) return;
  for (let i=1;i<=18;i++){
    const b=document.createElement("button");
    b.textContent="Week "+i;
    b.onclick=function(){ nflReviewWeek(i); };
    btns.appendChild(b);
  }
  nflReviewWeek(typeof CURRENT_WEEK === "number" ? CURRENT_WEEK : 1);
})();
