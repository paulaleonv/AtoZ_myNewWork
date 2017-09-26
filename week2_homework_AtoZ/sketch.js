
//var where the user can write dreams, its taking the, from html
  var areaForUserInput;
//var for what the user writes
  var outputFromUser2;
// var for the button
  var send;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Helvetica");
  //transform html in js
  areaForUserInput= select("#userInput");
  areaForUserInput.changed(newText);
  outputFromUser2 = select ("#outputFromUser");
  send= select("#sendButton");
  send.mousePressed(newText);
}
// function  that transform the text from users changing pronuns from singular to plural
function newText() {
createP (areaForUserInput.value());
var changeI = /\bI|i\b/g;
var changeMe= /\bme|Me\b/g;
var changeMy= /\bmy|My\b/g;
var changeMine= /\bmine|Mine\b/g;
var changeAm= /\bam\b/ig;
var changeIs= /\bis\b/ig;
var changeWas= /\bwas\b/ig;

console.log(outputFromUser2.html());
var newTextForTest= (areaForUserInput.value()).replace(changeI,"we");
newTextForTest= (newTextForTest).replace(changeMe,"we");
newTextForTest= (newTextForTest).replace(changeMy,"our");
newTextForTest= (newTextForTest).replace(changeMine,"our");
newTextForTest= (newTextForTest).replace(changeAm,"are");
newTextForTest= (newTextForTest).replace(changeIs,"are");
newTextForTest= (newTextForTest).replace(changeWas,"were");

outputFromUser2.html(newTextForTest);
console.log (newTextForTest);
return (newTextForTest);
print (newTextForTest);

}
