(function(){
const p = window.W1;
if (!p) return;
function set(id, fields){ if(p[id]) Object.assign(p[id], fields); }
set("tb-cin", {
  awayKeys:["<b>Baker Mayfield</b> -- road-dog cash QB at 50.5.","<b>Chris Godwin</b> -- healthy. Target projection lives here with Evans gone.","<b>Emeka Egbuka</b> -- full practice after toe. Listed WR starter.","<b>Jalen McMillan</b> -- depth-chart starter, knee. Saturday designation.","<b>Bucky Irving</b> -- if this stays a game."],
  awayNews:["Evans is in San Francisco. Godwin / Egbuka / McMillan are the Tampa room. McMillan knee is the watch."],
  cover:["Chase vs Bucs CB1. If Chase is limited, Higgins vs the other outside.","Godwin vs Cam Taylor-Britt in the slot/short. Egbuka vs the boundary."]
});
set("no-det", {
  awayStaff:[["HC Kellen Moore (calls plays - offense)","Year 2. Shough is the opener."],["OC","Moore keeps the headset."],["DC","Has to tackle Gibbs in space."]],
  awayKeys:["<b>Tyler Shough</b> -- Year 2 starter.","<b>Chris Olave</b> -- the Saints tree.","<b>Travis Etienne Jr.</b> -- Saints back. Not Jacksonville.","<b>Juwan Johnson</b> -- TE if they live in 12."],
  homeKeys:["<b>Jared Goff</b>","<b>Jahmyr Gibbs</b> -- bell cow. Montgomery is in Houston.","<b>Amon-Ra St. Brown</b>"]
});
set("atl-pit", {
  awayKeys:["<b>Tua Tagovailoa</b> -- named the Week 1 starter. Penix still recovering from ACL.","<b>Bijan Robinson</b> -- the slate RB in a 41.5.","<b>Drake London</b> -- if Atlanta throws."],
  homeKeys:["<b>Aaron Rodgers</b> -- listed Week 1 starter, expected final opening-day start.","<b>DK Metcalf</b> -- Steelers WR1.","<b>The PIT lead back</b> -- 41.5 game."],
  awayNews:["Tua named starter this week while Penix continues ACL rehab."],
  homeNews:["Rodgers Week 1 starter. Pickens is in Dallas."]
});
set("nyj-ten", {
  homeKeys:["<b>Cam Ward</b> -- Year 2 starter.","<b>The TEN lead back</b>","<b>Calvin Ridley / Wan'Dale Robinson</b> -- confirm the Week 1 WR1 Saturday."],
  awayKeys:["<b>Geno Smith</b>","<b>Breece Hall</b>","<b>Garrett Wilson</b>"]
});
set("ari-lac", {
  awayKeys:["<b>Jacoby Brissett</b> -- Cardinals Week 1 starter.","<b>Marvin Harrison Jr.</b>","<b>Trey McBride</b>","<b>Jeremiyah Love</b> -- ankle, limited."]
});
set("mia-lv", {
  awayKeys:["<b>Malik Willis</b> -- first Week 1 start. Miami debut.","<b>De'Von Achane</b> -- the offense.","<b>Malik Washington / Caleb Douglas</b> -- the WR room with Tyreek gone."],
  homeKeys:["<b>Kirk Cousins</b> -- Week 1 starter over Mendoza.","<b>Ashton Jeanty</b> -- ankle, practicing, no designation.","<b>Michael Mayer</b> -- Bowers out after meniscus trim."]
});
set("gb-min", {
  homeKeys:["<b>Kyler Murray</b> -- listed Minnesota starter entering Week 1.","<b>Justin Jefferson</b> -- cash WR.","<b>Aaron Jones</b> -- Vikings back.","<b>Jordan Addison</b>"],
  dfs:["Jefferson is the cash WR. Love vs Murray is the GPP fork.","Reed / Addison are the unique WRs."]
});
set("dal-nyg", {
  homeKeys:["<b>Jaxson Dart</b> -- first career Week 1 start.","<b>Malik Nabers</b> -- full practice after ACL. Snap count possible.","<b>Cam Skattebo</b> -- Giants non-star RB."]
});
set("den-kc", {
  awayKeys:["<b>Bo Nix</b>","<b>Courtland Sutton / Jaylen Waddle</b> -- confirm the Week 1 WR2.","<b>J.K. Dobbins</b>"]
});
set("bal-ind", {
  awayKeys:["<b>Lamar Jackson</b>","<b>Derrick Henry</b>","<b>Zay Flowers</b>"],
  homeKeys:["<b>Daniel Jones</b> -- Achilles return. Reduced scramble volume.","<b>Jonathan Taylor</b> -- 1pm RB1 of the group.","<b>Josh Downs / Alec Pierce</b>"]
});
set("cle-jax", {
  homeKeys:["<b>Trevor Lawrence</b>","<b>Brian Thomas Jr. / Parker Washington</b> -- Etienne is in New Orleans."]
});
if (window.TD1){
  Object.keys(window.TD1).forEach(k=>{
    set(k, {
      tdPlayer: window.TD1[k].player,
      tdTeam: window.TD1[k].team,
      tdPrice: window.TD1[k].price,
      tdStake: window.TD1[k].stake,
      tdWhy: window.TD1[k].why
    });
  });
}
})();
