let computerScore = 0;
let humanScore = 0;

function getComputerChoice(){
    let computerChoice = Math.random();
    if ((computerChoice >= 0) && (computerChoice <= 0.33))
        return "ROCK"; 
    else if ((computerChoice > 0.33) && (computerChoice <= 0.66))
        return "PAPER";
    else
        return "SCISSORS"
}

function getHumanChoice(){
    let humanChoice = prompt("Enter rock, paper or scissors");
    console.log(humanChoice);
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.ToUpperCase();
    
    // COMPUTER CHOICE ROCK!
    if ((computerChoice == "ROCK") && (humanChoice == "PAPER"))
        console.log("You win,  PAPER beats ROCK!");
        humanScore += 1;;
    elseif((computerChoice == "ROCK") && (humanChoice == "SCISSORS"))
        console.log("You lose, ROCK beats SCISSORS!");
        computerScore += 1;
    
    // COMPUTER CHOICE PAPER!
    elseif ((computerChoice == "PAPER") && (humanChoice == "ROCK"))
        console.log("You lose, PAPER beats ROCK");
        computerScore += 1;
    elseif ((computerChoice == "PAPER") && (humanChoice == "SCISSORS"))
        console.log("You win, SCISSORS beats PAPER!");
        humanScore += 1;

    // COMPUTER CHOICE SCISSORS!
    elseif ((computerChoice == "SCISSORS") && (humanChoice == "ROCK"))
        console.log("You win, ROCK beats SCISSORS!");
        humanScore += 1;
    elseif ((computerChoice == "SCISSORS") && (humanChoice == "PAPER"))
        console.log("You lose, SCISSORS beats PAPER!");
        computerScore += 1;
    
    // DRAW
    elseif ((computerChoice == humanChoice))
        console.log("It's a draw!")

    // INVALID VALUES
    else 
        console.log("Enter valid values!");
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(computerSelection, humanSelection);

// function playRound(computerChoice, humanChoice){


/** 
if ((humanChoice >= 0) && (humanChoice <= 0.33))
    return "Rock";
else if ((humanChoice > 0.33) && (humanChoice <= 0.66))
    return "Paper";
else 
    return "Scissors";
**/