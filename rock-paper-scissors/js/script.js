function getComputerChoice(){
    const choice = ["Rock", "Paper", "Scissors"];
    const choices = choice[Math.floor(Math.random() * choice.length)];

    console.log(choices);

}
getComputerChoice();