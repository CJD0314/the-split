function splitStamp(){
  if (document.querySelector(".updated")) return true;
  var header = document.querySelector("header");
  if (!header) return false;
  var text = "LAST UPDATED: Fri Sep 11, 2026 9:17 p.m. ET";
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
  if (splitStamp()) return;
  var n = 0;
  var t = setInterval(function(){
    n++;
    if (splitStamp() || n > 40) clearInterval(t);
  }, 100);
})();
