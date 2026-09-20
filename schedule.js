const LOGO = c => "https://a.espncdn.com/i/teamlogos/nfl/500/" + c + ".png";
const CURRENT_WEEK = 2;
const BOARDED_WEEKS = [1,2];
const GAMES = [
[1,"WED SEPT 9","ne","sea","Patriots at Seahawks","FINAL SEA 13-10","NE +3 / SEA -3","44.5","SEA -170 / NE +142","PUSH · Patriots +3","nfl-week-1-ne-sea.html","nfl-week-1-ne-sea-review.html"],
[1,"THU SEPT 10","sf","lar","49ers at Rams","FINAL SF 27-7","SF +3.5 / LAR -3.5","48.5","LAR -198 / SF +164","WIN · 49ers +3.5","nfl-week-1-sf-lar.html","nfl-week-1-sf-lar-review.html"],
[1,"SUN SEPT 13","chi","car","Bears at Panthers","FINAL CHI 59-37","CHI -3 / CAR +3","47.5","CHI -161 / CAR +140","WIN · Bears -3","nfl-week-1-chi-car.html","nfl-week-1-game-review.html#chi-car"],
[1,"SUN SEPT 13","tb","cin","Buccaneers at Bengals","FINAL CIN 33-27","TB +3.5 / CIN -3.5","49.5","CIN -166 / TB +140","LOSS · Bucs +3.5","nfl-week-1-tb-cin.html","nfl-week-1-game-review.html#tb-cin"],
[1,"SUN SEPT 13","no","det","Saints at Lions","FINAL DET 31-30 OT","NO +7.5 / DET -7.5","49.5","DET -340 / NO +270","WIN · Saints +7.5","nfl-week-1-no-det.html","nfl-week-1-game-review.html#no-det"],
[1,"SUN SEPT 13","buf","hou","Bills at Texans","FINAL BUF 36-31","BUF -1.5 / HOU +1.5","44.5","BUF -122 / HOU +102","WIN · Bills -1.5","nfl-week-1-buf-hou.html","nfl-week-1-game-review.html#buf-hou"],
[1,"SUN SEPT 13","bal","ind","Ravens at Colts","FINAL BAL 41-23","BAL -3 / IND +3","48.5","BAL -162 / IND +136","WIN · Ravens -3","nfl-week-1-bal-ind.html","nfl-week-1-game-review.html#bal-ind"],
[1,"SUN SEPT 13","cle","jax","Browns at Jaguars","FINAL JAX 34-10","CLE +8.5 / JAX -8.5","40.5","JAX -470 / CLE +360","LOSS · Browns +8.5","nfl-week-1-cle-jax.html","nfl-week-1-game-review.html#cle-jax"],
[1,"SUN SEPT 13","atl","pit","Falcons at Steelers","FINAL PIT 20-13","ATL +6.5 / PIT -6.5","40.5","PIT -280 / ATL +230","LOSS · Falcons +6.5","nfl-week-1-atl-pit.html","nfl-week-1-game-review.html#atl-pit"],
[1,"SUN SEPT 13","nyj","ten","Jets at Titans","FINAL NYJ 23-10","NYJ +1.5 / TEN -1.5","38.5","TEN -122 / NYJ +102","WIN · Jets +1.5","nfl-week-1-nyj-ten.html","nfl-week-1-game-review.html#nyj-ten"],
[1,"SUN 4:25","ari","lac","Cardinals at Chargers","FINAL ARI 26-14","ARI +9.5 / LAC -9.5","47.5","LAC -420 / ARI +330","WIN · Cardinals +9.5","nfl-week-1-ari-lac.html","nfl-week-1-game-review.html#ari-lac"],
[1,"SUN 4:25","gb","min","Packers at Vikings","FINAL MIN 39-22","GB +1.5 / MIN -1.5","45.5","MIN -122 / GB +102","LOSS · Packers +1.5","nfl-week-1-gb-min.html","nfl-week-1-game-review.html#gb-min"],
[1,"SUN 4:25","mia","lv","Dolphins at Raiders","FINAL LV 27-13","MIA +3.5 / LV -3.5","40.5","LV -166 / MIA +140","LOSS · Dolphins +3.5","nfl-week-1-mia-lv.html","nfl-week-1-game-review.html#mia-lv"],
[1,"SUN 4:25","wsh","phi","Commanders at Eagles","FINAL PHI 24-22","WSH +5.5 / PHI -5.5","44.5","PHI -245 / WSH +200","WIN · Commanders +5.5","nfl-week-1-wsh-phi.html","nfl-week-1-wsh-phi-review.html"],
[1,"SNF","dal","nyg","Cowboys at Giants","FINAL NYG 28-20","DAL -2.5 / NYG +2.5","47.5","DAL -148 / NYG +124","LOSS · Cowboys -2.5","nfl-week-1-dal-nyg.html","nfl-week-1-game-review.html#dal-nyg"],
[1,"MON SEPT 14","den","kc","Broncos at Chiefs","FINAL KC 31-10","DEN +2.5 / KC -2.5","43.5","KC -135 / DEN +115","LOSS · Broncos +2.5","nfl-week-1-den-kc.html","nfl-week-1-den-kc-review.html"],
[2,"THU 8:15 Prime","det","buf","Lions at Bills","FINAL BUF 41-31","DET +5.5 / BUF -5.5","54.5","BUF -250 / DET +205","PASS · spread","nfl-week-2-det-buf.html","nfl-week-2-det-buf-review.html"],
[2,"SUN 1:00 FOX","car","atl","Panthers at Falcons","Mercedes-Benz · 1:00 p.m. ET","CAR -2.5 / ATL +2.5","43.5","CAR -151 / ATL +127","PASS · spread","nfl-week-2-car-atl.html",""],
[2,"SUN 1:00 FOX","min","chi","Vikings at Bears","Soldier Field · 1:00 p.m. ET","MIN +4.5 / CHI -4.5","47.5","CHI -219 / MIN +182","PASS · spread","nfl-week-2-min-chi.html",""],
[2,"SUN 1:00 FOX","phi","ten","Eagles at Titans","Nissan · 1:00 p.m. ET","PHI -7 / TEN +7","39.5","PHI -340 / TEN +270","OPEN · PHI -7","nfl-week-2-phi-ten.html",""],
[2,"SUN 1:00 CBS","pit","ne","Steelers at Patriots","Gillette · 1:00 p.m. ET","PIT +5.5 / NE -5.5","41.5","NE -240 / PIT +198","OPEN · NE -5.5","nfl-week-2-pit-ne.html",""],
[2,"SUN 1:00 FOX","gb","nyj","Packers at Jets","MetLife · 1:00 p.m. ET","GB -4 / NYJ +4","44.5","GB -198 / NYJ +164","OPEN · GB -4","nfl-week-2-gb-nyj.html",""],
[2,"SUN 1:00 CBS","cle","tb","Browns at Buccaneers","Raymond James · 1:00 p.m. ET","CLE +8.5 / TB -8.5","40.5","TB -410 / CLE +320","OPEN · TB -8.5","nfl-week-2-cle-tb.html",""],
[2,"SUN 1:00 CBS","no","bal","Saints at Ravens","M&T Bank · 1:00 p.m. ET","NO +8.5 / BAL -8.5","47.5","BAL -410 / NO +320","OPEN · BAL -8.5","nfl-week-2-no-bal.html",""],
[2,"SUN 1:00 CBS","cin","hou","Bengals at Texans","NRG · 1:00 p.m. ET","CIN +3 / HOU -3","46.5","HOU -155 / CIN +130","OPEN · HOU -3","nfl-week-2-cin-hou.html",""],
[2,"SUN 4:05 CBS","jax","den","Jaguars at Broncos","Empower Field · 4:05 p.m. ET","JAX +3 / DEN -3","44.5","DEN -155 / JAX +130","OPEN · DEN -3","nfl-week-2-jax-den.html",""],
[2,"SUN 4:05 CBS","lv","lac","Raiders at Chargers","SoFi · 4:05 p.m. ET","LV +7 / LAC -7","44.5","LAC -340 / LV +270","OPEN · LAC -7","nfl-week-2-lv-lac.html",""],
[2,"SUN 4:25 FOX","sea","ari","Seahawks at Cardinals","State Farm · 4:25 p.m. ET","SEA -4.5 / ARI +4.5","41.5","SEA -205 / ARI +170","OPEN · SEA -4.5","nfl-week-2-sea-ari.html",""],
[2,"SUN 4:25 FOX","mia","sf","Dolphins at 49ers","Levi's · 4:25 p.m. ET","MIA +12.5 / SF -12.5","45.5","SF -700 / MIA +500","OPEN · SF -12.5","nfl-week-2-mia-sf.html",""],
[2,"SUN 4:25 FOX","wsh","dal","Commanders at Cowboys","AT&T · 4:25 p.m. ET","WSH +3.5 / DAL -3.5","50.5","DAL -180 / WSH +150","OPEN · DAL -3.5","nfl-week-2-wsh-dal.html",""],
[2,"SNF 8:20 NBC","ind","kc","Colts at Chiefs","Arrowhead · 8:20 p.m. ET","IND +6.5 / KC -6.5","47.5","KC -290 / IND +235","OPEN · KC -6.5","nfl-week-2-ind-kc.html",""],
[2,"MNF 8:15 ESPN","nyg","lar","Giants at Rams","SoFi · 8:15 p.m. ET","NYG +7 / LAR -7","48.5","LAR -340 / NYG +270","OPEN · LAR -7","nfl-week-2-nyg-lar.html",""]
];
function shortWhen(day){
  return String(day||"").replace(" Prime","").replace(" FOX","").replace(" CBS","").replace(" NBC","").replace(" ESPN","");
}
const DIVE_READY = {"nfl-week-1-ne-sea.html":1,"nfl-week-1-sf-lar.html":1,"nfl-week-2-det-buf.html":1,"nfl-week-2-car-atl.html":1,"nfl-week-2-min-chi.html":1};
function nflCard(g){
  const [w,day,a,h,title,when,spread,total,ml,stamp,href,review] = g;
  const isLive = (w===CURRENT_WEEK && /THU/i.test(day) && !/^FINAL/i.test(String(when)));
  const live = isLive ? `<span class=\"live-tag\">LIVE</span>` : "";
  const dive = DIVE_READY[href] ? `<a class=\"g-btn g-btn-on\" href=\"${href}\">FULL BREAKDOWN</a>` : "";
  const rev = review ? `<a class=\"g-btn\" href=\"${review}\">REVIEW</a>` : "";
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
