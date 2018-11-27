console.log("alarmevent.js ran");
/**
Variables required: 
dayOfTheWeek - hard coded
Date - hardcoded
Time - userinput
number of hosts and visitors - userinput
location - user input
VEO Officer name  - user input
visitor(s) - depends of numOfVisitors
*/

let submitbtn = document.getElementById("submitBtn");

submitbtn.addEventListener("click", function() { logMessage();}); 

let oTime = document.getElementById("oTime");
let numOfVis = document.getElementById("numOfVis");
let floorfrom = document.getElementById("floorfrom");
let veo = document.getElementById("veoofficers");

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
	
	var selectedFloorFrom = floorfrom.options[floorfrom.selectedIndex].text;
	var selectedFloorTo = floorto.options[floorto.selectedIndex].text;
	var selectedVeo = veo.options[veo.selectedIndex].text;
	console.log("oTime: " + oTime.value);
	var reportedTime = oTime.value;
	if(reportedTime == ""){
		reportedTime = "INSERT TIME";
	}
	console.log("reported time: " + reportedTime);
	var sentence1 = "On " + dayOfWeek + ", " + month + " " + dayOfMonth + ", " + year +
	", at " + reportedTime;
	var sentence2 = "PDT the Security Control Room (SCR) was notified via messenger of an employee with a visitor\n" + 
	"that was redirected from the workspace of the " + selectedFloorFrom + " to the common area of the " + selectedFloorTo;
	
	var sentence3 = " in the 181 Fremont Building in San Francisco (SAF0181).";
	
	var sentence4 = "The Visitor Experience Officer (VEO) " + selectedVeo;
	
	var sentence5 = "performed the visitor redirect and advised both the employee and the visitor of the policy.";

	var summaryDiv = document.getElementById("summary");
	
	summary.innerHTML = sentence1 + " " + sentence2 + " " + sentence3 + " " +
					   sentence4 + " " + sentence5;
	
	
}