function paintClassicDfs(){
  var se=document.getElementById('dfs-se-box');
  var gpp=document.getElementById('dfs-gpp-box');
  var pool=document.getElementById('dfs-pool-box');
  var rules=document.getElementById('dfs-rules-box');
  if(se){se.innerHTML="<p class='note'>Not this pool. The single entry is one lineup. A min on this table is copies in the 150. It does not mean that player is in the one lineup.</p>";}
  if(gpp){gpp.innerHTML="<p class='note'>$5. 150 max. 95,100 entries. Sunday sheet. No Thursday, no Monday.</p><p>Morning pass is in the file. Parker and Bateman are under field own. Two-TE is 75 of 150. Every Purdy team has a 49ers pass catcher. Inactives still pending.</p>";}
  if(pool){pool.innerHTML=window.SPLIT_POOL_HTML||"<p class='note'>Loading pool table...</p>";}
  if(rules){rules.innerHTML=window.SPLIT_RULES_HTML||"<p class='note'>Loading rules...</p>";}
}
