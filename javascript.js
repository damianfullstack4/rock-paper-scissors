const choiceContainer = document.querySelector(`.container.choice`);
let computerScore = 0, humanScore = 0;
let round = 0;
choiceContainer.addEventListener(`click`, function(e){
    if(e.target.tagName === `BUTTON`){
        //console.log(e.target.textContent);
        playRound(e.target.textContent, getComputerChoice())
    }
});

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
/*
function playGame(){
    alert("Finals Scores:\nPlayer Score: " + humanScore + "  Computer Score: " + computerScore);
    console.log("Finals Scores:\nPlayer Score: " + humanScore + "  Computer Score: " + computerScore);
    if(humanScore > computerScore){
        console.log("Player wins!");
    }else if(humanScore === computerScore){
        console.log("Tie!");
    }else{
        console.log("Computer wins!");
    }
}
*/