let computerPlay = () => {
    return Math.floor(Math.random()*3)+1;
}

let inputInt = (userInput) =>{
    if(userInput.toLowerCase() == "rock"){
        return 1;
    }
    else if(userInput.toLowerCase() == "paper"){
        return 2;
    }
    else if(userInput.toLowerCase() == "scissors"){
        return 3;
    }
}
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){
        console.log("It's a tie");
    }
    else if(playerSelection == 3 && computerSelection == 1){
        console.log("You lose! Rock beats scissors");
        computerScore++;
    }
    else if(playerSelection == 1 && computerSelection == 2){
        console.log("You lose! Paper beats rock");
        computerScore++;
    }
    else if(playerSelection == 2 && computerSelection == 3){
        console.log("You lose! Scissors beat paper");
        computerScore++;
    }
    else if(playerSelection == 1 && computerSelection == 3){
        console.log("You win! Rock beats scissors");
        playerScore++;
    }
    else if(playerSelection == 2 && computerSelection == 1){
        console.log("You win! Paper beats rock");
        playerScore++;
    }
    else if(playerSelection == 3 && computerSelection == 1){
        console.log("You win! Scissors beat paper");
        playerScore++;
    }
}


let game = () => {
    for(let i = 0; i<5;i++){
        let userInput = prompt("Rock, Paper or Scissors?",'');
        const playerSelection = inputInt(userInput);
        const computerSelection = computerPlay();
        console.log(computerSelection);
        console.log(playerSelection);
        playRound(playerSelection, computerSelection);
    }
    console.log(`Your score: ${playerScore}, Computer's score: ${computerScore}`);
    if(computerScore > playerScore){
        console.log("You Lost the match D:");
    }
    else{
        console.log("You Won the match :D");
    }
    
}
game();

