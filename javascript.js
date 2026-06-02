// Basic Javascript Rock Paper Scissors Browser Game //
let computerScore = 0, humanScore = 0;
playGame();

function playGame(){
    let humanChoice = null;
    let computerChoice = null;
    
    for(let i = 0; i < 5; i++){
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        
    }

    alert("Finals Scores:\nPlayer Score: " + humanScore + "  Computer Score: " + computerScore);
    console.log("Finals Scores:\nPlayer Score: " + humanScore + "  Computer Score: " + computerScore);
    if(humanScore > computerScore){
        console.log("Player wins!");
    }else if(humanScore === computerScore){
        console.log("Tie!");
    }else{
        console.log("Computer wins!");
    }

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();

        if(humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors"){
            alert("Invalid choice, aborting round...");
            return;
        }

        if (humanChoice === computerChoice){
            alert("Tie! " + humanChoice + " ties with " + computerChoice + ".");
            return;

        }else if((humanChoice == "rock" && computerChoice == "scissors")||(humanChoice == "paper" && computerChoice == "rock")||(humanChoice == "scissors" && computerChoice == "paper")){
            alert("Player wins! " + humanChoice + " beats " + computerChoice + ".");
            humanScore++;
            return;

        }else{
            alert("Computer wins! " + computerChoice + " beats " + humanChoice + ".");
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

