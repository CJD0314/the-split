const MLB_DAY_NOTES = {
  "2026-09-11": {
    held: [
      "Plus-money road dogs that kept the starter in the game cashed (BAL +114, CLE -118 on the road).",
      "A 20-0 favorite still does not make -206 a good price. The run line was the real ticket."
    ],
    broke: [
      "Boston -206 died 3-2. Do not lay -200 home juice.",
      "Pirates +159 needed Skenes. Imanaga night was not that ticket."
    ],
    next: [
      "Fire a plus-money dog only if the starter can keep it close.",
      "Pass or take -1.5 when the ML is worse than -200.",
      "Do not glue Friday's final to Saturday's rematch."
    ]
  },
  "2026-09-12": {
    held: [],
    broke: [],
    next: [
      "Skenes vs Holmes is the live plus-money pile (PIT +104).",
      "Yankees / Tigers juice stays FADE.",
      "Do not reuse Friday scores on these rematches."
    ]
  }
};
function mlbReviewDay(iso){
  document.querySelectorAll("#mlb-review-days button").forEach(function(b){
    b.classList.toggle("on", b.getAttribute("data-day") === iso);
  });
  const box = document.getElementById("mlb-day-review");
  if (!box) return;
  const notes = MLB_DAY_NOTES[iso] || {held:[],broke:[],next:[]};
  function bullets(arr, empty){
    if (!arr.length) return "<p class='note'>"+empty+"</p>";
    return "<ul>"+arr.map(function(x){ return "<li>"+x+"</li>"; }).join("")+"</ul>";
  }
  box.innerHTML =
    "<p class='note'>"+iso+"</p>" +
    "<h3 style='color:#d4a017;font-size:12px;letter-spacing:.08em'>WHAT HELD</h3>" + bullets(notes.held, "Nothing posted.") +
    "<h3 style='color:#d4a017;font-size:12px;letter-spacing:.08em'>WHAT BROKE</h3>" + bullets(notes.broke, "Nothing posted.") +
    "<h3 style='color:#d4a017;font-size:12px;letter-spacing:.08em'>RULES THAT MOVE TO THE NEXT CARD</h3>" + bullets(notes.next, "Nothing posted.");
}
(function(){
  const box = document.getElementById("mlb-review-days");
  if (!box) return;
  const days = Object.keys(MLB_DAY_NOTES).sort();
  days.forEach(function(iso){
    const b = document.createElement("button");
    b.textContent = iso.slice(5);
    b.setAttribute("data-day", iso);
    b.onclick = function(){ mlbReviewDay(iso); };
    box.appendChild(b);
  });
  mlbReviewDay(days[days.length-1] || "2026-09-12");
})();
