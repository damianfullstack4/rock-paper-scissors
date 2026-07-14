const choiceContainer = document.querySelector(`.container.choice`);
const human = document.querySelector(`.humanScore`);
const computer = document.querySelector(`.computerScore`);
const round = document.querySelector(`.round`);

let computerScore = 0, humanScore = 0;
let roundNum = 1;

choiceContainer.addEventListener(`click`, function(e){
    if(e.target.tagName === `BUTTON`){
        playRound(e.target.textContent, getComputerChoice())
        roundNum++;
        // end game here before round update //
        round.textContent = roundNum;
    }
});

function getComputerChoice(){
    let choice = Math.random();

    if(choice < (1/3)){
        return `rock`;
    } else if(choice > (2/3)){
        return `paper`;
    }else{
        return `scissors`;
    }
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    alert(`The computer chose ` + computerChoice);

    if(humanChoice != `rock` && humanChoice != `paper` && humanChoice != `scissors`){
        alert(`Invalid choice, aborting round...`);
        return;
    }

    if (humanChoice === computerChoice){
        alert(`Tie! You both chose ` + humanChoice + `.`);
        roundNum--;
        return;

    }else if((humanChoice == `rock` && computerChoice == `scissors`)||(humanChoice == `paper` && computerChoice == `rock`)||(humanChoice == `scissors` && computerChoice == `paper`)){
        alert(`Player wins! ` + humanChoice + ` beats ` + computerChoice + `.`);
        humanScore++;
        human.textContent = humanScore;
        return;

    }else{
        alert(`Computer wins! ` + computerChoice + ` beats ` + humanChoice + `.`);
        computerScore++;
        computer.textContent = computerScore;
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