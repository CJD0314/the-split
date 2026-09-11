function logo(c){return "https://a.espncdn.com/i/teamlogos/nfl/500/"+c+".png"}
function lis(arr){return "<ul>"+arr.map(x=>"<li>"+x+"</li>").join("")+"</ul>"}
function staff(list){return "<h3>STAFF</h3><ul>"+list.map(x=>"<li><b>"+x[0]+"</b> -- "+x[1]+"</li>").join("")+"</ul>"}
function side(code,name,note,s,mean,keys,news){
  return `<div><div class="team-head"><img src="${logo(code)}" alt="" /><div><b>${name}</b><div class="note">${note}</div></div></div>${staff(s)}<h3>WHAT THAT MEANS THIS WEEK</h3>${lis(mean)}<h3>KEY PLAYERS</h3>${lis(keys)}<h3>IN THE NEWS</h3>${lis(news)}</div>`;
}
function inact(title,off,def){
  let h="<h3>"+title+"</h3>";
  h+="<p><b>OFFENSE</b></p>"+(off||"<p class='note'>No official Week 1 inactives posted yet. Saturday/Sunday sheets lock this.</p>");
  h+="<p><b>DEFENSE</b></p>"+(def||"<p class='note'>No official Week 1 inactives posted yet.</p>");
  return h;
}
function renderGame(g){
  document.title="The Split -- "+g.awayName+" at "+g.homeName;
  document.getElementById("app").innerHTML=`
  <div class="topnav"><a href="index.html">HOME</a></div>
  <header>
    <div class="brand">THE SPLIT</div>
    <div class="week">NFL WEEK 1</div>
    <div class="logos"><img src="${logo(g.away)}" alt="" /><img src="${logo(g.home)}" alt="" /></div>
    <h1>${g.awayName.toUpperCase()} VS ${g.homeName.toUpperCase()}</h1>
    <div class="meta">${g.when}</div>
  </header>
  <div class="wrap">
    <div class="market">
      <div class="tile"><b>SPREAD</b><span>Current: ${g.spread}</span><span>Open: ${g.openSpread||g.spread}</span></div>
      <div class="tile"><b>TOTAL</b><span>Current: ${g.total}</span><span>Open: ${g.openTotal||g.total}</span></div>
      <div class="tile"><b>MONEYLINE</b><span>Current: ${g.ml}</span><span>Open: ${g.openMl||g.ml}</span></div>
      <div class="tile"><b>MOVE</b><span>${g.move}</span></div>
    </div>
    <details class="block" open><summary>TEAM BREAKDOWN</summary><div class="body grid2">${side(g.away,g.awayName,g.awayNote,g.awayStaff,g.awayMean,g.awayKeys,g.awayNews)}${side(g.home,g.homeName,g.homeNote,g.homeStaff,g.homeMean,g.homeKeys,g.homeNews)}</div></details>
    <details class="block" open><summary>INACTIVES</summary><div class="body"><p class="note">${g.inactNote||"Official NFL.com kickoff sheet not posted. Friday/Saturday reports below. Team name once, then offense / defense."}</p>${inact(g.awayName.toUpperCase(),g.awayOff,g.awayDef)}${inact(g.homeName.toUpperCase(),g.homeOff,g.homeDef)}</div></details>
    <details class="block" open><summary>SCRIPT</summary><div class="body"><h3>${g.homeName.toUpperCase()} WIN IF -- ${g.homeScore}</h3>${lis(g.homeIf)}<h3>${g.awayName.toUpperCase()} WIN IF -- ${g.awayScore}</h3>${lis(g.awayIf)}</div></details>
    <details class="block" open><summary>WR VS CB</summary><div class="body">${g.wr||"<p class='note'>Coverage assignments lock with the inactive sheet. Early read below.</p>"+lis(g.cover||[])}</div></details>
    <details class="block" open><summary>DFS STANDS OUT</summary><div class="body">${g.lineup?g.lineup:lis(g.dfs)}</div></details>
    <details class="block" open><summary>BEST BET</summary><div class="body"><div class="callout"><div style="font-size:22px;font-weight:800">${g.bet}</div><div style="margin-top:6px">${g.stake}</div></div>${lis(g.why)}</div></details>
    <details class="block" open><summary>RESULTS</summary><div class="body"><div class="callout"><div style="font-size:22px;font-weight:800">${g.bet}</div><div class="push" style="margin-top:6px">OPEN</div><div style="margin-top:6px">${g.stake}</div></div><p class="note">Review posts after kickoff. Same standard as NE-SEA and SF-LAR.</p></div></details>
  </div>`;
}
