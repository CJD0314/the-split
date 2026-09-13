(function(){
  if (typeof GAMES === "undefined") return;
  const R = {
    "tamu-asu":{final:"TAMU 48-20",result:"WIN",note:"LEAN cashed. Mid-teens home favorite vs Power. Covered by 13.5."},
    "ore-okst":{final:"OKST 39-31",result:"LOSS",note:"Road 20-plus after a one-score opener died. Oregon lost outright."},
    "uga-wku":{final:"UGA 70-20",result:"WIN",note:"FADE stamp, number still covered. 50-point night."},
    "nd-rice":{final:"ND 52-0",result:"WIN",note:"FADE stamp, covered anyway. 52-0."},
    "iu-how":{final:"IU 55-0",result:"LOSS",note:"Won 55-0 and missed -57.5. A 50-point win is not a 57-point number."},
    "byu-ariz":{final:"BYU 28-17",result:"WIN",note:"Home 7 cashed. Real conference-style number."},
    "ttu-orst":{final:"TTU 35-24",result:"LOSS",note:"Won by 11. Missed -25.5. Road 20-plus vs FBS is a fade."},
    "psu-tem":{final:"PSU 27-9",result:"LOSS",note:"Won by 18. Missed -24.5. Same road-tax miss."},
    "wash-usu":{final:"WASH 16-14",result:"LOSS",note:"Won by 2. Missed -27.5. Home 28-point favorite with pieces out is not free."},
    "utah-ark":{final:"UTAH 43-10",result:"WIN",note:"Home 7 cashed by 26. Touchdown home favorites were the card."},
    "usc-ull":{final:"USC 49-30",result:"LOSS",note:"Won by 19. Missed -21.5. FADE stamp was right."},
    "lsu-lt":{final:"LSU 45-14",result:"LOSS",note:"Won by 31. Missed -35.5. Three picks. FADE stamp was right."},
    "miss-char":{final:"MISS 41-9",result:"LOSS",note:"Won by 32. Missed -47.5. Same lesson as Indiana."},
    "smu-ucd":{final:"SMU 56-10",result:"WIN",note:"FADE stamp, covered 24.5 anyway."},
    "hou-sou":{final:"HOU 77-6",result:"WIN",note:"FADE stamp on -51.5. Covered by 20. FCS guest can still get run off."}
  };
  Object.keys(R).forEach(function(k){ if (GAMES[k]) Object.assign(GAMES[k], R[k]); });
})();
