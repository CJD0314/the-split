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
  "cfb-week-2-miz-ku.html": {sp:"not confirmed", tot:"not confirmed", ml:"not confirmed", move:"final"},
  "cfb-week-3-syr-pitt.html": {sp:"PITT -6.5", tot:"54.5", ml:"not confirmed", move:"PITT -6.5 to -10.5"},
  "cfb-week-3-mia-wake.html": {sp:"MIA -19.5", tot:"50.5", ml:"MIA heavy", move:"held a 20-point road number"},
  "cfb-week-3-hou-ttu.html": {sp:"TTU -12.5", tot:"not confirmed", ml:"not confirmed", move:"TTU -12.5 to -7.5"},
  "cfb-week-3-uk-tamu.html": {sp:"TAMU -16.5", tot:"48.5", ml:"TAMU heavy", move:"held"},
  "cfb-week-3-fsu-ala.html": {sp:"ALA -19.5", tot:"52.5", ml:"ALA heavy", move:"held 19.5"},
  "cfb-week-3-smu-lou.html": {sp:"LOU -1.5", tot:"56.5", ml:"LOU -118 / SMU +100", move:"held a pickem"},
  "cfb-week-3-lsu-miss.html": {sp:"MISS -1.5", tot:"57.5", ml:"MISS favored at open", move:"flipped to LSU -3"},
  "cfb-week-3-byu-csu.html": {sp:"BYU -18", tot:"52.5", ml:"BYU heavy", move:"held a two-score road number"},
  "cfb-week-3-wvu-uva.html": {sp:"UVA -10.5", tot:"54.5", ml:"UVA -380 / WVU +300", move:"held 10.5 in Charlotte"},
  "cfb-week-3-utsa-tex.html": {sp:"TEX -29.5", tot:"57.5", ml:"TEX -6500 / UTSA +2000", move:"TEX -29.5 to -30.5"}
};
const CFB = {
1: [
  ["THU SEPT 3",254,16,"#21 Utah 66, Idaho 14","FINAL","UTAH -38.5","52.5","UTAH heavy","cfb-game.html?g=utah-idaho","cfb-review.html?g=utah-idaho","Cashed"]
],
2: [],
3: [
  ["THU SEPT 17",183,221,"Syracuse at Pittsburgh","7:30 p.m. ET ESPN","PITT -10.5 / SYR +10.5","51.5","PITT -380 / SYR +300","cfb-week-3-syr-pitt.html","","LEAN · PITT -10.5"],
  ["FRI SEPT 18",2390,154,"#5 Miami at Wake Forest","7:30 p.m. ET ESPN","MIA -20.5 / WAKE +20.5","55.5","MIA -1450 / WAKE +850","cfb-week-3-mia-wake.html","","FADE · 20-plus road"],
  ["FRI SEPT 18",248,2641,"#22 Houston at #13 Texas Tech","8:00 p.m. ET FOX","HOU +7.5 / TTU -7.5","52.5","TTU -280 / HOU +230","cfb-week-3-hou-ttu.html","","BET · HOU +7.5"],
  ["FRI SEPT 18",275,248,"Portland State at #21 Oregon","10:30 p.m. ET BTN","ORE -57.5 / PORT +57.5","67.5","ORE heavy","cfb-week-3-port-ore.html","","FADE · paycheck"],
  ["SAT SEPT 19",61,8,"#2 Georgia at Arkansas","Noon ET ABC","UGA -24.5 / ARK +24.5","54.5","UGA heavy","cfb-week-3-uga-ark.html","","FADE · 20-plus road"],
  ["SAT SEPT 19",2309,194,"Kent State at #6 Ohio State","Noon ET FOX","KENT +52.5 / OSU -52.5","59.5","OSU heavy","cfb-week-3-kent-osu.html","","FADE · paycheck"],
  ["SAT SEPT 19",2084,213,"Buffalo at #14 Penn State","Noon ET BTN","BUFF +41.5 / PSU -41.5","50.5","PSU heavy","cfb-week-3-buff-psu.html","","FADE · paycheck"],
  ["SAT SEPT 19",96,245,"Kentucky at #9 Texas A&M","3:30 p.m. ET ESPN","UK +16.5 / TAMU -16.5","50.5","TAMU -700 / UK +500","cfb-week-3-uk-tamu.html","","LEAN · TAMU -16.5"],
  ["SAT SEPT 19",52,333,"Florida State at #10 Alabama","3:30 p.m. ET ABC","FSU +19.5 / ALA -19.5","48.5","ALA heavy","cfb-week-3-fsu-ala.html","","FADE · 19.5 juice"],
  ["SAT SEPT 19",30,164,"#12 USC at Rutgers","3:30 p.m. ET CBS","USC -23.5 / RUTG +23.5","59.5","USC heavy","cfb-week-3-usc-rutg.html","","FADE · 20-plus road"],
  ["SAT SEPT 19",2567,97,"#16 SMU at #23 Louisville","3:30 p.m. ET ESPN2","SMU +1.5 / LOU -1.5","59.5","LOU -120 / SMU +100","cfb-week-3-smu-lou.html","","LEAN · SMU +1.5"],
  ["SAT SEPT 19",328,254,"Utah State at #17 Utah","3:30 p.m. ET FOX","USU +28.5 / UTAH -28.5","56.5","UTAH heavy","cfb-week-3-usu-utah.html","","FADE · 28-plus"],
  ["SAT SEPT 19",2638,130,"UTEP at #19 Michigan","3:30 p.m. ET BTN","UTEP +35.5 / MICH -35.5","49.5","MICH heavy","cfb-week-3-utep-mich.html","","FADE · paycheck"],
  ["SAT SEPT 19",98,84,"W. Kentucky at #4 Indiana","4:00 p.m. ET Peacock","WKU +44.5 / IU -44.5","60.5","IU heavy","cfb-week-3-wku-iu.html","","FADE · paycheck"],
  ["SAT SEPT 19",270,2294,"Northern Iowa at #18 Iowa","4:00 p.m. ET FS1","UNI +40.5 / IOWA -40.5","49.5","IOWA heavy","cfb-week-3-uni-iowa.html","","FADE · paycheck"],
  ["SAT SEPT 19",2653,142,"Troy at #20 Missouri","7:00 p.m. ET SECN+","TROY +26.5 / MIZ -26.5","49.5","MIZ heavy","cfb-week-3-troy-miz.html","","FADE · 26-plus"],
  ["SAT SEPT 19",99,145,"#7 LSU at #8 Ole Miss","7:30 p.m. ET ABC","LSU -3 / MISS +3","58.5","LSU -155 / MISS +130","cfb-week-3-lsu-miss.html","","LEAN · LSU -3"],
  ["SAT SEPT 19",127,87,"Michigan State at #3 Notre Dame","7:30 p.m. ET NBC","MSU +29.5 / ND -29.5","52.5","ND heavy","cfb-week-3-msu-nd.html","","FADE · 28-plus"],
  ["SAT SEPT 19",167,201,"New Mexico at #24 Oklahoma","7:30 p.m. ET ESPN2","UNM +22.5 / OU -22.5","46.5","OU heavy","cfb-week-3-unm-ou.html","","FADE · 20-plus"],
  ["SAT SEPT 19",252,36,"#11 BYU at Colorado State","7:30 p.m. ET CBS","BYU -17.5 / CSU +17.5","52.5","BYU -750 / CSU +520","cfb-week-3-byu-csu.html","","FADE · road 17.5"],
  ["SAT SEPT 19",277,258,"West Virginia vs #25 Virginia","7:30 p.m. ET ACCN","WVU +10.5 / UVA -10.5","53.5","UVA -380 / WVU +300","cfb-week-3-wvu-uva.html","","LEAN · WVU +10.5"],
  ["SAT SEPT 19",249,2633,"Kennesaw State at #15 Tennessee","7:45 p.m. ET SECN","KENN +35.5 / TENN -35.5","59.5","TENN heavy","cfb-week-3-kenn-tenn.html","","FADE · paycheck"],
  ["SAT SEPT 19",2636,251,"UTSA at #1 Texas","8:00 p.m. ET SECN+","UTSA +30.5 / TEX -30.5","58.5","TEX -5000 / UTSA +2200","cfb-week-3-utsa-tex.html","","FADE · 30-plus"]
]
};
function reviewLink(href, review){
  if (review) return review;
  return "";
}
const DIVE_READY = {
  "cfb-week-3-syr-pitt.html":1,"cfb-week-3-mia-wake.html":1,"cfb-week-3-hou-ttu.html":1,
  "cfb-week-3-uk-tamu.html":1,"cfb-week-3-fsu-ala.html":1,"cfb-week-3-smu-lou.html":1,
  "cfb-week-3-lsu-miss.html":1,"cfb-week-3-byu-csu.html":1,"cfb-week-3-wvu-uva.html":1,
  "cfb-week-3-port-ore.html":1,"cfb-week-3-uga-ark.html":1,"cfb-week-3-kent-osu.html":1,
  "cfb-week-3-buff-psu.html":1,"cfb-week-3-usc-rutg.html":1,"cfb-week-3-usu-utah.html":1,
  "cfb-week-3-utep-mich.html":1,"cfb-week-3-wku-iu.html":1,"cfb-week-3-uni-iowa.html":1,
  "cfb-week-3-troy-miz.html":1,"cfb-week-3-msu-nd.html":1,"cfb-week-3-unm-ou.html":1,
  "cfb-week-3-kenn-tenn.html":1,"cfb-week-3-utsa-tex.html":1
};
function cfbCard(row){
  const [day,a,h,title,when,spread,total,ml,href,review,move] = row;
  const src = CFB_OPEN[href] || {};
  const openSp = src.sp || "not confirmed";
  const openTot = src.tot || "not confirmed";
  const openMl = src.ml || "not confirmed";
  const mv = src.move || move || "not confirmed";
  const line = String(spread||"").split(" / ")[0];
  const dive = (href && DIVE_READY[href])
    ? '<a class="g-btn g-btn-on" href="'+href+'">FULL BREAKDOWN</a>'
    : (href ? '<a class="g-btn" href="'+href+'">GAME</a>' : "");
  const revHref = reviewLink(href, review);
  const rev = revHref ? '<a class="g-btn" href="'+revHref+'">REVIEW</a>' : "";
  const actions = (dive || rev) ? '<div class="g-actions">'+dive+rev+'</div>' : "";
  return '<details class="g-card">'
    + '<summary class="g-head"><img src="'+CFB_LOGO(a)+'" alt=""><img src="'+CFB_LOGO(h)+'" alt="">'
    + '<div class="g-copy"><b>'+title+'</b><span class="g-meta">'+line+' \u00b7 '+mv+'</span></div></summary>'
    + '<div class="g-more"><p class="note">'+day+' \u00b7 '+when+'</p>'+actions
    + '<div class="mini">'
    + '<div><b>SPREAD</b><span>'+spread+'</span><span>Open '+openSp+'</span></div>'
    + '<div><b>TOTAL</b><span>'+(total||"--")+'</span><span>Open '+openTot+'</span></div>'
    + '<div><b>MONEYLINE</b><span>'+(ml||"--")+'</span><span>Open '+openMl+'</span></div>'
    + '<div><b>STAMP</b><span>'+mv+'</span></div>'
    + '</div></div></details>';
}
function paintCfbWeek(week){
  document.querySelectorAll("#cfb-week-btns button").forEach(function(b){
    b.classList.toggle("on", Number(b.dataset.w)===week);
  });
  const head = document.getElementById("slate-head");
  if (head) head.textContent = "WEEK " + week;
  const box = document.getElementById("cfb-slate");
  if (!box) return;
  const list = CFB[week] || [];
  if (!list.length){
    box.innerHTML = "<p class='note'>That week posts when the AP slate locks.</p>";
    return;
  }
  box.innerHTML = list.map(cfbCard).join("");
}
const cfbBtns = document.getElementById("cfb-week-btns");
if (cfbBtns) {
  [1,2,3].forEach(function(i){
    const b=document.createElement("button");
    b.textContent="Week "+i;
    b.dataset.w = i;
    b.onclick=function(){ paintCfbWeek(i); };
    cfbBtns.appendChild(b);
  });
  paintCfbWeek(CFB_WEEK);
}
