const MLB_LOGO = c => "https://a.espncdn.com/i/teamlogos/mlb/500/"+c+".png";
const MLB_TODAY = "2026-09-11";
function href(id){
  if (id==="nym-nyy") return "mlb-2026-09-11-nym-nyy.html";
  return "mlb-game.html?id="+id;
}
const MLB_GAMES = {
"2026-09-11":[
["pit","chc","PIT at CHC","2:20","Wrigley","CHC -193 / PIT +160","8","CHC -193 / PIT +160","Held -193",href("pit-chc")],
["col","det","COL at DET","6:40","Comerica","DET -187 / COL +155","8","DET -187 / COL +155","Held -187",href("col-det")],
["laa","wsh","LAA at WSH","6:45","Nationals Park","WSH -156 / LAA +132","7.5","WSH -156 / LAA +132","Held -156",href("laa-wsh")],
["nym","nyy","NYM at NYY","7:05","Yankee Stadium","NYY -137 / NYM +116","8","NYY -137 / NYM +116","Held -137",href("nym-nyy")],
["bal","tor","BAL at TOR","7:07","Rogers Centre","TOR -138 / BAL +118","8","TOR -138 / BAL +118","Held -138",href("bal-tor")],
["hou","tb","HOU at TB","7:10","Tropicana","TB -174 / HOU +146","7.5","TB -174 / HOU +146","Held -174",href("hou-tb")],
["kc","bos","KC at BOS","7:10","Fenway","BOS -206 / KC +172","8.5","BOS -206 / KC +172","Held -206",href("kc-bos")],
["lad","mia","LAD at MIA","7:10","loanDepot","LAD -208 / MIA +174","7.5","LAD -208 / MIA +174","Held -208",href("lad-mia")],
["phi","atl","PHI at ATL","7:15","Truist","ATL -187 / PHI +155","7","ATL -187 / PHI +155","Held -187",href("phi-atl")],
["cin","mil","CIN at MIL","7:45","AmFam / Apple TV","MIL -206 / CIN +172","8","MIL -206 / CIN +172","Held -206",href("cin-mil")],
["cle","min","CLE at MIN","8:10","Target Field","CLE -118 / MIN +100","7.5","CLE -118 / MIN +100","Held -118",href("cle-min")],
["chw","stl","CHW at STL","8:15","Busch","CHW -114 / STL -104","8","CHW -114 / STL -104","Held -114",href("chw-stl")],
["sea","oak","SEA at ATH","9:40","Sutter Health","SEA -168 / ATH +142","10","SEA -168 / ATH +142","Held -168",href("sea-oak")],
["tex","ari","TEX at ARI","9:40","Chase Field","ARI -118 / TEX +100","8.5","ARI -118 / TEX +100","Held -118",href("tex-ari")],
["sd","sf","SD at SF","10:15","Oracle / Apple TV","SD -149 / SF +126","8","SD -149 / SF +126","Held -149",href("sd-sf")]
]
};
function mlbCard(g){
  const [a,h,title,t,n,spread,total,ml,move,link]=g;
  return `<div class="g" style="flex-wrap:wrap">
    <img src="${MLB_LOGO(a)}"><img src="${MLB_LOGO(h)}">
    <b>${title}</b>
    <a class="full-link" href="${link}">FULL BREAKDOWN</a>
    <span>${t} ${n||""}</span>
    <div class="dive-box" style="width:100%">
      <div class="mini">
        <div><b>SPREAD</b><span>${spread||"--"}</span></div>
        <div><b>TOTAL</b><span>${total||"--"}</span></div>
        <div><b>MONEYLINE</b><span>${ml||"--"}</span></div>
        <div><b>MOVE</b><span>${move||"--"}</span></div>
      </div>
    </div>
  </div>`;
}
function mlbShow(iso){
  document.querySelectorAll("#mlb-cal button").forEach(b=>{
    b.classList.toggle("on", b.dataset.day===iso);
  });
  const list = MLB_GAMES[iso] || [];
  const box = document.getElementById("mlb-slate");
  if (!box) return;
  if (!list.length){ box.innerHTML = "<p class='note'>No slate stored for this date yet. Friday Sept 11 is live.</p>"; return; }
  box.innerHTML = `<div class="day">${iso}</div>` + list.map(mlbCard).join("");
}
(function(){
  const cal = document.getElementById("mlb-cal");
  if (!cal) return;
  const start = new Date(2026,8,1);
  const dow = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
  let html = "<div class='weeks' style='grid-template-columns:repeat(7,1fr);margin-bottom:8px'>"+dow.map(d=>`<div class='note' style='text-align:center;font-size:10px'>${d}</div>`).join("")+"</div>";
  html += "<div class='weeks' style='grid-template-columns:repeat(7,1fr)'>";
  const pad = start.getDay();
  for (let i=0;i<pad;i++) html += "<div></div>";
  for (let d=1;d<=30;d++){
    const iso = "2026-09-"+String(d).padStart(2,"0");
    html += `<button data-day="${iso}">${d}</button>`;
  }
  html += "</div>";
  cal.innerHTML = html;
  cal.querySelectorAll("button").forEach(b=> b.onclick = ()=> mlbShow(b.dataset.day));
  mlbShow(MLB_TODAY);
})();
