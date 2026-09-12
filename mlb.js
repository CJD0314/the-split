const MLB_LOGO = c => "https://a.espncdn.com/i/teamlogos/mlb/500/"+c+".png";
function mlbEtDate(){
  try {
    return new Intl.DateTimeFormat("en-CA", {timeZone:"America/New_York", year:"numeric", month:"2-digit", day:"2-digit"}).format(new Date());
  } catch (e) { return "2026-09-12"; }
}
const MLB_TODAY = mlbEtDate();
let mlbMonth = Number(MLB_TODAY.slice(5,7)) - 1;
function href11(id){ return "mlb-2026-09-11-"+id+".html"; }
function href12(id){ return "mlb-2026-09-12-"+id+".html"; }
const MLB_GAMES = {
"2026-09-11":[
["pit","chc","PIT at CHC","FINAL","CHC 12-2","CHC -1.5 / PIT +1.5","8","CHC -193 / PIT +159","Total 8.5 to 8",href11("pit-chc"),"mlb-2026-09-11-pit-chc-review.html"],
["col","det","COL at DET","FINAL","DET 6-2","DET -1.5 / COL +1.5","8","DET -187 / COL +154","DET -178 to -187",href11("col-det"),"mlb-2026-09-11-col-det-review.html"],
["laa","wsh","LAA at WSH","FINAL","WSH 4-3","WSH -1.5 / LAA +1.5","7.5","WSH -156 / LAA +129","Total 8 to 7.5",href11("laa-wsh"),"mlb-2026-09-11-laa-wsh-review.html"],
["nym","nyy","NYM at NYY","FINAL","NYY 6-4","NYY -1.5 / NYM +1.5","8","NYY -137 / NYM +114","NYM +116 to +114",href11("nym-nyy"),"mlb-2026-09-11-nym-nyy-review.html"],
["bal","tor","BAL at TOR","FINAL","BAL 7-4","TOR -1.5 / BAL +1.5","8","TOR -138 / BAL +114","Held -138",href11("bal-tor"),"mlb-2026-09-11-bal-tor-review.html"],
["hou","tb","HOU at TB","FINAL","TB 3-1","TB -1.5 / HOU +1.5","7.5","TB -174 / HOU +144","Held -174",href11("hou-tb"),"mlb-2026-09-11-hou-tb-review.html"],
["kc","bos","KC at BOS","FINAL","KC 3-2","BOS -1.5 / KC +1.5","8.5","BOS -206 / KC +168","BOS -195 to -206",href11("kc-bos"),"mlb-2026-09-11-kc-bos-review.html"],
["lad","mia","LAD at MIA","FINAL","LAD 6-2","LAD -1.5 / MIA +1.5","7.5","LAD -208 / MIA +174","Held -208",href11("lad-mia"),"mlb-2026-09-11-lad-mia-review.html"],
["phi","atl","PHI at ATL","FINAL","ATL 6-5","ATL -1.5 / PHI +1.5","7","ATL -187 / PHI +159","Held -187",href11("phi-atl"),"mlb-2026-09-11-phi-atl-review.html"],
["cin","mil","CIN at MIL","FINAL","MIL 20-0","MIL -1.5 / CIN +1.5","8","MIL -206 / CIN +175","Held -206",href11("cin-mil"),"mlb-2026-09-11-cin-mil-review.html"],
["cle","min","CLE at MIN","FINAL","CLE 5-2","CLE -1.5 / MIN +1.5","7.5","CLE -118 / MIN +100","Held -118",href11("cle-min"),"mlb-2026-09-11-cle-min-review.html"]
],
"2026-09-12":[
["col","det","COL at DET","1:10","Comerica","DET -1.5 / COL +1.5","8","DET -175 / COL +144","Open DET -175",href12("col-det"),""],
["nym","nyy","NYM at NYY","1:35","Yankee Stadium","NYY -1.5 / NYM +1.5","8","NYY -186 / NYM +153","Open NYY -186",href12("nym-nyy"),""],
["pit","chc","PIT at CHC","2:20","Wrigley","CHC -1.5 / PIT +1.5","8","CHC -126 / PIT +104","Open PIT +104",href12("pit-chc"),""],
["bal","tor","BAL at TOR","3:07","Rogers Centre","TOR -1.5 / BAL +1.5","8","TOR -138 / BAL +114","Open BAL +114",href12("bal-tor"),""],
["laa","wsh","LAA at WSH","4:05","Nationals Park","WSH -1.5 / LAA +1.5","7.5","WSH -156 / LAA +129","Open WSH -156",href12("laa-wsh"),""],
["sd","sf","SD at SF","4:05","Oracle","SD -149 / SF +126","8","SD -149 / SF +126","Open SD -149",href12("sd-sf"),""],
["kc","bos","KC at BOS","4:10","Fenway","BOS -1.5 / KC +1.5","8.5","BOS -175 / KC +145","Open BOS -175",href12("kc-bos"),""],
["lad","mia","LAD at MIA","4:10","loanDepot","LAD -1.5 / MIA +1.5","7.5","LAD -165 / MIA +140","Open LAD -1.5",href12("lad-mia"),""],
["cle","min","CLE at MIN","4:10","Target Field","MIN -1.5 / CLE +1.5","7.5","MIN -140 / CLE +118","Open MIN -140",href12("cle-min"),""],
["hou","tb","HOU at TB","6:10","Tropicana","TB -1.5 / HOU +1.5","7.5","TB -150 / HOU +125","Open TB -150",href12("hou-tb"),""],
["cin","mil","CIN at MIL","7:10","AmFam","MIL -1.5 / CIN +1.5","8","MIL -180 / CIN +150","Open MIL -180",href12("cin-mil"),""],
["phi","atl","PHI at ATL","7:15","Truist","ATL -1.5 / PHI +1.5","7","ATL -160 / PHI +135","Open ATL -160",href12("phi-atl"),""],
["chw","stl","CHW at STL","7:15","Busch","STL -130 / CHW +110","8","STL -130 / CHW +110","Open STL -130",href12("chw-stl"),""],
["tex","ari","TEX at ARI","8:10","Chase Field","ARI -118 / TEX +100","8.5","ARI -118 / TEX +100","Open ARI -118",href12("tex-ari"),""],
["sea","oak","SEA at ATH","9:40","Sutter Health","SEA -168 / ATH +142","10","SEA -168 / ATH +142","Open SEA -168",href12("sea-oak"),""]
]
};
let mlbSelected = MLB_TODAY;
function mlbCard(g){
  const [a,h,title,t,n,spread,total,ml,move,link,review]=g;
  const rev = review ? ` <a class="full-link" href="${review}">REVIEW</a>` : "";
  return `<div class="g" style="flex-wrap:wrap">
    <img src="${MLB_LOGO(a)}"><img src="${MLB_LOGO(h)}">
    <b>${title}</b>
    <a class="full-link" href="${link}">FULL BREAKDOWN</a>${rev}
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
  box.innerHTML = `<div class="day">${iso}</div>` + list.map(mlbCard).join("");
}
mlbDrawCal();
mlbShow(MLB_TODAY);
