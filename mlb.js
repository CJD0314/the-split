const MLB_LOGO = c => "https://a.espncdn.com/i/teamlogos/mlb/500/"+c+".png";
function mlbEtDate(){
  try {
    return new Intl.DateTimeFormat("en-CA", {timeZone:"America/New_York", year:"numeric", month:"2-digit", day:"2-digit"}).format(new Date());
  } catch (e) { return "2026-09-13"; }
}
const MLB_TODAY = mlbEtDate();
let mlbMonth = Number(MLB_TODAY.slice(5,7)) - 1;
function href11(id){ return "mlb-2026-09-11-"+id+".html"; }
function href12(id){ return "mlb-2026-09-12-"+id+".html"; }
function href14(id){ return "mlb-2026-09-14-"+id+".html"; }
function href15(id){ return "mlb-2026-09-15-"+id+".html"; }
function rev11(id){ return "mlb-2026-09-11-"+id+"-review.html"; }
function rev12(id){ return "mlb-2026-09-12-"+id+"-review.html"; }
function rev14(id){ return "mlb-2026-09-14-"+id+"-review.html"; }
function ledgerRev(iso, title){ return "mlb-review.html?date="+iso+"&game="+encodeURIComponent(title); }
function mlbReviewHref(link, review, title, iso){
  if (review) return review;
  return ledgerRev(iso, title);
}
const MLB_GAMES = {
"2026-09-11":[],
"2026-09-12":[],
"2026-09-14":[],
"2026-09-15":[
["oak","tb","ATH at TB","6:40 p.m. ET","Tropicana","TB -1.5 / ATH +1.5","8.5","TB -232 / ATH +188","Open TB -230",href15("ath-tb"),""],
["chw","cle","CWS at CLE","6:40 p.m. ET","Progressive","CLE -1.5 / CWS +1.5","8.5","CLE -130 / CWS +108","Open CWS +108",href15("cws-cle"),""],
["lad","cin","LAD at CIN","6:40 p.m. ET","GABP","LAD -1.5 / CIN +1.5","8.5","LAD -246 / CIN +199","Open LAD -221",href15("lad-cin"),""],
["mil","pit","MIL at PIT","6:40 p.m. ET","PNC Park","MIL -1.5 / PIT +1.5","7.5","MIL -264 / PIT +212","Open MIL -250",href15("mil-pit"),""],
["phi","wsh","PHI at WSH","6:45 p.m. ET","Nationals Park","PHI -1.5 / WSH +1.5","8","PHI -219 / WSH +178","Open PHI -189",href15("phi-wsh"),""],
["det","tor","DET at TOR","7:07 p.m. ET","Rogers Centre","TOR -1.5 / DET +1.5","8.5","TOR -140 / DET +114","Open DET +120",href15("det-tor"),""],
["bal","nym","BAL at NYM","7:10 p.m. ET","Citi Field","NYM -1.5 / BAL +1.5","8","NYM -131 / BAL +108","Open BAL +104",href15("bal-nym"),""],
["atl","chc","ATL at CHC","7:40 p.m. ET","Wrigley","CHC -1.5 / ATL +1.5","8.5","CHC -141 / ATL +117","Open ATL +115",href15("atl-chc"),""],
["nyy","min","NYY at MIN","7:40 p.m. ET","Target Field","NYY -1.5 / MIN +1.5","7.5","NYY -176 / MIN +147","Open NYY -178",href15("nyy-min"),""],
["sf","stl","SF at STL","7:45 p.m. ET","Busch","STL -1.5 / SF +1.5","8","STL -169 / SF +136","Open STL -160",href15("sf-stl"),""],
["bos","tex","BOS at TEX","8:05 p.m. ET","Globe Life","BOS -1.5 / TEX +1.5","8.5","BOS -130 / TEX +110","Open TEX +110",href15("bos-tex"),""],
["kc","hou","KC at HOU","8:10 p.m. ET","Daikin Park","HOU -1.5 / KC +1.5","8","HOU -153 / KC +147","Open HOU -155",href15("kc-hou"),""],
["sd","col","SD at COL","8:40 p.m. ET","Coors","SD -1.5 / COL +1.5","11.5","SD -200 / COL +168","Open SD -199",href15("sd-col"),""],
["sea","laa","SEA at LAA","9:38 p.m. ET","Angel Stadium","SEA -1.5 / LAA +1.5","8","SEA -175 / LAA +136","Open SEA -170",href15("sea-laa"),""],
["mia","ari","MIA at ARI","9:40 p.m. ET","Chase Field","ARI -1.5 / MIA +1.5","8.5","ARI -156 / MIA +123","Open ARI -156",href15("mia-ari"),""]
]
};
