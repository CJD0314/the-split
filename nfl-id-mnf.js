(function(){
  const I = window.NFL_IDENTITIES || {};
  const den = {
    rec:"0-1", divrec:"0-1",
    results:[{wk:1,line:"@ KC 10-31",spread:"+2.5",cover:"LOSS"}],
    who:"Payton road dog that died at Arrowhead. 176 yards, 9 first downs, 61 rush. Nix 17/28 for 131, one score, one pick, four sacks, a fumble lost. Engram was the only finish. +2.5 never had a chance after Walker’s 60-yard run.",
    staff:"HC Sean Payton. OC Davis Webb first-year call. DC Vance Joseph. The sheet never found a second-half answer.",
    keys:"Bo Nix QB. Evan Engram TE. Courtland Sutton WR. Jaylen Waddle WR. RJ Harvey RB.",
    carry:"Do not buy Denver points vs a featured home back until this offense stays on the field. Webb’s first call was 3.7 yards per play.",
    offscheme:"Webb first-year call. 11 personnel. Never settled.",
    engine2:"Engram 4-43-1. Nix 131. Harvey mixed in. 15 rush attempts as a team.",
    offhole:"Four sacks. One pick. One lost fumble. 2-of-12 on third down.",
    howoff:"Do not stack Nix. Engram scored. That was the tree.",
    broke:"After the first drive answer. They never moved it again.",
    scheme:"Vance Joseph. Could not tackle Walker.",
    blitz:"Did not get home enough. Two sacks on Mahomes.",
    sim:"Not the story. Missed tackles were.",
    def:"Allowed 392 yards, 220 rush, Walker 173 and two TDs. 31 points.",
    bet:"Do not buy Denver points when the other club has a featured home back.",
    dfs:"Skip the Denver stack. Engram was a one-off finish.",
    next:"Next Broncos dog: only fire if the offense can stay on the field.",
    rev:"nfl-week-1-den-kc-review.html"
  };
  const kc = {
    rec:"1-0", divrec:"1-0",
    results:[{wk:1,line:"vs DEN 31-10",spread:"-2.5",cover:"WIN"}],
    who:"Mahomes first game back from ACL. The tape that paid was Kenneth Walker III: 173 rush, two touchdowns, 220 team rush yards. Covered -2.5 easily. 31-10. Worthy caught balls and did not finish. Rice scored. Kelce moved chains.",
    staff:"HC Andy Reid. OC Eric Bieniemy. DC Steve Spagnuolo. Run identity showed first.",
    keys:"Patrick Mahomes QB. Kenneth Walker RB. Rashee Rice WR. Xavier Worthy WR. Travis Kelce TE.",
    carry:"Josh Simmons still out. Walker is the script until the tape changes. Do not fade this home number with a dog ticket. Do not captain Worthy over the back.",
    offscheme:"Bieniemy. Walker is the call. Play-action off the run.",
    engine2:"Walker 173 rush and two TDs. Mahomes 184 pass, 15-yard rush TD, Rice 13-yard TD. 19 first downs.",
    offhole:"One Mahomes INT on a Worthy miscommunication. Did not matter.",
    howoff:"Walker is the Chief. Worthy is not the captain.",
    broke:"Did not break. 392 yards.",
    scheme:"Spagnuolo. Four sacks. Nix never settled.",
    blitz:"Got home. Four sacks, one pick, one fumble recovered.",
    sim:"Enough pressure. The front did not need a sixth rusher every snap.",
    def:"Allowed 176 yards, 10 points, 9 first downs.",
    bet:"Respect the short home number when Walker is the script.",
    dfs:"Walker first. Rice before Worthy.",
    next:"Next Chiefs home: Walker first. Do not fade this club with a dog ticket.",
    rev:"nfl-week-1-den-kc-review.html"
  };
  function paint(slug, d){
    if (!I[slug]) return;
    Object.keys(d).forEach(function(k){ I[slug][k] = d[k]; });
  }
  paint("den", den);
  paint("kc", kc);
})();
