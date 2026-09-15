const NFL_WEEK_NOTES = {
  1: {
    held: [
      "Run clubs covered. Chicago -3 (59-37), Baltimore -3 (41-23), Buffalo -1.5 (36-31), Jets +1.5 with Hall (23-10).",
      "Big home numbers leaked. Saints +7.5 in OT, Cardinals +9.5 outright, Commanders +5.5. Chargers and Titans home chalk died.",
      "Travel week was real. 49ers +3.5 won 27-7 after the Rams flew to Melbourne.",
      "Scorers lived without the side. Irving, Bijan, Jeanty, Jefferson, Likely, Goedert. Separate tickets.",
      "Low-total dog is a number. Patriots +3 pushed 13-10. Maye threw three picks. The total still held."
    ],
    broke: [
      "Fat dogs are not a system. Browns +8.5 lost by 24. Falcons +6.5 lost 20-13.",
      "Volume is not a touchdown. McCaffrey yards, 0 TD. Kincaid 130 yards, 0 TD. Harrison 0 TD on a side that cashed. Henry the TE missed; Raridon scored.",
      "Wednesday 13-10 did not travel. Bears-Panthers 96. Carolina scored 37 and lost by 22.",
      "Brand and pick-em died. Cowboys -2.5 lost outright. Packers +1.5 died after Love threw for 387 into Flores.",
      "Miami never entered +3.5 after the first quarter against Jeanty."
    ],
    missed: [
      "Bengals covered with Chase quiet. The front was the ticket, not WR1.",
      "Steelers 20-13 was an ugly cover. Watt and the front, not the passing stack.",
      "Houston hung 31 at home and still missed +1.5. Close is not a cover.",
      "Flores sent extra on 82% of snaps. That is a closer defense, not a first-half smash."
    ],
    next: [
      "Board the side and the featured back as two tickets.",
      "Do not lay a touchdown-plus home number just because the name is bigger.",
      "Do not chain WR1 or TE TD onto a dog you already like.",
      "Vs Flores or any stacked-pressure look: ask if the line lives under 2.50 before you buy the QB side.",
      "DEN at KC is still live. Grade after the whistle."
    ]
  }
};
function nflReviewWeek(week){
  document.querySelectorAll("#nfl-review-btns button").forEach(function(b){
    b.classList.toggle("on", Number(b.getAttribute("data-week"))===week);
  });
  const box = document.getElementById("nfl-week-review");
  if (!box) return;
  const notes = NFL_WEEK_NOTES[week];
  if (!notes){
    box.innerHTML = "<p class='note'>No notes posted for this week yet.</p>";
    return;
  }
  function bullets(arr, empty){
    if (!arr || !arr.length) return "<p class='note'>"+empty+"</p>";
    return "<ul class='notes'>"+arr.map(function(x){ return "<li>"+x+"</li>"; }).join("")+"</ul>";
  }
  box.innerHTML =
    "<p class='note'>WEEK "+week+" — from the tickets we graded. Full write-up is REVIEW on each game card.</p>" +
    "<p class='note-lab'>WHAT HELD</p>" + bullets(notes.held, "Nothing posted.") +
    "<p class='note-lab'>WHAT BROKE</p>" + bullets(notes.broke, "Nothing posted.") +
    "<p class='note-lab'>WHAT WE MISSED</p>" + bullets(notes.missed, "Nothing posted.") +
    "<p class='note-lab'>CARRY TO NEXT WEEK</p>" + bullets(notes.next, "Nothing posted.");
}
(function(){
  const btns = document.getElementById("nfl-review-btns");
  if (!btns) return;
  const weeks = Object.keys(NFL_WEEK_NOTES).map(Number).sort(function(a,b){ return a-b; });
  weeks.forEach(function(i){
    const b=document.createElement("button");
    b.textContent="Week "+i;
    b.setAttribute("data-week", String(i));
    b.onclick=function(){ nflReviewWeek(i); };
    btns.appendChild(b);
  });
  nflReviewWeek(weeks[weeks.length-1] || 1);
})();
