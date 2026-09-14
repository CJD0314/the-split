const MLB_LOGO = c => "https://a.espncdn.com/i/teamlogos/mlb/500/"+c+".png";
function mlbEtDate(){
  try {
    return new Intl.DateTimeFormat("en-CA", {timeZone:"America/New_York", year:"numeric", month:"2-digit", day:"2-digit"}).format(new Date());
  } catch (e) { return "2026-09-14"; }
}
const MLB_TODAY = mlbEtDate();
let mlbMonth = Number(MLB_TODAY.slice(5,7)) - 1;
function href11(id){ return "mlb-2026-09-11-"+id+".html"; }
function href12(id){ return "mlb-2026-09-12-"+id+".html"; }
function href14(id){ return "mlb-2026-09-14-"+id+".html"; }
function rev11(id){ return "mlb-2026-09-11-"+id+"-review.html"; }
function rev12(id){ return "mlb-2026-09-12-"+id+"-review.html"; }
function ledgerRev(iso, title){ return "mlb-review.html?date="+iso+"&game="+encodeURIComponent(title); }
function mlbReviewHref(link, review, title, iso){
  if (review) return review;
  return ledgerRev(iso, title);
}
const MLB_GAMES = {
"2026-09-11":[],
"2026-09-12":[],
"2026-09-14":[
["lad","cin","LAD at CIN","6:40 ET","Skubal vs Lodolo","LAD -1.5 / CIN +1.5","7.5","LAD -214 / CIN +184","Open LAD -214",href14("lad-cin"),""],
["chw","cle","CWS at CLE","6:40 ET","Newcomb vs Williams","CLE -1.5 / CWS +1.5","7","CLE -153 / CWS +134","Open CWS +134",href14("cws-cle"),""],
["det","tor","DET at TOR","7:07 ET","Melton vs Soriano","TOR -1.5 / DET +1.5","7.5","TOR -135 / DET +119","Open DET +119",href14("det-tor"),""],
["bal","nym","BAL at NYM","7:10 ET","Young vs Tong","NYM -1.5 / BAL +1.5","8","NYM -123 / BAL +108","Open BAL +108",href14("bal-nym"),""],
["atl","chc","ATL at CHC","7:40 ET","Lopez vs Peterson","CHC -1.5 / ATL +1.5","9.5","CHC -133 / ATL +117","Open ATL +117",href14("atl-chc"),""],
["nyy","min","NYY at MIN","7:40 ET","Warren vs Kremer","NYY -1.5 / MIN +1.5","8","NYY -123 / MIN +108","Open NYY -123",href14("nyy-min"),""],
["sf","stl","SF at STL","7:45 ET","Roupp vs Mathews","STL -1.5 / SF +1.5","7.5","STL -140 / SF +123","Open STL -140",href14("sf-stl"),""],
["sd","col","SD at COL","8:40 ET","Mize vs Sugano","SD -1.5 / COL +1.5","11","SD -199 / COL +168","Open SD -199",href14("sd-col"),""],
["sea","laa","SEA at LAA","9:38 ET","Anderson vs Detmers","SEA -116 / LAA -105","8","SEA -116 / LAA -105","Open LAA -105",href14("sea-laa"),""],
["mia","ari","MIA at ARI","9:40 ET","Alcantara vs Burnes","ARI -1.5 / MIA +1.5","8","ARI -133 / MIA +110","Open ARI -133",href14("mia-ari"),""]
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
  });
}
function mlbDrawCal(){
  const cal = document.getElementById("mlb-cal");
  if (!cal) return;
  const y = 2026, m = mlbMonth;
  const names = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
  const start = new Date(y,m,1);
  let html = `<div style="display:flex;align-items:center;justify-content:space-between;margin:8px 0"><button type="button" id="mlb-prev"><</button><b>${names[m]} ${y}</b><button type="button" id="mlb-next">></button></div>`;
  html += "<div class='weeks' style='grid-template-columns:repeat(7,1fr)'>";
  for (let i=0;i<start.getDay();i++) html += "<div></div>";
  for (let d=1;d<=daysInMonth(y,m);d++){
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
mlbShow(Object.keys(MLB_GAMES).indexOf(MLB_TODAY) >= 0 ? MLB_TODAY : "2026-09-14");
