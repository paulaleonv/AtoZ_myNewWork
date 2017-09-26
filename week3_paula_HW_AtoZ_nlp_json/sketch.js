// A2Z F17
// Daniel Shiffman
// https://github.com/shiffman/A2Z-F17
// http://shiffman.net/a2z

var dreams, nounSingular;
var allNouns = [];
var allTopics = [];
var allVerbs= [];


function preload() {
  // Get the most recent earthquake in the database
  var dreamsJsonFile = './selectedDreams2.json';
  dreams = loadJSON(dreamsJsonFile);
}


function setup() {

  var qtyOfDreams = dreams.dreams.length;
  var randomNumber = Math.floor(Math.random() * qtyOfDreams)

  var dream1 = dreams.dreams[randomNumber].thedream;

  noCanvas();
 background(0,30,220);
  // Make a text input field
  input = select('#sentence');
  input.attribute("value", dream1 );
  // var inputDream = document.getElementById('sentence');
  // input.setAttribute("value", dream1 );
  // console.log(inputDream.value);

  // Make a submit button
  let button1 = select('#nouns');
  button1.mousePressed(nounsify);

  let button2 = select('#topics');
  button2.mousePressed(topicsOfDream);

  let button3 = select('#verbs');
  button3.mousePressed(verbify);

  function nounsify() {
    let output = input.value();
    let doc = nlp(output);
    let nouns1 = doc.nouns().data();
    for (var i = 0; i < nouns1.length; i++) {
      // allnouns = output.replace(nouns[i].singular);
      nounSingular = nouns1[i].singular;
      allNouns.push(nounSingular);
    }

    var allNounsEdited = allNouns.join(" / ");

    createP(allNounsEdited).class('text');

  }

  function topicsOfDream() {
    let output = input.value();
    let doc = nlp(output);
    let topics1 = doc.topics().data();
    for (var i = 0; i < topics1.length; i++) {
      let topicsList = topics1[i].text;
      allTopics.push(topicsList);
    }

    var allTopicsEdited = allTopics.join(" – ");

    createP(allTopicsEdited).class('text');
  }

  function verbify () {
    let output = input.value();
    let doc = nlp(output);
    //let verbsInDream = doc.verbs().data();
    let verbsInDreamP = doc.verbs().isPlural().out('array')
    //let verbsInDreamS= doc.verbs().isSingular
    console.log(verbsInDreamP);
    //console.log(verbsInDreamS);
    console.log("are this verbs here?");

    for (var i = 0; i < verbsInDreamP.length; i++) {
      // allnouns = output.replace(nouns[i].singular);
      //verbsSingular = verbsInDream[i].singular;
      let verbsList = verbsInDreamP[i].text;
      allVerbs.push(verbsInDreamP);
    }
    var allVerbsEdited = allVerbs.join(" / ");
    createP(allVerbsEdited).class('text');


  }






  nlp('dinosaur').nouns().toPlural().out('text');
  // 'dinosaurs'

  nlp('She sells seashells').sentences().toNegative().out('text');
  // 'She doesn't sell seashells'

  nlp('I fed the dog').replace('the #Noun', 'the cat').out('text');
  // 'I fed the cat'

  nlp('Tony Hawk did a kickflip').people().out('freq');
  // {normal: "tony hawk", count: 1, percent: 100}

  nlp('five hundred and sixty').values().toNumber().out('text')
  // 560


}
