const MLB_LOGO = c => "https://a.espncdn.com/i/teamlogos/mlb/500/"+c+".png";
function mlbEtDate(){
  try {
    return new Intl.DateTimeFormat("en-CA", {timeZone:"America/New_York", year:"numeric", month:"2-digit", day:"2-digit"}).format(new Date());
  } catch (e) { return "2026-09-13"; }
}
const MLB_TODAY = mlbEtDate();
let mlbMonth = Number(MLB_TODAY.slice(5,7)) - 1;
function href11(id){ return "mlb-2026-09-11-"+id+".html"; }
function href12(id){ return "mlb-2026-09-12-"+id+".html"; }
function href14(id){ return "mlb-2026-09-14-"+id+".html"; }
function href15(id){ return "mlb-2026-09-15-"+id+".html"; }
function href16(id){ return "mlb-2026-09-16-"+id+".html"; }
function href17(id){ return "mlb-2026-09-17-"+id+".html"; }
function rev16(id){ return "mlb-2026-09-16-"+id+"-review.html"; }
function rev11(id){ return "mlb-2026-09-11-"+id+"-review.html"; }
function rev12(id){ return "mlb-2026-09-12-"+id+"-review.html"; }
function ledgerRev(iso, title){ return "mlb-review.html?date="+iso+"&game="+encodeURIComponent(title); }
function mlbReviewHref(link, review, title, iso){
  if (review) return review;
  return "";
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
["laa","wsh","LAA at WSH","FINAL","series recap","WSH -1.5 / LAA +1.5","7.5","WSH -156 / LAA +129","Open WSH -156",href12("laa-wsh"),ledgerRev("2026-09-12","LAA at WSH")],
["sd","sf","SD at SF","FINAL","series recap","SD -149 / SF +126","8","SD -149 / SF +126","Open SD -149",href12("sd-sf"),ledgerRev("2026-09-12","SD at SF")],
["kc","bos","KC at BOS","FINAL","series recap","BOS -1.5 / KC +1.5","8.5","BOS -175 / KC +145","Open BOS -175",href12("kc-bos"),ledgerRev("2026-09-12","KC at BOS")],
["lad","mia","LAD at MIA","FINAL","series recap","LAD -1.5 / MIA +1.5","7.5","LAD -165 / MIA +140","Open LAD -1.5",href12("lad-mia"),rev12("lad-mia")],
["cle","min","CLE at MIN","FINAL","series recap","MIN -1.5 / CLE +1.5","7.5","MIN -140 / CLE +118","Open MIN -140",href12("cle-min"),ledgerRev("2026-09-12","CLE at MIN")],
["hou","tb","HOU at TB","FINAL","series recap","TB -1.5 / HOU +1.5","7.5","TB -150 / HOU +125","Open TB -150",href12("hou-tb"),ledgerRev("2026-09-12","HOU at TB")],
["cin","mil","CIN at MIL","FINAL","series recap","MIL -1.5 / CIN +1.5","8","MIL -180 / CIN +150","Open MIL -180",href12("cin-mil"),ledgerRev("2026-09-12","CIN at MIL")],
["phi","atl","PHI at ATL","FINAL","series recap","ATL -1.5 / PHI +1.5","7","ATL -160 / PHI +135","Open ATL -160",href12("phi-atl"),ledgerRev("2026-09-12","PHI at ATL")],
["chw","stl","CHW at STL","FINAL","series recap","STL -130 / CHW +110","8","STL -130 / CHW +110","Open STL -130",href12("chw-stl"),ledgerRev("2026-09-12","CHW at STL")],
["tex","ari","TEX at ARI","FINAL","series recap","ARI -118 / TEX +100","8.5","ARI -118 / TEX +100","Open ARI -118",href12("tex-ari"),ledgerRev("2026-09-12","TEX at ARI")],
["sea","oak","SEA at ATH","FINAL","series recap","SEA -168 / ATH +142","10","SEA -168 / ATH +142","Open SEA -168",href12("sea-oak"),ledgerRev("2026-09-12","SEA at ATH")]
]
,"2026-09-14":[
["lad","cin","LAD at CIN","FINAL","LAD 4-1","LAD -1.5 / CIN +1.5","7.5","LAD -214 / CIN +184","Held -214",href14("lad-cin"),"mlb-2026-09-14-lad-cin-review.html"],
["chw","cle","CWS at CLE","FINAL","CWS 7-3","CLE -1.5 / CWS +1.5","7","CLE -153 / CWS +134","CWS +134 cashed",href14("cws-cle"),"mlb-2026-09-14-cws-cle-review.html"],
["det","tor","DET at TOR","FINAL","DET 6-5","TOR -1.5 / DET +1.5","7.5","TOR -135 / DET +119","DET +119 cashed",href14("det-tor"),"mlb-2026-09-14-det-tor-review.html"],
["bal","nym","BAL at NYM","FINAL","BAL 2-1","NYM -1.5 / BAL +1.5","8","NYM -123 / BAL +108","BAL +108 cashed",href14("bal-nym"),"mlb-2026-09-14-bal-nym-review.html"],
["atl","chc","ATL at CHC","FINAL","CHC 7-3","CHC -1.5 / ATL +1.5","9.5","CHC -133 / ATL +117","ATL +117 died",href14("atl-chc"),"mlb-2026-09-14-atl-chc-review.html"],
["nyy","min","NYY at MIN","FINAL","NYY 8-3","NYY -1.5 / MIN +1.5","8","NYY -123 / MIN +108","Held -123",href14("nyy-min"),"mlb-2026-09-14-nyy-min-review.html"],
["sf","stl","SF at STL","FINAL","STL 2-1","STL -1.5 / SF +1.5","7.5","STL -140 / SF +123","STL -140 cashed",href14("sf-stl"),"mlb-2026-09-14-sf-stl-review.html"],
["sd","col","SD at COL","FINAL","SD 8-7","SD -1.5 / COL +1.5","11","SD -199 / COL +168","SD -199 FADE cashed",href14("sd-col"),"mlb-2026-09-14-sd-col-review.html"],
["sea","laa","SEA at LAA","FINAL","LAA 6-4","SEA -116 / LAA -105","8","SEA -116 / LAA -105","LAA -105 cashed",href14("sea-laa"),"mlb-2026-09-14-sea-laa-review.html"],
["mia","ari","MIA at ARI","FINAL","ARI 8-7","ARI -1.5 / MIA +1.5","8","ARI -133 / MIA +110","ARI -133 cashed",href14("mia-ari"),"mlb-2026-09-14-mia-ari-review.html"]
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
["mia","ari","MIA at ARI","9:40 p.m. ET","Chase Field","ARI -1.5 / MIA +1.5","8.5","ARI -156 / MIA +123","Open ARI -156",href15("mia-ari"),"mlb-2026-09-15-mia-ari-review.html"]
],
"2026-09-16":[
["chw","cle","CWS at CLE","FINAL","CLE 6-3","CLE -1.5 / CWS +1.5","8.5","CLE -163 / CWS +138","Messick night",href16("cws-cle"),rev16("cws-cle")],
["sf","stl","SF at STL","FINAL","SF 6-5 /10","STL -1.5 / SF +1.5","8","STL -163 / SF +138","SF +138 cashed",href16("sf-stl"),rev16("sf-stl")],
["nyy","min","NYY at MIN","FINAL","MIN 5-4 /13","NYY -1.5 / MIN +1.5","8","NYY -167 / MIN +144","MIN +144 cashed",href16("nyy-min"),rev16("nyy-min")],
["det","tor","DET at TOR","FINAL","TOR 5-1","TOR -1.5 / DET +1.5","8.5","TOR -137 / DET +114","DET +114 died",href16("det-tor"),rev16("det-tor")],
["oak","tb","ATH at TB","FINAL","TB 4-3","TB -1.5 / ATH +1.5","8","TB -192 / ATH +160","TB -192 fade",href16("ath-tb"),rev16("ath-tb")],
["lad","cin","LAD at CIN","FINAL","CIN 6-2","LAD -1.5 / CIN +1.5","8.5","LAD -219 / CIN +183","CIN +183 cashed",href16("lad-cin"),rev16("lad-cin")],
["mil","pit","MIL at PIT","FINAL","MIL 5-4","MIL -1.5 / PIT +1.5","7.5","MIL -135 / PIT +114","One-run chalk",href16("mil-pit"),rev16("mil-pit")],
["phi","wsh","PHI at WSH","FINAL","PHI 3-0","PHI -1.5 / WSH +1.5","8","PHI -201 / WSH +168","PHI -201 fade miss",href16("phi-wsh"),rev16("phi-wsh")],
["bal","nym","BAL at NYM","FINAL","BAL 7-1","BAL -103 / NYM -118","8","BAL -103 / NYM -118","BAL 7-1",href16("bal-nym"),rev16("bal-nym")],
["atl","chc","ATL at CHC","FINAL","CHC 8-4","CHC -1.5 / ATL +1.5","8.5","CHC -168 / ATL +142","ATL died",href16("atl-chc"),rev16("atl-chc")],
["bos","tex","BOS at TEX","FINAL","TEX 7-3","BOS -110 / TEX -110","8.5","TEX -110 / BOS -110","Eovaldi cover",href16("bos-tex"),rev16("bos-tex")],
["kc","hou","KC at HOU","FINAL","KC 5-2","HOU -1.5 / KC +1.5","8","HOU -163 / KC +138","KC +138 cashed",href16("kc-hou"),rev16("kc-hou")],
["sd","col","SD at COL","FINAL","SD 9-3","SD -1.5 / COL +1.5","11.5","SD -173 / COL +145","SD juice fade won",href16("sd-col"),rev16("sd-col")],
["sea","laa","SEA at LAA","FINAL","SEA 7-2","SEA -137 / LAA +116","8","SEA -137 / LAA +116","SEA -137 cashed",href16("sea-laa"),rev16("sea-laa")],
["mia","ari","MIA at ARI","FINAL","MIA 4-3","ARI -1.5 / MIA +1.5","8.5","ARI -138 / MIA +115","MIA +115 cashed",href16("mia-ari"),rev16("mia-ari")]
],
"2026-09-17":[
["mil","pit","MIL at PIT","12:35 p.m. ET","PNC Park","MIL -1.5 / PIT +1.5","7.5","MIL -142 / PIT +120","Open PIT +120",href17("mil-pit"),""],
["lad","cin","LAD at CIN","12:40 p.m. ET","GABP","LAD -1.5 / CIN +1.5","8.5","LAD -172 / CIN +145","Open CIN +145",href17("lad-cin"),""],
["oak","tb","ATH at TB","1:10 p.m. ET","Tropicana","TB -1.5 / ATH +1.5","8","TB -289 / ATH +230","Open TB -289",href17("ath-tb"),""],
["sd","col","SD at COL","3:10 p.m. ET","Coors","SD -1.5 / COL +1.5","11.5","SD -168 / COL +142","Open SD -168",href17("sd-col"),""],
["phi","nym","PHI at NYM","7:15 p.m. ET","Citi Field","NYM -1.5 / PHI +1.5","8","NYM -139 / PHI +118","Open PHI +118",href17("phi-nym"),""],
["kc","hou","KC at HOU","7:15 p.m. ET","Daikin Park","HOU -1.5 / KC +1.5","8","HOU -150 / KC +128","Open KC +128",href17("kc-hou"),""],
["det","cws","DET at CWS","7:40 p.m. ET","Rate Field","CWS -1.5 / DET +1.5","8.5","CWS -129 / DET +108","Open DET +108",href17("det-cws"),""],
["bos","tex","BOS at TEX","8:05 p.m. ET","Globe Life","BOS -141 / TEX +120","8.5","BOS -141 / TEX +120","Open TEX +120",href17("bos-tex"),""],
["min","laa","MIN at LAA","9:38 p.m. ET","Angel Stadium","MIN -133 / LAA +112","8.5","MIN -133 / LAA +112","Open LAA +112",href17("min-laa"),""]
]
};
const MLB_POSTED = {
"2026-09-17|LAD at CIN":{side:"CIN +145",stamp:"BET",hr:"Sal Stewart HR +280",prop:"Singer u4.5 K",from:"Just beat LAD 6-2 as a plus-money home club."},
"2026-09-17|KC at HOU":{side:"KC +128",stamp:"BET",hr:"Bobby Witt Jr HR +320",prop:"Stay on the side",from:"KC 5-2 last night. Tired HOU home chalk."},
"2026-09-17|ATH at TB":{side:"TB -289",stamp:"FADE",hr:"Junior Caminero HR +250",prop:"ATH +1.5",from:"Worse than -190 is never a BET."},
"2026-09-17|MIL at PIT":{side:"PIT +120",stamp:"LEAN",hr:"Bryan Reynolds HR +320",prop:"PIT starter u4.5 K",from:"MIL won 5-4. Do not buy the juice again."},
"2026-09-17|DET at CWS":{side:"DET +108",stamp:"LEAN",hr:"Riley Greene HR +310",prop:"DET +108",from:"Do not upgrade DET after 1-5."},
"2026-09-17|PHI at NYM":{side:"PHI +118",stamp:"LEAN",hr:"Kyle Schwarber HR +240",prop:"PHI +118",from:"Yesterday they were -201 fade. Today they are plus. LEAN only."},
"2026-09-17|SD at COL":{side:"SD -168",stamp:"FADE",hr:"Hunter Goodman HR +260",prop:"Over 11.5",from:"Visitor juice at Coors stays a fade."},
"2026-09-17|BOS at TEX":{side:"TEX +120",stamp:"LEAN",hr:"Wyatt Langford HR +300",prop:"TEX +120",from:"Eovaldi night just cashed 7-3."},
"2026-09-17|MIN at LAA":{side:"LAA +112",stamp:"LEAN",hr:"Mike Trout HR +280",prop:"LAA +112",from:"MIN just beat NYY in 13. Do not smash the road chalk."}
};
let mlbSelected = MLB_TODAY;
function mlbStamp(s){
  const c = String(s||"LEAN").toUpperCase();
  const cls = c==="BET"?"bet":c==="FADE"?"fade":"lean";
  return `<span class="stamp ${cls}">${c}</span>`;
}
function mlbCard(g, iso){
  const [a,h,title,t,n,spread,total,ml,move,link,review]=g;
  const revHref = mlbReviewHref(link, review, title, iso);
  const post = MLB_POSTED[iso+"|"+title] || null;
  const tickets = post ? `<div class="note" style="width:100%;margin-top:6px">
    <div>${mlbStamp(post.stamp)} <b>${post.side}</b></div>
    <div>HR · ${post.hr}</div>
    <div>PROP · ${post.prop}</div>
    ${post.from ? `<div style="margin-top:4px;color:#d4a017">FROM LAST NIGHT · ${post.from}</div>` : ""}
  </div>` : "";
  return `<div class="g" style="flex-wrap:wrap">
    <img src="${MLB_LOGO(a)}"><img src="${MLB_LOGO(h)}">
    <b>${title}</b>
    <a class="full-link" href="${link}">FULL BREAKDOWN</a>
    ${revHref ? `<a class="full-link" href="${revHref}">REVIEW</a>` : ""}
    <span>${t} ${n||""}</span>
    <div class="dive-box" style="width:100%"><div class="mini">
      <div><b>SPREAD</b><span>${spread||"--"}</span></div>
      <div><b>TOTAL</b><span>${total||"--"}</span></div>
      <div><b>MONEYLINE</b><span>${ml||"--"}</span></div>
      <div><b>MOVE</b><span>${move||"--"}</span></div>
    </div></div>${tickets}</div>`;
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
  const dow = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
  let html = `<div style="display:flex;align-items:center;justify-content:space-between;margin:8px 0">
    <button type="button" id="mlb-prev"><</button>
    <b>${names[m]} ${y}</b>
    <button type="button" id="mlb-next">></button>
  </div>`;
  html += "<div class='weeks'>"+dow.map(d=>`<div class='note' style='text-align:center;font-size:10px'>${d}</div>`).join("")+"</div>";
  html += "<div class='weeks'>";
  for (let i=0;i<start.getDay();i++) html += "<div></div>";
  const dim = daysInMonth(y,m);
  for (let d=1;d<=dim;d++){
    const iso = y+"-"+String(m+1).padStart(2,"0")+"-"+String(d).padStart(2,"0");
    const has = MLB_GAMES[iso] ? " has" : "";
    const today = iso === MLB_TODAY ? " today" : "";
    html += `<button data-day="${iso}" class="${(has+today).trim()}">${d}</button>`;
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
function mlbOpenDay(){
  if (MLB_GAMES[MLB_TODAY]) return MLB_TODAY;
  const days = Object.keys(MLB_GAMES).sort();
  const future = days.filter(function(d){ return d >= MLB_TODAY; });
  if (future.length) return future[0];
  return days.length ? days[days.length - 1] : MLB_TODAY;
}
mlbDrawCal();
mlbShow(mlbOpenDay());
