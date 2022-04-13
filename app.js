

const choices = ['rock', 'paper', 'scissors'];
let computerChoice;
let playerChoice;
let computerScore = 0;
let playerScore = 0;


    //randomly updates computerChoice when called.//
function computerPlay () {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
}

    //get user choice and change to lowercase.//
function userPlay () {
    playerChoice = prompt("Please pick: Rock, Paper, Scissors...").toLowerCase();
}
    //takes user input and compares to computer input. also keeps score.//
function round () {
    computerPlay();
    userPlay();
    console.log("computer choice " + computerChoice);
    console.log("player choice " + playerChoice);
    chooseWinner();
}

    //compares computer and player choie. updates score.
function chooseWinner () {
    if (computerChoice === playerChoice) {
        return alert("It's a draw!");
    } 
    else if (computerChoice == choices[0] && playerChoice == "paper") {
        playerScore++;
        return alert("You win! Paper beats Rock!");
    }
    else if (computerChoice == choices[0] && playerChoice == "scissors") {
        computerScore++;
        return alert("You lose! Rock beats Scissors!");
    }
    else if (computerChoice == choices[1] && playerChoice == "scissors") {
        playerScore++;
        return alert("You win! Scissors beats Paper!");
    }
    else if (computerChoice == choices[1] && playerChoice == "rock") {
        computerScore++;
        return alert("You lose! Paper beast Rock!");
    }
    else if (computerChoice == choices[2] && playerChoice == "paper") {
        computerScore++;
        return alert("You lose! Scissors beats Paper!");
    }
    else if (computerChoice == choices[2] && playerChoice == "rock") {
        playerScore++;
        return alert("You win! Rock beats Scissors!");
    }
    
}

 //reset score to zero, and plays 5 rounds of RPS. returns winner.
function game () {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        round();
        console.log('Computer: ' + computerScore);
        console.log('Player: ' + playerScore);
    }
    if (playerScore > computerScore) {
        alert ('You win! Congratulations!');
    } else if (playerScore == computerScore) {
        alert ("It's a draw! Well done!");
    } else if (playerScore < computerScore) {
        alert ('You lose, better luck next time!');
    }
}