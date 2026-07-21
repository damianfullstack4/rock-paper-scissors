const choiceContainer = document.querySelector(`.choice`);
const human = document.querySelector(`.humanScore`);
const computer = document.querySelector(`.computerScore`);
const round = document.querySelector(`.round`);
const endDisplay = document.querySelector(`.message`);
const logDisplay = document.querySelector(`.log`);

let computerScore = 0, humanScore = 0;
let roundNum = 1;

choiceContainer.addEventListener(`click`, function(e){
    if(e.target.tagName === `IMG`){
        playRound(e.target.id, getComputerChoice())
        roundNum++;
        if(computerScore === 5 || humanScore === 5){
            endGame();
            return;
        }
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
    let logText = ``;
    let log = document.createElement(`p`);
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice){
        logText = `Tie! You both chose ` + humanChoice + `.`;

    }else if (
        (humanChoice === `rock` && computerChoice === `scissors`)||
        (humanChoice === `paper` && computerChoice === `rock`)||
        (humanChoice === `scissors` && computerChoice === `paper`)
    ) {

        logText = `Player wins! ` + humanChoice + ` beats ` + computerChoice + `.`;
        humanScore++;
        human.textContent = humanScore;
    }else{
        logText = `Computer wins! ` + computerChoice + ` beats ` + humanChoice + `.`;
        computerScore++;
        computer.textContent = computerScore;
    }
    log.textContent = `Round ` + roundNum + `: ` + logText;
    logDisplay.appendChild(log);
    logDisplay.scrollTop = logDisplay.scrollHeight;
}

function endGame(){
    let resultText = ``;

    let replay = document.createElement(`button`);
    replay.textContent = `Replay`;
    replay.className = `replay`;

    choiceContainer.classList.add(`hidden`);
    if(humanScore > computerScore){
        resultText = `Human wins!`;
    }else if(humanScore === computerScore){
        resultText = `Tie!`;
    }else{
        resultText = `Computer wins!`;
    }
    endDisplay.textContent = resultText;
    document.body.append(replay);
    replay.addEventListener(`click`, resetGame);

}

function resetGame(e){
    humanScore = 0;
    human.textContent = humanScore;
    computerScore = 0;
    computer.textContent = computerScore;
    roundNum = 1;
    round.textContent = roundNum;

    logDisplay.replaceChildren();
    endDisplay.textContent = ``;
    choiceContainer.classList.remove(`hidden`);
    e.target.remove();

}