const NFL_QUICK = {
  1: ["Backup safeties do not always equal 250 passing yards.","Short-week home favorite died. Road dog skill pieces were the stack."]
};
const NFL_WEEK_NOTES = {
  1: {
    held: ["49ers +3.5 on the road cashed as a BET. Short-week favorite was the fade.","Patriots +3 pushed. Dog in a low total was the right side even if it did not cash."],
    broke: ["Backup safeties do not always equal 250 passing yards."],
    next: ["Do not captain a short-week favorite just because the name is bigger.","Sunday 1 p.m. sides get boards before they get a BET stamp."]
  }
};
function nflReviewWeek(week){
  document.querySelectorAll("#nfl-review-btns button").forEach((b,i)=> b.classList.toggle("on", i+1===week));
  const box = document.getElementById("nfl-week-review");
  if (!box) return;
  const notes = NFL_WEEK_NOTES[week] || {held:[],broke:[],next:[]};
  const quick = NFL_QUICK[week] || [];
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
