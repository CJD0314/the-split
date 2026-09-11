(function(){
  if (document.querySelector(".updated")) return;
  var text = "LAST UPDATED: Fri Sep 11, 2026 6:59 p.m. ET";
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
    text = "LAST UPDATED: " + get("weekday") + " " + get("month") + " " + get("day") + ", " + get("year") + " " + get("hour") + ":" + get("minute") + " " + get("dayPeriod").toLowerCase() + " ET";
  } catch (e) {}
  var el = document.createElement("div");
  el.className = "updated";
  el.textContent = text;
  var meta = document.querySelector("header .meta");
  if (meta) meta.insertAdjacentElement("afterend", el);
  else if (document.querySelector("header")) document.querySelector("header").appendChild(el);
})();
