window.NFL_OFF = {
ari:{offscheme:"Brissett. McBride the target.",engine2:"Brissett 277. McBride 95. Harrison 0 TD.",offhole:"Not a volume smash. Won because Chargers leaked.",howoff:"Harrison TD is not required for the dog."},
atl:{offscheme:"Bijan is the offense.",engine2:"Bijan 83 rush, 90 receiving, 1 TD.",offhole:"13 points. Could not cover +6.5.",howoff:"Bijan without the Falcons side."},
bal:{offscheme:"Run first. Play-action off Henry.",engine2:"Henry 144-3. Lamar 324. Flowers 150.",offhole:"None on this tape.",howoff:"Henry first. Then Lamar."},
buf:{offscheme:"Allen closer. Play-action. Tight end volume.",engine2:"Allen 334 and two rush TDs. Kincaid 130 yards, 0 TD.",offhole:"Kincaid yards without the score.",howoff:"Allen is the side. Kincaid is not a captain."},
car:{offscheme:"Young can throw.",engine2:"Young 361-3. Coker 138. 37 points.",offhole:"Offense scored enough to win most weeks. The run defense lost the game.",howoff:"Coker is live. Carolina points are not."},
chi:{offscheme:"Dual-threat QB. Two 100-yard backs.",engine2:"Swift 124-3. Monangai 100. Williams two pass TDs and two rush TDs.",offhole:"None on offense. Pass defense leaked 361 the other way.",howoff:"Swift is the slate."},
cin:{offscheme:"Burrow. Chase was quiet.",engine2:"Burrow 254. Defense scored.",offhole:"Chase not required this week.",howoff:"Do not force the Chase stack."},
cle:{offscheme:"Dead.",engine2:"Watson 205. Five sacks taken.",offhole:"10 points. 1-of-8 on third down.",howoff:"Do not board this offense."},
dal:{offscheme:"Brand offense.",engine2:"Not enough to cover or win.",offhole:"Lost outright by 8.",howoff:"Brand is not a stack."},
den:{offscheme:"LIVE.",engine2:"LIVE.",offhole:"LIVE.",howoff:"Wait for the final."},
det:{offscheme:"Gibbs is the offense.",engine2:"Gibbs 156-2.",offhole:"Needed overtime. Did not cover 7.5.",howoff:"Gibbs is the Lion. The number leaked."},
gb:{offscheme:"Love volume. Explosives early.",engine2:"Love 387. Watson 147.",offhole:"Offensive line under 2.50 seconds to pressure. Side died after a 22-10 lead.",howoff:"Love yards are not the Packers side."},
hou:{offscheme:"Could not close.",engine2:"Montgomery three TDs. Stroud strip-sacked late.",offhole:"Hung 31 and lost.",howoff:"Montgomery without Houston points."},
ind:{offscheme:"Taylor is the offense.",engine2:"Taylor 98-2. Jones 149 pass yards.",offhole:"Fell in a 28-6 hole. Pass game dead.",howoff:"Taylor anytime. Not Colts points."},
jax:{offscheme:"Lawrence vs a dead offense.",engine2:"Lawrence 245, four TD passes.",offhole:"Opponent quality (Cleveland) is the caution.",howoff:"Home vs a dead offense: lay it. Do not treat four TDs as a weekly ceiling."},
kc:{offscheme:"LIVE.",engine2:"LIVE.",offhole:"LIVE.",howoff:"Wait for the final."},
lac:{offscheme:"Home favorite. 14 points.",engine2:"None this tape.",offhole:"Lost outright as a 9-point favorite.",howoff:"Do not stack leaking home chalk."},
lar:{offscheme:"Short-week home. 7 points.",engine2:"Nacua 74. No closer.",offhole:"Scored 7.",howoff:"Do not stack the home QB."},
lv:{offscheme:"Jeanty is the offense.",engine2:"Jeanty 23-102 and two receiving TDs.",offhole:"None on this tape.",howoff:"Jeanty, then the home number."},
mia:{offscheme:"Never entered the number after the first quarter.",engine2:"13 points.",offhole:"No answer for Jeanty.",howoff:"Do not stack Miami vs a featured home back."},
min:{offscheme:"Jefferson plus a closer script.",engine2:"Jefferson 8-92-2. Last 29 points.",offhole:"Trailed 22-10. Needed Flores to finish.",howoff:"Jefferson. Minnesota late. Not a three-quarter smash."},
ne:{offscheme:"Maye. Three interceptions.",engine2:"10 points.",offhole:"Pass script died.",howoff:"Skip Maye."},
no:{offscheme:"Shough volume. Olave.",engine2:"Shough 410. Olave 182. 30 points.",offhole:"Lost in OT. The light-box defense was the problem, not this pass game.",howoff:"Olave is the Saint."},
nyg:{offscheme:"Dart. Tight end.",engine2:"Dart 230 and three TDs. Likely two TDs. Nabers 69. Dart 54 rush.",offhole:"Zero sacks on defense. Offense had to carry.",howoff:"Likely is the isolation."},
nyj:{offscheme:"Hall and the clock.",engine2:"Hall 22-102-1. 38:46 time of possession.",offhole:"Not explosive. Possession offense.",howoff:"Hall is the Jet."},
phi:{offscheme:"Hurts. Barkley. Goedert in the red zone.",engine2:"Hurts 203. Barkley 83. Goedert 4-77-2.",offhole:"Won by 2. Did not cover 5.5.",howoff:"Goedert in a tight script. Not the home number."},
pit:{offscheme:"Ugly 20 points. Watt scored.",engine2:"Rodgers 221 and a score.",offhole:"Offense is not a stack.",howoff:"Do not pay the Steelers pass game in a 20-13."},
sea:{offscheme:"JSN.",engine2:"JSN 8-122-1. 13 points.",offhole:"Never pulled away.",howoff:"JSN only."},
sf:{offscheme:"Control. Run game.",engine2:"Purdy 205. CMC 68 rush, 20 receiving, 0 TD.",offhole:"Yards without the score for CMC.",howoff:"Do not auto-captain CMC."},
tb:{offscheme:"Mayfield. Four giveaways.",engine2:"Irving rush TD. 27 points.",offhole:"Turnovers lost the number.",howoff:"Irving without the Bucs side."},
ten:{offscheme:"Ward. Home opener.",engine2:"Ward 140. 10 points.",offhole:"Three sacks taken. 195 yards.",howoff:"Do not stack this home opener."},
wsh:{offscheme:"Daniels. Stayed inside a field goal.",engine2:"22 points.",offhole:"Lost 24-22. The number cashed anyway.",howoff:"The cover was the number, not a Washington stack."}
};
(function(){
  const I = window.NFL_IDENTITIES || {};
  Object.keys(window.NFL_OFF||{}).forEach(function(k){
    const d = window.NFL_OFF[k];
    if (!I[k]) return;
    I[k].offscheme = d.offscheme; I[k].engine2 = d.engine2; I[k].offhole = d.offhole; I[k].howoff = d.howoff;
  });
  if (I.was && window.NFL_OFF.wsh){
    ["offscheme","engine2","offhole","howoff"].forEach(function(f){ I.was[f] = window.NFL_OFF.wsh[f]; });
  }
})();
