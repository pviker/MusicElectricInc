var counter = 0;

function slideFunction (dir){
	// 0 = backward
	// 1 = forward
	var img = document.getElementById("mainslide");
	
	var imageArray = [
		"../images/guitarimages/guitar1.jpg",
		"../images/guitarimages/guitar2.jpg",
		"../images/guitarimages/guitar3.jpg",
		"../images/guitarimages/guitar4.jpg",
		"../images/guitarimages/guitar5.jpg",
		"../images/guitarimages/guitar6.jpg",
		"../images/guitarimages/mainguitar.jpg",
		"../images/guitarimages/guitar7.jpg",
		"../images/guitarimages/guitar8.jpg",
		"../images/guitarimages/guitar9.jpg",
		"../images/guitarimages/guitar10.jpg",
		"../images/guitarimages/guitar11.jpg",
		"../images/guitarimages/guitar12.jpg",
		"../images/guitarimages/guitar13.jpg",
		"../images/guitarimages/banjo.jpg",
		"../images/guitarimages/mando.jpg",
		"../images/guitarimages/sitar.jpg"
		]; 
		
	var imageAltArray = [
		"Double Cutaway Electric Guitar",
		"Epiphone ES-335 Dot Deluxe",
		"Fender Stratocaster Electric Guitar",
		"Gibson Les Paul Traditional Electric Guitar",
		"Gibson Dot Electric Guitar",
		"Custom Made Hollow-Body Electric Guitar",
		"Gibson Les Paul Standard Electric Guitar",
		"Acoustic Guitar",
		"Acoustic Guitar",
		"Acoustic Kitty",
		"Bass Guitar",
		"Bass Guitar",
		"Ibanez Bass Guitar",
		"Sweet Bass Guitar",
		"Banjo",
		"Mando",
		"Sitar"
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