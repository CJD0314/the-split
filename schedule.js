const LOGO = c => "https://a.espncdn.com/i/teamlogos/nfl/500/" + c + ".png";
const CURRENT_WEEK = 1;
const BOARDED_WEEKS = [1];
const GAMES = [
[1,"WED SEPT 9","ne","sea","Patriots at Seahawks","FINAL SEA 13-10","NE +3 / SEA -3","44.5","SEA -170 / NE +142","PUSH \u00b7 Patriots +3","nfl-week-1-ne-sea.html","nfl-week-1-ne-sea-review.html"],
[1,"THU SEPT 10","sf","lar","49ers at Rams","FINAL SF 27-7","SF +3.5 / LAR -3.5","48.5","LAR -198 / SF +164","WIN \u00b7 49ers +3.5","nfl-week-1-sf-lar.html","nfl-week-1-sf-lar-review.html"],
[1,"SUN SEPT 13","chi","car","Bears at Panthers","FINAL CHI 59-37","CHI -3 / CAR +3","47.5","CHI -161 / CAR +140","WATCH \u00b7 no ticket","nfl-week-1-reviews.html#chi-car","nfl-week-1-reviews.html#chi-car"],
[1,"SUN SEPT 13","tb","cin","Buccaneers at Bengals","FINAL CIN 33-27","TB +3.5 / CIN -3.5","49.5","CIN -166 / TB +140","WATCH \u00b7 no ticket","nfl-week-1-reviews.html#tb-cin","nfl-week-1-reviews.html#tb-cin"],
[1,"SUN SEPT 13","no","det","Saints at Lions","FINAL DET 31-30 OT","NO +7.5 / DET -7.5","49.5","DET -340 / NO +270","WATCH \u00b7 no ticket","nfl-week-1-reviews.html#no-det","nfl-week-1-reviews.html#no-det"],
[1,"SUN SEPT 13","buf","hou","Bills at Texans","FINAL BUF 36-31","BUF -1.5 / HOU +1.5","44.5","BUF -122 / HOU +102","WATCH \u00b7 no ticket","nfl-week-1-reviews.html#buf-hou","nfl-week-1-reviews.html#buf-hou"],
[1,"SUN SEPT 13","bal","ind","Ravens at Colts","FINAL BAL 41-23","BAL -3 / IND +3","48.5","BAL -162 / IND +136","WATCH \u00b7 no ticket","nfl-week-1-reviews.html#bal-ind","nfl-week-1-reviews.html#bal-ind"],
[1,"SUN SEPT 13","cle","jax","Browns at Jaguars","FINAL JAX 34-10","CLE +8.5 / JAX -8.5","40.5","JAX -470 / CLE +360","WATCH \u00b7 no ticket","nfl-week-1-reviews.html#cle-jax","nfl-week-1-reviews.html#cle-jax"],
[1,"SUN SEPT 13","atl","pit","Falcons at Steelers","FINAL PIT 20-13","ATL +6.5 / PIT -6.5","40.5","PIT -280 / ATL +230","WATCH \u00b7 no ticket","nfl-week-1-reviews.html#atl-pit","nfl-week-1-reviews.html#atl-pit"],
[1,"SUN SEPT 13","nyj","ten","Jets at Titans","FINAL NYJ 23-10","NYJ +1.5 / TEN -1.5","38.5","TEN -122 / NYJ +102","WATCH \u00b7 no ticket","nfl-week-1-reviews.html#nyj-ten","nfl-week-1-reviews.html#nyj-ten"],
[1,"SUN 4:25","ari","lac","Cardinals at Chargers","FINAL ARI 26-14","ARI +9.5 / LAC -9.5","47.5","LAC -420 / ARI +330","WATCH \u00b7 no ticket","nfl-week-1-reviews.html#ari-lac","nfl-week-1-reviews.html#ari-lac"],
[1,"SUN 4:25","gb","min","Packers at Vikings","FINAL MIN 39-22","GB +1.5 / MIN -1.5","45.5","MIN -122 / GB +102","WATCH \u00b7 no ticket","nfl-week-1-reviews.html#gb-min","nfl-week-1-reviews.html#gb-min"],
[1,"SUN 4:25","mia","lv","Dolphins at Raiders","FINAL LV 27-13","MIA +3.5 / LV -3.5","40.5","LV -166 / MIA +140","WATCH \u00b7 no ticket","nfl-week-1-reviews.html#mia-lv","nfl-week-1-reviews.html#mia-lv"],
[1,"SUN 4:25","wsh","phi","Commanders at Eagles","FINAL PHI 24-22","WSH +5.5 / PHI -5.5","44.5","PHI -245 / WSH +200","WATCH \u00b7 no ticket","nfl-week-1-reviews.html#wsh-phi","nfl-week-1-reviews.html#wsh-phi"],
[1,"SNF","dal","nyg","Cowboys at Giants","FINAL NYG 28-20","DAL -2.5 / NYG +2.5","47.5","DAL -148 / NYG +124","WATCH \u00b7 no ticket","nfl-week-1-reviews.html#dal-nyg","nfl-week-1-reviews.html#dal-nyg"],
[1,"MON SEPT 14","den","kc","Broncos at Chiefs","8:15 ABC/ESPN","DEN +2.5 / KC -2.5","43.5","KC -135 / DEN +115","Not boarded","nfl-week-1-reviews.html#den-kc","nfl-week-1-reviews.html#den-kc"]
];
function nflCard(g){
  const [w,day,a,h,title,when,spread,total,ml,stamp,href,review] = g;
  const tiles = `<div class=\"dive-box\" style=\"width:100%\"><div class=\"mini\"><div><b>SPREAD</b><span>${spread}</span></div><div><b>TOTAL</b><span>${total}</span></div><div><b>MONEYLINE</b><span>${ml}</span></div><div><b>RESULT</b><span>${stamp}</span></div></div></div>`;
  return `<div class=\"g\" style=\"flex-wrap:wrap\"><img src=\"${LOGO(a)}\"><img src=\"${LOGO(h)}\"><b>${title}</b><a class=\"full-link\" href=\"${href}\">FULL BREAKDOWN</a><a class=\"full-link\" href=\"${review}\">REVIEW</a><span>${when}</span>${tiles}</div>`;
}
function show(week){
  document.querySelectorAll("#week-btns button").forEach((b)=>{
    b.classList.toggle("on", Number(b.dataset.w)===week);
  });
  const list = GAMES.filter(g=>g[0]===week);
  let html="", last="";
  for (const g of list){
    if (g[1]!==last){ html += `<div class=\"day\">${g[1]}</div>`; last=g[1]; }
    html += nflCard(g);
  }
  const slate = document.getElementById("slate");
  if (slate) slate.innerHTML = html || "<p class='note'>No games listed.</p>";
}
const box = document.getElementById("week-btns");
if (box) {
  BOARDED_WEEKS.forEach(function(i){
    const b=document.createElement("button");
    b.textContent="Week "+i;
    b.dataset.w = i;
    b.onclick=()=>show(i);
    box.appendChild(b);
  });
  show(CURRENT_WEEK);
}
