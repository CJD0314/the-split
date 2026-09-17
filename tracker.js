const LEDGER_TODAY = "2026-09-15";
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
function pickLine(b){
  const close = String(b.close || "").trim();
  const pick = String(b.pick || "").trim();
  const t = String(b.type || "").toLowerCase();
  if (t === "hr" || t === "td" || t === "prop") {
    if (pick && close && pick !== close && close.indexOf(pick) < 0) return pick + " · " + close;
    return pick || close;
  }
  return close || pick;
}
function applyBet(data, seen, b){
  if (!b || !b.id) return;
  if (!seen[b.id]){
    data.bets.push(b);
    seen[b.id] = true;
    return;
  }
  if (String(b.status||"").toUpperCase() !== "SETTLED") return;
  const i = data.bets.findIndex(function(x){ return x && x.id === b.id; });
  if (i < 0) return;
  if (String(data.bets[i].status||"").toUpperCase() === "SETTLED") return;
  data.bets[i] = b;
}
function mergeNotes(data, extra){
  if (!extra) return;
  ["loops","fades"].forEach(function(k){
    if (!extra[k]) return;
    data[k] = data[k] || {};
    Object.keys(extra[k]).forEach(function(sp){
      data[k][sp] = data[k][sp] || [];
      (extra[k][sp] || []).forEach(function(line){
        if (data[k][sp].indexOf(line) < 0) data[k][sp].push(line);
      });
    });
  });
}
async function loadLedger(){
  const r = await fetch("tracker.json?v=" + Date.now());
  const data = await r.json();
  data.bets = data.bets || [];
  const seen = {};
  data.bets.forEach(function(b){ if (b && b.id) seen[b.id]=true; });
  const shards = ["tracker-settled.json","tracker-settled-2.json","tracker-open.json","tracker-nfl-w1.json","tracker-nfl-mnf.json","tracker-mlb-914.json","tracker-mlb-915.json","tracker-cfb-w3.json"];
  for (let i=0;i<shards.length;i++){
    try {
      const extra = await (await fetch(shards[i] + "?v=" + Date.now())).json();
      const more = extra.bets || extra || [];
      more.forEach(function(b){ applyBet(data, seen, b); });
      mergeNotes(data, extra);
    } catch (e) {}
  }
  data.bets = data.bets.filter(keepTicket);
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
  return {settled,wins,losses,pushes,pl,risked,roi};
}
function renderBank(el, s){
  if(!el) return;
  el.innerHTML = `<div><b>SETTLED P/L</b><span>${money(s.pl)}</span></div><div><b>RECORD</b><span>${s.wins.length}-${s.losses.length}-${s.pushes.length}</span></div><div><b>ROI</b><span>${s.roi}</span></div><div><b>RISKED</b><span>$${s.risked}</span></div>`;
}
function ticketTitle(b){
  const t = String(b.type || "").toLowerCase();
  if (t === "hr" || t === "td" || t === "prop") return String(b.pick || b.game || "");
  return b.game;
}
function flatRow(b){
  const conf = String(b.confidence || "LEAN").toUpperCase();
  const href = b.href || "#";
  const sc = scoreLabel(gameScore(b));
  const shown = sc.replace(/^FINAL\s*/i,"").replace(/^LIVE\s*/i,"");
  const t = String(b.type || "").toLowerCase();
  const title = ticketTitle(b);
  const sub = (t === "hr" || t === "td" || t === "prop") ? (pickLine(b) + " · " + b.game) : pickLine(b);
  return `<div class="g-row"><div class="g-main"><span class="g-name">${title}</span><span class="g-pick">${sub}</span></div><div class="g-side"><span class="stamp ${conf.toLowerCase()}">${conf}</span><span class="g-score">${shown || (b.status||"")}</span><a href="${href}">GAME DETAIL</a></div></div>`;
}
function flatGameList(rows){
  const seen = {}; const list = [];
  rows.forEach(b => { if (seen[b.game]) return; seen[b.game]=true; list.push(b); });
  return list.map(flatRow).join("") || `<p class="note">Nothing posted.</p>`;
}
function mlbBuckets(rows){
  const side = rows.filter(b => !isTdHr(b) && !isPlayerProp(b));
  const hr = rows.filter(b => String(b.type||"").toLowerCase()==="hr");
  const prop = rows.filter(isPlayerProp);
  return sportDrop("SIDE", side.map(flatRow).join(""), true) + sportDrop("HR BEST BETS", hr.map(flatRow).join(""), false) + sportDrop("BEST PLAYER PROP", prop.map(flatRow).join(""), false);
}
function sportDrop(title, html, open){
  return `<details class="block" ${open?"open":""}><summary>${title}</summary><div class="body">${html || `<p class="note">Nothing posted.</p>`}</div></details>`;
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
  return `<tr><td>${(b.date||"").slice(5)}</td><td>${href}</td><td>${typeLabel(b)} · ${b.pick}</td><td>${clv(b)}</td><td>$${b.stake}</td><td>$${b.to_win}</td><td>${b.confidence||"--"}</td><td class="${resultClass(b)}">${resultText(b)}</td><td>${pl}</td></tr>`;
}
function reviewTable(rows){
  if (!rows.length) return `<p class="note">No tickets.</p>`;
  const settled = rows.filter(b => b.status === "SETTLED");
  const pl = settled.reduce((a,b)=>a+(Number(b.pl)||0),0);
  return `<table class="res"><tr><th>DATE</th><th>GAME</th><th>TICKET</th><th>CLV / CLOSE</th><th>STAKE</th><th>TO WIN</th><th>CONF</th><th>SCORE / RESULT</th><th>P/L</th></tr>${rows.map(reviewRow).join("")}<tr class="total"><td colspan="8">SETTLED P/L</td><td>${money(pl)}</td></tr></table>`;
}
async function renderReviews(filter){
  const data = await loadLedger();
  const s = summarize(data);
  renderBank(document.getElementById("review-bank"), s);
  const order = ["NFL","CFB","MLB"];
  const names = {NFL:"NFL",CFB:"COLLEGE FOOTBALL",MLB:"MLB"};
  const box = document.getElementById("review-tables");
  if (!box) return;
  box.innerHTML = order.map((sp) => {
    const rows = (data.bets||[]).filter(b => b.sport === sp && passFilter(b, filter));
    const best = rows.filter(b => !isTdHr(b) && !isPlayerProp(b));
    const tdhr = rows.filter(isTdHr);
    const props = rows.filter(isPlayerProp);
    let inner;
    if (!rows.length) inner = `<p class="note">No tickets in this filter.</p>`;
    else if (sp === "CFB") inner = `<h3 class="track">BEST BETS</h3>${reviewTable(best)}`;
    else inner = `<h3 class="track">BEST BETS</h3>${reviewTable(best)}<h3 class="track">TD / HR</h3>${reviewTable(tdhr)}<h3 class="track">PLAYER PROPS</h3>${reviewTable(props)}`;
    return sportDrop(names[sp], inner, sp === "NFL");
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
  const day = cardDate();
  const order = ["NFL","CFB","MLB"];
  const tickets = document.getElementById("tickets");
  const live = order.map(sp => {
    const rows = (data.bets||[]).filter(b => b.sport === sp && b.date === day && isFire(b));
    if (!rows.length) return "";
    return sportDrop(sp, sportTodayHtml(sp, rows), true);
  }).filter(Boolean);
  if (tickets) tickets.innerHTML = live.length ? live.join("") : `<p class="note">No BET or LEAN tickets dated ${day}.</p>`;
  const fades = document.getElementById("fades");
  if (fades){
    const away = order.map(sp => {
      const rows = (data.bets||[]).filter(b => b.sport === sp && b.date === day && isFade(b) && !isTdHr(b) && !isPlayerProp(b));
      if (!rows.length) return "";
      return sportDrop(sp, flatGameList(rows), false);
    }).filter(Boolean);
    fades.innerHTML = away.length ? away.join("") : `<p class="note">No stay-away tickets dated ${day}.</p>`;
  }
}
async function renderHomeBank(){
  const data = await loadLedger();
  const s = summarize(data);
  renderBank(document.getElementById("home-bank"), s);
}
