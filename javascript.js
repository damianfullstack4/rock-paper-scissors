let computerScore = 0, humanScore = 0;

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);


function getComputerChoice(){
    let choice = Math.random();

    if(choice < (1/3)){
        return "rock";
    } else if(choice > (2/3)){
        return "paper";
    }else{
        return "scissors";
    }
}

function getHumanChoice(){
    return prompt("Enter rock, paper or scissors: ")
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors"){
        console.log("Invalid choice, aborting round...")
        return;
    }

    if (humanChoice === computerChoice){
        console.log("Tie! " + humanChoice + " ties with " + computerChoice + ".")
        return;

    }else if((humanChoice == "rock" && computerChoice == "scissors")||(humanChoice == "paper" && computerChoice == "rock")||(humanChoice == "scissors" && computerChoice == "paper")){
        console.log("Player wins! " + humanChoice + " beats " + computerChoice + ".")
        humanScore++;
        return;

    }else{
        console.log("Computer wins! " + computerChoice + " beats " + humanChoice + ".")
        computerScore++;
        return;
    }
}