console.log(getComputerChoice());

console.log(getHumanChoice());
const computerScore = 0, humanScore = 0;
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