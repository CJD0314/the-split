window.SCORES = {
  "NE at SEA": "FINAL SEA 13-10",
  "SF at LAR": "FINAL SF 27-7",
  "FAMU at MIA": "FINAL MIA 77-7",
  "PIT at CHC": "FINAL CHC 12-2",
  "COL at DET": "FINAL DET 6-2",
  "LAA at WSH": "FINAL WSH 4-3",
  "HOU at TB": "FINAL TB 3-1",
  "VILL at LOU": "LIVE LOU 52-13 4Q",
  "NORF at UVA": "LIVE UVA 59-3 4Q",
  "MIZ at KU": "LIVE KU 14-14 HT",
  "NYM at NYY": "LIVE NYY 5-2 8th",
  "BAL at TOR": "LIVE BAL 7-2 8th",
  "KC at BOS": "LIVE KC 3-2 8th",
  "LAD at MIA": "LIVE LAD 6-1 8th",
  "PHI at ATL": "LIVE PHI 3-1 6th",
  "CIN at MIL": "LIVE MIL 17-0 6th",
  "CLE at MIN": "LIVE MIN 1-0 6th"
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
