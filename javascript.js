const choiceContainer = document.querySelector(`.choice`);
const human = document.querySelector(`.humanScore`);
const computer = document.querySelector(`.computerScore`);
const round = document.querySelector(`.round`);
const endDisplay = document.querySelector(`.message`);
const logDisplay = document.querySelector(`.log`);

const WIN_SCORE = 5;

let computerScore = 0, humanScore = 0;
let roundNum = 1;

choiceContainer.addEventListener(`click`, function(e){
    const currentButton = e.target.closest(`button`);
    if(!currentButton){ return; }

    playRound(currentButton.id, getComputerChoice())
    if(computerScore === WIN_SCORE || humanScore === WIN_SCORE){
        endGame();
        return;
    }
    roundNum++;
    round.textContent = roundNum;
});

// Clean up with array for readability //
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

// Use a get winner function //
function playRound(humanChoice, computerChoice){
    let logText = ``;
    const log = document.createElement(`p`);
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice){
        logText = `Tie! You both chose ${humanChoice}.`;

    }else if (
        (humanChoice === `rock` && computerChoice === `scissors`)||
        (humanChoice === `paper` && computerChoice === `rock`)||
        (humanChoice === `scissors` && computerChoice === `paper`)
    ) {

        logText = `Human Wins! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
        human.textContent = humanScore;

    }else{
        logText = `Computer Wins! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
        computer.textContent = computerScore;
    }
    log.textContent = `Round ${roundNum}: ${logText}`;
    logDisplay.appendChild(log);
    logDisplay.scrollTop = logDisplay.scrollHeight;
}

function endGame(){
    let resultText = ``;

    const replay = document.createElement(`button`);
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

// 
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