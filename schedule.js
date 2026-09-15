const LOGO = c => "https://a.espncdn.com/i/teamlogos/nfl/500/" + c + ".png";
const CURRENT_WEEK = 1;
const BOARDED_WEEKS = [1];
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
[1,"MON SEPT 14","den","kc","Broncos at Chiefs","8:15 ABC/ESPN","DEN +2.5 / KC -2.5","43.5","KC -135 / DEN +115","OPEN · Broncos +2.5","nfl-week-1-den-kc.html",""]
];
function nflCard(g){
  const [w,day,a,h,title,when,spread,total,ml,stamp,href,review] = g;
  const tiles = `<div class="dive-box" style="width:100%"><div class="mini"><div><b>SPREAD</b><span>${spread}</span></div><div><b>TOTAL</b><span>${total}</span></div><div><b>MONEYLINE</b><span>${ml}</span></div><div><b>RESULT</b><span>${stamp}</span></div></div></div>`;
  const rev = review ? `<a class="full-link" href="${review}">REVIEW</a>` : "";
  return `<div class="g" style="flex-wrap:wrap"><img src="${LOGO(a)}"><img src="${LOGO(h)}"><b>${title}</b><a class="full-link" href="${href}">FULL BREAKDOWN</a>${rev}<span>${when}</span>${tiles}</div>`;
}
function nflPickLabel(g){
  return g[4] + " · " + g[5];
}
function paintNflGame(list, idx){
  const slate = document.getElementById("slate");
  if (!slate) return;
  const g = list[idx];
  if (!g){ slate.innerHTML = "<p class='note'>Pick a game from the dropdown.</p>"; return; }
  slate.innerHTML = "<div class='day'>"+g[1]+"</div>" + nflCard(g);
}
function show(week){
  document.querySelectorAll("#week-btns button").forEach(function(b){
    b.classList.toggle("on", Number(b.dataset.w)===week);
  });
  const list = GAMES.filter(function(g){ return g[0]===week; });
  const wrap = document.getElementById("week-btns");
  let hold = document.getElementById("nfl-game-hold");
  let pick = document.getElementById("nfl-game-pick");
  if (!hold && wrap && wrap.parentNode){
    hold = document.createElement("div");
    hold.id = "nfl-game-hold";
    const lab = document.createElement("p");
    lab.className = "note-lab";
    lab.textContent = "SELECT A GAME";
    pick = document.createElement("select");
    pick.id = "nfl-game-pick";
    pick.className = "game-pick";
    pick.setAttribute("aria-label", "Select a game");
    hold.appendChild(lab);
    hold.appendChild(pick);
    wrap.parentNode.insertBefore(hold, wrap.nextSibling);
  }
  pick = document.getElementById("nfl-game-pick");
  if (!pick) return;
  pick.innerHTML = "";
  list.forEach(function(g,i){
    const o = document.createElement("option");
    o.value = String(i);
    o.textContent = nflPickLabel(g);
    pick.appendChild(o);
  });
  pick.onchange = function(){ paintNflGame(list, Number(pick.value)); };
  paintNflGame(list, 0);
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
