function typeOrder(b){
  const t = String(b.type||"").toLowerCase();
  if (t === "side" || t === "ml" || t === "total") return 0;
  if (t === "td" || t === "hr") return 1;
  return 2;
}
function reviewRow(b){
  const href = b.href || "#";
  const conf = String(b.confidence || "LEAN").toUpperCase();
  const pl = b.status === "SETTLED" ? money(b.pl) : "OPEN";
  const date = (b.date||"").slice(5);
  return `<article class="tix"><div class="tix-top"><span class="tix-date">${date}</span><a class="tix-game" href="${href}">${b.game}</a><span class="stamp ${conf.toLowerCase()}">${conf}</span></div><div class="tix-pick">${typeLabel(b)} \u00b7 ${b.pick}</div><div class="tix-line">${b.close || b.booked || "--"}</div><div class="tix-bot"><span class="${resultClass(b)}">${resultText(b)}</span><span class="tix-pl ${resultClass(b)}">${pl}</span></div></article>`;
}
function reviewTable(rows){
  if (!rows.length) return `<p class="note">No tickets.</p>`;
  const settled = rows.filter(b => b.status === "SETTLED");
  const pl = settled.reduce((a,b)=>a+(Number(b.pl)||0),0);
  const sorted = rows.slice().sort(function(a,c){
    return String(a.date||"").localeCompare(String(c.date||"")) || typeOrder(a)-typeOrder(c) || String(a.game||"").localeCompare(String(c.game||""));
  });
  return `<div class="tix-list">${sorted.map(reviewRow).join("")}<div class="tix-total">Section P/L <b>${money(pl)}</b></div></div>`;
}
