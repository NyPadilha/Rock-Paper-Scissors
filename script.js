function getComputerChoice(choice) {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            choice = "rock"
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }
    return choice
}

let computerChoice = getComputerChoice()
