console.log("alarmevent.js ran");
/**
Variables required: 
oTime = occurred Time
floors = floors where elev machine rooms are running hot

*/

let submitbtn = document.getElementById("submitbtn");

submitbtn.addEventListener("click", function() { logMessage();}); 

let oTime = document.getElementById("oTime");
let temp = document.getElementById("temp");

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
	
	let floor = document.getElementById("floors");
	var selectedFloor = floor.options[floor.selectedIndex].text;
	var reportedTime = oTime.value;
	var tempText = temp.value;
	
	if(reportedTime == ""){
		reportedTime = "INSERT TIME";
	}
	
	if(tempText == ""){
		tempText = "INSERT TEMP";
	}
	
	var sentence1 = "On " + dayOfWeek + ", " + month + " " + dayOfMonth + ", " + year +
	", at " + reportedTime;
	var sentence2 = "PDT the Security Control Room (SCR) was notified via landline by the " +
	"Protech Security Control Room  of a High Temperature alarm on the "
	+ selectedFloor + " at the 181 Fremont Building in San Francisco (SAF0181).";
	
	var sentence3 = " The temperature was reported at about " + tempText + " degrees. The " +
	" facebook facilities team was notified immediately.";
	

	var summaryDiv = document.getElementById("summary");
	
	summary.innerHTML = sentence1 + " " + sentence2 + " " + sentence3 + " ";

	
}

