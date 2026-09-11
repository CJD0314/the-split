window.TD1 = {
"chi-car": {player:"D'Andre Swift", team:"CHI", price:"DK anytime -- confirm Saturday", stake:"$100 unit", why:["Bears are the road favorite. Swift is the early-down back in Ben Johnson's first script.","Carolina two-high gives the underneath and the red-zone carry to the back, not the boundary WR.","Price posts on the DraftKings anytime board. Do not guess juice."]},
"tb-cin": {player:"Bucky Irving", team:"TB", price:"+125", stake:"$100 to win $125", why:["DraftKings anytime +125 (Sept 11 board). Chase Brown is -135 and Chase is -125. Irving is the plus-money back in a 50.5.","If Tampa trails, Irving still gets the pass-down work. That is how a +125 hits in a shootout.","Not the chalk scorer. The price is the point."]},
"no-det": {player:"Jahmyr Gibbs", team:"DET", price:"-320", stake:"$320 to win $100", why:["DraftKings anytime -320. Bell cow. Montgomery is in Houston. Vaki / Saylors are the committee behind him.","Detroit implied near 28 at home in a 49.5. Gibbs is the red-zone carry.","Juice is real. Unit sized to win $100, not to fade the role."]},
"buf-hou": {player:"James Cook", team:"BUF", price:"DK anytime -- confirm Saturday", stake:"$100 unit", why:["Allen steals rushing scores. Cook still gets the early-down and goal-line carries on a short number.","Houston front is real. The bet is volume, not a 40-yard dash.","Close price from the DraftKings anytime board Saturday."]},
"bal-ind": {player:"Jonathan Taylor", team:"IND", price:"DK anytime -- confirm Saturday", stake:"$100 unit", why:["Home workhorse. Jones is coming off Achilles and does not need to finish drives with his legs.","Baltimore new staff on the road. Taylor is the one Colt who does not need the new script to be pretty.","Sporting News had -185 at another book. We wait for the DraftKings number rather than copy it."]},
"cle-jax": {player:"Brian Thomas Jr.", team:"JAX", price:"DK anytime -- confirm Saturday", stake:"$100 unit", why:["Home favorite in a 39.5. Scoring chances are scarce. Thomas is the Jaguars WR who actually finishes.","Etienne is in New Orleans now. Do not put him on Jacksonville.","Low-total WR1 is the way a 39.5 still produces a TD."]},
"atl-pit": {player:"Bijan Robinson", team:"ATL", price:"DK anytime -- confirm Saturday", stake:"$100 unit", why:["41.5 total. Bijan is the offense. New Falcons staff still hands him the red zone.","Steelers front can win. That makes the back the scorer, not the WR2.","Close price Saturday on DraftKings."]},
"nyj-ten": {player:"Breece Hall", team:"NYJ", price:"DK anytime -- confirm Saturday", stake:"$100 unit", why:["Lowest total on the board. Hall is the only Jet who creates a score without a clean passing script.","Titans are a field-goal favorite. Hall still gets the volume if New York stays in it.","Close price Saturday."]},
"ari-lac": {player:"Omarion Hampton", team:"LAC", price:"DK anytime -- confirm Saturday", stake:"$100 unit", why:["Biggest spread on the slate. Arizona run defense is the tape. Hampton is the Chargers early-down back.","Herbert can steal passing scores. The bet is the favorite's RB in a game they are priced to control.","Close price Saturday."]},
"mia-lv": {player:"De'Von Achane", team:"MIA", price:"DK anytime -- confirm Saturday", stake:"$100 unit", why:["40.5 on the road. Achane is the Dolphins offense. Mayer is the Raiders TE with Bowers out -- different bet.","If Miami scores twice, Achane is in on one of them more often than the WR2.","Close price Saturday."]},
"gb-min": {player:"Aaron Jones", team:"MIN", price:"+155", stake:"$100 to win $155", why:["DraftKings anytime +155 (Sept 11 board, GB at MIN).",
"Minnesota took the number after it opened Packers -1.5. Jones is the plus-money back in that building.","Jefferson is the star. Jones is the scorer at a price."]},
"wsh-phi": {player:"Saquon Barkley", team:"PHI", price:"-130", stake:"$130 to win $100", why:["DraftKings anytime -130 (Sept 11 board). Home favorite. Commanders run defense is the spot.","Hurts steals rushing TDs at +110. Barkley is still the early-down and goal-line carry.","A.J. Brown is in New England. Smith is +165. The back is the number we will stand on."]},
"dal-nyg": {player:"Javonte Williams", team:"DAL", price:"DK anytime -- confirm Saturday", stake:"$100 unit", why:["SNF 48.5. Dallas road favorite. Williams is the early-down back.","Nabers snap count is the Giants watch. Do not make him the locked scorer until that is clean.","Close price Saturday."]},
"den-kc": {player:"Kenneth Walker III", team:"KC", price:"DK anytime -- confirm Saturday", stake:"$100 unit", why:["Mahomes return, 43.5 at Arrowhead. Walker is the Chiefs early-down back.","Pacheco is in Detroit. Do not put him on Kansas City.","Close price Saturday."]}
};
(function(){
  if (!window.W1) return;
  Object.keys(window.TD1).forEach(k=>{
    if (window.W1[k]) Object.assign(window.W1[k], {
      tdPlayer: window.TD1[k].player,
      tdTeam: window.TD1[k].team,
      tdPrice: window.TD1[k].price,
      tdStake: window.TD1[k].stake,
      tdWhy: window.TD1[k].why
    });
  });
})();
