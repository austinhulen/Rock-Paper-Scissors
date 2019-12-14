function computerPlay(){
    let selection = Math.floor(Math.random() * 3); 
    switch (selection){
        case 0: 
            return "Rock";
            break;
        case 1: 
            return "Paper";
            break;
        case 2: 
            return "Scissors";
            break;
        default: 
            return "Error";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    let playerAnswer = playerSelection.toLowerCase();
    switch (playerAnswer) {
        case "rock":
            if (computerSelection == "Scissors"){
                return 1;
            } else if (computerSelection == "Paper"){
                return -1;
            }else{
                return 0;
            }
            break;
        case "paper":
            if (computerSelection == "Rock"){
                    return 1;
                } else if (computerSelection == "Scissors"){
                    return -1;
                }else{
                    return 0;
                }
            break;
        case "scissors":
            if (computerSelection == "Paper"){
                    return 1;
                } else if (computerSelection == "Rock"){
                    return -1;
                }else{
                    return 0;
                }
            break;
        default:
            return "Error, you did not choose Rock, Paper, or Scissors.";
            break;
    }
}

function gameWinner(playerScore, computerScore){
    if(playerScore > computerScore){
        return "Congrats you win! \n Scoreboard \n You: " + playerScore + "\n Computer: " + computerScore;
    } else if (playerScore < computerScore){
        return "You Lose. \n Scoreboard \n You: " + playerScore + "\n Computer: " + computerScore;
    }else{
        return "Tie. \n Scoreboard \n You: " + playerScore + "\n Computer: " + computerScore;
    }
}

function game(playerChoice){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 1; i++){
        let computerChoice = computerPlay();
        let outcome = playRound(playerChoice, computerChoice);
        if (outcome == 1){
            console.log("You win!" + playerChoice + " beats " + computerChoice);
            playerScore++;
        }else if (outcome == -1){
            console.log("You lose." + computerChoice + " beats " + playerChoice);
           computerScore++;
        }else{
            console.log("Tie. You both chose " + playerChoice);
        }
    }
    console.log(gameWinner(playerScore, computerScore));
}

let btn = document.querySelector('#rock');
btn.addEventListener('click', () => {
  alert("Hello World");
});