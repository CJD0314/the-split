function closeAllTabs(){
  document.querySelectorAll("details[open]").forEach(function(d){ d.removeAttribute("open"); });
}
function splitStamp(){
  closeAllTabs();
  if (document.querySelector(".updated")) return true;
  var header = document.querySelector("header");
  if (!header) return false;
  var text = "LAST UPDATED: Sat Sep 12, 2026 8:20 a.m. ET";
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
  closeAllTabs();
  splitStamp();
  document.addEventListener("DOMContentLoaded", closeAllTabs);
  window.addEventListener("load", closeAllTabs);
})();
