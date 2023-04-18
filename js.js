/* Computer choice function */
function getComputerChoice() {
    /*random number generator */
    let random = Math.floor((Math.random() * 3) + 1);
    let rps;
    /* Assigning a value to a variable depends on the generated number */
    if (random === 1) {
        rps === "rock";
    } else if (random === 2) {
        rps === "paper";
    } else {
        rps === "scissors"
    }
    /* return value */
    return rps;
}

/* My choice */
function playerSelection() {
    /*Write a value */
    let selection = prompt("Let's play? What's your choice? ROCK/PAPER/SCISSORS?");
    /* Made paramater case insensitive */
    let insensitive = selection.toLowerCase();
    /* If value is wrong return info */
    if (insensitive !== 'rock' &&
        insensitive !== 'paper' &&
        insensitive !== 'scissors') {
        console.log("It doesn't exist in this game");
        /*if true return value */
    } else {
        return insensitive;
    }
}