

const choices = ['rock', 'paper', 'scissors'];
let computerChoice;
let playerChoice;
let computerScore = 0;
let playerScore = 0;
let reset = 0;


    //randomly updates computerChoice when called.//
function computerPlay () {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
}

    //get user choice and change to lowercase.//
/* commented out for refactoring into gui. 
    no longer needs to take manual input as adding buttons.
function userPlay () {
    playerChoice = prompt("Please pick: Rock, Paper, Scissors...").toLowerCase();
}*/



    //takes user input and compares to computer input. also keeps score.//
function round () {
    computerPlay();
    //userPlay(); not required with buttons added.
    console.log("computer choice " + computerChoice);
    console.log("player choice " + playerChoice);
    chooseWinner();
    console.log('Computer: ' + computerScore);
    console.log('Player: ' + playerScore);
    playerScoreCard.textContent = `Player: ${playerScore}`;
    computerScoreCard.textContent = `Computer: ${computerScore}`;
    winner();
}

function winner () {
    if (playerScore >= 5) {
        playerScore = reset;
        computerScore = reset;
        return alert("Congratulations, you win!");
        //reset score
    }
    if (computerScore >= 5) {
        playerScore = reset;
        computerScore = reset;
        return alert("Bad luck, you lost!");
        //reset score
    }

}


    //compares computer and player choie. updates score.
function chooseWinner () {
    if (computerChoice === playerChoice) {
        return outcome.textContent = "It's a draw!";
    } 
    else if (computerChoice == choices[0] && playerChoice == "paper") {
        playerScore++;
        return outcome.textContent = `You win! Paper beats Rock!`;
    }
    else if (computerChoice == choices[0] && playerChoice == "scissors") {
        computerScore++;
        return outcome.textContent = `You lose! Rock beats Scissors!`;
    }
    else if (computerChoice == choices[1] && playerChoice == "scissors") {
        playerScore++;
        return outcome.textContent = `You win! Scissors beats Paper!`;
    }
    else if (computerChoice == choices[1] && playerChoice == "rock") {
        computerScore++;
        return outcome.textContent = `You lose! Paper beast Rock!`;
    }
    else if (computerChoice == choices[2] && playerChoice == "paper") {
        computerScore++;
        return outcome.textContent = `You lose! Scissors beats Paper!`;
    }
    else if (computerChoice == choices[2] && playerChoice == "rock") {
        playerScore++;
        return outcome.textContent = `You win! Rock beats Scissors!`;
    }
    
}

 //reset score to zero, and plays 5 rounds of RPS. returns winner.
    //not currently used in this iteration.
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

//event listeners

    // assigns picks to buttons
const pickRock = document.querySelector('#rock');
pickRock.addEventListener('click', function() {
    playerChoice = 'rock';
    round();
});

const pickPaper = document.querySelector('#paper');
pickPaper.addEventListener('click', function() {
    playerChoice = 'paper';
    round();
});

const pickScissors = document.querySelector('#scissors');
pickScissors.addEventListener('click', function() {
    playerChoice = 'scissors';
    round();
});

    // targets scores and assigns to div
const playerScoreCard = document.querySelector('#player_score');
const computerScoreCard = document.querySelector('#comp_score');

const outcome = document.querySelector('#outcome');


