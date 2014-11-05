$(document).ready(function(){
	speed= 20;
$b = $( "#boneco" );

function moveRight(){
	position = $b.position();
	newpleft = position.left +speed;
	if (newpleft < 800) {
		$b.animate({"left": "+=" + speed + "px"},"slow");
	}
}

function moveLeft(){
	position = $b.position();
	newpleft = position.left -speed;
	if (newpleft > 40) {
		$b.animate({"left": "-=" + speed + "px"},"slow");
	}
}

function moveDown(){
	position = $b.position();
	newpleft = position.top +speed;
	if (newpleft < 400) {
		$b.animate({"top": "+=" + speed + "px"},"slow");
	}
}

function moveUp(){
	position = $b.position();
	newpleft = position.top - speed;
	if (newpleft > 0) {
		$b.animate({"top": "-=" + speed + "px"},"slow");	
	}
	
}



$('#btright').click(function(){
moveRight();
})


$('#btleft').click(function(){
moveLeft();
})


$('#btdown').click(function(){
moveDown();
})


$('#btup').click(function(){
moveUp();
})

 document.onkeydown = checkKey;

 function checkKey(e) {

 	e = e || window.event;

 	if (e.keyCode =='39'){
 		moveRight();
 	}
 	else if (e.keyCode =='40'){
 		moveDown();
 	}

  	else if (e.keyCode =='37'){
 		moveLeft();
 	}
  	else if (e.keyCode =='38'){
 		moveUp();
 	}


 }



});