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


function getPlayerChoice(choice) {
    /* input pra pegar a escolha do jogador */
}

let playerChoice = getPlayerChoice()


function playRound(computerChoice, playerChoice) {

    /*
    rock paper = paper
    rock scissors = rock
    paper scissors = scissors
    */
    

}