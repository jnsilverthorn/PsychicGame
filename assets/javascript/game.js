var compChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;
var losses = 0;
var remainingG = 0;
var guesses = [];

var score1 = document.getElementsByClassName("scoreW");
var score2 = document.getElementsByClassName("scoreL");
var remG = document.getElementsByClassName("rem");
var guess1 = document.getElementsByClassName("guess");
var introC = document.getElementsByClassName("intro");

var resetG = function() {
    remainingG = 0;
    guesses = [];
}

var resetCC = function() {
    randChoice = compChoice[Math.floor(Math.random() * compChoice.length)];
    console.log(randChoice);
}

resetCC();
resetG();

document.onkeyup = function(event) { 
    var userInput = event.key;
    guesses.push(String.fromCharCode(userInput));
        if (userInput === randChoice) {
            console.log("Wins:" + (1 + wins));
            resetCC();
            resetG();
            wins++;
        }
        
        if (userInput !== randChoice) {
            console.log((9 - remainingG));
            console.log(guesses);
            remainingG++;
        }
        
        if (remainingG === 10) {
            console.log("Losses: " + (1 + losses));
            resetG();
            resetCC();
            losses++;
        }
};
    
introC.textContent = "#";
score1.textContent = "Wins: " + wins;
score2.textContent = "Losses: " + losses;
remG.textContent = "Remaining Guesses: " + (9 - remainingG);
guess1.textContent = "Your Guesses: " + guesses;






