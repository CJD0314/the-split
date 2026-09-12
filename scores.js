window.SCORES = {
  "2026-09-09|NE at SEA": "FINAL SEA 13-10",
  "2026-09-10|SF at LAR": "FINAL SF 27-7",
  "2026-09-10|FAMU at MIA": "FINAL MIA 77-7",
  "2026-09-11|PIT at CHC": "FINAL CHC 12-2",
  "2026-09-11|COL at DET": "FINAL DET 6-2",
  "2026-09-11|LAA at WSH": "FINAL WSH 4-3",
  "2026-09-11|HOU at TB": "FINAL TB 3-1",
  "2026-09-11|NYM at NYY": "FINAL NYY 6-4",
  "2026-09-11|BAL at TOR": "FINAL BAL 7-4",
  "2026-09-11|KC at BOS": "FINAL KC 3-2",
  "2026-09-11|LAD at MIA": "FINAL LAD 6-2",
  "2026-09-11|NORF at UVA": "FINAL UVA 59-3",
  "2026-09-11|VILL at LOU": "FINAL LOU 59-13",
  "2026-09-11|MIZ at KU": "FINAL MIZ 38-21",
  "2026-09-11|PHI at ATL": "FINAL ATL 6-5",
  "2026-09-11|CIN at MIL": "FINAL MIL 20-0",
  "2026-09-11|CLE at MIN": "FINAL CLE 5-2",
  "2026-09-12|COL at DET": "1:10 ET",
  "2026-09-12|NYM at NYY": "1:35 ET",
  "2026-09-12|PIT at CHC": "2:20 ET",
  "2026-09-12|BAL at TOR": "3:07 ET",
  "2026-09-12|LAD at MIA": "4:10 ET",
  "2026-09-12|OSU at TEX": "7:30 ET",
  "2026-09-12|OU at MICH": "12:00 ET",
  "2026-09-12|ALA at UK": "3:30 ET",
  "2026-09-12|TENN at GT": "7:00 ET",
  "2026-09-12|ISU at IOWA": "7:30 ET"
};
window.SCORE_SPORT = {
  "2026-09-09|NE at SEA":"NFL","2026-09-10|SF at LAR":"NFL",
  "2026-09-10|FAMU at MIA":"CFB","2026-09-11|VILL at LOU":"CFB","2026-09-11|NORF at UVA":"CFB","2026-09-11|MIZ at KU":"CFB",
  "2026-09-12|OSU at TEX":"CFB","2026-09-12|OU at MICH":"CFB","2026-09-12|ALA at UK":"CFB","2026-09-12|TENN at GT":"CFB","2026-09-12|ISU at IOWA":"CFB",
  "2026-09-11|PIT at CHC":"MLB","2026-09-12|PIT at CHC":"MLB",
  "2026-09-11|COL at DET":"MLB","2026-09-12|COL at DET":"MLB",
  "2026-09-11|NYM at NYY":"MLB","2026-09-12|NYM at NYY":"MLB",
  "2026-09-11|BAL at TOR":"MLB","2026-09-12|BAL at TOR":"MLB",
  "2026-09-11|LAD at MIA":"MLB","2026-09-12|LAD at MIA":"MLB"
};
window.scoreEntries = function(){
  var day = "";
  try {
    day = new Intl.DateTimeFormat("en-CA", {timeZone:"America/New_York", year:"numeric", month:"2-digit", day:"2-digit"}).format(new Date());
  } catch (e) { day = "2026-09-12"; }
  return Object.entries(window.SCORES||{}).filter(function(pair){
    return pair[0].indexOf(day + "|") === 0;
  }).map(function(pair){
    return [pair[0].split("|")[1], pair[1]];
  });
};
