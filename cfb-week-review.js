const CFB_WEEK_NOTES = {
  1: {
    held: ["Blowout favorites that were already 30-plus mostly cashed.","Oregon -24.5 and Michigan -27.5 were the sides that did not."],
    broke: ["A huge opener is not automatically a live number the next week."],
    next: ["Board every Top-25 game. Do not copy a 50-point Week 1 margin into a Week 2 35-point FCS number and call it a fire."]
  },
  2: {
    held: ["Miami, Louisville, Virginia covered 36-plus FCS numbers. The number cashed. The stamp stays FADE.","Missouri -5.5 on the road was a real game and covered. 3-to-7 ranked sides are live."],
    broke: ["A 50-point Thursday night does not license the next 35-point Friday as a BET."],
    next: ["Fire 3-to-7 point ranked sides when the board says so.","28-plus is volatile. Still board it. Promote off FADE only if sit-outs or script say the number is wrong."]
  }
};
function cfbReviewWeek(week){
  document.querySelectorAll("#cfb-review-btns button").forEach((b,i)=> b.classList.toggle("on", i+1===week));
  const box = document.getElementById("cfb-week-review");
  if (!box) return;
  const notes = CFB_WEEK_NOTES[week] || {held:[],broke:[],next:[]};
  function bullets(arr, empty){
    if (!arr.length) return "<p class='note'>"+empty+"</p>";
    return "<ul>"+arr.map(x=>"<li>"+x+"</li>").join("")+"</ul>";
  }
  box.innerHTML =
    "<p class='note'>WEEK "+week+"</p>" +
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
