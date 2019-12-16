let playerScore = 0;
let computerScore = 0;
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
        let computerChoice = computerPlay();
        let outcome = playRound(playerChoice, computerChoice);
        out.innerText = "You chose " + playerChoice + ". The computer chose " + computerChoice + ".";
        if (outcome == 1){
            playerScore++;
        }else if (outcome == -1){
           computerScore++;
        }else{
            out.innerText = "Tie. You both chose " + playerChoice;
        }
        players.innerText = "Player: " + playerScore + "\nComputer: " + computerScore;
        if (playerScore === 5){
            out.innerText = "Congrats you won the Game!";
        } else if (computerScore === 5){
            out.innerText = "Game Over. You lost.";
        }else return;

}

function newGame(){
    computerScore = 0;
    playerScore = 0;

}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(playerScore !== 5 && computerScore !== 5){
            game(`${e.srcElement.innerHTML}`);
        }

    });

});

const container = document.querySelector('#container');

const scoreboard = document.createElement('div');

scoreboard.classList.add('scoreboard');
const score = document.createElement('h2');
const players = document.createElement('p');
const out = document.createElement('p');
players.innerText = "Player: " + playerScore + "\nComputer: " + computerScore;
score.innerText = "Score";
out.innerText = "Pick Rock, Paper, or Scissors. First to get 5 points win."
scoreboard.appendChild(score);
scoreboard.appendChild(players);
scoreboard.appendChild(out);
container.appendChild(scoreboard);