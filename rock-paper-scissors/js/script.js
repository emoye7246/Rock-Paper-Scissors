const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const  getComputerChoice = choices[Math.floor(Math.random() * choices.length)].toLowerCase();
    console.log(getComputerChoice);
    return (getComputerChoice);
}

function playGame(playerSelection, computerSeclection) {
    
    playerSelection = window.prompt("Please choose rock paper or scissors").toLowerCase();
    computerSeclection = getComputerChoice();

    if (playerSelection === "rock" && computerSeclection === "scissors") {

        console.log(playerSelection);
        console.log(computerSeclection);
        console.log("You Win");
        ++playerScore;
        console.log(playerScore);
        console.log(computerScore);
    }
    else if (playerSelection === "paper" && computerSeclection === "rock") {

        console.log(playerSelection);
        console.log(computerSeclection);
        console.log("You Win");
        ++playerScore;
        console.log(playerScore);
        console.log(computerScore);
    } 
    else if (playerSelection === "scissors" && computerSeclection === "paper") {

        console.log(playerSelection);
        console.log(computerSeclection);
        console.log("You Win");
        ++playerScore;
        console.log(playerScore);
        console.log(computerScore);
    }
    else if (playerSelection === "rock" && computerSeclection === "paper") {

        console.log(playerSelection);
        console.log(computerSeclection);
        console.log("You Lose");
        ++computerScore;
        console.log(playerScore);
        console.log(computerScore);
    }
    else if (playerSelection === "paper" && computerSeclection === "scissors") {

        console.log(playerSelection);
        console.log(computerSeclection);
        console.log("You Lose");
        ++computerScore;
        console.log(playerScore);
        console.log(computerScore);
    }
    else if (playerSelection === "scissors" && computerSeclection === "rock") {

        console.log(playerSelection);
        console.log(computerSeclection);
        console.log("You Lose"); 
        ++computerScore;
        console.log(playerScore);
        console.log(computerScore);
    } 
    else if (playerSelection === computerSeclection) {

        console.log(playerSelection);
        console.log(computerSeclection);
        console.log("Its a tie");
        console.log(playerScore);
        console.log(computerScore);
    }
    else {
        console.log("Please choose rock paper or scissors");
        console.log(playerScore);
        console.log(computerScore);
    }
    console.log("Press Up to play again");

}

    function game(playerSelection, computerSeclection) {
        for (i = 0; i < 5; i++) {
            console.log(playGame());

        
        }
        if (playerScore > computerScore) {
            console.log("Player Wins");
        }
        else if (playerScore < computerScore) {
            console.log ("Computer Wins");
        }
        console.log("Score resets");
        console.log(playerScore = 0);
        console.log(computerScore = 0);
        return ("Press up to play again");
    }
  