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

/*play round function */
function playRound(playerSelection, computerSelection) {
    /* if tie return tie */
    if (playerSelection === computerSelection) {
        return "tie";
        /*if player win */
    } else if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "rock" && computerSelection === "scissors")) {
        return "Player won " +
            playerSelection + " beats " + computerSelection + "!";
        /*else choices computer win */
    } else {
        return "Computer won" +
            computerSelection + " beats " + playerSelection + "!";
    }
}

const playerSelection = getPlayerSelection();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));