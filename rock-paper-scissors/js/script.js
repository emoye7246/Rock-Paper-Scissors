let playerOneScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const choice = ["Rock", "Paper", "scissors"];
    const choices = choice[Math.floor(Math.random() * choice.length)];
    const compChoice = choices;
    console.log(choices);
    return choices;

    console.log(choices);

}
// getComputerChoice();


function play(playerSelection, computerSelection) {
    const Rock = "Rock";
    const Paper = "Paper";
    const Scissors = "Scissors";
    const choose = window.prompt("Do you choose Rock Paper or Scissors").toLowerCase();
    const choice = ["rock", "paper", "scissors"];
    const choices = choice[Math.floor(Math.random() * choice.length)];

      playerSelection = choose;
    computerSelection = choices;

    if (choose === "rock" && choices === "paper"  ) {

        console.log(choose);
        console.log(choices);
        console.log("You Win");
        ++playerOneScore;
        console.log(playerOneScore);
        console.log(computerScore);
        return ("Press up to play again");

    } 

    else if (choose === "rock" && choices === "scissors") {

        console.log(choose);
        console.log(choices);
        console.log("You Win");
        ++playerOneScore;
        console.log(playerOneScore);
        console.log(computerScore);
        return ("Press up to play again");
    }

   else if (choose === "scissors" && choices === "paper") {

        console.log(choose);
        console.log(choices);
        console.log("You Win");
        ++playerOneScore;
        console.log(playerOneScore);
        console.log(computerScore);
       return ("Press up to play again");
    }

   else if (choose === "scissors" && choices === "rock") {

        console.log(choose);
        console.log(choices);
        console.log("You Lose");
        ++computerScore;
        console.log(playerOneScore);
        console.log(computerScore);
        
       return ("Press up to play again");
    }

   else if (choose === "paper" && choices === "rock") {
       
        console.log(choose);
        console.log(choices);
        console.log("You Win");
        ++playerOneScore;
        console.log(playerOneScore);
        console.log(computerScore);
       return ("Press up to play again");
    }

   else if (choose === "paper" && choices === "scissors") {

        console.log(choose);
        console.log(choices);
        console.log("You Lose");
        ++computerScore;
        console.log(playerOneScore);
        console.log(computerScore);
       return ("Press up to play again");
    }

   else if (choose === choices) {

        console.log(choose);
        console.log(choices);
        console.log("Its A Tie");
       return ("Press up to play again");
    } 
    else {
        console.log("Please choose Rock Paper or Scissors");
    }

    return ("Press up to play again");





    
    // if (time < 10) {
    //     greeting = "Good morning";
    //   } else if (time < 20) {
    //     greeting = "Good day";
    //   } else {
    //     greeting = "Good evening";
    //   }
    
    
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(play(playerSelection, computerSelection));

function playGame() {
    console.log("Hello World");
}