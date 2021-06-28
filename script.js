function getIndex(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const options = ["rock", "paper", "scissor"];

function computerPlay(){
    let decision = options[getIndex(1,2)];
     return decision;
}

function whoWins(playerSelection, computerSelection){
    if(playerSelection == "rock" && computerSelection =="scissor"){
        console.log("Player Wins");
    } else if(playerSelection == "paper" && computerSelection == "rock"){
        console.log("Player Wins");
    } else if(playerSelection == "scissors" && computerSelection =="paper"){
        console.log("Player Wins");
    } else if( playerSelection == computerSelection){
        console.log("It's a TIE");
    } else {
        console.log("Computer Wins");
    }
}

function getUserInput(){
    let input = prompt("Enter a selection: ");
    let playerDecision = input.toLowerCase();
    if(options.includes(playerDecision)){
        return playerDecision;
    }else{
        console.log("invalid selection!");
        return null;
    }
}

function game(){

    for(let i = 0; i <5; i++){

        console.log("Please select an option: ");
        let playerSelection = getUserInput();
        while(playerSelection == null){
            playerSelection = getUserInput();
        }
    
        let computerSelection = computerPlay();
        
        console.log("Player chose: " + playerSelection);
        console.log("Computer chose: " + computerSelection);
        whoWins(playerSelection, computerSelection);
        console.log("###############################################################")
    }

}

game();