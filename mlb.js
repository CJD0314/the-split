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
"2026-09-11":[
["pit","chc","PIT at CHC","FINAL","CHC 12-2","CHC -1.5 / PIT +1.5","8","CHC -193 / PIT +159","Total 8.5 to 8",href11("pit-chc"),rev11("pit-chc")],
["col","det","COL at DET","FINAL","DET 6-2","DET -1.5 / COL +1.5","8","DET -187 / COL +154","DET -178 to -187",href11("col-det"),rev11("col-det")],
["laa","wsh","LAA at WSH","FINAL","WSH 4-3","WSH -1.5 / LAA +1.5","7.5","WSH -156 / LAA +129","Total 8 to 7.5",href11("laa-wsh"),rev11("laa-wsh")],
["nym","nyy","NYM at NYY","FINAL","NYY 6-4","NYY -1.5 / NYM +1.5","8","NYY -137 / NYM +114","NYM +116 to +114",href11("nym-nyy"),rev11("nym-nyy")],
["bal","tor","BAL at TOR","FINAL","BAL 7-4","TOR -1.5 / BAL +1.5","8","TOR -138 / BAL +114","Held -138",href11("bal-tor"),rev11("bal-tor")],
["hou","tb","HOU at TB","FINAL","TB 3-1","TB -1.5 / HOU +1.5","7.5","TB -174 / HOU +144","Held -174",href11("hou-tb"),rev11("hou-tb")],
["kc","bos","KC at BOS","FINAL","KC 3-2","BOS -1.5 / KC +1.5","8.5","BOS -206 / KC +168","BOS -195 to -206",href11("kc-bos"),rev11("kc-bos")],
["lad","mia","LAD at MIA","FINAL","LAD 6-2","LAD -1.5 / MIA +1.5","7.5","LAD -208 / MIA +174","Held -208",href11("lad-mia"),rev11("lad-mia")],
["phi","atl","PHI at ATL","FINAL","ATL 6-5","ATL -1.5 / PHI +1.5","7","ATL -187 / PHI +159","Held -187",href11("phi-atl"),rev11("phi-atl")],
["cin","mil","CIN at MIL","FINAL","MIL 20-0","MIL -1.5 / CIN +1.5","8","MIL -206 / CIN +175","Held -206",href11("cin-mil"),rev11("cin-mil")],
["cle","min","CLE at MIN","FINAL","CLE 5-2","CLE -1.5 / MIN +1.5","7.5","CLE -118 / MIN +100","Held -118",href11("cle-min"),rev11("cle-min")]
],
"2026-09-12":[
["col","det","COL at DET","FINAL","DET recap","DET -1.5 / COL +1.5","8","DET -175 / COL +144","Open DET -175",href12("col-det"),rev12("col-det")],
["nym","nyy","NYM at NYY","FINAL","NYY recap","NYY -1.5 / NYM +1.5","8","NYY -186 / NYM +153","Open NYY -186",href12("nym-nyy"),rev12("nym-nyy")],
["pit","chc","PIT at CHC","FINAL","CHC recap","CHC -1.5 / PIT +1.5","8","CHC -126 / PIT +104","Open PIT +104",href12("pit-chc"),rev12("pit-chc")],
["bal","tor","BAL at TOR","FINAL","series recap","TOR -1.5 / BAL +1.5","8","TOR -138 / BAL +114","Open BAL +114",href12("bal-tor"),rev12("bal-tor")],
["lad","mia","LAD at MIA","FINAL","series recap","LAD -1.5 / MIA +1.5","7.5","LAD -165 / MIA +140","Open LAD -1.5",href12("lad-mia"),rev12("lad-mia")]
],
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
  return `<div class=\"g\" style=\"flex-wrap:wrap\">\n    <img src=\"${MLB_LOGO(a)}\"><img src=\"${MLB_LOGO(h)}\">\n    <b>${title}</b>\n    <a class=\"full-link\" href=\"${link}\">FULL BREAKDOWN</a>\n    <a class=\"full-link\" href=\"${revHref}\">REVIEW</a>\n    <span>${t} ${n||\"\"}</span>\n    <div class=\"dive-box\" style=\"width:100%\"><div class=\"mini\">\n      <div><b>SPREAD</b><span>${spread||\"--\"}</span></div>\n      <div><b>TOTAL</b><span>${total||\"--\"}</span></div>\n      <div><b>MONEYLINE</b><span>${ml||\"--\"}</span></div>\n      <div><b>MOVE</b><span>${move||\"--\"}</span></div>\n    </div></div></div>`;
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
  let html = `<div style=\"display:flex;align-items:center;justify-content:space-between;margin:8px 0\"><button type=\"button\" id=\"mlb-prev\"><</button><b>${names[m]} ${y}</b><button type=\"button\" id=\"mlb-next\">></button></div>`;
  html += "<div class='weeks' style='grid-template-columns:repeat(7,1fr)'>";
  for (let i=0;i<start.getDay();i++) html += "<div></div>";
  for (let d=1;d<=daysInMonth(y,m);d++){
    const iso = y+"-"+String(m+1).padStart(2,"0")+"-"+String(d).padStart(2,"0");
    html += `<button data-day=\"${iso}\">${d}</button>`;
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
  if (!list.length){ box.innerHTML = `<div class=\"day\">${iso}</div><p class='note'>No slate stored for this date yet.</p>`; return; }
  box.innerHTML = `<div class=\"day\">${iso}</div>` + list.map(function(g){ return mlbCard(g, iso); }).join("");
}
mlbDrawCal();
mlbShow(Object.keys(MLB_GAMES).indexOf(MLB_TODAY) >= 0 ? MLB_TODAY : "2026-09-14");
