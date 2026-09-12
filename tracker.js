const LEDGER_TODAY = "2026-09-11";
function etDate(){
  try {
    return new Intl.DateTimeFormat("en-CA", {timeZone:"America/New_York", year:"numeric", month:"2-digit", day:"2-digit"}).format(new Date());
  } catch (e) { return LEDGER_TODAY; }
}
function cardDate(){ return etDate(); }
function gameScore(b){
  const map = window.SCORES || {};
  return b.final || map[b.game] || "";
}
function isTdHr(b){ const t=String(b.type||"").toLowerCase(); return t==="td"||t==="hr"; }
function isPlayerProp(b){ return String(b.type||"").toLowerCase()==="prop"; }
function keepTicket(b){
  if (String(b.sport||"").toUpperCase() === "CFB" && (isTdHr(b) || isPlayerProp(b))) return false;
  return true;
}
function typeLabel(b){
  const t = String(b.type||"").toLowerCase();
  if (t === "hr") return "HR";
  if (t === "td") return "TD";
  if (t === "prop") return "PROP";
  if (t === "total") return "TOTAL";
  if (t === "ml") return "ML";
  return "SIDE";
}
function typeOrder(b){
  const t = String(b.type||"").toLowerCase();
  if (t === "side" || t === "ml" || t === "total") return 0;
  if (t === "td" || t === "hr") return 1;
  return 2;
}
function clv(b){
  if (b.clv) return b.clv;
  if (b.open && b.close && b.open !== b.close) return "Open " + b.open + " / Close " + b.close;
  return b.close ? "Close " + b.close : "--";
}
function passFilter(b, filter){
  const c = String(b.confidence||"LEAN").toUpperCase();
  if (!filter || filter === "ALL") return true;
  if (filter === "BET") return c === "BET";
  if (filter === "LEAN") return c === "BET" || c === "LEAN";
  if (filter === "FADE") return c === "FADE";
  return true;
}
async function loadLedger(){
  const r = await fetch("tracker.json?v=" + Date.now());
  const data = await r.json();
  data.bets = (data.bets || []).filter(keepTicket);
  return data;
}
function money(n){
  if (n == null || n === "") return "--";
  const s = Number(n);
  return (s>0?"+":"") + "$" + s;
}
function summarize(data){
  const settled = (data.bets||[]).filter(b => b.status === "SETTLED");
  const wins = settled.filter(b => b.result === "WIN");
  const losses = settled.filter(b => b.result === "LOSS");
  const pushes = settled.filter(b => b.result === "PUSH");
  const pl = settled.reduce((a,b)=>a+(Number(b.pl)||0),0);
  const risked = settled.reduce((a,b)=>a+(Number(b.stake)||0),0);
  const roi = risked ? ((pl/risked)*100).toFixed(1)+"%" : "--";
  const bySport = {};
  settled.forEach(b=>{
    const s = b.sport || "OTH";
    if(!bySport[s]) bySport[s] = {w:0,l:0,p:0,pl:0};
    if(b.result==="WIN") bySport[s].w++;
    else if(b.result==="LOSS") bySport[s].l++;
    else bySport[s].p++;
    bySport[s].pl += Number(b.pl)||0;
  });
  return {settled,wins,losses,pushes,pl,risked,roi,bySport};
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
  const conf = String(b.confidence || "LEAN").toUpperCase();
  const res = b.result || b.status;
  return `<div class="slip">
    <div class="slip-type">${typeLabel(b)}</div>
    <div class="slip-pick">${b.pick}</div>
    <div class="slip-money">
      <div><b>STAKE</b><span>$${b.stake}</span></div>
      <div><b>TO WIN</b><span>$${b.to_win}</span></div>
    </div>
    <div class="slip-foot">
      <span class="stamp ${conf.toLowerCase()}">${conf}</span>
      <span class="${resultClass(b)}">${res}</span>
    </div>
  </div>`;
}
function gameHeadline(list){
  const main = list.find(b => !isTdHr(b) && !isPlayerProp(b)) || list[0];
  return main.result || main.status || "";
}
function groupByGame(rows){
  const map = {};
  rows.forEach(b=>{
    const k = b.game;
    if(!map[k]) map[k] = [];
    map[k].push(b);
  });
  return Object.entries(map).map(([game, list]) => {
    list.sort((a,b)=>typeOrder(a)-typeOrder(b));
    const href = list[0].href;
    const sc = gameScore(list[0]);
    const head = gameHeadline(list);
    const main = list.find(b => !isTdHr(b) && !isPlayerProp(b)) || list[0];
    return `<details class="game">
      <summary><span class="g-name">${game}</span><span class="g-score">${sc||""}</span><span class="${resultClass(main)}">${head}</span></summary>
      <div class="body">
        ${list.map(ticketLine).join("")}
        <a href="${href}">GAME DETAIL</a>
      </div>
    </details>`;
  }).join("");
}
function sportDrop(title, html, open){
  return `<details class="block" ${open?"open":""}><summary>${title}</summary><div class="body">${html || `<p class="note">Nothing posted.</p>`}</div></details>`;
}
function sportBlock(title, html){
  return `<h3>${title}</h3>` + (html || `<p class="note">Nothing posted.</p>`);
}
function resultClass(b){
  if (!b) return "push";
  if (b.result === "WIN") return "ok";
  if (b.result === "LOSS") return "loss";
  return "push";
}
function resultText(b){
  const sc = gameScore(b);
  if (b.status === "SETTLED") return (b.result||"") + (sc?" · "+sc:"");
  return (b.status||"") + (sc?" · "+sc:"");
}
function reviewRow(b){
  const href = b.href ? `<a class="full-link" href="${b.href}">${b.game}</a>` : b.game;
  const pl = b.status === "SETTLED" ? money(b.pl) : "--";
  return `<tr>
    <td>${(b.date||"").slice(5)}</td>
    <td>${href}</td>
    <td>${typeLabel(b)} · ${b.pick}</td>
    <td>${clv(b)}</td>
    <td>$${b.stake}</td>
    <td>$${b.to_win}</td>
    <td>${b.confidence||"--"}</td>
    <td class="${resultClass(b)}">${resultText(b)}</td>
    <td>${pl}</td>
  </tr>`;
}
function reviewTable(rows){
  if (!rows.length) return `<p class="note">No tickets.</p>`;
  const settled = rows.filter(b => b.status === "SETTLED");
  const pl = settled.reduce((a,b)=>a+(Number(b.pl)||0),0);
  return `<table class="res">
    <tr><th>DATE</th><th>GAME</th><th>TICKET</th><th>CLV / CLOSE</th><th>STAKE</th><th>TO WIN</th><th>CONF</th><th>SCORE / RESULT</th><th>P/L</th></tr>
    ${rows.map(reviewRow).join("")}
    <tr class="total"><td colspan="8">SETTLED P/L</td><td>${money(pl)}</td></tr>
  </table>`;
}
function stampLine(data){
  return data && data.updated ? "Ledger " + data.updated.replace("T"," ") : "";
}
async function renderReviews(filter){
  const data = await loadLedger();
  const s = summarize(data);
  renderBank(document.getElementById("review-bank"), s);
  const meta = document.querySelector("header .meta");
  if (meta && data.updated) meta.textContent = "Filter by confidence. " + stampLine(data);
  const order = ["NFL","CFB","MLB","NBA","NHL"];
  const names = {NFL:"NFL",CFB:"COLLEGE FOOTBALL",MLB:"MLB",NBA:"NBA",NHL:"NHL"};
  const box = document.getElementById("review-tables");
  if (!box) return;
  box.innerHTML = order.map((sp) => {
    const rows = (data.bets||[]).filter(b => b.sport === sp && passFilter(b, filter));
    const best = rows.filter(b => !isTdHr(b) && !isPlayerProp(b));
    const tdhr = rows.filter(isTdHr);
    const props = rows.filter(isPlayerProp);
    let inner;
    if (!rows.length) inner = `<p class="note">No tickets in this filter.</p>`;
    else if (sp === "CFB") inner = `<h3 class="track">BEST BETS — SIDE / TOTAL / MONEYLINE</h3>${reviewTable(best)}`;
    else inner = `<h3 class="track">BEST BETS — SIDE / TOTAL / MONEYLINE</h3>${reviewTable(best)}<h3 class="track">TD / HR</h3>${reviewTable(tdhr)}<h3 class="track">PLAYER PROPS</h3>${reviewTable(props)}`;
    return sportDrop(names[sp], inner, false);
  }).join("");
}
async function renderToday(){
  const data = await loadLedger();
  const s = summarize(data);
  renderBank(document.getElementById("bank"), s);
  const line = document.getElementById("tagline");
  const day = cardDate(data);
  if (line) line.textContent = "Tickets stay on this page until midnight ET. Card date " + day;
  const order = ["NFL","CFB","MLB"];
  const tickets = document.getElementById("tickets");
  const live = order.map(sp => {
    const rows = (data.bets||[]).filter(b => b.sport === sp && b.date === day);
    if (!rows.length) return "";
    return sportDrop(sp, groupByGame(rows), false);
  }).filter(Boolean);
  if (tickets) tickets.innerHTML = live.length ? live.join("") : `<p class="note">No tickets dated ${day}.</p>`;
  const loops = document.getElementById("loops");
  const L = data.loops || {};
  if (loops) loops.innerHTML = order.map(sp => {
    const items = L[sp] || [];
    return sportBlock(sp, items.length ? "<ul>"+items.map(x=>`<li>${x}</li>`).join("")+"</ul>" : `<p class="note">No lessons posted.</p>`);
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
    t.textContent = (sports || "No settled tickets yet.") + (data.updated ? "  ·  " + stampLine(data) : "");
  }
}
