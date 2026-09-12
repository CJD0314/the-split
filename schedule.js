const NAMES = {ne:"Patriots",sea:"Seahawks",sf:"49ers",lar:"Rams",chi:"Bears",car:"Panthers",tb:"Buccaneers",cin:"Bengals",no:"Saints",det:"Lions",buf:"Bills",hou:"Texans",bal:"Ravens",ind:"Colts",cle:"Browns",jax:"Jaguars",atl:"Falcons",pit:"Steelers",nyj:"Jets",ten:"Titans",mia:"Dolphins",lv:"Raiders",gb:"Packers",min:"Vikings",wsh:"Commanders",phi:"Eagles",ari:"Cardinals",lac:"Chargers",dal:"Cowboys",nyg:"Giants",den:"Broncos",kc:"Chiefs",tbd:"TBD"};
const GAMES = [
[1,"WED SEPT 9","ne","sea","8:20","NBC","dive-ne"],
[1,"THU SEPT 10","sf","lar","8:35","NFLX","dive-sf"],
[1,"SUN SEPT 13","chi","car","1:00","FOX","chi-car"],
[1,"SUN SEPT 13","tb","cin","1:00","FOX","tb-cin"],
[1,"SUN SEPT 13","no","det","1:00","FOX","no-det"],
[1,"SUN SEPT 13","buf","hou","1:00","CBS","buf-hou"],
[1,"SUN SEPT 13","bal","ind","1:00","CBS","bal-ind"],
[1,"SUN SEPT 13","cle","jax","1:00","CBS","cle-jax"],
[1,"SUN SEPT 13","atl","pit","1:00","FOX","atl-pit"],
[1,"SUN SEPT 13","nyj","ten","1:00","CBS","nyj-ten"],
[1,"SUN 4:25","ari","lac","4:25","CBS","ari-lac"],
[1,"SUN 4:25","mia","lv","4:25","FOX","mia-lv"],
[1,"SUN 4:25","gb","min","4:25","CBS","gb-min"],
[1,"SUN 4:25","wsh","phi","4:25","FOX","wsh-phi"],
[1,"SNF","dal","nyg","8:20","NBC","dal-nyg"],
[1,"MON SEPT 14","den","kc","8:15","ABC/ESPN","den-kc"]
];
for (let w = 2; w <= 18; w++) GAMES.push([w, "WEEK " + w, "tbd", "tbd", "", "", ""]);
const LOGO = c => "https://a.espncdn.com/i/teamlogos/nfl/500/" + c + ".png";
const CURRENT_WEEK = 1;
const TILES = {
"dive-ne":["nfl-week-1-ne-sea.html","SEA vs NE","SEA -3 (-118) / NE +3 (-102)","SEA -3.5","44.5","44.5","SEA -170 / NE +142","SEA -198 / NE +164","SEA -3.5 to -3","nfl-week-1-ne-sea-review.html"],
"dive-sf":["nfl-week-1-sf-lar.html","SF vs LAR","LAR -3.5 (-118) / SF +3.5 (-102)","LAR -3.5","48.5","48.5","LAR -198 / SF +164","not confirmed","Held -3.5","nfl-week-1-sf-lar-review.html"],
"chi-car":["nfl-week-1-chi-car.html","CHI at CAR","CHI -3 / CAR +3","not confirmed","46.5","not confirmed","CHI -162 / CAR +136","not confirmed","not confirmed"],
"tb-cin":["nfl-week-1-tb-cin.html","TB at CIN","CIN -3.5 / TB +3.5","not confirmed","50.5","not confirmed","CIN -198 / TB +164","not confirmed","not confirmed"],
"no-det":["nfl-week-1-no-det.html","NO at DET","DET -7 / NO +7","not confirmed","49.5","not confirmed","DET -310 / NO +250","not confirmed","not confirmed"],
"buf-hou":["nfl-week-1-buf-hou.html","BUF at HOU","BUF -1.5 / HOU +1.5","not confirmed","44.5","not confirmed","BUF -122 / HOU +102","not confirmed","not confirmed"],
"bal-ind":["nfl-week-1-bal-ind.html","BAL at IND","BAL -3.5 / IND +3.5","not confirmed","47.5","not confirmed","BAL -175 / IND +145","not confirmed","not confirmed"],
"cle-jax":["nfl-week-1-cle-jax.html","CLE at JAX","JAX -8.5 / CLE +8.5","not confirmed","39.5","not confirmed","JAX -470 / CLE +360","not confirmed","not confirmed"],
"atl-pit":["nfl-week-1-atl-pit.html","ATL at PIT","PIT -3.5 / ATL +3.5","not confirmed","41.5","not confirmed","PIT -185 / ATL +155","not confirmed","not confirmed"],
"nyj-ten":["nfl-week-1-nyj-ten.html","NYJ at TEN","TEN -1.5 / NYJ +1.5","not confirmed","38.5","not confirmed","TEN -125 / NYJ +105","not confirmed","not confirmed"],
"ari-lac":["nfl-week-1-ari-lac.html","ARI at LAC","LAC -9.5 / ARI +9.5","not confirmed","47.5","not confirmed","LAC -500 / ARI +380","not confirmed","not confirmed"],
"mia-lv":["nfl-week-1-mia-lv.html","MIA at LV","LV -3.5 / MIA +3.5","not confirmed","40.5","not confirmed","LV -185 / MIA +155","not confirmed","not confirmed"],
"gb-min":["nfl-week-1-gb-min.html","GB at MIN","MIN -1.5 / GB +1.5","not confirmed","46.5","not confirmed","MIN -122 / GB +102","not confirmed","not confirmed"],
"wsh-phi":["nfl-week-1-wsh-phi.html","WAS at PHI","PHI -5.5 / WAS +5.5","not confirmed","44.5","not confirmed","PHI -230 / WAS +190","not confirmed","not confirmed"],
"dal-nyg":["nfl-week-1-dal-nyg.html","DAL at NYG","DAL -3 / NYG +3","not confirmed","48.5","not confirmed","DAL -162 / NYG +136","not confirmed","not confirmed"],
"den-kc":["nfl-week-1-den-kc.html","DEN at KC","KC -2.5 / DEN +2.5","not confirmed","43.5","not confirmed","KC -150 / DEN +124","not confirmed","not confirmed"]
};
function card(href,title,curSp,opSp,curTot,opTot,curMl,opMl,move,a,h,t,n,review){
  const rev = review ? `<a class="full-link" href="${review}">REVIEW</a>` : "";
  return `<div class="g" style="flex-wrap:wrap">
    <img src="${LOGO(a)}"><img src="${LOGO(h)}">
    <b>${title}</b>
    <a class="full-link" href="${href}">FULL BREAKDOWN</a>
    ${rev}
    <span>${t} ${n}</span>
    <div class="dive-box" style="width:100%">
      <div class="mini">
        <div><b>SPREAD</b><span>Current: ${curSp}</span><span>Open: ${opSp}</span></div>
        <div><b>TOTAL</b><span>Current: ${curTot}</span><span>Open: ${opTot}</span></div>
        <div><b>MONEYLINE</b><span>Current: ${curMl}</span><span>Open: ${opMl}</span></div>
        <div><b>MOVE</b><span>${move}</span></div>
      </div>
    </div>
  </div>`;
}
function row(g){
  const [w,day,a,h,t,n,extra] = g;
  if (TILES[extra]) {
    const x = TILES[extra];
    return card(x[0], x[1], x[2], x[3], x[4], x[5], x[6], x[7], x[8], a, h, t, n, x[9]);
  }
  const imgs = (a === "tbd") ? "" : `<img src="${LOGO(a)}"><img src="${LOGO(h)}">`;
  return `<div class="g">${imgs}<b>${(NAMES[a]||a)+" at "+(NAMES[h]||h)}</b><span>${t} ${n}</span></div>`;
}
function show(week){
  document.querySelectorAll("#week-btns button").forEach((b,i)=>{
    b.classList.toggle("on", i+1===week);
  });
  const list = GAMES.filter(g=>g[0]===week);
  let html="", last="";
  for (const g of list){
    if (g[1]!==last){ html += `<div class="day">${g[1]}</div>`; last=g[1]; }
    html += row(g);
  }
  const slate = document.getElementById("slate");
  if (slate) slate.innerHTML = html || "<p class='note'>No games listed.</p>";
}
const box = document.getElementById("week-btns");
if (box) {
  for (let i=1;i<=18;i++){
    const b=document.createElement("button");
    b.textContent="Week "+i;
    b.onclick=()=>show(i);
    box.appendChild(b);
  }
  show(CURRENT_WEEK);
}
