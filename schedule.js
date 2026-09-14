const NAMES = {ne:"Patriots",sea:"Seahawks",sf:"49ers",lar:"Rams",chi:"Bears",car:"Panthers",tb:"Buccaneers",cin:"Bengals",no:"Saints",det:"Lions",buf:"Bills",hou:"Texans",bal:"Ravens",ind:"Colts",cle:"Browns",jax:"Jaguars",atl:"Falcons",pit:"Steelers",nyj:"Jets",ten:"Titans",mia:"Dolphins",lv:"Raiders",gb:"Packers",min:"Vikings",wsh:"Commanders",phi:"Eagles",ari:"Cardinals",lac:"Chargers",dal:"Cowboys",nyg:"Giants",den:"Broncos",kc:"Chiefs"};
const LOGO = c => "https://a.espncdn.com/i/teamlogos/nfl/500/" + c + ".png";
const CURRENT_WEEK = 1;
const BOARDED_WEEKS = [1];
const GAMES = [
[1,"WED SEPT 9","ne","sea","Patriots at Seahawks","FINAL SEA 13-10","NE +3 / SEA -3","44.5","SEA -170 / NE +142","PUSH \u00b7 Patriots +3","nfl-week-1-ne-sea.html","nfl-week-1-ne-sea-review.html"],
[1,"THU SEPT 10","sf","lar","49ers at Rams","FINAL SF 27-7","SF +3.5 / LAR -3.5","48.5","LAR -198 / SF +164","WIN \u00b7 49ers +3.5","nfl-week-1-sf-lar.html","nfl-week-1-sf-lar-review.html"],
[1,"SUN SEPT 13","chi","car","Bears at Panthers","FINAL CHI 59-37","WATCH","96","CHI won outright","WATCH \u00b7 no ticket","nfl-week-1-chi-car.html","nfl-week-1-reviews.html#chi-car"],
[1,"SUN SEPT 13","tb","cin","Buccaneers at Bengals","FINAL CIN 33-27","WATCH","60","CIN won outright","WATCH \u00b7 no ticket","nfl-week-1-tb-cin.html","nfl-week-1-reviews.html#tb-cin"],
[1,"SUN SEPT 13","no","det","Saints at Lions","FINAL DET 31-30 OT","WATCH","61","DET won OT","WATCH \u00b7 no ticket","nfl-week-1-no-det.html","nfl-week-1-reviews.html#no-det"],
[1,"SUN SEPT 13","buf","hou","Bills at Texans","FINAL BUF 36-31","WATCH","67","BUF won outright","WATCH \u00b7 no ticket","nfl-week-1-buf-hou.html","nfl-week-1-reviews.html#buf-hou"],
[1,"SUN SEPT 13","bal","ind","Ravens at Colts","FINAL BAL 41-23","WATCH","64","BAL won outright","WATCH \u00b7 no ticket","nfl-week-1-bal-ind.html","nfl-week-1-reviews.html#bal-ind"],
[1,"SUN SEPT 13","cle","jax","Browns at Jaguars","FINAL JAX 34-10","WATCH","44","JAX won outright","WATCH \u00b7 no ticket","nfl-week-1-cle-jax.html","nfl-week-1-reviews.html#cle-jax"],
[1,"SUN SEPT 13","atl","pit","Falcons at Steelers","FINAL PIT 20-13","WATCH","33","PIT won outright","WATCH \u00b7 no ticket","nfl-week-1-atl-pit.html","nfl-week-1-reviews.html#atl-pit"],
[1,"SUN SEPT 13","nyj","ten","Jets at Titans","FINAL NYJ 23-10","WATCH","33","NYJ won outright","WATCH \u00b7 no ticket","nfl-week-1-nyj-ten.html","nfl-week-1-reviews.html#nyj-ten"],
[1,"SUN 4:25","ari","lac","Cardinals at Chargers","FINAL ARI 26-14","WATCH","40","ARI won outright","WATCH \u00b7 no ticket","nfl-week-1-ari-lac.html","nfl-week-1-reviews.html#ari-lac"],
[1,"SUN 4:25","gb","min","Packers at Vikings","FINAL MIN 39-22","WATCH","61","MIN won outright","WATCH \u00b7 no ticket","nfl-week-1-gb-min.html","nfl-week-1-reviews.html#gb-min"],
[1,"SUN 4:25","mia","lv","Dolphins at Raiders","FINAL LV 27-13","WATCH","40","LV won outright","WATCH \u00b7 no ticket","nfl-week-1-mia-lv.html","nfl-week-1-reviews.html#mia-lv"],
[1,"SUN 4:25","wsh","phi","Commanders at Eagles","FINAL PHI 24-22","WATCH","46","PHI won outright","WATCH \u00b7 no ticket","nfl-week-1-wsh-phi.html","nfl-week-1-reviews.html#wsh-phi"],
[1,"SNF","dal","nyg","Cowboys at Giants","FINAL NYG 28-20","WATCH","48","NYG won outright","WATCH \u00b7 no ticket","nfl-week-1-dal-nyg.html","nfl-week-1-reviews.html#dal-nyg"],
[1,"MON SEPT 14","den","kc","Broncos at Chiefs","8:15 ABC/ESPN","not boarded","--","--","Board before kick or leave off","nfl-week-1-den-kc.html","nfl-week-1-reviews.html#den-kc"]
];
function nflCard(g){
  const [w,day,a,h,title,when,spread,total,ml,stamp,href,review] = g;
  const tiles = `<div class="dive-box" style="width:100%"><div class="mini"><div><b>SPREAD</b><span>${spread}</span></div><div><b>TOTAL</b><span>${total}</span></div><div><b>MONEYLINE</b><span>${ml}</span></div><div><b>RESULT</b><span>${stamp}</span></div></div></div>`;
  return `<div class="g" style="flex-wrap:wrap"><img src="${LOGO(a)}"><img src="${LOGO(h)}"><b>${title}</b><a class="full-link" href="${href}">FULL BREAKDOWN</a><a class="full-link" href="${review}">REVIEW</a><span>${when}</span>${tiles}</div>`;
}
function show(week){
  document.querySelectorAll("#week-btns button").forEach((b)=>{
    b.classList.toggle("on", Number(b.dataset.w)===week);
  });
  const list = GAMES.filter(g=>g[0]===week);
  let html="", last="";
  for (const g of list){
    if (g[1]!==last){ html += `<div class="day">${g[1]}</div>`; last=g[1]; }
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
