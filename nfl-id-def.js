window.NFL_DEF = {
car:"RUN HOLE — 291 yards, 7.5 YPC, 6 rush TDs, 59 points. Fade points vs any run identity.",
ind:"RUN HOLE — 506 yards, 202 rush, Henry 144-3, 5.5 YPC. Do not buy Colts points vs a run identity.",
hou:"EXPLOSIVE HOLE — Allen 7.9 yards per play, 400+ yards. Bully reputation leaked.",
det:"PASS HOLE — Shough 410, Olave 182. Cover leaked. Pass-ceiling dogs are live.",
chi:"PASS HOLE — Won 59-37 and still let Young throw 361. Do not assume this D travels.",
min:"LATE PRESSURE, EARLY PASS HOLE — Love 387. Closed with 15 hits and 4 sacks.",
lac:"NO PRESSURE — 1 sack, 393 yards, lost outright as a 9-point favorite.",
lar:"NO PRESSURE — 0 sacks. Short-week home favorite died.",
mia:"NO PRESSURE — 0 sacks. Jeanty two receiving TDs.",
cle:"EVERYTHING — 5 sacks taken, 1-of-8 third down.",
ten:"SOFT HOME FRONT — Ward 140 yards, 3 sacks allowed. Home opener died.",
dal:"BRAND, NOT A FRONT — Lost outright. 394 yards allowed.",
phi:"LEAKY HOME CHALK — Won by 2, did not cover 5.5.",
gb:"VOLUME THE OTHER WAY — MIN scored the last 29.",
no:"GIBBS HOLE — 156-2. Covered +7.5 anyway.",
bal:"MIXED — Taylor 98-2. Pass D held Indy to 149.",
atl:"RUN D HELD — 58 rush yards allowed. Offense was the problem.",
pit:"FRONT TRAVELS — 4 sacks, 2 INT, Watt pick-six.",
nyj:"BEST TOTAL D — 195 yards, 38:46 TOP, 3 sacks.",
jax:"PASS RUSH — 5 sacks, 1-of-8 third down.",
cin:"TAKEAWAY FRONT — 4 sacks, 4 FR, defensive TD.",
lv:"PRESSURE + JEANTY — 5 sacks. Respect the home number.",
sea:"TAKEAWAYS — 3 INT. Never pulled away.",
sf:"STINGIEST SCORING D — 7 points allowed.",
ari:"DISRUPTIVE ON THE ROAD — 3 sacks, won outright as a 9-point dog.",
wsh:"GOOD ENOUGH — lost by 2. The number was the ticket.",
ne:"LOW TOTAL HELD — 13 points allowed.",
buf:"CLOSE LATE — allowed 31. Allen was the closer.",
nyg:"WON WITHOUT SACKS — 0 sacks. Offense and Likely carried.",
tb:"AVERAGE — Irving still scored. Separate the back from the side.",
den:"LIVE — not graded.",
kc:"LIVE — not graded."
};
(function(){
  const I = window.NFL_IDENTITIES || {};
  Object.keys(window.NFL_DEF||{}).forEach(function(k){
    if (I[k]) I[k].def = window.NFL_DEF[k];
  });
})();
