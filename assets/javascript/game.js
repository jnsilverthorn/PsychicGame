var compChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;
var losses = 0;
var guessesSoFar = 0;
var guesses = [];

var score1 = document.getElementById("scoreW");
var score2 = document.getElementById("scoreL");
var remG = document.getElementById("rem");
var guess1 = document.getElementById("guess");
var introC = document.getElementById("intro");
var resetbtn = document.getElementById("reset");

var resetG = function() {
    guessesSoFar = 0;
    guesses = [];
    remG.innerText = "Remaining Guesses: " + (9 - guessesSoFar);
    guess1.innerText = "Your Guesses: " + guesses;
}

var resetCC = function() {
    randChoice = compChoice[Math.floor(Math.random() * compChoice.length)];
    console.log(randChoice);
}

resetCC();
resetG();

document.onkeyup = function(event) { 
    var userInput = event.key;
    guesses.push(userInput);
    guess1.innerText = "Your Guesses: " + guesses;
        if (userInput === randChoice) {
            console.log("Wins:" + (1 + wins));
            resetCC();

            wins++;
            score1.innerText = "Wins: " + wins;
        }
        
        if (userInput !== randChoice) {
            console.log(guesses);
            guessesSoFar++;
            console.log((9 - guessesSoFar));
            remG.innerText = "Remaining Guesses: " + (9 - guessesSoFar);
        }
        
        if (guessesSoFar === 9) {
            console.log("Losses: " + (1 + losses));

            resetCC();
            losses++;
            score2.innerText = "Losses: " + losses;
        }

        if (userInput) {
            introC.innerText = "";
        }
};
    
score1.innerText = "Wins: " + wins;
score2.innerText = "Losses: " + losses;
remG.innerText = "Remaining Guesses: " + (9 - guessesSoFar);
guess1.innerText = "Your Guesses: " + guesses;

resetbtn.onclick = resetG;




