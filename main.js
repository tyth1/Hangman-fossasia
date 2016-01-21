

var f1teams = [
["F","E", "R", "R", "A", "R", "I"],
  ["M", "C", "L","A","R","E","N"]
  ["R","E","D","B","U","L","L"],
  ["S","A","U","B","E","R"],
  ["F","O","R","C","E","I","N","D","I","A"],
  ["R","E","N","A","U","L","T"]
]
var count = 2;
var correct = false;
var random = Math.floor((Math.random()*(f1teams.length-1))); 

var letter = f1teams[random];

var underline = new Array(letter.length);

var length = underline.length;
  
for (var i = 0; i < underline.length; i++){
  underline[i] = "_ ";
}

function setUnderline(){
  for (var i = 0; i < underline.length; i++){
    var guessfield = document.getElementById("guessfield");
    var letters = document.createTextNode(underline[i]);
    guessfield.appendChild(letters);
  }
  
}


var fillUnderline = function(){
  var f = document.rateformula; 
  var a = f.elements["input"]; 
  var input = a.value;  
  input = input.toUpperCase();
  for (var i = 0; i < letter.length; i++){
    if(letter[i] === input){
      underline[i] = input + " ";
      var correct = true;
    }
  a.value = "";
  }
  
  var guessfield = document.getElementById("guessfield");
  guessfield.innerHTML=""; 
  setUnderline();
   
  if(!correct == true){
    count++;
    var hangman = document.getElementById("hangman");
    hangman.src = "hang" + count + ".gif";
  }

var checkLetter = true;
  for (var i = 0; i < underline.length; i++){
    if(underline[i] === "_ "){
      checkLetter = false;
    }
  }
  if(checkLetter){
    window.alert("You won,thanks for playing :)");
  }
  
  if(count === 7){
    window.alert("You lost,Try again");
  }
}

function initiation(){
  setUnderline();
}

window.onload = initiation;



