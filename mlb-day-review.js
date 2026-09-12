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
  const list = (window.MLB_GAMES && MLB_GAMES[iso]) || [];
  const notes = MLB_DAY_NOTES[iso] || {held:[],broke:[],next:[]};
  const finals = list.filter(function(g){ return String(g[3]).toUpperCase() === "FINAL"; });
  const open = list.filter(function(g){ return String(g[3]).toUpperCase() !== "FINAL"; });
  function bullets(arr, empty){
    if (!arr.length) return "<p class='note'>"+empty+"</p>";
    return "<ul>"+arr.map(function(x){ return "<li>"+x+"</li>"; }).join("")+"</ul>";
  }
  function row(g){
    const title = g[2];
    const when = g[3];
    const extra = g[4] || "";
    const href = g[9] || "#";
    const review = g[10];
    const rev = review ? " <a class='full-link' href='"+review+"'>REVIEW</a>" : "";
    return "<div class='g'><b>"+title+"</b><a class='full-link' href='"+href+"'>GAME DETAIL</a>"+rev+"<span>"+when+" "+extra+"</span></div>";
  }
  box.innerHTML =
    "<p class='note'>"+iso+" · "+finals.length+" final · "+open.length+" still live</p>" +
    "<h3 style='color:#d4a017;font-size:12px;letter-spacing:.08em'>WHAT HELD</h3>" + bullets(notes.held, "No finals in yet.") +
    "<h3 style='color:#d4a017;font-size:12px;letter-spacing:.08em'>WHAT BROKE</h3>" + bullets(notes.broke, "Nothing posted.") +
    "<h3 style='color:#d4a017;font-size:12px;letter-spacing:.08em'>RULES THAT MOVE TO THE NEXT CARD</h3>" + bullets(notes.next, "Nothing posted.") +
    "<h3 style='color:#d4a017;font-size:12px;letter-spacing:.08em'>FINALS</h3>" +
    (finals.length ? finals.map(row).join("") : "<p class='note'>No finals yet.</p>") +
    "<h3 style='color:#d4a017;font-size:12px;letter-spacing:.08em'>STILL LIVE</h3>" +
    (open.length ? open.map(row).join("") : "<p class='note'>Card is closed.</p>");
}
(function(){
  const box = document.getElementById("mlb-review-days");
  if (!box) return;
  const days = Object.keys(window.MLB_GAMES || {"2026-09-11":1,"2026-09-12":1}).sort();
  days.forEach(function(iso){
    const b = document.createElement("button");
    b.textContent = iso.slice(5);
    b.setAttribute("data-day", iso);
    b.onclick = function(){ mlbReviewDay(iso); };
    box.appendChild(b);
  });
  const start = (typeof MLB_TODAY === "string" && MLB_GAMES[MLB_TODAY]) ? MLB_TODAY : days[days.length-1];
  mlbReviewDay(start || "2026-09-12");
})();
