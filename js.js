function getComputerChoice() {
    let random = Math.floor((Math.random() * 3) + 1);
    let rps;
    if (random === 1) {
        rps = "rock";
    } else if (random === 2) {
        rps = "paper";
    } else {
        rps = "scissors"
    }

    return rps;
}



console.log(getComputerChoice());