//Show Overview Title
const title = ('{"overviewTitle": "Overview"}');
const overview = JSON.parse(title);
document.getElementById("ot").innerHTML = overview.overviewTitle;

//Show Subheader titles
const sub = ('{"title0":"Dashboard", "title1":"Overview", "title2":"Tickets", "title3":"Ideas", "title4":"Contacts", "title5":"Agents", "title6":"Articles", "title7":"Settings", "title8":"Subscription"}');
const header = JSON.parse(sub);
document.getElementById("st0").innerHTML = header.title0;
document.getElementById("st1").innerHTML = header.title1;
document.getElementById("st2").innerHTML = header.title2;
document.getElementById("st3").innerHTML = header.title3;
document.getElementById("st4").innerHTML = header.title4;
document.getElementById("st5").innerHTML = header.title5;
document.getElementById("st6").innerHTML = header.title6;
document.getElementById("st7").innerHTML = header.title7;
document.getElementById("st8").innerHTML = header.title8;

//Show Topcard numbers data, but titles
const topcard = ('{"status1": "unresolved", "amount1": 60, "status2": "overdue", "amount2": 16, "status3": "open", "amount3": 43, "status4": "on hold", "amount4": 6}');
const datacard = JSON.parse(topcard);
document.getElementById("top1").innerHTML = datacard.amount1;
document.getElementById("top2").innerHTML = datacard.amount2;
document.getElementById("top3").innerHTML = datacard.amount3;
document.getElementById("top4").innerHTML = datacard.amount4;

