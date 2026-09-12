window.CFB_RANK = {
  OSU:1, UGA:2, ND:3, TEX:4, IU:5, ORE:6, MIA:7, LSU:8, MISS:9, TAMU:10,
  OU:11, ALA:12, TTU:13, USC:14, BYU:15, PSU:16, SMU:17, TENN:18, WASH:19,
  UTAH:20, IOWA:21, HOU:22, MIZ:23, LOU:24, UVA:25
};
window.rankCfbGame = function(game){
  return String(game||"").replace(/\b([A-Z]{2,4})\b/g, function(code){
    var n = window.CFB_RANK[code];
    return n ? code + " (" + n + ")" : code;
  });
};
