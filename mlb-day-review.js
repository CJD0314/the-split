const MLB_QUICK = {
  "2026-09-11": [
    "Plus-money road dogs that kept the starter in the game cashed.",
    "A -200 home favorite can still lose 3-2."
  ],
  "2026-09-12": [
    "Cole ER over and Soto HR cashed; Yankees -186 died 12-2.",
    "Skenes under 5.5 K held; Pirates ML lost one run.",
    "Tigers -175 FADE still won; Greene HR missed again.",
    "Orioles +114 dead 5-0 after three. O'Hearn and Ohtani were not in the lineup.",
    "Glasnow 7 K in 4 IP. 7.5 over lost because the leash died, not the stuff."
  ],
  "2026-09-14": [
    "Monday card 20-10, +$1,981. Nine of ten moneylines cashed.",
    "Plus-money road dogs: White Sox +134, Tigers +119, Orioles +108.",
    "Henderson eighth and Carroll ninth were the HR and the ML in the same swing.",
    "Skubal 9 K, Williams 7, Detmers 8. Ace overs that finished five cashed.",
    "Mize 0 K at Coors. Roupp 4 K in 4.1. Tong 6 K over six. Leash is the K ticket.",
    "Ohtani, Ramirez, Riley, Vlad, Contreras missed. The homers were Tucker, Teoscar, Vargas, Okamoto, Yaz."
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
      "Greene HR missed a second straight day despite multi-hit contact.",
      "Orioles ML dead 7-3. Henderson doubled off the wall. That is not the HR.",
      "Dodgers -1.5 and Glasnow o7.5 both died when Glasnow lasted four innings.",
      "O'Hearn and Ohtani tickets posted on bats that did not play."
    ],
    next: [
      "Pitcher ER overs when the starter is leaking beat favorite ML tickets.",
      "Skenes K unders at 5.5 stay live.",
      "Anytime HR needs more than a hot bat name.",
      "Confirm the lineup at first pitch or void the prop.",
      "A 7.5 K over and a road run line both need the starter to finish five."
    ]
  },
  "2026-09-14": {
    held: [
      "Plus-money road dogs that stayed in the game: White Sox +134 (7-3), Tigers +119 (6-5), Orioles +108 (2-1).",
      "Judge HR and o1.5 TB cashed with Yankees -123. Same bat, two tickets.",
      "Henderson HR in the eighth won the Orioles ML. Carroll walk-off won the Diamondbacks ML.",
      "Skubal 9 K in 7 IP. Williams 7 K in 5 IP. Detmers 8 K in 6 IP. Alcantara 6 K in 5 IP.",
      "Melton 3 K in 2.2 IP. Short-leash unders still cash.",
      "Tatis and Raleigh homered. Coors and the other side of a pick-em both produced the bat."
    ],
    broke: [
      "Braves +117 dead 7-3. Lopez lasted three. Plus-money needs the starter to keep it close after three.",
      "Ohtani, Ramirez, Riley, Vlad, Contreras HR tickets all missed. Name is not the homer.",
      "Tong u4.5 lost at 6 K over 6 IP. Peterson u5.5 lost at 7 K over 6 IP.",
      "Roupp o4.5 died at 4 K in 4.1. Mize o4.5 died at 0 K in 5 IP at Coors.",
      "Padres -199 cashed 8-7 at Coors. The juice is still a FADE even when it wins."
    ],
    next: [
      "Fire a plus-money road dog only if the starter can keep it close after three innings.",
      "Split the bat from the chalk ML. The homer can win the dog or cash while the favorite wins.",
      "K overs need five innings. K unders need a hook by the fourth.",
      "Do not buy pitcher K overs at Coors unless the stuff is elite.",
      "Anytime HR is the bat that hits the ball, not the biggest name on the card.",
      "Juice worse than -190 stays a FADE."
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
  mlbReviewDay(days[days.length-1] || "2026-09-14");
})();
