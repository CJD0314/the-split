const NFL_WEEK_NOTES = {
  1: {
    held: [
      "Dog in a total under 45 is the side. Patriots +3 pushed on a 23-point game.",
      "Travel-week favorite died. 49ers +3.5 won by 20.",
      "Large home numbers leaked: Saints +7.5, Cardinals +9.5, Commanders +5.5.",
      "Featured backs still score when the side dies: Irving, Jeanty, Jefferson, Bijan, Goedert, Likely."
    ],
    broke: [
      "A 13-10 opener does not mean Sunday stays under. Bears-Panthers put up 96.",
      "Yards are not touchdowns. McCaffrey and Kincaid piled work and did not score.",
      "Fat road dogs are not automatic. Browns +8.5 lost by 24. Falcons +6.5 lost by half a point."
    ],
    next: [
      "Board the side and the featured back as separate tickets.",
      "Do not captain a short-week favorite just because the name is bigger.",
      "Do not chain a WR1 TD onto a dog side you already like.",
      "DEN at KC is still live. Do not write that review until the whistle."
    ]
  }
};
function nflReviewWeek(week){
  document.querySelectorAll("#nfl-review-btns button").forEach((b,i)=> b.classList.toggle("on", i+1===week));
  const box = document.getElementById("nfl-week-review");
  if (!box) return;
  const notes = NFL_WEEK_NOTES[week] || {held:[],broke:[],next:[]};
  function bullets(arr, empty){
    if (!arr.length) return "<p class='note'>"+empty+"</p>";
    return "<ul class='notes'>"+arr.map(x=>"<li>"+x+"</li>").join("")+"</ul>";
  }
  box.innerHTML =
    "<p class='note'>WEEK "+week+" — quick notes from the tickets we graded. Full write-up is REVIEW on each game card.</p>" +
    "<p class='note-lab'>WHAT HELD</p>" + bullets(notes.held, "Nothing posted.") +
    "<p class='note-lab'>WHAT BROKE</p>" + bullets(notes.broke, "Nothing posted.") +
    "<p class='note-lab'>CARRY TO NEXT WEEK</p>" + bullets(notes.next, "Nothing posted.");
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
