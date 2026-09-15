const CFB_LOGO = id => "https://a.espncdn.com/i/teamlogos/ncaa/500/" + id + ".png";
const CFB_WEEK = 3;
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
function reviewLink(href, review){
  if (review) return review;
  if (href && href.indexOf("cfb-week-") === 0 && href.indexOf("?") < 0)
    return href.replace(".html", "-review.html");
  const m = href && href.match(/[?&]g=([^&]+)/);
  if (m) return "cfb-review.html?g=" + m[1];
  return "reviews.html";
}
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
  ["SAT SEPT 12",194,251,"#1 Ohio State at #4 Texas","FINAL TEX 24-23","TEX -1.5 / OSU +1.5","49.5","TEX -118 / OSU +100","cfb-week-2-osu-tex.html","cfb-week-2-osu-tex-review.html","OSU +1.5 WIN"],
  ["SAT SEPT 12",201,130,"#11 Oklahoma at Michigan","FINAL MICH 17-10","OU -5.5 / MICH +5.5","43.5","OU -205 / MICH +170","cfb-week-2-ou-mich.html","cfb-week-2-ou-mich-review.html","OU -5.5 LOSS"],
  ["SAT SEPT 12",333,96,"#12 Alabama at Kentucky","FINAL ALA 45-17","ALA -10 / UK +10","48.5","ALA -380 / UK +300","cfb-week-2-ala-uk.html","cfb-week-2-ala-uk-review.html","ALA -10 WIN"],
  ["SAT SEPT 12",245,9,"#10 Texas A&M vs Arizona State","FINAL TAMU 48-20","TAMU -14.5 / ASU +14.5","50.5","TAMU -700 / ASU +500","cfb-game.html?g=tamu-asu","cfb-week-2-tamu-asu-review.html","TAMU -14.5 WIN"],
  ["SAT SEPT 12",248,197,"#6 Oregon at Oklahoma State","FINAL OKST 39-31","ORE -23.5 / OKST +23.5","54.5","ORE heavy","cfb-game.html?g=ore-okst","cfb-week-2-ore-okst-review.html","ORE -23.5 LOSS"],
  ["SAT SEPT 12",61,98,"#2 Georgia vs W. Kentucky","FINAL UGA 70-20","UGA -40.5 / WKU +40.5","55.5","UGA heavy","cfb-game.html?g=uga-wku","cfb-week-2-uga-wku-review.html","UGA -40.5 WIN"],
  ["SAT SEPT 12",87,242,"#3 Notre Dame vs Rice","FINAL ND 52-0","ND -44.5 / RICE +44.5","55.5","ND heavy","cfb-game.html?g=nd-rice","cfb-week-2-nd-rice-review.html","ND -44.5 WIN"],
  ["SAT SEPT 12",84,47,"#5 Indiana vs Howard","FINAL IU 55-0","IU -57.5 / HOW +57.5","66.5","IU heavy","cfb-game.html?g=iu-how","cfb-week-2-iu-how-review.html","IU -57.5 LOSS"],
  ["SAT SEPT 12",2633,59,"#18 Tennessee at Georgia Tech","FINAL TENN 45-24","TENN -11.5 / GT +11.5","55.5","TENN -485 / GT +370","cfb-week-2-tenn-gt.html","cfb-week-2-tenn-gt-review.html","TENN -11.5 WIN"],
  ["SAT SEPT 12",2294,66,"#21 Iowa vs Iowa State","FINAL IOWA 16-13","IOWA -14 / ISU +14","40.5","IOWA -600 / ISU +440","cfb-week-2-iowa-isu.html","cfb-week-2-iowa-isu-review.html","IOWA -14 LOSS"],
  ["SAT SEPT 12",252,12,"#15 BYU vs Arizona","FINAL BYU 28-17","BYU -7 / ARIZ +7","48.5","BYU -270 / ARIZ +220","cfb-game.html?g=byu-ariz","cfb-week-2-byu-ariz-review.html","BYU -7 WIN"],
  ["SAT SEPT 12",2641,204,"#13 Texas Tech at Oregon State","FINAL TTU 35-24","TTU -25.5 / ORST +25.5","53.5","TTU heavy","cfb-game.html?g=ttu-orst","cfb-week-2-ttu-orst-review.html","TTU -25.5 LOSS"],
  ["SAT SEPT 12",213,218,"#16 Penn State at Temple","FINAL PSU 27-9","PSU -24.5 / TEM +24.5","50.5","PSU heavy","cfb-game.html?g=psu-tem","cfb-week-2-psu-tem-review.html","PSU -24.5 LOSS"],
  ["SAT SEPT 12",264,328,"#19 Washington vs Utah State","FINAL WASH 16-14","WASH -27.5 / USU +27.5","55.5","WASH heavy","cfb-game.html?g=wash-usu","cfb-week-2-wash-usu-review.html","WASH -27.5 LOSS"],
  ["SAT SEPT 12",254,8,"#20 Utah vs Arkansas","FINAL UTAH 43-10","UTAH -7 / ARK +7","54.5","UTAH -280 / ARK +230","cfb-game.html?g=utah-ark","cfb-week-2-utah-ark-review.html","UTAH -7 WIN"],
  ["SAT SEPT 12",30,309,"#14 USC vs Louisiana","FINAL USC 49-30","USC -21.5 / ULL +21.5","58.5","USC heavy","cfb-game.html?g=usc-ull","cfb-week-2-usc-ull-review.html","USC -21.5 LOSS"],
  ["SAT SEPT 12",99,234,"#8 LSU vs Louisiana Tech","FINAL LSU 45-14","LSU -35.5 / LT +35.5","55.5","LSU heavy","cfb-game.html?g=lsu-lt","cfb-week-2-lsu-lt-review.html","LSU -35.5 LOSS"],
  ["SAT SEPT 12",145,2429,"#9 Ole Miss vs Charlotte","FINAL MISS 41-9","MISS -47.5 / CHAR +47.5","61.5","MISS heavy","cfb-game.html?g=miss-char","cfb-week-2-miss-char-review.html","MISS -47.5 LOSS"],
  ["SAT SEPT 12",2567,302,"#17 SMU vs UC Davis","FINAL SMU 56-10","SMU -24.5 / UCD +24.5","58.5","SMU heavy","cfb-game.html?g=smu-ucd","cfb-week-2-smu-ucd-review.html","SMU -24.5 WIN"],
  ["SAT SEPT 12",248,2582,"#22 Houston vs Southern","FINAL HOU 77-6","HOU -51.5 / SOU +51.5","60.5","HOU heavy","cfb-game.html?g=hou-sou","cfb-week-2-hou-sou-review.html","HOU -51.5 WIN"]
],
3: [
  ["THU SEPT 17",183,221,"Syracuse at Pittsburgh","7:30 p.m. ET","PITT -6.5 / SYR +6.5","54.5","PITT -250 / SYR +205","cfb-game.html?g=syr-pitt","","OPEN"],
  ["FRI SEPT 18",2390,154,"#5 Miami at Wake Forest","7:30 p.m. ET","MIA -20.5 / WAKE +20.5","58.5","MIA heavy","cfb-game.html?g=mia-wake","","OPEN · fade juice"],
  ["FRI SEPT 18",248,2641,"#22 Houston at #13 Texas Tech","9:15 p.m. ET","HOU +7.5 / TTU -7.5","61.5","TTU -280 / HOU +230","cfb-game.html?g=hou-ttu","","OPEN"],
  ["SAT SEPT 19",61,8,"#2 Georgia at Arkansas","Noon ET ABC","UGA -25.5 / ARK +25.5","53.5","UGA heavy","cfb-game.html?g=uga-ark","","OPEN · fade juice"],
  ["SAT SEPT 19",2309,194,"Kent State at #6 Ohio State","Noon ET","KENT +52.5 / OSU -52.5","57.5","OSU heavy","cfb-game.html?g=kent-osu","","OPEN · fade juice"],
  ["SAT SEPT 19",2084,213,"Buffalo at #14 Penn State","Noon ET","BUFF +40.5 / PSU -40.5","48.5","PSU heavy","cfb-game.html?g=buff-psu","","OPEN · fade juice"],
  ["SAT SEPT 19",96,245,"Kentucky at #9 Texas A&M","3:30 p.m. ET ESPN","UK +16.5 / TAMU -16.5","48.5","TAMU -700 / UK +500","cfb-game.html?g=uk-tamu","","OPEN"],
  ["SAT SEPT 19",52,333,"Florida State at #10 Alabama","3:30 p.m. ET ABC","FSU +19.5 / ALA -19.5","52.5","ALA heavy","cfb-game.html?g=fsu-ala","","OPEN"],
  ["SAT SEPT 19",30,164,"#12 USC at Rutgers","3:30 p.m. ET CBS","USC -23.5 / RUTG +23.5","58.5","USC heavy","cfb-game.html?g=usc-rutg","","OPEN · fade juice"],
  ["SAT SEPT 19",2567,97,"#16 SMU at #23 Louisville","3:30 p.m. ET ESPN2","SMU +1.5 / LOU -1.5","56.5","LOU -118 / SMU +100","cfb-game.html?g=smu-lou","","OPEN"],
  ["SAT SEPT 19",99,145,"#7 LSU at #8 Ole Miss","7:30 p.m. ET ABC","LSU -2.5 / MISS +2.5","57.5","LSU -135 / MISS +114","cfb-game.html?g=lsu-miss","","OPEN"],
  ["SAT SEPT 19",127,87,"Michigan State at #3 Notre Dame","7:30 p.m. ET NBC","MSU +29.5 / ND -29.5","53.5","ND heavy","cfb-game.html?g=msu-nd","","OPEN · fade juice"],
  ["SAT SEPT 19",167,201,"New Mexico at #24 Oklahoma","7:30 p.m. ET ESPN2","UNM +22.5 / OU -22.5","52.5","OU heavy","cfb-game.html?g=unm-ou","","OPEN · fade juice"],
  ["SAT SEPT 19",252,36,"#11 BYU at Colorado State","7:30 p.m. ET CBS","BYU -18 / CSU +18","52.5","BYU -750 / CSU +520","cfb-game.html?g=byu-csu","","OPEN"],
  ["SAT SEPT 19",277,258,"West Virginia at #25 Virginia","7:30 p.m. ET ACCN","WVU +10.5 / UVA -10.5","54.5","UVA -380 / WVU +300","cfb-game.html?g=wvu-uva","","OPEN"],
  ["SAT SEPT 19",2636,251,"UTSA at #1 Texas","7:30 p.m. ET","UTSA +30 / TEX -30","58.5","TEX heavy","cfb-game.html?g=utsa-tex","","OPEN · fade juice"],
  ["SAT SEPT 19",249,2633,"Kennesaw State at #15 Tennessee","7:45 p.m. ET SECN","KENN +35.5 / TENN -35.5","58.5","TENN heavy","cfb-game.html?g=kenn-tenn","","OPEN · fade juice"]
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
  const revHref = reviewLink(href, review);
  const rev = `<a class="full-link" href="${revHref}">REVIEW</a>`;
  const tiles = `<div class="dive-box" style="width:100%"><div class="mini">
    <div><b>SPREAD</b><span>Current: ${spread}</span><span>Open: ${openSp}</span></div>
    <div><b>TOTAL</b><span>Current: ${total||"--"}</span><span>Open: ${openTot}</span></div>
    <div><b>MONEYLINE</b><span>Current: ${ml||"--"}</span><span>Open: ${openMl}</span></div>
    <div><b>MOVE</b><span>${mv}</span></div>
  </div></div>`;
  return `<div class="g" style="flex-wrap:wrap">${imgs}<b>${title}</b>${link}${rev}<span>${when}</span>${tiles}</div>`;
}
function cfbPickLabel(row){
  return row[3] + (row[4] && row[4] !== "FINAL" ? " · " + row[4] : "");
}
function fillCfbPick(week){
  const hold = document.getElementById("cfb-game-hold");
  const pick = document.getElementById("cfb-game-pick");
  const box = document.getElementById("cfb-slate");
  const list = CFB[week] || [];
  if (!pick || !hold) return;
  pick.innerHTML = '<option value="">Select a game</option>' +
    list.map(function(g,i){ return '<option value="'+i+'">'+cfbPickLabel(g)+'</option>'; }).join("");
  hold.style.display = "block";
  if (box) box.innerHTML = "";
  pick.onchange = function(){
    if (!box) return;
    const i = Number(pick.value);
    if (pick.value === "" || !list[i]) { box.innerHTML = ""; return; }
    box.innerHTML = cfbCard(list[i]);
  };
}
function showCfb(week){
  document.querySelectorAll("#cfb-week-btns button").forEach(function(b){
    b.classList.toggle("on", b.textContent === "Week "+week);
  });
  const box = document.getElementById("cfb-slate");
  if (!CFB[week]){
    const hold = document.getElementById("cfb-game-hold");
    if (hold) hold.style.display = "none";
    if (box) box.innerHTML = "<p class='note'>That week posts when the AP slate locks.</p>";
    return;
  }
  fillCfbPick(week);
}
const cfbBtns = document.getElementById("cfb-week-btns");
if (cfbBtns) {
  [1,2,3].forEach(function(i){
    const b=document.createElement("button");
    b.textContent="Week "+i;
    b.onclick=function(){
      if (b.classList.contains("on") && i !== CFB_WEEK){
        b.classList.remove("on");
        const hold = document.getElementById("cfb-game-hold");
        const pick = document.getElementById("cfb-game-pick");
        const box = document.getElementById("cfb-slate");
        if (hold) hold.style.display = "none";
        if (pick) pick.value = "";
        if (box) box.innerHTML = "";
        return;
      }
      showCfb(i);
    };
    cfbBtns.appendChild(b);
  });
  showCfb(CFB_WEEK);
}
