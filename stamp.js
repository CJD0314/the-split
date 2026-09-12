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
  document.querySelectorAll("details[open]").forEach(function(d){ d.removeAttribute("open"); });
}
function splitStamp(){
  splitNav();
  closeAllTabs();
  if (document.querySelector(".updated")) return true;
  var header = document.querySelector("header");
  if (!header) return false;
  var text = "LAST UPDATED: Sat Sep 12, 2026 8:28 a.m. ET";
  try {
    var parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      weekday: "short", month: "short", day: "numeric", year: "numeric",
      hour: "numeric", minute: "2-digit", hour12: true
    }).formatToParts(new Date());
    var get = function(t){ return (parts.find(function(p){ return p.type===t; })||{}).value; };
    text = "LAST UPDATED: " + get("weekday") + " " + get("month") + " " + get("day") + ", " + get("year") + " " + get("hour") + ":" + get("minute") + " " + String(get("dayPeriod")||"PM").toLowerCase() + " ET";
  } catch (e) {}
  var el = document.createElement("div");
  el.className = "updated";
  el.textContent = text;
  header.appendChild(el);
  return true;
}
(function(){
  splitNav();
  closeAllTabs();
  splitStamp();
  document.addEventListener("DOMContentLoaded", function(){ splitNav(); closeAllTabs(); });
  window.addEventListener("load", function(){ splitNav(); closeAllTabs(); });
})();
