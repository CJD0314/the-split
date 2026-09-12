const LEDGER_TODAY = "2026-09-12";
function etDate(){
  try {
    return new Intl.DateTimeFormat("en-CA", {timeZone:"America/New_York", year:"numeric", month:"2-digit", day:"2-digit"}).format(new Date());
  } catch (e) { return LEDGER_TODAY; }
}
function cardDate(){ return etDate(); }
function isFire(b){
  const c = String(b.confidence || "LEAN").toUpperCase();
  return c === "BET" || c === "LEAN";
}
function isFade(b){ return String(b.confidence || "").toUpperCase() === "FADE"; }
function gameScore(b){
  const map = window.SCORES || {};
  return b.final || map[(b.date || "") + "|" + b.game] || map[b.game] || "";
}
function scoreLabel(sc){
  if (!sc) return "";
  const s = String(sc);
  if (/final/i.test(s)) return s;
  if (/live|inning|qtr|quarter/i.test(s)) return s;
  return "FINAL  " + s;
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
async function loadPlaybook(){
  try {
    const r = await fetch("playbook.json?v=" + Date.now());
    return r.json();
  } catch (e) { return {rules:[]}; }
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
    <div class="slip-top"><span class="slip-type">${typeLabel(b)}</span><span class="slip-pick">${b.pick}</span></div>
    <div class="slip-meta">
      <div><b>STAKE</b><span>$${b.stake}</span></div>
      <div><b>TO WIN</b><span>$${b.to_win}</span></div>
      <div><b>CONFIDENCE</b><span class="stamp ${conf.toLowerCase()}">${conf}</span></div>
      <div><b>RESULT</b><span class="${resultClass(b)}">${res}</span></div>
    </div>
  </div>`;
}
function flatRow(b){
  const conf = String(b.confidence || "LEAN").toUpperCase();
  const href = b.href || "#";
  const sc = scoreLabel(gameScore(b));
  const shown = sc.replace(/^FINAL\s*/i,"").replace(/^LIVE\s*/i,"");
  return `<div class="g-row">
    <div class="g-main">
      <span class="g-name">${b.game}</span>
      <span class="g-pick">${b.pick} \u00b7 ${b.close || ""}</span>
    </div>
    <div class="g-side">
      <span class="stamp ${conf.toLowerCase()}">${conf}</span>
      <span class="g-score">${shown || (b.status||"")}</span>
      <a href="${href}">GAME DETAIL</a>
    </div>
  </div>`;
}
function flatGameList(rows){
  const seen = {};
  const list = [];
  rows.forEach(b => {
    if (seen[b.game]) return;
    seen[b.game] = true;
    list.push(b);
  });
  return list.map(flatRow).join("") || `<p class="note">Nothing posted.</p>`;
}
function mlbBuckets(rows){
  const side = rows.filter(b => !isTdHr(b) && !isPlayerProp(b));
  const hr = rows.filter(b => String(b.type||"").toLowerCase()==="hr");
  const prop = rows.filter(isPlayerProp);
  return sportDrop("SIDE", side.map(flatRow).join(""), false)
    + sportDrop("HR BEST BETS", hr.map(flatRow).join(""), false)
    + sportDrop("BEST PLAYER PROP", prop.map(flatRow).join(""), false);
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
    const href = list[0].href || "#";
    const sc = scoreLabel(gameScore(list[0]));
    const finished = list.some(b => b.status === "SETTLED" || b.final) || /^FINAL/i.test(sc);
    const tag = /live/i.test(sc) ? "LIVE" : (finished || sc ? "FINAL" : "PREGAME");
    const shown = sc.replace(/^FINAL\s*/i,"").replace(/^LIVE\s*/i,"");
    const reviewHref = list[0].review_href || String(href).replace(/\.html$/i, "-review.html");
    const reviewLink = finished ? `<a href="${reviewHref}">REVIEW</a>` : "";
    return `<details class="game">
      <summary><span class="g-name">${game}</span></summary>
      <div class="scorebox"><b>${tag}</b><span>${shown || "--"}</span></div>
      <div class="body">
        ${list.map(ticketLine).join("")}
        <div class="links"><a href="${href}">GAME DETAIL</a>${reviewLink}</div>
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
  if (b.status === "SETTLED") return (b.result||"") + (sc?" \u00b7 "+sc:"");
  return (b.status||"") + (sc?" \u00b7 "+sc:"");
}
function reviewRow(b){
  const href = b.href ? `<a class="full-link" href="${b.href}">${b.game}</a>` : b.game;
  const pl = b.status === "SETTLED" ? money(b.pl) : "--";
  return `<tr>
    <td>${(b.date||"").slice(5)}</td>
    <td>${href}</td>
    <td>${typeLabel(b)} \u00b7 ${b.pick}</td>
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
    else if (sp === "CFB") inner = `<h3 class="track">BEST BETS \u2014 SIDE / TOTAL / MONEYLINE</h3>${reviewTable(best)}`;
    else inner = `<h3 class="track">BEST BETS \u2014 SIDE / TOTAL / MONEYLINE</h3>${reviewTable(best)}<h3 class="track">TD / HR</h3>${reviewTable(tdhr)}<h3 class="track">PLAYER PROPS</h3>${reviewTable(props)}`;
    return sportDrop(names[sp], inner, false);
  }).join("");
}
async function renderPlaybook(){
  const box = document.getElementById("playbook");
  if (!box) return;
  const book = await loadPlaybook();
  const rules = book.rules || [];
  if (!rules.length) {
    box.innerHTML = `<p class="note">No rules posted yet.</p>`;
    return;
  }
  const order = ["NFL","CFB","MLB"];
  box.innerHTML = `<p class="note">${book.how_we_use_this || "Next board has to use these rules."}</p>` + order.map(sp => {
    const items = rules.filter(r => r.sport === sp);
    if (!items.length) return "";
    return sportBlock(sp, items.map(r => `<div class="rule"><b>${r.from}</b>${r.rule}<div class="note">NEXT: ${r.next}</div></div>`).join(""));
  }).join("");
}
function sportTodayHtml(sp, rows){
  if (sp === "MLB") return mlbBuckets(rows);
  return flatGameList(rows);
}
async function renderToday(){
  const data = await loadLedger();
  const s = summarize(data);
  renderBank(document.getElementById("bank"), s);
  const line = document.getElementById("tagline");
  const day = cardDate(data);
  if (line) line.textContent = "Card date " + day;
  const order = ["NFL","CFB","MLB"];
  const tickets = document.getElementById("tickets");
  const live = order.map(sp => {
    const rows = (data.bets||[]).filter(b => b.sport === sp && b.date === day && isFire(b));
    if (!rows.length) return "";
    return sportDrop(sp, sportTodayHtml(sp, rows), false);
  }).filter(Boolean);
  if (tickets) tickets.innerHTML = live.length ? live.join("") : `<p class="note">No BET or LEAN tickets dated ${day}.</p>`;
  const fades = document.getElementById("fades");
  if (fades){
    const away = order.map(sp => {
      const rows = (data.bets||[]).filter(b => b.sport === sp && b.date === day && isFade(b));
      if (!rows.length) return "";
      return sportDrop(sp, sportTodayHtml(sp, rows), false);
    }).filter(Boolean);
    fades.innerHTML = away.length ? away.join("") : `<p class="note">No stay-away tickets dated ${day}.</p>`;
  }
}
async function renderHomeBank(){
  const data = await loadLedger();
  const s = summarize(data);
  renderBank(document.getElementById("home-bank"), s);
}
