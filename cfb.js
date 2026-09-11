const CFB_LOGO = id => "https://a.espncdn.com/i/teamlogos/ncaa/500/" + id + ".png";
const CFB_WEEK = 2;
const CFB = {
1: [
  ["THU SEPT 3",254,0,"#21 Utah 66, Idaho 14","FINAL","","","",""],
  ["SAT SEPT 5",194,0,"#1 Ohio State 56, Ball State 3","FINAL","","","",""],
  ["SAT SEPT 5",61,0,"#3 Georgia 63, Tennessee State 3","FINAL","","","",""],
  ["SAT SEPT 5",248,0,"#2 Oregon 34, Boise State 27","FINAL","","","",""],
  ["SAT SEPT 5",251,0,"#5 Texas 59, Texas State 7","FINAL","","","",""],
  ["SAT SEPT 5",99,0,"#11 LSU 51, Clemson 10","FINAL","","","",""],
  ["SAT SEPT 5",130,0,"Michigan 13, Western Michigan 12","FINAL","","","",""],
  ["SUN SEPT 6",145,97,"#9 Ole Miss def #24 Louisville (Nashville)","FINAL","","","",""]
],
2: [
  ["THU SEPT 10",2390,50,"#7 Miami 77, Florida A&M 7","FINAL","MIA -59.5","65","MIA -10000","Cashed"],
  ["FRI SEPT 11",142,2305,"#23 Missouri at Kansas","8:00 FOX","MIZ -5.5","51.5","MIZ -220 / KU +180","cfb-week-2-miz-ku.html"],
  ["FRI SEPT 11",97,0,"#24 Louisville vs Villanova","7:00 ACCN","LOU -36.5","56.5","LOU heavy",""],
  ["FRI SEPT 11",258,0,"#25 Virginia vs Norfolk State","7:00 ACCNX","UVA -45.5","55.5","UVA heavy",""],
  ["SAT SEPT 12",194,251,"#1 Ohio State at #4 Texas","7:30 ABC","TEX -1.5 / OSU +1.5","49.5","TEX -118 / OSU +100","cfb-week-2-osu-tex.html"],
  ["SAT SEPT 12",201,130,"#11 Oklahoma at Michigan","12:00 FOX","OU -3.5","44.5","OU -166 / MICH +140","cfb-week-2-ou-mich.html"],
  ["SAT SEPT 12",333,96,"#12 Alabama at Kentucky","3:30 ABC","ALA -10.5","48.5","ALA -380","cfb-week-2-ala-uk.html"],
  ["SAT SEPT 12",245,9,"#10 Texas A&M vs Arizona State","12:00 ABC","TA&M -13.5","52.5","TA&M -550",""],
  ["SAT SEPT 12",248,197,"#6 Oregon at Oklahoma State","12:00 ESPN","ORE -20.5","55.5","ORE heavy",""],
  ["SAT SEPT 12",61,98,"#2 Georgia vs W. Kentucky","12:45 SECN","UGA -35.5","58.5","UGA heavy",""],
  ["SAT SEPT 12",87,242,"#3 Notre Dame vs Rice","3:30 NBC","ND -28.5","51.5","ND heavy",""],
  ["SAT SEPT 12",84,0,"#5 Indiana vs Howard","12:00 BTN","IU -45.5","62.5","IU heavy",""],
  ["SAT SEPT 12",2633,59,"#18 Tennessee at Georgia Tech","7:00 ESPN","TENN -7.5","55.5","TENN -280","cfb-week-2-tenn-gt.html"],
  ["SAT SEPT 12",2294,66,"#21 Iowa vs Iowa State","7:30 NBC","IOWA -3","43.5","IOWA -155","cfb-week-2-iowa-isu.html"],
  ["SAT SEPT 12",252,12,"#15 BYU vs Arizona","3:30 FOX","BYU -6.5","50.5","BYU -250",""],
  ["SAT SEPT 12",2641,204,"#13 Texas Tech at Oregon State","7:30 CBS","TTU -17.5","54.5","TTU heavy",""],
  ["SAT SEPT 12",213,218,"#16 Penn State at Temple","12:00 ESPN2","PSU -24.5","52.5","PSU heavy",""],
  ["SAT SEPT 12",264,328,"#19 Washington vs Utah State","3:30 BTN","WASH -28.5","56.5","WASH heavy",""],
  ["SAT SEPT 12",254,8,"#20 Utah vs Arkansas","10:15 ESPN","UTAH -7","54.5","UTAH -280",""],
  ["SAT SEPT 12",30,309,"#14 USC vs Louisiana","11:00 ESPN","USC -21.5","58.5","USC heavy",""],
  ["SAT SEPT 12",99,234,"#8 LSU vs Louisiana Tech","7:30 SECN+","LSU -34.5","57.5","LSU heavy",""],
  ["SAT SEPT 12",145,2429,"#9 Ole Miss vs Charlotte","7:45 ESPN","MISS -31.5","60.5","MISS heavy",""],
  ["SAT SEPT 12",2567,0,"#17 SMU vs UC Davis","4:00 ACCNX","SMU -28.5","58.5","SMU heavy",""],
  ["SAT SEPT 12",248,0,"#22 Houston vs Southern","7:00 ESPN+","HOU -35.5","59.5","HOU heavy",""]
]
};
function cfbCard(row){
  const [day,a,h,title,when,spread,total,ml,href] = row;
  const imgs = `<img src="${CFB_LOGO(a)}">` + (h ? `<img src="${CFB_LOGO(h)}">` : "");
  const link = href ? `<a class="full-link" href="${href}">FULL BREAKDOWN</a>` : "";
  const tiles = (spread) ? `<div class="dive-box" style="width:100%"><div class="mini"><div><b>SPREAD</b><span>${spread}</span></div><div><b>TOTAL</b><span>${total||"--"}</span></div><div><b>MONEYLINE</b><span>${ml||"--"}</span></div><div><b>MOVE</b><span>${when}</span></div></div></div>` : "";
  return `<div class="g" style="flex-wrap:wrap">${imgs}<b>${title}</b>${link}<span>${when}</span>${tiles}</div>`;
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
