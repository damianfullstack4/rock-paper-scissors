// Basic Javascript Rock Paper Scissors Browser Game //
let computerScore = 0, humanScore = 0;
playGame();
console.log("Finals Scores:\nPlayer Score: " + humanScore + "  Computer Score: " + computerScore);

function playGame(){
    let humanChoice = null;
    let computerChoice = null;
    
    for(let i = 0; i < 5; i++){
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        
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
        return prompt("Enter rock, paper or scissors\nPlayer Score: " + humanScore + "  Computer Score: " + computerScore);
    }
}

