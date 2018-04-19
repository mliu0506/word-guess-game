//Made the variables first to use in the functions
//Array of words
var Words = ['dragonite', 'eevee', 'pikachu', 'meowth', 'snorlax', 'vulpix', 'charmander', 'squirtle', 'jigglypuff'
];
var blanksAndSuccess = []; //Correct guesses and blanks will be in this array
var blanks = 0; //holds blanks spaces for the word chosen
var currentWord = "";
var currentLetters = [];
// Counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 12;

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

//array for users guessed letters
var guessedLetter = [];
//array for users correct guesses
var correctLetter = [];
//guessed letters that are incorrect
var incorrectGuess = [];




var userGuess = document.getElementById("playerChoice"); 

// Main Program Start.
// This function is run whenever the user presses a "Start" menu.
document.getElementById("gameStart").onclick = function() {buttons()};

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
  blanksAndSuccess = [];
  guessedLetter = [];
  incorrectGuess = [];
  //Selects a words at random
  currentWord = Words[Math.floor(Math.random() * Words.length)];

  //Splits the current word into letters, so that you can match the users guesses to the letters of the word
  currentLetters = currentWord.split("");

  //Need to know how many blanks for a word
  blanks = currentLetters.length;
  for (var i = 0; i < blanks; i++) {
    blanksAndSuccess.push("_")
  }
  console.log(currentWord);

  //print the blank on the screen
  document.getElementById('currentWord').innerHTML = "Pokemon Name: " + blanksAndSuccess.join(" ");
  document.getElementById('guessesRemaining').innerHTML = "Number Of Guesses Remaining: " + numGuesses;
  document.getElementById('guessed').innerHTML = "Letters Already Guessed: ";
}

//Checks if users letter is in the word
function checkLetters(letter) {
  //using Boolean to check if the letter is in the word
  var letterInWord = false;
  //loop that goes through the length of the word
  for (var i = 0; i < blanks; i++) {
    if (currentWord[i] == letter) {
      letterInWord = true;
    }
  }
  if (letterInWord) {
    for (var i = 0; i < blanks; i++) {

      if (currentWord[i] == letter) {
        blanksAndSuccess[i] = letter
      }
    }
    console.log(blanksAndSuccess);

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
  document.getElementById("currentWord").innerHTML = "Pokemon Name: " + blanksAndSuccess.join(" ");
  document.getElementById("playerChoice").innerHTML = "Key Entered: " + userGuess.textContent;
  document.getElementById("guessed").innerHTML = "Letters Already Guessed: " + incorrectGuess.join(" ");

  // If we have gotten all the letters to match the solution... 
  if (currentLetters.toString() == blanksAndSuccess.toString()) {
    winCounter++; // add to the win counter 
    document.getElementById("word").innerHTML = "The last word was " + currentWord;
    if (currentWord == "eevee"){
    document.getElementById("imageID").src = "assets/images/eevee.gif";
      } else if (currentWord == "dragonite")  {
      document.getElementById("imageID").src =  "assets/images/dragonite.gif";
    } else if (currentWord == "pikachu")  {
      document.getElementById("imageID").src =  "assets/images/pikachu3.webp";
    } else if (currentWord == "meowth")  {
      document.getElementById("imageID").src =  "assets/images/meowth.webp";
    } else if (currentWord == "snorlax")  {
      document.getElementById("imageID").src =  "assets/images/snorlax.gif";
    } else if (currentWord == "vulpix")  {
      document.getElementById("imageID").src =  "assets/images/vulpix.gif";
    } else if (currentWord == "charmander")  {
      document.getElementById("imageID").src =  "assets/images/charmander.gif";
    } else if (currentWord == "squirtle")  {
      document.getElementById("imageID").src =  "assets/images/squirtle.gif";  
    } else if (currentWord == "jigglypuff")  {
      document.getElementById("imageID").src =  "assets/images/jigglypuff.gif";  
  }
      document.getElementById("imageName").innerHTML = currentWord;

    // Update the win counter in the HTML
    document.getElementById("winCounter").innerHTML = "You have won " + winCounter + " game(s)";
    startGame(); // restart the game 
  }

  // If we've run out of guesses
  else if (numGuesses == 0) {
    lossCounter++; // add to the loss counter 
    document.getElementById("word").innerHTML = "The last word was " + currentWord;
  
    if (currentWord == "eevee"){
      document.getElementById("imageID").src = "assets/images/eevee.gif";
         } else if (currentWord == "dragonite")  {
        document.getElementById("imageID").src =  "assets/images/dragonite.gif";
      } else if (currentWord == "pikachu")  {
        document.getElementById("imageID").src =  "assets/images/pikachu3.webp";
      } else if (currentWord == "meowth")  {
        document.getElementById("imageID").src =  "assets/images/meowth.webp";
      } else if (currentWord == "snorlax")  {
        document.getElementById("imageID").src =  "assets/images/snorlax.gif";
      } else if (currentWord == "vulpix")  {
        document.getElementById("imageID").src =  "assets/images/vulpix.gif";
      } else if (currentWord == "charmander")  {
        document.getElementById("imageID").src =  "assets/images/charmander.gif";
      } else if (currentWord == "squirtle")  {
        document.getElementById("imageID").src =  "assets/images/squirtle.gif";  
      } else if (currentWord == "jigglypuff")  {
        document.getElementById("imageID").src =  "assets/images/jigglypuff.gif";  
      }
      document.getElementById("imageName").innerHTML = currentWord;

    // Update the loss counter in the HTML
    document.getElementById("lossCounter").innerHTML = "You have lost " + lossCounter + " game(s)";

    // restart the game automatically
    startGame(); 
  }
}

//Making the stuff run
//Calling the startGame function
startGame();