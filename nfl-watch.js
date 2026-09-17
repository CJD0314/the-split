const NFL_WATCH_WEEK = 2;
const NFL_WATCH = {
  2: {
    note: "One prop each. Not a unit list. Confirm the live DraftKings number. Flowers DNP — sit him. Burrow limited, says he plays. Murray still in protocol. Swift limited — do not bet him until Friday practice is clean.",
    qb: [
      {
        name: "Josh Allen", team: "buf", game: "DET at BUF · Thu 8:15", tag: "TNF",
        why: "Allen threw for 334 at Houston. Detroit just allowed 410 pass yards and needed OT after a 21-0 lead. Total is 54.5. That is a passing game.",
        prop: "Allen over 250.5 pass yards",
        propWhy: "250.5 sits well under last week's 334. Skip his rush over — he only ran for 23. The pass over is the one that matches a one-score Thursday."
      },
      {
        name: "Lamar Jackson", team: "bal", game: "NO at BAL · Sun 1:00", tag: "FLOWERS DNP",
        why: "17-of-25 for 324 and 13.0 yards per attempt at Indy. Saints just spent a half throwing to keep up and still lost. They will trail again in Baltimore.",
        prop: "Jackson over 225.5 pass yards",
        propWhy: "Sit Flowers. Do not sit Lamar. He already cleared 324 without a full Flowers game. Bateman and the tight ends cover 225.5."
      },
      {
        name: "Caleb Williams", team: "chi", game: "MIN at CHI · Sun 1:00",
        why: "Ten carries, 65 yards, two rushing scores in a 59-37 win. Flores just blitzed Love on 78 percent of snaps. Designed QB run is how Chicago answers that.",
        prop: "Williams over 29.5 rush yards",
        propWhy: "He already doubled this number. If Swift is limited, the designed keepers stay. This is not a passing-yard bet."
      },
      {
        name: "Trevor Lawrence", team: "jax", game: "JAX at DEN · Sun 4:05",
        why: "Four touchdown passes on 23 attempts against Cleveland. Denver just gave Kenneth Walker 173 and got punched 31-10 at home.",
        prop: "Lawrence over 1.5 pass TD",
        propWhy: "He already had four. An 0-1 Denver defense that just got run through is not suddenly tight at altitude."
      }
    ],
    rb: [
      {
        name: "Jahmyr Gibbs", team: "det", game: "DET at BUF · Thu 8:15", tag: "TNF",
        why: "Twenty-nine carries, 156 yards, two scores. Montgomery is gone. Detroit still wants to run so Goff is not in obvious passing downs. Buffalo just let Houston run for 31.",
        prop: "Gibbs over 89.5 rush yards",
        propWhy: "89.5 is 3.6 yards on 25 carries. Two starting linemen are out, so this is volume, not explosiveness. That is the same script as Lions +4.5 — Detroit stays on schedule through Gibbs, not through Goff hero ball."
      },
      {
        name: "Kenneth Walker", team: "kc", game: "IND at KC · Sun 8:20",
        why: "23-173-1 plus a receiving score in his Chiefs debut. Indianapolis just gave Derrick Henry 24-144-3. Kansas City is at home after a 31-10.",
        prop: "Walker over 79.5 rush yards",
        propWhy: "The number is 79.5, not 94. Home script after a blowout. He is the new lead back. Take the live number."
      },
      {
        name: "Derrick Henry", team: "bal", game: "NO at BAL · Sun 1:00",
        why: "Three rushing scores on 24 carries at Indy. Baltimore is a home touchdown-plus favorite. New Orleans will throw to keep up, then Baltimore will close on the ground.",
        prop: "Henry over 0.5 rush TD",
        propWhy: "Goal-line Henry is the closer in this script. The yardage over can get messy if they sit on the lead. The touchdown is the ticket."
      },
      {
        name: "D'Andre Swift", team: "chi", game: "MIN at CHI · Sun 1:00", tag: "SIT UNTIL FRI",
        why: "18-124-3 at Carolina. The number works only if he is a full-go. He was limited Wednesday with ankle/knee. Monangai was limited too.",
        prop: "Swift over 69.5 rush yards",
        propWhy: "Do not bet this tonight. Revisit after Friday practice. If he is full, Chicago will keep feeding the back who just scored three. If he is scaled back, the ticket is dead."
      },
      {
        name: "Saquon Barkley", team: "phi", game: "PHI at TEN · Sun 1:00",
        why: "Week 1 was a slog — 83 yards on 15. Tennessee just lost 23-10 at home and let Breece Hall go 22-102-1. Philadelphia should lean run on the road.",
        prop: "Barkley over 79.5 rush yards",
        propWhy: "The Titans front already showed it is soft. This is the reset from the short-yardage Washington game, not a new identity."
      }
    ],
    wr: [
      {
        name: "Amon-Ra St. Brown", team: "det", game: "DET at BUF · Thu 8:15", tag: "TNF",
        why: "Fourteen targets, 10 catches, two scores, including the OT winner. Goff's first read does not disappear in a 54-point game.",
        prop: "St. Brown over 7.5 receptions",
        propWhy: "This is catches, not yards. He can clear 7.5 on checkdowns while Gibbs still gets his carries. The two tickets do not fight each other."
      },
      {
        name: "Jaxon Smith-Njigba", team: "sea", game: "SEA at ARI · Sun 4:25",
        why: "Eight catches for 122 on 11 targets in a 13-10 slog. He was Seattle's passing game. Arizona just beat the Chargers as a double-digit dog.",
        prop: "JSN over 6.5 receptions",
        propWhy: "He already had eight in a low-scoring game. If this one opens up, 6.5 is the floor."
      },
      {
        name: "Ja'Marr Chase", team: "cin", game: "CIN at HOU · Sun 1:00", tag: "CONFIRM BURROW",
        why: "Houston just gave Allen 334 and Kincaid 130. Chase is the first read if Cincinnati trails.",
        prop: "Chase over 79.5 rec yards",
        propWhy: "Only if Burrow is active. He was limited Wednesday and said sitting would be ridiculous. If he sits, kill this ticket."
      },
      {
        name: "Justin Jefferson", team: "min", game: "MIN at CHI · Sun 1:00", tag: "QB WATCH",
        why: "Eight for 92 and two scores. Both touchdowns came from Wentz after Murray left. Chicago just allowed 37 points and 361 passing yards.",
        prop: "Jefferson over 84.5 rec yards",
        propWhy: "The quarterback can be Murray or Wentz. Both have to throw to keep up with Chicago. Wentz already found him twice."
      },
      {
        name: "Chris Olave", team: "no", game: "NO at BAL · Sun 1:00",
        why: "Ten for 182 last week. Baltimore just scored 41. New Orleans will be throwing from behind again.",
        prop: "Olave over 74.5 rec yards",
        propWhy: "Empty-script volume. He already doubled this number against a better front. Tighter secondary in Baltimore does not erase a 10-target share."
      }
    ],
    te: [
      {
        name: "Dalton Kincaid", team: "buf", game: "DET at BUF · Thu 8:15", tag: "TNF",
        why: "Five for 130 against Houston. Highest tight-end yardage of Week 1. Allen looks here when the pocket is clean in a 54-point game.",
        prop: "Kincaid over 54.5 rec yards",
        propWhy: "One chunk play gets you there. This sits under Allen's pass over — same game, same script."
      },
      {
        name: "Trey McBride", team: "ari", game: "SEA at ARI · Sun 4:25",
        why: "Thirteen targets, nine catches, a score. Brissett's first read. Seattle just lived in 11 personnel in a 13-10.",
        prop: "McBride over 6.5 receptions",
        propWhy: "Thirteen targets is TE1 usage. The middle of Seattle's defense is the hole. Catches, not a dart TD."
      },
      {
        name: "Travis Kelce", team: "kc", game: "IND at KC · Sun 8:20",
        why: "71 yards in the 31-10, including a 59-yarder. Walker forces linebackers downhill. That leaves Kelce in the seam.",
        prop: "Kelce over 49.5 rec yards",
        propWhy: "Home Sunday night. Walker is the run ticket. Kelce is the easy receiving number when the box empties. Same game, two different jobs."
      },
      {
        name: "Mike Gesicki", team: "cin", game: "CIN at HOU · Sun 1:00", tag: "CONFIRM BURROW",
        why: "Five for 78 and a score as the safety valve against Tampa. Houston just leaked Kincaid for 130 in the seams.",
        prop: "Gesicki over 44.5 rec yards",
        propWhy: "Only if Burrow plays. Chase is the vertical. Gesicki is the underneath. Do not chain both if you already used Chase."
      }
    ],
    def: [
      {
        name: "Eagles D/ST", team: "phi", game: "PHI at TEN · Sun 1:00",
        why: "Titans lost 23-10 at home to the Jets. They could not run or protect. Philadelphia's front belongs in that backfield.",
        prop: "Eagles D/ST over 2.5 sacks",
        propWhy: "This is the soft protection spot on the board. Not Dallas. Not San Francisco."
      },
      {
        name: "Dolphins offense", team: "mia", game: "MIA at SF · Sun 4:25",
        why: "Miami scored 13 at Las Vegas. Willis posted a 66.9 rating. San Francisco just won 27-7 in Melbourne and is a home double-digit favorite.",
        prop: "Dolphins team total under 17.5",
        propWhy: "Bet the posted team total, not a sack number we invented. Miami already showed it cannot score 18 on the road."
      },
      {
        name: "Ravens D/ST", team: "bal", game: "NO at BAL · Sun 1:00",
        why: "Saints lived in an empty passing script for three hours in Detroit. Baltimore is the home favorite. That is how sack numbers cash.",
        prop: "Ravens D/ST over 2.5 sacks",
        propWhy: "Confirm the live DK sack total. This is the same Saints script that had Shough dropping back all night."
      },
      {
        name: "Bills D/ST", team: "buf", game: "DET at BUF · Thu 8:15", tag: "TNF",
        why: "Detroit starts Bartch, Scruggs, and Borom with Miller and Mahogany out. Goff stalled once they sat on the lead last week. Sacks can cash in a game Detroit still covers.",
        prop: "Bills D/ST over 2.5 sacks",
        propWhy: "Pressure on Goff does not mean Buffalo covers -4.5. Lions +4.5 can still be the side. This is a separate ticket on a patched line."
      }
    ]
  }
};

function watchChip(tag){
  if (!tag) return "";
  const cls = /OUT|DNP|SIT/i.test(tag) ? "chip chip-out" : /Q|LIMITED|CONFIRM|WATCH|PROTOCOL|FRI/i.test(tag) ? "chip chip-q" : "chip chip-live";
  return `<span class="${cls}">${tag}</span>`;
}

function watchCard(p, i){
  const logo = "https://a.espncdn.com/i/teamlogos/nfl/500/" + p.team + ".png";
  return `<article class="watch">
    <div class="watch-top"><span class="rk">${i+1}</span><img src="${logo}" alt=""><div><b>${p.name}</b><span>${p.game}${watchChip(p.tag)}</span></div></div>
    <div class="watch-prop"><b>PROP</b><span>${p.prop}</span></div>
    <p class="watch-why"><b>WHY</b> ${p.why} ${p.propWhy}</p>
  </article>`;
}

function paintNflWatch(week){
  const box = document.getElementById("nfl-watch");
  if (!box) return;
  const w = week || NFL_WATCH_WEEK;
  const data = NFL_WATCH[w];
  if (!data){
    box.innerHTML = `<p class="note">Weekly Watch for Week ${w} is not boarded yet.</p>`;
    return;
  }
  const blocks = [
    ["QB", data.qb],
    ["RB", data.rb],
    ["WR", data.wr],
    ["TE", data.te],
    ["DEF", data.def]
  ];
  box.innerHTML = `<p class="note">${data.note}</p>` + blocks.map(function(pair){
    const title = pair[0], rows = pair[1] || [];
    return `<details class="block"${title==="QB"?" open":""}><summary>${title} · ${rows.length}</summary><div class="body">${rows.map(watchCard).join("")}</div></details>`;
  }).join("");
}

paintNflWatch(NFL_WATCH_WEEK);
