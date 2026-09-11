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
async function renderToday(){
  const data = await loadLedger();
  const s = summarize(data);
  renderBank(document.getElementById("bank"), s);
  const types = Object.entries(s.byType).map(([k,v])=>`${k.toUpperCase()} ${v.w}-${v.l}-${v.p} (${money(v.pl)})`).join(" · ");
  const tickets = document.getElementById("tickets");
  const today = data.bets.filter(b => b.date === "2026-09-11" || b.status !== "SETTLED");
  tickets.innerHTML = `<p class="note">${types || "No settled type splits yet."}</p>` + today.map(b => `
    <div class="row">
      <span class="stamp ${b.status.toLowerCase()}">${b.status}</span>
      <b> ${b.sport} ${b.game}</b>
      <div>${b.pick} · ${b.close}</div>
      <div class="note">${b.stake} to win ${b.to_win}${b.final?" · "+b.final:""}${b.result?" · "+b.result:""}</div>
      <a href="${b.href}">BOARD</a>
    </div>`).join("");
  const loops = document.getElementById("loops");
  loops.innerHTML = "<ul>" + (data.loops||[]).map(x=>`<li>${x}</li>`).join("") + "</ul>";
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
