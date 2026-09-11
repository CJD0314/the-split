const LEDGER_TODAY = "2026-09-11";
async function loadLedger(){
  const r = await fetch("tracker.json?v=" + Date.now());
  return r.json();
}
function money(n){
  if (n == null || n === "") return "--";
  const s = Number(n);
  return (s>0?"+":"") + "$" + s;
}
function summarize(data){
  const settled = data.bets.filter(b => b.status === "SETTLED");
  const wins = settled.filter(b => b.result === "WIN");
  const losses = settled.filter(b => b.result === "LOSS");
  const pushes = settled.filter(b => b.result === "PUSH");
  const pl = settled.reduce((a,b)=>a+(Number(b.pl)||0),0);
  const risked = settled.reduce((a,b)=>a+(Number(b.stake)||0),0);
  const roi = risked ? ((pl/risked)*100).toFixed(1)+"%" : "--";
  const byType = {};
  const bySport = {};
  settled.forEach(b=>{
    const k = b.type || "other";
    if(!byType[k]) byType[k] = {w:0,l:0,p:0,pl:0};
    if(b.result==="WIN") byType[k].w++;
    else if(b.result==="LOSS") byType[k].l++;
    else byType[k].p++;
    byType[k].pl += Number(b.pl)||0;
    const s = b.sport || "OTH";
    if(!bySport[s]) bySport[s] = {w:0,l:0,p:0,pl:0};
    if(b.result==="WIN") bySport[s].w++;
    else if(b.result==="LOSS") bySport[s].l++;
    else bySport[s].p++;
    bySport[s].pl += Number(b.pl)||0;
  });
  return {settled,wins,losses,pushes,pl,risked,roi,byType,bySport};
}
function renderBank(el, s){
  if(!el) return;
  el.innerHTML = `
    <div><b>SETTLED P/L</b><span>${money(s.pl)}</span></div>
    <div><b>RECORD</b><span>${s.wins.length}-${s.losses.length}-${s.pushes.length}</span></div>
    <div><b>ROI</b><span>${s.roi}</span></div>
    <div><b>RISKED</b><span>$${s.risked}</span></div>`;
}
function ticketLine(b){
  const conf = String(b.confidence || "LEAN").toLowerCase();
  return `<div class="note" style="margin:6px 0">
    <span class="stamp ${String(b.status).toLowerCase()}">${b.status}</span>
    <span class="stamp ${conf}">${String(b.confidence || "LEAN").toUpperCase()}</span>
    ${b.pick} · ${b.close} · $${b.stake} to win $${b.to_win}${b.final?" · "+b.final:""}${b.result?" · "+b.result:""}
  </div>`;
}
function groupByGame(rows){
  const map = {};
  rows.forEach(b=>{
    const k = b.game;
    if(!map[k]) map[k] = [];
    map[k].push(b);
  });
  return Object.entries(map).map(([game, list]) => {
    const href = list[0].href;
    return `<div class="row">
      <b>${game}</b>
      ${list.map(ticketLine).join("")}
      <a href="${href}">BOARD</a>
    </div>`;
  }).join("");
}
function sportDrop(title, html, open){
  return `<details class="block" ${open?"open":""}><summary>${title}</summary><div class="body">${html || `<p class="note">Nothing posted.</p>`}</div></details>`;
}
function sportBlock(title, html){
  return `<h3>${title}</h3>` + (html || `<p class="note">Nothing posted.</p>`);
}
async function renderToday(){
  const data = await loadLedger();
  const s = summarize(data);
  renderBank(document.getElementById("bank"), s);
  const line = document.getElementById("tagline");
  if (line) line.textContent = data.tagline || "The card. The number. The miss.";
  const day = data.today || LEDGER_TODAY;
  const order = ["NFL","CFB","MLB"];
  const tickets = document.getElementById("tickets");
  tickets.innerHTML = order.map(sp => {
    const rows = data.bets.filter(b => b.sport === sp && b.date === day);
    const body = rows.length ? groupByGame(rows) : `<p class="note">No games today.</p>`;
    return sportDrop(sp, body, rows.length > 0);
  }).join("");
  const loops = document.getElementById("loops");
  const L = data.loops || {};
  loops.innerHTML = order.map(sp => {
    const items = L[sp] || [];
    return sportBlock(sp, items.length ? "<ul>"+items.map(x=>`<li>${x}</li>`).join("")+"</ul>" : `<p class="note">No review notes yet.</p>`);
  }).join("");
  const fades = document.getElementById("fades");
  if (fades){
    const F = data.fades || {};
    fades.innerHTML = order.map(sp => {
      const items = F[sp] || [];
      return sportBlock(sp, items.length ? "<ul>"+items.map(x=>`<li>${x}</li>`).join("")+"</ul>" : `<p class="note">No fades posted.</p>`);
    }).join("");
  }
}
async function renderHomeBank(){
  const data = await loadLedger();
  const s = summarize(data);
  renderBank(document.getElementById("home-bank"), s);
  const t = document.getElementById("home-types");
  if(t){
    const sports = Object.entries(s.bySport).map(([k,v])=>k+" "+v.w+"-"+v.l+"-"+v.p+" ("+money(v.pl)+")").join("  |  ");
    t.textContent = sports || "No settled tickets yet.";
  }
  const box = document.getElementById("home-opens");
  if(!box) return;
  const order = ["NFL","CFB","MLB"];
  const open = data.bets.filter(b => b.status !== "SETTLED");
  box.innerHTML = order.map(sp => {
    const rows = open.filter(b => b.sport === sp);
    return sportBlock(sp, rows.length ? groupByGame(rows) : `<p class="note">No open tickets.</p>`);
  }).join("");
}
