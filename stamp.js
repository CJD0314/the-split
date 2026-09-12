function splitNav(){
  var nav = document.querySelector(".topnav");
  if (!nav) {
    nav = document.createElement("div");
    nav.className = "topnav";
    document.body.insertBefore(nav, document.body.firstChild);
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
function splitStamp(){
  splitNav();
  return true;
}
(function(){
  splitNav();
  document.addEventListener("DOMContentLoaded", splitNav);
  window.addEventListener("load", splitNav);
})();
