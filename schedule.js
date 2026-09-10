const NAMES = {ne:"Patriots",sea:"Seahawks",sf:"49ers",lar:"Rams",chi:"Bears",car:"Panthers",tb:"Buccaneers",cin:"Bengals",no:"Saints",det:"Lions",buf:"Bills",hou:"Texans",bal:"Ravens",ind:"Colts",cle:"Browns",jax:"Jaguars",atl:"Falcons",pit:"Steelers",nyj:"Jets",ten:"Titans",mia:"Dolphins",lv:"Raiders",gb:"Packers",min:"Vikings",wsh:"Commanders",phi:"Eagles",ari:"Cardinals",lac:"Chargers",dal:"Cowboys",nyg:"Giants",den:"Broncos",kc:"Chiefs",tbd:"TBD"};
const GAMES = [[1,"WED SEPT 9","ne","sea","8:20","NBC","dive-ne"],[1,"THU SEPT 10","sf","lar","8:35","NFLX","dive-sf"],[1,"SUN SEPT 13","chi","car","1:00","FOX",""],[1,"SUN SEPT 13","tb","cin","1:00","FOX",""],[1,"SUN SEPT 13","no","det","1:00","FOX",""],[1,"SUN SEPT 13","buf","hou","1:00","CBS",""],[1,"SUN SEPT 13","bal","ind","1:00","CBS",""],[1,"SUN SEPT 13","cle","jax","1:00","CBS",""],[1,"SUN SEPT 13","atl","pit","1:00","FOX",""],[1,"SUN SEPT 13","nyj","ten","1:00","CBS",""],[1,"SUN 4:25","ari","lac","4:25","CBS",""],[1,"SUN 4:25","mia","lv","4:25","FOX",""],[1,"SUN 4:25","gb","min","4:25","CBS",""],[1,"SUN 4:25","wsh","phi","4:25","FOX",""],[1,"SNF","dal","nyg","8:20","NBC",""],[1,"MON SEPT 14","den","kc","8:15","ABC/ESPN",""],[2,"THU SEPT 17","det","buf","8:15","PRIME",""],[2,"SUN SEPT 20","min","chi","1:00","FOX",""],[2,"SUN SEPT 20","phi","ten","1:00","FOX",""],[2,"SUN SEPT 20","gb","nyj","1:00","FOX",""],[2,"SUN SEPT 20","car","atl","1:00","FOX",""],[2,"SUN SEPT 20","no","bal","1:00","CBS",""],[2,"SUN SEPT 20","cin","hou","1:00","CBS",""],[2,"SUN SEPT 20","cle","tb","1:00","CBS",""],[2,"SUN SEPT 20","pit","ne","1:00","CBS",""],[2,"SUN 4:05","lv","lac","4:05","CBS",""],[2,"SUN 4:05","jax","den","4:05","CBS",""],[2,"SUN 4:25","mia","sf","4:25","FOX",""],[2,"SUN 4:25","sea","ari","4:25","FOX",""],[2,"SUN 4:25","wsh","dal","4:25","FOX",""],[2,"SNF","ind","kc","8:20","NBC",""],[2,"MON SEPT 21","nyg","lar","8:15","ABC/ESPN",""]];
for (let w = 3; w <= 18; w++) GAMES.push([w, "WEEK " + w, "tbd", "tbd", "", "", "Full slate returns as each dive locks."]);
const LOGO = c => "https://a.espncdn.com/i/teamlogos/nfl/500/" + c + ".png";
function card(title, href, spread, total, ml, move, a, h, t, n){
  return `<details class="g-dive g" open style="display:block;padding:0"><summary class="g" style="margin:0;border:0;list-style:none;cursor:pointer"><img src="${LOGO(a)}"><img src="${LOGO(h)}"><b>${title}</b><span>${t} ${n}</span></summary><div class="dive-box"><div class="mini"><div><b>SPREAD</b><span>${spread}</span></div><div><b>TOTAL</b><span>${total}</span></div><div><b>MONEYLINE</b><span>${ml}</span></div><div><b>MOVE</b><span>${move}</span></div></div><p><a class="full-link" href="${href}">FULL BREAKDOWN</a></p></div></details>`;
}
function row(g){
  const [w,day,a,h,t,n,extra] = g;
  if (extra === "dive-ne") return card("SEA vs NE","nfl-week-1-ne-sea.html","SEA -3 (-118)","44.5","SEA -170 / NE +142","Toward NE",a,h,t,n);
  if (extra === "dive-sf") return card("SF vs LAR","nfl-week-1-sf-lar.html","LAR -3.5 (-118)","48.5","LAR -198 / SF +164","No real move",a,h,t,n);
  const imgs = (a === "tbd") ? "" : `<img src="${LOGO(a)}"><img src="${LOGO(h)}">`;
  const label = extra && a === "tbd" ? extra : ((NAMES[a]||a)+" at "+(NAMES[h]||h)+(extra?" ("+extra+")":""));
  return `<div class="g">${imgs}<b>${label}</b><span>${t} ${n}</span></div>`;
}
function show(week){
  document.querySelectorAll("#week-btns button").forEach((b,i)=>{
    b.classList.remove("live");
    b.classList.toggle("on", i+1===week);
  });
  const list = GAMES.filter(g=>g[0]===week);
  let html="", last="";
  for (const g of list){
    if (g[1]!==last){ html += `<div class="day">${g[1]}</div>`; last=g[1]; }
    html += row(g);
  }
  document.getElementById("slate").innerHTML = html || "<p class='note'>No games listed.</p>";
}
const box = document.getElementById("week-btns");
for (let i=1;i<=18;i++){
  const b=document.createElement("button");
  b.textContent="Week "+i;
  b.onclick=()=>show(i);
  box.appendChild(b);
}
show(1);
