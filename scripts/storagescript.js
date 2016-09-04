var firstName;
var lastName;
var address;
var city;
var region;
var postalCode;
var phone;
var email;

function submitForm() {

	firstName = document.getElementById("firstName").value;
	lastName = document.getElementById("lastName").value;
	address = document.getElementById("address").value;
	city = document.getElementById("city").value;
	var x = document.getElementById("region").selectedIndex; // get region from drop down
		region = document.getElementsByTagName("option")[x].value; // .......................
	postalCode = document.getElementById("postalcode").value;
	phone = document.getElementById("phone").value;
	email = document.getElementById("email").value;
	
	

	if(document.getElementById("mailYes").checked == true){
	
		if (typeof(Storage) != "undefined") {
	
		    localStorage.setItem("firstname", firstName);
			localStorage.setItem("lastname", lastName);
			localStorage.setItem("address", address);
			localStorage.setItem("city", city);
			localStorage.setItem("region", region);
			localStorage.setItem("postalcode", postalCode);
			localStorage.setItem("phone", phone);
			localStorage.setItem("email", email);
	
		    return true;
		} 
		
		else {
	    	alert("Sorry, your browser does not support Web Storage...");
		}
	}
	
	else {
		alert("You have selected to not be added to our mailing list");
		return false;
	}
}

function localStorageFN(){
	firstName = localStorage.getItem("firstname");
	email = localStorage.getItem("email");
	document.getElementById("firstNameSpan").innerHTML = firstName;
	document.getElementById("emailSpan").innerHTML = email;
}