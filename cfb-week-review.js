const CFB_QUICK = {
  1: ["A huge opener is not automatically a live number the next week."],
  2: [
    "Oregon -20.5 on the road after a one-score opener died 39-31 at Oklahoma State.",
    "Washington -28.5 with two tailbacks out won 16-14 and never covered.",
    "Alabama -10.5 trailed 17-13 at half and covered by 17 after Kentucky went 1-of-14 on third down.",
    "Georgia, Notre Dame, and SMU cashed 28-plus. Stamp stays FADE."
  ]
};
const CFB_WEEK_NOTES = {
  1: {
    held: ["Blowout favorites that were already 30-plus mostly cashed.","Oregon -24.5 and Michigan -27.5 were the sides that did not."],
    broke: ["A huge opener is not automatically a live number the next week."],
    next: ["Board every Top-25 game. Do not copy a 50-point Week 1 margin into a Week 2 35-point FCS number and call it a fire."]
  },
  2: {
    held: [
      "Miami, Louisville, Virginia, Georgia, Notre Dame, SMU covered 28-plus. The number cashed. The stamp stays FADE.",
      "Missouri -5.5 and BYU -6.5 were real conference games and covered.",
      "Alabama -10.5 was a real SEC number. Sloppy first half did not kill it."
    ],
    broke: [
      "Oregon -20.5 on the road after 34-27 Boise. Market walked it to -23.5. That is a pass.",
      "Washington -28.5 at home with Carr and Limar out. One offensive TD. 16-14.",
      "Oklahoma -5.5 at Michigan never led. A 51-0 UTEP tape is not a road license.",
      "Indiana -57.5 and Penn State -24.5 did not cover. 35-plus and 24-plus remain landmines."
    ],
    next: [
      "Do not lay 20-plus on the road one week after a one-score opener.",
      "A 28-point home favorite with two tailbacks out is not a maintenance number. FADE means pass.",
      "Fire 6-to-10 point ranked sides in real conference games. Do not lump them with paycheck fades.",
      "A 50-point G5 win still does not make 40 a fire next week."
    ]
  }
};
function cfbReviewWeek(week){
  document.querySelectorAll("#cfb-review-btns button").forEach((b,i)=> b.classList.toggle("on", i+1===week));
  const box = document.getElementById("cfb-week-review");
  if (!box) return;
  const notes = CFB_WEEK_NOTES[week] || {held:[],broke:[],next:[]};
  const quick = CFB_QUICK[week] || [];
  function bullets(arr, empty){
    if (!arr.length) return "<p class='note'>"+empty+"</p>";
    return "<ul>"+arr.map(x=>"<li>"+x+"</li>").join("")+"</ul>";
  }
  box.innerHTML =
    "<p class='note'>WEEK "+week+"</p>" +
    "<h3 style='color:#d4a017;font-size:12px;letter-spacing:.08em'>QUICK REVIEWS</h3>" + bullets(quick, "No quick notes this week.") +
    "<h3 style='color:#d4a017;font-size:12px;letter-spacing:.08em'>WHAT HELD</h3>" + bullets(notes.held, "Nothing posted.") +
    "<h3 style='color:#d4a017;font-size:12px;letter-spacing:.08em'>WHAT BROKE</h3>" + bullets(notes.broke, "Nothing posted.") +
    "<h3 style='color:#d4a017;font-size:12px;letter-spacing:.08em'>RULES THAT MOVE TO NEXT WEEK</h3>" + bullets(notes.next, "Nothing posted.");
}
(function(){
  const btns = document.getElementById("cfb-review-btns");
  if (!btns) return;
  for (let i=1;i<=10;i++){
    const b=document.createElement("button");
    b.textContent="Week "+i;
    b.onclick=function(){ cfbReviewWeek(i); };
    btns.appendChild(b);
  }
  cfbReviewWeek(typeof CFB_WEEK === "number" ? CFB_WEEK : 2);
})();
