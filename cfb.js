const CFB_LOGO = id => "https://a.espncdn.com/i/teamlogos/ncaa/500/" + id + ".png";
const CFB_WEEK = 2;
const CFB_OPEN = {
  "cfb-week-2-osu-tex.html": {sp:"TEX -1.5", tot:"not confirmed", ml:"not confirmed", move:"held near TEX -1.5 / OSU +1.5"},
  "cfb-week-2-ou-mich.html": {sp:"OU -4.5 early Sunday", tot:"45.5", ml:"not confirmed", move:"OU -4.5 to -5.5"},
  "cfb-week-2-ala-uk.html": {sp:"ALA -10.5", tot:"not confirmed", ml:"not confirmed", move:"ALA -10.5 to -10"},
  "cfb-week-2-tenn-gt.html": {sp:"not confirmed", tot:"not confirmed", ml:"not confirmed", move:"not confirmed"},
  "cfb-week-2-iowa-isu.html": {sp:"IOWA -14.5", tot:"41.5", ml:"IOWA -630 / ISU +475", move:"IOWA -14.5 to -14"},
  "cfb-week-2-mia-famu.html": {sp:"not confirmed", tot:"not confirmed", ml:"not confirmed", move:"final"},
  "cfb-week-2-lou-vill.html": {sp:"not confirmed", tot:"not confirmed", ml:"not confirmed", move:"final"},
  "cfb-week-2-uva-norf.html": {sp:"not confirmed", tot:"not confirmed", ml:"not confirmed", move:"final"},
  "cfb-week-2-miz-ku.html": {sp:"not confirmed", tot:"not confirmed", ml:"not confirmed", move:"final"}
};
const CFB = {
1: [
  ["THU SEPT 3",254,16,"#21 Utah 66, Idaho 14","FINAL","UTAH -38.5","52.5","UTAH heavy","cfb-game.html?g=utah-idaho","cfb-review.html?g=utah-idaho","Cashed"],
  ["SAT SEPT 5",194,2050,"#1 Ohio State 56, Ball State 3","FINAL","OSU -50.5","54.5","OSU heavy","cfb-game.html?g=osu-ballst","cfb-review.html?g=osu-ballst","Cashed"],
  ["SAT SEPT 5",61,2635,"#2 Georgia 63, Tennessee State 3","FINAL","UGA -47.5","58.5","UGA heavy","cfb-game.html?g=uga-tnst","cfb-review.html?g=uga-tnst","Cashed"],
  ["SAT SEPT 5",248,68,"#2 Oregon 34, Boise State 27","FINAL","ORE -24.5","58.5","ORE heavy","cfb-game.html?g=ore-bois","cfb-review.html?g=ore-bois","-24.5 did not cash"],
  ["SAT SEPT 5",251,326,"#4 Texas 59, Texas State 7","FINAL","TEX -29.5","58.5","TEX heavy","cfb-game.html?g=tex-txst","cfb-review.html?g=tex-txst","Cashed"],
  ["SAT SEPT 5",99,228,"#8 LSU 51, Clemson 10","FINAL","LSU -10.5","54.5","LSU -380","cfb-game.html?g=lsu-clem","cfb-review.html?g=lsu-clem","Cashed -10.5"],
  ["SAT SEPT 5",130,2711,"Michigan 13, Western Michigan 12","FINAL","MICH -27.5","47.5","MICH heavy","cfb-game.html?g=mich-wmu","cfb-review.html?g=mich-wmu","-27.5 did not cash"],
  ["SUN SEPT 6",145,97,"#9 Ole Miss 41, #24 Louisville 38","FINAL","MISS -6.5","64.5","MISS -250","cfb-game.html?g=miss-lou","cfb-review.html?g=miss-lou","-6.5 did not cash"]
],
2: [
  ["THU SEPT 10",2390,50,"#7 Miami 77, Florida A&M 7","FINAL","MIA -59.5","65","MIA heavy","cfb-week-2-mia-famu.html","cfb-week-2-mia-famu-review.html","final"],
  ["FRI SEPT 11",222,97,"#24 Louisville 59, Villanova 13","FINAL","LOU -36.5 / VILL +36.5","56.5","LOU heavy","cfb-week-2-lou-vill.html","cfb-week-2-lou-vill-review.html","final"],
  ["FRI SEPT 11",2450,258,"#25 Virginia 59, Norfolk State 3","FINAL","UVA -45.5 / NORF +45.5","55.5","UVA heavy","cfb-week-2-uva-norf.html","cfb-week-2-uva-norf-review.html","final"],
  ["FRI SEPT 11",142,2305,"#23 Missouri 38, Kansas 21","FINAL","MIZ -5.5 / KU +5.5","50.5","MIZ -218 / KU +180","cfb-week-2-miz-ku.html","cfb-week-2-miz-ku-review.html","final"],
  ["SAT SEPT 12",194,251,"#1 Ohio State at #4 Texas","7:30 ABC","TEX -1.5 / OSU +1.5 (-108)","49.5","TEX -118 / OSU +100","cfb-week-2-osu-tex.html","","TEX -1.5 held"],
  ["SAT SEPT 12",201,130,"#11 Oklahoma at Michigan","12:00 FOX","OU -5.5 (-108) / MICH +5.5 (-112)","43.5","OU -205 / MICH +170","cfb-week-2-ou-mich.html","","OU -4.5 to -5.5"],
  ["SAT SEPT 12",333,96,"#12 Alabama at Kentucky","3:30 ABC","ALA -10 (-110) / UK +10 (-110)","48.5","ALA -380 / UK +300","cfb-week-2-ala-uk.html","","ALA -10.5 to -10"],
  ["SAT SEPT 12",245,9,"#10 Texas A&M vs Arizona State","12:00 ABC","TAMU -14.5 (-108) / ASU +14.5","50.5","TAMU -700 / ASU +500","cfb-game.html?g=tamu-asu","","not confirmed"],
  ["SAT SEPT 12",248,197,"#6 Oregon at Oklahoma State","12:00 ESPN","ORE -23.5 (-108) / OKST +23.5","54.5","ORE heavy","cfb-game.html?g=ore-okst","","not confirmed"],
  ["SAT SEPT 12",61,98,"#2 Georgia vs W. Kentucky","12:45 SECN","UGA -40.5 / WKU +40.5","55.5","UGA heavy","cfb-game.html?g=uga-wku","","not confirmed"],
  ["SAT SEPT 12",87,242,"#3 Notre Dame vs Rice","3:30 NBC","ND -44.5 / RICE +44.5","55.5","ND heavy","cfb-game.html?g=nd-rice","","not confirmed"],
  ["SAT SEPT 12",84,47,"#5 Indiana vs Howard","12:00 BTN","IU -57.5 / HOW +57.5","66.5","IU heavy","cfb-game.html?g=iu-how","","not confirmed"],
  ["SAT SEPT 12",2633,59,"#18 Tennessee at Georgia Tech","7:00 ESPN","TENN -11.5 / GT +11.5","55.5","TENN -485 / GT +370","cfb-week-2-tenn-gt.html","","not confirmed"],
  ["SAT SEPT 12",2294,66,"#21 Iowa vs Iowa State","7:30 NBC","IOWA -14 (-105) / ISU +14 (-115)","40.5","IOWA -600 / ISU +440","cfb-week-2-iowa-isu.html","","IOWA -14.5 to -14"],
  ["SAT SEPT 12",252,12,"#15 BYU vs Arizona","3:30 FOX","BYU -7 (-108) / ARIZ +7","48.5","BYU -270 / ARIZ +220","cfb-game.html?g=byu-ariz","","not confirmed"],
  ["SAT SEPT 12",2641,204,"#13 Texas Tech at Oregon State","7:30 CBS","TTU -25.5 / ORST +25.5","53.5","TTU heavy","cfb-game.html?g=ttu-orst","","not confirmed"],
  ["SAT SEPT 12",213,218,"#16 Penn State at Temple","12:00 ESPN2","PSU -24.5 / TEM +24.5","50.5","PSU heavy","cfb-game.html?g=psu-tem","","not confirmed"],
  ["SAT SEPT 12",264,328,"#19 Washington vs Utah State","3:30 BTN","WASH -27.5 / USU +27.5","55.5","WASH heavy","cfb-game.html?g=wash-usu","","not confirmed"],
  ["SAT SEPT 12",254,8,"#20 Utah vs Arkansas","10:15 ESPN","UTAH -7 / ARK +7","54.5","UTAH -280 / ARK +230","cfb-game.html?g=utah-ark","","not confirmed"],
  ["SAT SEPT 12",30,309,"#14 USC vs Louisiana","11:00 ESPN","USC -21.5 / ULL +21.5","58.5","USC heavy","cfb-game.html?g=usc-ull","","not confirmed"],
  ["SAT SEPT 12",99,234,"#8 LSU vs Louisiana Tech","7:30 SECN+","LSU -35.5 (-102) / LT +35.5","55.5","LSU heavy","cfb-game.html?g=lsu-lt","","not confirmed"],
  ["SAT SEPT 12",145,2429,"#9 Ole Miss vs Charlotte","7:45 ESPN","MISS -47.5 / CHAR +47.5","61.5","MISS heavy","cfb-game.html?g=miss-char","","not confirmed"],
  ["SAT SEPT 12",2567,302,"#17 SMU vs UC Davis","4:00 ACCNX","SMU -24.5 / UCD +24.5","58.5","SMU heavy","cfb-game.html?g=smu-ucd","","not confirmed"],
  ["SAT SEPT 12",248,2582,"#22 Houston vs Southern","7:00 ESPN+","HOU -51.5 / SOU +51.5","60.5","HOU heavy","cfb-game.html?g=hou-sou","","not confirmed"]
]
};
function cfbCard(row){
  const [day,a,h,title,when,spread,total,ml,href,review,move] = row;
  const src = CFB_OPEN[href] || {};
  const openSp = src.sp || "not confirmed";
  const openTot = src.tot || "not confirmed";
  const openMl = src.ml || "not confirmed";
  const mv = src.move || move || "not confirmed";
  const imgs = `<img src="${CFB_LOGO(a)}">` + (h ? `<img src="${CFB_LOGO(h)}">` : "");
  const link = href ? `<a class="full-link" href="${href}">FULL BREAKDOWN</a>` : "";
  const rev = review ? `<a class="full-link" href="${review}">REVIEW</a>` : "";
  const tiles = `<div class="dive-box" style="width:100%"><div class="mini">
    <div><b>SPREAD</b><span>Current: ${spread}</span><span>Open: ${openSp}</span></div>
    <div><b>TOTAL</b><span>Current: ${total||"--"}</span><span>Open: ${openTot}</span></div>
    <div><b>MONEYLINE</b><span>Current: ${ml||"--"}</span><span>Open: ${openMl}</span></div>
    <div><b>MOVE</b><span>${mv}</span></div>
  </div></div>`;
  return `<div class="g" style="flex-wrap:wrap">${imgs}<b>${title}</b>${link}${rev}<span>${when}</span>${tiles}</div>`;
}
function showCfb(week){
  document.querySelectorAll("#cfb-week-btns button").forEach((b,i)=> b.classList.toggle("on", i+1===week));
  const list = CFB[week];
  const box = document.getElementById("cfb-slate");
  if (!box) return;
  if (!list) { box.innerHTML = "<p class='note'>Top 25 slate posts when that week's AP games lock. Weeks 3-10 reserved.</p>"; return; }
  let html="", last="";
  for (const g of list){
    if (g[0]!==last){ html += `<div class="day">${g[0]}</div>`; last=g[0]; }
    html += cfbCard(g);
  }
  box.innerHTML = html;
}
const cfbBtns = document.getElementById("cfb-week-btns");
if (cfbBtns) {
  for (let i=1;i<=10;i++){
    const b=document.createElement("button");
    b.textContent="Week "+i;
    b.onclick=()=>showCfb(i);
    cfbBtns.appendChild(b);
  }
  showCfb(CFB_WEEK);
}
