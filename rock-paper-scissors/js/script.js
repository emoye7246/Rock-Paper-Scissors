function getComputerChoice(){
    const choice = ["Rock", "Paper", "scissors"];
    const choices = choice[Math.floor(Math.random() * choice.length)];

    // console.log(choices);

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

    if (choose == "rock" && choices == "paper"  ) {

        console.log(choose);
        console.log(choices);
        console.log("You Win");

    } 

    else if (choose == "rock" && choices == "scissors") {

        console.log(choose);
        console.log(choices);
        console.log("You Win");
    }

   else if (choose == "scissors" && choices == "paper") {

        console.log(choose);
        console.log(choices);
        console.log("You Win");
    }

   else if (choose == "scissors" && choices == "rock") {

        console.log(choose);
        console.log(choices);
        console.log("You Lose");
    }

   else if (choose == "paper" && choices == "rock") {
       
        console.log(choose);
        console.log(choices);
        console.log("You Win");
    }

   else if (choose == "paper" && choices == "scissors") {

        console.log(choose);
        console.log(choices);
        console.log("You Lose");
    }

   else if (choose == choices) {

        console.log(choose);
        console.log(choices);
        console.log("Its A Tie");
    } 
    else {
        console.log("Please choose Rock Paper or Scissors PS: Remember to capitlize the first letter of your choice");
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
console.log(play());

