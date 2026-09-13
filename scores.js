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
  "2026-09-12|COL at DET": "FINAL DET 11-7",
  "2026-09-12|NYM at NYY": "FINAL NYM 12-2",
  "2026-09-12|PIT at CHC": "FINAL CHC 4-3",
  "2026-09-12|BAL at TOR": "FINAL TOR 7-3",
  "2026-09-12|LAD at MIA": "FINAL MIA 4-3",
  "2026-09-12|LAA at WSH": "FINAL WSH 6-5",
  "2026-09-12|SD at SF": "FINAL SD 7-6",
  "2026-09-12|KC at BOS": "FINAL BOS 5-1",
  "2026-09-12|CLE at MIN": "FINAL MIN 4-3",
  "2026-09-12|HOU at TB": "LIVE HOU 2-TB 2 (Bot 7th)",
  "2026-09-12|CIN at MIL": "LIVE CIN 2-MIL 5 (Bot 3rd)",
  "2026-09-12|PHI at ATL": "LIVE PHI 1-ATL 0 (End 3rd)",
  "2026-09-12|CHW at STL": "LIVE CHW 0-STL 0 (Bot 2nd)",
  "2026-09-12|OSU at TEX": "7:30 ET",
  "2026-09-12|OU at MICH": "FINAL MICH 17-10",
  "2026-09-12|ALA at UK": "FINAL ALA 45-17",
  "2026-09-12|TENN at GT": "LIVE TENN 7-GT 3 (1st)",
  "2026-09-12|ISU at IOWA": "7:30 ET",
  "2026-09-12|ASU at TAMU": "FINAL TAMU 48-20",
  "2026-09-12|HOW at IU": "FINAL IU 55-0",
  "2026-09-12|PSU at TEM": "FINAL PSU 27-9",
  "2026-09-12|WKU at UGA": "FINAL UGA 70-20",
  "2026-09-12|ORE at OKST": "FINAL OKST 39-31",
  "2026-09-12|RICE at ND": "FINAL ND 52-0",
  "2026-09-12|UCD at SMU": "FINAL SMU 56-10",
  "2026-09-12|ARIZ at BYU": "FINAL BYU 28-17",
  "2026-09-12|USU at WASH": "FINAL WASH 16-14",
  "2026-09-12|SOU at HOU": "LIVE HOU 21-SOU 0 (1st)",
  "2026-09-12|LT at LSU": "LIVE (1st)"
};
window.SCORE_SPORT = {
  "2026-09-09|NE at SEA":"NFL","2026-09-10|SF at LAR":"NFL",
  "2026-09-10|FAMU at MIA":"CFB","2026-09-11|VILL at LOU":"CFB","2026-09-11|NORF at UVA":"CFB","2026-09-11|MIZ at KU":"CFB",
  "2026-09-12|OSU at TEX":"CFB","2026-09-12|OU at MICH":"CFB","2026-09-12|ALA at UK":"CFB","2026-09-12|TENN at GT":"CFB","2026-09-12|ISU at IOWA":"CFB",
  "2026-09-12|ASU at TAMU":"CFB","2026-09-12|HOW at IU":"CFB","2026-09-12|PSU at TEM":"CFB","2026-09-12|WKU at UGA":"CFB",
  "2026-09-12|ORE at OKST":"CFB","2026-09-12|RICE at ND":"CFB","2026-09-12|UCD at SMU":"CFB","2026-09-12|ARIZ at BYU":"CFB","2026-09-12|USU at WASH":"CFB",
  "2026-09-11|PIT at CHC":"MLB","2026-09-12|PIT at CHC":"MLB",
  "2026-09-11|COL at DET":"MLB","2026-09-12|COL at DET":"MLB",
  "2026-09-11|NYM at NYY":"MLB","2026-09-12|NYM at NYY":"MLB",
  "2026-09-11|BAL at TOR":"MLB","2026-09-12|BAL at TOR":"MLB",
  "2026-09-11|LAD at MIA":"MLB","2026-09-12|LAD at MIA":"MLB",
  "2026-09-12|LAA at WSH":"MLB","2026-09-12|SD at SF":"MLB","2026-09-12|KC at BOS":"MLB","2026-09-12|CLE at MIN":"MLB",
  "2026-09-12|HOU at TB":"MLB","2026-09-12|CIN at MIL":"MLB","2026-09-12|PHI at ATL":"MLB","2026-09-12|CHW at STL":"MLB"
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
