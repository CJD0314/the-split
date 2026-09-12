const NAMES = {ne:"Patriots",sea:"Seahawks",sf:"49ers",lar:"Rams",chi:"Bears",car:"Panthers",tb:"Buccaneers",cin:"Bengals",no:"Saints",det:"Lions",buf:"Bills",hou:"Texans",bal:"Ravens",ind:"Colts",cle:"Browns",jax:"Jaguars",atl:"Falcons",pit:"Steelers",nyj:"Jets",ten:"Titans",mia:"Dolphins",lv:"Raiders",gb:"Packers",min:"Vikings",wsh:"Commanders",phi:"Eagles",ari:"Cardinals",lac:"Chargers",dal:"Cowboys",nyg:"Giants",den:"Broncos",kc:"Chiefs"};
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
const LOGO = c => "https://a.espncdn.com/i/teamlogos/nfl/500/" + c + ".png";
const CURRENT_WEEK = 1;
const BOARDED_WEEKS = [1];
const TILES = {
"dive-ne":["nfl-week-1-ne-sea.html","SEA vs NE","SEA -3 (-118) / NE +3 (-102)","SEA -3.5","44.5","44.5","SEA -170 / NE +142","SEA -198 / NE +164","SEA -3.5 to -3","nfl-week-1-ne-sea-review.html"],
"dive-sf":["nfl-week-1-sf-lar.html","SF vs LAR","LAR -3.5 (-118) / SF +3.5 (-102)","LAR -3.5","48.5","48.5","LAR -198 / SF +164","not confirmed","Held -3.5","nfl-week-1-sf-lar-review.html"]
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
  return `<div class="g"><img src="${LOGO(a)}"><img src="${LOGO(h)}"><b>${(NAMES[a]||a)+" at "+(NAMES[h]||h)}</b><a class="full-link" href="nfl-week-1-"+a+"-"+h+".html">FULL BREAKDOWN</a><span>${t} ${n}</span></div>`;
}
function show(week){
  document.querySelectorAll("#week-btns button").forEach((b)=>{
    b.classList.toggle("on", Number(b.dataset.w)===week);
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
  BOARDED_WEEKS.forEach(function(i){
    const b=document.createElement("button");
    b.textContent="Week "+i;
    b.dataset.w = i;
    b.onclick=()=>show(i);
    box.appendChild(b);
  });
  show(CURRENT_WEEK);
}
