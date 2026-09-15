window.NFL_TAPE = {
ari:{scheme:"Multiple front that finished on the road.",blitz:"Three sacks. Enough to end drives.",sim:"Not the look. The front got home.",def:"268 yards allowed. Home chalk on the other sideline died."},
atl:{scheme:"Four-down. Best Week 1 run defense (58 rush yards allowed).",blitz:"Sheppard 43%.",sim:"Not the story. Run fits were.",def:"Run defense held. This club's problem was scoring 13."},
bal:{scheme:"Minter Big Nickel. Hamilton is the joker. Weaver runs it.",blitz:"43.4%. Hendrickson 58.6% pressure on the field, 20% off.",sim:"Four-man rush wearing a blitz rate.",def:"Pass defense held Jones to 149 yards. Taylor still ran for 98-2."},
buf:{scheme:"Not a volume-blitz defense this week.",blitz:"Not the identity.",sim:"Not the look.",def:"Allowed 31. Allen closed the game. This front did not dominate."},
car:{scheme:"Sub personnel. Run fits collapsed.",blitz:"Not relevant. They could not tackle.",sim:"Light box got cooked.",def:"291 rush yards, 7.5 per carry, 6 rush TDs, 59 points."},
chi:{scheme:"Offense covered a leaky pass defense.",blitz:"Not the identity.",sim:"Young threw 361.",def:"Won 59-37 and still leaked the pass. Do not assume this defense travels."},
cin:{scheme:"Golden four-down. Lawrence inside. Rush four.",blitz:"Low-blitz club. Did not need a sixth rusher.",sim:"Not needed.",def:"4 sacks, 4 fumbles recovered, a defensive touchdown."},
cle:{scheme:"Defense is not the headline. The offense is dead.",blitz:"Took five sacks.",sim:"Watson under siege.",def:"1-of-8 on third down. 10 points."},
dal:{scheme:"Parker, Fangio tree. 3-4 on 41% of snaps (112 yards). Nickel on 35% (215 yards). 78% zone.",blitz:"Seventh-highest rate. 21st in pressure.",sim:"Showed extra. Did not finish. Four-man rush: two pressures.",def:"Dart 17-of-19 when they rushed four. Nickel was the hole."},
den:{scheme:"LIVE.",blitz:"LIVE.",sim:"LIVE.",def:"Monday night. Not graded."},
det:{scheme:"Light box.",blitz:"Not the closer.",sim:"Cover leaked.",def:"Shough 410. Olave 182. Won in overtime."},
gb:{scheme:"Gannon Penny. Cooper on the edge. Third safety. 83% zone.",blitz:"Ate Flores at 78-82% of dropbacks.",sim:"Could not ID the extra man. Left a free rusher from the blindside.",def:"Allowed the last 29 points. Four linemen allowed pressure inside 2.50 seconds."},
hou:{scheme:"Ryans Wide-9. Static shells. Almost no disguise.",blitz:"Low.",sim:"Never showed extra. Allen kept the full play menu.",def:"7.9 yards per play. 409 yards. 36 points."},
ind:{scheme:"Revamped front looked the same.",blitz:"Two sacks on Lamar. Did not matter.",sim:"Could not steal a blocker vs Henry.",def:"506 yards, 202 rush, Henry 144-3."},
jax:{scheme:"Four-down rush. Hines-Allen and Walker.",blitz:"Five sacks from the front.",sim:"Not required.",def:"Browns 1-of-8 on third down."},
kc:{scheme:"LIVE.",blitz:"LIVE.",sim:"LIVE.",def:"Monday night. Not graded."},
lac:{scheme:"No finish at home.",blitz:"One sack.",sim:"Did not show up.",def:"393 yards. Lost outright as a 9-point favorite."},
lar:{scheme:"No rush on a short week.",blitz:"Zero sacks.",sim:"None.",def:"Allowed 27. Scored 7."},
lv:{scheme:"Four-down plus Jeanty.",blitz:"Five sacks.",sim:"Front got home.",def:"Pressure plus a featured back."},
mia:{scheme:"No-pressure front.",blitz:"Zero sacks.",sim:"None.",def:"Jeanty two receiving touchdowns through this look."},
min:{scheme:"Flores stacked front. Double A-gap. Force 11 personnel.",blitz:"82% of snaps. 78% of Love dropbacks. 15 hits. 4 sacks.",sim:"Preseason they simulated. Week 1 they sent it. Cashman came free.",def:"Early explosives still landed (Love 387, Watson 147). This is a closer defense."},
ne:{scheme:"Low-total road defense.",blitz:"Not the story. Maye threw three interceptions.",sim:"Not the story.",def:"Allowed 13. The number was the total."},
no:{scheme:"Staley. Fangio tree. Cover 3. Light box. Low blitz.",blitz:"Situational only.",sim:"Light box, not stacked pressure.",def:"Gibbs 156-2 through the box."},
nyg:{scheme:"Won with the offense.",blitz:"Zero sacks.",sim:"They attacked Dallas nickel. They did not live in sim themselves.",def:"244 yards allowed. Offense and Likely carried."},
nyj:{scheme:"Glenn. Multiple 3-4 / 2-4-5 nickel. Edges in a two-point stance.",blitz:"44.9%. Changeup. The four-man and Hall are the identity.",sim:"Not stacked.",def:"195 yards allowed. 38:46 time of possession. Three sacks."},
phi:{scheme:"Fangio two-high. Cover 9 weak rotation. Nickel and penny.",blitz:"35.8%. One sack (Campbell). Hunt seven pressures.",sim:"Showed extra. Did not finish the extra man.",def:"Won 24-22. Did not cover 5.5."},
pit:{scheme:"Watt is the package.",blitz:"Four sacks, two interceptions, a pick-six.",sim:"Not required when Watt wins.",def:"Ugly 20-13. The front traveled. The pass game did not need to."},
sea:{scheme:"Macdonald 3-4 that becomes 4-3 with Emmanwori at SAM.",blitz:"35.8%. Three interceptions on Maye.",sim:"Takeaways more than simulated pressure.",def:"Never pulled away. Thirteen points scored."},
sf:{scheme:"Stingiest scoring defense on the slate.",blitz:"Not the headline.",sim:"Held a short-week home favorite to 7.",def:"Seven points allowed."},
tb:{scheme:"Bowles. Average front on this tape.",blitz:"42.9%.",sim:"Not the story. Four giveaways on offense were.",def:"351 yards allowed. Irving still scored the other way."},
ten:{scheme:"Soft home front.",blitz:"Took three sacks.",sim:"None.",def:"Allowed Hall 102 and 23 points at home."},
wsh:{scheme:"Quinn.",blitz:"50.9%. Only coordinator besides Flores over 50%.",sim:"Enough pressure to keep it inside a field goal. Not Flores volume.",def:"Lost 24-22. Covered +5.5."}
};
(function(){
  const I = window.NFL_IDENTITIES || {};
  Object.keys(window.NFL_TAPE||{}).forEach(function(k){
    const d = window.NFL_TAPE[k];
    if (!I[k]) return;
    I[k].scheme = d.scheme; I[k].blitz = d.blitz; I[k].sim = d.sim; I[k].def = d.def;
  });
  if (I.was && window.NFL_TAPE.wsh){
    ["scheme","blitz","sim","def"].forEach(function(f){ I.was[f] = window.NFL_TAPE.wsh[f]; });
  }
})();
