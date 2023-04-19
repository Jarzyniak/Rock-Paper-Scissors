/* Computer choice function */
function getComputerChoice() {
    /*random number generator */
    let random = Math.floor((Math.random() * 3) + 1);
    let rps;
    /* Assigning a value to a variable depends on the generated number */
    if (random === 1) {
        rps = 'rock';
    } else if (random === 2) {
        rps = 'paper';
    } else {
        rps = 'scissors';
    }
    /* return value */
    return rps;
}

/* My choice */
function getPlayerSelection() {
    /*Write a value */
    let selection = prompt("Let's play? What's your choice? ROCK/PAPER/SCISSORS?");
    /* Made paramater case insensitive */
    selection = selection.toLowerCase();
    /* If value is wrong return info */
    if (selection !== 'rock' &&
        selection !== 'paper' &&
        selection !== 'scissors') {
        console.log("It doesn't exist in this game");
        /*if true return value */
    } else {
        return selection;
    }
}

let playerCount = 0;
let computerCount = 0;

/*play round function */
function playRound() {
    /* if tie return tie */

    const playerSelection = getPlayerSelection();

    const computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        return "tie";
        /*if player win */
    } else if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "rock" && computerSelection === "scissors")) {
        playerCount++;
        return "Player";
        /*else choices computer win */
    } else {
        computerCount++;
        return "Computer";
    }

}

function game() {
    for (let i = 1; i <= 5; i++) {
        console.log(playRound());
        console.log("Player: " + playerCount + " Computer: " + computerCount);
    }
}

console.log(game());