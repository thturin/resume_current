var slideShow;
var test1,test2,wrist,drawing;
var images;
var slideShow;
var gallery = [];

var flowers1, flowers2;
var musicBox1, musicBox2, musicBox3;

var pic1, pic2;

var logo1, logo2;

function preload(){
	test1 = loadImage("currentProjects/vibratingUnderwear/test1.jpg");
	test2 = loadImage("currentProjects/vibratingUnderwear/test2.jpg");
	wrist = loadImage("currentProjects/vibratingUnderwear/wrist.jpg");
	drawing = loadImage("currentProjects/vibratingUnderwear/drawing.jpg");
	
	flowers1 = createVideo(['currentProjects/flowers wired/flowers1.mov']);
	flowers2 = createVideo(['currentProjects/flowers wired/flowers2.mov']);
	
	musicBox1 = createVideo(['currentProjects/music box/musicBox1.mov']);
	musicBox2 = createVideo(['currentProjects/music box/musicBox2.mov']);
	musicBox3 = createVideo(['currentProjects/music box/musicBox3.mov']);
	
	logo1 = loadImage("currentProjects/currentProjects.jpg");
	logo2 = loadImage("currentProjects/clickMe.jpg");
}


function setup() {
 	createCanvas(windowWidth,windowHeight);
	 //images = [test1,test2];
	 
 	// for (var i=0;i<2;i++){
  //		 slideShow = new vibrate ();
  //	 	gallery.push(slideShow);
  //	}

	musicBox1.loop();
	musicBox1.hide();
	musicBox1.volume(0);
	
	musicBox2.loop();
	musicBox2.hide();
	musicBox2.volume(0);
	
	musicBox3.loop();
	musicBox3.hide();
	musicBox3.volume(0);
	
	flowers1.loop();
	flowers1.hide();
	flowers1.volume(0);
	
	
	flowers2.loop();
	flowers2.hide();
	flowers2.volume(0);
	
	pic1 = new Test1(0,0);
	pic2 = new Test2(0,0);
}

function draw() {
	background(0);
	
	image(logo1,((windowWidth/3)*2),(windowHeight/3)*2,(windowWidth/3),(windowHeight/3)/2);
	image(logo2,((windowWidth/3)*2),windowHeight-((windowHeight/3)/2),(windowWidth/3),(windowHeight/3)/2);
	
	
	image(wrist,0,0,windowWidth/3,windowHeight/3);
	image(drawing,0,(windowHeight/3)*2,windowWidth/3,windowHeight/3);

	image(musicBox1,(windowWidth/3),0,windowWidth/3,windowHeight/3);
	image(musicBox2, (windowWidth/3),windowHeight/3, windowWidth/3,windowHeight/3);
	image(musicBox3, (windowWidth/3),(windowHeight/3)*2, windowWidth/3,windowHeight/3);

	image(flowers1, (windowWidth/3)*2,0,windowWidth/3,windowHeight/3);

	image(flowers2, (windowWidth/3)*2,windowHeight/3,windowWidth/3,windowHeight/3);



fill(0);
stroke(100);
textSize(25);
textFont("Consolas");
text("vibrating underwear",0,(windowHeight-10));

push();
fill(255);
text("music box (10 oscillators)",windowWidth/3,(windowHeight-10));
pop();
push();
fill(0,255,0);
stroke(100);
text("flower sounds",(windowWidth/3)*2,(windowHeight/3)*2);
pop();

// for (var i=0; i<gallery.length; i++){
// 	gallery[i].display();	
// }


pic1.display();

pic2.display();

}


function mousePressed(){
	if (mouseX>windowWidth/3 && mouseX<(windowWidth/3)*2 && mouseY>0 && mouseY<windowHeight/3){
		musicBox1.volume(1);
		}else{
			musicBox1.volume(0);
	}

	if (mouseX>(windowWidth/3) && mouseX<(windowWidth/3)*2 && mouseY>windowHeight/3 && mouseY<(windowHeight/3)*2){
		musicBox2.volume(1);
		}else{
			musicBox2.volume(0);
	}
	
	if (mouseX>(windowWidth/3) && mouseX<(windowWidth/3)*2 && mouseY>(windowHeight/3)*2 && mouseY<windowHeight){
		musicBox3.volume(1);
		}else{
			musicBox3.volume(0);
	}
	

	if(mouseX>(windowWidth/3)*2 && mouseX<windowWidth && mouseY>0 && mouseY<(windowHeight/3)){
		flowers1.volume(1);
	}else{
		flowers1.volume(0);
	}
	
	
	if(mouseX>(windowWidth/3)*2 && mouseX<windowWidth && mouseY>windowHeight/3 && mouseY<(windowHeight/3)*2){
		flowers2.volume(1);
	}else{
		flowers2.volume(0);
	}

}



// function mousePressed(){
// 	// gallery.push(new vibrate());

// }




