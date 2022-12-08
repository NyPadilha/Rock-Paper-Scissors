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

const computerChoice = getComputerChoice()

function playRound(computerChoice, playerChoice) {
    let winner = ""
    if(computerChoice == "rock" && playerChoice == "paper"){
        winner = ("You Win, Paper beats Rock");
    }else if(computerChoice == "rock" && playerChoice == "scissors") {
        winner = ("You Lose, Rock beats Scissors");
    }else if(computerChoice == "paper" && playerChoice == "scissors") {
        winner = ("You Win, Scissors beats paper");
    }else if(playerChoice == "rock" && computerChoice == "paper"){
        winner = ("You Lose, Paper beats Rock");
    }else if(playerChoice == "rock" && computerChoice == "scissors") {
        winner = ("You Win, Rock beats Scissors");
    }else if(playerChoice == "paper" && computerChoice == "scissors") {
        winner = ("You Lose, Scissors beats paper");
    }else {
        winner = ("its a tie");
    }
}