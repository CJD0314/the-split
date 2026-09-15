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
function stampText(){
  return "LAST UPDATED: " + (window.SPLIT_UPDATED || "Mon Sep 14, 2026 10:17 p.m. ET");
}
function paintUpdated(){
  var nodes = document.querySelectorAll(".updated");
  if (!nodes.length){
    var h = document.querySelector("header");
    if (!h) return;
    var d = document.createElement("div");
    d.className = "updated";
    h.appendChild(d);
    nodes = document.querySelectorAll(".updated");
  }
  var text = stampText();
  nodes.forEach(function(el){ el.textContent = text; });
}
function loadUpdated(done){
  if (window.SPLIT_UPDATED){ done(); return; }
  var s = document.createElement("script");
  s.src = "updated.js";
  s.onload = done;
  s.onerror = done;
  document.head.appendChild(s);
}
function splitStamp(){
  splitNav();
  loadUpdated(paintUpdated);
  return true;
}
(function(){
  splitNav();
  loadUpdated(paintUpdated);
  document.addEventListener("DOMContentLoaded", function(){ splitNav(); loadUpdated(paintUpdated); });
  window.addEventListener("load", function(){ splitNav(); loadUpdated(paintUpdated); });
})();
