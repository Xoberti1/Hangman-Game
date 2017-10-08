/* 
*1. Establish a choice for a word that the user will guess.
*2. Give the a hint as to what they're guessing
  2a. Output something to the DOM to give a hint.
  2b. A display of the word length with dashes/boxes.
    2bb. create elements to display the length.
3. Find a way to record user imput.    
  3a. create an eventlistener that listens for keystrokes.
  3b. need a variable to keep track of index of word being guessed.
    3bb. Use some logic to determine if the u ser is entering a correct or incorrect key stroke
    3bc. If keystroke is incorrect decriment the guessesleft
    3bd. If it is correct display it. Potentially in the correct place in the word.
*/

var computerChoices = ["FORD", "CHEVROLET", "CHRYSLER", "MERCEDEZ", "BMW", "PEUGEOT", "VOLKSWAGON", "PORSCHE", "TOYOTA", "HONDA", "HYUNDAI"];

// ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var compguess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  console.log(compguess);

// document.getElementById("answer").innerHTML = "The computer guessed: " + compguess;
for (var i = 0; i < compguess.length; i++) {
  var dash = document.createElement("SPAN");
  dash.innerText = "_";
  dash.setAttribute ("id", i);
 } 

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var yourguesses = [];

var updateguessesLeft = function(){
document.getElementById("guesses").innerHTML = "Guesses Left: " + guessesLeft;
};

var updateyourguesses = function(){
  document.getElementById("yourGuesses").innerHTML = "Your Guesses so far: " + yourguesses.join(', ');
};

var reset = function() {
  guessesLeft = 10;
  yourguesses = [];
};

  document.onkeyup = function(event) {
   
    var userguess = event.key;
    yourguesses.push(userguess);
    updateguessesLeft();
    updateyourguesses();

    if (yourguesses === compguess){
        wins++;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        reset();
    }

    if (userguess === i){
      document.getElementById(i).innerHTML = userguess;
    }

    else {
      guessesLeft--;
    }

    if (guessesLeft === 0) {
      losses++;
      document.getElementById("losses").innerHTML = "Losses: " + losses;
      reset();
    }

};


