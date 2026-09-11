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
  settled.forEach(b=>{
    const k = b.type || "other";
    if(!byType[k]) byType[k] = {w:0,l:0,p:0,pl:0};
    if(b.result==="WIN") byType[k].w++;
    else if(b.result==="LOSS") byType[k].l++;
    else byType[k].p++;
    byType[k].pl += Number(b.pl)||0;
  });
  return {settled,wins,losses,pushes,pl,risked,roi,byType};
}
function renderBank(el, s){
  if(!el) return;
  el.innerHTML = `
    <div><b>SETTLED P/L</b><span>${money(s.pl)}</span></div>
    <div><b>RECORD</b><span>${s.wins.length}-${s.losses.length}-${s.pushes.length}</span></div>
    <div><b>ROI</b><span>${s.roi}</span></div>
    <div><b>RISKED</b><span>$${s.risked}</span></div>`;
}
function ticketCard(b){
  return `<div class="row">
      <span class="stamp ${String(b.status).toLowerCase()}">${b.status}</span>
      <b> ${b.game}</b>
      <div>${b.pick} · ${b.close}</div>
      <div class="note">$${b.stake} to win $${b.to_win}${b.final?" · "+b.final:""}${b.result?" · "+b.result:""}</div>
      <a href="${b.href}">BOARD</a>
    </div>`;
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
  const order = ["NFL","CFB","MLB"];
  const live = data.bets.filter(b => b.status !== "SETTLED" || b.date === "2026-09-11");
  const settledShow = data.bets.filter(b => b.status === "SETTLED");
  const tickets = document.getElementById("tickets");
  tickets.innerHTML = order.map(sp => {
    const rows = live.filter(b => b.sport === sp);
    return sportBlock(sp, rows.length ? rows.map(ticketCard).join("") : `<p class="note">No live tickets.</p>`);
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
  const el = document.getElementById("home-bank");
  if(!el) return;
  const data = await loadLedger();
  renderBank(el, summarize(data));
  const t = document.getElementById("home-types");
  if(t){
    const s = summarize(data);
    t.textContent = Object.entries(s.byType).map(([k,v])=>k.toUpperCase()+" "+v.w+"-"+v.l+"-"+v.p).join("  |  ") || "Type splits appear after more settled tickets.";
  }
}
