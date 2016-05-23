function Test1 (x,y,w,l){
	this.x=0;
	this.y=(windowHeight/3);
	this.w=windowWidth/6;
	this.l=windowHeight/3;
	this.display = function (){
	image(test1, this.x,this.y,this.w, this.l);
	}

	// this.clicked = function(){
	// var d = dist(mouseX,mouseY,this.x,this.y);
	// if (d<windowWidth/3){
	// 	this.display=image (test2,this.x,this.y,this.w,this.l);
	
	// 	}
	// }	
}

function Test2 (x,y,w,l){
	this.x=windowWidth/6;
	this.y=windowHeight/3;
	this.w=windowWidth/6;
	this.l=windowHeight/3;
	this.display = function (){
		image(test2,this.x,this.y,this.w,this.l);
	}
}

// function vibrate (x,y,w,l){
// 	this.x= 0;
// 	this.y= windowHeight/3;
// 	this.l=windowHeight/3;
// 	this.w=windowWidth/3;
// var rand = Math.floor((Math.random()*4)+1);

// var  randomSlide;
// // var next = [0-3];
// // var nextImage;
// switch(rand){
// 	case 1:
		
// 		randomSlide = images[rand-1];
// 		// nextImage = images[next-1];
// 		break;
// 	case 2:
// 			randomSlide = images[rand-1];
// 		// nextImage = images[next-1];
// 		break;
// 	// case 3:
// 	// 		randomSlide = images[rand-1];
// 	// 	// nextImage = images[next-1];
// 	// 	break;
// 	// case 4:
// 	// 		randomSlide = images[rand-1];
// 	// 	// nextImage = images[next-1];
// 	// 	break;

// }

// 	this.display=function(){
// 		image(randomSlide,this.x,this.y,this.w,this.l);	
// 	}

// }
