//words that display at the begining. THIS IS NOW CURRENTLY WORKING.
var keywords = ["mother", "death", "weeping", "pain", "inti", "erótico", "in love", "short hair", "The fight", "The abandom", "the desire", "the message",
  "La esperanza", "boat", "Salvador", "grandmother", "Sole", "Thief", "house", "freeze", "threat", "Alejandra", "anguish", "space", "pleasure"
];
// Variables
var words = [];
var dreams = [];
var othersDreams = [];
var lengthJSON = 0;
var img;
var circles = [];
var xSpeed = 0.05;
var ySpeed = 0.03;
var isShowingDream = false;
var circlesSpeed = 0.5;
var wordsSpeed = 0.1;
var dreamForm = false;
var dreamVideo;
var mySound;
var videoPlaying= false;
var boatDreamVideo;
var boatDreamSound;
var marbleDreamSound;
var lasVegasDreamSound;
var playing = false;
var button;
var marbleHand;

function preload() {
    //dreams = loadJSON("mapAssets/dreams.json");

     dreams = loadJSON("dreams.json");
    othersDreams = loadJSON("othersDreams.json");
    console.log("is others Dreams loading?");
    img = loadImage("mapAssets/mapa_dreams_1024x768.jpg");
    console.log("video is loading?");
    breathSound = loadSound('mapAssets/breathLoop.mp3');
    lasVegasDreamSound = loadSound('mapAssets/lasVegasDream.mp3');
    console.log ("is LasVegas sound loading?");
    boatDreamVideo= createVideo("mapAssets/TheBoatAnim.mp4");
    dreamVideo = createVideo("mapAssets/dreamVideo02.mp4");
    console.log ("is video Cats loading?");
    boatDreamSound= loadSound('mapAssets/theBoat.mp3');
    marbleHand=loadImage("mapAssets/marbleHand.jpg");
    marbleDreamSound= loadSound('mapAssets/MarbleDreamVoiceZiyu.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont("Helvetica");
    console.log ("is typography Helvetica been apply?")
    boatDreamVideo.hide();
    dreamVideo.hide();
    //dreamVideo.size(500,500);
    

  // circles with dreams array that is display when the mouse

    //this circle is the one that send us to the form
    circles.push(new Circle(windowWidth * 0.70, windowHeight * 0.755, random(-0.08, -0.3), random(-0.02, -0.4), random(100, 150), random(150, 225), random(180, 240), random(5, 10), dreams.dreams[0], 0, 0, 0));
    
    //this circles has dreams
    //function Circle Parameters (x, y, xSpeed, ySpeed, colr, colg, colb, colA, dream, place, pX, pY, dreamRecorder) 
    circles.push(new Circle(windowWidth*0.12, windowHeight*0.17, -0.01, 0.02, random(200, 250), random(150, 200), random(150, 200),random(5, 10), dreams.dreams[2], 0, windowWidth * 0.011, windowHeight * 0.57));
    circles.push(new Circle(windowWidth*0.1, windowHeight * 0.7, random(0.02, 0.004), random(0.01, 0.03), random(200, 240), random(193, 196), random(150, 200), random(1, 15), dreams.dreams[1], 0, windowWidth * 0.011, windowHeight * 0.85));
    circles.push(new Circle(windowWidth * 0.8, 170, random(0.01, 0.06), random(0.03, 0.07), random(100, 150), random(170, 230),random(170, 230), random(5, 10), othersDreams.dreams[1], 0, windowWidth * 0.826, windowHeight * 0.914));
    circles.push(new Circle(windowWidth * 0.2, windowHeight * 0.52, random(0.02, 0.03), random(0.02, 0.04), random(200, 240), random(160, 170), random(100, 190), random(05, 10), dreams.dreams[4], 0, windowWidth * 0.5, windowHeight * 0.75));
    circles.push(new Circle(windowWidth * 0.615, windowHeight*0.3, random(-0.04, -0.1), random(0.02, 0.04), 150, 231, 241, random(5, 10), othersDreams.dreams[0], 0, windowWidth * 0.194, windowHeight * 0.5857));
    circles.push(new Circle(random(0,windowWidth), random(0,windowHeight), random(0.1, 0.3), random(-0.02, -0.04), random(200, 240), random(150, 200), random(160, 190), random(5, 10), dreams.dreams[6], 0, windowWidth * 0.194, windowHeight * 0.5857));
    circles.push(new Circle(windowWidth * 0.93, random (windowHeight*0.93,windowHeight*0.8), random(0.1, 0.06), random(-0.03, -0.07), random(100, 150), random(170, 230),random(170, 230), random(5, 10), othersDreams.dreams[2], 0, windowWidth * 0.826, windowHeight * 0.914));
    circles.push(new Circle(windowWidth*0.33, windowHeight*0.82, random(0.1, 0.03), random(-0.02, -0.04), random(200, 240), random(150, 200), random(160, 190), random(5, 10), dreams.dreams[3], 0, windowWidth * 0.194, windowHeight * 0.5857));
    //circles.push(new Circle(random(0,windowWidth), random(0,windowHeight), random(0.1, 0.3), random(-0.02, -0.04), random(100, 150), random(170, 230),random(170, 230), random(5, 10), othersDreams.dreams[6], 0, windowWidth * 0.194, windowHeight * 0.5857));
    
    //Trying a loop to display the circles.
    //for (var i =0; i < 6; i++) {
    //Circle(x, y, xSpeed, ySpeed, colr, colg, colb, colA, dream, place, pX, pY, dreamRecorder)
    // circles.push(new Circle(random(0, windowWidth), random(0, windowHeight), random(-0.2, -0.3), random(-0.2, -0.4), random(0, 160), random(195, 205), random(180, 220), random(5, 10), dreams.dreams[i], 0, 0, 0));
    // }
    
    //Paula's dreams array.
    lengthJSON = dreams.dreams.length;
    fill(250, 231, 241);

    //display words; DONT DELETE THIS. IT WILL WORK THEN
    //for (var w = 0; w < keywords.length; w++) {
    //words.push(new Word(keywords[w], random(40, 540), random(30, 420)));
    //}


    //end of Setup
}

function draw() {
  // Image of map for background
    image(img, 0, 0, windowWidth, windowHeight);
  //image(dreamVideo, windowWidth/2-500, windowHeight/2-500, 500, 500);

  //Making the WAR video appear (array) if mouse if over circle with dreams[1]

    var videoEllipseX= circles[1].x;
    var videoEllipseY= circles[1].y;
    
    if (mouseX > (videoEllipseX - 45/2) && mouseX < (videoEllipseX + 45/2)  && mouseY >  (videoEllipseY - 45/2)     && mouseY < (videoEllipseY + 45/2)) {
            
            dreamVideo.play();
            image(dreamVideo,windowWidth*0.5,windowHeight*0.22, 580, 580);
            console.log("hay video");
        
        }

    //making the BOAT video appear when mouse over circle [4] with dreams [3]
    
    var videoBoatEllipseX= circles[4].x;
    var videoBoatEllipseY= circles[4].y;
    
    if (mouseX > (videoBoatEllipseX - 45/2) && mouseX < (videoBoatEllipseX + 45/2)  && mouseY >  (videoBoatEllipseY - 45/2)     && mouseY < (videoBoatEllipseY + 45/2)) {
            
            boatDreamVideo.play();
            image(boatDreamVideo,windowWidth*0.2,windowHeight*0.45, 370, 370);
            console.log("hay video");
        
            //playTheBoatSoundDream();
        
        }

    //making the sound of Las Vegas Dream appear when mouse 
    var lasVegasDreamEllipseX= circles[7].x;
    var lasVegasDreamEllipseY= circles[7].y;
    
    if (mouseX > (lasVegasDreamEllipseX - 45/2) && mouseX < (lasVegasDreamEllipseX + 45/2)  && mouseY >  (lasVegasDreamEllipseY - 45/2)     && mouseY < (lasVegasDreamEllipseY + 45/2)) {
            
           playLasVegasDream();
           
            console.log("esta sonando Las Vegas Dream?");
        
        }
    
   5
    var marbleEllipseX= circles[5].x;
    var marbleEllipseY= circles[5].y;
    
    if (mouseX > (marbleEllipseX - 45/2) && mouseX < (marbleEllipseX + 45/2)  && mouseY >  (marbleEllipseY - 45/2)     && mouseY < (marbleEllipseY + 45/2)) {
            playMarbleDreamSound();
          image(marbleHand, 300, 100, windowWidth*0.30, windowHeight*0.30);
           
            console.log("marble foto?");
        
        }
    
//Testing to make the video appear
//if (mouseX<300 && mouseX>0 && mouseY<300 && mouseY>0) {
//dreamVideo.play();
//image(dreamVideo,windowWidth-2000,430, 600, 720);
//console.log("hay video");
//}
//else {
  //image(img, 0, 0, windowWidth, windowHeight);
//dreamVideo.hide();
//dreamVideo.muted();
//}

    // dreamForm is not active.
    if (dreamForm === false) {

        playBreath();
   
    }
    
   

    //display circles
    for (var i = 0; i < circles.length; i++) {
      circles[i].display();
      //println("soy circulo")
      circles[i].intersection();
      circles[i].move();
    }

  //else {
  //formulaire.display;
  //}


    for (var w = 0; w < words.length; w++) {
    //println("Is this the thing that is undefined? " + words[w].text);
            words[w].display();
            if (frameCount % 180 === 0) {
                words[w].update();
            }
    }

}
 // end Draw


function playBreath(){

  if (!breathSound.isPlaying()){

    breathSound.play();

    loop();

     }


}
//functions to display the sound of some dreams
function playLasVegasDream() {

    if (!lasVegasDreamSound.isPlaying()){

   lasVegasDreamSound.play();

    loop();

    } 
    
}

//function playMarbleHandsDream() {

  //  if (!marbleDreamSound.isPlaying()){

   //marbleDreamSound.play();

    //loop();

    //} 
    
//}

function playTheBoatSoundDream() {

    if (!boatDreamSound.isPlaying()){

   boatDreamSound.play();

    loop();

    } 
    
}

function playMarbleDreamSound() {

    if (!marbleDreamSound.isPlaying()){

  marbleDreamSound.play();

    loop();

    } 
    
}


//circle function, intersection, display, move
function Circle(x, y, xSpeed, ySpeed, colr, colg, colb, colA, dream, place, pX, pY, dreamRecorder) {
  
  this.xSpeed = xSpeed;
  this.ySpeed = ySpeed;
  this.x = x;
  this.y = y;
  this.colr = colr;
  this.colg = colg;
  this.colb = colb;
  this.colA = colA;
  this.dream = dream;
  //this.date= date;
  this.place = place;
  this.pX = pX;
  this.pY = pY;
  this.dreamRecorder = dreamRecorder;


    this.display = function() {
        fill(this.colr, this.colg, this.colb);
        ellipse(this.x,this.y,random(15,40),random (15,40));
    // line ( random (this.x-25, this.x+25),random (this.y-25, this.y+25), random (this.x-25, this.x+25), random (this.y-25, this.y+25));
    };

    this.intersection = function() {
        if (mouseX < this.x + 25 && mouseX > this.x - 25 &&
            mouseY < this.y + 25 && mouseY > this.y - 25) {
                fill(255,240,241,150);
                textFont("Helvetica");
                textSize(19);
                text(this.dream.thedream, windowWidth*0.22, windowHeight*0.3, 800, 800);
                //textSize(13);
                //text(this.dream.date, 15, 35);
                textSize(20);
                text(this.dream.place, this.pX, this.pY);
                fill(255, 0, 0);
                ellipse(this.pX + 90, this.pY - 5, 5, 5);
                //ellipse ();

                if (this.dreamRecorder === true) {
                        dreamForm = true;
                    //write here
                }
        }
  };

    this.move = function() {

        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;

        if (this.x > width || this.x < 0) {
            this.xSpeed *= -1;
        }

        if (this.y > height || this.y < 0) {
            this.ySpeed *= -1;
    
        }
    
    };
//end of circle function    
}


/* {
   if (this.x>=windowWidth || this.y >= windowHeight) {
      this.xSpeed=-this.xSpeed
      this.ySpeed=-this.ySpeed;

    }
    // if the circle is more than 0 then move
    if (this.x<0 || this.y<0) {
      this.xSpeed = xSpeed;
      this.ySpeed = ySpeed;
    }

    this.x += +this.xSpeed+0.1;
    this.y += +this.ySpeed+0.2;
}*/

//}
// else {
// text (this.dream.keywords[], random (15,565), random (15,415));
//}

// function to create the next page of inboxes
function changeToForm(){

    window.location = "form.html"

}

function mouseClicked() {
    
    console.log(circles[0].x);
    var blueEllipseX = circles[0].x;
    var blueEllipseY = circles[0].y;
    if (mouseX > (blueEllipseX - 45/2) && mouseX < (blueEllipseX + 45/2)  && mouseY >  (blueEllipseY - 45/2) && mouseY < (blueEllipseY + 45/2)) // if mouse X &y over lue circle)
        {
        console.log("clicked blue bubble");
        changeToForm();
    //add working video here
    //  draw the input boxes
    // }
  }

  //var videoEllipseX= circles[1].x;
  //var videoEllipseY= circles[1].y;
  //  if (mouseX > (videoEllipseX - 45/2) && mouseX < (videoEllipseX + 45/2)  && mouseY >  (videoEllipseY - 45/2) && mouseY < (videoEllipseY + 45/2))
    //{playdreamVideo ();

    //}
}

// function for keywords of the begging
function Word(word, x, y) {
    
    this.word = word;
    this.x = x;
    this.y = y;
    this.update = function() {
        this.x = random;
        this.y = random;
    };
  
    this.display = function() {
            text(this.word, this.x, this.y);
    };
    
    this.movement = function() {
        this.x = this.x * wordsSpeed;
        this.y = this.y * wordsSpeed;
    };
    //end of word function
}
