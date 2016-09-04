function checkStyle(){
	
	// get styles to change
	var dark = document.styleSheets.item(1);
	var light = document.styleSheets.item(2);
	var darkNav = document.styleSheets.item(0);
	var lightNav = document.styleSheets.item(3);
	
	// get states of styles from cookies
	var darkCookieState = getCookie("darkdisabled");
	var lightCookieState = getCookie("lightdisabled");

	// change to light style 
	if(darkCookieState === "true"){
		void(dark.disabled=true);
		void(light.disabled=false);
		void(darkNav.disabled=true);
		void(lightNav.disabled=false);
	}
	
	// change to dark style
	else {
		void(dark.disabled=false);
		void(light.disabled=true);
		void(darkNav.disabled=false);
		void(lightNav.disabled=true);
	}
}

function lightStyle(){
	
	var dark = document.styleSheets.item(1);
	var light = document.styleSheets.item(2);
	var darkNav = document.styleSheets.item(0);
	var lightNav = document.styleSheets.item(3);
	
	void(dark.disabled=true);
	void(light.disabled=false);
	void(darkNav.disabled=true);
	void(lightNav.disabled=false);
	
	setCookie( "darkdisabled", "true", 1 );
	setCookie( "lightdisabled", "false", 1 );
	
}

function darkStyle(){
		
	var dark = document.styleSheets.item(1);
	var light = document.styleSheets.item(2);
	var darkNav = document.styleSheets.item(0);
	var lightNav = document.styleSheets.item(3);
	
	void(dark.disabled=false);
	void(light.disabled=true);
	void(darkNav.disabled=false);
	void(lightNav.disabled=true);
	
	setCookie( "darkdisabled", "false", 1 );
	setCookie( "lightdisabled", "true", 1 );
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
