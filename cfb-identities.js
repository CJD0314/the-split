window.CFB_IDENTITIES = {
tx:{rank:1,name:"Texas",record:"2-0",poll:"AP 1"},
uga:{rank:2,name:"Georgia",record:"2-0",poll:"AP 2"},
nd:{rank:3,name:"Notre Dame",record:"2-0",poll:"AP 3"},
iu:{rank:4,name:"Indiana",record:"2-0",poll:"AP 4"},
mia:{rank:5,name:"Miami",record:"2-0",poll:"AP 5"},
osu:{rank:6,name:"Ohio State",record:"1-1",poll:"AP 6"},
lsu:{rank:7,name:"LSU",record:"2-0",poll:"AP 7"},
miss:{rank:8,name:"Ole Miss",record:"2-0",poll:"AP 8"},
tamu:{rank:9,name:"Texas A&M",record:"2-0",poll:"AP 9"},
bama:{rank:10,name:"Alabama",record:"2-0",poll:"AP 10"},
byu:{rank:11,name:"BYU",record:"2-0",poll:"AP 11"},
usc:{rank:12,name:"USC",record:"3-0",poll:"AP 12"},
ttu:{rank:13,name:"Texas Tech",record:"2-0",poll:"AP 13"},
psu:{rank:14,name:"Penn State",record:"2-0",poll:"AP 14"},
tenn:{rank:15,name:"Tennessee",record:"2-0",poll:"AP 15"},
smu:{rank:16,name:"SMU",record:"2-0",poll:"AP 16"},
utah:{rank:17,name:"Utah",record:"2-0",poll:"AP 17"},
iowa:{rank:18,name:"Iowa",record:"2-0",poll:"AP 18"},
mich:{rank:19,name:"Michigan",record:"2-0",poll:"AP 19"},
mizz:{rank:20,name:"Missouri",record:"2-0",poll:"AP 20"},
ore:{rank:21,name:"Oregon",record:"1-1",poll:"AP 21"},
hou:{rank:22,name:"Houston",record:"2-0",poll:"AP 22"},
lou:{rank:23,name:"Louisville",record:"1-1",poll:"AP 23"},
ou:{rank:24,name:"Oklahoma",record:"1-1",poll:"AP 24"},
uva:{rank:25,name:"Virginia",record:"2-0",poll:"AP 25"}
};
function paintCfbIdentities(){
  const box = document.getElementById("cfb-identities");
  if (!box) return;
  const order = Object.keys(CFB_IDENTITIES).sort(function(a,b){
    return CFB_IDENTITIES[a].rank - CFB_IDENTITIES[b].rank;
  });
  box.innerHTML = "<p class='note-head'>AP Top 25 after Week 2. Shells only. Tape not filled.</p>" +
    order.map(function(k){
      const t = CFB_IDENTITIES[k];
      return "<div class='g'><b><a class='full-link' href='cfb-team.html?t="+k+"'>#"+t.rank+" "+t.name.toUpperCase()+"</a></b><span>"+t.record+" \u00b7 "+t.poll+" \u00b7 identity not filled</span></div>";
    }).join("");
}
paintCfbIdentities();
