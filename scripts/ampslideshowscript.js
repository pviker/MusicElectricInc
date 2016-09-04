var counter = 0;

function slideFunction (dir){
	// 0 = backward
	// 1 = forward
	var img = document.getElementById("mainslide");
	
	var imageArray = [
		"../images/ampimages/amp1.jpg",
		"../images/ampimages/amp2.jpg",
		"../images/ampimages/amp3.jpg",
		"../images/ampimages/amp4.jpg",
		"../images/ampimages/amp5.jpg",
		"../images/ampimages/amp6.jpg",
		"../images/ampimages/amp7.jpg",
		"../images/ampimages/amp8.jpg",
		"../images/ampimages/amp9.jpg",
		"../images/ampimages/amp10.jpg"
		]; 
		
	var imageAltArray = [
		"Fishman Amp",
		"Fender Amp",
		"Fender Amp",
		"Marshall Amp",
		"Fender Amp",
		"Mesa/Boogie Amp",
		"Ampeg Amp",
		"Ampeg Amp",
		"MarkBass Amp",
		"MarkBass Amp"
		];
	
	/* Slide forward */
	if(dir == 1){
		counter++;
		
		if(counter < imageArray.length) {
			img.src = imageArray[counter];	
			img.alt = imageAltArray[counter];
		}
		else{
			counter = 0;
			img.src = imageArray[counter];
			img.alt = imageAltArray[counter];
		}
	} // end forward if

	/* Slide backward */
	if(dir == 0){
		counter--;
		
		if(counter >= 0) {
			img.src = imageArray[counter];	
			img.alt = imageAltArray[counter];
		}
		else{
			counter = imageArray.length - 1;
			img.src = imageArray[counter];
			img.alt = imageAltArray[counter];
		}
	} // end backward if
	
	/* Play slideshow continuously */
	if(dir == 2){
		counter++;
		
		if(counter < imageArray.length) {
			img.src = imageArray[counter];
			img.alt = imageAltArray[counter];
		}
		else{
			counter = 0;
			img.src = imageArray[counter];
			img.alt = imageAltArray[counter];
		}
		setTimeout(function(){slideFunction(2);},2000); // set loop for playing show
	} // end play show if
	
} // end slideshow function