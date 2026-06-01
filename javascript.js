console.log(getComputerChoice());

console.log(getHumanChoice());

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