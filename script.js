var ties = 0;
var wins = 0;
var losses = 0;

var choices = ["Rock", "Paper", "Scissors"];

function playGame() {
   var userChoice = window.prompt("Rock, Paper, or Scissors");

    if (!userChoice) {
        return;
    }

    userChoice = userChoice.toUpperCase();

    var response = Math.floor(Math.random() * choices.length);
    var computerChoice = choices[response].toUpperCase();

    if (computerChoice === userChoice) {
        ties++;
        window.alert("Tie!");
    } else if (userChoice === "ROCK" && computerChoice === "SCISSORS") {
        wins++;
        window.alert("You Won!");
    } else if (userChoice === "PAPER" && computerChoice === "ROCK") {
        wins++;
        window.alert("You Won!");
    } else if (userChoice === "SCISSORS" && computerChoice === "PAPER") {
        wins++;
        window.alert("You Won!");
    } else {
        losses++;
        window.alert("You lost!");
    }
    

    window.alert("Wins: " + wins + " Ties: " + ties + " Losses: " + losses);

   var playAgain = window.confirm("Would you like to play again?");

    if (playAgain) {
        playGame();
    }

}

playGame();




