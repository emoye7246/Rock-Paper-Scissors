const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
const options = document.getElementById("#options");
const playerDisplay = document.getElementById("#playerDisplay");

// Player one score ui i know this is considered bad code based off top im aware just let me be me for now
const container = document.querySelector("#container");
const div = document.createElement("div");
div.classList.add("Paragraph");
div.textContent = `Player ${playerScore}`;
container.appendChild(div);

// Computer Score Ui
const computer = document.createElement("div");
computer.classList.add("second");
computer.textContent = `Computer ${computerScore}`;
container.appendChild(computer);

// Computer and playerSelection  results Ui
const li = document.querySelector("#player");
const opp = document.querySelector("#computer");

// Winner results UI
const winner = document.querySelector("#winner");

// Outcome results UI

const outcome = document.querySelector("#outcome");



function getComputerChoice() {
  const  getComputerChoice = choices[Math.floor(Math.random() * choices.length)].toLowerCase();
    return (getComputerChoice);
}


function playGame(playerSelection) {

   
    computerSeclection = getComputerChoice();
     
    let result = "";

    if (playerSelection === "rock" && computerSeclection === "scissors") {

        console.log(playerSelection);
        li.textContent = `PlayerOne chooses ${playerSelection}`;
        console.log(computerSeclection);
        opp.textContent = `Computer chooses ${computerSeclection}`
        result = "You Win";
        console.log(result);
        outcome.textContent = `${result}`;
        playerScore++;
        console.log(playerScore);
        console.log(computerScore);
        keepScore();
    }
    else if (playerSelection === "paper" && computerSeclection === "rock") {

        console.log(playerSelection);
        li.textContent = `PlayerOne chooses ${playerSelection}`;
        console.log(computerSeclection);
        opp.textContent = `Computer chooses ${computerSeclection}`
        result = "You Win";
        console.log(result);
        outcome.textContent = `${result}`;
        playerScore++;
        console.log(playerScore);
        console.log(computerScore);
        keepScore();
    } 
    else if (playerSelection === "scissors" && computerSeclection === "paper") {

        console.log(playerSelection);
        li.textContent = `PlayerOne chooses ${playerSelection}`;
        console.log(computerSeclection);
        opp.textContent = `Computer chooses ${computerSeclection}`
        result = "You Win";
        console.log(result);
        outcome.textContent = `${result}`;
        playerScore++;
        console.log(playerScore);
        console.log(computerScore);
        keepScore();
    }
    else if (playerSelection === "rock" && computerSeclection === "paper") {

        console.log(playerSelection);
        li.textContent = `PlayerOne chooses ${playerSelection}`;
        console.log(computerSeclection);
        opp.textContent = `Computer chooses ${computerSeclection}`
        result = "You Lose";
        console.log(result);
        outcome.textContent = `${result}`;
        computerScore++;
        console.log(playerScore);
        console.log(computerScore);
        keepScore();
    }
    else if (playerSelection === "paper" && computerSeclection === "scissors") {

        console.log(playerSelection);
        li.textContent = `PlayerOne chooses ${playerSelection}`;
        console.log(computerSeclection);
        opp.textContent = `Computer chooses ${computerSeclection}`
        result = "You Lose";
        console.log(result);
        outcome.textContent = `${result}`;
        computerScore++;
        console.log(playerScore);
        console.log(computerScore);
        keepScore();
    }
    else if (playerSelection === "scissors" && computerSeclection === "rock") {

        console.log(playerSelection);
        li.textContent = `PlayerOne chooses ${playerSelection}`;
        console.log(computerSeclection);
        opp.textContent = `Computer chooses ${computerSeclection}`
        result = "You Lose";
        console.log(result);
        outcome.textContent = `${result}`;
        computerScore++;
        console.log(playerScore);
        console.log(computerScore);
        keepScore();
    } 
    else if (playerSelection === computerSeclection) {

        console.log(playerSelection);
        li.textContent = `PlayerOne chooses ${playerSelection}`;
        console.log(computerSeclection);
        opp.textContent = `Computer chooses ${computerSeclection}`
        result = "Its a Tie";
        console.log(result);
        outcome.textContent = `${result}`;
        console.log(playerScore);
        console.log(computerScore);
        keepScore();
    }
    else {
        console.log("Please choose rock paper or scissors");
        console.log(playerScore);
        console.log(computerScore);
        
    }
    console.log("RPS");

    if (playerScore === 3 ) {
        console.log("PlayerOne Wins");
        console.log("Game Over");
        winner.textContent = `PlayerOne Wins`;
        console.log(computerScore = 0);
        console.log(playerScore = 0);
    } else if (computerScore === 3) {
        console.log("Computer Wins");
        console.log("Game Over");
        winner.textContent = `Computer Wins`;
        console.log(computerScore = 0);
        console.log(playerScore = 0);
    }

}

function keepScore() {
    div.textContent = `Player ${playerScore}`;
    computer.textContent = `Computer ${computerScore}`;

}
