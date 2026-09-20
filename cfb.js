const CFB_LOGO = id => "https://a.espncdn.com/i/teamlogos/ncaa/500/" + id + ".png";
const CFB_WEEK = 3;
const CFB_OPEN = {
  "cfb-week-3-syr-pitt.html": {sp:"PITT -6.5", tot:"54.5", ml:"not confirmed", move:"LEAN WIN · 27-13"},
  "cfb-week-3-mia-wake.html": {sp:"MIA -19.5", tot:"50.5", ml:"MIA heavy", move:"FADE WIN · 33-20"},
  "cfb-week-3-hou-ttu.html": {sp:"TTU -12.5", tot:"not confirmed", ml:"not confirmed", move:"BET WIN · 28-26"},
  "cfb-week-3-port-ore.html": {sp:"ORE -57.5", tot:"67.5", ml:"ORE heavy", move:"FADE LOSS · 84-0"},
  "cfb-week-3-uga-ark.html": {sp:"UGA -24.5", tot:"54.5", ml:"UGA heavy", move:"FADE LOSS · 45-17"},
  "cfb-week-3-kent-osu.html": {sp:"OSU -52.5", tot:"59.5", ml:"OSU heavy", move:"FADE LOSS · 59-3"},
  "cfb-week-3-buff-psu.html": {sp:"PSU -41.5", tot:"50.5", ml:"PSU heavy", move:"FADE LOSS · 55-13"},
  "cfb-week-3-uk-tamu.html": {sp:"TAMU -16.5", tot:"48.5", ml:"TAMU heavy", move:"LEAN LOSS · 31-21"},
  "cfb-week-3-fsu-ala.html": {sp:"ALA -19.5", tot:"52.5", ml:"ALA heavy", move:"FADE WIN · 50-36"},
  "cfb-week-3-usc-rutg.html": {sp:"USC -23.5", tot:"59.5", ml:"USC heavy", move:"FADE WIN · 42-35"},
  "cfb-week-3-smu-lou.html": {sp:"LOU -1.5", tot:"56.5", ml:"LOU -118 / SMU +100", move:"LEAN LOSS · 41-31"},
  "cfb-week-3-usu-utah.html": {sp:"UTAH -28.5", tot:"56.5", ml:"UTAH heavy", move:"FADE LOSS · 33-0"},
  "cfb-week-3-utep-mich.html": {sp:"MICH -34.5", tot:"49.5", ml:"MICH heavy", move:"FADE LOSS · 52-17"},
  "cfb-week-3-wku-iu.html": {sp:"IU -44.5", tot:"60.5", ml:"IU heavy", move:"FADE WIN · 38-0"},
  "cfb-week-3-uni-iowa.html": {sp:"IOWA -38.5", tot:"49.5", ml:"IOWA heavy", move:"FADE LOSS · 55-0"},
  "cfb-week-3-troy-miz.html": {sp:"MIZ -27.5", tot:"50.5", ml:"MIZ heavy", move:"FADE WIN · 27-17"},
  "cfb-week-3-lsu-miss.html": {sp:"MISS -1.5", tot:"57.5", ml:"MISS favored at open", move:"LEAN LOSS · 32-24"},
  "cfb-week-3-msu-nd.html": {sp:"ND -29", tot:"52.5", ml:"ND heavy", move:"FADE WIN · 27-10"},
  "cfb-week-3-unm-ou.html": {sp:"OU -21.5", tot:"45.5", ml:"OU heavy", move:"FADE WIN · 14-6"},
  "cfb-week-3-byu-csu.html": {sp:"BYU -18", tot:"52.5", ml:"BYU heavy", move:"FADE LOSS · 41-23"},
  "cfb-week-3-wvu-uva.html": {sp:"UVA -10.5", tot:"54.5", ml:"UVA -380 / WVU +300", move:"LEAN WIN · 38-27"},
  "cfb-week-3-kenn-tenn.html": {sp:"TENN -35.5", tot:"60.5", ml:"TENN heavy", move:"FADE WIN · 42-9"},
  "cfb-week-3-utsa-tex.html": {sp:"TEX -29.5", tot:"57.5", ml:"TEX heavy", move:"FADE WIN · 30-6"}
};
const CFB = {
1: [
  ["THU SEPT 3",254,16,"#21 Utah 66, Idaho 14","FINAL","UTAH -38.5","52.5","UTAH heavy","cfb-game.html?g=utah-idaho","cfb-review.html?g=utah-idaho","Cashed"]
],
2: [],
3: [
  ["THU SEPT 17",183,221,"Pitt 27, Syracuse 13","FINAL","PITT -10.5 / SYR +10.5","51.5","PITT -380 / SYR +300","cfb-week-3-syr-pitt.html","cfb-week-3-syr-pitt-review.html","LEAN WIN"],
  ["FRI SEPT 18",2390,154,"Miami 33, Wake Forest 20","FINAL","MIA -20.5 / WAKE +20.5","55.5","MIA -1450 / WAKE +850","cfb-week-3-mia-wake.html","cfb-week-3-mia-wake-review.html","FADE WIN"],
  ["FRI SEPT 18",248,2641,"Texas Tech 28, Houston 26","FINAL","HOU +7.5 / TTU -7.5","52.5","TTU -280 / HOU +230","cfb-week-3-hou-ttu.html","cfb-week-3-hou-ttu-review.html","BET WIN"],
  ["FRI SEPT 18",275,248,"Oregon 84, Portland State 0","FINAL","ORE -58.5 / PORT +58.5","71.5","ORE heavy","cfb-week-3-port-ore.html","cfb-week-3-port-ore-review.html","FADE LOSS"],
  ["SAT SEPT 19",61,8,"Georgia 45, Arkansas 17","FINAL · Noon ET","UGA -24.5 / ARK +24.5","54.5","UGA heavy","cfb-week-3-uga-ark.html","cfb-week-3-uga-ark-review.html","FADE LOSS"],
  ["SAT SEPT 19",2309,194,"Ohio State 59, Kent State 3","FINAL · Noon ET","KENT +52.5 / OSU -52.5","59.5","OSU heavy","cfb-week-3-kent-osu.html","cfb-week-3-kent-osu-review.html","FADE LOSS"],
  ["SAT SEPT 19",2084,213,"Penn State 55, Buffalo 13","FINAL · Noon ET","BUFF +41.5 / PSU -41.5","50.5","PSU heavy","cfb-week-3-buff-psu.html","cfb-week-3-buff-psu-review.html","FADE LOSS"],
  ["SAT SEPT 19",96,245,"Kentucky 31, Texas A&M 21","FINAL · 3:30 ET","UK +16.5 / TAMU -16.5","50.5","TAMU -700 / UK +500","cfb-week-3-uk-tamu.html","cfb-week-3-uk-tamu-review.html","LEAN LOSS"],
  ["SAT SEPT 19",52,333,"Alabama 50, Florida State 36","FINAL · 3:30 ET","FSU +19.5 / ALA -19.5","48.5","ALA heavy","cfb-week-3-fsu-ala.html","cfb-week-3-fsu-ala-review.html","FADE WIN"],
  ["SAT SEPT 19",30,164,"USC 42, Rutgers 35","FINAL · 3:30 ET","USC -23.5 / RUTG +23.5","59.5","USC heavy","cfb-week-3-usc-rutg.html","cfb-week-3-usc-rutg-review.html","FADE WIN"],
  ["SAT SEPT 19",2567,97,"Louisville 41, SMU 31","FINAL · 3:30 ET","SMU +1.5 / LOU -1.5","59.5","LOU -120 / SMU +100","cfb-week-3-smu-lou.html","cfb-week-3-smu-lou-review.html","LEAN LOSS"],
  ["SAT SEPT 19",328,254,"Utah 33, Utah State 0","FINAL · 3:30 ET","USU +28.5 / UTAH -28.5","56.5","UTAH heavy","cfb-week-3-usu-utah.html","cfb-week-3-usu-utah-review.html","FADE LOSS"],
  ["SAT SEPT 19",2638,130,"Michigan 52, UTEP 17","FINAL · 3:30 ET","UTEP +35.5 / MICH -35.5","49.5","MICH heavy","cfb-week-3-utep-mich.html","cfb-week-3-utep-mich-review.html","FADE LOSS"],
  ["SAT SEPT 19",98,84,"Indiana 38, W. Kentucky 0","FINAL · 4:00 ET","WKU +44.5 / IU -44.5","60.5","IU heavy","cfb-week-3-wku-iu.html","cfb-week-3-wku-iu-review.html","FADE WIN"],
  ["SAT SEPT 19",246,229,"Iowa 55, Northern Iowa 0","FINAL · 4:00 ET","UNI +38.5 / IOWA -38.5","49.5","IOWA heavy","cfb-week-3-uni-iowa.html","cfb-week-3-uni-iowa-review.html","FADE LOSS"],
  ["SAT SEPT 19",2653,142,"Missouri 27, Troy 17","FINAL · 7:00 ET","TROY +27.5 / MIZ -27.5","50.5","MIZ heavy","cfb-week-3-troy-miz.html","cfb-week-3-troy-miz-review.html","FADE WIN"],
  ["SAT SEPT 19",99,145,"Ole Miss 32, LSU 24","FINAL · 7:30 ET","LSU -3 / MISS +3","58.5","LSU -155 / MISS +130","cfb-week-3-lsu-miss.html","cfb-week-3-lsu-miss-review.html","LEAN LOSS"],
  ["SAT SEPT 19",127,87,"Notre Dame 27, Michigan State 10","FINAL · 7:30 ET","MSU +29 / ND -29","52.5","ND heavy","cfb-week-3-msu-nd.html","cfb-week-3-msu-nd-review.html","FADE WIN"],
  ["SAT SEPT 19",167,201,"Oklahoma 14, New Mexico 6","FINAL · 7:30 ET","UNM +21.5 / OU -21.5","45.5","OU heavy","cfb-week-3-unm-ou.html","cfb-week-3-unm-ou-review.html","FADE WIN"],
  ["SAT SEPT 19",252,36,"BYU 41, Colorado State 23","FINAL · 7:30 ET","BYU -17.5 / CSU +17.5","52.5","BYU -1100 / CSU +760","cfb-week-3-byu-csu.html","cfb-week-3-byu-csu-review.html","FADE LOSS"],
  ["SAT SEPT 19",277,258,"West Virginia 38, Virginia 27","FINAL · 7:30 ET","WVU +10.5 / UVA -10.5","53.5","UVA -420 / WVU +320","cfb-week-3-wvu-uva.html","cfb-week-3-wvu-uva-review.html","LEAN WIN"],
  ["SAT SEPT 19",338,2633,"Tennessee 42, Kennesaw State 9","FINAL · 7:45 ET","KENN +35.5 / TENN -35.5","60.5","TENN heavy","cfb-week-3-kenn-tenn.html","cfb-week-3-kenn-tenn-review.html","FADE WIN"],
  ["SAT SEPT 19",2636,251,"Texas 30, UTSA 6","FINAL · 8:00 ET","UTSA +30.5 / TEX -30.5","58.5","TEX -5000 / UTSA +2200","cfb-week-3-utsa-tex.html","cfb-week-3-utsa-tex-review.html","FADE WIN"]
]
};
function reviewLink(href, review){
  if (review) return review;
  if (href && /cfb-week-3-/.test(href)) return href.replace(".html", "-review.html");
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
function kickSort(when, day){
  const d = String(day||"").toUpperCase();
  let base = 0;
  if (d.indexOf("THU") === 0) base = 0;
  else if (d.indexOf("FRI") === 0) base = 10000;
  else if (d.indexOf("SAT") === 0) base = 20000;
  else if (d.indexOf("SUN") === 0) base = 30000;
  else base = 40000;
  const w = String(when||"").toUpperCase();
  const rest = w.replace(/^FINAL\s*[\u00b7\-]\s*/, "");
  if (rest.indexOf("NOON") === 0) return base + 12*60;
  const m = rest.match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/);
  if (!m) return base + (w.indexOf("FINAL")===0 ? 0 : 9999);
  let h = parseInt(m[1],10);
  const min = parseInt(m[2],10);
  const ap = m[3] || "PM";
  if (ap === "PM" && h < 12) h += 12;
  if (ap === "AM" && h === 12) h = 0;
  return base + h*60 + min;
}
function cfbCard(row){
  const [day,a,h,title,when,spread,total,ml,href,review,move] = row;
  const src = CFB_OPEN[href] || {};
  const openSp = src.sp || "not confirmed";
  const openTot = src.tot || "not confirmed";
  const openMl = src.ml || "not confirmed";
  const mv = src.move || move || "not confirmed";
  const line = String(spread||"").split(" / ")[0];
  const dive = (href && DIVE_READY[href])
    ? '<a class="g-btn" href="'+href+'">FULL BREAKDOWN</a>'
    : (href ? '<a class="g-btn" href="'+href+'">GAME</a>' : "");
  const revHref = reviewLink(href, review);
  const rev = revHref ? '<a class="g-btn g-btn-on" href="'+revHref+'">REVIEW</a>' : "";
  const actions = (dive || rev) ? '<div class="g-actions">'+dive+rev+'</div>' : "";
  return '<details class="g-card">'
    + '<summary class="g-head"><img src="'+CFB_LOGO(a)+'" alt=""><img src="'+CFB_LOGO(h)+'" alt="">'
    + '<div class="g-copy"><b>'+title+'</b><span class="g-meta">'+when+' · '+line+' · '+mv+'</span></div></summary>'
    + '<div class="g-more"><p class="note">'+day+' · '+when+'</p>'+actions
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
  const list = (CFB[week] || []).slice().sort(function(a,b){
    return kickSort(a[4], a[0]) - kickSort(b[4], b[0]);
  });
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
