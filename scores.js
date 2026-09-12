window.SCORES = {
  "NE at SEA": "FINAL SEA 13-10",
  "SF at LAR": "FINAL SF 27-7",
  "FAMU at MIA": "FINAL MIA 77-7",
  "PIT at CHC": "FINAL CHC 12-2",
  "COL at DET": "FINAL DET 6-2",
  "LAA at WSH": "FINAL WSH 4-3",
  "HOU at TB": "FINAL TB 3-1",
  "NYM at NYY": "FINAL NYY 6-4",
  "BAL at TOR": "FINAL BAL 7-4",
  "KC at BOS": "FINAL KC 3-2",
  "LAD at MIA": "FINAL LAD 6-2",
  "NORF at UVA": "FINAL UVA 59-3",
  "VILL at LOU": "FINAL LOU 59-13",
  "MIZ at KU": "FINAL MIZ 38-21",
  "PHI at ATL": "FINAL ATL 6-5",
  "CIN at MIL": "FINAL MIL 20-0",
  "CLE at MIN": "FINAL CLE 5-2"
};
window.SCORE_SPORT = {
  "NE at SEA":"NFL","SF at LAR":"NFL",
  "FAMU at MIA":"CFB","VILL at LOU":"CFB","NORF at UVA":"CFB","MIZ at KU":"CFB",
  "PIT at CHC":"MLB","COL at DET":"MLB","LAA at WSH":"MLB","HOU at TB":"MLB",
  "NYM at NYY":"MLB","BAL at TOR":"MLB","KC at BOS":"MLB","LAD at MIA":"MLB",
  "PHI at ATL":"MLB","CIN at MIL":"MLB","CLE at MIN":"MLB"
};
window.scoreEntries = function(){
  return Object.entries(window.SCORES||{}).sort(function(a,b){
    var af = String(a[1]).indexOf("FINAL") === 0 ? 0 : 1;
    var bf = String(b[1]).indexOf("FINAL") === 0 ? 0 : 1;
    if (af !== bf) return af - bf;
    return a[0].localeCompare(b[0]);
  });
};
