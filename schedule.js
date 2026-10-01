const LOGO = c => "https://a.espncdn.com/i/teamlogos/nfl/500/" + c + ".png";
const CURRENT_WEEK = 4;
const BOARDED_WEEKS = [1,2,3,4];
const GAMES = [
[4,"THU 8:15 Prime","pit","cle","Steelers at Browns","8:15 p.m. ET · Huntington","PIT -2.5 / CLE +2.5","38.5","PIT -144 / CLE +124","SE LOCK · side PASS","nfl-week-4-pit-cle.html",""]
];
function shortWhen(day){
  return String(day||"").replace(" Prime","").replace(" FOX","").replace(" CBS","").replace(" NBC","").replace(" ESPN","");
}
const DIVE_READY = {"nfl-week-4-pit-cle.html":1};
function nflCard(g){
  const [w,day,a,h,title,when,spread,total,ml,stamp,href,review] = g;
  const isLive = (w===CURRENT_WEEK && /THU/i.test(day) && !/^FINAL/i.test(String(when)));
  const live = isLive ? `<span class=\"live-tag\">LIVE</span>` : "";
  const dive = DIVE_READY[href] ? `<a class=\"g-btn g-btn-on\" href=\"${href}?v=18\">FULL BREAKDOWN</a>` : "";
  const rev = review ? `<a class=\"g-btn\" href=\"${review}?v=18\">REVIEW</a>` : "";
  const actions = (dive || rev) ? `<div class=\"g-actions\">${dive}${rev}</div>` : "";
  const line = String(spread).split(" / ")[0];
  return `<details class=\"g-card\"${isLive ? " open" : ""}>
    <summary class=\"g-head\"><img src=\"${LOGO(a)}\" alt=\"\"><img src=\"${LOGO(h)}\" alt=\"\"><div class=\"g-copy\"><b>${title}</b><span class=\"g-meta\">${line} · ${stamp}${live}</span></div></summary>
    <div class=\"g-more\">
      <p class=\"note\">${when}</p>
      ${actions}
      <div class=\"mini\"><div><b>SPREAD</b><span>${spread}</span></div><div><b>TOTAL</b><span>${total}</span></div><div><b>MONEYLINE</b><span>${ml}</span></div><div><b>STAMP</b><span>${stamp}</span></div></div>
    </div>
  </details>`;
}
function nflPickLabel(g){
  return shortWhen(g[1]) + " · " + g[4];
}
function paintNflWeek(list){
  const slate = document.getElementById("slate");
  if (!slate) return;
  if (!list.length){ slate.innerHTML = "<p class='note'>No games boarded.</p>"; return; }
  slate.innerHTML = list.map(nflCard).join("");
}
function show(week){
  document.querySelectorAll("#week-btns button").forEach(function(b){
    b.classList.toggle("on", Number(b.dataset.w)===week);
  });
  const head = document.getElementById("slate-head");
  if (head) head.textContent = "WEEK " + week;
  const hold = document.getElementById("nfl-game-hold");
  if (hold) hold.remove();
  paintNflWeek(GAMES.filter(function(g){ return g[0]===week; }));
}
const box = document.getElementById("week-btns");
if (box) {
  BOARDED_WEEKS.forEach(function(i){
    const b=document.createElement("button");
    b.textContent="Week "+i;
    b.dataset.w = i;
    b.onclick=function(){ show(i); };
    box.appendChild(b);
  });
  show(CURRENT_WEEK);
}
