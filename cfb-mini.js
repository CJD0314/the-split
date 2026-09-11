const LOGO = id => "https://a.espncdn.com/i/teamlogos/ncaa/500/"+id+".png";
const GAMES = {
"mia-famu":{title:"No. 7 Miami vs Florida A&M",away:2390,home:50,awayN:"Miami",homeN:"Florida A&M",meta:"Thursday, Sept. 10, 2026 | Hard Rock Stadium",spread:"MIA -59.5",total:"65",ml:"MIA heavy",move:"FINAL 77-7",note:"Paycheck game. Hurricanes 77-7. Cover was never the question.",bet:"Miami -59.5",final:"MIA 77 FAMU 7",result:"WIN"},
"tamu-asu":{title:"No. 10 Texas A&M vs Arizona State",away:9,home:245,awayN:"Arizona State",homeN:"Texas A&M",meta:"Saturday, Sept. 12, 2026 | 12:00 p.m. ET | ABC",spread:"TA&M -13.5 / ASU +13.5",total:"52.5",ml:"TA&M -550 / ASU +400",move:"Home favorite double digits",note:"First real look for both after cupcakes. 13.5 is a lot for Week 2.",bet:"Arizona State +13.5"},
"ore-okst":{title:"No. 6 Oregon at Oklahoma State",away:248,home:197,awayN:"Oregon",homeN:"Oklahoma State",meta:"Saturday, Sept. 12, 2026 | 12:00 p.m. ET | ESPN",spread:"ORE -20.5 / OKST +20.5",total:"55.5",ml:"ORE heavy",move:"Oregon slipped to No. 6 after Boise State 34-27",note:"Ducks as a 25.5 favorite barely survived Boise. 20.5 on the road is the hangover number.",bet:"Oklahoma State +20.5"},
"uga-wku":{title:"No. 2 Georgia vs Western Kentucky",away:98,home:61,awayN:"Western Kentucky",homeN:"Georgia",meta:"Saturday, Sept. 12, 2026 | 12:45 p.m. ET | SECN",spread:"UGA -35.5",total:"58.5",ml:"UGA heavy",move:"Maintenance",note:"Georgia 63-3 in the opener. This is whether the ones play a half.",bet:"Georgia -35.5"},
"nd-rice":{title:"No. 3 Notre Dame vs Rice",away:242,home:87,awayN:"Rice",homeN:"Notre Dame",meta:"Saturday, Sept. 12, 2026 | 3:30 p.m. ET | NBC",spread:"ND -28.5",total:"51.5",ml:"ND heavy",move:"Home favorite",note:"Irish maintenance before the real part of the slate.",bet:"Notre Dame -28.5"},
"iu-how":{title:"No. 5 Indiana vs Howard",away:47,home:84,awayN:"Howard",homeN:"Indiana",meta:"Saturday, Sept. 12, 2026 | 12:00 p.m. ET | BTN",spread:"IU -45.5",total:"62.5",ml:"IU heavy",move:"Defending champ vs FCS",note:"Same FCS-cover problem as Virginia. Indiana should win big.",bet:"Indiana -45.5"},
"byu-ariz":{title:"No. 15 BYU vs Arizona",away:12,home:252,awayN:"Arizona",homeN:"BYU",meta:"Saturday, Sept. 12, 2026 | 3:30 p.m. ET | FOX",spread:"BYU -6.5 / ARIZ +6.5",total:"50.5",ml:"BYU -250 / ARIZ +205",move:"Home favorite",note:"Actual game. 6.5 is fade-able if Arizona's opener was clean.",bet:"Arizona +6.5"},
"ttu-orst":{title:"No. 13 Texas Tech at Oregon State",away:2641,home:204,awayN:"Texas Tech",homeN:"Oregon State",meta:"Saturday, Sept. 12, 2026 | 7:30 p.m. ET | CBS",spread:"TTU -17.5",total:"54.5",ml:"TTU heavy",move:"Road favorite two scores plus",note:"Beavers 0-1. Tech should win. 17.5 on the road is the number.",bet:"Oregon State +17.5"},
"psu-tem":{title:"No. 16 Penn State at Temple",away:213,home:218,awayN:"Penn State",homeN:"Temple",meta:"Saturday, Sept. 12, 2026 | 12:00 p.m. ET | ESPN2",spread:"PSU -24.5",total:"52.5",ml:"PSU heavy",move:"Road favorite",note:"Maintenance in Philly.",bet:"Penn State -24.5"},
"wash-usu":{title:"No. 19 Washington vs Utah State",away:328,home:264,awayN:"Utah State",homeN:"Washington",meta:"Saturday, Sept. 12, 2026 | 3:30 p.m. ET | BTN",spread:"WASH -28.5",total:"56.5",ml:"WASH heavy",move:"Home favorite",note:"Huskies get-right after the opener.",bet:"Washington -28.5"},
"utah-ark":{title:"No. 20 Utah vs Arkansas",away:8,home:254,awayN:"Arkansas",homeN:"Utah",meta:"Saturday, Sept. 12, 2026 | 10:15 p.m. ET | ESPN",spread:"UTAH -7 / ARK +7",total:"54.5",ml:"UTAH -280 / ARK +230",move:"Night game",note:"Actual SEC/Big 12 style game at 7. Home favorite a touchdown.",bet:"Arkansas +7"},
"usc-ull":{title:"No. 14 USC vs Louisiana",away:309,home:30,awayN:"Louisiana",homeN:"USC",meta:"Saturday, Sept. 12, 2026 | 11:00 p.m. ET | ESPN",spread:"USC -21.5",total:"58.5",ml:"USC heavy",move:"Late window. USC 2-0",note:"Trojans already 2-0. Maintenance.",bet:"USC -21.5"},
"lsu-lt":{title:"No. 8 LSU vs Louisiana Tech",away:234,home:99,awayN:"Louisiana Tech",homeN:"LSU",meta:"Saturday, Sept. 12, 2026 | 7:30 p.m. ET | SECN+",spread:"LSU -34.5",total:"57.5",ml:"LSU heavy",move:"Kiffin after 51-10 over Clemson",note:"Get-right only if the ones play. 34.5 is a lot.",bet:"LSU -34.5"},
"miss-char":{title:"No. 9 Ole Miss vs Charlotte",away:2429,home:145,awayN:"Charlotte",homeN:"Ole Miss",meta:"Saturday, Sept. 12, 2026 | 7:45 p.m. ET | ESPN",spread:"MISS -31.5",total:"60.5",ml:"MISS heavy",move:"After 41-38 over Louisville",note:"Rebels just survived Louisville. This should be a half.",bet:"Ole Miss -31.5"},
"smu-ucd":{title:"No. 17 SMU vs UC Davis",away:302,home:2567,awayN:"UC Davis",homeN:"SMU",meta:"Saturday, Sept. 12, 2026 | 4:00 p.m. ET | ACCNX",spread:"SMU -28.5",total:"58.5",ml:"SMU heavy",move:"Home favorite",note:"FCS/G5 style maintenance.",bet:"SMU -28.5"},
"hou-sou":{title:"No. 22 Houston vs Southern",away:2582,home:248,awayN:"Southern",homeN:"Houston",meta:"Saturday, Sept. 12, 2026 | 7:00 p.m. ET | ESPN+",spread:"HOU -35.5",total:"59.5",ml:"HOU heavy",move:"Home favorite",note:"FCS paycheck.",bet:"Houston -35.5"},
"utah-idaho":{title:"Utah vs Idaho",away:16,home:254,awayN:"Idaho",homeN:"Utah",meta:"Week 1 FINAL",spread:"UTAH -38.5",total:"52.5",ml:"UTAH heavy",move:"FINAL 66-14",final:"UTAH 66 IDAHO 14",result:"WIN",bet:"Utah -38.5"},
"osu-ballst":{title:"Ohio State vs Ball State",away:2050,home:194,awayN:"Ball State",homeN:"Ohio State",meta:"Week 1 FINAL",spread:"OSU -50.5",total:"54.5",ml:"OSU heavy",move:"FINAL 56-3",final:"OSU 56 BALL 3",result:"WIN",bet:"Ohio State -50.5"},
"uga-tnst":{title:"Georgia vs Tennessee State",away:2635,home:61,awayN:"Tennessee State",homeN:"Georgia",meta:"Week 1 FINAL",spread:"UGA -47.5",total:"58.5",ml:"UGA heavy",move:"FINAL 63-3",final:"UGA 63 TNST 3",result:"WIN",bet:"Georgia -47.5"},
"ore-bois":{title:"Oregon vs Boise State",away:68,home:248,awayN:"Boise State",homeN:"Oregon",meta:"Week 1 FINAL",spread:"ORE -24.5",total:"58.5",ml:"ORE heavy",move:"FINAL 34-27",final:"ORE 34 BOIS 27",result:"LOSS",bet:"Oregon -24.5"},
"tex-txst":{title:"Texas vs Texas State",away:326,home:251,awayN:"Texas State",homeN:"Texas",meta:"Week 1 FINAL",spread:"TEX -29.5",total:"58.5",ml:"TEX heavy",move:"FINAL 59-7",final:"TEX 59 TXST 7",result:"WIN",bet:"Texas -29.5"},
"lsu-clem":{title:"LSU vs Clemson",away:228,home:99,awayN:"Clemson",homeN:"LSU",meta:"Week 1 FINAL",spread:"LSU -10.5",total:"54.5",ml:"LSU -380",move:"FINAL 51-10",final:"LSU 51 CLEM 10",result:"WIN",bet:"LSU -10.5"},
"mich-wmu":{title:"Michigan vs Western Michigan",away:2711,home:130,awayN:"Western Michigan",homeN:"Michigan",meta:"Week 1 FINAL",spread:"MICH -27.5",total:"47.5",ml:"MICH heavy",move:"FINAL 13-12",final:"MICH 13 WMU 12",result:"LOSS",bet:"Michigan -27.5"},
"miss-lou":{title:"Ole Miss vs Louisville",away:97,home:145,awayN:"Louisville",homeN:"Ole Miss",meta:"Week 1 FINAL Nashville",spread:"MISS -6.5",total:"64.5",ml:"MISS -250",move:"FINAL 41-38",final:"MISS 41 LOU 38",result:"PUSH-or-cover check 3",resultNote:"Missed 6.5. Louisville +6.5 cashed.",bet:"Ole Miss -6.5"}
};
function paint(g, review){
  if (!g) { document.body.innerHTML = "<p style='color:#fff;padding:40px'>Board not found. <a href='index.html'>Home</a></p>"; return; }
  document.title = "The Split -- "+g.title;
  const res = review ? `<details class="block" open><summary>REVIEW</summary><div class="body"><div class="callout"><div style="font-size:22px;font-weight:800">${g.bet||""}</div><div class="${g.result==="WIN"?"ok":"push"}" style="margin-top:6px">${g.result||"OPEN"} -- ${g.final||""}</div></div><ul><li>${g.resultNote||g.note||""}</li><li>Full critical review expands as we log the tape. Same standard as NFL: right, wrong, missed, get better.</li></ul></div></details>` : `<details class="block" open><summary>BEST BET</summary><div class="body"><div class="callout"><div style="font-size:22px;font-weight:800">${g.bet||""}</div></div><p>${g.note||""}</p></div></details>`;
  document.getElementById("app").innerHTML = `
  <div class="topnav"><a href="index.html">HOME</a></div>
  <header><div class="brand">THE SPLIT</div><div class="week">COLLEGE FOOTBALL -- AP TOP 25</div>
  <div class="logos"><img src="${LOGO(g.away)}" alt=""/><img src="${LOGO(g.home)}" alt=""/></div>
  <h1>${g.title.toUpperCase()}</h1><div class="meta">${g.meta||""}</div></header>
  <div class="wrap">
    <div class="market">
      <div class="tile"><b>SPREAD</b><span>${g.spread||"--"}</span></div>
      <div class="tile"><b>TOTAL</b><span>${g.total||"--"}</span></div>
      <div class="tile"><b>MONEYLINE</b><span>${g.ml||"--"}</span></div>
      <div class="tile"><b>MOVE</b><span>${g.move||"--"}</span></div>
    </div>
    <details class="block" open><summary>TEAM BREAKDOWN</summary><div class="body"><p>${g.note||""}</p><p class="note">Friday boards (Missouri, Louisville, Virginia) are the full-detail standard. This page matches chrome and the bet. Deeper staff / WR vs CB copies that standard as we go team by team.</p></div></details>
    ${res}
    <p class="note">No DFS on college boards.</p>
  </div>`;
}
