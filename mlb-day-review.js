const MLB_QUICK = {
  "2026-09-11": [
    "Plus-money road dogs that kept the starter in the game cashed.",
    "A -200 home favorite can still lose 3-2."
  ],
  "2026-09-12": [
    "Cole ER over and Soto HR cashed; Yankees -186 died 12-2.",
    "Skenes under 5.5 K held; Pirates ML lost one run.",
    "Tigers -175 FADE still won; Greene HR missed again."
  ]
};
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
      "Pass or take -1.5 when the ML is worse than -200."
    ]
  },
  "2026-09-12": {
    held: [
      "Cole o2.5 ER and Soto HR cashed on the Mets blowout.",
      "Skenes u5.5 K held (4 K over 7 IP).",
      "Goodman o1.5 TB cashed on the HR; Tigers ML covered the FADE price."
    ],
    broke: [
      "Yankees -186 got destroyed 12-2. Heavy home juice remains a FADE.",
      "Pirates +104 lost 4-3. Close does not cash.",
      "Greene HR missed a second straight day despite multi-hit contact."
    ],
    next: [
      "Pitcher ER overs when the starter is leaking beat favorite ML tickets.",
      "Skenes K unders at 5.5 stay live.",
      "Anytime HR needs more than a hot bat name."
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
  const quick = MLB_QUICK[iso] || [];
  function bullets(arr, empty){
    if (!arr.length) return "<p class='note'>"+empty+"</p>";
    return "<ul>"+arr.map(function(x){ return "<li>"+x+"</li>"; }).join("")+"</ul>";
  }
  box.innerHTML =
    "<p class='note'>"+iso+"</p>" +
    "<h3 style='color:#d4a017;font-size:12px;letter-spacing:.08em'>QUICK REVIEWS</h3>" + bullets(quick, "No quick notes this day.") +
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
