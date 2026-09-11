function logo(c){return "https://a.espncdn.com/i/teamlogos/nfl/500/"+c+".png"}
function lis(arr){return "<ul>"+(arr||[]).map(x=>"<li>"+x+"</li>").join("")+"</ul>"}
function stafful(list){return "<ul>"+(list||[]).map(x=>"<li><b>"+x[0]+"</b> -- "+x[1]+"</li>").join("")+"</ul>"}
function head(code,name,note){return `<div class="team-head"><img src="${logo(code)}" alt="" /><div><b>${name}</b><div class="note">${note}</div></div></div>`}
function inact(title,off,def){
  let h="<h3>"+title+"</h3>";
  h+="<p><b>OFFENSE</b></p>"+(off||"<p class='note'>No official inactives posted yet.</p>");
  h+="<p><b>DEFENSE</b></p>"+(def||"<p class='note'>No official inactives posted yet.</p>");
  return h;
}
function lastUpdated(){
  try {
    var parts = new Intl.DateTimeFormat("en-US", {timeZone:"America/New_York",weekday:"short",month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit",hour12:true}).formatToParts(new Date());
    var get = function(t){ return (parts.find(function(p){ return p.type===t; })||{}).value; };
    return "LAST UPDATED: " + get("weekday") + " " + get("month") + " " + get("day") + ", " + get("year") + " " + get("hour") + ":" + get("minute") + " " + get("dayPeriod").toLowerCase() + " ET";
  } catch(e) {
    return "LAST UPDATED: Fri Sep 11, 2026 6:59 p.m. ET";
  }
}
function renderGame(g){
  document.title="The Split -- "+g.awayName+" at "+g.homeName;
  const td = (g.tdPlayer)?`
    <details class="block" open><summary>TD SCORER</summary><div class="body">
      <div class="callout">
        <div style="font-size:22px;font-weight:800">${g.tdPlayer.toUpperCase()} (${g.tdTeam}) ANYTIME TD</div>
        <div style="margin-top:6px">DraftKings ${g.tdPrice}</div>
        <div style="margin-top:4px">${g.tdStake}</div>
      </div>
      ${lis(g.tdWhy)}
    </div></details>`:"";
  document.getElementById("app").innerHTML=`
  <div class="topnav"><a href="index.html">HOME</a></div>
  <header>
    <div class="brand">THE SPLIT</div>
    <div class="week">NFL WEEK 1</div>
    <div class="logos"><img src="${logo(g.away)}" alt="" /><img src="${logo(g.home)}" alt="" /></div>
    <h1>${g.awayName.toUpperCase()} VS ${g.homeName.toUpperCase()}</h1>
    <div class="meta">${g.when}</div>
    <div class="updated">${lastUpdated()}</div>
  </header>
  <div class="wrap">
    <div class="market">
      <div class="tile"><b>SPREAD</b><span>Current: ${g.spread}</span><span>Open: ${g.openSpread||g.spread}</span></div>
      <div class="tile"><b>TOTAL</b><span>Current: ${g.total}</span><span>Open: ${g.openTotal||g.total}</span></div>
      <div class="tile"><b>MONEYLINE</b><span>Current: ${g.ml}</span><span>Open: ${g.openMl||g.ml}</span></div>
      <div class="tile"><b>MOVE</b><span>${g.move}</span></div>
    </div>
    <details class="block" open><summary>TEAM BREAKDOWN</summary><div class="body">
      <div class="tb-row teams">${head(g.away,g.awayName,g.awayNote)}${head(g.home,g.homeName,g.homeNote)}</div>
      <div class="tb-row"><h3>STAFF</h3>${stafful(g.awayStaff)}${stafful(g.homeStaff)}</div>
      <div class="tb-row"><h3>WHAT THAT MEANS THIS WEEK</h3>${lis(g.awayMean)}${lis(g.homeMean)}</div>
      <div class="tb-row"><h3>KEY PLAYERS</h3>${lis(g.awayKeys)}${lis(g.homeKeys)}</div>
      <div class="tb-row"><h3>IN THE NEWS</h3>${lis(g.awayNews)}${lis(g.homeNews)}</div>
    </div></details>
    <details class="block" open><summary>INACTIVES</summary><div class="body"><p class="note">${g.inactNote||"Official NFL.com kickoff sheet not posted. Team name once, then offense / defense."}</p>${inact(g.awayName.toUpperCase(),g.awayOff,g.awayDef)}${inact(g.homeName.toUpperCase(),g.homeOff,g.homeDef)}</div></details>
    <details class="block" open><summary>SCRIPT</summary><div class="body"><h3>${g.homeName.toUpperCase()} WIN IF -- ${g.homeScore}</h3>${lis(g.homeIf)}<h3>${g.awayName.toUpperCase()} WIN IF -- ${g.awayScore}</h3>${lis(g.awayIf)}</div></details>
    <details class="block" open><summary>WR VS CB</summary><div class="body">${g.wr||lis(g.cover||[])}</div></details>
    <details class="block" open><summary>DFS STANDS OUT</summary><div class="body">${g.lineup?g.lineup:lis(g.dfs)}</div></details>
    <details class="block" open><summary>BEST BET</summary><div class="body"><div class="callout"><div style="font-size:22px;font-weight:800">${g.bet}</div><div style="margin-top:6px">${g.stake}</div></div>${lis(g.why)}</div></details>
    ${td}
    <p class="note">Postgame review only appears on finished games via the REVIEW button on the home page. TD scorer is tracked separately from the side / total.</p>
  </div>`;
}
