const CFB_LOGO = id => "https://a.espncdn.com/i/teamlogos/ncaa/500/" + id + ".png";
const CFB_WEEK = 2;
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
  ["THU SEPT 10",2390,50,"#7 Miami 77, Florida A&M 7","FINAL","MIA -59.5","65","MIA heavy","cfb-week-2-mia-famu.html","cfb-week-2-mia-famu-review.html","Cashed -59.5"],
  ["FRI SEPT 11",222,97,"#24 Louisville vs Villanova","7:00 ACCN","LOU -36.5 / VILL +36.5","56.5","LOU heavy / VILL +2400","cfb-week-2-lou-vill.html","","-37.5 to -35.5 to -36.5. Total held 56.5"],
  ["FRI SEPT 11",2450,258,"#25 Virginia vs Norfolk State","7:00 ACCNX","UVA -45.5 / NORF +45.5","55.5","UVA heavy / NORF +8000","cfb-week-2-uva-norf.html","","-43.5 to -45.5. Total 53.5 to 55.5"],
  ["FRI SEPT 11",142,2305,"#23 Missouri at Kansas","8:00 FOX","MIZ -5.5 / KU +5.5","50.5","MIZ -218 / KU +180","cfb-week-2-miz-ku.html","","-6.5 to -5.5. Total 50 to 50.5"],
  ["SAT SEPT 12",194,251,"#1 Ohio State at #4 Texas","7:30 ABC","TEX -1.5 / OSU +1.5","49.5","TEX -118 / OSU +100","cfb-week-2-osu-tex.html","","Spread held -1.5. Total 47.5 to 49.5"],
  ["SAT SEPT 12",201,130,"#11 Oklahoma at Michigan","12:00 FOX","OU -3.5 / MICH +3.5","44.5","OU -166 / MICH +140","cfb-week-2-ou-mich.html","","Held -3.5 / 44.5"],
  ["SAT SEPT 12",333,96,"#12 Alabama at Kentucky","3:30 ABC","ALA -10.5 / UK +10.5","48.5","ALA -380 / UK +300","cfb-week-2-ala-uk.html","","Held -10.5 / 48.5"],
  ["SAT SEPT 12",245,9,"#10 Texas A&M vs Arizona State","12:00 ABC","TA&M -13.5 / ASU +13.5","52.5","TA&M -550 / ASU +400","cfb-game.html?g=tamu-asu","","Held -13.5 / 52.5"],
  ["SAT SEPT 12",248,197,"#6 Oregon at Oklahoma State","12:00 ESPN","ORE -20.5 / OKST +20.5","55.5","ORE heavy","cfb-game.html?g=ore-okst","","Held -20.5 / 55.5"],
  ["SAT SEPT 12",61,98,"#2 Georgia vs W. Kentucky","12:45 SECN","UGA -35.5 / WKU +35.5","58.5","UGA heavy","cfb-game.html?g=uga-wku","","Held -35.5 / 58.5"],
  ["SAT SEPT 12",87,242,"#3 Notre Dame vs Rice","3:30 NBC","ND -28.5 / RICE +28.5","51.5","ND heavy","cfb-game.html?g=nd-rice","","Held -28.5 / 51.5"],
  ["SAT SEPT 12",84,47,"#5 Indiana vs Howard","12:00 BTN","IU -45.5 / HOW +45.5","62.5","IU heavy","cfb-game.html?g=iu-how","","Held -45.5 / 62.5"],
  ["SAT SEPT 12",2633,59,"#18 Tennessee at Georgia Tech","7:00 ESPN","TENN -7.5 / GT +7.5","55.5","TENN -280 / GT +230","cfb-week-2-tenn-gt.html","","Held -7.5 / 55.5"],
  ["SAT SEPT 12",2294,66,"#21 Iowa vs Iowa State","7:30 NBC","IOWA -3 / ISU +3","43.5","IOWA -155 / ISU +135","cfb-week-2-iowa-isu.html","","Held -3 / 43.5"],
  ["SAT SEPT 12",252,12,"#15 BYU vs Arizona","3:30 FOX","BYU -6.5 / ARIZ +6.5","50.5","BYU -250 / ARIZ +205","cfb-game.html?g=byu-ariz","","Held -6.5 / 50.5"],
  ["SAT SEPT 12",2641,204,"#13 Texas Tech at Oregon State","7:30 CBS","TTU -17.5 / ORST +17.5","54.5","TTU heavy","cfb-game.html?g=ttu-orst","","Held -17.5 / 54.5"],
  ["SAT SEPT 12",213,218,"#16 Penn State at Temple","12:00 ESPN2","PSU -24.5 / TEM +24.5","52.5","PSU heavy","cfb-game.html?g=psu-tem","","Held -24.5 / 52.5"],
  ["SAT SEPT 12",264,328,"#19 Washington vs Utah State","3:30 BTN","WASH -28.5 / USU +28.5","56.5","WASH heavy","cfb-game.html?g=wash-usu","","Held -28.5 / 56.5"],
  ["SAT SEPT 12",254,8,"#20 Utah vs Arkansas","10:15 ESPN","UTAH -7 / ARK +7","54.5","UTAH -280 / ARK +230","cfb-game.html?g=utah-ark","","Held -7 / 54.5"],
  ["SAT SEPT 12",30,309,"#14 USC vs Louisiana","11:00 ESPN","USC -21.5 / ULL +21.5","58.5","USC heavy","cfb-game.html?g=usc-ull","","Held -21.5 / 58.5"],
  ["SAT SEPT 12",99,234,"#8 LSU vs Louisiana Tech","7:30 SECN+","LSU -34.5 / LT +34.5","57.5","LSU heavy","cfb-game.html?g=lsu-lt","","Held -34.5 / 57.5"],
  ["SAT SEPT 12",145,2429,"#9 Ole Miss vs Charlotte","7:45 ESPN","MISS -31.5 / CHAR +31.5","60.5","MISS heavy","cfb-game.html?g=miss-char","","Held -31.5 / 60.5"],
  ["SAT SEPT 12",2567,302,"#17 SMU vs UC Davis","4:00 ACCNX","SMU -28.5 / UCD +28.5","58.5","SMU heavy","cfb-game.html?g=smu-ucd","","Held -28.5 / 58.5"],
  ["SAT SEPT 12",248,2582,"#22 Houston vs Southern","7:00 ESPN+","HOU -35.5 / SOU +35.5","59.5","HOU heavy","cfb-game.html?g=hou-sou","","Held -35.5 / 59.5"]
]
};
function cfbCard(row){
  const [day,a,h,title,when,spread,total,ml,href,review,move] = row;
  const imgs = `<img src="${CFB_LOGO(a)}">` + (h ? `<img src="${CFB_LOGO(h)}">` : "");
  const link = href ? `<a class="full-link" href="${href}">FULL BREAKDOWN</a>` : "";
  const rev = review ? `<a class="full-link" href="${review}">REVIEW</a>` : "";
  const tiles = (spread) ? `<div class="dive-box" style="width:100%"><div class="mini"><div><b>SPREAD</b><span>${spread}</span></div><div><b>TOTAL</b><span>${total||"--"}</span></div><div><b>MONEYLINE</b><span>${ml||"--"}</span></div><div><b>MOVE</b><span>${move||"Held"}</span></div></div></div>` : "";
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
