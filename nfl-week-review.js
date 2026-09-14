const NFL_WEEK_GAMES = {
  1: [
    {day:"WED", game:"NE at SEA", score:"SEA 13-10", ticket:"Patriots +3", result:"PUSH", href:"nfl-week-1-ne-sea-review.html", note:"Dog in a 23-point game. +3 hit exactly. Henry TD missed."},
    {day:"THU", game:"SF at LAR", score:"SF 27-7", ticket:"49ers +3.5", result:"WIN", href:"nfl-week-1-sf-lar-review.html", note:"Travel-week favorite died. McCaffrey did not score."},
    {day:"SUN", game:"CHI at CAR", score:"CHI 59-37", ticket:"Bears -3", result:"WIN", href:"nfl-week-1-game-review.html#chi-car", note:"96 points. Swift three TDs. Quiet opener did not travel."},
    {day:"SUN", game:"TB at CIN", score:"CIN 33-27", ticket:"Bucs +3.5", result:"LOSS", href:"nfl-week-1-game-review.html#tb-cin", note:"Burrow covered at home. Irving still scored."},
    {day:"SUN", game:"NO at DET", score:"DET 31-30 OT", ticket:"Saints +7.5", result:"WIN", href:"nfl-week-1-game-review.html#no-det", note:"One-score OT. Gibbs two TDs. Home favorite leaked."},
    {day:"SUN", game:"BUF at HOU", score:"BUF 36-31", ticket:"Bills -1.5", result:"WIN", href:"nfl-week-1-game-review.html#buf-hou", note:"Allen covered. Kincaid 130 yards, no TD."},
    {day:"SUN", game:"BAL at IND", score:"BAL 41-23", ticket:"Ravens -3", result:"WIN", href:"nfl-week-1-game-review.html#bal-ind", note:"Henry 144 and three scores. Real road cover."},
    {day:"SUN", game:"CLE at JAX", score:"JAX 34-10", ticket:"Browns +8.5", result:"LOSS", href:"nfl-week-1-game-review.html#cle-jax", note:"Home smash. Hunter did not score."},
    {day:"SUN", game:"ATL at PIT", score:"PIT 20-13", ticket:"Falcons +6.5", result:"LOSS", href:"nfl-week-1-game-review.html#atl-pit", note:"Pittsburgh won by 7. +6.5 loses. Bijan still scored."},
    {day:"SUN", game:"NYJ at TEN", score:"NYJ 23-10", ticket:"Jets +1.5", result:"WIN", href:"nfl-week-1-game-review.html#nyj-ten", note:"Road Jets. Hall scored. Titans opener died."},
    {day:"SUN", game:"ARI at LAC", score:"ARI 26-14", ticket:"Cardinals +9.5", result:"WIN", href:"nfl-week-1-game-review.html#ari-lac", note:"Road Cards won outright. Harrison did not score."},
    {day:"SUN", game:"GB at MIN", score:"MIN 39-22", ticket:"Packers +1.5", result:"LOSS", href:"nfl-week-1-game-review.html#gb-min", note:"Vikings last 29. Jefferson two TDs. Love yards did not cover."},
    {day:"SUN", game:"MIA at LV", score:"LV 27-13", ticket:"Dolphins +3.5", result:"LOSS", href:"nfl-week-1-game-review.html#mia-lv", note:"Jeanty two TDs. Miami never entered the number."},
    {day:"SUN", game:"WSH at PHI", score:"PHI 24-22", ticket:"Commanders +5.5", result:"WIN", href:"nfl-week-1-game-review.html#wsh-phi", note:"Eagles won by 2. Goedert two scores. Points cashed."},
    {day:"SNF", game:"DAL at NYG", score:"NYG 28-20", ticket:"Cowboys -2.5", result:"LOSS", href:"nfl-week-1-game-review.html#dal-nyg", note:"Giants won outright. Likely scored. Brand did not cover."},
    {day:"MON", game:"DEN at KC", score:"8:15", ticket:"Broncos +2.5", result:"OPEN", href:"nfl-week-1-game-review.html#den-kc", note:"Road dog and Worthy TD still live."}
  ]
};
const NFL_WEEK_NOTES = {
  1: {
    held: [
      "Dog in a total under 45 is the side. Patriots +3 pushed on a 23-point game.",
      "Travel-week favorite died. 49ers +3.5 won by 20.",
      "Large home numbers leaked: Saints +7.5, Cardinals +9.5, Commanders +5.5."
    ],
    broke: [
      "A 13-10 opener does not mean Sunday stays under. Bears-Panthers put up 96.",
      "Yards are not touchdowns. McCaffrey and Kincaid piled work and did not score.",
      "Fat road dogs are not automatic. Browns +8.5 lost by 24. Falcons +6.5 lost by half a point."
    ],
    next: [
      "Board the side and the featured back as separate tickets.",
      "Do not captain a short-week favorite just because the name is bigger.",
      "Grade Monday after the whistle. Do not invent extra Sunday tickets."
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
    "<p class='note'>WEEK "+week+" — tap REVIEW on a game for that game only.</p>" +
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
