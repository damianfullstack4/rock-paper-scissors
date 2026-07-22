const choiceContainer = document.querySelector(`.choice`);
const human = document.querySelector(`.humanScore`);
const computer = document.querySelector(`.computerScore`);
const round = document.querySelector(`.round`);
const endDisplay = document.querySelector(`.message`);
const logDisplay = document.querySelector(`.log`);
const replayBtn = document.querySelector(`.restart button`);

const choices = [`rock`, `paper`, `scissors`];

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

replayBtn.addEventListener(`click`, resetGame);

function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
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
    choiceContainer.classList.add(`hidden`);
    replayBtn.classList.remove(`hidden`);
    if(humanScore > computerScore){
        endDisplay.textContent = `Human wins!`;
    }else if(humanScore === computerScore){
        endDisplay.textContent = `Tie!`;
    }else{
        endDisplay.textContent = `Computer wins!`;
    }
}

// 
function resetGame(){
    humanScore = 0;
    human.textContent = humanScore;
    computerScore = 0;
    computer.textContent = computerScore;
    roundNum = 1;
    round.textContent = roundNum;

    logDisplay.replaceChildren();
    endDisplay.textContent = ``;
    choiceContainer.classList.remove(`hidden`);
    replayBtn.classList.add(`hidden`);
}