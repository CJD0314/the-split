window.CFB_IDENTITIES = {
tx:{rank:1,name:"Texas",logo:251},
uga:{rank:2,name:"Georgia",logo:61},
nd:{rank:3,name:"Notre Dame",logo:87},
iu:{rank:4,name:"Indiana",logo:84},
mia:{rank:5,name:"Miami",logo:2390},
osu:{rank:6,name:"Ohio State",logo:194},
lsu:{rank:7,name:"LSU",logo:99},
miss:{rank:8,name:"Ole Miss",logo:145},
tamu:{rank:9,name:"Texas A&M",logo:245},
bama:{rank:10,name:"Alabama",logo:333},
byu:{rank:11,name:"BYU",logo:252},
usc:{rank:12,name:"USC",logo:30},
ttu:{rank:13,name:"Texas Tech",logo:2641},
psu:{rank:14,name:"Penn State",logo:213},
tenn:{rank:15,name:"Tennessee",logo:2633},
smu:{rank:16,name:"SMU",logo:2567},
utah:{rank:17,name:"Utah",logo:254},
iowa:{rank:18,name:"Iowa",logo:2294},
mich:{rank:19,name:"Michigan",logo:130},
mizz:{rank:20,name:"Missouri",logo:142},
ore:{rank:21,name:"Oregon",logo:248},
hou:{rank:22,name:"Houston",logo:248},
lou:{rank:23,name:"Louisville",logo:97},
ou:{rank:24,name:"Oklahoma",logo:201},
uva:{rank:25,name:"Virginia",logo:258}
};
function paintCfbIdentities(){
  const box = document.getElementById("cfb-identities");
  if (!box) return;
  const order = Object.keys(CFB_IDENTITIES).sort(function(a,b){
    return CFB_IDENTITIES[a].rank - CFB_IDENTITIES[b].rank;
  });
  box.innerHTML = order.map(function(k){
    const t = CFB_IDENTITIES[k];
    const logo = "https://a.espncdn.com/i/teamlogos/ncaa/500/" + t.logo + ".png";
    return "<a class='g' href='cfb-team.html?t="+k+"'><img src='"+logo+"' alt=''><b>#"+t.rank+" "+t.name.toUpperCase()+"</b></a>";
  }).join("");
}
paintCfbIdentities();
