const CFB_WEEK_NOTES = {
  1: {
    held: [
      "30-plus home chalk against FCS or Group of Five mostly cashed. Utah 66-14, Ohio State 56-3, Georgia 63-3, Texas 59-7.",
      "LSU -10.5 was a real number. 51-10 against Clemson. That is not the same ticket as a 40-point FCS smash."
    ],
    broke: [
      "Oregon -24.5 won 34-27 and missed. A one-score opener is not a 24-point license the next week.",
      "Michigan -27.5 survived 13-12. A brand favorite that cannot score is not a cover.",
      "Ole Miss -6.5 won 41-38 and missed. A ranked Sunday night favorite is still a number, not a fire."
    ],
    missed: [
      "We treated every 40-point opener as the same ticket. LSU -10.5 was a real game. Utah -38.5 was a paycheck. Separate those."
    ],
    next: [
      "Do not copy a 50-point Week 1 margin onto a Week 2 35-point FCS number and call it a fire.",
      "A one-score opener is a warning, not a raise."
    ]
  },
  2: {
    held: [
      "Paycheck 28-plus covered when the opponent was FCS or a true mismatch. Miami 77-7, Louisville 59-13, Virginia 59-3, Georgia 70-20, Notre Dame 52-0, SMU 56-10, Houston 77-6. Stamp stays FADE. The number cashed. We still do not fire it.",
      "Real conference numbers cashed. Missouri -5.5, BYU -7, Alabama -10, Texas A&M -14.5, Tennessee -11.5 on the road, Utah -7, Ohio State +1.5 in Austin 24-23."
    ],
    broke: [
      "Oregon -23.5 on the road after 34-27 Boise died 39-31 at Oklahoma State. Market walked it from -20.5. That is a pass.",
      "Oklahoma -5.5 at Michigan never led. A 51-0 UTEP tape is not a road license. Final Michigan 17-10.",
      "Washington -27.5 at home with two tailbacks out won 16-14. One offensive touchdown. A 28-point home favorite with pieces out is not free.",
      "Landmine numbers missed while winning. Indiana 55-0 missed -57.5. Penn State 27-9 missed -24.5. Iowa 16-13 missed -14. Texas Tech 35-24 missed -25.5. USC 49-30 missed -21.5. LSU 45-14 missed -35.5. Ole Miss 41-9 missed -47.5."
    ],
    missed: [
      "We lumped Alabama -10 and Indiana -57.5 as the same kind of favorite. One is a 6-to-14 ranked side. The other is a paycheck. Only the first is a fire.",
      "Iowa-Iowa State was a rivalry, not a 14-point maintenance number. 16-13 should have been a pass before kickoff."
    ],
    next: [
      "Fire 6-to-14 point ranked sides in real conference or Power games. Do not lump them with 28-plus paycheck fades.",
      "Do not lay 20-plus on the road one week after a one-score opener.",
      "A 28-point home favorite with starters out is a pass, not a maintenance number.",
      "A 50-point G5 or FCS win still does not make 35-plus a fire the next week.",
      "Rivalry dogs keep ranked home favorites inside a touchdown. Do not lay 14 on Iowa-Iowa State."
    ]
  },
  3: {
    held: [
      "Week 2 real numbers still rule the card. 6-to-14 ranked sides in conference or Power games. Houston +7.5 is that ticket after Texas Tech walked from -12.5.",
      "Paycheck 28-plus and 20-plus road favorites stay posted as a side and stay FADE. Miami -20.5, Georgia -24.5, USC -23.5, Notre Dame -29.5, Texas -30.5, Indiana -44.5."
    ],
    broke: [
      "Nothing has kicked yet. These are carry-in rules, not grades."
    ],
    missed: [
      "Do not copy Alabama -10 or Texas A&M -14.5 onto 19.5 and 16.5 and call them the same fire. The number moved. The stamp moves with it."
    ],
    next: [
      "One unit: Houston +7.5. Market came off Texas Tech -12.5 and Tech needed the fourth quarter at Oregon State.",
      "LEAN the real games: Pitt -10.5, Texas A&M -16.5, SMU +1.5, LSU -3, West Virginia +10.5 in Charlotte.",
      "Do not lay 20-plus on the road. Do not lay 28-plus at home. Do not lay 17.5 on the road just because BYU covered 7 last week.",
      "Ole Miss opened -1.5 and flipped to LSU -3. Take LSU -3 as a lean, not a unit. Return games are chaos."
    ]
  }
};
function cfbReviewWeek(week){
  document.querySelectorAll("#cfb-review-btns button").forEach(function(b){
    b.classList.toggle("on", Number(b.getAttribute("data-week"))===week);
  });
  const box = document.getElementById("cfb-week-review");
  if (!box) return;
  const notes = CFB_WEEK_NOTES[week];
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
  const btns = document.getElementById("cfb-review-btns");
  if (!btns) return;
  const weeks = Object.keys(CFB_WEEK_NOTES).map(Number).sort(function(a,b){ return a-b; });
  weeks.forEach(function(i){
    const b=document.createElement("button");
    b.textContent="Week "+i;
    b.setAttribute("data-week", String(i));
    b.onclick=function(){ cfbReviewWeek(i); };
    btns.appendChild(b);
  });
  cfbReviewWeek(weeks[weeks.length-1] || 2);
})();
