function splitNav(){
  var nav = document.querySelector(".topnav");
  if (!nav) {
    nav = document.createElement("div");
    nav.className = "topnav";
    if (document.body.firstChild) document.body.insertBefore(nav, document.body.firstChild);
    else document.body.appendChild(nav);
  }
  var here = (location.pathname.split("/").pop() || "today.html").toLowerCase();
  var links = [
    ["today.html", "TODAY"],
    ["nfl.html", "NFL"],
    ["cfb.html", "CFB"],
    ["mlb.html", "MLB"],
    ["reviews.html", "BET TRACKER"]
  ];
  nav.innerHTML = links.map(function(p){
    var on = here === p[0] || (p[0] === "reviews.html" && here.indexOf("review") === 0);
    return '<a href="' + p[0] + '"' + (on ? ' class="on"' : '') + '>' + p[1] + '</a>';
  }).join("");
}
function closeAllTabs(){
  document.querySelectorAll("details[open]").forEach(function(d){
    if (d.id === "tickets-block") return;
    d.removeAttribute("open");
  });
}
function paintUpdated(){
  document.querySelectorAll(".updated").forEach(function(el){ el.remove(); });
}
function splitStamp(){
  splitNav();
  paintUpdated();
  return true;
}
(function(){
  splitNav();
  paintUpdated();
  document.addEventListener("DOMContentLoaded", function(){ splitNav(); paintUpdated(); });
  window.addEventListener("load", function(){ splitNav(); paintUpdated(); });
})();
