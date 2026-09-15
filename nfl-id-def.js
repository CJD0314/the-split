window.NFL_TAPE = {
ne:{scheme:"Kuhr. Higher man and blitz than a base Cover-2 club. Wants Barmore active to muddy early downs. Gonzalez travels with WR1.",blitz:"Not the headline. Takeaways on Maye were more Seattle than New England pressure.",sim:"Not the look this week.",def:"Allowed 13. The number was the total. Coverage held JSN enough to push."},
sea:{scheme:"Macdonald 3-4 that becomes 4-3 with Emmanwori at SAM. Light boxes that still stop the run. Dime and matchup pressure.",blitz:"35.8%. Three interceptions on Maye.",sim:"Show-and-send is the Macdonald menu. Week 1 takeaways mattered more than a free rusher.",def:"Allowed 10. Never pulled away on the scoreboard."},
sf:{scheme:"Morris first year on the call. Held a short-week favorite to 7.",blitz:"Not the headline.",sim:"Not the headline.",def:"Seven points allowed. Stingiest scoring defense on the finished slate."},
lar:{scheme:"Shula. Interior changes when Donald is out.",blitz:"Zero sacks.",sim:"None.",def:"Allowed 27. No rush on a short week."},
chi:{scheme:"Dennis Allen. Four-down look that leaked the pass.",blitz:"Not the identity this week.",sim:"Not the identity.",def:"Young 361. Won 59-37 anyway. Do not assume this pass defense travels."},
car:{scheme:"Evero. Sub personnel. Light box.",blitz:"Not relevant. They could not tackle.",sim:"Light box got cooked.",def:"291 rush yards, 7.5 per carry, 6 rush TDs, 59 points."},
tb:{scheme:"Bowles. Multiple front.",blitz:"42.9%.",sim:"Not the story. Four giveaways on offense were.",def:"351 yards allowed."},
cin:{scheme:"Golden four-down. Lawrence inside. Rush four.",blitz:"Low-blitz club. Did not need a sixth rusher.",sim:"Not needed.",def:"4 sacks, 4 fumbles recovered, a defensive touchdown."},
no:{scheme:"Staley. Fangio tree. Cover 3. Light box. Low blitz.",blitz:"Situational only.",sim:"Light box, not stacked pressure.",def:"Gibbs 156-2 through the box."},
det:{scheme:"Sheppard. Light box.",blitz:"Not the closer.",sim:"Cover leaked.",def:"Shough 410. Olave 182. Won in overtime."},
buf:{scheme:"Leonhard. Not a volume-blitz defense this week.",blitz:"Not the identity.",sim:"Not the look.",def:"Allowed 31. Allen closed it. This front did not dominate."},
hou:{scheme:"Ryans Wide-9. Static shells. Almost no disguise.",blitz:"Low.",sim:"Never showed extra. Allen kept the full play menu.",def:"7.9 yards per play. 409 yards. 36 points."},
bal:{scheme:"Minter Big Nickel. Hamilton is the joker. Weaver runs the call.",blitz:"43.4%. Hendrickson 58.6% pressure on the field, 20% off.",sim:"Four-man rush wearing a blitz rate.",def:"Jones 149 pass yards. Taylor still ran for 98-2."},
ind:{scheme:"Anarumo. Revamped front looked the same vs Henry.",blitz:"Two sacks on Lamar. Did not matter.",sim:"Could not steal a blocker vs Henry.",def:"506 yards, 202 rush, Henry 144-3."},
cle:{scheme:"Rutenberg. Defense was not the headline. The offense was dead.",blitz:"They took five sacks on offense. That is not this heading.",sim:"Not the look.",def:"Allowed 34. Jacksonville wrecked third down."},
dal:{scheme:"Parker, Fangio tree. 3-4 on 41% of snaps (112 yards). Nickel on 35% (215 yards). 78% zone.",blitz:"Seventh-highest rate. 21st in pressure.",sim:"Showed extra. Did not finish. Four-man rush: two pressures.",def:"Dart 17-of-19 when they rushed four. Nickel was the hole."},
den:{scheme:"LIVE. Vance Joseph.",blitz:"LIVE.",sim:"LIVE.",def:"Monday night. Not graded."},
gb:{scheme:"Gannon Penny. Cooper on the edge. Third safety. 83% zone.",blitz:"Not a volume-blitz identity this week. They were the ones eating Flores the other way.",sim:"Not the look.",def:"Allowed 39. Last 29 points. Jefferson finished."},
hou2:{},
jax:{scheme:"Campanile four-down. Hines-Allen and Walker.",blitz:"Five sacks from the front.",sim:"Not required.",def:"Browns 1-of-8 on third down. 10 points allowed."},
kc:{scheme:"LIVE. Spagnuolo.",blitz:"LIVE.",sim:"LIVE.",def:"Monday night. Not graded."},
lac:{scheme:"O'Leary first year.",blitz:"One sack.",sim:"Did not show up.",def:"393 yards. Lost outright as a 9-point favorite."},
lv:{scheme:"Leonard four-down.",blitz:"Five sacks.",sim:"Front got home.",def:"Pressure plus Jeanty on the other side of the ball. 13 points allowed."},
mia:{scheme:"Duggan. No-pressure front this week.",blitz:"Zero sacks.",sim:"None.",def:"Jeanty two receiving touchdowns through this look."},
min:{scheme:"Flores stacked front. Double A-gap. Force 11 personnel.",blitz:"82% of snaps. 78% of Love dropbacks. 15 hits. 4 sacks.",sim:"Preseason they simulated. Week 1 they sent it. Cashman came free.",def:"Early explosives still landed (Love 387, Watson 147). Closer defense."},
nyg:{scheme:"Dennard Wilson.",blitz:"Zero sacks.",sim:"They attacked Dallas nickel. They did not live in sim themselves.",def:"244 yards allowed. Offense carried."},
nyj:{scheme:"Glenn. Multiple 3-4 / 2-4-5 nickel. Edges in a two-point stance.",blitz:"44.9% as a changeup. Four-man and Hall are the identity.",sim:"Not stacked.",def:"195 yards allowed. Three sacks."},
phi:{scheme:"Fangio two-high. Cover 9 weak rotation. Nickel and penny.",blitz:"35.8%. One sack (Campbell). Hunt seven pressures.",sim:"Showed extra. Did not finish the extra man.",def:"Won 24-22. Did not cover 5.5."},
pit:{scheme:"Graham. Watt is the package.",blitz:"Four sacks, two interceptions, a pick-six.",sim:"Not required when Watt wins.",def:"Allowed 13. The front traveled."},
atl:{scheme:"Ulbrich four-down. Best Week 1 run defense (58 rush yards allowed).",blitz:"Sheppard 43%.",sim:"Not the story. Run fits were.",def:"Run defense held. Scoring 13 was the problem."},
ten:{scheme:"Bradley. Soft home front this week.",blitz:"Not the story.",sim:"None.",def:"Allowed Hall 102 and 23 points at home."},
wsh:{scheme:"Jones. Quinn still influencing the call. High-blitz week.",blitz:"50.9%. Only staff besides Flores over 50%.",sim:"Enough pressure to keep it inside a field goal. Not Flores volume.",def:"Allowed 24. Covered +5.5."},
ari:{scheme:"Rallis. Multiple front that finished on the road.",blitz:"Three sacks. Enough to end drives.",sim:"Not the look. The front got home.",def:"268 yards allowed. Home chalk on the other sideline died."}
};
delete window.NFL_TAPE.hou2;
(function(){
  const I = window.NFL_IDENTITIES || {};
  Object.keys(window.NFL_TAPE||{}).forEach(function(k){
    const d = window.NFL_TAPE[k];
    if (!I[k] || !d) return;
    I[k].scheme = d.scheme; I[k].blitz = d.blitz; I[k].sim = d.sim; I[k].def = d.def;
  });
  if (I.was && window.NFL_TAPE.wsh){
    ["scheme","blitz","sim","def"].forEach(function(f){ I.was[f] = window.NFL_TAPE.wsh[f]; });
  }
})();
