const MLB_LOGO = c => "https://a.espncdn.com/i/teamlogos/mlb/500/"+c+".png";
function mlbEtDate(){
  try {
    return new Intl.DateTimeFormat("en-CA", {timeZone:"America/New_York", year:"numeric", month:"2-digit", day:"2-digit"}).format(new Date());
  } catch (e) { return "2026-09-15"; }
}
const MLB_TODAY = mlbEtDate();
let mlbMonth = Number(MLB_TODAY.slice(5,7)) - 1;
function href14(id){ return "mlb-2026-09-14-"+id+".html"; }
function href15(id){ return "mlb-2026-09-15-"+id+".html"; }
function rev14(id){ return "mlb-2026-09-14-"+id+"-review.html"; }
function ledgerRev(iso, title){ return "mlb-review.html?date="+iso+"&game="+encodeURIComponent(title); }
function mlbReviewHref(link, review, title, iso){
  if (review) return review;
  return ledgerRev(iso, title);
}
const MLB_GAMES = {
"2026-09-14":[
["lad","cin","LAD at CIN","FINAL","LAD 4-1","LAD -1.5 / CIN +1.5","7.5","LAD -214 / CIN +184","Held -214",href14("lad-cin"),rev14("lad-cin")],
["chw","cle","CWS at CLE","FINAL","CWS 7-3","CLE -1.5 / CWS +1.5","7","CLE -153 / CWS +134","CWS +134 cashed",href14("cws-cle"),rev14("cws-cle")],
["det","tor","DET at TOR","FINAL","DET 6-5","TOR -1.5 / DET +1.5","7.5","TOR -135 / DET +119","DET +119 cashed",href14("det-tor"),rev14("det-tor")],
["bal","nym","BAL at NYM","FINAL","BAL 2-1","NYM -1.5 / BAL +1.5","8","NYM -123 / BAL +108","BAL +108 cashed",href14("bal-nym"),rev14("bal-nym")],
["atl","chc","ATL at CHC","FINAL","CHC 7-3","CHC -1.5 / ATL +1.5","9.5","CHC -133 / ATL +117","ATL +117 died",href14("atl-chc"),rev14("atl-chc")],
["nyy","min","NYY at MIN","FINAL","NYY 8-3","NYY -1.5 / MIN +1.5","8","NYY -123 / MIN +108","Held -123",href14("nyy-min"),rev14("nyy-min")],
["sf","stl","SF at STL","FINAL","STL 2-1","STL -1.5 / SF +1.5","7.5","STL -140 / SF +123","STL -140 cashed",href14("sf-stl"),rev14("sf-stl")],
["sd","col","SD at COL","FINAL","SD 8-7","SD -1.5 / COL +1.5","11","SD -199 / COL +168","SD -199 FADE cashed",href14("sd-col"),rev14("sd-col")],
["sea","laa","SEA at LAA","FINAL","LAA 6-4","SEA -116 / LAA -105","8","SEA -116 / LAA -105","LAA -105 cashed",href14("sea-laa"),rev14("sea-laa")],
["mia","ari","MIA at ARI","FINAL","ARI 8-7","ARI -1.5 / MIA +1.5","8","ARI -133 / MIA +110","ARI -133 cashed",href14("mia-ari"),rev14("mia-ari")]
],
"2026-09-15":[
["oak","tb","ATH at TB","6:40 p.m. ET","Tropicana","TB -1.5 / ATH +1.5","8.5","TB -232 / ATH +188","Open TB -230",href15("ath-tb"),""],
["chw","cle","CWS at CLE","6:40 p.m. ET","Progressive","CLE -1.5 / CWS +1.5","8.5","CLE -130 / CWS +108","Open CWS +108",href15("cws-cle"),""],
["lad","cin","LAD at CIN","6:40 p.m. ET","GABP","LAD -1.5 / CIN +1.5","8.5","LAD -246 / CIN +199","Open LAD -221",href15("lad-cin"),""],
["mil","pit","MIL at PIT","6:40 p.m. ET","PNC Park","MIL -1.5 / PIT +1.5","7.5","MIL -264 / PIT +212","Open MIL -250",href15("mil-pit"),""],
["phi","wsh","PHI at WSH","6:45 p.m. ET","Nationals Park","PHI -1.5 / WSH +1.5","8","PHI -219 / WSH +178","Open PHI -189",href15("phi-wsh"),""],
["det","tor","DET at TOR","7:07 p.m. ET","Rogers Centre","TOR -1.5 / DET +1.5","8.5","TOR -140 / DET +114","Open DET +120",href15("det-tor"),""],
["bal","nym","BAL at NYM","7:10 p.m. ET","Citi Field","NYM -1.5 / BAL +1.5","8","NYM -131 / BAL +108","Open BAL +104",href15("bal-nym"),""],
["atl","chc","ATL at CHC","7:40 p.m. ET","Wrigley","CHC -1.5 / ATL +1.5","8.5","CHC -141 / ATL +117","Open ATL +115",href15("atl-chc"),""],
["nyy","min","NYY at MIN","7:40 p.m. ET","Target Field","NYY -1.5 / MIN +1.5","7.5","NYY -176 / MIN +147","Open NYY -178",href15("nyy-min"),""],
["sf","stl","SF at STL","7:45 p.m. ET","Busch","STL -1.5 / SF +1.5","8","STL -169 / SF +136","Open STL -160",href15("sf-stl"),""],
["bos","tex","BOS at TEX","8:05 p.m. ET","Globe Life","BOS -1.5 / TEX +1.5","8.5","BOS -130 / TEX +110","Open TEX +110",href15("bos-tex"),""],
["kc","hou","KC at HOU","8:10 p.m. ET","Daikin Park","HOU -1.5 / KC +1.5","8","HOU -153 / KC +147","Open HOU -155",href15("kc-hou"),""],
["sd","col","SD at COL","8:40 p.m. ET","Coors","SD -1.5 / COL +1.5","11.5","SD -200 / COL +168","Open SD -199",href15("sd-col"),""],
["sea","laa","SEA at LAA","9:38 p.m. ET","Angel Stadium","SEA -1.5 / LAA +1.5","8","SEA -175 / LAA +136","Open SEA -170",href15("sea-laa"),""],
["mia","ari","MIA at ARI","9:40 p.m. ET","Chase Field","ARI -1.5 / MIA +1.5","8.5","ARI -156 / MIA +123","Open ARI -156",href15("mia-ari"),""]
]
};
let mlbSelected = MLB_TODAY;
function mlbCard(g, iso){
  const [a,h,title,t,n,spread,total,ml,move,link,review]=g;
  const revHref = mlbReviewHref(link, review, title, iso);
  return `<div class="g" style="flex-wrap:wrap">
    <img src="${MLB_LOGO(a)}"><img src="${MLB_LOGO(h)}">
    <b>${title}</b>
    <a class="full-link" href="${link}">FULL BREAKDOWN</a>
    <a class="full-link" href="${revHref}">REVIEW</a>
    <span>${t} ${n||""}</span>
    <div class="dive-box" style="width:100%"><div class="mini">
      <div><b>SPREAD</b><span>${spread||"--"}</span></div>
      <div><b>TOTAL</b><span>${total||"--"}</span></div>
      <div><b>MONEYLINE</b><span>${ml||"--"}</span></div>
      <div><b>MOVE</b><span>${move||"--"}</span></div>
    </div></div></div>`;
}
function daysInMonth(y,m){ return new Date(y,m+1,0).getDate(); }
function paintCal(){
  document.querySelectorAll("#mlb-cal button[data-day]").forEach(b=>{
    const iso = b.dataset.day;
    b.classList.toggle("on", iso===mlbSelected);
    if (iso===MLB_TODAY && mlbSelected!==MLB_TODAY) b.style.boxShadow = "0 0 0 2px #d4a017";
    else b.style.boxShadow = "";
  });
}
function mlbDrawCal(){
  const cal = document.getElementById("mlb-cal");
  if (!cal) return;
  const y = 2026, m = mlbMonth;
  const names = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
  const start = new Date(y,m,1);
  const dow = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
  let html = `<div style="display:flex;align-items:center;justify-content:space-between;margin:8px 0">
    <button type="button" id="mlb-prev"><</button>
    <b>${names[m]} ${y}</b>
    <button type="button" id="mlb-next">></button>
  </div>`;
  html += "<div class='weeks' style='grid-template-columns:repeat(7,1fr);margin-bottom:8px'>"+dow.map(d=>`<div class='note' style='text-align:center;font-size:10px'>${d}</div>`).join("")+"</div>";
  html += "<div class='weeks' style='grid-template-columns:repeat(7,1fr)'>";
  for (let i=0;i<start.getDay();i++) html += "<div></div>";
  const dim = daysInMonth(y,m);
  for (let d=1;d<=dim;d++){
    const iso = y+"-"+String(m+1).padStart(2,"0")+"-"+String(d).padStart(2,"0");
    html += `<button data-day="${iso}">${d}</button>`;
  }
  html += "</div>";
  cal.innerHTML = html;
  document.getElementById("mlb-prev").onclick = ()=>{ mlbMonth = (mlbMonth+11)%12; mlbDrawCal(); mlbShow(mlbSelected); };
  document.getElementById("mlb-next").onclick = ()=>{ mlbMonth = (mlbMonth+1)%12; mlbDrawCal(); mlbShow(mlbSelected); };
  cal.querySelectorAll("button[data-day]").forEach(b=> b.onclick = ()=> mlbShow(b.dataset.day));
  paintCal();
}
function mlbShow(iso){
  mlbSelected = iso;
  paintCal();
  const list = MLB_GAMES[iso] || [];
  const box = document.getElementById("mlb-slate");
  if (!box) return;
  if (!list.length){ box.innerHTML = `<div class="day">${iso}</div><p class='note'>No slate stored for this date yet.</p>`; return; }
  box.innerHTML = `<div class="day">${iso}</div>` + list.map(function(g){ return mlbCard(g, iso); }).join("");
}
mlbDrawCal();
mlbShow(Object.keys(MLB_GAMES).indexOf(MLB_TODAY) >= 0 ? MLB_TODAY : "2026-09-15");
