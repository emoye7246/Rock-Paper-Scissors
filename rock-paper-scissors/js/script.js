const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
const options = document.getElementById("#options");
const playerDisplay = document.getElementById("#playerDisplay");

const container = document.querySelector("#container");
const div = document.createElement("div");
div.classList.add("Paragraph");
div.textContent = `Player ${playerScore}`;
container.appendChild(div);

const computer = document.createElement("div");
computer.classList.add("second");
computer.textContent = `Computer ${computerScore}`;
container.appendChild(computer);

const li = document.querySelector("#player");








function getComputerChoice() {
  const  getComputerChoice = choices[Math.floor(Math.random() * choices.length)].toLowerCase();
    return (getComputerChoice);
}


function playGame(playerSelection) {

     computerSeclection = getComputerChoice();
    let result = "";

    if (playerSelection === "rock" && computerSeclection === "scissors") {

        console.log(playerSelection);
        console.log(computerSeclection);
        result = "You Win";
        console.log(result);
        ++playerScore;
        console.log(playerScore);
        console.log(computerScore);
       
    }
    else if (playerSelection === "paper" && computerSeclection === "rock") {

        console.log(playerSelection);
        console.log(computerSeclection);
        result = "You Win";
        console.log(result);
        ++playerScore;
        console.log(playerScore);
        console.log(computerScore);
    } 
    else if (playerSelection === "scissors" && computerSeclection === "paper") {

        console.log(playerSelection);
        console.log(computerSeclection);
        result = "You Win";
        console.log(result);
        ++playerScore;
        console.log(playerScore);
        console.log(computerScore);
    }
    else if (playerSelection === "rock" && computerSeclection === "paper") {

        console.log(playerSelection);
        console.log(computerSeclection);
        result = "You Lose";
        console.log(result);
        ++computerScore;
        console.log(playerScore);
        console.log(computerScore);
    }
    else if (playerSelection === "paper" && computerSeclection === "scissors") {

        console.log(playerSelection);
        console.log(computerSeclection);
        result = "You Lose";
        console.log(result);
        ++computerScore;
        console.log(playerScore);
        console.log(computerScore);
    }
    else if (playerSelection === "scissors" && computerSeclection === "rock") {

        console.log(playerSelection);
        console.log(computerSeclection);
        result = "You Lose";
        console.log(result);
        ++computerScore;
        console.log(playerScore);
        console.log(computerScore);
    } 
    else if (playerSelection === computerSeclection) {

        console.log(playerSelection);
        console.log(computerSeclection);
        result = "Its a Tie";
        console.log(result);
        console.log(playerScore);
        console.log(computerScore);
    }
    else {
        console.log("Please choose rock paper or scissors");
        console.log(playerScore);
        console.log(computerScore);
    }
    console.log("Press Up to play again");

    if (playerScore === 5 ) {
        console.log("PlayerOne Wins");
        console.log("Game Over");
        console.log(computerScore = 0);
        console.log(playerScore = 0);
    } else if (computerScore === 5) {
        console.log("Computer Wins");
        console.log("Game Over");
        console.log(computerScore = 0);
        console.log(playerScore = 0);
    }

}

function keepScore() {
    div.textContent = `Player ${playerScore}`;
    computer.textContent = `Computer ${computerScore}`

    
}

    function game(playerSelection) {
        const winner = document.querySelector("#winner");
    


        for (i = 0; i < 5; i++) {
            let playerScore = 0;
            let computerScore = 0;
            console.log(playGame(playerSelection));
            keepScore();
            if (result === "You Win") {
                ++playerScore
            } else if (result === "You Lose") {
                ++computerScore
            }
        
        }

        if (playerScore > computerScore) {
            winner.textContent= `PlayerOne Wins`;
        }
        else if (playerScore < computerScore) {
            winner.textContent = `Computer Wins`;
        }
        console.log("Score resets");
        console.log(playerScore = 0);
        console.log(computerScore = 0);
        return ("Press up to play again");
    }
    
  