function getComputerChoice(){
    const choice = ["Rock", "Paper", "Scissors"];
    const choices = choice[Math.floor(Math.random() * choice.length)];

    // console.log(choices);

}
// getComputerChoice();

function play(playerSelection, computerSelection) {
    const Rock = "Rock";
    const Paper = "Paper";
    const Scissors = "Scissors";
    const choose = window.prompt("Do you choose Rock Paper or Scissors");
    const choice = ["Rock", "Paper", "Scissors"];
    const choices = choice[Math.floor(Math.random() * choice.length)];

    playerSelection = choose;
    computerSelection = choices;

    if (choose == "Rock" && choices == "Paper"  ) {

        console.log(choose);
        console.log(choices);
        console.log("You Win");

    } 

    else if (choose == "Rock" && choices == "Scissors") {

        console.log(choose);
        console.log(choices);
        console.log("You Lose");
    }

   else if (choose == "Scissors" && choices == "Paper") {

        console.log(choose);
        console.log(choices);
        console.log("You Win");
    }

   else if (choose == "Scissors" && choices == "Rock") {

        console.log(choose);
        console.log(choices);
        console.log("You Lose");
    }

   else if (choose == "Paper" && choices == "Rock") {
       
        console.log(choose);
        console.log(choices);
        console.log("You Win");
    }

   else if (choose == "Paper" && choices == "Scissors") {

        console.log(choose);
        console.log(choices);
        console.log("You Lose");
    }

   else if (choose == choices) {

        console.log(choose);
        console.log(choices);
        console.log("Its A Tie");
    } else {
        console.log("Please choose Rock Paper or Scissors");
    }





    
    // if (time < 10) {
    //     greeting = "Good morning";
    //   } else if (time < 20) {
    //     greeting = "Good day";
    //   } else {
    //     greeting = "Good evening";
    //   }
    
    
}
play();