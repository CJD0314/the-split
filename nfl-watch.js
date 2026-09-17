const NFL_WATCH_WEEK = 2;
const NFL_WATCH = {
  2: {
    note: "Week 2 watch is usage plus this week's matchup, not a recap box. Props are the market we want as of Wednesday night — confirm the live DraftKings number and juice before you bet it. This is not a DFS sheet and it is not a unit list. Zay Flowers (hamstring) did not practice Wednesday. Kyler Murray is in concussion protocol. Joe Burrow was limited with back tightness and said he expects to play.",
    qb: [
      {
        name: "Josh Allen", team: "buf", game: "DET at BUF · Thu 8:15",
        why: "20-of-29, 334 pass yards, two pass TD, plus two rushing scores at Houston. That Texans front was supposed to be the best in football and Buffalo still dropped 36. Lions just survived 31-30 in OT after a 21-0 lead vanished — Detroit's defense was the leak. First regular-season game in the new Highmark. Total sitting in the mid-50s.",
        prop: "Allen over 250.5 pass yards",
        propWhy: "Published TNF number. He already cleared 334 against a better front. Six carries, only 23 rush yards last week, so the rush-yard over is the trap. Take the passing volume in a track meet."
      },
      {
        name: "Lamar Jackson", team: "bal", game: "NO at BAL · Sun 1:00",
        why: "17-of-25, 324 yards, 13.0 yards per attempt, seven rushes for 40 and a score at Indy. Baltimore piled up 506 yards and 41 points. Saints just threw their way back from 21-0 and still lost in Detroit. Home opener versus a club that has to pass to keep up.",
        prop: "Jackson over 225.5 pass yards",
        propWhy: "Efficiency, not empty volume. Flowers missed the entire second half last week and is a Wednesday DNP with the same hamstring. If he sits, the yardage still lives on Bateman and the tight ends because New Orleans will trail."
      },
      {
        name: "Caleb Williams", team: "chi", game: "MIN at CHI · Sun 1:00",
        why: "21-of-29, 269 pass, 10 carries for 65, two pass TD and two rush TD in a 59-37 road win. Highest-scoring Week 1 game in NFL history. Minnesota just hung 39 on Green Bay. This is the highest-scoring 1:00 window on the board.",
        prop: "Williams over 29.5 rush yards",
        propWhy: "Ten carries, 6.5 a pop, two rushing scores. Flores just blitzed on 78 percent of snaps against Love. Designed QB run is the counter when Minnesota sells out to the pass."
      },
      {
        name: "Trevor Lawrence", team: "jax", game: "JAX at DEN · Sun 4:05",
        why: "18-of-23, 245 yards, four TD, 150.6 rating vs Cleveland. Cleanest QB tape of Week 1. Denver just got punched 31-10 on Monday, handed play-calling to Davis Webb, and watched Kenneth Walker run for 173. That is a smashed home script until they prove otherwise.",
        prop: "Lawrence over 1.5 pass TD",
        propWhy: "Four scores on 23 attempts. An 0-1 Denver defense that just gave Walker 173 is not suddenly tight at altitude."
      }
    ],
    rb: [
      {
        name: "Jahmyr Gibbs", team: "det", game: "DET at BUF · Thu 8:15",
        why: "Career-high 29 carries, 156 yards, two rushing TD, five catches in OT. Lions leaned on him once Goff stalled. Buffalo ranked near the bottom in rush EPA through one week after Houston ran for 31. Short week, but the usage is locked.",
        prop: "Gibbs over 89.5 rush yards",
        propWhy: "Live TNF number. Twenty-nine carries is the tell. Even if Detroit trails in a 50-point game they will still hand it to him early."
      },
      {
        name: "Kenneth Walker", team: "kc", game: "IND at KC · Sun 8:20",
        why: "23-173-1 plus a receiving score in his Chiefs debut. AFC Offensive Player of the Week. Fourteen broken tackles. Mahomes was fine. Walker was the game. Colts just gave Derrick Henry 24-144-3.",
        prop: "Walker over 79.5 rush yards",
        propWhy: "Wednesday market is 79.5, not a juiced 94. That is the number. Prime-time home script after a 31-10. Do not sit the new lead back."
      },
      {
        name: "Derrick Henry", team: "bal", game: "NO at BAL · Sun 1:00",
        why: "24-144-3 at Indy. Saints just spent an entire second half throwing to keep up. Baltimore will run to end this one at home.",
        prop: "Henry over 0.5 rush TD",
        propWhy: "Three scores on 24 carries. New Orleans just lost a track meet. Goal-line Henry is the Ravens' closer."
      },
      {
        name: "D'Andre Swift", team: "chi", game: "MIN at CHI · Sun 1:00",
        why: "18-124-3 at Carolina, 6.9 a carry, seven missed tackles. Bears scored 59. Minnesota just played a 39-22 game. Volume stays in a division tilt that can get sloppy.",
        prop: "Swift over 69.5 rush yards",
        propWhy: "Three rushing scores on 18 carries. Chicago will not abandon a run that just worked for 59 points."
      },
      {
        name: "Saquon Barkley", team: "phi", game: "PHI at TEN · Sun 1:00",
        why: "Only 83 yards on 15 vs Washington, but Titans just lost 23-10 at home to the Jets and could not stop Breece Hall (22-102-1). Philadelphia should lean on the ground on the road.",
        prop: "Barkley over 79.5 rush yards",
        propWhy: "Live market. Week 1 was a short-yardage slog. Tennessee is the reset. Hall already proved that front is soft."
      }
    ],
    wr: [
      {
        name: "Amon-Ra St. Brown", team: "det", game: "DET at BUF · Thu 8:15",
        why: "10 catches, 67 yards, two scores on 14 targets. OT winner. Volume, not explosiveness. Buffalo just watched Houston's pass game hang 31. Detroit's passing game lives here when Gibbs is not on the field.",
        prop: "St. Brown over 7.5 receptions",
        propWhy: "Published TNF number. Fourteen targets in a one-score game. A mid-50s Thursday night does not cut his target share."
      },
      {
        name: "Jaxon Smith-Njigba", team: "sea", game: "SEA at ARI · Sun 4:25",
        why: "Eight for 122 and a score in a 13-10 slog. He was the entire passing game. Arizona just beat the Chargers 26-14 as a double-digit dog. This is a real target share in a game that can open up.",
        prop: "JSN over 6.5 receptions",
        propWhy: "Eight catches on 11 targets in a low-scoring game. If Seattle has to throw to keep up, that number is the floor."
      },
      {
        name: "Ja'Marr Chase", team: "cin", game: "CIN at HOU · Sun 1:00",
        why: "Burrow went 25-of-35 for 254 and a score in the 33-27 win. Houston just gave Dalton Kincaid 130 and Josh Allen 334. If Burrow is active — he said sitting would be 'ridiculous' — Chase is the vertical answer against that leaked Texans zone.",
        prop: "Chase over 79.5 rec yards",
        propWhy: "Confirm Burrow first. The Texans front that was supposed to wreck Week 1 just got cooked. Chase is the first read when Cincinnati trails."
      },
      {
        name: "Justin Jefferson", team: "min", game: "MIN at CHI · Sun 1:00",
        why: "Eight for 92 and two scores vs Green Bay — both touchdowns from Carson Wentz after Kyler Murray exited in the first quarter with a concussion. Chicago just allowed 37 points and 361 passing yards. Jefferson vs a defense that just played a track meet.",
        prop: "Jefferson over 84.5 rec yards",
        propWhy: "Nine targets, two TD. Murray is still in protocol and only limited Wednesday. Wentz already found him twice. Either quarterback still has to throw to keep up with Chicago."
      },
      {
        name: "Chris Olave", team: "no", game: "NO at BAL · Sun 1:00",
        why: "Week 1 receiving leader: 10 for 182 on the Lions. Tyler Shough threw for 410. Ugly loss, monster usage. Baltimore just scored 41, so New Orleans will be in the same empty script they used in Detroit.",
        prop: "Olave over 74.5 rec yards",
        propWhy: "Ten catches, 182 yards against a good front. Playing from behind in Baltimore recreates the volume even if the Ravens secondary is tighter."
      }
    ],
    te: [
      {
        name: "Dalton Kincaid", team: "buf", game: "DET at BUF · Thu 8:15",
        why: "Five for 130 vs Houston. Highest TE yardage of Week 1. Lions just spent overtime chasing. Allen looks his way when the pocket is clean.",
        prop: "Kincaid over 54.5 rec yards",
        propWhy: "26 yards a catch. One chunk play from Allen recreates the number in a 50-point game."
      },
      {
        name: "Trey McBride", team: "ari", game: "SEA at ARI · Sun 4:25",
        why: "Nine for 95 and a score on 13 targets at the Chargers. Brissett's first read. Seattle just won 13-10 and lived in 11 personnel.",
        prop: "McBride over 6.5 receptions",
        propWhy: "Thirteen targets is TE1 usage. Seattle's middle of the field is the hole."
      },
      {
        name: "Travis Kelce", team: "kc", game: "IND at KC · Sun 8:20",
        why: "71 yards in the 31-10, including a 59-yarder that flipped the field. Walker ate the box. That leaves Kelce one-on-one in the seam on Sunday night versus a Colts defense Henry just gashed.",
        prop: "Kelce over 49.5 rec yards",
        propWhy: "Prime-time home script. When Walker forces the linebackers downhill, Kelce's over becomes the easiest number on the SNF board."
      },
      {
        name: "Mike Gesicki", team: "cin", game: "CIN at HOU · Sun 1:00",
        why: "Five for 78 and a score as Burrow's safety valve vs Tampa. Houston just gave Kincaid 130. If Burrow is active, Gesicki is the underneath answer against that Texans zone.",
        prop: "Gesicki over 44.5 rec yards",
        propWhy: "Confirm Burrow first. If he plays, Houston already showed it can be leaked in the seams."
      }
    ],
    def: [
      {
        name: "Eagles D/ST", team: "phi", game: "PHI at TEN · Sun 1:00",
        why: "Titans just lost 23-10 at home to the Jets. Cam Ward's supporting cast could not run or protect. Philadelphia's front should live in that backfield.",
        prop: "Eagles D/ST over 2.5 sacks",
        propWhy: "Tennessee could not protect versus New York. That is the spot — not Dallas, not San Francisco."
      },
      {
        name: "49ers D/ST", team: "sf", game: "MIA at SF · Sun 4:25",
        why: "San Francisco just won 27-7 in Melbourne. Miami lost 27-13 at Las Vegas and Malik Willis posted a 66.9 rating. Home favorite versus a backup-look passing game.",
        prop: "Dolphins team total under 17.5",
        propWhy: "If DK posts Miami's team total, that under is the real ticket. The Dolphins just managed 13 on the road. Do not invent a sack number that is not on the board."
      },
      {
        name: "Ravens D/ST", team: "bal", game: "NO at BAL · Sun 1:00",
        why: "Baltimore just scored 41 and piled up 506 yards. Saints lost in OT after an empty passing script. Home favorite versus a club that has to throw to keep up.",
        prop: "Ravens D/ST over 2.5 sacks",
        propWhy: "Confirm the live DK sack total. New Orleans kept Shough in an empty script for three hours in Detroit. That is how sack numbers cash."
      },
      {
        name: "Bills D/ST", team: "buf", game: "DET at BUF · Thu 8:15",
        why: "Home opener in the new building. Detroit's defense was the leak last week, not Buffalo's. The Lions needed OT after a 21-0 lead vanished. Take the home front if the sack number is honest.",
        prop: "Bills D/ST over 2.5 sacks",
        propWhy: "Goff stalled once Detroit sat on the lead. A short week on the road in a new stadium is where sack numbers cash."
      }
    ]
  }
};

function watchCard(p, i){
  const logo = "https://a.espncdn.com/i/teamlogos/nfl/500/" + p.team + ".png";
  return `<article class="watch">
    <div class="watch-top"><span class="rk">${i+1}</span><img src="${logo}" alt=""><div><b>${p.name}</b><span>${p.game}</span></div></div>
    <p>${p.why}</p>
    <div class="watch-prop"><b>PROP</b><span>${p.prop}</span></div>
    <p class="watch-why">${p.propWhy}</p>
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
    return `<details class="block" open><summary>${title} · ${rows.length}</summary><div class="body">${rows.map(watchCard).join("")}</div></details>`;
  }).join("");
}

paintNflWatch(NFL_WATCH_WEEK);
