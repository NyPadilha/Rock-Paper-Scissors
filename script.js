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
    if(computerChoice == "rock" && playerChoice == "paper"){
        console.log("You Win, Paper beats Rock");
    }else if(computerChoice == "rock" && playerChoice == "scissors") {
        console.log("You Lose, Rock beats Scissors");
    }else if(computerChoice == "paper" && playerChoice == "scissors") {
        console.log("You Win, Scissors beats paper");
    }else if(playerChoice == "rock" && computerChoice == "paper"){
        console.log("You Lose, Paper beats Rock");
    }else if(playerChoice == "rock" && computerChoice == "scissors") {
        console.log("You Win, Rock beats Scissors");
    }else if(playerChoice == "paper" && computerChoice == "scissors") {
        console.log("You Lose, Scissors beats paper");
    }else {
        console.log("its a tie");
    }
}

function game(playRound) {
    for(let i = 0; i < 5; i++){
        
    }
}