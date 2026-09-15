(function(){
  const STATE = { day: "", sport: "ALL", kind: "ALL", conf: "ALL", data: null };

  function prettyDay(iso){
    if (!iso) return "ALL DAYS";
    const p = String(iso).split("-");
    if (p.length !== 3) return iso;
    const d = new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
    return d.toLocaleDateString("en-US", { weekday:"short", month:"short", day:"numeric" }).toUpperCase();
  }
  function shortDay(iso){
    if (!iso) return "ALL";
    return String(iso).slice(5).replace("-", "/");
  }
  function typeOrder(b){
    const t = String(b.type||"").toLowerCase();
    if (t === "side" || t === "ml" || t === "total") return 0;
    if (t === "td" || t === "hr") return 1;
    return 2;
  }
  function rec(rows){
    const settled = rows.filter(function(b){ return b.status === "SETTLED"; });
    const w = settled.filter(function(b){ return b.result === "WIN"; }).length;
    const l = settled.filter(function(b){ return b.result === "LOSS"; }).length;
    const p = settled.filter(function(b){ return b.result === "PUSH"; }).length;
    const pl = settled.reduce(function(a,b){ return a + (Number(b.pl)||0); }, 0);
    return { w:w, l:l, p:p, pl:pl, n:rows.length };
  }
  function recLabel(s){
    return s.p ? (s.w + "-" + s.l + "-" + s.p) : (s.w + "-" + s.l);
  }
  function daysFrom(bets){
    const set = {};
    bets.forEach(function(b){ if (b && b.date) set[b.date] = true; });
    return Object.keys(set).sort().reverse();
  }
  function passSport(b){
    if (STATE.sport === "ALL") return true;
    return b.sport === STATE.sport;
  }
  function passDay(b){
    if (!STATE.day) return true;
    return b.date === STATE.day;
  }
  function ticketKind(b){
    const t = String(b.type||"").toLowerCase();
    if (t === "hr") return "HR";
    if (t === "td") return "TD";
    if (t === "prop") return "PROP";
    return "SIDE";
  }
  function passKind(b){
    if (STATE.kind === "ALL") return true;
    return ticketKind(b) === STATE.kind;
  }
  function filtered(bets){
    return (bets||[]).filter(function(b){
      return passDay(b) && passSport(b) && passKind(b) && passFilter(b, STATE.conf);
    });
  }
  function chipRow(el, items, key){
    if (!el) return;
    el.innerHTML = items.map(function(it){
      const on = STATE[key] === it.value ? " on" : "";
      return "<button type=\"button\" class=\"" + on.trim() + "\" data-k=\"" + key + "\" data-v=\"" + it.value + "\">" + it.label + "</button>";
    }).join("");
    el.querySelectorAll("button").forEach(function(btn){
      btn.onclick = function(){
        STATE[btn.getAttribute("data-k")] = btn.getAttribute("data-v");
        paint();
      };
    });
  }
  function gameGroups(rows){
    const map = {};
    const order = [];
    rows.slice().sort(function(a,c){
      return String(c.date||"").localeCompare(String(a.date||""))
        || String(a.game||"").localeCompare(String(c.game||""))
        || typeOrder(a) - typeOrder(c);
    }).forEach(function(b){
      const k = (b.date||"") + "|" + (b.game||"");
      if (!map[k]){ map[k] = []; order.push(k); }
      map[k].push(b);
    });
    return order.map(function(k){ return map[k]; });
  }
  function ticketRow(b){
    const conf = String(b.confidence||"LEAN").toUpperCase();
    const pl = b.status === "SETTLED" ? money(b.pl) : "OPEN";
    const res = b.status === "SETTLED" ? (b.result||"") : "OPEN";
    return "<div class=\"row\">"
      + "<span class=\"kind\">" + typeLabel(b) + "</span>"
      + "<span class=\"pick\">" + (b.pick||pickLine(b)) + "<span class=\"stamp " + conf.toLowerCase() + "\">" + conf + "</span></span>"
      + "<span class=\"end " + resultClass(b) + "\">" + res + "  " + pl + "<small>" + (b.close||b.booked||"") + "</small></span>"
      + "</div>";
  }
  function gameBlock(rows){
    const b = rows[0];
    const href = b.href || "#";
    const score = (b.final || gameScore(b) || "").replace(/^FINAL\s*/i,"");
    const s = rec(rows);
    return "<div class=\"g-block\">"
      + "<div class=\"g-head\"><a href=\"" + href + "\">" + b.game + "</a><em>" + (score || shortDay(b.date)) + " · " + recLabel(s) + "</em></div>"
      + rows.map(ticketRow).join("")
      + "</div>";
  }
  function sportBlock(sp, rows, open){
    const s = rec(rows);
    const title = sp + "  ·  " + recLabel(s) + "  ·  " + money(s.pl);
    return sportDrop(title, gameGroups(rows).map(gameBlock).join(""), open);
  }
  function paint(){
    const data = STATE.data || { bets:[] };
    const all = data.bets || [];
    const rows = filtered(all);
    renderBank(document.getElementById("review-bank"), summarize(data));

    const days = daysFrom(all);
    chipRow(document.getElementById("day-filters"),
      [{value:"", label:"ALL"}].concat(days.map(function(d){ return { value:d, label:shortDay(d) }; })),
      "day");
    chipRow(document.getElementById("sport-filters"),
      [{value:"ALL",label:"ALL"},{value:"NFL",label:"NFL"},{value:"CFB",label:"CFB"},{value:"MLB",label:"MLB"}],
      "sport");
    chipRow(document.getElementById("type-filters"),
      [{value:"ALL",label:"ALL"},{value:"SIDE",label:"SIDES"},{value:"HR",label:"HR"},{value:"TD",label:"TD"},{value:"PROP",label:"PROPS"}],
      "kind");
    chipRow(document.getElementById("conf-filters"),
      [{value:"ALL",label:"ALL"},{value:"BET",label:"BET"},{value:"LEAN",label:"LEAN"},{value:"FADE",label:"FADE"}],
      "conf");

    const box = document.getElementById("review-tables");
    if (!box) return;
    if (!rows.length){
      box.innerHTML = "<p class=\"empty\">No tickets in this filter.</p>";
      return;
    }
    const s = rec(rows);
    const title = prettyDay(STATE.day) + (STATE.kind === "ALL" ? "" : " · " + STATE.kind);
    const head = "<div class=\"day-sum\"><b>" + title + "</b><span>" + recLabel(s) + " · " + rows.length + " tickets · " + money(s.pl) + "</span></div>";
    const order = ["NFL","CFB","MLB"];
    const sports = order.map(function(sp){
      const list = rows.filter(function(b){ return b.sport === sp; });
      if (!list.length) return "";
      return sportBlock(sp, list, order.filter(function(x){ return rows.some(function(b){ return b.sport===x; }); })[0] === sp);
    }).filter(Boolean).join("");
    box.innerHTML = head + sports;
  }

  window.renderReviews = async function(filter){
    if (filter) STATE.conf = filter;
    STATE.data = await loadLedger();
    const days = daysFrom(STATE.data.bets || []);
    if (!STATE.day && days.length) STATE.day = days[0];
    paint();
    if (window.splitStamp) splitStamp();
  };

  if (document.getElementById("review-tables")) window.renderReviews("ALL");
})();
