var salsaGeneral;
var shielfImg;
var manShoesImg;
var womanShoesImg;
var words = ["direction", "one", "blessin'", "sunrise", "darkest", "feeling", "two", "slowly", "fit me", "nibble", "ears", "Baby",
  "lie", "three", "arms", "silence", "hours", "stare", "body", "loving", "kiss", "four", "error", "feelings", "asleep", "illogical","imagine", "five","six","seven"
];
var numbers = ["one", "two", "three", "four", "five", "six", "seven"
];
var link;
//array {[breath, memories, one, smell, sweat, three, flow, glimce, night, two, storm, day, six,sea, blindness,hand, bone, scapula]}
function preload() {
  salsaGeneral = loadImage("SalsaColor_week1.jpg");
  shielfImg = loadImage("ShoeShielfWeb.jpg");
  manShoesImg = loadImage("ManShoesWeb.jpg");
  womanShoesImg = loadImage("WomanShoesWeb.jpg");
  //soundFormats("mp3");
  //mySound = loadSound('SalsaClassSound.mp3');
    soundFormats("m4a");
  mySound = loadSound('salsa class Copy 2.m4a');
}


function setup() {
  createCanvas(1000, 947);
image(salsaGeneral, 0, 0);
}


function draw() {
  //background(0);


}

function mousePressed() {

  mySound.setVolume(0.1);
  mySound.play();

  randomWord();

}

function randomWord() {
  console.log("hello");
  //textFont(helvetica,[28])
  textSize(27);
  fill(random(213,153),random(43,93),random(32,34));
  text(words[floor(random(0,25))], random(50,900), random(50,750));
  //text(numbers[floor(random(0,6))], random(100,900), random(100,900));
}

function mouseOver() {
image(manShoesImg, 500, 500);

}
