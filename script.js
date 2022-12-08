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

let playerChoice = prompt("Make your choice: rock, paper or scissors?")

playerChoice = playerChoice.toLowerCase(playerChoice)

function playRound(computerChoice, playerChoice) {
    if(computerChoice == "rock" && playerChoice == "paper"){
        return "You Win, Paper beats Rock";
    }else if(computerChoice == "rock" && playerChoice == "scissors") {
        return "You Lose, Rock beats Scissors";
    }else if(computerChoice == "paper" && playerChoice == "scissors") {
        return "You Win, Scissors beats paper";
    }else if(playerChoice == "rock" && computerChoice == "paper"){
        return "You Lose, Paper beats Rock";
    }else if(playerChoice == "rock" && computerChoice == "scissors") {
        return "You Win, Rock beats Scissors";
    }else if(playerChoice == "paper" && computerChoice == "scissors") {
        return "You Lose, Scissors beats paper";
    }else {
        return "its a tie";
    }
}

console.log(playRound(computerChoice, playerChoice))

function game(playRound) {
    for(let i = 0; i < 5; i++){

    }
}