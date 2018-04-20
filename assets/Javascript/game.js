//When window on load, it will triger the program below
window.onload = function () {

//Made the variables first to use in the functions
//Array of words.
var Words = ['dragonite', 'eevee', 'pikachu', 'meowth', 'snorlax', 'vulpix', 'charmander', 'squirtle', 'jigglypuff'
];
var guesses = []; //stored Correct guesses and blanks will be in this array
var blanks = 0; //holds blanks spaces for the word chosen
var currentWord = "";
var currentLetters = [];
// Counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 12;



//array for users guessed letters
var guessedLetter = [];
//array for users correct guesses
var correctLetter = [];
//guessed letters that are incorrect
var incorrectGuess = [];




var userGuess = document.getElementById("playerChoice"); 

// Main Program Start.
// This function is run whenever the user presses a "Start" menu.
document.getElementById("gameStart").onclick = function() {startGame()};

// This function is run whenever the user presses a key after the game start.
document.onkeyup = function(event) {
  userGuess.textContent=event.key; 
  console.log(userGuess.textContent) ;  
  guessedLetter.push(userGuess.textContent);
  document.getElementById('guessed').innerHTML = "Letters Already Guessed: " + guessedLetter.join(" ");
  // runs the code to check for correctness (refer to the below checkLetters function)
  checkLetters(userGuess.textContent); 
  // Print the final result on the screen (refer to the below PrintResult function)
  PrintResult();
}




//Below is the functionality of the game start at the First time
function startGame() {
  numGuesses = 12;
  guesses = [];
  guessedLetter = [];
  incorrectGuess = [];
  //Selects a words at random
  currentWord = Words[Math.floor(Math.random() * Words.length)];

  //Splits the current word into letters, so that you can match the users guesses to the letters of the word
  currentLetters = currentWord.split("");

  //Need to know how many blanks for a word
  blanks = currentLetters.length;
  for (var i = 0; i < blanks; i++) {
    guesses.push("_")
  }
  console.log(currentWord);

  //print the blank on the screen
  document.getElementById('currentWord').innerHTML = "Pokemon Name: " + guesses.join(" ");
  document.getElementById('guessesRemaining').innerHTML = "Number Of Guesses Remaining: " + numGuesses;
  document.getElementById('guessed').innerHTML = "Letters Already Guessed: ";
}

//Checks if users letter is in the word
function checkLetters(letter) {
  //using Boolean to check if the letter is in the word
  var letterInWord = false;
  /*
  var letter = str.toLowerCase();
*/
  //loop that goes through the length of the word
  for (var i = 0; i < blanks; i++) {
    if (currentWord[i] == letter) {
      letterInWord = true;
    }
  }
  if (letterInWord) {
    for (var i = 0; i < blanks; i++) {

      if (currentWord[i] == letter) {
        guesses[i] = letter
      }
    }
    console.log(guesses);

  } else {
    incorrectGuess.push(letter);
    numGuesses--;
    console.log("that was incorrect " + numGuesses + " are remaining");
  }
}

//Upon finishing print the result on the screen
function PrintResult() {

  console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

  // Update the HTML to reflect the new number of guesses. Also update the correct guesses.
  document.getElementById("guessesRemaining").innerHTML = "Number Of Guesses Remaining: " + numGuesses;
  document.getElementById("currentWord").innerHTML = "Pokemon Name: " + guesses.join(" ");
  document.getElementById("playerChoice").innerHTML = "Key Entered: " + userGuess.textContent;
  document.getElementById("guessed").innerHTML = "Letters Already Guessed: " + incorrectGuess.join(" ");

  // If we have gotten all the letters to match the solution... 
  if (currentLetters.toString() == guesses.toString()) {
    winCounter++; // add to the win counter 
    document.getElementById("word").innerHTML = "The last word was " + currentWord;
    document.getElementById("imageID").src = "assets/images/" + currentWord + ".gif" ;
    document.getElementById("imageName").innerHTML = currentWord;

    // Update the win counter in the HTML
    document.getElementById("winCounter").innerHTML = "You have won " + winCounter + " game(s)";
    startGame(); // restart the game 
  }

  // If we've run out of guesses
  else if (numGuesses == 0) {
    lossCounter++; // add to the loss counter 
    document.getElementById("word").innerHTML = "The last word was " + currentWord;
    document.getElementById("imageID").src = "assets/images/" + currentWord + ".gif" ;
    document.getElementById("imageName").innerHTML = currentWord;

    // Update the loss counter in the HTML
    document.getElementById("lossCounter").innerHTML = "You have lost " + lossCounter + " game(s)";

    // restart the game automatically
    startGame(); 
  }
}


startGame();
}