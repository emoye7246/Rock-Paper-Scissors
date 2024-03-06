const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = choices[Math.floor(Math.random() * choices.length)];
    console.log(choice);
    return (choice);
}
 function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ){
        return "Player";
    } else {
        return "Computer";
    }
 }

 function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {

        console.log(playerSelection);
        return "Its a Tie";

    } else if (result == "Player") {
        console.log(playerSelection);
        return `You Win ${playerSelection} beats ${computerSelection}` ;

    } else if (result == "Computer") {

        console.log(playerSelection);

        return `You Lose ${computerSelection} beats ${playerSelection}` ;
    }
 }
    function game() {

        let playerScore = 0;
        let computerScore = 0; 

        console.log("Begin Game");
        for (i = 0; i < 5; i++ ) {
            const playerSelection = window.prompt("Please choose rock paper or scissors").toLowerCase();
            const computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection));
        if (checkWinner(playerSelection, computerSelection) == "Player") {
            playerScore++;
        } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
            computerScore++;
        }
    }

        if (playerScore > computerScore) {
            console.log("Player one wins");
        } else if (computerScore > playerScore) {
            console.log("computer wins");
        } else {
            console.log("We have a tie");
        }


    }