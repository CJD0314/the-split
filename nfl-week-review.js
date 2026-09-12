const NFL_WEEK_NOTES = {
  1: {
    held: ["49ers +3.5 on the road cashed as a BET. Short-week favorite was the fade.","Patriots +3 pushed. Dog in a low total was the right side even if it did not cash."],
    broke: ["Backup safeties do not always equal 250 passing yards."],
    next: ["Do not captain a short-week road favorite just because the name is bigger.","Sunday 1 p.m. sides get boards before they get a BET stamp."]
  }
};
function nflReviewWeek(week){
  document.querySelectorAll("#nfl-review-btns button").forEach((b,i)=> b.classList.toggle("on", i+1===week));
  const box = document.getElementById("nfl-week-review");
  if (!box) return;
  const list = (typeof GAMES !== "undefined" ? GAMES.filter(g => g[0]===week) : []);
  const notes = NFL_WEEK_NOTES[week] || {held:[],broke:[],next:[]};
  function bullets(arr, empty){
    if (!arr.length) return "<p class='note'>"+empty+"</p>";
    return "<ul>"+arr.map(x=>"<li>"+x+"</li>").join("")+"</ul>";
  }
  function row(g){
    const extra = g[6];
    const tile = (typeof TILES !== "undefined" && TILES[extra]) ? TILES[extra] : null;
    const title = tile ? tile[1] : ((g[2]||"") + " at " + (g[3]||""));
    const href = tile ? tile[0] : "#";
    const review = tile ? tile[6] : "";
    const when = (g[1]||"") + " " + (g[4]||"");
    const rev = review ? " <a class='full-link' href='"+review+"'>REVIEW</a>" : "";
    const done = extra === "dive-ne" || extra === "dive-sf";
    return "<div class='g'><b>"+title.toUpperCase()+"</b><a class='full-link' href='"+href+"'>GAME DETAIL</a>"+rev+"<span>"+when+(done?" \u00b7 FINAL":"")+"</span></div>";
  }
  const finals = list.filter(g => g[6]==="dive-ne" || g[6]==="dive-sf");
  const open = list.filter(g => g[6]!=="dive-ne" && g[6]!=="dive-sf" && g[2]!=="tbd");
  box.innerHTML =
    "<p class='note'>WEEK "+week+" \u00b7 "+finals.length+" final \u00b7 "+open.length+" still live</p>" +
    "<h3 style='color:#d4a017;font-size:12px;letter-spacing:.08em'>WHAT HELD</h3>" + bullets(notes.held, "No finals in yet.") +
    "<h3 style='color:#d4a017;font-size:12px;letter-spacing:.08em'>WHAT BROKE</h3>" + bullets(notes.broke, "Nothing posted.") +
    "<h3 style='color:#d4a017;font-size:12px;letter-spacing:.08em'>RULES THAT MOVE TO NEXT WEEK</h3>" + bullets(notes.next, "Nothing posted.") +
    "<h3 style='color:#d4a017;font-size:12px;letter-spacing:.08em'>FINALS</h3>" +
    (finals.length ? finals.map(row).join("") : "<p class='note'>No finals yet.</p>") +
    "<h3 style='color:#d4a017;font-size:12px;letter-spacing:.08em'>STILL LIVE</h3>" +
    (open.length ? open.map(row).join("") : "<p class='note'>Card is closed.</p>");
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
