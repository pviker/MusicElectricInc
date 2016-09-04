function startTime(){
	
	var clock = new Date();
	clock = clock.toLocaleString();
	//clock = clock.toString();
	
	clock = clock.replace("Sun", "Sunday,");
	clock = clock.replace("Mon", "Monday,");
	clock = clock.replace("Tue", "Tuesday,");
	clock = clock.replace("Wed", "Wednesday,");
	clock = clock.replace("Thu", "Thursday,");
	clock = clock.replace("Fri", "Friday,");
	clock = clock.replace("Sat", "Saturday,");
	
	clock = clock.replace("Jan", "January");
	clock = clock.replace("Feb", "February");
	clock = clock.replace("Mar", "March");
	clock = clock.replace("Apr", "April");
	//clock = clock.replace("May", "May");
	clock = clock.replace("Jun", "June");
	clock = clock.replace("Jul", "July");
	clock = clock.replace("Aug", "August");
	clock = clock.replace("Sep", "September");
	clock = clock.replace("Oct", "October");
	clock = clock.replace("Nov", "November");
	clock = clock.replace("Dec", "December");
	
	document.getElementById("clock").innerHTML = clock;	

	setTimeout(function(){startTime();},1000); // refresh
	
}