var counter = 0;

function slideFunction (dir){
	// 0 = backward
	// 1 = forward
	var img = document.getElementById("mainslide");
	
	var imageArray = [
		"../images/accimages/acc1.jpg",
		"../images/accimages/acc2.jpg",
		"../images/accimages/acc3.jpg",
		"../images/accimages/acc4.jpg",
		"../images/accimages/acc5.jpg",
		"../images/accimages/acc6.jpg",
		"../images/accimages/acc7.jpg",
		"../images/accimages/acc8.jpg",
		"../images/accimages/acc9.jpg",
		"../images/accimages/acc10.jpg",
		"../images/accimages/acc11.jpg"
		]; 
		
	var imageAltArray = [
		"1/4 Cable",
		"1/4 Cable",
		"1/4 Cable",
		"5-Guitar Stand",
		"Wooden Guitar Stand",
		"5-Guitar Wooden Stand",
		"Taylor Guitar Stand",
		"Humbucker Pickup",
		"Single Coil Pickup",
		"Acoustic Guitar Strings",
		"Electric Guitar Strings"
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