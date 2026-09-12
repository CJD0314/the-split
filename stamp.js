function splitNav(){
  var html = '<a href="today.html">TODAY</a><a href="index.html">HOME</a><a href="reviews.html">BETTING REVIEWS</a>';
  var nav = document.querySelector(".topnav");
  if (!nav) {
    nav = document.createElement("div");
    nav.className = "topnav";
    document.body.insertBefore(nav, document.body.firstChild);
  }
  if (nav.innerHTML.indexOf("reviews.html") === -1) nav.innerHTML = html;
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
  var text = "LAST UPDATED: Fri Sep 11, 2026 11:00 p.m. ET";
  try {
    var parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    }).formatToParts(new Date());
    var get = function(t){ return (parts.find(function(p){ return p.type===t; })||{}).value; };
    text = "LAST UPDATED: " + get("weekday") + " " + get("month") + " " + get("day") + ", " + get("year") + " " + get("hour") + ":" + get("minute") + " " + String(get("dayPeriod")||"PM").toLowerCase() + " ET";
  } catch (e) {}
  var el = document.createElement("div");
  el.className = "updated";
  el.textContent = text;
  var meta = header.querySelector(".meta");
  if (meta) meta.insertAdjacentElement("afterend", el);
  else header.appendChild(el);
  return true;
}
(function(){
  splitNav();
  closeAllTabs();
  if (splitStamp()) return;
  var n = 0;
  var t = setInterval(function(){
    n++;
    closeAllTabs();
    if (splitStamp() || n > 40) clearInterval(t);
  }, 100);
  document.addEventListener("DOMContentLoaded", closeAllTabs);
  window.addEventListener("load", closeAllTabs);
})();
