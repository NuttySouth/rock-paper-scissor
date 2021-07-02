const options = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
const display = document.getElementById('UI');
const computerScoreH2 = document.createElement('h2');
const playerScoreH2 = document.createElement('h2');
const playerUISelection = document.createElement('h2');
const computerUISelection = document.createElement('h2');
const winnerDeclaration = document.createElement('h2');
display.appendChild(computerScoreH2);
display.appendChild(playerScoreH2);
display.appendChild(playerUISelection);
display.appendChild(computerUISelection);
display.appendChild(winnerDeclaration);

const btns = document.getElementsByClassName('btn');
Array.from(btns).forEach(btn =>{
    btn.addEventListener('click',getPlayerSelection);
})

function getIndex(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function computerSelection(){
    return options[getIndex(0,2)];
}

function getPlayerSelection(event){
    const button = event.target;
    let playerSelection = button.value;
    playRound(playerSelection, computerSelection());
}

function whoWins(playerSelection, computerSelection){
    selectionDOM(playerSelection, computerSelection);
    if(playerSelection == "rock" && computerSelection =="scissors"){
        return 0;
    } else if(playerSelection == "paper" && computerSelection == "rock"){
        return 0;
    } else if(playerSelection == "scissors" && computerSelection =="paper"){
        return 0;
    } else if( playerSelection == computerSelection){
        return -1;
    } else {
        return 1;
    }
}

function playRound(playerSelection, computerSelection){

    let whoWinsResult = whoWins(playerSelection, computerSelection);
    if(whoWinsResult == 0){
        playerScore++;
    }else if(whoWinsResult == 1){
        computerScore++;
    }
    updateScoreDOM();
    if(playerScore == 5 || computerScore == 5 ){
        if(playerScore == 5){
            declareWinner("Player");
        }else{
            declareWinner("Computer");
        }
        initGame();
    }
}


function updateScoreDOM(){
    computerScoreH2.textContent = "Computer Score: " + computerScore;
    playerScoreH2.textContent = "Player Score: " + playerScore;

}

function selectionDOM(playerSelection, computerSelection){

    playerUISelection.textContent = "Player Selected: " + playerSelection;
    computerUISelection.textContent = "Computer Selected: " + computerSelection;

}

function declareWinner(winner){    
    winnerDeclaration.textContent = winner + " won the game!";
}


function initGame(){
    rounds = 0;
    playerScore = 0;
    computerScore = 0;
}