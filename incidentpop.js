console.log("alarmevent.js ran");
/**
Variables required: 
dayOfTheWeek - hard coded
Date - hardcoded
Time - userinput
notification - via drop down box(radio/landline/messenger/email)
site - drop down box( SAF0655, SAF0002, SAF0181, SAF0524, SAU2658)
call sign - drop down box
site - drop down box

*/

let submitbtn = document.getElementById("submitbtn");

submitbtn.addEventListener("click", function() { logMessage();}); 

let oTime = document.getElementById("oTime");
let notification = document.getElementById("notification");
let callsigns = document.getElementById("callsigns");
let sites = document.getElementById("sites");


var weekday = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday",
				"Friday","Saturday"];
var months = ["January","February","March","April","May","June",
			"July","August","September","October","November","December"];
			

var d = new Date();
var dayOfWeek = weekday[d.getDay()];
var month = months[d.getMonth()];
var dayOfMonth = d.getDate();
var year = d.getFullYear();

function logMessage(){
	
	var selectedNotification = notification.options[notification.selectedIndex].text;
	var selectedCallSign = callsigns.options[callsigns.selectedIndex].text;
	var selectedSite = sites.options[sites.selectedIndex].text;
	var reportedTime = oTime.value;
	var incidentName = document.getElementById("incident").value;
	
	var sitePhrase = getSitePhrase(selectedSite);
	//DATA STRUCTURE TO HOLD PARAGRAPH STATEMENTS WITH SELECTED SITE
	//USER HAS TO MAKE SURE PATROL OFFICER NAME AND SITE NAME LINE UP FOR NOW
	

	
	if(reportedTime == ""){
		reportedTime = "INSERT TIME";
	}
	
	if(incidentName == "") {
		incidentName = "INSERT INCIDENT";
	}
	
	var sentence1 = "On " + dayOfWeek + ", " + month + " " + dayOfMonth + ", " + year +
	", at " + reportedTime;
	var sentence2 = "PDT the Security Control Room (SCR) was notified via " + selectedNotification + 
	" by the " + " Global Security Services (GSS) " + selectedCallSign + " Officer in regards to a " +
	incidentName;
	
	var sentence3 = " at the " +  sitePhrase + " (" + selectedSite + ").";
	

	var summaryDiv = document.getElementById("summary");
	
	summary.innerHTML = sentence1 + " " + sentence2 + " " + sentence3 + " ";

	
}

function getSitePhrase(selectedSite) {
	
	var sitePhrase = "default";
	sitePhrasesArray = [["SAF0181", "181 Fremont building in San Francisco"],
					["SAF0655","655 Montgomery building in San Francisco"],
					["SAF0524", "524 2nd st building in San Francisco"],
					["SAF0002", "2 Embarcadero building in San Francisco"],
					["SAU2658", "2658 Bridgeway building in Sausalito"]];
	
	for(var i = 0; i < sitePhrasesArray.length; i++){
			if(selectedSite == sitePhrasesArray[i][0]){
					console.log(sitePhrasesArray[i][1]);
					sitePhrase = sitePhrasesArray[i][1];
				
			}
	}
	
	return sitePhrase;

}
	

